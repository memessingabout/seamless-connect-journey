
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'For Drivers', path: '/drivers' },
  ];

  return (
    <nav className="border-b bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            Digital<span className="text-secondary">Boda</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="font-medium bg-primary hover:bg-orange-light">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-0 text-foreground">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-primary">
                    Digital<span className="text-secondary">Boda</span>
                  </span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <X size={24} />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-foreground hover:text-primary py-2 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t mt-4 pt-4 flex flex-col space-y-3">
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-light">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
