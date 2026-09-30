const WHATSAPP_NUMBER = "5542988637047";

const businessServices = [
  ["🖥️", "Manutenção", "Manutenção preventiva e corretiva."],
  ["💻", "Locação", "Equipamentos para equipes e projetos."],
  ["🛠️", "Suporte", "Atendimento para problemas técnicos."],
  ["📋", "Personalizado", "Soluções de acordo com sua necessidade."],
];

export default function BusinessSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de conversar com a Nordex sobre uma solução de TI para minha empresa.")}`;

  return (
    <section id="empresas" className="blue-gradient relative overflow-hidden py-28">
      <div className="container-nordex relative">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Para empresas</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Sua empresa precisa de suporte de TI?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/80">Conte com a Nordex para manter seus equipamentos funcionando e sua equipe produtiva.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {businessServices.map(([icon, title, description]) => (
            <div key={title} className="rounded-2xl border border-white/15 bg-black/10 p-6 backdrop-blur-sm">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-5 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50/70">{description}</p>
            </div>
          ))}
        </div>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-[#1677FF] transition hover:-translate-y-1 hover:bg-slate-100">
          Quero falar sobre minha empresa →
        </a>
      </div>
    </section>
  );
}
