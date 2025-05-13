
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RideMap from "@/components/RideMap";
import VehicleSelector from "@/components/VehicleSelector";
import RideSummary from "@/components/RideSummary";
import FoodOrderSelector from "@/components/FoodOrderSelector";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RideBooking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [bookingStep, setBookingStep] = useState<"location" | "vehicle" | "summary">("location");
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    selectedVehicle: "boda", // Default: boda, tuk-tuk, car
    estimatedPrice: 0,
    estimatedTime: "",
    isDelivery: false,
    isFood: false,
    packageInfo: "",
    foodOrderInfo: "",
  });

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.pickup || !bookingData.dropoff) {
      toast({
        title: "Please fill all fields",
        description: "Both pickup and drop-off locations are required",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would calculate the estimated price and time here
    // based on the locations provided
    setBookingData({
      ...bookingData,
      estimatedPrice: 250, // Example starting price
      estimatedTime: "10-15 mins",
    });
    setBookingStep("vehicle");
  };

  const handleVehicleSelect = (vehicle: string, price: number, isDelivery: boolean, isFood: boolean = false) => {
    setBookingData({
      ...bookingData,
      selectedVehicle: vehicle,
      estimatedPrice: price,
      isDelivery: isDelivery,
      isFood: isFood,
      estimatedTime: isFood ? "25-40 mins" : bookingData.estimatedTime, // Adjust time for food orders
    });
    setBookingStep("summary");
  };

  const handleBookRide = () => {
    // Store delivery and food status in localStorage for the ride status page
    localStorage.setItem("isDelivery", bookingData.isDelivery.toString());
    localStorage.setItem("isFood", bookingData.isFood.toString());
    
    let toastMessage = "Ride Booked Successfully!";
    let toastDescription = "A driver will be assigned to you shortly.";
    
    if (bookingData.isFood) {
      toastMessage = "Food Order Placed Successfully!";
      toastDescription = "Your order will be processed and delivered shortly.";
    } else if (bookingData.isDelivery) {
      toastMessage = "Delivery Booked Successfully!";
      toastDescription = "A driver will be assigned to your delivery shortly.";
    }
    
    toast({
      title: toastMessage,
      description: toastDescription,
    });
    
    navigate("/ride-status");
  };

  const getBookingTitle = () => {
    if (bookingData.isFood) {
      return "Order Food";
    } else if (bookingData.isDelivery) {
      return "Book a Delivery";
    } else {
      return "Book a Ride";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-light/5 to-gold-light/5">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6 text-blue-DEFAULT">{getBookingTitle()}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Form */}
            <div>
              <Card className="modern-shadow border-blue-light/10">
                {bookingStep === "location" && (
                  <>
                    <CardHeader className="border-b border-blue-light/10">
                      <CardTitle>Where are you going?</CardTitle>
                      <CardDescription>Enter your pickup and drop-off locations</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form onSubmit={handleLocationSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup">Pickup Location</Label>
                          <Input
                            id="pickup"
                            placeholder="Enter pickup address"
                            value={bookingData.pickup}
                            onChange={(e) =>
                              setBookingData({ ...bookingData, pickup: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dropoff">Drop-off Location</Label>
                          <Input
                            id="dropoff"
                            placeholder="Enter destination address"
                            value={bookingData.dropoff}
                            onChange={(e) =>
                              setBookingData({ ...bookingData, dropoff: e.target.value })
                            }
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-DEFAULT hover:bg-blue-dark">
                          Continue
                        </Button>
                      </form>
                    </CardContent>
                  </>
                )}

                {bookingStep === "vehicle" && (
                  <>
                    <CardHeader className="border-b border-blue-light/10">
                      <CardTitle>Select Service Type</CardTitle>
                      <CardDescription>Choose between passenger ride, package delivery or food order</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <VehicleSelector 
                        estimatedBasePrice={bookingData.estimatedPrice} 
                        onSelect={handleVehicleSelect} 
                      />
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setBookingStep("location")}
                      >
                        Back
                      </Button>
                    </CardContent>
                  </>
                )}

                {bookingStep === "summary" && (
                  <>
                    <CardHeader className="border-b border-blue-light/10">
                      <CardTitle>
                        {bookingData.isFood ? "Order" : bookingData.isDelivery ? "Delivery" : "Ride"} Summary
                      </CardTitle>
                      <CardDescription>Review and confirm your details</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <RideSummary 
                        pickup={bookingData.pickup}
                        dropoff={bookingData.dropoff}
                        vehicleType={bookingData.selectedVehicle}
                        estimatedPrice={bookingData.estimatedPrice}
                        estimatedTime={bookingData.estimatedTime}
                        isDelivery={bookingData.isDelivery}
                        isFood={bookingData.isFood}
                      />
                      
                      {bookingData.isFood && (
                        <div className="mt-4 space-y-2">
                          <Label htmlFor="foodOrderInfo">Special Instructions (optional)</Label>
                          <Textarea 
                            id="foodOrderInfo"
                            placeholder="Any special instructions for your order (e.g., allergies, extra spicy)"
                            value={bookingData.foodOrderInfo}
                            onChange={(e) => setBookingData({...bookingData, foodOrderInfo: e.target.value})}
                            className="resize-none"
                          />
                        </div>
                      )}
                      
                      {bookingData.isDelivery && !bookingData.isFood && (
                        <div className="mt-4 space-y-2">
                          <Label htmlFor="packageInfo">Package Description (optional)</Label>
                          <Textarea 
                            id="packageInfo"
                            placeholder="Describe your package size, weight, or any special instructions for the driver"
                            value={bookingData.packageInfo}
                            onChange={(e) => setBookingData({...bookingData, packageInfo: e.target.value})}
                            className="resize-none"
                          />
                        </div>
                      )}
                      
                      <div className="flex gap-4 mt-6">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setBookingStep("vehicle")}
                        >
                          Back
                        </Button>
                        <Button 
                          className="flex-1 bg-blue-DEFAULT hover:bg-blue-dark"
                          onClick={handleBookRide}
                        >
                          {bookingData.isFood 
                            ? "Place Order" 
                            : bookingData.isDelivery 
                              ? "Book Delivery" 
                              : "Book Ride"
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            </div>

            {/* Right column - Map */}
            <div>
              <RideMap 
                pickup={bookingData.pickup}
                dropoff={bookingData.dropoff}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RideBooking;
