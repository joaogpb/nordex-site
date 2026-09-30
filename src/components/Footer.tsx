export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080D16]">
      <div className="container-nordex py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
                    <img
                    src="/image/logo-nordex.png"
                    className="h-11 w-auto object-contain" />
              <div>
                <div className="font-black tracking-wide">NORDEX</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">Soluções em Informática</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-slate-500">Tecnologia que funciona para você. Manutenção, suporte técnico e locação de notebooks.</p>
          </div>

          <div>
            <h3 className="font-bold">Serviços</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="/servicos" className="block transition hover:text-white">Manutenção</a>
              <a href="/servicos" className="block transition hover:text-white">Suporte técnico</a>
              <a href="/locacao" className="block transition hover:text-white">Locação de notebooks</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contato</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="tel:+5542988637047" className="block transition hover:text-white">(42) 98863-7047</a>
              <a href="mailto:nordexsolucoeseminformatica@gmail.com" className="block break-all transition hover:text-white">nordexsolucoeseminformatica@gmail.com</a>
              <a href="https://instagram.com/nordexsolucoesti" target="_blank" rel="noopener noreferrer" className="block transition hover:text-white">@nordexsolucoesti</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-7 text-sm text-slate-600">
          © {new Date().getFullYear()} Nordex Soluções em Informática. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
