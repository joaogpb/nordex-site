const WHATSAPP_NUMBER = "5542988637047";

export default function RentalSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Tenho interesse na locação de notebooks da Nordex. Gostaria de receber uma cotação.")}`;

  return (
    <section id="locacao" className="relative overflow-hidden bg-[#111827] py-28">
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-nordex relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0B1220] p-5 shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <LaptopCard title="Notebook Pro" />
                <LaptopCard title="Notebook Business" />
              </div>
              <div className="mt-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Equipamentos preparados</span>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[90%] rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Locação de notebooks</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Seu projeto precisa de notebooks?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">Tenha equipamentos preparados para trabalhar sem precisar investir na compra de máquinas.</p>

            <div className="mt-8 space-y-4">
              {["Projetos temporários", "Eventos e treinamentos", "Expansão de equipes", "Necessidades corporativas"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-xl bg-[#FF7A00] px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-[#ff8b1f]">
              Solicitar cotação →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaptopCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
      <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-slate-800 to-blue-900">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
              <img
                src="/image/logo-nordex.png"
                className="h-14 w-auto object-contain" />
            <div className="mt-3 text-xs font-bold text-slate-300">{title}</div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-700" />
    </div>
  );
}
