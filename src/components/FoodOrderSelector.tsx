
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Pizza, Sandwich, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FoodOptionProps {
  id: string;
  name: string;
  description: string;
  priceMultiplier: number;
  eta: string;
  type: string;
  icon: React.ReactNode;
  isPopular?: boolean;
}

interface FoodOrderSelectorProps {
  estimatedBasePrice: number;
  onSelect: (restaurantId: string, price: number) => void;
}

const FoodOrderSelector = ({ estimatedBasePrice, onSelect }: FoodOrderSelectorProps) => {
  const foodOptions: FoodOptionProps[] = [
    {
      id: "mama-food",
      name: "Mama's Kitchen",
      description: "Local favorites and traditional dishes",
      priceMultiplier: 1.0,
      eta: "20-35 mins",
      type: "African",
      icon: <Utensils className="h-6 w-6" />,
      isPopular: true,
    },
    {
      id: "pizza-hub",
      name: "Pizza Hub",
      description: "Delicious pizzas and sides",
      priceMultiplier: 1.4,
      eta: "25-40 mins",
      type: "Italian",
      icon: <Pizza className="h-6 w-6" />,
    },
    {
      id: "quick-bite",
      name: "Quick Bite",
      description: "Sandwiches, burgers, and quick meals",
      priceMultiplier: 1.2,
      eta: "15-25 mins",
      type: "Fast Food",
      icon: <Sandwich className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-2">Select Restaurant</h3>
      
      {foodOptions.map((option) => (
        <Card 
          key={option.id}
          className="hover:border-primary cursor-pointer transition-all hover:shadow-md"
          onClick={() => onSelect(option.id, Math.round(estimatedBasePrice * option.priceMultiplier))}
        >
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-primary mr-4 bg-primary/5 p-2 rounded-md">
                {option.icon}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{option.name}</h3>
                      {option.isPopular && (
                        <Badge variant="secondary" className="text-xs">Popular</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="text-xs mt-1 flex items-center">
                      <span className="text-muted-foreground">{option.type}</span>
                      <span className="mx-1">•</span>
                      <span className="text-muted-foreground">ETA: {option.eta}</span>
                      <span className="mx-1">•</span>
                      <MapPin className="h-3 w-3 text-muted-foreground inline" />
                      <span className="text-muted-foreground ml-1">2.5 km away</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-blue-DEFAULT">
                      KSh {Math.round(estimatedBasePrice * option.priceMultiplier)}
                    </div>
                    <div className="text-xs text-muted-foreground">Delivery fee included</div>
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

export default FoodOrderSelector;
