import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero2Col from './components/Hero2Col';
import OurCoffees from './components/OurCoffees';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero2Col />
          <OurCoffees />
          <Closing />
          {/* Transition band cream → dark before Footer */}
          <div
            aria-hidden="true"
            className="h-20 md:h-28"
            style={{ background: 'linear-gradient(180deg, #B8A88A 0%, #5A5147 45%, #2C2D2E 100%)' }}
          />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
