
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative hero-gradient">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fast & Safe <span className="text-primary">Boda Boda</span> Rides at Your Fingertips
            </h1>
            
            <p className="text-lg text-gray-600">
              Book verified motorcycle taxis through Kenya's leading digital platform. Quick rides, reliable drivers, and transparent pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-orange-light text-white">
                  Book a Ride 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/drivers">
                <Button variant="outline" size="lg">
                  Become a Driver
                </Button>
              </Link>
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Vetted Drivers</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Quick Pickup</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Live Tracking</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1617721926586-4323f2ce2fb9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Boda Boda rider in Kenya" 
                className="object-cover w-full h-full rounded-lg shadow-xl"
              />
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Rider Profile" 
                    className="w-12 h-12 rounded-full border-2 border-primary"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">James M.</p>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-xs">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
