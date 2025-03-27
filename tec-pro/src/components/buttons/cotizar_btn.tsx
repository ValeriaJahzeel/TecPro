"use client";
import Link from "next/link";

export const BtnCotizar = () => {
  return (
    <Link 
      href="./formulario/"
      className="btn btn-primary"
    >
      Solicitar cotización
    </Link>
  );
};
