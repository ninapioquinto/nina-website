
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './pages/Index';
import WorkWithMe from './pages/WorkWithMe';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import AiExecutiveAssistant from './pages/AiExecutiveAssistant';
import LinkTree from './pages/LinkTree';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import PasswordProtection from './components/PasswordProtection';
import { Toaster } from './components/ui/sonner';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <PasswordProtection>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/work-with-me" element={<WorkWithMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<PortfolioDetail />} />
              <Route path="/ai-executive-assistant" element={<AiExecutiveAssistant />} />
              <Route path="/links" element={<LinkTree />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </Router>
        </PasswordProtection>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
