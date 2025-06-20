import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import "./cardRestaurante.css";

export default function CardRestaurante() {
  const contentCards = [
    {
      image_path: "/assets/logo-mcdonald.avif",
      title: "Mcdonald's",
      subtitle: "Lanches",
    },
    {
      image_path: "/assets/logo-cocobambu.avif",
      title: "Coco Bambu",
      subtitle: "Frutos Do Mar",
    },
    {
      image_path: "/assets/logo-china.avif",
      title: "China in Box",
      subtitle: "Chinesa",
    },
    {
      image_path: "/assets/logo-habib.avif",
      title: "Habib's",
      subtitle: "Lanches",
    },
    {
      image_path: "/assets/logo-outback.avif",
      title: "Outback Steakhouse",
      subtitle: "Lanches",
    },
  ];

  function Card({
    image_path,
    title,
    subtitle,
  }: {
    image_path: string;
    title: string;
    subtitle: string;
  }) {
    return (
      <div className="card-restaurante">
        <div className="header-card-restaurante">
          <BadgeCheck size={20} color="red"/>
        </div>
        <div className="body-card-restaurante">
          <div className="imagem">
            <Image
              src={image_path}
              alt={title}
              width={50}
              height={50}
              className="image-logo"
            />
          </div>
          <div className="text">
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="cards-restaurante">
      <div className="title-section">Os melhores restaurantes</div>
      <div className="restaurantes">
        {contentCards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
