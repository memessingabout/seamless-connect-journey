
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
    packageInfo: "",
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

  const handleVehicleSelect = (vehicle: string, price: number, isDelivery: boolean) => {
    setBookingData({
      ...bookingData,
      selectedVehicle: vehicle,
      estimatedPrice: price,
      isDelivery: isDelivery,
    });
    setBookingStep("summary");
  };

  const handleBookRide = () => {
    // Store delivery status in localStorage for the ride status page
    localStorage.setItem("isDelivery", bookingData.isDelivery.toString());
    
    toast({
      title: `${bookingData.isDelivery ? "Delivery" : "Ride"} Booked Successfully!`,
      description: "A driver will be assigned to you shortly.",
    });
    navigate("/ride-status");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Book a {bookingData.isDelivery ? "Delivery" : "Ride"}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Form */}
            <div>
              <Card>
                {bookingStep === "location" && (
                  <>
                    <CardHeader>
                      <CardTitle>Where are you going?</CardTitle>
                      <CardDescription>Enter your pickup and drop-off locations</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                        <Button type="submit" className="w-full">
                          Continue
                        </Button>
                      </form>
                    </CardContent>
                  </>
                )}

                {bookingStep === "vehicle" && (
                  <>
                    <CardHeader>
                      <CardTitle>Select Service Type</CardTitle>
                      <CardDescription>Choose between passenger ride or package delivery</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                    <CardHeader>
                      <CardTitle>{bookingData.isDelivery ? "Delivery" : "Ride"} Summary</CardTitle>
                      <CardDescription>Review and confirm your details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RideSummary 
                        pickup={bookingData.pickup}
                        dropoff={bookingData.dropoff}
                        vehicleType={bookingData.selectedVehicle}
                        estimatedPrice={bookingData.estimatedPrice}
                        estimatedTime={bookingData.estimatedTime}
                        isDelivery={bookingData.isDelivery}
                      />
                      
                      {bookingData.isDelivery && (
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
                          className="flex-1"
                          onClick={handleBookRide}
                        >
                          {bookingData.isDelivery ? "Book Delivery" : "Book Ride"}
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
