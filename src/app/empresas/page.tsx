import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function EmpresasPage() {
  const link = `https://wa.me/5542988637047?text=${encodeURIComponent("Olá! Gostaria de conversar sobre uma solução de TI para minha empresa.")}`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1220] px-5 pb-24 pt-36">
        <div className="container-nordex">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Para empresas</span>
          <h1 className="mt-4 text-5xl font-black">Tecnologia para manter sua empresa produtiva.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">A Nordex pode ajudar sua empresa com manutenção, suporte técnico e locação de equipamentos.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              ["Suporte técnico", "Atendimento para problemas de hardware, software e configuração."],
              ["Manutenção", "Manutenção preventiva e corretiva dos equipamentos."],
              ["Locação", "Notebooks para equipes, projetos e necessidades temporárias."],
              ["Soluções personalizadas", "Converse conosco para avaliarmos sua necessidade."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-[#111827] p-8">
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-xl bg-[#FF7A00] px-7 py-4 font-bold">Falar com a Nordex →</a>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
