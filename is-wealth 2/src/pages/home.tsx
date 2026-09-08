import { Link } from "wouter";

const services = ["Inversión", "Financiación", "Planificación Patrimonial", "Banca de Inversión", "Operativa del día a día"];
const principles = ["Independencia", "Excelencia", "Transparencia", "Visión global", "Vocación de largo plazo"];

const ArrowLink = ({ href, children }: { href: string; children: string }) => (
  <Link href={href} data-testid={`link-${children.toLowerCase().replaceAll(" ", "-")}`} className="group inline-flex border-b border-[#111111]/35 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#111111]">
    {children} <span aria-hidden="true" className="ml-4 transition-transform group-hover:translate-x-1">→</span>
  </Link>
);

export default function Home() {
  return (
    <div>
      {/* 3.1 HERO */}
      <section className="relative min-h-[92dvh] overflow-hidden bg-[#0B1728] text-[#F7F7F5]">
        <div className="absolute inset-0 md:left-[44%]">
          <img src="/images/cambios-page-29-1.png" alt="Columnas arquitectónicas en blanco y negro" className="editorial-image h-full w-full object-cover opacity-85" fetchPriority="high" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1728] via-[#0B1728]/90 to-[#0B1728]/15 md:w-[70%]" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-[1440px] items-end px-6 pb-14 pt-28 md:px-10 md:pb-20 lg:px-14">
          <div className="max-w-[760px] reveal">
            <p className="mb-7 text-[34px] font-semibold uppercase leading-none tracking-[-0.05em] text-[#F7F7F5]">Banca privada</p>
            <h1 className="max-w-[700px] text-[clamp(40px,6.4vw,88px)] font-medium leading-[.96] tracking-[-0.075em]">Asesoramiento financiero y patrimonial.</h1>
            <p className="mt-8 max-w-[470px] text-[17px] leading-7 text-[#F7F7F5]/75">IS Wealth Advisors es una firma especializada en el asesoramiento financiero y patrimonial de grandes patrimonios, familias y organizaciones.</p>
            <div className="mt-10"><Link href="/firma" data-testid="hero-more" className="border-b border-[#F7F7F5]/50 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em]">Ver más <span aria-hidden="true" className="ml-4">→</span></Link></div>
          </div>
        </div>
        <span className="absolute bottom-7 right-6 text-[10px] tracking-[0.16em] text-[#F7F7F5]/45 md:right-14">01 / 06</span>
      </section>

      {/* 3.2 BANCA PRIVADA */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="h-[300px] md:col-span-5 md:h-[420px]">
            <img src="/images/arch-classical.jpg" alt="Arquitectura clásica" loading="lazy" className="editorial-image h-full w-full object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Banca privada</p>
            <h2 className="mt-8 max-w-[680px] text-[clamp(34px,4.2vw,56px)] font-normal leading-[1.04] tracking-[-0.065em]">Una firma de asesoramiento financiero y patrimonial.</h2>
            <p className="mt-7 max-w-[580px] text-[17px] leading-7 text-[#000000]/65">IS Wealth Advisors combina experiencia en banca privada, conocimiento patrimonial y una relación directa con sus clientes.</p>
            <p className="mt-4 max-w-[580px] text-[17px] leading-7 text-[#000000]/65">Asesoramos sobre las principales decisiones que afectan al patrimonio, con una visión global y de largo plazo.</p>
            <div className="mt-8"><ArrowLink href="/firma">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>

      {/* 3.3 SOCIOS FUNDADORES */}
      <section className="border-t border-[#D7D6D1] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Socios fundadores</p>
          <h2 className="max-w-[760px] text-[clamp(32px,4.2vw,60px)] font-medium leading-[.98] tracking-[-0.07em]">Experiencia al servicio del patrimonio.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
             <Link href="/socios/christian-izquierdo-abadia" data-testid="link-christian" className="group"><div className="aspect-[1.05] overflow-hidden"><img src="/images/christian.png" alt="Christian Izquierdo Abadía" loading="lazy" className="editorial-image h-full w-full object-cover grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Christian Izquierdo Abadía</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
             <Link href="/socios/angel-sanz-de-ayala" data-testid="link-angel" className="group md:mt-24"><div className="aspect-[1.05] overflow-hidden"><img src="/images/angel.png" alt="Ángel Sanz de Ayala" loading="lazy" className="editorial-image h-full w-full object-cover grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Ángel Sanz de Ayala</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
          </div>
        </div>
      </section>

      {/* 3.4 SERVICIOS — imagen izquierda, texto/lista derecha */}
      <section className="border-t border-[#D7D6D1] bg-[#E8E7E3] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="h-[300px] md:col-span-5 md:h-[440px]">
            <img src="/images/arch-stairs.jpg" alt="Geometría arquitectónica" loading="lazy" className="editorial-image h-full w-full object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Servicios</p>
            <h2 className="text-[clamp(28px,3.4vw,48px)] font-medium tracking-[-0.06em]">Asesoramiento.</h2>
            <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-[#111111]/65">Una relación de largo plazo para abordar las principales decisiones financieras y patrimoniales.</p>
            <ul className="mt-8 max-w-[520px]">
              {services.map((service, index) => <li key={service} className="border-t border-[#C9C8C2] py-3 text-[14px]">{String(index + 1).padStart(2, "0")} <span className="ml-6">{service}</span></li>)}
            </ul>
            <div className="mt-8"><ArrowLink href="/servicios">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>

      {/* 3.5 NUESTRO ENFOQUE — nuevo */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5"><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestro enfoque</p><h2 className="text-[clamp(29px,3.6vw,50px)] font-medium leading-[1.05] tracking-[-0.065em]">Un único punto de contacto, respaldado por especialistas.</h2></div>
            <div className="md:col-span-6 md:col-start-7"><p className="text-[16px] leading-7 text-[#111111]/65">Su socio en IS Wealth Advisors es su interlocutor directo, respaldado por los equipos especializados de Singular Bank en inversión, financiación y planificación patrimonial.</p><div className="mt-8"><ArrowLink href="/metodo">Ver más</ArrowLink></div></div>
          </div>
        </div>
      </section>

      {/* 3.6 FILOSOFÍA — imagen izquierda, texto/lista derecha */}
      <section className="border-t border-[#D7D6D1] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="h-[300px] md:col-span-5 md:h-[440px]">
            <img src="/images/lake-reflection.jpg" alt="Paisaje sereno reflejado en el agua" loading="lazy" className="editorial-image h-full w-full object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Filosofía</p>
            <h2 className="text-[clamp(28px,3.4vw,48px)] font-medium tracking-[-0.06em]">Criterio antes que producto.</h2>
            <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-[#111111]/65">Entendemos el asesoramiento como una relación de confianza basada en el máximo conocimiento del cliente, la independencia de criterio.</p>
            <ul className="mt-8 max-w-[520px]">
              {principles.map((principle, index) => <li key={principle} className="border-t border-[#C9C8C2] py-3 text-[14px]">{String(index + 1).padStart(2, "0")} <span className="ml-6">{principle}</span></li>)}
            </ul>
            <div className="mt-8"><ArrowLink href="/filosofia">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>
    </div>
  );
}
