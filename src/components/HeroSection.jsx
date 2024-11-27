const HeroSection = ({ title, subtitle, videoUrl }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white mt-0">
      {videoUrl && (
        <video
          className="absolute w-full h-full object-cover opacity-50"
          src={videoUrl}
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="relative text-center ">
        <h1 className="text-4xl md:text-6xl  font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;