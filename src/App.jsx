
import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const CommandCenterPage = React.lazy(() => import('./pages/CommandCenterPage'));
const CommandCenterPricingPage = React.lazy(() => import('./pages/CommandCenterPricingPage'));
const CommandCenterDocumentationPage = React.lazy(() => import('./pages/CommandCenterDocumentationPage'));
const CommandCenterServicesPage = React.lazy(() => import('./pages/CommandCenterServicesPage'));
const DigitalReceptionistPage = React.lazy(() => import('./pages/DigitalReceptionistPage'));
const DigitalReceptionistServicesPage = React.lazy(() => import('./pages/DigitalReceptionistServicesPage'));
const DigitalReceptionistPricingPage = React.lazy(() => import('./pages/DigitalReceptionistPricingPage'));
const DigitalReceptionistDocumentationPage = React.lazy(() => import('./pages/DigitalReceptionistDocumentationPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const ResourcesDocumentationPage = React.lazy(() => import('./pages/ResourcesDocumentationPage'));

const LiquidHomePage = React.lazy(() => import('./pages/LiquidHomePage'));
const LiquidServicesPage = React.lazy(() => import('./pages/LiquidServicesPage'));
const LiquidPricingPage = React.lazy(() => import('./pages/LiquidPricingPage'));
const LiquidDocumentationPage = React.lazy(() => import('./pages/LiquidDocumentationPage'));

const AUTH_ROUTES = new Set(['/login', '/signup']);

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (AUTH_ROUTES.has(location.pathname)) {
      return;
    }

    const origin = `${location.pathname}${location.search}${location.hash}`;
    sessionStorage.setItem('celphix:lastOrigin', origin);

    const scrollKey = `celphix:scroll:${origin}`;
    const persistScroll = () => {
      sessionStorage.setItem(scrollKey, String(window.scrollY));
    };

    persistScroll();
    window.addEventListener('scroll', persistScroll, { passive: true });

    return () => {
      persistScroll();
      window.removeEventListener('scroll', persistScroll);
    };
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resources-documentation" element={<ResourcesDocumentationPage />} />

          {/* Command Center Routes */}
          <Route path="/command-center" element={<CommandCenterPage />} />
          <Route path="/command-center/services" element={<CommandCenterServicesPage />} />
          <Route path="/command-center/pricing" element={<CommandCenterPricingPage />} />
          <Route path="/command-center/documentation" element={<CommandCenterDocumentationPage />} />

          {/* Digital Receptionist Routes */}
          <Route path="/digital-receptionist" element={<DigitalReceptionistPage />} />
          <Route path="/digital-receptionist/services" element={<DigitalReceptionistServicesPage />} />
          <Route path="/digital-receptionist/pricing" element={<DigitalReceptionistPricingPage />} />
          <Route path="/digital-receptionist/documentation" element={<DigitalReceptionistDocumentationPage />} />

          {/* Liquid Agent Routes */}
          <Route path="/liquid-agent" element={<LiquidHomePage />} />
          <Route path="/liquid/home" element={<LiquidHomePage />} />
          <Route path="/liquid/services" element={<LiquidServicesPage />} />
          <Route path="/liquid/pricing" element={<LiquidPricingPage />} />
          <Route path="/liquid/docs" element={<LiquidDocumentationPage />} />

          {/* Liquid Placeholder Routes */}
          <Route path="/liquid/docs/status" element={<LiquidDocumentationPage />} />
          <Route path="/liquid/docs/changelog" element={<LiquidDocumentationPage />} />
          <Route path="/liquid/support" element={<HomePage />} />
          <Route path="/liquid/discord" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
