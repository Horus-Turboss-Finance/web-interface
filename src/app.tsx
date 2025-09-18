
import CguPage from "./pages/CGU";
import SoonPage from "./pages/Soon";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Signin";
import LegalsPage from "./pages/Legals";
import SignupPage from "./pages/Signup";
import CookiePage from "./pages/Cookie";
import Page404 from "./pages/errors/404";
import Page418 from "./pages/errors/418";
import PrivacyPage from "./pages/Privacy";
import LandingPage from "./pages/Landing";
import ContactPage from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import FeaturePage from "./pages/Features";
import ProfilSettings from "./pages/ProfilSetting";
import GeneralSettings from "./pages/GeneralSetting";
import { Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider, AuthRoute } from "./context/userContext";
import { FinancialProvider } from "./context/financialDataContext";

import './styles/index-style.css';

function App () {
  function GlobalProvider() {
    return (
      <AuthProvider>
        <FinancialProvider>
          <Outlet/>
        </FinancialProvider>
      </AuthProvider>
    )
  }

  return (
    <Routes>
      <Route element={<GlobalProvider/>}>
        <Route element={<AuthRoute needLogin/>}>
          <Route path="/@me/setting/general" element={ <GeneralSettings /> } />
          <Route path="/@me/setting" element={<ProfilSettings/>} />
          <Route path="/@me" element={ <Dashboard /> } />
        </Route>
        <Route element={<AuthRoute notForLogged/>}>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/signin" element={<LoginPage/>} />
        </Route>

        <Route path="/" element={<LandingPage/>}  />
        <Route path="/@me/setting/notif" element={<SoonPage me />} />
        <Route path="/@me/setting/privacy" element={<SoonPage me/>} />
        <Route path="/features" element={<FeaturePage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cookies" element={<CookiePage/>} />
        <Route path="/legals" element={<LegalsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/soon" element={<SoonPage/>} />
        <Route path="/terms" element={<CguPage/>} />
        <Route path="/418" element={<Page418/>} />
        <Route path="*" element={<Page404/>} />
      </Route>
    </Routes>
  );
}

export default App;
