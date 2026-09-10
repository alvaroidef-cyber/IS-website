import { Link } from "wouter";

type Profile = {
  name: string;
  experience: string;
  image: string;
  bio: string;
  experienceList?: string[];
  educationList?: string[];
};

const people: Record<string, Profile> = {
  christian: {
    name: "Christian Izquierdo Abadía",
    experience: "Más de 25 años en banca privada",
    image: "/images/christian.png",
    bio: "Christian Izquierdo ha desarrollado su carrera profesional en Deutsche Bank, Barclays, UBS, CaixaBank y Singular Bank. Su trayectoria se ha centrado en el asesoramiento financiero y patrimonial a grandes patrimonios, empresarios y familias.",
    experienceList: [
      "Director Aragón, Navarra y La Rioja en Singular Bank",
      "Director Aragón, Navarra y La Rioja en UBS",
      "Director de Banca Privada en CaixaBank",
      "Director de Banca Privada en Barclays",
      "Director de Banca Privada en Deutsche Bank",
      "Director de Banca Privada en Banco Urquijo",
      "Ha participado en Consejos de Administración de varias SICAVs.",
      "Ha sido Asesor del Mes y finalista a Asesor del Año por Rankia.",
    ],
    educationList: [
      "European Financial Advisor (EFPA)",
      "Certificate in Wealth Management (CISI)",
      "Posgrado Asesoramiento Financiero (Universitat Pompeu Fabra)",
      "Máster en Innovación Financiera: FinTech, Blockchain y Mercados Digitales (UNED)",
      "Máster en Derecho Deportivo (Universitat de Valencia)",
      "Master en E-Business (Universitat Ramon Llull)",
      "Master en Marketing Relacional (Universitat Ramon Llull)",
      "Licenciado en Ciencias del Trabajo (Unizar)",
    ],
  },
  angel: {
    name: "Ángel Sanz de Ayala",
    experience: "Más de 20 años en banca privada",
    image: "/images/angel.png",
    bio: "Ángel Sanz ha desarrollado su trayectoria en banca privada internacional y ha asesorado a empresarios, familias y clientes de elevado patrimonio en la definición de estrategias financieras y patrimoniales y en la gestión de decisiones de largo plazo.",
  },
};

export default function PerfilSocio({ person }: { person: keyof typeof people }) {
  const profile = people[person];
  return (
    <div>
      <section className="border-b border-[#E5E7EA] px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 md:grid-cols-12">
          <div className="h-[430px] md:col-span-5 md:h-[620px]">
            <img src={profile.image} alt={profile.name} className="editorial-image h-full w-full object-cover grayscale" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Socio fundador</p>
            <h1 className="mt-10 max-w-[650px] text-[clamp(36px,4.2vw,60px)] font-normal leading-[1] tracking-[-0.07em]">{profile.name}</h1>
            <dl className="mt-12 max-w-[430px] border-t border-[#E5E7EA]">
              <div className="border-b border-[#E5E7EA] py-5"><dt className="text-[10px] uppercase tracking-[0.18em] text-[#000000]/50">Experiencia</dt><dd className="mt-2 text-[17px]">{profile.experience}</dd></div>
              <div className="border-b border-[#E5E7EA] py-5"><dt className="text-[10px] uppercase tracking-[0.18em] text-[#000000]/50">Email</dt><dd className="mt-2 text-[17px] text-[#000000]/55">Información pendiente de incorporar</dd></div>
              <div className="border-b border-[#E5E7EA] py-5"><dt className="text-[10px] uppercase tracking-[0.18em] text-[#000000]/50">Teléfono</dt><dd className="mt-2 text-[17px] text-[#000000]/55">Información pendiente de incorporar</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-12">
          <div className="md:col-span-3"><p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Experiencia</p></div>
          <div className="md:col-span-6 md:col-start-6"><p className="max-w-[600px] text-[19px] leading-8 text-[#000000]/70">{profile.bio}</p>{profile.experienceList && <ul className="mt-8 max-w-[600px] border-t border-[#E5E7EA]">{profile.experienceList.map((item) => <li key={item} className="border-b border-[#E5E7EA] py-4 text-[17px] leading-7 text-[#000000]/70">{item}</li>)}</ul>}</div>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1440px] gap-14 border-t border-[#E5E7EA] pt-14 md:grid-cols-12">
          <div className="md:col-span-3"><p className="text-[34px] font-semibold uppercase leading-none tracking-[-0.05em]">Formación</p></div>
          <div className="md:col-span-6 md:col-start-6">{profile.educationList ? <ul className="max-w-[600px] border-t border-[#E5E7EA]">{profile.educationList.map((item) => <li key={item} className="border-b border-[#E5E7EA] py-4 text-[17px] leading-7 text-[#000000]/70">{item}</li>)}</ul> : <p className="text-[17px] leading-7 text-[#000000]/55">Información pendiente de incorporar.</p>}</div>
        </div>
      </section>
      <section className="border-t border-[#E5E7EA] px-6 py-12 md:px-10 lg:px-14"><div className="mx-auto max-w-[1440px]"><Link href="/firma#socios" className="text-[12px] font-semibold uppercase tracking-[0.16em]">← Socios fundadores</Link></div></section>
    </div>
  );
}