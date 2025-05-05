import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import TrustSection from './components/TrustSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileContactButtons from './components/MobileContactButtons';
import ServicePage from './components/ServicePage';
import ContactPage from './pages/ContactPage';
import TrustBanner from './components/TrustBanner';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import HealthcareProfessionals from './pages/services/HealthcareProfessionals';
import Students from './pages/services/Students';
import WorkingProfessionals from './pages/services/WorkingProfessionals';
import Families from './pages/services/Families';
import BusinessesLegal from './pages/services/BusinessesLegal';
import HRDAttestation from './pages/services/HRDAttestation';
import EmbassyAttestation from './pages/services/EmbassyAttestation';
import MOFAAttestation from './pages/services/MOFAAttestation';
import HomeDepartment from './pages/services/HomeDepartment';
import TranslationServices from './pages/services/TranslationServices';
import CertifiedTranslation from './pages/services/CertifiedTranslation';
import LegalTranslation from './pages/services/LegalTranslation';
import TechnicalTranslation from './pages/services/TechnicalTranslation';
import MedicalTranslation from './pages/services/MedicalTranslation';
import ApostilleServices from './pages/services/ApostilleServices';
import EducationalDocuments from './pages/services/EducationalDocuments';
import LegalDocuments from './pages/services/LegalDocuments';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ServiceSection />
                <AboutSection />
                <TrustSection />
                <TestimonialSection />
                <ContactSection />
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/healthcare-professionals" element={<HealthcareProfessionals />} />
            <Route path="/students" element={<Students />} />
            <Route path="/working-professionals" element={<WorkingProfessionals />} />
            <Route path="/families" element={<Families />} />
            <Route path="/businesses-legal" element={<BusinessesLegal />} />
            <Route path="/hrd-attestation" element={<HRDAttestation />} />
            <Route path="/embassy-attestation" element={<EmbassyAttestation />} />
            <Route path="/mofa-attestation" element={<MOFAAttestation />} />
            <Route path="/home-department" element={<HomeDepartment />} />
            <Route path="/translation-services" element={<TranslationServices />} />
            <Route path="/certified-translation" element={<CertifiedTranslation />} />
            <Route path="/legal-translation" element={<LegalTranslation />} />
            <Route path="/technical-translation" element={<TechnicalTranslation />} />
            <Route path="/medical-translation" element={<MedicalTranslation />} />
            <Route path="/apostille-services" element={<ApostilleServices />} />
            <Route path="/educational-documents" element={<EducationalDocuments />} />
            <Route path="/legal-documents" element={<LegalDocuments />} />
          </Routes>
          <Footer />
          <TrustBanner />
          <MobileContactButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;