
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, User, CheckCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Stable income with regular rides",
  "Flexible working hours",
  "Weekly payments directly to your M-Pesa",
  "Low commission rates compared to competitors",
  "Accident insurance coverage",
  "Training and skills development",
  "Access to fuel discounts and motorcycle maintenance",
  "Potential to earn bonuses based on performance",
  "Dedicated support team for drivers"
];

const requirements = [
  {
    icon: User,
    title: "Personal Requirements",
    items: [
      "Valid national ID",
      "At least 21 years of age",
      "Smartphone with internet access",
      "Good command of English and Swahili",
      "Clean record with no criminal history"
    ]
  },
  {
    icon: Calendar,
    title: "Experience Requirements",
    items: [
      "Minimum 2 years of riding experience",
      "Knowledge of local roads and routes",
      "Good customer service skills",
      "Professional conduct"
    ]
  },
  {
    icon: CheckCheck,
    title: "Motorcycle Requirements",
    items: [
      "Motorcycle in good condition (150cc minimum)",
      "Valid motorcycle registration",
      "Current insurance coverage",
      "Roadworthy certificate",
      "Two helmets (for driver and passenger)"
    ]
  }
];

const faqs = [
  {
    question: "How much can I earn as a Digital Boda driver?",
    answer: "Earnings vary depending on hours worked and location, but our drivers typically earn between KSh 2,000 - KSh 4,000 per day after commission. Top performers can earn over KSh 5,000 daily."
  },
  {
    question: "What commission does Digital Boda take?",
    answer: "We take a 15% commission on each ride, which is among the lowest rates in the industry. This covers platform maintenance, customer acquisition, and insurance coverage."
  },
  {
    question: "How and when do I get paid?",
    answer: "Drivers receive weekly payments directly to their M-Pesa accounts every Monday for the previous week's earnings. You can also request a daily cash-out for a small processing fee."
  },
  {
    question: "Do I need to provide my own motorcycle?",
    answer: "Yes, drivers need to have their own motorcycle. However, we have partnerships with motorcycle financing companies that can help you purchase a motorcycle with affordable repayment terms."
  },
  {
    question: "What kind of support does Digital Boda provide to drivers?",
    answer: "We provide comprehensive initial training, ongoing skill development, dedicated driver support team, and assistance with documentation. We also offer fuel discounts and motorcycle maintenance partnerships."
  },
  {
    question: "How long does the application process take?",
    answer: "The typical application process takes 3-7 days, including document verification, background check, and training. Once approved, you can start accepting rides immediately."
  }
];

const Drivers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1920&q=60')] opacity-20 bg-cover bg-center"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Kenya's Leading Digital Boda Platform</h1>
                <p className="text-lg mb-8">
                  Become a Digital Boda driver and earn a stable income while enjoying flexibility, security, and growth opportunities.
                </p>
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-orange-light text-white">
                    Apply Now
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1617528083297-c5a2a8d39dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=800&q=80" 
                  alt="Digital Boda Driver" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Drive With Us</h2>
              <p className="text-gray-600">
                Digital Boda offers industry-leading benefits and support for all our drivers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Driver Requirements</h2>
              <p className="text-gray-600">
                To ensure safety and quality service, we have the following requirements for our drivers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How to Apply */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
              <p className="text-gray-600">
                Becoming a Digital Boda driver is simple. Follow these steps to get started.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    {
                      step: "01",
                      title: "Online Application",
                      description: "Fill out our online application form with your personal details and motorcycle information."
                    },
                    {
                      step: "02",
                      title: "Document Submission",
                      description: "Upload required documents including ID, driver's license, motorcycle registration and insurance."
                    },
                    {
                      step: "03",
                      title: "Background Check",
                      description: "We'll verify your information and conduct a background check to ensure safety standards."
                    },
                    {
                      step: "04",
                      title: "Orientation & Training",
                      description: "Complete our comprehensive training program covering app usage, customer service, and safety protocols."
                    },
                    {
                      step: "05",
                      title: "Start Earning",
                      description: "Once approved, download the driver app and start accepting ride requests immediately."
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-orange-light">
                    Start Your Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about becoming a Digital Boda driver.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-4 text-gray-600">
                Still have questions? Contact our driver support team.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Driver Success Stories</h2>
              <p className="text-gray-600">
                Hear from current Digital Boda drivers about their experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "James Mwangi",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "Since joining Digital Boda, my monthly income has doubled. The app provides consistent ride requests, and the weekly payments are always on time.",
                  location: "Nairobi, 2 years with Digital Boda"
                },
                {
                  name: "Peter Ochieng",
                  image: "https://randomuser.me/api/portraits/men/36.jpg",
                  quote: "The flexibility allows me to work around my schedule. The training they provided helped me improve my customer service skills and increase my ratings.",
                  location: "Mombasa, 1.5 years with Digital Boda"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Drivers;
