import { Box, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { CheckList } from "../components/marketing/CheckList";
import { ContentImage } from "../components/marketing/ContentImage";
import { CtaButton } from "../components/marketing/CtaButton";
import { PageHero } from "../components/marketing/PageHero";
import { QuoteBand } from "../components/marketing/QuoteBand";
import { SectionLabel } from "../components/marketing/SectionLabel";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/aire-acondicionado")({
  head: () =>
    pageHead({
      title: "Aire acondicionado y energía solar | EcoGlobe",
      description:
        "Diseño e instalación de aire acondicionado residencial e industrial, con opción de paneles solares.",
      path: "/aire-acondicionado"
    }),
  component: AirPage
});

function AirPage() {
  return (
    <>
      <PageHero
        eyebrow="Confort eficiente"
        title="Aire acondicionado"
        description="Diseño e instalación de aire acondicionado residencial e industrial."
        image={images.air}
        imageAlt="Sistema de aire acondicionado instalado por EcoGlobe"
      />
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <SectionLabel>Servicio completo</SectionLabel>
          <Typography variant="h2" sx={{ mt: 1.5, mb: 4 }}>
            ¿Qué incluye?
          </Typography>
          <CheckList items={["Diseño", "Servicio técnico", "Instalación", "Mantenimiento profesional"]} />
        </PageContainer>
      </Box>
      <Box id="airepanel" sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
              alignItems: "center",
              gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" }
            }}
          >
            <ContentImage
              src={images.airSolar}
              alt="Paquete de aire acondicionado y paneles solares"
            />
            <Box sx={{ minWidth: 0 }}>
              <SectionLabel inverted>La combinación perfecta</SectionLabel>
              <Typography variant="h2" sx={{ mt: 1.5 }}>
                Aire acondicionado + paneles solares
              </Typography>
              <Typography sx={{ mt: 2.5, opacity: 0.75 }}>
                Disfruta aire acondicionado sin preocuparte por el aumento en tu recibo. Diseñamos
                una instalación estética, segura y con capacidad para ambos sistemas.
              </Typography>
              <Box sx={{ mt: 3.5 }}>
                <CtaButton to="/contacto" tone="light">
                  Cotizar paquete
                </CtaButton>
              </Box>
            </Box>
          </Box>
        </PageContainer>
      </Box>
      <Box sx={{ pt: 10 }}>
        <QuoteBand />
      </Box>
    </>
  );
}
