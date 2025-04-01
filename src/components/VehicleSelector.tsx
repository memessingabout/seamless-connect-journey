
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

interface VehicleSelectorProps {
  estimatedBasePrice: number;
  onSelect: (vehicleType: string, price: number) => void;
}

const VehicleSelector = ({ estimatedBasePrice, onSelect }: VehicleSelectorProps) => {
  const vehicleOptions = [
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

  return (
    <div className="space-y-4">
      {vehicleOptions.map((vehicle) => (
        <Card 
          key={vehicle.id}
          className="hover:border-primary cursor-pointer transition-all"
          onClick={() => onSelect(vehicle.id, Math.round(estimatedBasePrice * vehicle.priceMultiplier))}
        >
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-4xl mr-4">
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
                    <div className="font-medium">
                      KSh {Math.round(estimatedBasePrice * vehicle.priceMultiplier)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VehicleSelector;
