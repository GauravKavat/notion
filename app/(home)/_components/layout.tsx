import { Navbar } from "./Navbar";

const homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40"></main>
    </div>
  );
};

export default homelayout;
