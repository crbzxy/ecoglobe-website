import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "../components/marketing/ProductPage";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";
import { whatsappMessages } from "../lib/whatsapp";

export const Route = createFileRoute("/paneles-solares-autonomos")({
  head: () =>
    pageHead({
      title: "Paneles solares autónomos | EcoGlobe",
      description: "Sistemas solares con baterías para propiedades sin conexión a CFE.",
      path: "/paneles-solares-autonomos"
    }),
  component: OffGridPage
});

function OffGridPage() {
  return (
    <ProductPage
      eyebrow="Energía independiente"
      title="Paneles solares autónomos"
      description="Sistemas con baterías para lugares donde no hay conexión al sistema de luz. Genera tu propia energía de manera autónoma."
      image={images.serviceOffGrid}
      imageAlt="Sistema solar autónomo con baterías"
      candidateTitle="¿Es para mi propiedad?"
      candidate={
        <Typography>
          Es la solución indicada cuando tu propiedad se encuentra en una zona sin conexión a la
          red eléctrica de CFE.
        </Typography>
      }
      steps={[
        "Llena el formulario de contacto.",
        "Completa la tabla de consumo para determinar tus necesidades.",
        "Recibe una cotización con la cantidad adecuada de paneles y baterías.",
        "Elige tu forma de pago.",
        "Programamos la visita de instalación."
      ]}
      included={[
        "Sistema calculado a la medida de tus necesidades",
        "Servicio de ingeniería",
        "Instalación y mantenimiento profesional",
        "Monitoreo durante la vida del sistema",
        "Mantenimiento gratuito durante el primer año"
      ]}
      whatsappMessage={whatsappMessages.autonomos}
    />
  );
}
