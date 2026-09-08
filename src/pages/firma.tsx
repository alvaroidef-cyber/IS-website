import { Link } from "wouter";

export default function Firma() {
  return (
    <div>
      {/* SOBRE NOSOTROS */}
      <section className="relative min-h-[60dvh] overflow-hidden bg-[#E8E7E3] px-6 pb-16 pt-36 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 md:grid-cols-12">
          <div className="relative z-10 md:col-span-8"><p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Sobre nosotros</p><h1 className="max-w-[820px] text-[clamp(40px,6vw,82px)] font-medium leading-[.94] tracking-[-0.08em]">Una firma construida sobre experiencia.</h1><p className="mt-8 max-w-[640px] text-[18px] leading-8 text-[#111111]/70">IS Wealth Advisors es una firma de asesoramiento financiero y patrimonial fundada por Christian Izquierdo Abadía y Ángel Sanz de Ayala. Ambos socios cuentan con más de 25 años de experiencia en Banca Privada, en instituciones líderes como Deutsche Bank, Barclays, CaixaBank, UBS y Singular Bank.</p></div>
          <div className="h-[240px] md:col-span-4 md:h-[360px]"><img src="/images/arch-classical.jpg" alt="Arquitectura de líneas serenas" className="editorial-image h-full w-full object-cover" fetchPriority="high" /></div>
        </div>
      </section>

      {/* NUESTRO PROPÓSITO */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/55 md:col-span-3">Nuestro propósito</p>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="max-w-[700px] text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-[-0.06em]">Acompañar. Entender. Aportar criterio.</h2>
            <p className="mt-7 max-w-[590px] text-[17px] leading-7 text-[#111111]/70">Nuestro propósito es acompañar a nuestros clientes en las decisiones relevantes de su vida y de su patrimonio. Conocemos sus circunstancias, entendemos sus objetivos y ponemos nuestro conocimiento y experiencia al servicio de cada decisión.</p>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO — misma tarjeta que en Inicio */}
      <section id="socios" className="border-t border-[#E5E7EA] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestro equipo</p>
          <h2 className="max-w-[760px] text-[clamp(29px,3.6vw,50px)] font-medium leading-[1.02] tracking-[-0.065em]">Una trayectoria construida en banca privada.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Link href="/socios/christian-izquierdo-abadia" data-testid="link-christian" className="group"><div className="aspect-[1.05] overflow-hidden"><img src="/images/christian.png" alt="Christian Izquierdo Abadía" loading="lazy" className="editorial-image h-full w-full object-cover grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Christian Izquierdo Abadía</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
            <Link href="/socios/angel-sanz-de-ayala" data-testid="link-angel" className="group md:mt-24"><div className="aspect-[1.05] overflow-hidden"><img src="/images/angel.png" alt="Ángel Sanz de Ayala" loading="lazy" className="editorial-image h-full w-full object-cover grayscale" /></div><p className="mt-5 text-[19px] font-medium tracking-[-0.04em]">Ángel Sanz de Ayala</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#000000]/55">Socio fundador</p></Link>
          </div>
        </div>
      </section>

      {/* SINGULAR BANK */}
      <section className="bg-[#E8E7E3] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Singular Bank</p>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="max-w-[780px] text-[clamp(29px,3.6vw,50px)] font-normal leading-[1.05] tracking-[-0.065em]">La banca privada independiente líder en España.</h2>
            </div>
            <div className="md:col-span-6 md:col-start-1 md:mt-4">
              <p className="max-w-[560px] text-[17px] leading-7 text-[#000000]/65">Singular Bank es una entidad independiente especializada en banca privada.</p>
              <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#000000]/65">Su modelo de arquitectura abierta permite acceder a una amplia selección de fondos, gestoras y mercados globales, sin estar condicionados por productos propios.</p>
              <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#000000]/65">Ponemos a disposición de nuestros clientes una plataforma financiera global y un amplio universo de soluciones, manteniendo el criterio y la independencia como principios fundamentales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14"><div className="mx-auto max-w-[1440px]"><h2 className="max-w-[620px] text-[clamp(29px,3.4vw,48px)] leading-[1] tracking-[-0.07em]">Experiencia al servicio del patrimonio.</h2><Link href="/contacto" data-testid="firma-contact" className="mt-8 inline-block border-b border-[#111111]/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em]">Solicitar una reunión →</Link></div></section>
    </div>
  );
}
