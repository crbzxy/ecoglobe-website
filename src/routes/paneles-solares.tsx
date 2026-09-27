import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "../components/marketing/ProductPage";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";
import { whatsappMessages } from "../lib/whatsapp";

export const Route = createFileRoute("/paneles-solares")({
  head: () =>
    pageHead({
      title: "Paneles solares conectados a CFE | EcoGlobe",
      description: "Sistemas solares a la medida para reducir tu tarifa de CFE en Baja California.",
      path: "/paneles-solares"
    }),
  component: SolarGridPage
});

function SolarGridPage() {
  return (
    <ProductPage
      eyebrow="Conectados a CFE"
      title="Paneles solares para reducir tu recibo"
      description="Genera energía para tu propiedad y deja de pagar la tarifa más alta a CFE."
      image={images.servicesHero}
      imageAlt="Paneles solares interconectados a la red de CFE"
      candidateTitle="¿Cómo sé si soy candidato?"
      candidate={
        <>
          <Typography sx={{ mb: 2 }}>
            Cualquier propiedad puede ser candidata. Lo que cambia es el ahorro inmediato reflejado
            en el recibo.
          </Typography>
          <Typography>
            Si pagas más de $2,000 a $2,500 pesos, podrías estar en tarifa DAC. Un sistema solar
            puede ayudarte a regresar a una tarifa menor.
          </Typography>
        </>
      }
      steps={[
        "Llena el formulario de contacto.",
        "Envíanos tu recibo de CFE.",
        "Recibe una cotización con los paneles adecuados para tu consumo.",
        "Elige tu forma de pago.",
        "Programamos la visita de instalación."
      ]}
      included={[
        "Sistema calculado a la medida de tus consumos",
        "Servicio de ingeniería",
        "Instalación y mantenimiento profesional",
        "Garantía de calidad en materiales y marcas",
        "Monitoreo durante la vida del sistema",
        "Mantenimiento gratuito durante el primer año"
      ]}
      whatsappMessage={whatsappMessages.panelesCfe}
    />
  );
}
