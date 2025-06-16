import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import SignUp from "./pages/signUp/SignUp";
import VerifyEmailOtp from "./pages/verifyEmailOtp/VerifyEmailOtp";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";

// formComponents
import MobileVerification from "./pages/userDetailsFormCard/MobileVerification";
import OTPVerification from "./pages/userDetailsFormCard/OtpVerification";
import FirstLastNameForm from "./pages/userDetailsFormCard/FirstLastNameForm";
import WhatsYourRole from "./pages/userDetailsFormCard/WhatsYourRole";
import AddYourWebsiteLink from "./pages/userDetailsFormCard/AddYourWebsiteLink";
import WhatsYourBusinessType from "./pages/userDetailsFormCard/WhatsYourBusinessType";
import WhatsYourBusinessPAN from "./pages/userDetailsFormCard/WhatsYourBusinessPAN";
import WhatsBusinessPANName from "./pages/userDetailsFormCard/WhatsBusinessPANName";
import ReviewYourDetails from "./pages/userDetailsFormCard/ReviewYourDetails";
import Congratulations from "./pages/userDetailsFormCard/Congratulations";

// Dashboard components
import SelectService from "./pages/dashboardCard/SelectService";
import CreateProject from "./pages/dashboardCard/CreateProject";
import Stylesalect from "./pages/dashboardCard/SalectService";
import ChooseOnce from "./pages/dashboardCard/ChooseOnce";
import StyleReference from "./pages/dashboardCard/StyleReference";

import SalectProject from "./pages/dashboardCard/SalectProject";
import Illustration from "./pages/dashboardCard/IllustrationPrepared";
import ChooseDesigner from "./pages/dashboardCard/ChooseDesigner";
import ChooseLavelDesign from "./pages/dashboardCard/ChooseLavelDesign";
import ImportantModal from "./pages/dashboardCard/ImportantNotice";
import FindBestTalent from "./pages/dashboardCard/FindBestTalent";
import ProjectBrief from "./pages/dashboardCard/ProjectBrief";
import ProgressBar from "./components/dashboard/progressBar/ProgressBar";
import SelectDateTime from "./pages/dashboardCard/SelectDateTime";
import BriefingCall from "./pages/dashboardCard/BriefingCall";

import Loader from "./pages/loader/Loader";
import LoaderSecond from "./components/smallComponents/loaderSecond/LoaderSecond";
import ButtonLoader from "./components/smallComponents/buttonLoader/ButtonLoader";

import BriefingCallDetails from "./pages/dashboardCard/BriefingCallDetails";
import AccountSetup from "./pages/credits/AccountSetup";
import CreditsCongratulations from "./pages/credits/CreditsCongratulations";
import Wallet from "./pages/credits/Wallet";
import Chat from "./pages/chat/Chat";
import Analytics from "./pages/analytics/Analytics";
import Designs from "./pages/designs/Designs";

import GoogleCalendarEvent from "./components/GoogleClandarAPI/GoogleCalendarEvent";
import FindingHyver from "./pages/designs/FindingHyver";
import HyverFound from "./pages/designs/HyverFound";

// Dashboard settings Pages
import DashboardLayoutThird from "./components/dashboard/dashboardLayout/DashboardLayoutThird";
import AccountInformation from "./pages/dashboardSettings/AccountInformation";

// for testing purpose
import GoogleCalendar from "./components/GoogleClandarAPI/GoogleCalendar";

import "react-image-crop/dist/ReactCrop.css";
import DesignExpanded from "./pages/analytics/DesignExpanded";
import Meetings from "./pages/meetings/Meetings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify-email" element={<VerifyEmailOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Chat />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics/design" element={<DesignExpanded />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/finding-hyver" element={<FindingHyver />} />
        <Route path="/designs/hyver-found" element={<HyverFound />} />
        <Route path="/meetings" element={<Meetings />} />

        {/* Mobile */}
        <Route path="/verify-mobile" element={<MobileVerification />} />
        <Route path="/verify-mobile-otp" element={<OTPVerification />} />
        <Route path="/user-name" element={<FirstLastNameForm />} />
        <Route path="/user-role" element={<WhatsYourRole />} />
        <Route path="/user-website-link" element={<AddYourWebsiteLink />} />
        <Route path="/user-business-type" element={<WhatsYourBusinessType />} />
        <Route path="/user-business-pan" element={<WhatsYourBusinessPAN />} />
        <Route
          path="/user-business-pan-name"
          element={<WhatsBusinessPANName />}
        />
        <Route path="/review-details" element={<ReviewYourDetails />} />
        <Route path="/user-final" element={<Congratulations />} />

        {/* Dashboard Page */}
        {/* <Route path="/service" element={<SelectService />} /> */}
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/select-service" element={<Stylesalect />} />
        <Route path="/Choose-Once" element={<ChooseOnce />} />
        <Route path="/style-reference" element={<StyleReference />} />
        <Route path="/illustration-prepared" element={<Illustration />} />
        <Route path="/select-project" element={<SalectProject />} />
        <Route path="/project-brief" element={<ProjectBrief />} />
        <Route path="/choose-designer" element={<ChooseDesigner />} />
        <Route path="/choose-level-design" element={<ChooseLavelDesign />} />
        <Route path="importantNotice-design" element={<ImportantModal />} />
        <Route path="/find-best-talent" element={<FindBestTalent />} />
        <Route path="/progress" element={<ProgressBar />} />

        {/* Briefing Call Screens */}
        <Route path="/select-datetime" element={<SelectDateTime />} />
        <Route path="/briefing-call" element={<BriefingCall />} />
        <Route
          path="/briefing-call-details"
          element={<BriefingCallDetails />}
        />

        {/* Credits Pages */}
        <Route path="/credits/pan-setup" element={<AccountSetup />} />
        <Route
          path="/credits/congratulations"
          element={<CreditsCongratulations />}
        />
        <Route path="/credits/wallet" element={<Wallet />} />

        {/* Dashboard settings Pages */}
        <Route path="/settings" element={<DashboardLayoutThird />} />

        {/* Just For Testing purpose do not delete or change */}
        <Route path="/loader" element={<Loader />} />
        <Route path="/loader-second" element={<LoaderSecond />} />
        <Route path="/gmeetapi" element={<GoogleCalendarEvent />} />
        <Route path="/button" element={<ButtonLoader />} />
        <Route path="/layout" element={<DashboardLayoutThird />} />
        <Route path="/gmeet" element={<GoogleCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
