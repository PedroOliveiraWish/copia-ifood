import Image from "next/image";
import "./bannerLove.css";

export default function BannerLovePage() {
  return (
    <section className="banner-love">
      <div className="text-content">
        <div className="title">Você tem fome do quê?</div>
        <div className="subtitle">
          Descubra como é ser um FoodLover e faça parte da nossa revolução!
        </div>

        <div className="buttton">
          <button>Saiba mais</button>
        </div>
      </div>
      <div className="banner-image">
        <Image
          src={"/assets/food-lover-banner.webp"}
          alt="banner-love"
          width={680}
          height={420}
          className="image-banner-love"
        />
      </div>
    </section>
  );
}
