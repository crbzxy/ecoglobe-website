import BoltIcon from "@mui/icons-material/Bolt";
import { Box, Typography } from "@mui/material";
import { homeBenefits } from "../../content/home";
import { images } from "../../content/images";
import { PageContainer } from "../layout/PageContainer";
import { ContentImage } from "../marketing/ContentImage";
import { SectionLabel } from "../marketing/SectionLabel";

export function HomeBenefits() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, md: 7 },
            py: { xs: 6, md: 10 },
            alignItems: "center",
            gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" }
          }}
        >
          <Box>
            <SectionLabel inverted>¿Por qué EcoGlobe?</SectionLabel>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Más de 10 años generando energía limpia
            </Typography>
            <Typography sx={{ mt: 2.5, maxWidth: 520, opacity: 0.75 }}>
              Somos pioneros en Energía Solar en Baja California. Nuestra prioridad es ofrecerte
              las mejores soluciones en ahorro de energía.
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr" },
                gap: "1px",
                bgcolor: "primary.light",
                borderRadius: 4,
                overflow: "hidden"
              }}
            >
              {homeBenefits.map((benefit) => (
                <Box key={benefit.label} sx={{ display: "flex", gap: 1.5, p: 2.5, bgcolor: "primary.main" }}>
                  <BoltIcon sx={{ color: "accent.main" }} />
                  <Typography variant="body2" fontWeight={700}>
                    {benefit.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <ContentImage
            src={images.panelBenefits}
            alt="Paneles solares EcoGlobe instalados en el techo de una vivienda"
          />
        </Box>
      </PageContainer>
    </Box>
  );
}
