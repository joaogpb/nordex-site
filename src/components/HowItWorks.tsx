const steps = [
  { number: "01", title: "Entre em contato", description: "Conte o que você precisa." },
  { number: "02", title: "Fazemos o diagnóstico", description: "Identificamos o problema e a melhor solução." },
  { number: "03", title: "Receba seu orçamento", description: "Você sabe o que será feito e quanto irá custar." },
  { number: "04", title: "Nós resolvemos", description: "Executamos o serviço ou disponibilizamos o equipamento." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0B1220] py-28">
      <div className="container-nordex">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Como funciona</span>
          <h2 className="mt-4 text-4xl font-black">Resolver seu problema pode ser simples.</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-5xl font-black text-blue-500/20">{step.number}</div>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
