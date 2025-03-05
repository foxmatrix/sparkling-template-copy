
import { useEffect, useState } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer id="contact" className="bg-secondary py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="text-primary font-medium text-xl block mb-4">
              Spark
            </a>
            <p className="text-muted-foreground max-w-xs mb-6">
              Empowering teams to build exceptional products with elegant, high-performance tools.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'facebook', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-background text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${social} profile`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === 'twitter' && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    )}
                    {social === 'github' && (
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    )}
                    {social === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}
                    {social === 'instagram' && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Testimonials', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Terms', 'Privacy', 'Cookies', 'Licenses'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-border/60 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground
          ${mounted ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}
        >
          <p>© {new Date().getFullYear()} Spark. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with precision for optimal performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
