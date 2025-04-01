
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Package, 
  Briefcase, 
  Clock,
  MessageSquare,
  ShieldCheck,
  Star,
  Layers
} from 'lucide-react';

const services = [
  {
    title: "Passenger Transport",
    description: "Get from A to B quickly and safely with our verified riders. Perfect for daily commutes, avoiding traffic jams, or reaching destinations not easily accessible by car.",
    icon: User,
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Package Delivery",
    description: "Need to send a package across town? Our riders can pick up and deliver small to medium-sized packages quickly and securely.",
    icon: Package,
    color: "bg-green-50 text-green-600 border-green-100"
  },
  {
    title: "Corporate Solutions",
    description: "Custom transportation solutions for businesses, including staff transport, document delivery, and scheduled pickups.",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    title: "Express Delivery",
    description: "Urgent deliveries guaranteed within 1 hour within city limits. Perfect for time-sensitive documents or packages.",
    icon: Clock,
    color: "bg-red-50 text-red-600 border-red-100"
  }
];

const features = [
  {
    title: "Real-time Tracking",
    description: "Track your rider's location in real-time through our app.",
    icon: Layers
  },
  {
    title: "Rider Ratings",
    description: "All riders are rated by customers to maintain service quality.",
    icon: Star
  },
  {
    title: "Secure Payments",
    description: "Easy and secure payment options including mobile money and cash.",
    icon: ShieldCheck
  },
  {
    title: "24/7 Support",
    description: "Our customer support team is available around the clock.",
    icon: MessageSquare
  }
];

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Digital Boda offers a range of transportation and delivery services designed to make your life easier and more efficient.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl border-2 ${service.color} transition-all hover:shadow-lg`}
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/signup">
                    <Button variant="outline" className="mt-2">Learn More</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Service Features</h2>
              <p className="text-gray-600">
                All our services come with these standard features to ensure quality, safety, and convenience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <feature.icon size={32} className="text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600">
                Our pricing is straightforward with no hidden charges. The exact fare is calculated and displayed before you confirm your ride.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="border rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">Base Fare</h3>
                <p className="text-4xl font-bold mb-4">KSh 50</p>
                <p className="text-gray-600 mb-4">Starting fare for all rides</p>
              </div>
              
              <div className="border rounded-xl p-6 text-center bg-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold mb-4">Per Kilometer</h3>
                <p className="text-4xl font-bold mb-4">KSh 30</p>
                <p className="text-gray-600 mb-4">Rate per kilometer traveled</p>
              </div>
              
              <div className="border rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">Waiting Time</h3>
                <p className="text-4xl font-bold mb-4">KSh 5</p>
                <p className="text-gray-600 mb-4">Per minute when stationary</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Get an exact quote for your trip using our fare calculator in the app.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-orange-light">
                  Book a Ride Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
