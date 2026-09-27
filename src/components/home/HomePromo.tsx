import { Box, Stack, Typography } from "@mui/material";
import { images } from "../../content/images";
import { whatsappMessages } from "../../lib/whatsapp";
import { PageContainer } from "../layout/PageContainer";
import { CtaButton } from "../marketing/CtaButton";
import { QuoteBand } from "../marketing/QuoteBand";
import { SectionLabel } from "../marketing/SectionLabel";
import { WhatsappLink } from "../marketing/WhatsappLink";

export function HomePromo() {
  return (
    <>
      <PageContainer>
        <Box
          sx={{
            my: { xs: 8, md: 10 },
            display: "grid",
            gridTemplateColumns: { lg: "minmax(0, 1fr) minmax(0, 1fr)" },
            overflow: "hidden",
            borderRadius: 2,
            bgcolor: "primary.main",
            color: "primary.contrastText"
          }}
        >
          <Box sx={{ p: 2, minWidth: 0 }}>
            <Box
              component="img"
              src={images.airSolar}
              alt="Aire acondicionado EcoGlobe alimentado con paneles solares"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: "100%",
                maxHeight: { xs: 280, md: 420 },
                height: "auto",
                objectFit: "contain",
                borderRadius: 2
              }}
            />
          </Box>
          <Box sx={{ p: { xs: 2, sm: 6 }, minWidth: 0 }}>
            <SectionLabel inverted>Promoción de verano</SectionLabel>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Paneles solares + aire acondicionado
            </Typography>
            <Typography sx={{ mt: 2, maxWidth: 400, opacity: 0.75 }}>
              Cámbiate a energía solar y disfruta el confort sin preocuparte por el gasto de luz.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3.5 }}>
              <CtaButton to="/panel-mas-aire" tone="light">
                Conoce la promoción
              </CtaButton>
              <WhatsappLink message={whatsappMessages.combo} tone="light" />
            </Stack>
          </Box>
        </Box>
      </PageContainer>
      <QuoteBand />
    </>
  );
}
