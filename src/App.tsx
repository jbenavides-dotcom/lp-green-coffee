import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import EstateCoffees from './components/EstateCoffees';
import CollaborativeCoffees from './components/CollaborativeCoffees';
import CraftLab from './components/CraftLab';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Intro />
          <EstateCoffees />
          <CollaborativeCoffees />
          <CraftLab />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
