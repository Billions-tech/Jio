const HeroSection = ({ title, subtitle, videoUrl }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white ">
      {videoUrl && (
        <video
          className="absolute w-full h-full object-cover opacity-50"
          src={videoUrl}
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold animate-fade-slide-in">
          {title}
        </h1>
        <p className="mt-2 text-lg md:text-xl italic text-yellow-500 animate-fade">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
