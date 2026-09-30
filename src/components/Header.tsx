 "use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5542988637047";
const whatsappMessage = "Olá! Gostaria de solicitar um orçamento com a Nordex.";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0B1220]/90 backdrop-blur-xl">
      <div className="container-nordex flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/image/logo-nordex.png"
            className="h-12 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-wide">NORDEX</div>
            <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">Soluções em Informática</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-slate-300 transition hover:text-white">Início</a>
          <a href="/servicos" className="text-sm text-slate-300 transition hover:text-white">Serviços</a>
          <a href="/locacao" className="text-sm text-slate-300 transition hover:text-white">Locação</a>
          <a href="/empresas" className="text-sm text-slate-300 transition hover:text-white">Para empresas</a>
          <a href="/contato" className="text-sm text-slate-300 transition hover:text-white">Contato</a>
        </nav>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-[#FF7A00] px-5 py-3 text-sm font-bold transition hover:scale-105 hover:bg-[#ff8b1f] md:block">
          Solicitar orçamento
        </a>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Abrir menu" aria-expanded={menuOpen}>
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B1220] md:hidden">
          <nav className="container-nordex flex flex-col py-5">
            {[
              ["/", "Início"],
              ["/servicos", "Serviços"],
              ["/locacao", "Locação"],
              ["/empresas", "Para empresas"],
              ["/contato", "Contato"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu} className="border-b border-white/5 py-4 text-slate-300">{label}</a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-xl bg-[#FF7A00] px-5 py-4 text-center font-bold">
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
