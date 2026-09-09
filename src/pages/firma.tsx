import { Link } from "wouter";

export default function Firma() {
  return (
    <div>
      {/* SOBRE NOSOTROS */}
      <section className="relative min-h-[60dvh] overflow-hidden bg-[#E8E7E3] px-6 pb-16 pt-36 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-end gap-4 md:grid-cols-12">
          <div className="relative z-10 md:col-span-6"><p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Sobre nosotros</p><h1 className="max-w-[820px] text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-[-0.06em]">Más de 25 años de experiencia</h1><p className="mt-7 max-w-[590px] text-[17px] leading-7 text-[#111111]/70">Somos agentes financieros de Singular Bank, asesoramos y acompañamos a nuestros clientes para proteger y hacer crecer su patrimonio. Ambos socios contamos con más de 25 años en Banca Privada, habiendo ocupado posiciones directivas en bancos líderes como Deutsche Bank, Caixa Bank, Barclays, UBS y Singular Bank.</p></div>
          <div className="h-[240px] md:col-span-6 md:h-[360px]"><img src="/images/sobrenosotros.png" alt="Sobre nosotros" className="editorial-image h-full w-full object-contain" /></div>
        </div>
      </section>

      {/* NUESTRO PROPÓSITO */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/55 md:col-span-3">Nuestro propósito</p>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="max-w-[700px] text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-[-0.06em]">Acompañar. Entender. Aportar criterio.</h2>
            <p className="mt-7 max-w-[590px] text-[17px] leading-7 text-[#111111]/70">Nuestro propósito es acompañar a nuestros clientes en las decisiones relevantes de su vida y de su patrimonio.</p>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO — misma tarjeta que en Inicio */}
      <section id="socios" className="border-t border-[#E5E7EA] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Nuestro equipo</p>
          <h2 className="max-w-[760px] text-[clamp(29px,3.6vw,50px)] font-medium leading-[1.02] tracking-[-0.065em]">Una trayectoria construida en banca privada.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Link href="/socios/christian-izquierdo-abadia" data-testid="link-christian" className="group"><div className="aspect-[1.05] overflow-hidden"><img src="/images/christian.png" alt="Christian Izquierdo Abadía" className="editorial-image h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" /></div><p className="mt-4 text-[16px] font-medium">Christian Izquierdo Abadía</p><p className="text-[13px] text-[#111111]/65">Socio Fundador</p></Link>
            <Link href="/socios/angel-sanz-de-ayala" data-testid="link-angel" className="group md:mt-24"><div className="aspect-[1.05] overflow-hidden"><img src="/images/angel.png" alt="Ángel Sanz de Ayala" className="editorial-image h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" /></div><p className="mt-4 text-[16px] font-medium">Ángel Sanz de Ayala</p><p className="text-[13px] text-[#111111]/65">Socio Fundador</p></Link>
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
              <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#000000]/65">Su modelo de arquitectura abierta permite acceder a una amplia selección de fondos, gestoras y mercados globales.</p>
              <p className="mt-4 max-w-[560px] text-[17px] leading-7 text-[#000000]/65">Ponemos a disposición de nuestros clientes una plataforma financiera global y un amplio universo de soluciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14"><div className="mx-auto max-w-[1440px]"><h2 className="max-w-[620px] text-[clamp(29px,3.4vw,48px)] leading-[1] tracking-[-0.07em]">Queremos ser tus socios en las decisiones que importan.</h2><p className="mt-7 max-w-[680px] text-[17px] leading-7 text-[#111111]/70">Contáctanos para conocernos y explorar cómo podemos ayudarte a alcanzar tus objetivos financieros y patrimoniales.</p><div className="mt-8"><Link href="/contacto" className="group inline-flex border-b border-[#111111]/35 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#111111]">Contacto <span aria-hidden="true" className="ml-4 transition-transform group-hover:translate-x-1">→</span></Link></div></div></section>
    </div>
  );
}
