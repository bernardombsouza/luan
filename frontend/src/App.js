import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Structure from "./pages/Structure";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./i18n/config";

// Google Analytics
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Substituir pelo ID real do Google Analytics

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
      
      // Load GA script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/structure" element={<Structure />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <Toaster position="top-right" />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
