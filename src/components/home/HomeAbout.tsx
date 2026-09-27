import { Box, Typography } from "@mui/material";
import { images } from "../../content/images";
import { PageContainer } from "../layout/PageContainer";
import { ContentImage } from "../marketing/ContentImage";

export function HomeAbout() {
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, md: 6 },
            py: { xs: 6, lg: 12 },
            alignItems: "center",
            gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" }
          }}
        >
          <ContentImage
            src={images.about}
            alt="Instalación de paneles solares EcoGlobe en Baja California"
          />
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" color="primary.main" textTransform="uppercase">
              ¿Quiénes somos?
            </Typography>
            <Typography variant="h2" color="accent.dark" textTransform="uppercase" sx={{ mt: 1 }}>
              Sobre Ecoglobe
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2.5, maxWidth: 520 }}>
              Pioneros en Energía Solar en Baja California, con más de 10 años de experiencia en el
              sector, estamos comprometidos con la transición a una economía de energía limpia en
              la región. Nuestra prioridad es ofrecerte las mejores soluciones en ahorro de energía,
              con la mejor relación calidad-precio en el mercado.
            </Typography>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
