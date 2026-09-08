import { useState } from "react";
import { Link } from "wouter";

const principles = [
  ["INDEPENDENCIA", "El punto de partida es el criterio, no un producto predeterminado."],
  ["EXCELENCIA", "Aplicamos un alto nivel de exigencia a cada decisión patrimonial."],
  ["TRANSPARENCIA", "Explicamos cada decisión, sus implicaciones y las alternativas, sin letra pequeña."],
  ["VISIÓN GLOBAL", "Integramos inversión, empresa, fiscalidad y familia en una misma estrategia."],
  ["VOCACIÓN DE LARGO PLAZO", "Acompañamos la evolución del patrimonio, no una operación puntual."],
] as const;

export default function Filosofia() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <section className="bg-[#0B1728] px-6 pb-16 pt-36 text-[#F7F7F5] md:px-10 md:pb-20 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Filosofía</p>
            <h1 className="mt-10 max-w-[700px] text-[clamp(38px,4.8vw,66px)] font-normal leading-[.98] tracking-[-0.07em]">Criterio antes que producto.</h1>
            <p className="mt-8 max-w-[520px] text-[18px] leading-8 text-[#F7F7F5]/70">Cinco principios que guían cada decisión que tomamos.</p>
          </div>
          <div className="h-[220px] md:col-span-5 md:col-start-8 md:h-[300px]"><img src="/images/cypress-tuscany.jpg" alt="Cipreses en un paisaje sereno" fetchPriority="high" className="editorial-image h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-t border-[#B7A06A]">
            {principles.map(([title, text], index) => {
              const isOpen = open === index;
              return <div key={title} className="border-b border-[#B7A06A]">
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} data-testid={`principle-${index + 1}`} className="flex w-full items-center gap-6 py-6 text-left">
                  <span className="w-9 text-[12px] text-[#000000]/45">0{index + 1}</span><span className="flex-1 text-[clamp(20px,2.6vw,34px)] font-normal tracking-[-0.06em]">{title}</span><span className="text-[22px] text-[#0B1728]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className="pb-7 pl-14 pr-8"><p className="max-w-[680px] text-[17px] leading-8 text-[#000000]/70">{text}</p></div>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#D7D6D1] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <div className="md:col-span-5"><h2 className="text-[clamp(32px,3.8vw,54px)] font-normal leading-[1.02] tracking-[-0.065em]">Un criterio que se mantiene en cada decisión.</h2></div>
          <div className="md:col-span-5 md:col-start-8"><Link href="/contacto" data-testid="filosofia-contact" className="inline-block border-b border-[#0B1728]/50 pb-2 text-[12px] font-semibold uppercase tracking-[0.16em]">Solicitar una reunión →</Link></div>
        </div>
      </section>
    </div>
  );
}
