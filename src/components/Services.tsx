const services = [
  { icon: "🔧", title: "Manutenção", description: "Diagnóstico e manutenção de computadores, notebooks e equipamentos.", href: "/servicos" },
  { icon: "🛠️", title: "Suporte Técnico", description: "Atendimento para solucionar problemas de hardware, software e infraestrutura.", href: "/servicos" },
  { icon: "💻", title: "Locação de Notebooks", description: "Equipamentos para empresas, projetos, eventos, treinamentos e equipes temporárias.", href: "/locacao", featured: true },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#0B1220] py-28">
      <div className="container-nordex">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Nossos serviços</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Soluções para manter sua tecnologia funcionando.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">Da manutenção de um computador à estrutura tecnológica da sua empresa.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <a key={service.title} href={service.href} className={`group relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${service.featured ? "border-blue-500/30 bg-blue-500/5" : "border-white/10 bg-[#111827]"}`}>
              {service.featured && <div className="absolute right-6 top-6 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">Destaque</div>}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">{service.icon}</div>
              <h3 className="mt-7 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              <div className="mt-7 font-semibold text-blue-400">Saiba mais →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
