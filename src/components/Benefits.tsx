const benefits = [
  { icon: "⚡", title: "Agilidade", description: "Buscamos solucionar o problema de forma eficiente." },
  { icon: "🔍", title: "Diagnóstico", description: "Identificamos a causa antes de propor a solução." },
  { icon: "🤝", title: "Atendimento próximo", description: "Você fala diretamente com quem entende do problema." },
  { icon: "💼", title: "Soluções para empresas", description: "Atendimento pensado para necessidades corporativas." },
];

export default function Benefits() {
  return (
    <section className="bg-[#0B1220] py-28">
      <div className="container-nordex">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Nossos diferenciais</span>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Tecnologia sem complicação.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">Nosso objetivo é entender o problema e entregar uma solução adequada para cada necessidade.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-white/10 bg-[#111827] p-6">
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="mt-5 font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
