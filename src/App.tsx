import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Activities = lazy(() => import("./pages/Activities"));
const AgafayActivities = lazy(() => import("./pages/AgafayActivities"));
const PalmeraieActivities = lazy(() => import("./pages/PalmeraieActivities"));
const OtherActivities = lazy(() => import("./pages/OtherActivities"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteSuspenseFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/activities/agafay" element={<AgafayActivities />} />
                <Route path="/activities/palmeraie" element={<PalmeraieActivities />} />
                <Route path="/activities/other" element={<OtherActivities />} />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="/checkout/:id" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
