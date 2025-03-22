"use client";
import Link from "next/link";

export const BtnCotizar = () => {
  return (
    <Link 
      href="#cotizaciones"
      className="btn btn-primary"
    >
      Solicitar cotización
    </Link>
  );
};
