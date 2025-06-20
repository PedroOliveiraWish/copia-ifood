import Image from "next/image";
import './propaganda.css'

export default function Propaganda() {
  return (
    <section className="propaganda">
      <div className="image-propaganda">
        <Image src={"/assets/landing-banner-1.webp"} alt="" width={250} height={150} className="image-prop" />
      </div>
      <div className="image-propaganda">
        <Image src={"/assets/landing-banner-2.webp"} alt="" width={250} height={150} className="image-prop" />
      </div>
      <div className="image-propaganda">
        <Image src={"/assets/landing-banner-3.webp"} alt="" width={250} height={150} className="image-prop" />
      </div>
    </section>
  );
}
