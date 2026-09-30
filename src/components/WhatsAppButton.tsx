const WHATSAPP_NUMBER = "5542988637047";

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de falar com a Nordex.")}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Nordex pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold shadow-2xl shadow-green-500/20 transition hover:scale-110">
        <img
          src="/image/logo-Whatsapp.png"
          alt="WhatsApp"
          className="h-10 w-10 object-contain"
        />
    </a>
  );
}
