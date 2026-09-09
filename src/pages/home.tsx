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
        <div className="absolute inset-0">
          <img src="/images/Captura_de_Pantalla_2026-09-09_a_las_11.18.57.png" alt="Paisaje de montaña nevada" className="editorial-image h-full w-full object-cover" style={{ filter: "grayscale(100%) contrast(1.05)" }} fetchPriority="high" />
        </div>
        <div className="absolute inset-0 bg-[#0B1728]/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(11,23,40,0.98)_0%,rgba(11,23,40,0.78)_34%,rgba(11,23,40,0.28)_66%,transparent_100%)]" />
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
            <img src="/images/image.png" alt="Arquitectura clásica" loading="lazy" className="editorial-image h-full w-full object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Banca privada</p>
            <h2 className="mt-8 max-w-[680px] text-[clamp(34px,4.2vw,56px)] font-normal leading-[1.04] tracking-[-0.065em]">Agentes financieros de Singular Bank.</h2>
            <p className="mt-7 max-w-[580px] text-[17px] leading-7 text-[#000000]/65">IS Wealth Advisors opera como agente financiero de Singular Bank, la banca privada independiente líder en España.</p>
            <p className="mt-4 max-w-[580px] text-[17px] leading-7 text-[#000000]/65">Esta vinculación da acceso a su plataforma de inversión, sus servicios bancarios y su arquitectura abierta de fondos, gestoras y mercados globales.</p>
            <p className="mt-4 max-w-[580px] text-[17px] leading-7 text-[#000000]/65">Las decisiones sobre cada patrimonio se toman de forma independiente: conocemos a nuestros clientes, entendemos sus objetivos y situación y elaboramos la estrategia más adecuada.</p>
            <div className="mt-8"><ArrowLink href="/firma">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>

      {/* 3.3 NUESTRO EQUIPO */}
      <section className="border-t border-[#D7D6D1] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestro equipo</p>
          <h2 className="max-w-[760px] text-[clamp(32px,4.2vw,60px)] font-medium leading-[.98] tracking-[-0.07em]">Más de 25 años de experiencia en banca privada.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
             <Link href="/socios/christian-izquierdo-abadia" data-testid="link-christian" className="group"><div className="aspect-[3/4] overflow-hidden"><img src="/images/christian.png" alt="Christian Izquierdo Abadía" loading="lazy" className="editorial-image h-full w-full object-cover object-top grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Christian Izquierdo Abadía</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
             <Link href="/socios/angel-sanz-de-ayala" data-testid="link-angel" className="group md:mt-24"><div className="aspect-[3/4] overflow-hidden"><img src="/images/angel.png" alt="Ángel Sanz de Ayala" loading="lazy" className="editorial-image h-full w-full object-cover object-top grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Ángel Sanz de Ayala</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
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
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestros servicios</p>
            <h2 className="text-[clamp(28px,3.4vw,48px)] font-medium tracking-[-0.06em]">Asesoramiento.</h2>
            <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-[#111111]/65">Una relación de largo plazo para abordar las principales decisiones financieras y patrimoniales.</p>
            <ul className="mt-8 max-w-[520px]">
              {services.map((service, index) => <li key={service} className="border-t border-[#C9C8C2] py-3 text-[18px]">{String(index + 1).padStart(2, "0")} <span className="ml-6">{service}</span></li>)}
            </ul>
            <div className="mt-8"><ArrowLink href="/servicios">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>

      {/* 3.5 NUESTRO ENFOQUE — nuevo */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5"><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestro enfoque</p><h2 className="text-[clamp(29px,3.6vw,50px)] font-medium leading-[1.05] tracking-[-0.065em]">Un único asesor, respaldado por especialistas.</h2></div>
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
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestra filosofía</p>
            <h2 className="text-[clamp(28px,3.4vw,48px)] font-medium tracking-[-0.06em]">Criterio antes que producto.</h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#111111]/65">Entendemos el asesoramiento como una relación de confianza basada en el máximo conocimiento del cliente, la independencia de criterio.</p>
            <ul className="mt-8 max-w-[520px]">
              {principles.map((principle, index) => <li key={principle} className="border-t border-[#C9C8C2] py-3 text-[18px]">{String(index + 1).padStart(2, "0")} <span className="ml-6">{principle}</span></li>)}
            </ul>
            <div className="mt-8"><ArrowLink href="/filosofia">Ver más</ArrowLink></div>
          </div>
        </div>
      </section>
    </div>
  );
}
