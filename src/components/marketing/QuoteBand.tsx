import { Box, Stack, Typography } from "@mui/material";
import { PageContainer } from "../layout/PageContainer";
import { CtaButton } from "./CtaButton";

export function QuoteBand() {
  return (
    <PageContainer>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
        spacing={4}
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
          px: 2,
          py: 6,
          mb: 10
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, sm: 36 } }}>
            Diseñemos tu proyecto
          </Typography>
          <Typography sx={{ mt: 1, maxWidth: 520, color: "primary.contrastText", opacity: 0.75 }}>
            Recibe una cotización personalizada según tus necesidades de energía.
          </Typography>
        </Box>
        <CtaButton to="/contacto">Solicitar cotización</CtaButton>
      </Stack>
    </PageContainer>
  );
}
