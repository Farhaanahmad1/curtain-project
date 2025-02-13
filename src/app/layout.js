import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import PoweredBy from "./components/PoweredBy";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <PoweredBy />

      </body>
    </html>
  );
}
