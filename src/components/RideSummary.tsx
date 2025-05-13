
import { Clock, MapPin, Package, User, Utensils } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface RideSummaryProps {
  pickup: string;
  dropoff: string;
  vehicleType: string;
  estimatedPrice: number;
  estimatedTime: string;
  isDelivery: boolean;
  isFood?: boolean;
}

const RideSummary = ({
  pickup,
  dropoff,
  vehicleType,
  estimatedPrice,
  estimatedTime,
  isDelivery = false,
  isFood = false,
}: RideSummaryProps) => {
  const getVehicleDisplay = () => {
    switch (vehicleType) {
      case "boda":
        return "Boda Boda 🏍️";
      case "tuktuk":
        return "Tuk-tuk 🛺";
      case "car":
        return "Car 🚗";
      case "boda-delivery":
        return "Boda Express 🏍️";
      case "tuktuk-delivery":
        return "Tuk-tuk Cargo 🛺";
      case "van-delivery":
        return "Van Delivery 🚚";
      case "food-delivery":
        return "Food Delivery 🍔";
      default:
        return "Vehicle";
    }
  };

  const getServiceIcon = () => {
    if (isFood) {
      return <Utensils className="h-5 w-5" />;
    } else if (isDelivery) {
      return <Package className="h-5 w-5" />;
    } else {
      return <User className="h-5 w-5" />;
    }
  };

  const getServiceText = () => {
    if (isFood) {
      return "Food Order";
    } else if (isDelivery) {
      return "Package Delivery";
    } else {
      return "Passenger Ride";
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Service Type Indicator */}
      <div className="bg-blue-light/10 rounded-lg p-3 flex items-center justify-center space-x-2 border border-blue-light/20">
        {getServiceIcon()}
        <span className="font-medium">{getServiceText()}</span>
      </div>

      {/* Route information */}
      <div className="space-y-4">
        <div className="flex">
          <div className="mr-3 flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-blue-DEFAULT flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="h-10 w-0.5 bg-blue-DEFAULT/20 my-1"></div>
            <div className="h-6 w-6 rounded-full bg-gold-DEFAULT flex items-center justify-center">
              <MapPin className="h-4 w-4 text-secondary-foreground" />
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <div>
              <p className="text-sm text-muted-foreground">Pickup</p>
              <p className="font-medium">{pickup}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {isFood ? "Delivery Address" : isDelivery ? "Drop-off (Delivery)" : "Drop-off"}
              </p>
              <p className="font-medium">{dropoff}</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-blue-light/10" />

      {/* Ride details */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            {isFood ? "Delivery Option" : isDelivery ? "Delivery Vehicle" : "Vehicle Type"}
          </span>
          <span className="font-medium">{getVehicleDisplay()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimated Time</span>
          <span className="font-medium flex items-center">
            <Clock className="h-4 w-4 mr-1 text-blue-light" /> {estimatedTime}
          </span>
        </div>
      </div>

      <Separator className="bg-blue-light/10" />

      {/* Price */}
      <div className="flex justify-between items-center bg-gold-light/10 p-3 rounded-lg border border-gold-light/20">
        <span className="text-lg">Total Price</span>
        <span className="text-lg font-bold text-blue-DEFAULT">KSh {estimatedPrice}</span>
      </div>

      <div className="text-xs text-muted-foreground">
        {isFood 
          ? "Price may vary based on restaurant distance and promotions"
          : isDelivery 
            ? "Price may vary based on actual weight and distance"
            : "Price may vary based on traffic and actual route taken"
        }
      </div>
    </div>
  );
};

export default RideSummary;
