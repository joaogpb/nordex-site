import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1220] px-5 pb-24 pt-36">
        <div className="container-nordex">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Contato</span>
          <h1 className="mt-4 text-5xl font-black">Vamos conversar?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Entre em contato com a Nordex para solicitar um orçamento ou tirar suas dúvidas.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a href="https://wa.me/5542988637047" target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-1">
              <div className="text-3xl">💬</div>
              <h2 className="mt-5 text-xl font-black">WhatsApp</h2>
              <p className="mt-2 text-slate-400">(42) 98863-7047</p>
            </a>

            <a href="mailto:nordexsolucoeseminformatica@gmail.com" className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-1">
              <div className="text-3xl">✉️</div>
              <h2 className="mt-5 text-xl font-black">E-mail</h2>
              <p className="mt-2 break-all text-slate-400">nordexsolucoeseminformatica@gmail.com</p>
            </a>

            <a href="https://instagram.com/nordexsolucoesti" target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-1">
              <div className="text-3xl">📱</div>
              <h2 className="mt-5 text-xl font-black">Instagram</h2>
              <p className="mt-2 text-slate-400">@nordexsolucoesti</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
