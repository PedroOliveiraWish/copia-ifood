import { ChevronRight } from "lucide-react";
import Image from "next/image";

import './cardbanner.css';

export default function CardBanner() {
  const conteudoCardGrande = [
    {
      title: "Restaurante",
      button_text: "Ver opções",
      image_path: "/assets/restaurant.webp",
    },
    {
      title: "Mercado",
      button_text: "Buscar lojas",
      image_path: "/assets/market.avif",
    },
  ];

  const conteudoCardPequeno = [
    {
      button_text: "Bebidas",
      image_path: "/assets/drinks.avif",
    },
    {
      button_text: "Farmácia",
      image_path: "/assets/pharmacy.avif",
    },
    {
      button_text: "Pet shop",
      image_path: "/assets/petshop.avif",
    },
  ];

  function CardGrandes({
    title,
    button_text,
    image_path,
  }: {
    title: string;
    button_text: string;
    image_path: string;
  }) {
    return (
      <div className="card-banner-grande">
        <div className="left">
          <div className="title">{title}</div>
          <button>
            {button_text}
            <span className="icon">
              <ChevronRight size={15}/>
            </span>
          </button>
        </div>
        <div className="right">
          <Image
            src={image_path}
            alt={title}
            width={200}
            height={150}
            className="image"
          />
        </div>
      </div>
    );
  }

  function CardPequeno({
    button_text,
    image_path,
  }: {
    button_text: string;
    image_path: string;
  }) {
    return (
      <div className="card-banner-pequeno">
        <div className="image">
          <Image
            src={image_path}
            alt="Card Pequeno"
            width={100}
            height={80}
            className="image-next"
          />
          <div className="separation"></div>
        </div>
        <button>
          {button_text}{" "}
          <span className="icon">
            <ChevronRight size={15} color="red"/>
          </span>
        </button>
      </div>
    );
  }

  return (
    <section className="card-banner">
      <div className="up">
        {conteudoCardGrande.map((item, index) => (
          <CardGrandes
            key={index}
            title={item.title}
            button_text={item.button_text}
            image_path={item.image_path}
          />
        ))}
      </div>
      <div className="down">
        {conteudoCardPequeno.map((item, index) => (
          <CardPequeno
            key={index}
            button_text={item.button_text}
            image_path={item.image_path}
          />
        ))}
      </div>
    </section>
  );
}
