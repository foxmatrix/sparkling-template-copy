
import { useEffect, useState } from 'react';

const testimonials = [
  {
    content: "Integrating Spark into our workflow has cut our development time in half. The intuitive interface makes complex tasks simple.",
    author: "Sarah Johnson",
    role: "CTO at TechFlow"
  },
  {
    content: "The attention to detail in Spark's design is unmatched. It's rare to find a product that's both powerful and a joy to use.",
    author: "Michael Chen",
    role: "Product Designer at Envision"
  },
  {
    content: "After trying numerous solutions, Spark stands out for its performance and reliability. It's become an essential tool for our team.",
    author: "Sophia Rodriguez",
    role: "Engineering Lead at InnovateCorp"
  }
];

const Testimonials = () => {
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

    document.querySelectorAll('.testimonial-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`text-3xl md:text-4xl font-medium tracking-tight mb-4 
            ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            Trusted by Innovators
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto 
            ${mounted ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Hear from the teams that have transformed their workflows with Spark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card opacity-0 p-8 rounded-xl bg-background border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <svg className="h-8 w-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
