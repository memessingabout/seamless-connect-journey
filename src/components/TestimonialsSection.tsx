
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Njeri",
    position: "Regular User",
    quote:
      "Digital Boda has changed how I commute in Nairobi. Their drivers are professional and always on time. I feel much safer using their service compared to hailing random bodas on the street.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Omondi",
    position: "Business Owner",
    quote:
      "I use Digital Boda for all my small deliveries. It's reliable, affordable and their tracking system means I always know where my packages are. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    name: "Faith Wangari",
    position: "Student",
    quote:
      "As a student, safety is my priority. Digital Boda gives me peace of mind with their vetted riders and the ability to share my trip status with family. Plus, the student discount is a huge plus!",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "John Kamau",
    position: "Digital Boda Driver",
    quote:
      "Joining Digital Boda as a driver has stabilized my income. The platform keeps me busy with rides throughout the day, and the payment system is transparent and fair.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what some of our satisfied
            customers have to say about Digital Boda.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-1"
              >
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <Quote
                      size={36}
                      className="text-primary/20 mb-3"
                      strokeWidth={1}
                    />
                    <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
