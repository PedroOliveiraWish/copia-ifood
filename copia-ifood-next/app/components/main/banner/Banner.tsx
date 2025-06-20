import { MapPin } from "lucide-react"
import "./banner.css";

export default function Banner() {
    return (
        <section className="banner">
            <div className="title">
                Tudo para facilitar seu dia a dia
            </div>

            <div className="sub-title">
                O que você precisa está aqui. Peça e receba onde estiver.
            </div>

            <div className="input-section">
                <div className="input-map">
                    <span className="icon">
                        <MapPin size={20} color="red"/>
                    </span>
                        <input type="text" placeholder="Endereço de entrega e número"/>
                    
                </div>
                <div className="button-submit">
                    <button type="submit">Buscar</button>
                </div>
            </div>
        </section>
    )
}