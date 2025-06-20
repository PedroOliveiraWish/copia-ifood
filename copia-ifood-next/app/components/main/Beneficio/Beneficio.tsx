import Image from "next/image";
import './beneficio.css'

export default function BeneficioPage() {
    return (
        <section className="beneficio">
            <div className="left">
                <Image 
                    src={"/assets/logo-benefits-card.svg"}
                    alt={"logo-beneficio"}
                    width={200}
                    height={100}
                    className="image-beneficio-logo"
                />
                <Image 
                    src={"/assets/benefits-card.svg"}
                    alt={""}
                    width={350}
                    height={90}
                    className="card-beneficio"
                />
            </div>
            <div className="right">
                <div className="text">
                    <span>O vale-alimentação do iFood</span>
                    <span>taxa zero para a sua empresa</span>
                </div>
                <Image 
                    src={"/assets/man-with-benefits-card.svg"}
                    alt={""}
                    width={350}
                    height={100}
                    className="man-beneficio"
                />
            </div>
        </section>
    )
}