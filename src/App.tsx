
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NeonIndex from "./pages/NeonIndex";
import GraffitiIndex from "./pages/GraffitiIndex";
import NotFound from "./pages/NotFound";
import Links from "./pages/Links";
import NeonLinks from "./pages/NeonLinks";
import GraffitiLinks from "./pages/GraffitiLinks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GraffitiIndex />} />
          <Route path="/neon" element={<NeonIndex />} />
          <Route path="/classic" element={<Index />} />
          <Route path="/links" element={<GraffitiLinks />} />
          <Route path="/links-neon" element={<NeonLinks />} />
          <Route path="/links-classic" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
