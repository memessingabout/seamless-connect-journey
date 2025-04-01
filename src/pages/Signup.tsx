
import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AuthForm type="signup" />
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
