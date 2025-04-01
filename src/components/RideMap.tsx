
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface RideMapProps {
  pickup: string;
  dropoff: string;
}

const RideMap = ({ pickup, dropoff }: RideMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real application, this would initialize a map like Google Maps or Mapbox
    // and show the route between pickup and dropoff locations
    
    // For now, we're just displaying a placeholder map with route line
    console.log("Map would show route from", pickup, "to", dropoff);
  }, [pickup, dropoff]);

  return (
    <Card className="h-full">
      <CardContent className="p-0">
        <div ref={mapRef} className="h-[400px] rounded-md bg-muted flex items-center justify-center relative overflow-hidden">
          {/* Stylized map background */}
          <div className="absolute inset-0 bg-[#f2f7fb]">
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-black/10"></div>
              ))}
            </div>
            
            {/* Simplified roads */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-8"></div>
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300"></div>
            <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-gray-300"></div>
            <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-300"></div>
            <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-300"></div>
          </div>
          
          {pickup && dropoff ? (
            <>
              {/* Route line */}
              <div className="absolute w-3/4 h-0.5 bg-primary top-1/2 left-[12%] transform rotate-[15deg] -translate-y-1/2 z-10 
                after:absolute after:w-3 after:h-3 after:bg-primary after:rounded-full after:right-0 after:top-1/2 after:transform after:-translate-y-1/2
                before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-1/2 before:transform before:-translate-y-1/2"></div>
              
              {/* Pickup marker */}
              <div className="absolute left-[12%] top-[40%] z-20 flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white shadow-md rounded-md p-2 mt-1 text-xs max-w-32 text-center">
                  {pickup}
                </div>
              </div>
              
              {/* Dropoff marker */}
              <div className="absolute right-[12%] top-[55%] z-20 flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white shadow-md rounded-md p-2 mt-1 text-xs max-w-32 text-center">
                  {dropoff}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center p-6 z-10">
              <div className="text-2xl mb-2">📍 Map View</div>
              <p className="text-muted-foreground mb-4">
                Enter pickup and destination to see the route
              </p>
              <div className="text-xs text-muted-foreground">
                In a production app, this would be an interactive map powered by Google Maps or Mapbox
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RideMap;
