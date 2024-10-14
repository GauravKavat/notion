import { Footer } from './_components/Footer';
import { Heading } from './_components/Heading';
import { Heros } from './_components/Heros';
import { Navbar } from './_components/Navbar';

const Home = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pd-10 mb-7 sm:mb-7">
        <Navbar />
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
