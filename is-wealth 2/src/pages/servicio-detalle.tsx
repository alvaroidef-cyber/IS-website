import { Link } from "wouter";

export const services = {
  "inversion": {
    order: "01",
    title: "Inversión",
    cardDescription: "Carteras diseñadas según el patrimonio, objetivos y situación de cada cliente.",
    fullDescription: "Diseñamos estrategias de inversión adaptadas a la situación, objetivos, horizonte temporal y necesidades de liquidez de cada cliente. El acceso a una arquitectura abierta permite seleccionar entre una amplia variedad de fondos, gestoras y mercados, incorporando tanto activos cotizados como mercados privados y otras soluciones de inversión.",
    ambitos: [
      "Arquitectura abierta de fondos de inversión y planes de pensiones, renta variable y fija, derivados, productos estructurados…",
      "Gestión discrecional de carteras, SCRs, IICs, SICAVs, vehículos en Luxemburgo",
      "Mercados privados (private equity, private debt, infraestructuras, real estate)",
    ],
  },
  "financiacion": {
    order: "02",
    title: "Financiación",
    cardDescription: "Soluciones de financiación adaptadas a cada situación, con la posibilidad de utilizar el patrimonio como garantía.",
    fullDescription: "Estructuramos soluciones de financiación teniendo en cuenta el conjunto del patrimonio y las necesidades de cada cliente. El uso de activos financieros o inmobiliarios como garantía puede permitir obtener liquidez sin necesidad de desinvertir, preservando determinadas posiciones patrimoniales cuando resulta conveniente. Acompañamos al cliente durante todo el proceso, desde el análisis de la necesidad hasta la estructuración de la operación.",
    ambitos: ["Financiación hipotecaria", "Préstamos pignorados", "Estructuración de pasivos"],
  },
  "planificacion-patrimonial": {
    order: "03",
    title: "Planificación",
    cardDescription: "Planificación financiera, patrimonial, fiscal y sucesoria, integrada en una misma estrategia.",
    fullDescription: "Una estrategia patrimonial requiere anticipar las decisiones que pueden afectar a la estructura, evolución y transmisión del patrimonio. Analizamos la situación patrimonial y familiar de cada cliente para identificar las necesidades presentes y los objetivos futuros. Integramos planificación financiera, patrimonial, fiscal y sucesoria en una misma visión. El objetivo es construir una estructura coherente, eficiente y preparada para las distintas etapas de la vida del cliente.",
    ambitos: ["Planificación financiera", "Planificación patrimonial", "Planificación sucesoria", "Eficiencia fiscal"],
  },
  "banca-de-inversion": {
    order: "04",
    title: "Banca de Inversión",
    cardDescription: "Operaciones corporativas y decisiones estratégicas: M&A, ampliaciones de capital y emisión de deuda.",
    fullDescription: "Las decisiones empresariales tienen también una dimensión patrimonial. Acompañamos a empresarios y accionistas en operaciones corporativas, analizando sus implicaciones desde una perspectiva financiera y patrimonial. Trabajamos junto al cliente durante las distintas fases de la operación y coordinamos el proceso con los especialistas necesarios para abordar cada decisión con una visión global.",
    ambitos: ["M&A (fusiones y adquisiciones)", "ECM (ampliaciones de capital)", "DCM (emisión de deuda)"],
  },
  "operativa-diaria": {
    order: "05",
    title: "Operativa del día a día",
    cardDescription: "Gestión bancaria cotidiana, para que nuestros clientes puedan centrarse en las decisiones que realmente importan.",
    fullDescription: "Coordinamos las necesidades bancarias del día a día para simplificar la gestión financiera y evitar que las cuestiones operativas resten tiempo a las decisiones realmente importantes. Centralizamos y coordinamos las principales necesidades bancarias del cliente, desde la operativa de cuentas y medios de pago hasta la gestión de cobros, pagos y obligaciones recurrentes.",
    ambitos: ["Cuentas corrientes, cheques, cobros y pagos", "Contabilidad doméstica", "Tarjetas de crédito y débito", "Gestión de domiciliaciones", "Pago de impuestos"],
  },
} as const;

export type ServiceSlug = keyof typeof services;
const order: ServiceSlug[] = ["inversion", "financiacion", "planificacion-patrimonial", "banca-de-inversion", "operativa-diaria"];

/** Placeholder visual para las 5 imágenes de servicio — el cliente subirá las imágenes definitivas. */
export function ServiceImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-[#E5E7EA] ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.16em] text-[#000000]/35">Imagen pendiente</span>
    </div>
  );
}

export default function ServicioDetalle({ slug }: { slug: ServiceSlug }) {
  const service = services[slug];
  const index = order.indexOf(slug);
  const previous = order[(index - 1 + order.length) % order.length];
  const next = order[(index + 1) % order.length];

  return (
    <div>
      <section className="border-b border-[#E5E7EA] px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 md:grid-cols-12">
          <ServiceImagePlaceholder className="h-[260px] md:col-span-5 md:h-[340px]" />
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/55">Servicio {service.order}</p>
            <h1 className="mt-6 max-w-[650px] text-[clamp(34px,4.2vw,62px)] font-normal leading-[.98] tracking-[-0.07em]">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-12">
          <p className="max-w-[550px] text-[18px] leading-8 text-[#000000]/70 md:col-span-6">{service.fullDescription}</p>
          <div className="md:col-span-5 md:col-start-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#000000]/50">Ámbitos de actuación</p>
            {service.ambitos.map((item) => <div key={item} className="border-t border-[#E5E7EA] py-4"><p className="text-[15px] leading-7 text-[#000000]/70">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EA] px-6 py-8 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2">
          <Link href={`/servicios/${previous}`} data-testid="service-prev" className="text-left text-[13px] text-[#000000]/60 transition-colors hover:text-[#0B1728]">← {services[previous].title}</Link>
          <Link href={`/servicios/${next}`} data-testid="service-next" className="text-left text-[13px] text-[#000000]/60 transition-colors hover:text-[#0B1728] md:text-right">{services[next].title} →</Link>
        </div>
      </section>
      <section className="px-6 py-8 md:px-10 lg:px-14"><div className="mx-auto max-w-[1440px]"><Link href="/servicios" className="text-[12px] font-semibold uppercase tracking-[0.16em]">← Servicios</Link></div></section>
    </div>
  );
}
