export default function About() {
  return (
    <section id="sobre" className="bg-[#111827] py-28">
      <div className="container-nordex">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Sobre a Nordex</span>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Tecnologia que trabalha a favor de você.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">A Nordex Soluções em Informática trabalha para tornar a tecnologia mais simples, acessível e confiável para empresas e profissionais.</p>
            <p className="mt-4 text-lg leading-8 text-slate-400">Atuamos com manutenção, suporte técnico e locação de notebooks, buscando oferecer soluções adequadas para cada necessidade.</p>
            <a href="/servicos" className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10">Conheça nossos serviços →</a>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0B1220] p-8">
              <div className="grid grid-cols-2 gap-4">
                <InfoCard icon="🔧" title="Manutenção" />
                <InfoCard icon="💻" title="Locação" orange />
                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">NORDEX</div>
                      <div className="mt-1 text-2xl font-black">Soluções em Informática</div>
                    </div>
                    <img
                    src="/image/logo-nordex.png"
                    className="h-14 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, orange = false }: { icon: string; title: string; orange?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${orange ? "border-orange-500/20 bg-orange-500/5" : "border-blue-500/20 bg-blue-500/5"}`}>
      <div className="text-4xl">{icon}</div>
      <div className="mt-4 font-bold">{title}</div>
    </div>
  );
}
