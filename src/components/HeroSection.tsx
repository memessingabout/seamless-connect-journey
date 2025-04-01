
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622905810727-84073de21101?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1920&h=1080')] opacity-15 bg-cover bg-center"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Safe & Reliable Boda Rides Across Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 max-w-xl">
            Book a ride in seconds, track your driver in real-time, and enjoy a 
            cashless experience with Digital Boda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/ride-booking">
              <Button size="lg" className="bg-primary hover:bg-orange-light text-white">
                Book a Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/drivers">
              <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-secondary border-white">
                Become a Driver
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
