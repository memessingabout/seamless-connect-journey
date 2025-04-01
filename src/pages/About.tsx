
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Digital Boda</h1>
              <p className="text-xl text-gray-600">Transforming motorcycle taxi services across Kenya</p>
            </div>
            
            <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Digital Boda team" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Digital Boda was born out of a simple observation: while boda bodas (motorcycle taxis) were the most efficient way to navigate Kenya's busy urban centers, they lacked organization, safety standards, and technological integration.
              </p>
              <p>
                Our founder, John Mwangi, experienced firsthand the challenges of using traditional boda boda services - inconsistent pricing, safety concerns, and difficulty finding reliable riders. Determined to create a solution, he partnered with tech expert Sarah Kamau to develop a platform that would bring structure and safety to this essential transportation service.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                At Digital Boda, our mission is to transform urban mobility in Kenya by providing safe, reliable, and affordable motorcycle taxi services through technology. We aim to:
              </p>
              <ul>
                <li>Improve safety standards in the motorcycle taxi industry</li>
                <li>Create sustainable employment opportunities for riders</li>
                <li>Reduce traffic congestion in urban areas</li>
                <li>Provide accessible transportation to all Kenyans</li>
                <li>Contribute to environmental sustainability by optimizing routes and reducing emissions</li>
              </ul>
              
              <h2>Core Values</h2>
              <p>Everything we do at Digital Boda is guided by our core values:</p>
              <ul>
                <li><strong>Safety First:</strong> We prioritize the safety of our passengers and riders above all else.</li>
                <li><strong>Reliability:</strong> We are committed to providing consistent, dependable service.</li>
                <li><strong>Innovation:</strong> We continuously seek new ways to improve our service through technology.</li>
                <li><strong>Community:</strong> We value our role in the communities we serve and contribute positively to them.</li>
                <li><strong>Integrity:</strong> We operate with transparency, honesty, and ethical standards.</li>
              </ul>
              
              <h2>Our Impact</h2>
              <p>
                Since our launch, Digital Boda has:
              </p>
              <ul>
                <li>Completed over 1 million safe rides across Kenya</li>
                <li>Partnered with 5,000+ verified riders</li>
                <li>Expanded to 8 major cities including Nairobi, Mombasa, and Kisumu</li>
                <li>Reduced average waiting time for rides to under 5 minutes</li>
                <li>Implemented comprehensive rider training programs focused on safety and customer service</li>
              </ul>
              
              <div className="my-12 text-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-orange-light text-white">
                    Join the Digital Boda Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
