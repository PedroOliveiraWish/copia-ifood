import Image from "next/image";
import "./cardMercado.css";

export default function CardMercado() {
  const contentCards = [
    {
      image_path: "/assets/logo-dia.avif",
      title: "Dia Supermercado",
    },
    {
      image_path: "/assets/logo-big.avif",
      title: "Big",
    },
    {
      image_path: "/assets/logo-fataly.avif",
      title: "Fataly",
    },
  ];

  function Card({ image_path, title }: { image_path: string; title: string }) {
    return (
      <div className="card-mercado">
        <div className="imagem">
          <Image
            src={image_path}
            alt={title}
            width={50}
            height={50}
            className="image-logo"
          />
        </div>
        <div className="text">{title}</div>
      </div>
    );
  }

  return (
    <section className="cards-mercado">
      <div className="title-section">Os melhores mercados</div>
      <div className="mercados">
        {contentCards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
