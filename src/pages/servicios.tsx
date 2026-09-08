import { Link } from "wouter";
import { services, ServiceImage } from "@/pages/servicio-detalle";

const order = ["inversion", "financiacion", "planificacion-patrimonial", "banca-de-inversion", "operativa-diaria"] as const;

export default function Servicios() {
  return (
    <div>
      <section className="bg-[#0B1728] px-6 pb-16 pt-36 text-[#F7F7F5] md:px-10 md:pb-20 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Servicios</p>
          <h1 className="mt-10 max-w-[760px] text-[clamp(37px,4.8vw,64px)] font-normal leading-[.98] tracking-[-0.07em]">Todo el patrimonio, bajo una misma estrategia.</h1>
          <p className="mt-8 max-w-[560px] text-[18px] leading-8 text-[#F7F7F5]/70">Acompañamos a nuestros clientes en las principales decisiones financieras, patrimoniales y empresariales. Integramos inversión, financiación, planificación, banca de inversión y operativa bancaria bajo una misma estrategia.</p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-x-8 gap-y-12 md:grid-cols-3">
          {order.map((slug) => {
            const service = services[slug];
            return (
              <Link key={slug} href={`/servicios/${slug}`} data-testid={`service-card-${slug}`} className="group block">
                <ServiceImage src={service.image} alt={service.title} className="aspect-[4/3] w-full" />
                <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[#000000]/45">{service.order}</p>
                <h2 className="mt-2 text-[22px] font-medium tracking-[-0.04em] transition-transform group-hover:translate-x-1">{service.title}</h2>
                <div className="mt-4 border-t border-[#D7D6D1]" />
                <p className="mt-4 text-[14px] leading-6 text-[#000000]/60">{service.cardDescription}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
