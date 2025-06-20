import Image from "next/image";
import './cardConvite.css'

export default function ConvitePage() {
  const content = [
    {
      image_path: "/assets/delivery-man.svg",
      title: "Quer fazer entregas pelo iFood?",
      subtitle: "Faça agora o seu cadastro e comece o quanto antes",
    },
    {
      image_path: "/assets/store.svg",
      title: "A sua fome de crescer ta no iFood",
      subtitle: "Cadastre seu restaurante ou o seu mercado",
    },
  ];

  function CardConvite({
    image_path,
    title,
    subtitle,
  }: {
    image_path: string;
    title: string;
    subtitle: string;
  }) {
    return (
      <div className="card-convite">
        <div className="image-content">
          <Image
            src={image_path}
            alt={title}
            width={250}
            height={350}
            className="image-content-card"
          />
        </div>

        <div className="text-content">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <button>Saiba mais</button>
        </div>
      </div>
    );
  }

  return (
    <section className="cards-convite">
      {content.map((item, index) => (
        <CardConvite key={index} {...item} />
      ))}
    </section>
  );
}
