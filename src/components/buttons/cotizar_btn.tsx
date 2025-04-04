"use client";
import Link from "next/link";

export const BtnCotizar = () => {
  return (
    <Link 
      href="./formulario/"
      className="btn btn-primary text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 flex-grow-0"
    >
      Solicitar cotización
    </Link>
  );
};

