import { LanguageProvider } from './i18n/LanguageContext';
import TopBar from './components/TopBar';
import HeroYouInspire from './components/HeroYouInspire';
import HeartOfJourney from './components/HeartOfJourney';
import MoreHumanBand from './components/MoreHumanBand';
import OurCoffees from './components/OurCoffees';
import VIPForm from './components/VIPForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <TopBar />
        <main>
          <HeroYouInspire />
          <HeartOfJourney />
          <MoreHumanBand />
          <OurCoffees />
          <VIPForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
