import { Layout } from "@/components/layout";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Firma from "@/pages/firma";
import Servicios from "@/pages/servicios";
import ServicioDetalle from "@/pages/servicio-detalle";
import Metodo from "@/pages/metodo";
import Filosofia from "@/pages/filosofia";
import Contacto from "@/pages/contacto";
import PerfilSocio from "@/pages/perfil-socio";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/firma" component={Firma} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/servicios/inversion" component={() => <ServicioDetalle slug="inversion" />} />
      <Route path="/servicios/financiacion" component={() => <ServicioDetalle slug="financiacion" />} />
      <Route path="/servicios/planificacion-patrimonial" component={() => <ServicioDetalle slug="planificacion-patrimonial" />} />
      <Route path="/servicios/banca-de-inversion" component={() => <ServicioDetalle slug="banca-de-inversion" />} />
      <Route path="/servicios/operativa-diaria" component={() => <ServicioDetalle slug="operativa-diaria" />} />
      <Route path="/metodo" component={Metodo} />
      <Route path="/filosofia" component={Filosofia} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/socios/christian-izquierdo-abadia" component={() => <PerfilSocio person="christian" />} />
      <Route path="/socios/angel-sanz-de-ayala" component={() => <PerfilSocio person="angel" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
