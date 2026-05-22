import { lazy, Suspense, useEffect } from "react";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { captureAttribution } from "@/lib/attribution";

// Pages
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const AboutConnor = lazy(() => import("./pages/AboutConnor"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const DontGetWholesaled = lazy(() => import("./pages/DontGetWholesaled"));
const SecondOpinion = lazy(() => import("./pages/SecondOpinion"));
const SellIn57Days = lazy(() => import("./pages/SellIn57Days"));
const SellVacantHouse = lazy(() => import("./pages/SellVacantHouse"));
// Case Studies
const CaseStudyIowaAve = lazy(() => import("./pages/case-studies/4444-iowa-ave-fresno"));
const CaseStudyDovewood = lazy(() => import("./pages/case-studies/3346-dovewood-lane-fresno"));
const CaseStudyFerger = lazy(() => import("./pages/case-studies/1463-n-ferger-ave-fresno"));
const CaseStudyFergerSteve = lazy(() => import("./pages/case-studies/ferger-ave-steve-landlord-fresno"));
const CaseStudyRoosevelt = lazy(() => import("./pages/case-studies/811-n-roosevelt-fresno"));
const CaseStudyHurleyVisalia = lazy(() => import("./pages/case-studies/hurley-property-visalia"));
const CaseStudyTulareStCA = lazy(() => import("./pages/case-studies/tulare-st-tulare-ca"));
const CaseStudyPurvisAveClovis = lazy(() => import("./pages/case-studies/1648-purvis-ave-clovis"));
const CaseStudyArmonaCA = lazy(() => import("./pages/case-studies/armona-ca"));
const CaseStudy4PropertyPortfolio = lazy(() => import("./pages/case-studies/4-property-landlord-portfolio-fresno"));
const CaseStudyLakeVanNess = lazy(() => import("./pages/case-studies/lake-van-ness-fresno-500k"));
const CaseStudyIdlewoodHanford = lazy(() => import("./pages/case-studies/1944-idlewood-circle-hanford"));
const CaseStudyIndianapolisClovis = lazy(() => import("./pages/case-studies/5561-indianapolis-ave-clovis"));
const CaseStudyCoarsegold = lazy(() => import("./pages/case-studies/coarsegold-ca-vacant-home"));
const CaseStudyBakersfieldDuplex = lazy(() => import("./pages/case-studies/bakersfield-inherited-duplex"));
const CaseStudyClovisDivorce = lazy(() => import("./pages/case-studies/clovis-divorce-settlement"));
const CaseStudiesIndex = lazy(() => import("./pages/CaseStudiesIndex"));
const DontGetLowballed = lazy(() => import("./pages/DontGetLowballed"));
const DontHireFriendRealtor = lazy(() => import("./pages/DontHireFriendRealtor"));
const VacantPropertyWarning = lazy(() => import("./pages/VacantPropertyWarning"));

// Service pages
const ForeclosureHelp = lazy(() => import("./pages/services/ForeclosureHelp"));
const ForeclosureMadera = lazy(() => import("./pages/ForeclosureMadera"));
const ForeclosureHanford = lazy(() => import("./pages/ForeclosureHanford"));
const ForeclosureVisalia = lazy(() => import("./pages/ForeclosureVisalia"));
const ForeclosureReedley = lazy(() => import("./pages/ForeclosureReedley"));
const ForeclosureKerman = lazy(() => import("./pages/ForeclosureKerman"));
const ForeclosureChowchilla = lazy(() => import("./pages/ForeclosureChowchilla"));
const SecondMortgage = lazy(() => import("./pages/services/SecondMortgage"));
const RentBack = lazy(() => import("./pages/services/RentBack"));
const ProbateHomes = lazy(() => import("./pages/services/ProbateHomes"));
const ProbateRealEstate = lazy(() => import("./pages/services/ProbateRealEstate"));
const CaliforniaProbateHomeSale = lazy(() => import("./pages/CaliforniaProbateHomeSale"));
const ProbateMadera = lazy(() => import("./pages/ProbateMadera"));
const ProbateHanford = lazy(() => import("./pages/ProbateHanford"));
const ProbateVisalia = lazy(() => import("./pages/ProbateVisalia"));
const ProbateReedley = lazy(() => import("./pages/ProbateReedley"));
const ProbateKerman = lazy(() => import("./pages/ProbateKerman"));
const ProbateChowchilla = lazy(() => import("./pages/ProbateChowchilla"));
const FastSale = lazy(() => import("./pages/services/FastSale"));
const BehindOnMortgage = lazy(() => import("./pages/services/BehindOnMortgage"));
const RoofDamage = lazy(() => import("./pages/services/RoofDamage"));
const HoarderHouse = lazy(() => import("./pages/services/HoarderHouse"));
const DivorceHome = lazy(() => import("./pages/services/Divorce"));
const TiredLandlord = lazy(() => import("./pages/services/TiredLandlord"));
const LandlordMadera = lazy(() => import("./pages/LandlordMadera"));
const LandlordHanford = lazy(() => import("./pages/LandlordHanford"));
const LandlordVisalia = lazy(() => import("./pages/LandlordVisalia"));
const LandlordReedley = lazy(() => import("./pages/LandlordReedley"));
const LandlordKerman = lazy(() => import("./pages/LandlordKerman"));
const LandlordChowchilla = lazy(() => import("./pages/LandlordChowchilla"));
const JunkRemoval = lazy(() => import("./pages/services/JunkRemoval"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const WhyILeft = lazy(() => import("./pages/WhyILeft"));
const CompetitorWarning = lazy(() => import("./pages/CompetitorWarning"));
const CompetitorWarningAd = lazy(() => import("./pages/ads/CompetitorWarningAd"));
const LeadMagnet = lazy(() => import("./pages/LeadMagnet"));
const HowToSpotWholesaler = lazy(() => import("./pages/blog/HowToSpotWholesaler"));
const CashBuyerVsListing = lazy(() => import("./pages/blog/CashBuyerVsListing"));
const ProbateHomeSaleGuide = lazy(() => import("./pages/blog/ProbateHomeSaleGuide"));
const LeadCapture = lazy(() => import("./pages/ads/LeadCapture"));
const FresnoComparison = lazy(() => import("./pages/PriceComparisons/FresnoComparison"));
const ClovisComparison = lazy(() => import("./pages/PriceComparisons/ClovisComparison"));
const VisaliaComparison = lazy(() => import("./pages/PriceComparisons/VisaliaComparison"));
const ArmRateChange = lazy(() => import("./pages/services/ArmRateChange"));
const CantAffordHome = lazy(() => import("./pages/services/CantAffordHome"));
const LandlordPortfolioSale = lazy(() => import("./pages/services/LandlordPortfolioSale"));
const MoldHouse = lazy(() => import("./pages/services/MoldHouse"));
const FireDamage = lazy(() => import("./pages/services/FireDamage"));
const CodeViolation = lazy(() => import("./pages/services/CodeViolation"));
const TaxLiens = lazy(() => import("./pages/services/TaxLiens"));
const TitleIssues = lazy(() => import("./pages/services/TitleIssues"));
const TitleIssuesKerman = lazy(() => import("./pages/TitleIssuesKerman"));
const TitleIssuesChowchilla = lazy(() => import("./pages/TitleIssuesChowchilla"));
const TitleIssuesHanford = lazy(() => import("./pages/TitleIssuesHanford"));
const TitleIssuesMadera = lazy(() => import("./pages/TitleIssuesMadera"));
const TitleIssuesReedley = lazy(() => import("./pages/TitleIssuesReedley"));
const InheritedDeedProblem = lazy(() => import("./pages/services/InheritedDeedProblem"));
const MultipleHeirs = lazy(() => import("./pages/services/MultipleHeirs"));
const UnpaidPropertyTaxes = lazy(() => import("./pages/services/UnpaidPropertyTaxes"));
const TaxDelinquent = lazy(() => import("./pages/TaxDelinquent"));
const FoundationProblems = lazy(() => import("./pages/services/FoundationProblems"));
const MilitaryPCS = lazy(() => import("./pages/services/MilitaryPCS"));
const FreeOffer = lazy(() => import("./pages/FreeOffer"));
const Reviews = lazy(() => import("./pages/Reviews"));
const TrustCenter = lazy(() => import("./pages/TrustCenter"));
const SellerProtectionChecklist = lazy(() => import("./pages/SellerProtectionChecklist"));
const SeniorSeller = lazy(() => import("./pages/services/SeniorSeller"));
const ParentsHouse = lazy(() => import("./pages/services/ParentsHouse"));
const SellMyHouse = lazy(() => import("./pages/SellMyHouse"));
const SellHouseFastFresno = lazy(() => import("./pages/SellHouseFastFresno"));
const SellMyHouseFresno = lazy(() => import("./pages/SellMyHouseFresno"));
const SellMyHouseClovis = lazy(() => import("./pages/SellMyHouseClovis"));
const SellMyHouseVisalia = lazy(() => import("./pages/SellMyHouseVisalia"));
const SellMyHouseBakersfield = lazy(() => import("./pages/SellMyHouseBakersfield"));
const SellMyHouseMadera = lazy(() => import("./pages/SellMyHouseMadera"));
const SellMyHouseHanford = lazy(() => import("./pages/SellMyHouseHanford"));
const SellMyHouseKingsburg = lazy(() => import("./pages/SellMyHouseKingsburg"));
const SellMyHouseKerman = lazy(() => import("./pages/SellMyHouseKerman"));
const SellMyHouseChowchilla = lazy(() => import("./pages/SellMyHouseChowchilla"));
const SellMyHouseStockton = lazy(() => import("./pages/SellMyHouseStockton"));
const SellMyHouseModesto = lazy(() => import("./pages/SellMyHouseModesto"));
const SellMyHouseMerced = lazy(() => import("./pages/SellMyHouseMerced"));
const SellMyHouseTulare = lazy(() => import("./pages/SellMyHouseTulare"));
const SellMyHousePorterville = lazy(() => import("./pages/SellMyHousePorterville"));
const SellMyHouseTurlock = lazy(() => import("./pages/SellMyHouseTurlock"));
const SellMyHouseLemoore = lazy(() => import("./pages/SellMyHouseLemoore"));
const SellMyHouseSelma = lazy(() => import("./pages/SellMyHouseSelma"));
const SellMyHouseSanger = lazy(() => import("./pages/SellMyHouseSanger"));
const SellMyHouseReedley = lazy(() => import("./pages/SellMyHouseReedley"));
const SellHouseAsIsFresno = lazy(() => import("./pages/SellHouseAsIsFresno"));
const SellMyHouseCashFresno = lazy(() => import("./pages/SellMyHouseCashFresno"));
const SellInheritedPropertyFresno = lazy(() => import("./pages/SellInheritedPropertyFresno"));
const HoarderHomeBuyerFresno = lazy(() => import("./pages/HoarderHomeBuyerFresno"));
const BothOptions = lazy(() => import("./pages/BothOptions"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const SellHouseFastClovis = lazy(() => import("./pages/SellHouseFastClovis"));
const SellHouseFastVisalia = lazy(() => import("./pages/SellHouseFastVisalia"));
const SellHouseFastBakersfield = lazy(() => import("./pages/SellHouseFastBakersfield"));
const SellHouseFastTulare = lazy(() => import("./pages/SellHouseFastTulare"));
const SellHouseFastHub = lazy(() => import("./pages/SellHouseFastHub"));
const SellHouseFastMadera = lazy(() => import("./pages/SellHouseFastMadera"));
const WeBuyHousesMadera = lazy(() => import("./pages/WeBuyHousesMadera"));
const CentralValleyHub = lazy(() => import("./pages/CentralValleyHub"));
const SellHouseFastCentralValley = lazy(() => import("./pages/SellHouseFastCentralValley"));
const SellHouseFastStockton = lazy(() => import("./pages/SellHouseFastStockton"));
const SellHouseFastModesto = lazy(() => import("./pages/SellHouseFastModesto"));
const SanJoaquinCountyHub = lazy(() => import("./pages/SanJoaquinCountyHub"));
const FresnoHousingMarket = lazy(() => import("./pages/FresnoHousingMarket"));
const VisaliaHousingMarket = lazy(() => import("./pages/VisaliaHousingMarket"));
const BeforeAfter = lazy(() => import("./pages/BeforeAfter"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const CashOfferCalculator = lazy(() => import("./pages/CashOfferCalculator"));

// Google Ads landing pages (no nav, conversion-optimized)
const ArmRateAd = lazy(() => import("./pages/ads/ArmRateAd"));
const CantAffordAd = lazy(() => import("./pages/ads/CantAffordAd"));
const ForeclosureAd = lazy(() => import("./pages/ads/ForeclosureAd"));
const ProbateAd = lazy(() => import("./pages/ads/ProbateAd"));
const DivorceAd = lazy(() => import("./pages/ads/DivorceAd"));
const SellFastAd = lazy(() => import("./pages/ads/SellFastAd"));
const BehindMortgageAd = lazy(() => import("./pages/ads/BehindMortgageAd"));
const WholesalerWarningAd = lazy(() => import("./pages/ads/WholesalerWarningAd"));
const CompramosCasasAd = lazy(() => import("./pages/ads/CompramosCasasAd"));
const LpSeniorSeller = lazy(() => import("./pages/lp/SeniorSeller"));
const LpDownsize = lazy(() => import("./pages/lp/Downsize"));

// Fresno neighborhood pages
const FigGarden = lazy(() => import("./pages/neighborhoods/FigGarden"));
const TowerDistrict = lazy(() => import("./pages/neighborhoods/TowerDistrict"));
const WoodwardPark = lazy(() => import("./pages/neighborhoods/WoodwardPark"));
const BullardNeighborhood = lazy(() => import("./pages/neighborhoods/Bullard"));
const SunnysideNeighborhood = lazy(() => import("./pages/neighborhoods/Sunnyside"));
const McLaneNeighborhood = lazy(() => import("./pages/neighborhoods/McLane"));
const OldFigGarden = lazy(() => import("./pages/neighborhoods/OldFigGarden"));
const CloverleafVillage = lazy(() => import("./pages/neighborhoods/CloverleafVillage"));
const FigGardenVillage = lazy(() => import("./pages/neighborhoods/FigGardenVillage"));
const FresnoStateArea = lazy(() => import("./pages/neighborhoods/FresnoState"));
const NorthFresno = lazy(() => import("./pages/neighborhoods/NorthFresno"));
const SoutheastFresno = lazy(() => import("./pages/neighborhoods/SoutheastFresno"));
const ClovisNorth = lazy(() => import("./pages/neighborhoods/ClovisNorth"));
const FresnoNeighborhoods = lazy(() => import("./pages/FresnoNeighborhoods"));
const HomeWorth = lazy(() => import("./pages/HomeWorth"));
const FresnoCashOfferCalculator = lazy(() => import("./pages/FreshoCashOfferCalculator"));
const SellHouseFastFAQ = lazy(() => import("./pages/SellHouseFastFAQ"));
const VisaliaNeighborhoods = lazy(() => import("./pages/VisaliaNeighborhoods"));
const VisaliaNeighborhoodMooneyBlvd = lazy(() => import("./pages/visalia-neighborhoods/MooneyBlvd"));
const VisaliaNeighborhoodCollegeOfTheSequoias = lazy(() => import("./pages/visalia-neighborhoods/CollegeOfTheSequoias"));
const VisaliaNeighborhoodGoshenAve = lazy(() => import("./pages/visalia-neighborhoods/GoshenAve"));
const VisaliaNeighborhoodDinubaAve = lazy(() => import("./pages/visalia-neighborhoods/DinubaAve"));
const VisaliaNeighborhoodBenMaddox = lazy(() => import("./pages/visalia-neighborhoods/BenMaddox"));
const VisaliaNeighborhoodDowntownVisalia = lazy(() => import("./pages/visalia-neighborhoods/DowntownVisalia"));
const VisaliaNeighborhoodMineralKing = lazy(() => import("./pages/visalia-neighborhoods/MineralKing"));
const VisaliaNeighborhoodCaldwellAve = lazy(() => import("./pages/visalia-neighborhoods/CaldwellAve"));
const BakersfieldNeighborhoods = lazy(() => import("./pages/BakersfieldNeighborhoods"));
const BakersfieldNeighborhoodEastBakersfield = lazy(() => import("./pages/neighborhoods/EastBakersfield"));
const BakersfieldNeighborhoodSouthwestBakersfield = lazy(() => import("./pages/neighborhoods/SouthwestBakersfield"));
const BakersfieldNeighborhoodOildale = lazy(() => import("./pages/neighborhoods/Oildale"));
const BakersfieldNeighborhoodKernCity = lazy(() => import("./pages/neighborhoods/KernCity"));
const BakersfieldNeighborhoodRosedale = lazy(() => import("./pages/neighborhoods/Rosedale"));
const BakersfieldNeighborhoodDowntownBakersfield = lazy(() => import("./pages/neighborhoods/DowntownBakersfield"));
const BakersfieldNeighborhoodStockdale = lazy(() => import("./pages/neighborhoods/Stockdale"));
const BakersfieldNeighborhoodOleanderSunset = lazy(() => import("./pages/neighborhoods/OleanderSunset"));
// Stockton neighborhood pages
const StocktonNeighborhoods = lazy(() => import("./pages/StocktonNeighborhoods"));
const StocktonNorthStockton = lazy(() => import("./pages/neighborhoods/stockton/north-stockton"));
const StocktonSouthStockton = lazy(() => import("./pages/neighborhoods/stockton/south-stockton"));
const StocktonLincolnVillage = lazy(() => import("./pages/neighborhoods/stockton/lincoln-village"));
const StocktonWestonRanch = lazy(() => import("./pages/neighborhoods/stockton/weston-ranch"));
const StocktonBrookside = lazy(() => import("./pages/neighborhoods/stockton/brookside"));
const StocktonDowntown = lazy(() => import("./pages/neighborhoods/stockton/downtown-stockton"));
// Modesto neighborhood pages
const ModestoNeighborhoods = lazy(() => import("./pages/ModestoNeighborhoods"));
const ModestoNorthModesto = lazy(() => import("./pages/neighborhoods/modesto/north-modesto"));
const ModestoSouthModesto = lazy(() => import("./pages/neighborhoods/modesto/south-modesto"));
const ModestoVintageFaire = lazy(() => import("./pages/neighborhoods/modesto/vintage-faire"));
const ModestoSalida = lazy(() => import("./pages/neighborhoods/modesto/salida"));
const ModestoCeres = lazy(() => import("./pages/neighborhoods/modesto/ceres"));
const ModestoDowntown = lazy(() => import("./pages/neighborhoods/modesto/downtown-modesto"));
// City landing pagess
const FresnoPage = lazy(() => import("./pages/cities/Fresno"));
const ClovisPage = lazy(() => import("./pages/cities/Clovis"));
const SangerPage = lazy(() => import("./pages/cities/Sanger"));
const CoarsegoldPage = lazy(() => import("./pages/cities/Coarsegold"));
const SelmaPage = lazy(() => import("./pages/cities/Selma"));
const MaderaPage = lazy(() => import("./pages/cities/Madera"));
const VisaliaPage = lazy(() => import("./pages/cities/Visalia"));
const HanfordPage = lazy(() => import("./pages/cities/Hanford"));
const DowntownHanford = lazy(() => import("./pages/neighborhoods/hanford/DowntownHanford"));
const NorthHanford = lazy(() => import("./pages/neighborhoods/hanford/NorthHanford"));
const SouthHanford = lazy(() => import("./pages/neighborhoods/hanford/SouthHanford"));
const EastHanford = lazy(() => import("./pages/neighborhoods/hanford/EastHanford"));
const ReedleyPage = lazy(() => import("./pages/cities/Reedley"));
const BakersfieldPage = lazy(() => import("./pages/cities/Bakersfield"));
const LemooreePage = lazy(() => import("./pages/cities/Lemoore"));
const TularePage = lazy(() => import("./pages/cities/Tulare"));
const DowntownTulare = lazy(() => import("./pages/neighborhoods/tulare/DowntownTulare"));
const DowntownMadera = lazy(() => import("./pages/neighborhoods/madera/DowntownMadera"));
const DowntownVisalia = lazy(() => import("./pages/neighborhoods/visalia/DowntownVisalia"));
const NorthVisalia = lazy(() => import("./pages/neighborhoods/visalia/NorthVisalia"));
const SouthVisalia = lazy(() => import("./pages/neighborhoods/visalia/SouthVisalia"));
const EastVisalia = lazy(() => import("./pages/neighborhoods/visalia/EastVisalia"));
const NorthMadera = lazy(() => import("./pages/neighborhoods/madera/NorthMadera"));
const SouthMadera = lazy(() => import("./pages/neighborhoods/madera/SouthMadera"));
const EastMadera = lazy(() => import("./pages/neighborhoods/madera/EastMadera"));
const NorthTulare = lazy(() => import("./pages/neighborhoods/tulare/NorthTulare"));
const SouthTulare = lazy(() => import("./pages/neighborhoods/tulare/SouthTulare"));
const EastTulare = lazy(() => import("./pages/neighborhoods/tulare/EastTulare"));
const PortervillePage = lazy(() => import("./pages/cities/Porterville"));
const MercedPage = lazy(() => import("./pages/cities/Merced"));
const StocktonPage = lazy(() => import("./pages/cities/Stockton"));
const ModestoPage = lazy(() => import("./pages/cities/Modesto"));
const TurlockPage = lazy(() => import("./pages/cities/Turlock"));
const KingsCountyPage = lazy(() => import("./pages/cities/KingsCounty"));
const KingsCountyHub = lazy(() => import("./pages/KingsCountyHub"));
const SanJoaquinPage = lazy(() => import("./pages/cities/SanJoaquin"));
const DinubaPage = lazy(() => import("./pages/cities/Dinuba"));
const FowlerPage = lazy(() => import("./pages/cities/Fowler"));
const KingsburgPage = lazy(() => import("./pages/cities/Kingsburg"));
const AvenalPage = lazy(() => import("./pages/cities/Avenal"));
const CoalingaPage = lazy(() => import("./pages/cities/Coalinga"));
const TracyPage = lazy(() => import("./pages/cities/Tracy"));
const LodiPage = lazy(() => import("./pages/cities/Lodi"));
const MantecaPage = lazy(() => import("./pages/cities/Manteca"));
const StocktonHousingMarket = lazy(() => import("./pages/StocktonHousingMarket"));
const ModestoHousingMarket = lazy(() => import("./pages/ModestoHousingMarket"));
const ReedleyNeighborhoods = lazy(() => import("./pages/ReedleyNeighborhoods"));
const FresnoCountyHub = lazy(() => import("./pages/FresnoCountyHub"));
const FresnoRealEstateResources = lazy(() => import("./pages/FresnoRealEstateResources"));
const ParlierPage = lazy(() => import("./pages/cities/Parlier"));
const SelmaNeighborhoods = lazy(() => import("./pages/SelmaNeighborhoods"));
const SangerNeighborhoods = lazy(() => import("./pages/SangerNeighborhoods"));
const SellHouseFastReedley = lazy(() => import("./pages/SellHouseFastReedley"));
const SellHouseFastSelma = lazy(() => import("./pages/SellHouseFastSelma"));
const SellHouseFastSanger = lazy(() => import("./pages/SellHouseFastSanger"));
const ReedleyHousingMarket = lazy(() => import("./pages/ReedleyHousingMarket"));
const SelmaHousingMarket = lazy(() => import("./pages/SelmaHousingMarket"));
const SangerHousingMarket = lazy(() => import("./pages/SangerHousingMarket"));
const DowntownReedley = lazy(() => import("./pages/neighborhoods/reedley/downtown-reedley"));
const KingsRiverReedley = lazy(() => import("./pages/neighborhoods/reedley/kings-river"));
const EastReedley = lazy(() => import("./pages/neighborhoods/reedley/east-reedley"));
const WestReedley = lazy(() => import("./pages/neighborhoods/reedley/west-reedley"));
const NorthReedley = lazy(() => import("./pages/neighborhoods/reedley/north-reedley"));
const DowntownSelma = lazy(() => import("./pages/neighborhoods/selma/downtown-selma"));
const EastSelma = lazy(() => import("./pages/neighborhoods/selma/east-selma"));
const WestSelma = lazy(() => import("./pages/neighborhoods/selma/west-selma"));
const FloralAvenue = lazy(() => import("./pages/neighborhoods/selma/floral-avenue"));
const DowntownSanger = lazy(() => import("./pages/neighborhoods/sanger/downtown-sanger"));
const EastSanger = lazy(() => import("./pages/neighborhoods/sanger/east-sanger"));
const WestSanger = lazy(() => import("./pages/neighborhoods/sanger/west-sanger"));
const KingsCanyonCorridor = lazy(() => import("./pages/neighborhoods/sanger/kings-canyon-corridor"));
const SkylineREI = lazy(() => import("./pages/SkylineREI"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const GBPTemplates = lazy(() => import("./pages/GBPTemplates"));
const Resources = lazy(() => import("./pages/Resources"));
const OrangeCovePage = lazy(() => import("./pages/cities/OrangeCove"));
const CutlerOrosiPage = lazy(() => import("./pages/cities/CutlerOrosi"));
const SellHouseFastOrangeCove = lazy(() => import("./pages/SellHouseFastOrangeCove"));
const SellHouseFastDinuba = lazy(() => import("./pages/SellHouseFastDinuba"));
const SellHouseFastKingsburg = lazy(() => import("./pages/SellHouseFastKingsburg"));
const SellHouseFastKerman = lazy(() => import("./pages/SellHouseFastKerman"));
const SellHouseFastChowchilla = lazy(() => import("./pages/SellHouseFastChowchilla"));
const SellHouseFastFowler = lazy(() => import("./pages/SellHouseFastFowler"));
const StanislausCountyHub = lazy(() => import("./pages/StanislausCountyHub"));
const SellHouseFastPorterville = lazy(() => import("./pages/SellHouseFastPorterville"));
const LindsayPage = lazy(() => import("./pages/cities/Lindsay"));
const SellHouseFastLindsay = lazy(() => import("./pages/SellHouseFastLindsay"));
const SellHouseFastDelano = lazy(() => import("./pages/SellHouseFastDelano"));
const SellHouseFastWasco = lazy(() => import("./pages/SellHouseFastWasco"));
const SellHouseFastCorcoran = lazy(() => import("./pages/SellHouseFastCorcoran"));
const SellHouseFastArmona = lazy(() => import("./pages/SellHouseFastArmona"));
const SellHouseFastFriant = lazy(() => import("./pages/SellHouseFastFriant"));
const SellHouseFastMcFarland = lazy(() => import("./pages/SellHouseFastMcFarland"));
const SellHouseFastShafter = lazy(() => import("./pages/SellHouseFastShafter"));
const SellerEducation = lazy(() => import("./pages/SellerEducation"));
const SellHouseFastMerced = lazy(() => import("./pages/SellHouseFastMerced"));
const SellHouseFastLemoore = lazy(() => import("./pages/SellHouseFastLemoore"));
const SellHouseFastTurlock = lazy(() => import("./pages/SellHouseFastTurlock"));
const HowMuchCashBuyersPay = lazy(() => import("./pages/HowMuchCashBuyersPay"));
const LeaveAReview = lazy(() => import("./pages/LeaveAReview"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ExeterPage = lazy(() => import("./pages/cities/Exeter"));
const StrathmoreePage = lazy(() => import("./pages/cities/Strathmore"));
const TulareCountyHub = lazy(() => import("./pages/TulareCountyHub"));
const PortervilleHousingMarket = lazy(() => import("./pages/PortervilleHousingMarket"));
const WoodlakePage = lazy(() => import("./pages/cities/Woodlake"));
const SellHouseFastExeter = lazy(() => import("./pages/SellHouseFastExeter"));
const SellHouseFastHanford = lazy(() => import("./pages/SellHouseFastHanford"));
const SellYourHomeFresno = lazy(() => import("./pages/SellYourHomeFresno"));
const CROLeadCapture = lazy(() => import("./pages/CROLeadCapture"));
const CompetitorGapAnalysis = lazy(() => import("./pages/CompetitorGapAnalysis"));
const SEORoadmap = lazy(() => import("./pages/SEORoadmap"));
const BacklinkStrategy = lazy(() => import("./pages/BacklinkStrategy"));
const WholesalerWarning = lazy(() => import("./pages/WholesalerWarning"));
const KeywordStrategy = lazy(() => import("./pages/KeywordStrategy"));
const SiteArchitecture = lazy(() => import("./pages/SiteArchitecture"));
const CompramosCasasFresno = lazy(() => import("./pages/CompramosCasasFresno"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CompetitorComparison = lazy(() => import("./pages/CompetitorComparison"));
const AlderVsOsborne = lazy(() => import("./pages/AlderVsOsborne"));
const AlderVsHomeHelpers = lazy(() => import("./pages/AlderVsHomeHelpers"));
const AlderVsPinnacle = lazy(() => import("./pages/AlderVsPinnacle"));
const AlderVsFairTrade = lazy(() => import("./pages/AlderVsFairTrade"));
const AlderVsEvergreenCapital = lazy(() => import("./pages/AlderVsEvergreenCapital"));
const BewareOfWholesalers = lazy(() => import("./pages/BewareOfWholesalers"));
const CompareOptions = lazy(() => import("./pages/CompareOptions"));
const PriceMatchGuarantee = lazy(() => import("./pages/PriceMatchGuarantee"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SmsConsent = lazy(() => import("./pages/SmsConsent"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));
const AdminSeo = lazy(() => import("./pages/AdminSeo"));
const ForProbateAttorneys = lazy(() => import("./pages/ForProbateAttorneys"));
const ForDivorceAttorneys = lazy(() => import("./pages/ForDivorceAttorneys"));
const EstateSalePartnership = lazy(() => import("./pages/EstateSalePartnership"));
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{background:"oklch(0.97 0.015 85)"}}><div className="w-8 h-8 rounded-full border-4 border-t-transparent animate-spin" style={{borderColor:"oklch(0.55 0.13 42)",borderTopColor:"transparent"}}></div></div>}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about-connor" component={AboutConnor} />
      <Route path="/why-i-left" component={WhyILeft} />
      <Route path="/competitor-warning" component={CompetitorWarning} />
      <Route path="/wholesaler-warning"><Redirect to="/competitor-warning" /></Route>
      <Route path="/ads/competitor-warning" component={CompetitorWarningAd} />
      <Route path="/lead-magnet"><Redirect to="/free-guide" /></Route>
      <Route path="/free-guide" component={LeadMagnet} />
      <Route path="/blog/how-to-spot-a-wholesaler" component={HowToSpotWholesaler} />
      <Route path="/how-to-spot-wholesaler"><Redirect to="/blog/how-to-spot-a-wholesaler" /></Route>
      <Route path="/blog/cash-buyer-vs-listing" component={CashBuyerVsListing} />
      <Route path="/cash-buyer-vs-traditional-listing"><Redirect to="/blog/cash-buyer-vs-listing" /></Route>
      <Route path="/blog/probate-home-sale-guide" component={ProbateHomeSaleGuide} />
      <Route path="/probate-home-sale"><Redirect to="/blog/probate-home-sale-guide" /></Route>
      <Route path="/price-comparison-fresno" component={FresnoComparison} />
      <Route path="/price-comparison-clovis" component={ClovisComparison} />
      <Route path="/price-comparison-visalia" component={VisaliaComparison} />
      <Route path="/ads/lead-capture" component={LeadCapture} />
      <Route path="/lead-capture" component={LeadCapture} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/faq" component={FAQPage} />

      {/* Case Studies */}
      <Route path="/case-studies" component={CaseStudiesIndex} />
      <Route path="/case-studies/4444-iowa-ave-fresno" component={CaseStudyIowaAve} />
      <Route path="/case-studies/3346-dovewood-lane-fresno" component={CaseStudyDovewood} />
      <Route path="/case-studies/1463-n-ferger-ave-fresno" component={CaseStudyFerger} />
      <Route path="/case-studies/ferger-ave-steve-landlord-fresno" component={CaseStudyFergerSteve} />
      <Route path="/case-studies/811-n-roosevelt-fresno" component={CaseStudyRoosevelt} />
      <Route path="/case-studies/hurley-property-visalia" component={CaseStudyHurleyVisalia} />
      <Route path="/case-studies/tulare-st-tulare-ca" component={CaseStudyTulareStCA} />
      <Route path="/case-studies/1648-purvis-ave-clovis" component={CaseStudyPurvisAveClovis} />
      <Route path="/case-studies/armona-ca" component={CaseStudyArmonaCA} />
      <Route path="/case-studies/4-property-landlord-portfolio-fresno" component={CaseStudy4PropertyPortfolio} />
      <Route path="/case-studies/lake-van-ness-fresno-500k" component={CaseStudyLakeVanNess} />
      <Route path="/case-studies/1944-idlewood-circle-hanford" component={CaseStudyIdlewoodHanford} />
      <Route path="/case-studies/5561-indianapolis-ave-clovis" component={CaseStudyIndianapolisClovis} />
      <Route path="/case-studies/coarsegold-ca-vacant-home" component={CaseStudyCoarsegold} />
      <Route path="/case-studies/bakersfield-inherited-duplex" component={CaseStudyBakersfieldDuplex} />
      <Route path="/case-studies/clovis-divorce-settlement" component={CaseStudyClovisDivorce} />
      <Route path="/resources" component={Resources} />
      <Route path="/gbp-post-templates" component={GBPTemplates} />

      {/* Service pages */}
      <Route path="/foreclosure-help" component={ForeclosureHelp} />
      <Route path="/stop-foreclosure-madera" component={ForeclosureMadera} />
      <Route path="/stop-foreclosure-hanford" component={ForeclosureHanford} />
      <Route path="/stop-foreclosure-visalia" component={ForeclosureVisalia} />
      <Route path="/stop-foreclosure-reedley" component={ForeclosureReedley} />
      <Route path="/stop-foreclosure-kerman" component={ForeclosureKerman} />
      <Route path="/stop-foreclosure-chowchilla" component={ForeclosureChowchilla} />
      <Route path="/second-mortgage-help" component={SecondMortgage} />
      <Route path="/sell-and-stay-rent-back" component={RentBack} />
      <Route path="/probate-inherited-homes"><Redirect to="/probate-homes" /></Route>
      <Route path="/probate-homes" component={ProbateHomes} />
      <Route path="/probate-real-estate-fresno" component={ProbateRealEstate} />
      <Route path="/california-probate-home-sale" component={CaliforniaProbateHomeSale} />
      <Route path="/probate-home-buyer-madera" component={ProbateMadera} />
      <Route path="/probate-home-buyer-hanford" component={ProbateHanford} />
      <Route path="/probate-home-buyer-visalia" component={ProbateVisalia} />
      <Route path="/probate-home-buyer-reedley" component={ProbateReedley} />
      <Route path="/probate-home-buyer-kerman" component={ProbateKerman} />
      <Route path="/probate-home-buyer-chowchilla" component={ProbateChowchilla} />
      <Route path="/sell-house-probate-california"><Redirect to="/california-probate-home-sale" /></Route>
      <Route path="/how-to-sell-probate-house-california"><Redirect to="/california-probate-home-sale" /></Route>
      <Route path="/sell-house-fast" component={FastSale} />
      <Route path="/behind-on-mortgage" component={BehindOnMortgage} />
      <Route path="/sell-house-roof-damage" component={RoofDamage} />
      <Route path="/sell-hoarder-house" component={HoarderHouse} />
      <Route path="/sell-house-divorce" component={DivorceHome} />
      <Route path="/tired-landlord" component={TiredLandlord} />
      <Route path="/sell-rental-property-madera" component={LandlordMadera} />
      <Route path="/sell-rental-property-hanford" component={LandlordHanford} />
      <Route path="/sell-rental-property-visalia" component={LandlordVisalia} />
      <Route path="/sell-rental-property-reedley" component={LandlordReedley} />
      <Route path="/sell-rental-property-kerman" component={LandlordKerman} />
      <Route path="/sell-rental-property-chowchilla" component={LandlordChowchilla} />
      <Route path="/junk-removal-before-selling" component={JunkRemoval} />
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/dont-get-wholesaled" component={DontGetWholesaled} />
      <Route path="/second-opinion" component={SecondOpinion} />
      <Route path="/sell-your-house-in-5-7-days-no-repairs-no-commissions-no-stress" component={SellIn57Days} />
      <Route path="/sell-vacant-house-fresno" component={SellVacantHouse} />
      <Route path="/dont-get-lowballed" component={DontGetLowballed} />
      <Route path="/lowball-cash-offer-fresno"><Redirect to="/dont-get-lowballed" /></Route>
      <Route path="/fair-cash-offer-home"><Redirect to="/dont-get-lowballed" /></Route>
      <Route path="/dont-hire-friend-realtor" component={DontHireFriendRealtor} />
      <Route path="/arm-rate-change-help" component={ArmRateChange} />
      <Route path="/cant-afford-my-home" component={CantAffordHome} />
      <Route path="/vacant-property-warning" component={VacantPropertyWarning} />
      <Route path="/sell-rental-portfolio" component={LandlordPortfolioSale} />
      <Route path="/skyline-rei" component={SkylineREI} />
      <Route path="/sell-house-mold" component={MoldHouse} />
      <Route path="/sell-house-fire-damage" component={FireDamage} />
      <Route path="/sell-house-code-violations-fresno" component={CodeViolation} />
      <Route path="/sell-house-tax-liens-fresno" component={TaxLiens} />
      <Route path="/sell-house-title-issues-fresno" component={TitleIssues} />
      <Route path="/sell-house-title-issues-kerman" component={TitleIssuesKerman} />
      <Route path="/sell-house-title-issues-chowchilla" component={TitleIssuesChowchilla} />
      <Route path="/sell-house-title-issues-hanford" component={TitleIssuesHanford} />
      <Route path="/sell-house-title-issues-madera" component={TitleIssuesMadera} />
      <Route path="/sell-house-title-issues-reedley" component={TitleIssuesReedley} />
      <Route path="/sell-house-deed-issues-fresno"><Redirect to="/sell-house-title-issues-fresno" /></Route>
      <Route path="/sell-house-clouded-title-fresno"><Redirect to="/sell-house-title-issues-fresno" /></Route>
      <Route path="/sell-house-with-title-problems"><Redirect to="/sell-house-title-issues-fresno" /></Route>
      <Route path="/sell-inherited-house-deed-not-transferred" component={InheritedDeedProblem} />
      <Route path="/sell-house-multiple-heirs-fresno" component={MultipleHeirs} />
      <Route path="/sell-house-co-owner-dispute-fresno"><Redirect to="/sell-house-multiple-heirs-fresno" /></Route>
      <Route path="/sell-house-unpaid-property-taxes-fresno" component={UnpaidPropertyTaxes} />
      <Route path="/tax-delinquent-property-fresno" component={TaxDelinquent} />
      <Route path="/sell-house-foundation-problems" component={FoundationProblems} />
      <Route path="/military-pcs-sell-house" component={MilitaryPCS} />
      <Route path="/free-offer" component={FreeOffer} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/trust-center" component={TrustCenter} />
      <Route path="/seller-protection-checklist" component={SellerProtectionChecklist} />
      <Route path="/sell-home-retirement-fresno" component={SeniorSeller} />
      <Route path="/sell-parents-house-fresno" component={ParentsHouse} />
      <Route path="/sell-my-house" component={SellMyHouse} />
      <Route path="/sell-my-house-fresno-ca" component={SellMyHouseFresno} />
      <Route path="/sell-my-house-fresno"><Redirect to="/sell-my-house-fresno-ca" /></Route>
      <Route path="/sell-my-house-visalia-ca" component={SellMyHouseVisalia} />
      <Route path="/sell-my-house-visalia"><Redirect to="/sell-my-house-visalia-ca" /></Route>
      <Route path="/sell-my-home-visalia"><Redirect to="/sell-my-house-visalia-ca" /></Route>
      <Route path="/sell-house-visalia-ca"><Redirect to="/sell-my-house-visalia-ca" /></Route>
      <Route path="/sell-my-house-bakersfield-ca" component={SellMyHouseBakersfield} />
      <Route path="/sell-my-house-bakersfield"><Redirect to="/sell-my-house-bakersfield-ca" /></Route>
      <Route path="/sell-my-home-bakersfield"><Redirect to="/sell-my-house-bakersfield-ca" /></Route>
      <Route path="/sell-house-bakersfield-ca"><Redirect to="/sell-my-house-bakersfield-ca" /></Route>
      <Route path="/cash-home-buyer-bakersfield"><Redirect to="/sell-my-house-bakersfield-ca" /></Route>
      <Route path="/sell-my-house-clovis-ca" component={SellMyHouseClovis} />
      <Route path="/sell-my-house-clovis"><Redirect to="/sell-my-house-clovis-ca" /></Route>
      <Route path="/sell-my-home-clovis"><Redirect to="/sell-my-house-clovis-ca" /></Route>
      <Route path="/sell-house-clovis-ca"><Redirect to="/sell-my-house-clovis-ca" /></Route>
      <Route path="/sell-my-house-madera-ca" component={SellMyHouseMadera} />
      <Route path="/sell-my-house-madera"><Redirect to="/sell-my-house-madera-ca" /></Route>
      <Route path="/sell-my-home-madera"><Redirect to="/sell-my-house-madera-ca" /></Route>
      <Route path="/sell-house-madera-ca"><Redirect to="/sell-my-house-madera-ca" /></Route>
      <Route path="/sell-my-house-hanford-ca" component={SellMyHouseHanford} />
      <Route path="/sell-my-house-hanford"><Redirect to="/sell-my-house-hanford-ca" /></Route>
      <Route path="/sell-my-home-hanford"><Redirect to="/sell-my-house-hanford-ca" /></Route>
      <Route path="/sell-house-hanford-ca"><Redirect to="/sell-my-house-hanford-ca" /></Route>
      <Route path="/sell-my-house-kingsburg-ca" component={SellMyHouseKingsburg} />
      <Route path="/sell-my-house-kingsburg"><Redirect to="/sell-my-house-kingsburg-ca" /></Route>
      <Route path="/sell-my-home-kingsburg"><Redirect to="/sell-my-house-kingsburg-ca" /></Route>
      <Route path="/sell-my-house-kerman-ca" component={SellMyHouseKerman} />
      <Route path="/sell-my-house-kerman"><Redirect to="/sell-my-house-kerman-ca" /></Route>
      <Route path="/sell-my-home-kerman"><Redirect to="/sell-my-house-kerman-ca" /></Route>
      <Route path="/sell-house-fast-kerman-ca" component={SellHouseFastKerman} />
      <Route path="/cash-home-buyers-kerman-ca"><Redirect to="/sell-my-house-kerman-ca" /></Route>
      <Route path="/sell-my-house-chowchilla-ca" component={SellMyHouseChowchilla} />
      <Route path="/sell-my-house-chowchilla"><Redirect to="/sell-my-house-chowchilla-ca" /></Route>
      <Route path="/sell-my-home-chowchilla"><Redirect to="/sell-my-house-chowchilla-ca" /></Route>
      <Route path="/sell-house-fast-chowchilla-ca" component={SellHouseFastChowchilla} />
      <Route path="/cash-home-buyers-chowchilla-ca"><Redirect to="/sell-my-house-chowchilla-ca" /></Route>
      <Route path="/sell-my-house-stockton-ca" component={SellMyHouseStockton} />
      <Route path="/sell-my-house-stockton"><Redirect to="/sell-my-house-stockton-ca" /></Route>
      <Route path="/sell-my-home-stockton"><Redirect to="/sell-my-house-stockton-ca" /></Route>
      <Route path="/sell-my-house-modesto-ca" component={SellMyHouseModesto} />
      <Route path="/sell-my-house-modesto"><Redirect to="/sell-my-house-modesto-ca" /></Route>
      <Route path="/sell-my-home-modesto"><Redirect to="/sell-my-house-modesto-ca" /></Route>
      <Route path="/sell-my-house-merced-ca" component={SellMyHouseMerced} />
      <Route path="/sell-my-house-merced"><Redirect to="/sell-my-house-merced-ca" /></Route>
      <Route path="/sell-my-home-merced"><Redirect to="/sell-my-house-merced-ca" /></Route>
      <Route path="/sell-my-house-tulare-ca" component={SellMyHouseTulare} />
      <Route path="/sell-my-house-tulare"><Redirect to="/sell-my-house-tulare-ca" /></Route>
      <Route path="/sell-my-home-tulare"><Redirect to="/sell-my-house-tulare-ca" /></Route>
      <Route path="/sell-my-house-porterville-ca" component={SellMyHousePorterville} />
      <Route path="/sell-my-house-porterville"><Redirect to="/sell-my-house-porterville-ca" /></Route>
      <Route path="/sell-my-home-porterville"><Redirect to="/sell-my-house-porterville-ca" /></Route>
      <Route path="/sell-my-house-turlock-ca" component={SellMyHouseTurlock} />
      <Route path="/sell-my-house-turlock"><Redirect to="/sell-my-house-turlock-ca" /></Route>
      <Route path="/sell-my-home-turlock"><Redirect to="/sell-my-house-turlock-ca" /></Route>
      <Route path="/sell-my-house-lemoore-ca" component={SellMyHouseLemoore} />
      <Route path="/sell-my-house-lemoore"><Redirect to="/sell-my-house-lemoore-ca" /></Route>
      <Route path="/sell-my-home-lemoore"><Redirect to="/sell-my-house-lemoore-ca" /></Route>
      <Route path="/sell-my-house-selma-ca" component={SellMyHouseSelma} />
      <Route path="/sell-my-house-selma"><Redirect to="/sell-my-house-selma-ca" /></Route>
      <Route path="/sell-my-home-selma"><Redirect to="/sell-my-house-selma-ca" /></Route>
      <Route path="/sell-my-house-sanger-ca" component={SellMyHouseSanger} />
      <Route path="/sell-my-house-sanger"><Redirect to="/sell-my-house-sanger-ca" /></Route>
      <Route path="/sell-my-home-sanger"><Redirect to="/sell-my-house-sanger-ca" /></Route>
      <Route path="/sell-my-house-reedley-ca" component={SellMyHouseReedley} />
      <Route path="/sell-my-house-reedley"><Redirect to="/sell-my-house-reedley-ca" /></Route>
      <Route path="/sell-my-home-reedley"><Redirect to="/sell-my-house-reedley-ca" /></Route>
      <Route path="/sell-house-as-is-fresno" component={SellHouseAsIsFresno} />
      <Route path="/sell-house-as-is-fresno-ca"><Redirect to="/sell-house-as-is-fresno" /></Route>
      <Route path="/sell-my-house-cash-fresno" component={SellMyHouseCashFresno} />
      <Route path="/sell-house-for-cash-fresno"><Redirect to="/sell-my-house-cash-fresno" /></Route>
      <Route path="/sell-inherited-property-fresno" component={SellInheritedPropertyFresno} />
      <Route path="/sell-inherited-house-fresno"><Redirect to="/sell-inherited-property-fresno" /></Route>
      <Route path="/hoarder-home-buyer-fresno" component={HoarderHomeBuyerFresno} />
      <Route path="/hoarder-house-buyer-fresno"><Redirect to="/hoarder-home-buyer-fresno" /></Route>
      <Route path="/sell-home-fresno-options" component={BothOptions} />
      <Route path="/our-deals" component={Portfolio} />
      <Route path="/portfolio"><Redirect to="/our-deals" /></Route>
      <Route path="/properties-purchased"><Redirect to="/our-deals" /></Route>
      <Route path="/sell-my-home-fresno"><Redirect to="/sell-your-home-fresno" /></Route>
      <Route path="/sell-my-property-fresno"><Redirect to="/sell-home-fresno-options" /></Route>
      <Route path="/sell-home-fresno"><Redirect to="/sell-home-fresno-options" /></Route>
      <Route path="/sell-house-cash-to-investor-fresno"><Redirect to="/sell-home-fresno-options" /></Route>
      <Route path="/sell-house-fresno"><Redirect to="/sell-home-fresno-options" /></Route>
      <Route path="/cro-lead-capture" component={CROLeadCapture} />
      <Route path="/lead-capture"><Redirect to="/cro-lead-capture" /></Route>
      <Route path="/conversion-strategy"><Redirect to="/cro-lead-capture" /></Route>
      <Route path="/competitor-gap-analysis" component={CompetitorGapAnalysis} />
      <Route path="/competitor-analysis"><Redirect to="/competitor-gap-analysis" /></Route>
      <Route path="/seo-roadmap" component={SEORoadmap} />
      <Route path="/90-day-roadmap"><Redirect to="/seo-roadmap" /></Route>
      <Route path="/backlink-strategy" component={BacklinkStrategy} />
      <Route path="/link-building"><Redirect to="/backlink-strategy" /></Route>
      <Route path="/wholesaler-warning" component={WholesalerWarning} />
      <Route path="/keyword-strategy" component={KeywordStrategy} />
      <Route path="/keywords"><Redirect to="/keyword-strategy" /></Route>
      <Route path="/site-architecture" component={SiteArchitecture} />
      <Route path="/compramos-casas-fresno" component={CompramosCasasFresno} />
      <Route path="/url-structure"><Redirect to="/site-architecture" /></Route>
      <Route path="/we-buy-houses-fresno-scam"><Redirect to="/wholesaler-warning" /></Route>
      <Route path="/cash-buyer-vs-wholesaler"><Redirect to="/wholesaler-warning" /></Route>
      <Route path="/sell-house-fast-fresno-ca" component={SellHouseFastFresno} />
      <Route path="/sell-house-fast-fresno"><Redirect to="/sell-house-fast-fresno-ca" /></Route>
      <Route path="/sell-my-house-fast-fresno"><Redirect to="/sell-house-fast-fresno-ca" /></Route>
      <Route path="/sell-house-fast-clovis-ca" component={SellHouseFastClovis} />
      <Route path="/sell-house-fast-visalia-ca" component={SellHouseFastVisalia} />
      <Route path="/sell-house-fast-bakersfield-ca" component={SellHouseFastBakersfield} />
      <Route path="/sell-house-fast-madera-ca" component={SellHouseFastMadera} />
      <Route path="/sell-my-house-fast-madera" component={WeBuyHousesMadera} />
      <Route path="/we-buy-houses-madera-ca"><Redirect to="/sell-my-house-fast-madera" /></Route>
      <Route path="/cash-home-buyers-madera"><Redirect to="/sell-my-house-fast-madera" /></Route>
      <Route path="/sell-house-fast-tulare-ca" component={SellHouseFastTulare} />
      <Route path="/sell-house-fast-stockton-ca" component={SellHouseFastStockton} />
      <Route path="/sell-house-fast-modesto-ca" component={SellHouseFastModesto} />
      <Route path="/san-joaquin-county" component={SanJoaquinCountyHub} />
      <Route path="/we-buy-houses-central-valley" component={CentralValleyHub} />
      <Route path="/sell-house-fast-central-valley" component={SellHouseFastCentralValley} />
      <Route path="/fresno-housing-market" component={FresnoHousingMarket} />
      <Route path="/visalia-housing-market" component={VisaliaHousingMarket} />
      <Route path="/how-it-works"><Redirect to="/contact" /></Route>
      <Route path="/before-after" component={BeforeAfter} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/sell-house-fast" component={SellHouseFastHub} />
      <Route path="/cash-offer-calculator" component={CashOfferCalculator} />

      {/* City pages */}
      <Route path="/we-buy-houses-fresno" component={FresnoPage} />
      <Route path="/we-buy-houses-clovis" component={ClovisPage} />
      <Route path="/we-buy-houses-sanger" component={SangerPage} />
      <Route path="/we-buy-houses-coarsegold-ca" component={CoarsegoldPage} />
      <Route path="/we-buy-houses-selma" component={SelmaPage} />
      <Route path="/we-buy-houses-madera" component={MaderaPage} />
      <Route path="/we-buy-houses-visalia" component={VisaliaPage} />
      <Route path="/we-buy-houses-hanford" component={HanfordPage} />
      <Route path="/sell-house-fast-hanford-ca" component={SellHouseFastHanford} />
      <Route path="/hanford-neighborhoods/downtown-hanford" component={DowntownHanford} />
      <Route path="/hanford-neighborhoods/north-hanford" component={NorthHanford} />
      <Route path="/hanford-neighborhoods/south-hanford" component={SouthHanford} />
      <Route path="/hanford-neighborhoods/east-hanford" component={EastHanford} />
      <Route path="/we-buy-houses-reedley" component={ReedleyPage} />
      <Route path="/we-buy-houses-bakersfield" component={BakersfieldPage} />
      <Route path="/we-buy-houses-lemoore" component={LemooreePage} />
      <Route path="/we-buy-houses-tulare" component={TularePage} />
      <Route path="/tulare-neighborhoods/downtown-tulare" component={DowntownTulare} />
      <Route path="/tulare-neighborhoods/north-tulare" component={NorthTulare} />
      <Route path="/tulare-neighborhoods/south-tulare" component={SouthTulare} />
      <Route path="/tulare-neighborhoods/east-tulare" component={EastTulare} />
      <Route path="/madera-neighborhoods/downtown-madera" component={DowntownMadera} />
      <Route path="/visalia-neighborhoods/downtown-visalia" component={DowntownVisalia} />
      <Route path="/visalia-neighborhoods/north-visalia" component={NorthVisalia} />
      <Route path="/visalia-neighborhoods/south-visalia" component={SouthVisalia} />
      <Route path="/visalia-neighborhoods/east-visalia" component={EastVisalia} />
      <Route path="/madera-neighborhoods/north-madera" component={NorthMadera} />
      <Route path="/madera-neighborhoods/south-madera" component={SouthMadera} />
      <Route path="/madera-neighborhoods/east-madera" component={EastMadera} />
      <Route path="/we-buy-houses-porterville" component={PortervillePage} />
      <Route path="/we-buy-houses-merced" component={MercedPage} />
      <Route path="/we-buy-houses-stockton" component={StocktonPage} />
      <Route path="/we-buy-houses-modesto" component={ModestoPage} />
      <Route path="/we-buy-houses-turlock" component={TurlockPage} />
      <Route path="/we-buy-houses-kings-county" component={KingsCountyPage} />
      <Route path="/kings-county" component={KingsCountyHub} />
      <Route path="/we-buy-houses-san-joaquin-county" component={SanJoaquinPage} />
      <Route path="/we-buy-houses-dinuba" component={DinubaPage} />
      <Route path="/we-buy-houses-parlier" component={ParlierPage} />
      <Route path="/fresno-county" component={FresnoCountyHub} />
      <Route path="/fresno-real-estate-resources" component={FresnoRealEstateResources} />
      <Route path="/we-buy-houses-fowler" component={FowlerPage} />
      <Route path="/we-buy-houses-kingsburg" component={KingsburgPage} />
      <Route path="/we-buy-houses-avenal" component={AvenalPage} />
      <Route path="/we-buy-houses-coalinga" component={CoalingaPage} />
      <Route path="/we-buy-houses-tracy" component={TracyPage} />
      <Route path="/we-buy-houses-lodi" component={LodiPage} />
      <Route path="/we-buy-houses-manteca" component={MantecaPage} />
      <Route path="/stockton-housing-market" component={StocktonHousingMarket} />
      <Route path="/modesto-housing-market" component={ModestoHousingMarket} />

      {/* Google Ads landing pages — no nav, conversion-optimized */}
      <Route path="/lp/arm-rate-change" component={ArmRateAd} />
      <Route path="/lp/cant-afford-home" component={CantAffordAd} />
      <Route path="/lp/stop-foreclosure" component={ForeclosureAd} />
      <Route path="/lp/probate-inherited-home" component={ProbateAd} />
      <Route path="/lp/divorce-home-sale" component={DivorceAd} />
      <Route path="/lp/sell-house-fast" component={SellFastAd} />
      <Route path="/lp/behind-on-mortgage" component={BehindMortgageAd} />
      <Route path="/lp/real-cash-buyer-not-wholesaler" component={WholesalerWarningAd} />
      <Route path="/lp/compramos-casas" component={CompramosCasasAd} />
      <Route path="/lp/senior-seller" component={LpSeniorSeller} />
      <Route path="/lp/downsize" component={LpDownsize} />

      {/* Fresno neighborhood pages */}
      <Route path="/fresno-neighborhoods" component={FresnoNeighborhoods} />
      <Route path="/fresno-neighborhoods/fig-garden" component={FigGarden} />
      <Route path="/fresno-neighborhoods/tower-district" component={TowerDistrict} />
      <Route path="/fresno-neighborhoods/woodward-park" component={WoodwardPark} />
      <Route path="/fresno-neighborhoods/bullard" component={BullardNeighborhood} />
      <Route path="/fresno-neighborhoods/sunnyside" component={SunnysideNeighborhood} />
      <Route path="/fresno-neighborhoods/mclane" component={McLaneNeighborhood} />
      <Route path="/fresno-neighborhoods/old-fig-garden" component={OldFigGarden} />
      <Route path="/fresno-neighborhoods/cloverleaf-village" component={CloverleafVillage} />
      <Route path="/fresno-neighborhoods/fig-garden-village" component={FigGardenVillage} />
      <Route path="/fresno-neighborhoods/fresno-state" component={FresnoStateArea} />
      <Route path="/fresno-neighborhoods/north-fresno" component={NorthFresno} />
      <Route path="/fresno-neighborhoods/southeast-fresno" component={SoutheastFresno} />
      <Route path="/fresno-neighborhoods/clovis-north" component={ClovisNorth} />
      {/* Legacy neighborhood routes — redirect via same component */}
      <Route path="/fresno-fig-garden"><Redirect to="/fresno-neighborhoods/fig-garden" /></Route>
      <Route path="/fresno-tower-district"><Redirect to="/fresno-neighborhoods/tower-district" /></Route>
      <Route path="/fresno-woodward-park"><Redirect to="/fresno-neighborhoods/woodward-park" /></Route>
      <Route path="/fresno-bullard"><Redirect to="/fresno-neighborhoods/bullard" /></Route>
      <Route path="/fresno-sunnyside"><Redirect to="/fresno-neighborhoods/sunnyside" /></Route>
      <Route path="/fresno-mclane"><Redirect to="/fresno-neighborhoods/mclane" /></Route>
      <Route path="/fresno-old-fig-garden"><Redirect to="/fresno-neighborhoods/old-fig-garden" /></Route>
      <Route path="/fresno-cloverleaf-village"><Redirect to="/fresno-neighborhoods/cloverleaf-village" /></Route>
      <Route path="/fresno-fig-garden-village"><Redirect to="/fresno-neighborhoods/fig-garden-village" /></Route>
      <Route path="/fresno-state-area"><Redirect to="/fresno-neighborhoods/fresno-state" /></Route>
      <Route path="/north-fresno"><Redirect to="/fresno-neighborhoods/north-fresno" /></Route>
      <Route path="/southeast-fresno"><Redirect to="/fresno-neighborhoods/southeast-fresno" /></Route>
      <Route path="/clovis-north"><Redirect to="/fresno-neighborhoods/clovis-north" /></Route>
      {/* Home valuation page */}
      <Route path="/what-is-my-home-worth" component={HomeWorth} />
      <Route path="/fresno-cash-offer-calculator" component={FresnoCashOfferCalculator} />
      <Route path="/sell-house-fast-faq" component={SellHouseFastFAQ} />
      {/* Visalia Neighborhoods */}
      <Route path="/visalia-neighborhoods" component={VisaliaNeighborhoods} />
      <Route path="/visalia-neighborhoods/mooney-blvd" component={VisaliaNeighborhoodMooneyBlvd} />
      <Route path="/visalia-neighborhoods/college-of-the-sequoias" component={VisaliaNeighborhoodCollegeOfTheSequoias} />
      <Route path="/visalia-neighborhoods/goshen-ave" component={VisaliaNeighborhoodGoshenAve} />
      <Route path="/visalia-neighborhoods/dinuba-ave" component={VisaliaNeighborhoodDinubaAve} />
      <Route path="/visalia-neighborhoods/ben-maddox" component={VisaliaNeighborhoodBenMaddox} />
      <Route path="/visalia-neighborhoods/downtown-visalia" component={VisaliaNeighborhoodDowntownVisalia} />
      <Route path="/visalia-neighborhoods/mineral-king" component={VisaliaNeighborhoodMineralKing} />
      <Route path="/visalia-neighborhoods/caldwell-ave" component={VisaliaNeighborhoodCaldwellAve} />
      <Route path="/bakersfield-neighborhoods" component={BakersfieldNeighborhoods} />
      <Route path="/bakersfield-neighborhoods/east-bakersfield" component={BakersfieldNeighborhoodEastBakersfield} />
      <Route path="/bakersfield-neighborhoods/southwest-bakersfield" component={BakersfieldNeighborhoodSouthwestBakersfield} />
      <Route path="/bakersfield-neighborhoods/oildale" component={BakersfieldNeighborhoodOildale} />
      <Route path="/bakersfield-neighborhoods/kern-city" component={BakersfieldNeighborhoodKernCity} />
      <Route path="/bakersfield-neighborhoods/rosedale" component={BakersfieldNeighborhoodRosedale} />
      <Route path="/bakersfield-neighborhoods/downtown-bakersfield" component={BakersfieldNeighborhoodDowntownBakersfield} />
      <Route path="/bakersfield-neighborhoods/stockdale" component={BakersfieldNeighborhoodStockdale} />
      <Route path="/bakersfield-neighborhoods/oleander-sunset" component={BakersfieldNeighborhoodOleanderSunset} />
      {/* Stockton Neighborhoods */}
      <Route path="/stockton-neighborhoods" component={StocktonNeighborhoods} />
      <Route path="/stockton-neighborhoods/north-stockton" component={StocktonNorthStockton} />
      <Route path="/stockton-neighborhoods/south-stockton" component={StocktonSouthStockton} />
      <Route path="/stockton-neighborhoods/lincoln-village" component={StocktonLincolnVillage} />
      <Route path="/stockton-neighborhoods/weston-ranch" component={StocktonWestonRanch} />
      <Route path="/stockton-neighborhoods/brookside" component={StocktonBrookside} />
      <Route path="/stockton-neighborhoods/downtown-stockton" component={StocktonDowntown} />
      {/* Modesto Neighborhoods */}
      <Route path="/modesto-neighborhoods" component={ModestoNeighborhoods} />
      <Route path="/modesto-neighborhoods/north-modesto" component={ModestoNorthModesto} />
      <Route path="/modesto-neighborhoods/south-modesto" component={ModestoSouthModesto} />
      <Route path="/modesto-neighborhoods/vintage-faire" component={ModestoVintageFaire} />
      <Route path="/modesto-neighborhoods/salida" component={ModestoSalida} />
      <Route path="/modesto-neighborhoods/ceres" component={ModestoCeres} />
      <Route path="/modesto-neighborhoods/downtown-modesto" component={ModestoDowntown} />
      {/* Reedley Neighborhoods */}
      <Route path="/reedley-neighborhoods" component={ReedleyNeighborhoods} />
      <Route path="/reedley-neighborhoods/downtown-reedley" component={DowntownReedley} />
      <Route path="/reedley-neighborhoods/kings-river" component={KingsRiverReedley} />
      <Route path="/reedley-neighborhoods/east-reedley" component={EastReedley} />
      <Route path="/reedley-neighborhoods/west-reedley" component={WestReedley} />
      <Route path="/reedley-neighborhoods/north-reedley" component={NorthReedley} />
      {/* Selma Neighborhoods */}
      <Route path="/selma-neighborhoods" component={SelmaNeighborhoods} />
      <Route path="/selma-neighborhoods/downtown-selma" component={DowntownSelma} />
      <Route path="/selma-neighborhoods/east-selma" component={EastSelma} />
      <Route path="/selma-neighborhoods/west-selma" component={WestSelma} />
      <Route path="/selma-neighborhoods/floral-avenue" component={FloralAvenue} />
      {/* Sanger Neighborhoods */}
      <Route path="/sanger-neighborhoods" component={SangerNeighborhoods} />
      <Route path="/sanger-neighborhoods/downtown-sanger" component={DowntownSanger} />
      <Route path="/sanger-neighborhoods/east-sanger" component={EastSanger} />
      <Route path="/sanger-neighborhoods/west-sanger" component={WestSanger} />
      <Route path="/sanger-neighborhoods/kings-canyon-corridor" component={KingsCanyonCorridor} />
      {/* Sell Fast Pages */}
      <Route path="/sell-house-fast-reedley-ca" component={SellHouseFastReedley} />
      <Route path="/sell-house-fast-selma-ca" component={SellHouseFastSelma} />
      <Route path="/sell-house-fast-sanger-ca" component={SellHouseFastSanger} />
      <Route path="/we-buy-houses-orange-cove" component={OrangeCovePage} />
      <Route path="/we-buy-houses-cutler-orosi" component={CutlerOrosiPage} />
      <Route path="/sell-house-fast-orange-cove-ca" component={SellHouseFastOrangeCove} />
      <Route path="/sell-house-fast-dinuba-ca" component={SellHouseFastDinuba} />
      <Route path="/sell-house-fast-kingsburg-ca" component={SellHouseFastKingsburg} />
      <Route path="/sell-house-fast-fowler-ca" component={SellHouseFastFowler} />
      {/* Housing Market Pages */}
      <Route path="/reedley-housing-market" component={ReedleyHousingMarket} />
      <Route path="/selma-housing-market" component={SelmaHousingMarket} />
      <Route path="/sanger-housing-market" component={SangerHousingMarket} />
      <Route path="/stanislaus-county" component={StanislausCountyHub} />
      <Route path="/sell-house-fast-porterville-ca" component={SellHouseFastPorterville} />
      <Route path="/we-buy-houses-lindsay" component={LindsayPage} />
      <Route path="/sell-house-fast-merced-ca" component={SellHouseFastMerced} />
      <Route path="/sell-my-house-fast-merced-ca"><Redirect to="/sell-house-fast-merced-ca" /></Route>
      <Route path="/cash-home-buyers-merced-ca"><Redirect to="/sell-house-fast-merced-ca" /></Route>
      <Route path="/we-buy-houses-merced-ca"><Redirect to="/sell-house-fast-merced-ca" /></Route>
      <Route path="/sell-house-fast-lemoore-ca" component={SellHouseFastLemoore} />
      <Route path="/sell-house-fast-turlock-ca" component={SellHouseFastTurlock} />
      <Route path="/sell-my-house-fast-turlock-ca"><Redirect to="/sell-house-fast-turlock-ca" /></Route>
      <Route path="/cash-home-buyers-turlock-ca"><Redirect to="/sell-house-fast-turlock-ca" /></Route>
      <Route path="/we-buy-houses-turlock-ca"><Redirect to="/sell-house-fast-turlock-ca" /></Route>
      <Route path="/how-much-do-cash-buyers-pay-for-houses" component={HowMuchCashBuyersPay} />
      <Route path="/leave-a-review" component={LeaveAReview} />
      <Route path="/terms-of-service"><Redirect to="/terms" /></Route>
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy-policy"><Redirect to="/privacy" /></Route>
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/sms-consent" component={SmsConsent} />
      <Route path="/sms-opt-in"><Redirect to="/sms-consent" /></Route>
      <Route path="/lp" component={LandingPage} />
      <Route path="/get-cash-offer"><Redirect to="/lp" /></Route>
      <Route path="/sell-house-tax-liens-fresno-ca"><Redirect to="/sell-house-tax-liens-fresno" /></Route>
      <Route path="/tax-liens-fresno"><Redirect to="/sell-house-tax-liens-fresno" /></Route>
      <Route path="/review"><Redirect to="/leave-a-review" /></Route>
      <Route path="/reviews/leave"><Redirect to="/leave-a-review" /></Route>
      <Route path="/how-much-do-cash-buyers-pay-for-houses-california"><Redirect to="/how-much-do-cash-buyers-pay-for-houses" /></Route>
      <Route path="/how-much-do-cash-home-buyers-pay"><Redirect to="/how-much-do-cash-buyers-pay-for-houses" /></Route>
      <Route path="/sell-my-house-fast-lemoore-ca"><Redirect to="/sell-house-fast-lemoore-ca" /></Route>
      <Route path="/cash-home-buyers-lemoore-ca"><Redirect to="/sell-house-fast-lemoore-ca" /></Route>
      <Route path="/we-buy-houses-lemoore-ca"><Redirect to="/sell-house-fast-lemoore-ca" /></Route>
      <Route path="/sell-house-fast-lindsay-ca" component={SellHouseFastLindsay} />
      <Route path="/sell-house-fast-delano-ca" component={SellHouseFastDelano} />
      <Route path="/sell-house-fast-wasco-ca" component={SellHouseFastWasco} />
      <Route path="/sell-house-fast-corcoran-ca" component={SellHouseFastCorcoran} />
      <Route path="/sell-house-fast-armona-ca" component={SellHouseFastArmona} />
      <Route path="/sell-my-house-fast-armona-ca"><Redirect to="/sell-house-fast-armona-ca" /></Route>
      <Route path="/cash-home-buyers-armona-ca"><Redirect to="/sell-house-fast-armona-ca" /></Route>
      <Route path="/we-buy-houses-armona"><Redirect to="/sell-house-fast-armona-ca" /></Route>
      <Route path="/sell-house-fast-friant-ca" component={SellHouseFastFriant} />
      <Route path="/sell-my-house-fast-friant-ca"><Redirect to="/sell-house-fast-friant-ca" /></Route>
      <Route path="/cash-home-buyers-friant-ca"><Redirect to="/sell-house-fast-friant-ca" /></Route>
      <Route path="/we-buy-houses-friant"><Redirect to="/sell-house-fast-friant-ca" /></Route>
      <Route path="/sell-house-fast-mcfarland-ca" component={SellHouseFastMcFarland} />
      <Route path="/sell-house-fast-shafter-ca" component={SellHouseFastShafter} />
      <Route path="/seller-education" component={SellerEducation} />
      <Route path="/sell-my-house-fast-lindsay"><Redirect to="/sell-house-fast-lindsay-ca" /></Route>
      <Route path="/cash-home-buyer-lindsay-ca"><Redirect to="/sell-house-fast-lindsay-ca" /></Route>
      <Route path="/we-buy-houses-exeter" component={ExeterPage} />
      <Route path="/we-buy-houses-strathmore" component={StrathmoreePage} />
      <Route path="/tulare-county" component={TulareCountyHub} />
      <Route path="/porterville-housing-market" component={PortervilleHousingMarket} />
      <Route path="/we-buy-houses-woodlake" component={WoodlakePage} />
      <Route path="/sell-house-fast-exeter-ca" component={SellHouseFastExeter} />
      <Route path="/sell-your-home-fresno" component={SellYourHomeFresno} />
      <Route path="/sell-my-home-fresno"><Redirect to="/sell-your-home-fresno" /></Route>
      <Route path="/buy-my-house-cash-fresno"><Redirect to="/sell-your-home-fresno" /></Route>
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/compare-options" component={CompareOptions} />
      <Route path="/price-match-guarantee" component={PriceMatchGuarantee} />
      <Route path="/compare-cash-buyers-fresno" component={CompetitorComparison} />
      <Route path="/alder-vs-osborne-homes" component={AlderVsOsborne} />
      <Route path="/alder-vs-home-helpers-group" component={AlderVsHomeHelpers} />
      <Route path="/alder-vs-pinnacle-home-buyers" component={AlderVsPinnacle} />
      <Route path="/alder-vs-fair-trade-real-estate" component={AlderVsFairTrade} />
      <Route path="/alder-vs-evergreen-capital" component={AlderVsEvergreenCapital} />
      <Route path="/fair-trade-real-estate-alternative"><Redirect to="/alder-vs-fair-trade-real-estate" /></Route>
      <Route path="/evergreen-capital-alternative"><Redirect to="/alder-vs-evergreen-capital" /></Route>
      <Route path="/beware-of-wholesalers-fresno" component={BewareOfWholesalers} />
      <Route path="/assignment-contract-cash-buyer-fresno"><Redirect to="/beware-of-wholesalers-fresno" /></Route>
      <Route path="/cash-home-buyers-fresno-compare"><Redirect to="/compare-cash-buyers-fresno" /></Route>
      <Route path="/we-buy-houses-fresno-comparison"><Redirect to="/compare-cash-buyers-fresno" /></Route>
      <Route path="/admin/leads" component={AdminLeads} />
      <Route path="/admin/seo" component={AdminSeo} />
      <Route path="/for-probate-attorneys" component={ForProbateAttorneys} />
      <Route path="/for-divorce-attorneys" component={ForDivorceAttorneys} />
      <Route path="/estate-sale-partnership" component={EstateSalePartnership} />
      <Route path="/admin"><Redirect to="/admin/leads" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ExitIntentPopup />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
