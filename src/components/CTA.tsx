const WHATSAPP_NUMBER = "5542988637047";

export default function CTA() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Encontrei a Nordex pelo site e gostaria de saber mais sobre os serviços.")}`;

  return (
    <section id="contato" className="relative overflow-hidden bg-[#0B1220] py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10" />
      <div className="container-nordex relative text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Fale conosco</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Precisa de uma solução em informática?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">Fale com a Nordex e descubra como podemos ajudar.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-xl bg-[#FF7A00] px-8 py-5 font-bold shadow-xl shadow-orange-500/10 transition hover:-translate-y-1 hover:bg-[#ff8b1f]">Solicitar orçamento pelo WhatsApp →</a>
        <p className="mt-5 text-sm text-slate-500">Atendimento personalizado • Orçamento sem compromisso</p>
      </div>
    </section>
  );
}
