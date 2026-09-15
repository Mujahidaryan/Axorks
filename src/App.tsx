import React from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { CalProvider, useCal } from './context/CalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CalModal } from './components/CalModal';
import { MobileStickyBar } from './components/MobileStickyBar';

// Core Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { DeliveredWorkPage } from './pages/DeliveredWorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { TeamPage } from './pages/TeamPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';

// Service Pillar Sub-pages
import { AiAutomationPage } from './pages/services/AiAutomationPage';
import { WebApplicationsPage } from './pages/services/WebApplicationsPage';
import { MobileAppsPage } from './pages/services/MobileAppsPage';
import { Web3BlockchainPage } from './pages/services/Web3BlockchainPage';
import { OngoingSupportPage } from './pages/services/OngoingSupportPage';

// Work / Case Study Sub-pages
import { AgroTraceCaseStudy } from './pages/work/AgroTraceCaseStudy';
import { IpmiOsCaseStudy } from './pages/work/IpmiOsCaseStudy';
import { MediVerseCaseStudy } from './pages/work/MediVerseCaseStudy';
import { FumeCaseStudy } from './pages/work/FumeCaseStudy';

const AppContent: React.FC = () => {
  const { path } = useRouter();
  const { openCal } = useCal();

  const renderActivePage = () => {
    switch (path) {
      // Services hub & pillars
      case '/services':
        return <ServicesPage />;
      case '/services/ai-automation':
        return <AiAutomationPage />;
      case '/services/web-applications':
        return <WebApplicationsPage />;
      case '/services/mobile-apps':
        return <MobileAppsPage />;
      case '/services/web3-blockchain':
        return <Web3BlockchainPage />;
      case '/services/ongoing-support':
        return <OngoingSupportPage />;

      // Work hub & case studies
      case '/work':
        return <DeliveredWorkPage />;
      case '/work/agrotrace':
        return <AgroTraceCaseStudy />;
      case '/work/ipmi-os':
        return <IpmiOsCaseStudy />;
      case '/work/mediverse':
        return <MediVerseCaseStudy />;
      case '/work/fume':
        return <FumeCaseStudy />;

      // Governance & Information
      case '/process':
        return <ProcessPage />;
      case '/pricing':
        return <PricingPage />;
      case '/faq':
        return <FaqPage />;
      case '/about':
        return <AboutPage />;
      case '/team':
        return <TeamPage />;
      case '/careers':
        return <CareersPage />;
      case '/contact':
        return <ContactPage />;
      case '/insights':
      case '/blog':
        return <BlogPage />;

      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#030712] text-[#F8FAFC] min-h-screen selection:bg-[#F5C761] selection:text-[#1A1000] font-sans flex flex-col justify-between">
      {/* Header */}
      <Header onOpenDiscovery={openCal} />

      {/* Main Content Area */}
      <main className="w-full pt-[76px] flex-1 pb-16 md:pb-0">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Sticky Mobile Action Bar */}
      <MobileStickyBar />

      {/* Global Cal.com Booking Modal */}
      <CalModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <CalProvider>
        <AppContent />
      </CalProvider>
    </RouterProvider>
  );
}
