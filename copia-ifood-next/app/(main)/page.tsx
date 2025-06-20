import React from "react";
import Banner from "../components/main/banner/Banner";
import CardBanner from "../components/main/CardBanner/CardBanner";
import CardRestaurante from "../components/main/CardRestaurante/CardRestaurante";
import Propaganda from "../components/main/Propaganda/Propaganda";
import CardMercado from "../components/main/CardMercado/CardMercado";
import ConvitePage from "../components/main/CardConvite/CardConvite";
import BannerLovePage from "../components/main/BannerLove/BannerLove";
import BeneficioPage from "../components/main/Beneficio/Beneficio";
import './page.css'

export default function Page() {
    return (
        <section >
            <Banner />
            <CardBanner />
            <div className="separator-main"></div>
            <CardRestaurante />
            <Propaganda />
            <div className="separator-main"></div>
            <CardMercado />
            <ConvitePage />
            <div className="separator-main"></div>
            <BannerLovePage />
            <BeneficioPage />
        </section>
    );
}