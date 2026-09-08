import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/firma", label: "Conócenos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/filosofia", label: "Filosofía" },
  { href: "/contacto", label: "Contacto" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const transparent = location === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="min-h-[100dvh] bg-[#F7F7F5] text-[#000000] font-sans">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${transparent ? "border-transparent bg-transparent text-white" : "border-[#E5E7EA] bg-[#F7F7F5]/95 text-[#000000] backdrop-blur-sm"}`}>
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
            <Link href="/" className="z-50 text-[14px] font-semibold tracking-[-0.04em]" data-testid="link-logo">
            IS Wealth Advisors
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`nav-${item.label.toLowerCase()}`} className={`text-[12px] font-medium transition-opacity hover:opacity-55 ${location === item.href ? "opacity-100" : "opacity-75"}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" data-testid="link-request-meeting" className={`ml-3 border-l pl-7 text-[12px] font-semibold transition-opacity hover:opacity-55 ${transparent ? "border-white/40" : "border-[#B7A06A]"}`}>
              Solicitar una reunión <span aria-hidden="true">→</span>
            </Link>
          </nav>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"} data-testid="button-mobile-menu" className="z-50 p-2 lg:hidden">
            {mobileOpen ? <X size={21} strokeWidth={1.4} /> : <Menu size={21} strokeWidth={1.4} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex min-h-[100dvh] flex-col justify-center bg-[#F7F7F5] px-8 pt-16 lg:hidden">
          <nav className="flex flex-col" aria-label="Navegación móvil">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} data-testid={`mobile-nav-${item.label.toLowerCase()}`} className={`border-b border-[#D7D6D1] py-4 text-[clamp(28px,9vw,48px)] font-medium tracking-[-0.06em] ${index === 0 ? "border-t" : ""}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" data-testid="mobile-request-meeting" className="mt-10 text-[13px] font-semibold tracking-[0.02em]">
              Solicitar una reunión <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      )}

      <main>{children}</main>

      <footer className="bg-[#0B1728] px-6 py-14 text-[#F7F7F5] md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[15px] font-semibold tracking-[-0.03em]">IS Wealth Advisors</p>
              <p className="mt-5 max-w-xs text-[13px] leading-6 text-[#F7F7F5]/60">Una relación directa con el cliente, una visión global del patrimonio y una perspectiva de largo plazo.</p>
            </div>
            <div className="md:col-span-3">
              <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#F7F7F5]/40">Navegación</p>
              <div className="grid grid-cols-2 gap-y-3 text-[12px]">
                {navItems.map((item) => <Link key={item.href} href={item.href} data-testid={`footer-nav-${item.label.toLowerCase()}`} className="text-[#F7F7F5]/70 transition-opacity hover:opacity-100">{item.label}</Link>)}
              </div>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-[13px] text-[#F7F7F5]/70">Zaragoza · España</p>
              <Link href="/contacto" data-testid="footer-request-meeting" className="mt-5 inline-block border-b border-[#F7F7F5]/40 pb-2 text-[12px] font-semibold">Solicitar una reunión →</Link>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-3 border-t border-[#F7F7F5]/15 pt-5 text-[10px] text-[#F7F7F5]/35 md:flex-row">
            <span>© {new Date().getFullYear()} IS Wealth Advisors</span>
            <span>Aviso legal · Privacidad · Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}