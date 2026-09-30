const WHATSAPP_NUMBER = "5542988637047";

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a Nordex.")}`;

  return (
    <section id="inicio" className="hero-gradient grid-tech relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="container-nordex relative">
        <div className="grid min-h-[720px] items-center gap-16 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Soluções em tecnologia
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tecnologia que <span className="bg-gradient-to-r from-[#1677FF] to-[#38BDF8] bg-clip-text text-transparent">funciona</span> para você.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              Suporte técnico, manutenção de computadores e locação de notebooks para empresas e profissionais.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#FF7A00] px-7 py-4 text-center font-bold transition hover:-translate-y-1 hover:bg-[#ff8b1f]">
                Solicitar orçamento →
              </a>
              <a href="/servicos" className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center font-semibold text-slate-200 transition hover:bg-white/10">
                Conhecer serviços
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div><strong className="text-2xl font-black">TI</strong><p className="mt-1 text-xs text-slate-500">Soluções completas</p></div>
              <div><strong className="text-2xl font-black">Suporte</strong><p className="mt-1 text-xs text-slate-500">Atendimento técnico</p></div>
              <div><strong className="text-2xl font-black">B2B</strong><p className="mt-1 text-xs text-slate-500">Soluções empresariais</p></div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="glow-blue relative mx-auto max-w-[550px]">
              <div className="relative rounded-2xl border border-white/15 bg-slate-900 p-3 shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#111827] via-[#0f274d] to-[#1677FF]">
                  <div className="flex h-full flex-col items-center justify-center">
                    <img
                    src="/image/logo-nordex.png"
                    className="h-24 w-auto object-contain" />
                    <div className="text-3xl font-black tracking-widest">NORDEX</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.35em] text-blue-200">Soluções em Informática</div>
                  </div>
                </div>
                <div className="mx-auto mt-2 h-2 w-20 rounded-full bg-slate-700" />
              </div>

              <div className="absolute -left-10 top-16 rounded-2xl border border-white/10 bg-[#111827]/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="text-xs text-slate-500">Suporte</div>
                <div className="mt-1 font-bold text-blue-400">✓ Resolvido</div>
              </div>

              <div className="absolute -right-10 bottom-16 rounded-2xl border border-white/10 bg-[#111827]/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="text-xs text-slate-500">Locação</div>
                <div className="mt-1 font-bold text-orange-400">💻 Notebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
