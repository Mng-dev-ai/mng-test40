import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';
import {
  navItems,
  heroSection,
  featuresSection,
  testimonialsSection,
  callToActionSection,
  footerLinks,
} from '@/lib/data/landing-page';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header navItems={navItems} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero {...heroSection} />
                  <Features features={featuresSection} />
                  <Testimonials testimonials={testimonialsSection} />
                  <CallToAction {...callToActionSection} />
                </>
              }
            />
            {/* Add other routes here, e.g., for /login, /signup, etc. */}
          </Routes>
        </main>
        <Footer links={footerLinks} />
      </div>
    </Router>
  );
}

export default App;