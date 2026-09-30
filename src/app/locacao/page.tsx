import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function LocacaoPage() {
  const link = `https://wa.me/5542988637047?text=${encodeURIComponent("Olá! Gostaria de receber uma cotação para locação de notebooks.")}`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1220] px-5 pb-24 pt-36">
        <div className="container-nordex">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Locação</span>
          <h1 className="mt-4 text-5xl font-black">Notebooks para sua necessidade.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Consulte a disponibilidade de equipamentos para projetos, empresas, eventos e equipes temporárias.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Notebook Business", "Notebook Pro", "Notebook Performance"].map((name) => (
              <div key={name} className="rounded-3xl border border-white/10 bg-[#111827] p-5">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
                  <span className="text-5xl font-black">N</span>
                </div>
                <h2 className="mt-6 text-2xl font-black">{name}</h2>
                <p className="mt-2 text-slate-400">Consulte configuração e disponibilidade.</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-[#FF7A00] px-5 py-3 font-bold">Solicitar cotação</a>
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
