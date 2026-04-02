import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Service pages
import ForeclosureHelp from "./pages/services/ForeclosureHelp";
import SecondMortgage from "./pages/services/SecondMortgage";
import RentBack from "./pages/services/RentBack";
import ProbateHomes from "./pages/services/ProbateHomes";
import FastSale from "./pages/services/FastSale";
import BehindOnMortgage from "./pages/services/BehindOnMortgage";

// City landing pages
import FresnoPage from "./pages/cities/Fresno";
import ClovisPage from "./pages/cities/Clovis";
import SangerPage from "./pages/cities/Sanger";
import SelmaPage from "./pages/cities/Selma";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* Service pages */}
      <Route path="/foreclosure-help" component={ForeclosureHelp} />
      <Route path="/second-mortgage-help" component={SecondMortgage} />
      <Route path="/sell-and-stay-rent-back" component={RentBack} />
      <Route path="/probate-inherited-homes" component={ProbateHomes} />
      <Route path="/sell-house-fast" component={FastSale} />
      <Route path="/behind-on-mortgage" component={BehindOnMortgage} />

      {/* City pages */}
      <Route path="/we-buy-houses-fresno" component={FresnoPage} />
      <Route path="/we-buy-houses-clovis" component={ClovisPage} />
      <Route path="/we-buy-houses-sanger" component={SangerPage} />
      <Route path="/we-buy-houses-selma" component={SelmaPage} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
