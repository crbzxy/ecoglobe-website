import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "../components/marketing/ProductPage";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";
import { whatsappMessages } from "../lib/whatsapp";

export const Route = createFileRoute("/soluciones-en-electricidad")({
  head: () =>
    pageHead({
      title: "Soluciones en electricidad | EcoGlobe",
      description: "Diseño, ingeniería, instalación y mantenimiento de proyectos eléctricos personalizados.",
      path: "/soluciones-en-electricidad"
    }),
  component: ElectricPage
});

function ElectricPage() {
  return (
    <ProductPage
      eyebrow="Ingeniería eléctrica"
      title="Soluciones en electricidad"
      description="Diseñamos tu proyecto eléctrico personalizado y realizamos todo el proceso de instalación e ingeniería."
      image={images.serviceElectric}
      imageAlt="Técnico trabajando en una solución eléctrica"
      candidateTitle="Nos especializamos en"
      candidate={
        <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
          <li>Proyectos nuevos y remodelaciones</li>
          <li>Diagnóstico de problemas eléctricos</li>
          <li>Alumbrado público</li>
          <li>Instalaciones y centros de carga</li>
          <li>Subestaciones y plantas de emergencia</li>
        </Box>
      }
      steps={[
        "Cuéntanos las necesidades de tu propiedad.",
        "Realizamos un diagnóstico técnico.",
        "Proyectamos una solución integral.",
        "Presentamos la propuesta y programamos el trabajo."
      ]}
      included={[
        "Diseño e ingeniería",
        "Solución de fallas detectadas",
        "Instalación y mantenimiento profesional",
        "Servicio adaptado a tus requerimientos",
        "Monitoreo para detectar posibles fallas",
        "Propuestas y soluciones integrales"
      ]}
      whatsappMessage={whatsappMessages.electricidad}
    />
  );
}
