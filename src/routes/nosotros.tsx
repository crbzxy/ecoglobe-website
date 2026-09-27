import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { ContentImage } from "../components/marketing/ContentImage";
import { PageHero } from "../components/marketing/PageHero";
import { QuoteBand } from "../components/marketing/QuoteBand";
import { SectionLabel } from "../components/marketing/SectionLabel";
import { certifications, companyValues } from "../content/certifications";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    pageHead({
      title: "Nosotros | EcoGlobe",
      description:
        "Conoce la experiencia, certificaciones, misión y valores de EcoGlobe en Baja California.",
      path: "/nosotros"
    }),
  component: AboutPage
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Pioneros en energía solar en Baja California"
        description="Con más de 10 años de experiencia, estamos comprometidos con la transición hacia una economía de energía limpia en la región."
        image={images.hero}
        imageAlt="Equipo EcoGlobe frente a una instalación solar"
      />
      <Box sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 2, md: 6 },
              alignItems: "center",
              gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" }
            }}
          >
            <ContentImage src={images.about} alt="Trabajo especializado de EcoGlobe" />
            <Box sx={{ minWidth: 0 }}>
              <SectionLabel>Nuestra especialidad</SectionLabel>
              <Typography variant="h2" sx={{ mt: 1.5 }}>
                Paneles solares con ingeniería y servicio cercano
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2.5 }}>
                Nuestra prioridad es ofrecerte las mejores soluciones en ahorro de energía, con la
                mejor relación calidad-precio en el mercado.
              </Typography>
            </Box>
          </Box>
        </PageContainer>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <SectionLabel>Preparación técnica</SectionLabel>
          <Typography variant="h2" sx={{ mt: 1.5 }}>
            Certificaciones y asociaciones
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5 }}>
            Somos parte de CANACINTRA, CPEF y REDEMERE.
          </Typography>
          <Box sx={{ mt: 4, display: "grid", gap: 2, gridTemplateColumns: { md: "1fr 1fr" } }}>
            {certifications.map((item) => (
              <Stack key={item} direction="row" spacing={2} sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
                <WorkspacePremiumIcon color="primary" />
                <Typography variant="body2" fontWeight={700}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </PageContainer>
      </Box>
      <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))" } }}>
            {companyValues.map((item) => (
              <Box key={item.title} sx={{ borderTop: 1, borderColor: "primary.light", pt: 3 }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.75 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </PageContainer>
      </Box>
      <Box sx={{ pt: 10 }}>
        <QuoteBand />
      </Box>
    </>
  );
}
