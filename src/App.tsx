import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero2Col from './components/Hero2Col';
import FromTheHeart from './components/FromTheHeart';
import WhatComesNext from './components/WhatComesNext';
import EstateCoffees from './components/EstateCoffees';
import CollaborativeCoffees from './components/CollaborativeCoffees';
import CraftLab from './components/CraftLab';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero2Col />
          <FromTheHeart />
          <WhatComesNext />
          <EstateCoffees />
          <CollaborativeCoffees />
          <CraftLab />
          <Closing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
