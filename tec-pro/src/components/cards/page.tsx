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
      title: "PC",
      subtitle: "Policarbonato",
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
          className="group relative cursor-pointer bg-blue-400 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg"
        >
          {/* Estado normal - Solo muestra el título y subtítulo */}
          <div className="h-48 flex flex-col items-center justify-center p-4 transition-all duration-300">
            <h2 className="text-xl font-bold text-center mb-2">{card.title}</h2>
            <p className="text-sm text-center">{card.subtitle}</p>
          </div>

          {/* Estado hover - Muestra información detallada y la imagen */}
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 overflow-y-auto">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-bold text-center mb-2">{card.title}</h2>
              
              {/* Mostrar imagen en hover */}
              <div className="flex justify-center mb-4">
                <img src={card.image} alt={card.title} className="h-24 w-auto object-contain" />
              </div>
              
              {/* Mostrar características en hover */}
              <ul className="space-y-2 text-sm">
                {card.features.map((feature, i) => (
                  <li key={i} className="text-left">
                    <span className="font-semibold">{feature.title}</span>{" "}
                    {feature.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}