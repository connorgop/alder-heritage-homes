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
import VacantPropertyWarning from "./pages/VacantPropertyWarning";

// Service pages
import ForeclosureHelp from "./pages/services/ForeclosureHelp";
import SecondMortgage from "./pages/services/SecondMortgage";
import RentBack from "./pages/services/RentBack";
import ProbateHomes from "./pages/services/ProbateHomes";
import FastSale from "./pages/services/FastSale";
import BehindOnMortgage from "./pages/services/BehindOnMortgage";
import RoofDamage from "./pages/services/RoofDamage";
import HoarderHouse from "./pages/services/HoarderHouse";
import DivorceHome from "./pages/services/Divorce";
import TiredLandlord from "./pages/services/TiredLandlord";
import JunkRemoval from "./pages/services/JunkRemoval";
import WhyChooseUs from "./pages/WhyChooseUs";
import ArmRateChange from "./pages/services/ArmRateChange";
import CantAffordHome from "./pages/services/CantAffordHome";
import LandlordPortfolioSale from "./pages/services/LandlordPortfolioSale";
import MoldHouse from "./pages/services/MoldHouse";
import FireDamage from "./pages/services/FireDamage";
import FoundationProblems from "./pages/services/FoundationProblems";
import MilitaryPCS from "./pages/services/MilitaryPCS";
import FreeOffer from "./pages/FreeOffer";
import Reviews from "./pages/Reviews";
import SeniorSeller from "./pages/services/SeniorSeller";
import ParentsHouse from "./pages/services/ParentsHouse";
import SellHouseFastFresno from "./pages/SellHouseFastFresno";
import SellHouseFastClovis from "./pages/SellHouseFastClovis";
import SellHouseFastVisalia from "./pages/SellHouseFastVisalia";
import CashOfferCalculator from "./pages/CashOfferCalculator";

// Google Ads landing pages (no nav, conversion-optimized)
import ArmRateAd from "./pages/ads/ArmRateAd";
import CantAffordAd from "./pages/ads/CantAffordAd";
import ForeclosureAd from "./pages/ads/ForeclosureAd";
import ProbateAd from "./pages/ads/ProbateAd";
import DivorceAd from "./pages/ads/DivorceAd";
import SellFastAd from "./pages/ads/SellFastAd";
import BehindMortgageAd from "./pages/ads/BehindMortgageAd";
import WholesalerWarningAd from "./pages/ads/WholesalerWarningAd";
import LpSeniorSeller from "./pages/lp/SeniorSeller";
import LpDownsize from "./pages/lp/Downsize";

// Fresno neighborhood pages
import FigGarden from "./pages/neighborhoods/FigGarden";
import TowerDistrict from "./pages/neighborhoods/TowerDistrict";
import WoodwardPark from "./pages/neighborhoods/WoodwardPark";
import BullardNeighborhood from "./pages/neighborhoods/Bullard";
import SunnysideNeighborhood from "./pages/neighborhoods/Sunnyside";
import McLaneNeighborhood from "./pages/neighborhoods/McLane";
import OldFigGarden from "./pages/neighborhoods/OldFigGarden";
import CloverleafVillage from "./pages/neighborhoods/CloverleafVillage";
import FigGardenVillage from "./pages/neighborhoods/FigGardenVillage";
import FresnoStateArea from "./pages/neighborhoods/FresnoState";
import NorthFresno from "./pages/neighborhoods/NorthFresno";
import SoutheastFresno from "./pages/neighborhoods/SoutheastFresno";
import ClovisNorth from "./pages/neighborhoods/ClovisNorth";

