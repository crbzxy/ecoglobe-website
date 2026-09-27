import { Box, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { CheckList } from "../components/marketing/CheckList";
import { CtaButton } from "../components/marketing/CtaButton";
import { PageHero } from "../components/marketing/PageHero";
import { QuoteBand } from "../components/marketing/QuoteBand";
import { SectionLabel } from "../components/marketing/SectionLabel";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/panel-mas-aire")({
  head: () =>
    pageHead({
      title: "Paneles solares + aire acondicionado | EcoGlobe",
      description:
        "Paquete de paneles solares y aire acondicionado para ahorrar energía sin sacrificar confort.",
      path: "/panel-mas-aire"
    }),
  component: ComboPage
});

const highlights = [
  {
    title: "Garantía de instalación",
    text: "El sistema fotovoltaico está diseñado para soportar 20 años de operación."
  },
  {
    title: "Retorno de inversión",
    text: "El plazo depende de tu consumo medio y la configuración final de tu proyecto."
  },
  {
    title: "Plusvalía para tu hogar",
    text: "La energía solar es una mejora de largo plazo para tu propiedad."
  }
];

function ComboPage() {
  return (
    <>
      <PageHero
        eyebrow="Panel + aire"
        title="Ahorra energía sin sacrificar confort"
        description="Genera energía desde tu hogar o negocio y úsala para climatizar tus espacios durante cualquier temporada."
        image={images.airSolar}
        imageAlt="Paneles solares y aire acondicionado EcoGlobe"
      >
        <CtaButton to="/contacto">Personalizar cotización</CtaButton>
      </PageHero>
      <Box sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <SectionLabel>Paquete integral</SectionLabel>
          <Typography variant="h2" sx={{ mt: 1.5, mb: 4 }}>
            Incluye lo necesario para empezar
          </Typography>
          <CheckList
            items={[
              "Minisplit de 1 tonelada frío/calor",
              "Paneles solares",
              "Microinversor",
              "Estructura base",
              "Material eléctrico",
              "Mano de obra",
              "Trámite de contrato con CFE y medidor bidireccional"
            ]}
          />
        </PageContainer>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { md: "repeat(3, 1fr)" } }}>
            {highlights.map((item) => (
              <Box key={item.title} sx={{ border: 1, borderColor: "divider", borderRadius: 4, p: 3.5 }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </PageContainer>
      </Box>
      <QuoteBand />
    </>
  );
}
