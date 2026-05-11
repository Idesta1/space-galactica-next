// app/components/Layout.tsx
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inter">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
