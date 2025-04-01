
import { Button } from "@/components/ui/button";
import { Smartphone, Map, Bike } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download & Register",
    description:
      "Download our app and create an account with your phone number and email.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Enter Your Destination",
    description:
      "Enter your pickup location and destination to get instant fare quotes.",
    icon: Map,
  },
  {
    number: "03",
    title: "Enjoy Your Ride",
    description:
      "Your verified rider will pick you up promptly and get you to your destination safely.",
    icon: Bike,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Digital Boda Works</h2>
          <p className="text-gray-600">
            Getting a ride with Digital Boda is easy and convenient. Just follow
            these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border border-gray-100 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <span className="absolute -top-4 right-4 text-4xl font-bold text-gray-100">
                {step.number}
              </span>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <step.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-orange-light">
            Download Our App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
