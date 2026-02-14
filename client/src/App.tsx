import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { Route, Switch, Redirect } from "wouter";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import LandingPage from "@/pages/LandingPage";
import LandingPageV2 from "@/pages/LandingPageV2";
import AIServicesPage from "@/pages/AIServicesPage";
import ContactPage from "@/pages/ContactPage";
import BuildPage from "@/pages/BuildPage";
import CardPage from "@/pages/CardPage";
import TermsOfUsePage from "@/pages/TermsOfUsePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import NotFound from "@/pages/not-found";

function Router() {
  // Use the hook to scroll to top on route changes
  useScrollToTop();

  return (
    <Switch>
      <Route path="/" component={LandingPageV2} />
      <Route path="/home-v1" component={LandingPage} />
      <Route path="/ai-services" component={AIServicesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/intentops">{() => <Redirect to="/ai-services" />}</Route>
      <Route path="/actuate">{() => <Redirect to="/ai-services" />}</Route>
      <Route path="/build" component={BuildPage} />
      <Route path="/card" component={CardPage} />
      <Route path="/terms-of-use" component={TermsOfUsePage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/cookie-policy" component={CookiePolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
