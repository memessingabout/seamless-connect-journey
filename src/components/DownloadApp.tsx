
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623857584158-23c769acb3c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1920&h=768')] opacity-10 bg-cover bg-center"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">
              Download Our Mobile App
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Get the full Digital Boda experience on your smartphone. Book rides, track your driver in real-time, and manage your payments all from one easy-to-use app.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 py-6">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.707 9.293l-5-5a.999.999 0 0 0-1.414 0l-5 5A.999.999 0 1 0 7.707 10.707L11 7.414V19a1 1 0 1 0 2 0V7.414l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </span>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 py-6">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.707 9.293l-5-5a.999.999 0 0 0-1.414 0l-5 5A.999.999 0 1 0 7.707 10.707L11 7.414V19a1 1 0 1 0 2 0V7.414l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </span>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-[500px]">
              <div className="absolute inset-0 bg-black/60 rounded-[36px] shadow-xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-black rounded-[36px] shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=320&h=640&q=80"
                  alt="Digital Boda Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
