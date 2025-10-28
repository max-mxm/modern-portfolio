"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Toast from "../../components/Toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Champ piège invisible pour les bots
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // Anti-spam : Horodatage du chargement du formulaire
  const formLoadTime = useRef(Date.now());

  // Anti-spam : Détection d'interaction utilisateur
  const [userInteracted, setUserInteracted] = useState(false);

  // URL du webhook n8n
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  useEffect(() => {
    // Détection d'interaction utilisateur (mouvement de souris, toucher)
    const handleInteraction = () => setUserInteracted(true);

    window.addEventListener('mousemove', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Validation de l'email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation du nom (au moins 2 caractères)
  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Validation du sujet (au moins 3 caractères)
  const validateSubject = (subject) => {
    return subject.trim().length >= 3;
  };

  // Validation du message (au moins 10 caractères)
  const validateMessage = (message) => {
    return message.trim().length >= 10;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validation en temps réel
    let error = "";
    switch (name) {
      case "name":
        if (!validateName(value) && value.length > 0) {
          error = "Le nom doit contenir au moins 2 caractères";
        }
        break;
      case "email":
        if (!validateEmail(value) && value.length > 0) {
          error = "Email invalide";
        }
        break;
      case "subject":
        if (!validateSubject(value) && value.length > 0) {
          error = "Le sujet doit contenir au moins 3 caractères";
        }
        break;
      case "message":
        if (!validateMessage(value) && value.length > 0) {
          error = "Le message doit contenir au moins 10 caractères";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }

    if (!validateSubject(formData.subject)) {
      newErrors.subject = "Le sujet doit contenir au moins 3 caractères";
    }

    if (!validateMessage(formData.message)) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ===== PROTECTION ANTI-SPAM =====

    // 1. Vérification du champ honeypot (piège à bots)
    if (formData.honeypot !== "") {
      console.log("Bot détecté : honeypot rempli");
      // Ne pas afficher d'erreur pour ne pas alerter le bot
      setStatus({ loading: false });
      return;
    }

    // 2. Vérification du temps de remplissage (minimum 3 secondes)
    const timeTaken = Date.now() - formLoadTime.current;
    if (timeTaken < 3000) {
      showToast("Veuillez prendre le temps de remplir le formulaire correctement.", "error");
      return;
    }

    // 3. Vérification d'interaction utilisateur
    if (!userInteracted) {
      console.log("Bot détecté : aucune interaction utilisateur");
      setStatus({ loading: false });
      return;
    }

    // 4. Vérification de patterns de spam dans le contenu
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'click here', 'buy now', 'limited offer'];
    const messageContent = `${formData.name} ${formData.subject} ${formData.message}`.toLowerCase();
    const hasSpam = spamKeywords.some(keyword => messageContent.includes(keyword));

    if (hasSpam) {
      showToast("Votre message contient du contenu suspect. Veuillez reformuler.", "error");
      return;
    }

    // 5. Vérification de liens suspects (plus de 2 liens dans le message)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlMatches = formData.message.match(urlRegex) || [];
    if (urlMatches.length > 2) {
      showToast("Trop de liens dans votre message. Veuillez limiter les liens.", "error");
      return;
    }

    // ===== FIN PROTECTION ANTI-SPAM =====

    // Validation avant envoi
    if (!validateForm()) {
      showToast("Veuillez corriger les erreurs dans le formulaire", "error");
      return;
    }

    // Vérification du webhook
    if (!WEBHOOK_URL) {
      showToast("Configuration du webhook manquante. Veuillez contacter l'administrateur.", "error");
      return;
    }

    setStatus({ loading: true });

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "Portfolio Contact Form",
          // Métadonnées anti-spam pour n8n
          antiSpam: {
            formLoadTime: formLoadTime.current,
            submitTime: Date.now(),
            timeTaken: timeTaken,
            userInteracted: userInteracted
          }
        }),
      });
console.log("WEBHOOK_URL", WEBHOOK_URL)
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setStatus({ loading: false });
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      setErrors({});
      showToast("Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.", "success");
    } catch (error) {
      setStatus({ loading: false });
      showToast(error.message || "Une erreur est survenue lors de l'envoi", "error");
    }
  };

  return (
    <div className="h-full bg-primary/30">
      {/* Toast Notification */}
      <Toast
        message={toast.show ? toast.message : ""}
        type={toast.type}
        onClose={() => setToast({ show: false, message: "", type: "success" })}
      />

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Restons en <span className="text-accent">contact</span>.
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot - Champ invisible pour piéger les bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            {/* input group */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom *"
                  className={`input ${errors.name ? "border-red-500 border-2" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.loading}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className={`input ${errors.email ? "border-red-500 border-2" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.loading}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Sujet *"
                className={`input ${errors.subject ? "border-red-500 border-2" : ""}`}
                value={formData.subject}
                onChange={handleChange}
                disabled={status.loading}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1 ml-2">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message *"
                className={`textarea ${errors.message ? "border-red-500 border-2" : ""}`}
                value={formData.message}
                onChange={handleChange}
                disabled={status.loading}
                rows="6"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {status.loading ? "Envoi..." : "Contactez-moi"}
              </span>
              <span className="absolute translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {status.loading ? "Envoi..." : "Envoyer"}
              </span>
            </button>
          </motion.form>

          {/* Iframe n8n form           <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-12 w-full"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-medium text-white mb-4 text-center">
                Formulaire de prise de rendez-vous
              </h3>
              <iframe
                src="https://n8n.srv813148.hstgr.cloud/form-test/601e2edb-b834-4d1c-9b19-c1a72ce85c93"
                className="w-full h-[600px] border-0 rounded-md"
                title="Formulaire de prise de rendez-vous"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </motion.div>*/}

        </div>
      </div>
    </div>
  );
};

export default Contact;
