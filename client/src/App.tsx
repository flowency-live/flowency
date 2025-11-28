import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { Route, Switch } from "wouter";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import LandingPage from "@/pages/LandingPage";
import LandingPageV2 from "@/pages/LandingPageV2";
import IntentOpsPage from "@/pages/IntentOpsPage";
import ActuatePage from "@/pages/ActuatePage";
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
      <Route path="/" component={LandingPage} />
      <Route path="/homev2" component={LandingPageV2} />
      <Route path="/intentops" component={IntentOpsPage} />
      <Route path="/actuate" component={ActuatePage} />
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
