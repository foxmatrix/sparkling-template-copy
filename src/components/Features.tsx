
import { useEffect, useState } from 'react';

const features = [
  {
    title: "Intuitive Design",
    description: "Our user-friendly interface means your team can get started without a lengthy onboarding process.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  },
  {
    title: "Lightning Fast",
    description: "Performance is at our core. Experience blazing fast load times and smooth interactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="m13 2-2 2.5h3L12 10" /><path d="M9.5 12H4l2.5 3" /><path d="M13 22V12" /><path d="M15 12h5" /><path d="m18 10 2 2-2 2" />
      </svg>
    )
  },
  {
    title: "Built to Scale",
    description: "Whether you're a startup or enterprise, our platform grows with you without compromising performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 12a9 9 0 1 1-9-9" /><path d="M15.33 21.96a9 9 0 0 0 5.66-5.66" /><path d="m12 7 5 5-5 5" />
      </svg>
    )
  },
  {
    title: "Seamless Integration",
    description: "Connect effortlessly with your existing tools and workflows with our extensive API and integration options.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22v-8" /><path d="M9 14h6" /><path d="M3 10h18" /><path d="m17 6-2-2-2 2" /><path d="M7 8V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2" />
      </svg>
    )
  },
  {
    title: "Data Security",
    description: "Your data is protected with enterprise-grade security measures and compliance with industry standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    title: "AI Powered",
    description: "Harness the power of artificial intelligence to automate tasks and gain valuable insights from your data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
];

const Features = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.feature-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`text-3xl md:text-4xl font-medium tracking-tight mb-4 
            ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            Crafted for Excellence
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto 
            ${mounted ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Every feature is designed with precision and purpose to elevate your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card opacity-0 p-6 rounded-xl border border-border/60 bg-card/30 transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
