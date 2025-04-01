
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface RideMapProps {
  pickup: string;
  dropoff: string;
}

const RideMap = ({ pickup, dropoff }: RideMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real application, this would initialize a map like Google Maps or Mapbox
    // and show the route between pickup and dropoff locations
    
    // For now, we're just displaying a placeholder map
    console.log("Map would show route from", pickup, "to", dropoff);
  }, [pickup, dropoff]);

  return (
    <Card className="h-full">
      <CardContent className="p-0">
        <div ref={mapRef} className="h-[400px] rounded-md bg-muted flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-2xl mb-2">📍 Map View</div>
            <p className="text-muted-foreground mb-4">
              {pickup && dropoff ? (
                <>
                  Route from <strong>{pickup}</strong> to <strong>{dropoff}</strong> would be displayed here.
                </>
              ) : (
                <>Enter pickup and destination to see the route</>
              )}
            </p>
            <div className="text-xs text-muted-foreground">
              In a production app, this would be an interactive map powered by Google Maps or Mapbox
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RideMap;
