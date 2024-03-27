import React from 'react';
import Layout from './layout';

// Définissez votre composant de page
export default function Home() {
  return (
    // Utilisez la mise en page racine pour envelopper votre contenu de page
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Votre contenu de page ici */}
      </main>
    </Layout>
  );
}