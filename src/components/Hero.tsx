
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-10">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(245,245,245,0.8)_0%,rgba(250,250,250,0.9)_100%)]"
        aria-hidden="true"
      />
      
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10">
        <span 
          className={`inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10 
            ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
        >
          Introducing Spark
        </span>
        
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-balance
            ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
        >
          The digital product 
          <br className="hidden sm:inline" /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            for your next project
          </span>
        </h1>
        
        <p 
          className={`max-w-2xl text-lg md:text-xl text-muted-foreground text-balance leading-relaxed
            ${mounted ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}
        >
          Our cutting-edge platform empowers teams to build better products, faster. 
          Designed with simplicity and performance in mind.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 pt-4
            ${mounted ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}
        >
          <a 
            href="#features" 
            className="inline-flex h-12 px-8 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover-lift"
          >
            Get Started
          </a>
          <a 
            href="#pricing" 
            className="inline-flex h-12 px-8 items-center justify-center rounded-md border border-input bg-background text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover-lift"
          >
            View Pricing
          </a>
        </div>
      </div>
      
      <div 
        className={`w-full max-w-6xl mx-auto mt-16 md:mt-20 lg:mt-24 px-4
          ${mounted ? 'animate-blur-in animate-delay-500' : 'opacity-0'}`}
      >
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-secondary/60 to-secondary overflow-hidden rounded-2xl border border-border/40 shadow-lg">
          <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-medium">Application Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
