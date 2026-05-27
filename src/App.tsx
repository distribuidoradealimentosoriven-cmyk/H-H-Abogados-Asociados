import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import RemoteManagement from './components/RemoteManagement';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Civil');

  return (
    <div className="bg-bg-principal text-gray-100 min-h-screen font-sans flex flex-col justify-between selection:bg-gold-acento selection:text-bg-principal">
      {/* Sticky Header */}
      <Header />

      {/* Main Assembly */}
      <main className="flex-grow">
        
        {/* Entrance Hero */}
        <Hero />

        {/* Areas of Practice (Pass pre-fill state router) */}
        <Specialties onSelectCategory={(cat) => setSelectedCategory(cat)} />

        {/* Remote Case Management For Borderless Clients */}
        <RemoteManagement />

        {/* Instant Lead & WhatsApp Router */}
        <ContactForm 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
