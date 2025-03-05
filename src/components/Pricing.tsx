
import { useEffect, useState } from 'react';
import { CheckIcon } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small projects",
    features: [
      "5 project limits",
      "Basic analytics",
      "24-hour support response time",
      "10GB storage",
      "Standard export options"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "6-hour support response time",
      "50GB storage",
      "Priority export options",
      "Custom integrations",
      "Team collaboration tools"
    ],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited everything",
      "Real-time analytics",
      "1-hour support response time",
      "Unlimited storage",
      "All export options",
      "Custom development",
      "Dedicated account manager",
      "On-premise deployment option"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const Pricing = () => {
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

    document.querySelectorAll('.pricing-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`text-3xl md:text-4xl font-medium tracking-tight mb-4 
            ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto 
            ${mounted ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Choose the plan that's right for your workflow and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card opacity-0 p-8 rounded-xl bg-background border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 
                ${plan.popular ? 'ring-2 ring-primary/20 shadow-md' : ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-medium">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`inline-flex w-full justify-center h-10 px-6 items-center rounded-md text-sm font-medium shadow-sm transition-colors
                  ${plan.popular 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}
                `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
