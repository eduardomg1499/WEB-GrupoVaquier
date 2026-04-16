/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Consulting } from './components/Consulting';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Prevenir clic derecho
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevenir atajos de teclado para inspeccionar código
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I / Cmd+Option+I (Inspeccionar)
      if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
      }
      // Ctrl+Shift+J / Cmd+Option+J (Consola)
      if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.metaKey && e.altKey && e.key === 'J')) {
        e.preventDefault();
      }
      // Ctrl+Shift+C / Cmd+Option+C (Inspeccionar Elemento)
      if ((e.ctrlKey && e.shiftKey && e.key === 'C') || (e.metaKey && e.altKey && e.key === 'C')) {
        e.preventDefault();
      }
      // Ctrl+U / Cmd+Option+U (Ver código fuente)
      if ((e.ctrlKey && e.key === 'U') || (e.metaKey && e.altKey && e.key === 'U')) {
        e.preventDefault();
      }
      // Ctrl+S / Cmd+S (Guardar página)
      if ((e.ctrlKey && e.key === 'S') || (e.metaKey && e.key === 'S')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-carbon text-silver selection:bg-terracotta selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Consulting />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}