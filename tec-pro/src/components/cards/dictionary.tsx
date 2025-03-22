import React from 'react';
import { Cards } from './cards';

export default function MaterialesCards() {
  const materialCards = [
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
      subtitle: "Policarbonato Industrial",
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
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Materiales de Impresión</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {materialCards.map((card, id) => (
          <Cards
            key={id}
            title={card.title}
            subtitle={card.subtitle}
            features={card.features}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};