// City landing pages
import FresnoPage from "./pages/cities/Fresno";
import ClovisPage from "./pages/cities/Clovis";
import SangerPage from "./pages/cities/Sanger";
import SelmaPage from "./pages/cities/Selma";
import MaderaPage from "./pages/cities/Madera";
import VisaliaPage from "./pages/cities/Visalia";
import HanfordPage from "./pages/cities/Hanford";
import ReedleyPage from "./pages/cities/Reedley";
import BakersfieldPage from "./pages/cities/Bakersfield";
import LemooreePage from "./pages/cities/Lemoore";
import TularePage from "./pages/cities/Tulare";
import PortervillePage from "./pages/cities/Porterville";
import MercedPage from "./pages/cities/Merced";
import StocktonPage from "./pages/cities/Stockton";
import ModestoPage from "./pages/cities/Modesto";
import TurlockPage from "./pages/cities/Turlock";
import KingsCountyPage from "./pages/cities/KingsCounty";
import DinubaPage from "./pages/cities/Dinuba";
import FowlerPage from "./pages/cities/Fowler";
import KingsburgPage from "./pages/cities/Kingsburg";
import AvenalPage from "./pages/cities/Avenal";
import CoalingaPage from "./pages/cities/Coalinga";
import SkylineREI from "./pages/SkylineREI";
import FAQPage from "./pages/FAQ";
import GBPTemplates from "./pages/GBPTemplates";
import Resources from "./pages/Resources";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/resources" component={Resources} />
      <Route path="/gbp-post-templates" component={GBPTemplates} />

      {/* Service pages */}
      <Route path="/foreclosure-help" component={ForeclosureHelp} />
      <Route path="/second-mortgage-help" component={SecondMortgage} />
      <Route path="/sell-and-stay-rent-back" component={RentBack} />
      <Route path="/probate-inherited-homes" component={ProbateHomes} />
      <Route path="/sell-house-fast" component={FastSale} />
      <Route path="/behind-on-mortgage" component={BehindOnMortgage} />
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
      <Route path="/vacant-property-warning" component={VacantPropertyWarning} />
      <Route path="/sell-rental-portfolio" component={LandlordPortfolioSale} />
      <Route path="/skyline-rei" component={SkylineREI} />
      <Route path="/sell-house-mold" component={MoldHouse} />
      <Route path="/sell-house-fire-damage" component={FireDamage} />
      <Route path="/sell-house-foundation-problems" component={FoundationProblems} />
      <Route path="/military-pcs-sell-house" component={MilitaryPCS} />
      <Route path="/free-offer" component={FreeOffer} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/sell-home-retirement-fresno" component={SeniorSeller} />
      <Route path="/sell-parents-house-fresno" component={ParentsHouse} />
      <Route path="/sell-house-fast-fresno-ca" component={SellHouseFastFresno} />
      <Route path="/sell-house-fast-clovis-ca" component={SellHouseFastClovis} />
      <Route path="/sell-house-fast-visalia-ca" component={SellHouseFastVisalia} />
      <Route path="/cash-offer-calculator" component={CashOfferCalculator} />

      {/* City pages */}
      <Route path="/we-buy-houses-fresno" component={FresnoPage} />
      <Route path="/we-buy-houses-clovis" component={ClovisPage} />
      <Route path="/we-buy-houses-sanger" component={SangerPage} />
      <Route path="/we-buy-houses-selma" component={SelmaPage} />
      <Route path="/we-buy-houses-madera" component={MaderaPage} />
      <Route path="/we-buy-houses-visalia" component={VisaliaPage} />
      <Route path="/we-buy-houses-hanford" component={HanfordPage} />
      <Route path="/we-buy-houses-reedley" component={ReedleyPage} />
      <Route path="/we-buy-houses-bakersfield" component={BakersfieldPage} />
      <Route path="/we-buy-houses-lemoore" component={LemooreePage} />
      <Route path="/we-buy-houses-tulare" component={TularePage} />
      <Route path="/we-buy-houses-porterville" component={PortervillePage} />
      <Route path="/we-buy-houses-merced" component={MercedPage} />
      <Route path="/we-buy-houses-stockton" component={StocktonPage} />
      <Route path="/we-buy-houses-modesto" component={ModestoPage} />
      <Route path="/we-buy-houses-turlock" component={TurlockPage} />
      <Route path="/we-buy-houses-kings-county" component={KingsCountyPage} />
      <Route path="/we-buy-houses-dinuba" component={DinubaPage} />
      <Route path="/we-buy-houses-fowler" component={FowlerPage} />
      <Route path="/we-buy-houses-kingsburg" component={KingsburgPage} />
      <Route path="/we-buy-houses-avenal" component={AvenalPage} />
      <Route path="/we-buy-houses-coalinga" component={CoalingaPage} />

      {/* Google Ads landing pages — no nav, conversion-optimized */}
      <Route path="/lp/arm-rate-change" component={ArmRateAd} />
      <Route path="/lp/cant-afford-home" component={CantAffordAd} />
      <Route path="/lp/stop-foreclosure" component={ForeclosureAd} />
      <Route path="/lp/probate-inherited-home" component={ProbateAd} />
      <Route path="/lp/divorce-home-sale" component={DivorceAd} />
      <Route path="/lp/sell-house-fast" component={SellFastAd} />
      <Route path="/lp/behind-on-mortgage" component={BehindMortgageAd} />
      <Route path="/lp/real-cash-buyer-not-wholesaler" component={WholesalerWarningAd} />
      <Route path="/lp/senior-seller" component={LpSeniorSeller} />
      <Route path="/lp/downsize" component={LpDownsize} />

      {/* Fresno neighborhood pages */}
      <Route path="/fresno-fig-garden" component={FigGarden} />
      <Route path="/fresno-tower-district" component={TowerDistrict} />
      <Route path="/fresno-woodward-park" component={WoodwardPark} />
      <Route path="/fresno-bullard" component={BullardNeighborhood} />
      <Route path="/fresno-sunnyside" component={SunnysideNeighborhood} />
      <Route path="/fresno-mclane" component={McLaneNeighborhood} />
      <Route path="/fresno-old-fig-garden" component={OldFigGarden} />
      <Route path="/fresno-cloverleaf-village" component={CloverleafVillage} />
      <Route path="/fresno-fig-garden-village" component={FigGardenVillage} />
      <Route path="/fresno-state-area" component={FresnoStateArea} />
      <Route path="/north-fresno" component={NorthFresno} />
      <Route path="/southeast-fresno" component={SoutheastFresno} />
      <Route path="/clovis-north" component={ClovisNorth} />

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
