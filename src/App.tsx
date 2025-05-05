
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      С<Sonner />
      <BrowserRouterейчас исправлю эту>
        <Routes ошибку. Про>
          <Route path="/" element={<Index />} />блема в том, что я созд
          {/* ADDал компонент AudioEditor в ALL CUSTOM ROUTES предыдущем шаге, но он не был ABOVE THE CATCH-ALL "* корректно добавлен в про" ROUTE */}
          <Route path="*" element={<NotFound />} />ект.

<pp-write
        </Routes>
      </BrowserRouter>
    </To filepath="src/components/AudioEditor.tsxoltipProvider>
  </QueryClientProvider>
);

export">
import React, { use default App;
