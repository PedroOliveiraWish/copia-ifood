"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import "./header.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="body-header">
        <div className="logo">
          <Image
            src="/assets/logo-ifood.png"
            alt="Logo"
            width={140}
            height={50}
            onClick={() => router.push("/")}
          />
        </div>

        <nav className="navigation-link">
          <ul>
            <li>Entregador</li>
            <li>Restaurante e Mercado</li>
            <li>Carreiras</li>
            <li>iFood Card</li>
            <li>Para Empresas</li>
          </ul>
        </nav>
      </div>

      <div className="buttons-enter">
        <button className="btn signup">
          criar conta
        </button>
        <button className="btn login">
          entrar
        </button>
      </div>
    </header>
  );
}
