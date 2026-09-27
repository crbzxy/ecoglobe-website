import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Stack, Typography } from "@mui/material";
import { homeStats } from "../../content/home";
import { images } from "../../content/images";
import { PageContainer } from "../layout/PageContainer";
import { ContentImage } from "../marketing/ContentImage";
import { CtaButton } from "../marketing/CtaButton";

export function HomeHero() {
  return (
    <PageContainer>
      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, md: 5 },
          py: { xs: 5, lg: 10 },
          alignItems: "center",
          gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" }
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="overline" color="primary.main" fontWeight={700}>
            Energía solar en Baja California
          </Typography>
          <Typography variant="h1" sx={{ mt: 2 }}>
            El sol de Baja California,{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              trabajando para ti
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 480, fontSize: 18 }}>
            Deja de preocuparte por tu gasto de luz. Diseñamos e instalamos soluciones solares
            personalizadas con la mejor relación calidad-precio.
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4 }}>
            <CtaButton to="/contacto">Cotiza tu proyecto</CtaButton>
            <CtaButton to="/servicios" tone="secondary">
              Ver servicios
            </CtaButton>
          </Stack>
          <HomeStats />
        </Box>
        <HomeHeroMedia />
      </Box>
    </PageContainer>
  );
}

function HomeStats() {
  return (
    <Box
      sx={{
        mt: 5,
        pt: 3,
        borderTop: 1,
        borderColor: "divider",
        display: "grid",
        gap: 3,
        gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" }
      }}
    >
      {homeStats.map((stat) => (
        <Box key={stat.label}>
          <Typography variant="h4" color="primary.main">
            {stat.value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function HomeHeroMedia() {
  return (
    <Stack spacing={2.5}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ border: 1, borderColor: "divider", borderRadius: 4, p: 2 }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            bgcolor: "accent.main",
            color: "accent.contrastText",
            display: "grid",
            placeItems: "center"
          }}
        >
          <VerifiedIcon />
        </Box>
        <Typography variant="body2" fontWeight={700}>
          Experiencia local, instalación profesional y acompañamiento cercano.
        </Typography>
      </Stack>
      <ContentImage
        src={images.hero}
        alt="Equipo EcoGlobe frente a una instalación de paneles solares"
      />
    </Stack>
  );
}
