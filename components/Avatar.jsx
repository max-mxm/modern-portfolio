import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      {/* Avatar container avec effet circulaire */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Cercle de fond avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-full blur-3xl"></div>

        {/* Avatar image avec bordure circulaire */}
        <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={500}
            height={500}
            className="translate-z-0 w-full h-full object-cover"
            priority
          />
        </div>

        {/* Anneau externe décoratif */}
        <div className="absolute inset-0 w-[500px] h-[500px] mx-auto my-auto rounded-full border-2 border-accent/10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Avatar;
