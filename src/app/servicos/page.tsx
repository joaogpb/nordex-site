import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1220] px-5 pb-24 pt-36">
        <div className="container-nordex">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Serviços</span>
          <h1 className="mt-4 text-5xl font-black">Soluções em informática para você e sua empresa.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Manutenção, suporte técnico e soluções para manter seus equipamentos funcionando.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["🔧", "Manutenção de computadores", "Diagnóstico, limpeza, upgrades e manutenção preventiva e corretiva."],
              ["🛠️", "Suporte técnico", "Auxílio em problemas de hardware, software, configuração e infraestrutura."],
              ["💻", "Locação de notebooks", "Equipamentos para empresas, eventos, treinamentos e projetos temporários."],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-[#111827] p-8">
                <div className="text-4xl">{icon}</div>
                <h2 className="mt-6 text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
