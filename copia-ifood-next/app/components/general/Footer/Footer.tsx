import { FacebookIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { Youtube } from "lucide-react";

import Image from "next/image";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="separator"></div>

      <nav className="navigation-footer">
        <div className="ul-list ifood">
          <div className="title">iFood</div>
          <ul className="navigation-footer-list ifood-list">
            <li>Site Institucional</li>
            <li>Fale Conosco</li>
            <li>Conta e Segurança</li>
            <li>Carreiras</li>
            <li>Entregadores</li>
          </ul>
        </div>
        <div className="ul-list descubra">
          <div className="title">Descubra</div>
          <ul className="navigation-footer-list">
            <li>Cadastre seu Restaurante ou Mercado</li>
            <li>iFood Shop</li>
            <li>iFood Empresas</li>
            <li>Blog iFood Empresas</li>
          </ul>
        </div>
        <div className="ul-list social">
          <div className="title">Social</div>
          <ul className="navigation-footer-list social-list">
            <li>
              <FacebookIcon color="#5e6166" width={30} height={30}/>
            </li>
            <li>
              <TwitterIcon color="#5e6166" width={30} height={30}/>
            </li>
            <li>
              <Youtube color="#5e6166" width={30} height={30}/>
            </li>
            <li>
              <InstagramIcon color="#5e6166" width={30} height={30}/>
            </li>
          </ul>
        </div>
      </nav>

      <div className="footer-footer">
        <div className="copy">
          <div className="logo">
            <Image
              src="/assets/logo-ifood.png"
              alt="iFood Logo"
              width={100}
              height={50}
            />
          </div>
          <div className="text">
            <p>
              © Copyright 2021 - iFood - Todos os direitos reservados iFood com
              Agência de Restaurantes Online S.A.
            </p>
            <p>
              CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila
              Yara, Osasco/SP - CEP 06.020-902
            </p>
          </div>
        </div>
        <div className="termos">
          <ul>
            <li>Termos e condições de uso</li>
            <li>Código de conduta</li>
            <li>Privacidade</li>
            <li>Dicas de segurança</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
