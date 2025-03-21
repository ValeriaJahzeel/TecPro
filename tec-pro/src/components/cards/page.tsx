import React, { useState } from 'react';

export default function Cards() {
  const cardList = [
    {
      title: "PLA",
      subtitle: "Plástico Poliláctico",
      features: [
        {
          title: "Características:",
          description: "Biodegradable, hecho a partir de recursos renovables como el almidón de maíz."
        },
        {
          title: "Usos:",
          description: "Prototipos, modelos estéticos, juguetes y proyectos educativos."
        },
        {
          title: "Acabado:",
          description: "Superficie lisa y brillante, ideal para detalles finos."
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "PETG",
      subtitle: "Tereftalato de polietileno glicol",
      features: [
        {
          title: "Propiedades:",
          description: "Alta resistencia a la tracción, moderadamente flexible y duradero."
        },
        {
          title: "Usos:",
          description: "Componentes funcionales, piezas para uso exterior y envases resistentes a la humedad."
        },
        {
          title: "Resistencia:",
          description: "Soporta el calor y la intemperie, ideal para exteriores"
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "Nylon",
      subtitle: "Nylon",
      features: [
        {
          title: "Propiedades:",
          description: "Alta resistencia a la abrasión, excelente resistencia a la tracción, flexible y elástico."
        },
        {
          title: "Usos:",
          description: "Piezas mecánicas, componentes automotrices y engranajes."
        },
        {
          title: "Resistencia:",
          description: "Buena tolerancia al calor, aunque puede deformarse a temperaturas extremas."
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "TPU",
      subtitle: "Polímero termoplástico de uretano",
      features: [
        {
          title: "Características:",
          description: "Alta flexibilidad, elasticidad y resistencia al impacto."
        },
        {
          title: "Usos:",
          description: "Piezas flexibles como fundas de teléfono, sellos, amortiguadores y artículos deportivos."
        },
        {
          title: "Resistencia:",
          description: "Soporta temperaturas moderadas, pero no calor extremo."
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "ASA",
      subtitle: "Acrilonitrilo Estireno Acrilato",
      features: [
        {
          title: "Características:",
          description: "Resistente a los rayos UV, la intemperie y los productos químicos."
        },
        {
          title: "Usos:",
          description: "Piezas exteriores, componentes automotrices y paneles solares."
        },
        {
          title: "Durabilidad:",
          description: "Fuerte, resistente a impactos y rígido."
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "ABS",
      subtitle: "Acrilonitrilo Butadieno Estireno",
      features: [
        {
          title: "Propiedades:",
          description: "Resistente a productos químicos, aceites y grasa."
        },
        {
          title: "Usos:",
          description: "Piezas funcionales, componentes automotrices y carcasas de electrodomésticos."
        },
        {
          title: "Durabilidad:",
          description: "Alta resistencia al impacto, rigidez y dureza."
        }
      ],
      image: "img_disenio3D.png"
    },
    {
      title: "Policarbonato",
      subtitle: "",
      features: [
        {
          title: "Caracteristicas:",
          description: "Alta resistencia a productos químicos, rayos UV e hidrólisis."
        },
        {
          title: "Usos:",
          description: "Componentes automotrices, piezas estructurales y protección contra impactos."
        },
        {
          title: "Resistencia:",
          description: "Muy duradero, rígido y con excelente resistencia a la tracción."
        }
      ],
      image: "img_disenio3D.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {cardList.map((card, id) => (
    <div
      key={id}
      className="group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg"
      style={{ height: "280px" }} // Altura fija para todas las cards
    >
      {/* Imagen de fondo (visible en estado normal) */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-black bg-opacity-80 transition-opacity duration-300"
        style={{ 
          backgroundImage: `url(${card.image})`,
        }}
      />
      
      {/* Capa semi-transparente para mejorar legibilidad del texto */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-80" /> */}
      
      {/* Estado normal - Muestra el título y subtítulo sobre la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        <h2 className="text-xl font-bold text-center mb-2 text-white">{card.title}</h2>
        <p className="text-sm text-center text-white">{card.subtitle}</p>
      </div>

      {/* Estado hover - Muestra información detallada */}
      <div className="absolute inset-0 bg-azul opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-center z-20">
        <h2 className="text-lg font-bold text-center mb-4 text-white">{card.title}</h2>
        
        {/* Mostrar características en hover */}
        <ul className="space-y-2 text-sm text-white">
          {card.features.map((feature, i) => (
            <li key={i} className="text-left">
              <span className="font-semibold">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
  );
}