import { useState } from "react";

const MAPS_SRC = "https://www.google.com/maps?q=" + encodeURIComponent("C. del Coso, 15, 50003 Zaragoza, España") + "&output=embed";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", asunto: "", comentario: "" });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con el servicio de envío (email/CRM) definitivo.
    setSent(true);
  };

  const inputClass = "w-full border-b border-[#D7D6D1] bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[#0B1728] placeholder:text-[#000000]/35";

  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/50">Contacto</p>
        <h1 className="mt-6 text-[clamp(52px,9vw,120px)] font-medium leading-[.9] tracking-[-0.1em]">Hablemos.</h1>
        <p className="mt-8 max-w-[450px] text-[17px] leading-7 text-[#111111]/65">Toda relación de asesoramiento comienza con una conversación.</p>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            {sent ? (
              <div className="border-t border-[#D7D6D1] py-10">
                <p className="text-[19px] tracking-[-0.02em]">Gracias, {form.nombre || "hemos recibido su mensaje"}.</p>
                <p className="mt-3 max-w-[420px] text-[15px] leading-7 text-[#111111]/60">Nos pondremos en contacto con usted en breve.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border-t border-[#D7D6D1] pt-8" data-testid="form-contacto">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/50">Nombre</label>
                    <input id="nombre" name="nombre" required value={form.nombre} onChange={update("nombre")} className={inputClass} data-testid="input-nombre" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/50">Teléfono</label>
                    <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={update("telefono")} className={inputClass} data-testid="input-telefono" />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/50">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={update("email")} className={inputClass} data-testid="input-email" />
                </div>
                <div className="mt-6">
                  <label htmlFor="asunto" className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/50">Asunto</label>
                  <input id="asunto" name="asunto" value={form.asunto} onChange={update("asunto")} className={inputClass} data-testid="input-asunto" />
                </div>
                <div className="mt-6">
                  <label htmlFor="comentario" className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/50">Comentario</label>
                  <textarea id="comentario" name="comentario" rows={4} value={form.comentario} onChange={update("comentario")} className={inputClass + " resize-none"} data-testid="input-comentario" />
                </div>
                <button type="submit" data-testid="button-enviar" className="mt-9 inline-block border-b border-[#111111]/50 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-60">Enviar mensaje →</button>
              </form>
            )}
          </div>

          <div>
            <div className="h-[320px] w-full overflow-hidden border border-[#E5E7EA] md:h-full">
              <iframe title="Oficina de IS Wealth Advisors en Zaragoza" src={MAPS_SRC} className="h-full w-full grayscale" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="mt-5 text-[13px] text-[#111111]/55">C. del Coso, 15, planta 1 · 50003 Zaragoza</p>
          </div>
        </div>
      </div>
    </div>
  );
}
