
import { 
  Shield, 
  Clock, 
  CreditCard, 
  Map, 
  Headphones, 
  Compass
} from 'lucide-react';

const features = [
  {
    title: "Verified Riders",
    description: "All our riders are verified through a rigorous background check process ensuring your safety.",
    icon: Shield,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Quick Pick-up",
    description: "Get picked up within minutes of booking. Our large network ensures we have riders near you.",
    icon: Clock,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Transparent Pricing",
    description: "Know exactly what you'll pay before booking. No hidden charges or surge pricing.",
    icon: CreditCard,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Real-time Tracking",
    description: "Track your rider in real-time and share your trip details with friends and family.",
    icon: Map,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you with any issues.",
    icon: Headphones,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Multiple Destinations",
    description: "Plan trips with multiple stops easily through our advanced booking system.",
    icon: Compass,
    color: "bg-orange-100 text-orange-600"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose DigitalBoda</h2>
          <p className="text-gray-600">
            We're reimagining urban transportation in Kenya with technology and safety at the core of our service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
