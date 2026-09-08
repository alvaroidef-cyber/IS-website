import { Link } from "wouter";

function ConcentricDiagram() {
  return (
    <svg viewBox="0 0 480 480" className="mx-auto h-auto w-full max-w-[420px]" aria-hidden="true">
      <circle cx="240" cy="240" r="210" fill="none" stroke="#0B1728" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="240" cy="240" r="140" fill="none" stroke="#0B1728" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="240" cy="240" r="70" fill="none" stroke="#B7A06A" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="5" fill="#0B1728" />
      <text x="240" y="222" textAnchor="middle" fontSize="10" letterSpacing="1.5" fill="#000000" opacity="0.55">USTED</text>
      <text x="240" y="128" textAnchor="middle" fontSize="10" letterSpacing="1.5" fill="#000000" opacity="0.55">SU SOCIO</text>
      <text x="240" y="42" textAnchor="middle" fontSize="9" letterSpacing="1.2" fill="#000000" opacity="0.45">EQUIPOS ESPECIALIZADOS</text>
      <text x="240" y="56" textAnchor="middle" fontSize="9" letterSpacing="1.2" fill="#000000" opacity="0.45">DE SINGULAR BANK</text>
    </svg>
  );
}

export default function Metodo() {
  return (
    <div>
      <section className="bg-[#0B1728] px-6 pb-16 pt-36 text-[#F7F7F5] md:px-10 md:pb-20 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Método</p>
            <h1 className="mt-10 max-w-[700px] text-[clamp(38px,4.8vw,66px)] font-normal leading-[.98] tracking-[-0.07em]">Asesorar es entender antes de decidir.</h1>
            <p className="mt-8 max-w-[520px] text-[18px] leading-8 text-[#F7F7F5]/70">Antes de proponer una estrategia, entendemos la situación, los objetivos y las circunstancias de cada cliente.</p>
          </div>
          <div className="h-[220px] md:col-span-5 md:col-start-8 md:h-[300px]"><img src="/images/lake-reflection.jpg" alt="Horizonte sereno sobre el agua" fetchPriority="high" className="editorial-image h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-12">
          <div className="md:col-span-4"><p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Cómo entendemos el asesoramiento</p><h2 className="mt-10 text-[clamp(29px,3.4vw,48px)] font-normal leading-[1.03] tracking-[-0.06em]">Una visión completa para tomar mejores decisiones.</h2></div>
          <div className="md:col-span-6 md:col-start-7"><p className="text-[18px] leading-8 text-[#000000]/70">El asesoramiento comienza por comprender: la situación de cada cliente, sus objetivos y las circunstancias que condicionan sus decisiones.</p><p className="mt-6 text-[18px] leading-8 text-[#000000]/70">Entendemos el patrimonio como un conjunto —inversión, liquidez, financiación, empresa, fiscalidad y familia— no como decisiones aisladas.</p><p className="mt-6 text-[18px] leading-8 text-[#000000]/70">La relación se construye a largo plazo, revisando la estrategia cuando cambian las circunstancias.</p></div>
        </div>
        <div className="mx-auto mt-16 h-[190px] max-w-[1440px] md:mt-24 md:h-[300px]"><img src="/images/arch-interior-stairs.jpg" alt="Interior arquitectónico en tonos piedra" loading="lazy" className="editorial-image h-full w-full object-cover" /></div>
      </section>

      <section className="bg-[#E5E7EA] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Cómo trabajamos</p>
          <div className="mt-8 grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5"><ConcentricDiagram /></div>
            <div className="md:col-span-6 md:col-start-7">
              <h2 className="max-w-[560px] text-[clamp(29px,3.6vw,50px)] font-normal leading-[1.05] tracking-[-0.06em]">Un único punto de contacto, respaldado por especialistas.</h2>
              <p className="mt-7 max-w-[500px] text-[17px] leading-7 text-[#000000]/70">Su socio en IS Wealth Advisors es su interlocutor directo, y coordina cada decisión patrimonial.</p>
              <p className="mt-4 max-w-[500px] text-[17px] leading-7 text-[#000000]/70">Cuenta con el respaldo de los equipos especializados de Singular Bank en inversión, financiación y planificación patrimonial.</p>
              <p className="mt-4 max-w-[500px] text-[17px] leading-7 text-[#000000]/70">Cada socio atiende a un número reducido de clientes, para dedicar a cada patrimonio la atención que requiere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <div className="md:col-span-5"><h2 className="text-[clamp(32px,3.8vw,54px)] font-normal leading-[1.02] tracking-[-0.065em]">Una forma de asesorar pensada para acompañar.</h2></div>
          <div className="md:col-span-5 md:col-start-8"><Link href="/contacto" data-testid="metodo-contact" className="inline-block border-b border-[#0B1728]/50 pb-2 text-[12px] font-semibold uppercase tracking-[0.16em]">Hablemos →</Link></div>
        </div>
      </section>
    </div>
  );
}
