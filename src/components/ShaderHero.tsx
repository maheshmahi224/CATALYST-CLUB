import { ShaderAnimation } from "./ui/shader-animation";

const ShaderHero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <ShaderAnimation />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-none tracking-tighter mb-4 animate-fade-in">
          CATALYST CLUB
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 text-center font-medium animate-fade-in" style={{animationDelay: "0.3s"}}>
          BRINGING TECH CLOSE TO YOU
        </p>
      </div>
    </section>
  );
};

export default ShaderHero;
