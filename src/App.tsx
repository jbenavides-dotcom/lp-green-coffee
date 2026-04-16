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
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
