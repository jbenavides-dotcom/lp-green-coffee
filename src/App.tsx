import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero2Col from './components/Hero2Col';
import NarrativeAndLines from './components/NarrativeAndLines';
import CommunityAndLab from './components/CommunityAndLab';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero2Col />
          <NarrativeAndLines />
          <CommunityAndLab />
          <Closing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
