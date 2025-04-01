
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, ArrowLeft, Package, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import RideMap from "@/components/RideMap";
import ChatInterface from "@/components/ChatInterface";
import { useToast } from "@/hooks/use-toast";

const RideStatus = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(10);
  const [status, setStatus] = useState("Finding your driver...");
  const [driverAssigned, setDriverAssigned] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  
  // Get this from the global state or URL params in a real app
  const [rideDetails, setRideDetails] = useState({
    pickup: "Moi Avenue, Nairobi",
    dropoff: "Westlands, Nairobi",
    vehicleType: "boda",
    price: 250,
  });
  
  const [driverData, setDriverData] = useState({
    name: "John Kamau",
    rating: 4.8,
    vehicle: "Bajaj Boxer",
    plate: "KBZ 456Y",
    eta: "3 min away",
    phone: "+254712345678",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  });

  useEffect(() => {
    // Check local storage for ride type
    const storedIsDelivery = localStorage.getItem("isDelivery");
    if (storedIsDelivery) {
      setIsDelivery(storedIsDelivery === "true");
    }

    // Simulate driver finding and ride progress
    const timer1 = setTimeout(() => {
      setProgress(30);
      setStatus("Driver assigned and en route");
      setDriverAssigned(true);
    }, 4000);

    const timer2 = setTimeout(() => {
      setProgress(60);
      setStatus("Driver is approaching pickup location");
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleCancelRide = () => {
    toast({
      title: "Ride Cancelled",
      description: "Your ride has been successfully cancelled.",
      variant: "destructive",
    });
    
    // In a real app, you would redirect to the booking page after a short delay
    setTimeout(() => {
      window.location.href = "/ride-booking";
    }, 2000);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-8">
          <Link to="/ride-booking" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to booking
          </Link>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Your {isDelivery ? "Delivery" : "Ride"}</h1>
            <div className="bg-secondary/40 rounded-md p-2 flex items-center space-x-2">
              {isDelivery ? (
                <>
                  <Package className="h-5 w-5" />
                  <span className="font-medium">Package Delivery</span>
                </>
              ) : (
                <>
                  <User className="h-5 w-5" />
                  <span className="font-medium">Passenger Ride</span>
                </>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Status */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-muted-foreground">{status}</p>
                        <p className="font-medium">{progress}%</p>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>Booking</div>
                      <div>Driver Assigned</div>
                      <div>Pickup</div>
                      <div>Dropoff</div>
                    </div>

                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Pickup</span>
                        <span className="font-medium">{rideDetails.pickup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{isDelivery ? "Delivery Location" : "Drop-off"}</span>
                        <span className="font-medium">{rideDetails.dropoff}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {driverAssigned && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your {isDelivery ? "Delivery Driver" : "Driver"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={driverData.photo} alt={driverData.name} />
                        <AvatarFallback>{driverData.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-medium text-lg">{driverData.name}</h3>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(driverData.rating) ? "text-yellow-500" : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                          </div>
                          <span className="text-sm">{driverData.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {driverData.vehicle} • {driverData.plate}
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{driverData.eta}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button 
                        variant={showChat ? "default" : "outline"} 
                        className="flex-1"
                        onClick={toggleChat}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {showChat ? "Hide Chat" : "Message"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {showChat && driverAssigned && (
                <ChatInterface 
                  driverName={driverData.name} 
                  driverPhoto={driverData.photo}
                />
              )}

              <Card>
                <CardHeader>
                  <CardTitle>{isDelivery ? "Delivery Details" : "Ride Details"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Type</span>
                      <span className="font-medium">{isDelivery ? "Package Delivery" : "Passenger Ride"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle</span>
                      <span className="font-medium">
                        {isDelivery ? "Boda Express 🏍️" : "Boda Boda 🏍️"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment Method</span>
                      <span className="font-medium">Cash</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium">KSh {rideDetails.price}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4" 
                    variant="destructive"
                    onClick={handleCancelRide}
                  >
                    Cancel {isDelivery ? "Delivery" : "Ride"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Map */}
            <div className="space-y-6">
              <RideMap 
                pickup={rideDetails.pickup}
                dropoff={rideDetails.dropoff}
              />

              {/* Only show chat in desktop at the bottom of map when it's not shown in the left column */}
              {!showChat && driverAssigned && (
                <div className="hidden md:block">
                  <ChatInterface 
                    driverName={driverData.name} 
                    driverPhoto={driverData.photo}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RideStatus;
