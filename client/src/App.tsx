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
import DontGetWholesaled from "./pages/DontGetWholesaled";
import DontHireFriendRealtor from "./pages/DontHireFriendRealtor";

// Service pages
import ForeclosureHelp from "./pages/services/ForeclosureHelp";
import SecondMortgage from "./pages/services/SecondMortgage";
import RentBack from "./pages/services/RentBack";
import ProbateHomes from "./pages/services/ProbateHomes";
import FastSale from "./pages/services/FastSale";
import BehindOnMortgage from "./pages/services/BehindOnMortgage";

// New service pages
import RoofDamage from "./pages/services/RoofDamage";
import HoarderHouse from "./pages/services/HoarderHouse";
import DivorceHome from "./pages/services/DivorceHome";
import TiredLandlord from "./pages/services/TiredLandlord";
import JunkRemoval from "./pages/services/JunkRemoval";
import WhyChooseUs from "./pages/WhyChooseUs";
import ArmRateChange from "./pages/services/ArmRateChange";
import CantAffordHome from "./pages/services/CantAffordHome";

// City landing pages
import FresnoPage from "./pages/cities/Fresno";
import ClovisPage from "./pages/cities/Clovis";
import SangerPage from "./pages/cities/Sanger";
import SelmaPage from "./pages/cities/Selma";
import MaderaPage from "./pages/cities/Madera";
import VisaliaPage from "./pages/cities/Visalia";
import HanfordPage from "./pages/cities/Hanford";
import ReedleyPage from "./pages/cities/Reedley";

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
      <Route path="/we-buy-houses-madera" component={MaderaPage} />
      <Route path="/we-buy-houses-visalia" component={VisaliaPage} />
      <Route path="/we-buy-houses-hanford" component={HanfordPage} />
      <Route path="/we-buy-houses-reedley" component={ReedleyPage} />

      {/* New service pages */}
      <Route path="/sell-house-roof-damage" component={RoofDamage} />
      <Route path="/sell-hoarder-house" component={HoarderHouse} />
      <Route path="/sell-house-divorce" component={DivorceHome} />
      <Route path="/tired-landlord" component={TiredLandlord} />
      <Route path="/junk-removal-before-selling" component={JunkRemoval} />
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/dont-get-wholesaled" component={DontGetWholesaled} />
      <Route path="/dont-hire-friend-realtor" component={DontHireFriendRealtor} />
      <Route path="/arm-rate-change-help" component={ArmRateChange} />
      <Route path="/cant-afford-my-home" component={CantAffordHome} />

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
