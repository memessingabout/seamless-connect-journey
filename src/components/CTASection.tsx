
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1470&h=500')] opacity-10 bg-cover bg-center"></div>
          <div className="relative p-8 md:p-12 text-white max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Commute?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of satisfied customers enjoying safe, reliable and affordable boda boda rides across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-orange-light text-white w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-secondary border-white w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
