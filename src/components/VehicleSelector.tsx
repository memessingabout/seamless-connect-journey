import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Package, Bike, Utensils } from "lucide-react";
import FoodOrderSelector from "@/components/FoodOrderSelector";

interface VehicleSelectorProps {
  estimatedBasePrice: number;
  onSelect: (vehicleType: string, price: number, isDelivery: boolean, isFood?: boolean) => void;
}

const VehicleSelector = ({ estimatedBasePrice, onSelect }: VehicleSelectorProps) => {
  const rideOptions = [
    {
      id: "boda",
      name: "Boda Boda",
      description: "Motorcycle taxi, fastest option",
      priceMultiplier: 1.0,
      capacity: "1 person",
      eta: "5-10 mins",
      icon: "🏍️",
    },
    {
      id: "tuktuk",
      name: "Tuk-tuk",
      description: "Three-wheeled auto rickshaw",
      priceMultiplier: 1.3,
      capacity: "3 people",
      eta: "7-12 mins",
      icon: "🛺",
    },
    {
      id: "car",
      name: "Car",
      description: "Comfortable sedan for longer trips",
      priceMultiplier: 2.2,
      capacity: "4 people",
      eta: "8-15 mins",
      icon: <Car className="h-8 w-8" />,
    },
  ];

  const deliveryOptions = [
    {
      id: "boda-delivery",
      name: "Boda Express",
      description: "Small packages, documents",
      priceMultiplier: 1.2,
      capacity: "Up to 5 kg",
      eta: "5-15 mins",
      icon: <Bike className="h-8 w-8" />,
    },
    {
      id: "tuktuk-delivery",
      name: "Tuk-tuk Cargo",
      description: "Medium-sized packages",
      priceMultiplier: 1.8,
      capacity: "Up to 20 kg",
      eta: "10-20 mins",
      icon: "🛺",
    },
    {
      id: "van-delivery",
      name: "Van Delivery",
      description: "For larger shipments or furniture",
      priceMultiplier: 3.0,
      capacity: "Up to 200 kg",
      eta: "15-30 mins",
      icon: <Package className="h-8 w-8" />,
    },
  ];

  return (
    <Tabs defaultValue="ride" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-4 bg-blue-DEFAULT/10">
        <TabsTrigger value="ride">Passenger Ride</TabsTrigger>
        <TabsTrigger value="delivery">Delivery</TabsTrigger>
        <TabsTrigger value="food" className="animate-pulse">Food Order</TabsTrigger>
      </TabsList>

      <TabsContent value="ride" className="space-y-4">
        {rideOptions.map((vehicle) => (
          <Card 
            key={vehicle.id}
            className="hover:border-blue-DEFAULT cursor-pointer transition-all hover:shadow-md"
            onClick={() => onSelect(vehicle.id, Math.round(estimatedBasePrice * vehicle.priceMultiplier), false)}
          >
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-4xl mr-4 bg-blue-light/10 p-2 rounded-md flex items-center justify-center min-w-14 h-14">
                  {typeof vehicle.icon === "string" ? vehicle.icon : vehicle.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{vehicle.name}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                      <div className="text-xs mt-1">
                        <span className="text-muted-foreground">Capacity: {vehicle.capacity} • ETA: {vehicle.eta}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-blue-DEFAULT">
                        KSh {Math.round(estimatedBasePrice * vehicle.priceMultiplier)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="delivery" className="space-y-4">
        {deliveryOptions.map((vehicle) => (
          <Card 
            key={vehicle.id}
            className="hover:border-blue-DEFAULT cursor-pointer transition-all hover:shadow-md"
            onClick={() => onSelect(vehicle.id, Math.round(estimatedBasePrice * vehicle.priceMultiplier), true)}
          >
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-4xl mr-4 bg-blue-light/10 p-2 rounded-md flex items-center justify-center min-w-14 h-14">
                  {typeof vehicle.icon === "string" ? vehicle.icon : vehicle.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{vehicle.name}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                      <div className="text-xs mt-1">
                        <span className="text-muted-foreground">Max weight: {vehicle.capacity} • ETA: {vehicle.eta}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-blue-DEFAULT">
                        KSh {Math.round(estimatedBasePrice * vehicle.priceMultiplier)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="food" className="space-y-4">
        <FoodOrderSelector 
          estimatedBasePrice={estimatedBasePrice}
          onSelect={(restaurantId, price) => onSelect("food-delivery", price, false, true)}
        />
      </TabsContent>
    </Tabs>
  );
};

export default VehicleSelector;
