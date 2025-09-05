import QuoteForm from '../../components/formulario/formulario';
import Header from "../header/page";
import Footer from "../footer/psge";
import React from 'react';

const Formulario = () => {
  return (
    <main className="min-h-screen bg-white">
            <Header />

      <div className="bg-white text-gris p-4 ">
      <QuoteForm />
    </div>
    <Footer />
    </main>
  );
}

export default Formulario;