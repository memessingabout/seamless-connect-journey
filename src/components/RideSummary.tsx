
import { Clock, MapPin, Package, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface RideSummaryProps {
  pickup: string;
  dropoff: string;
  vehicleType: string;
  estimatedPrice: number;
  estimatedTime: string;
  isDelivery: boolean;
}

const RideSummary = ({
  pickup,
  dropoff,
  vehicleType,
  estimatedPrice,
  estimatedTime,
  isDelivery = false,
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
      default:
        return "Vehicle";
    }
  };

  return (
    <div className="space-y-4">
      {/* Service Type Indicator */}
      <div className="bg-secondary/40 rounded-md p-2 flex items-center justify-center space-x-2">
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

      {/* Route information */}
      <div className="space-y-4">
        <div className="flex">
          <div className="mr-3 flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="h-10 w-0.5 bg-gray-200 my-1"></div>
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <div>
              <p className="text-sm text-muted-foreground">Pickup</p>
              <p className="font-medium">{pickup}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{isDelivery ? "Drop-off (Delivery)" : "Drop-off"}</p>
              <p className="font-medium">{dropoff}</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Ride details */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">{isDelivery ? "Delivery Vehicle" : "Vehicle Type"}</span>
          <span className="font-medium">{getVehicleDisplay()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimated Time</span>
          <span className="font-medium flex items-center">
            <Clock className="h-4 w-4 mr-1" /> {estimatedTime}
          </span>
        </div>
      </div>

      <Separator />

      {/* Price */}
      <div className="flex justify-between items-center">
        <span className="text-lg">Total Price</span>
        <span className="text-lg font-bold">KSh {estimatedPrice}</span>
      </div>

      <div className="text-xs text-muted-foreground">
        {isDelivery 
          ? "Price may vary based on actual weight and distance"
          : "Price may vary based on traffic and actual route taken"
        }
      </div>
    </div>
  );
};

export default RideSummary;
