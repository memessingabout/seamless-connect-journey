
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const RideStatus = () => {
  const [progress, setProgress] = useState(10);
  const [status, setStatus] = useState("Finding your driver...");
  const [driverAssigned, setDriverAssigned] = useState(false);
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
    // Simulate driver finding and ride progress
    const timer = setTimeout(() => {
      setProgress(30);
      setStatus("Driver assigned and en route");
      setDriverAssigned(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-8">
          <Link to="/ride-booking" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to booking
          </Link>

          <h1 className="text-3xl font-bold mb-6">Your Ride</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Status */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ride Status</CardTitle>
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
                        <span className="font-medium">Moi Avenue, Nairobi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Drop-off</span>
                        <span className="font-medium">Westlands, Nairobi</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {driverAssigned && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your Driver</CardTitle>
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
                                    i < Math.floor(driverData.rating) ? "text-yellow" : "text-gray-300"
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
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Ride Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle</span>
                      <span className="font-medium">Boda Boda 🏍️</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment Method</span>
                      <span className="font-medium">Cash</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium">KSh 250</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="destructive">
                    Cancel Ride
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Map */}
            <div>
              <Card className="h-full">
                <CardContent className="p-0">
                  <div className="h-[500px] rounded-md bg-muted flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-2xl mb-2">📍 Live Tracking</div>
                      <p className="text-muted-foreground mb-4">
                        {driverAssigned ? (
                          <>Your driver is en route to your pickup location</>
                        ) : (
                          <>Looking for nearby drivers</>
                        )}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        In a production app, this would show live GPS tracking of your driver
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RideStatus;
