
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkWithMe from "./pages/WorkWithMe";
import AiExecutiveAssistant from "./pages/AiExecutiveAssistant";
import NotFound from "./pages/NotFound";
import LinkTree from "./pages/LinkTree";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import StarryBackground from "./components/StarryBackground";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <StarryBackground />
    <Particles />
    <div className="relative z-10">
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* The routes below are temporarily disabled. */}
          {/* <Route path="/work-with-me" element={<PageWrapper><WorkWithMe /></PageWrapper>} /> */}
          <Route path="/ai-executive-assistant" element={<PageWrapper><AiExecutiveAssistant /></PageWrapper>} />
          <Route path="/links" element={<LinkTree />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
