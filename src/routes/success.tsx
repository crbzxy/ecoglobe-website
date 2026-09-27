import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { CtaButton } from "../components/marketing/CtaButton";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/success")({
  head: () =>
    pageHead({
      title: "Mensaje enviado | EcoGlobe",
      description: "Confirmación de contacto con EcoGlobe.",
      path: "/success",
      noIndex: true
    }),
  component: SuccessPage
});

function SuccessPage() {
  return (
    <PageContainer>
      <Stack alignItems="center" textAlign="center" sx={{ minHeight: "62vh", justifyContent: "center", py: 10 }}>
        <CheckCircleIcon color="primary" sx={{ fontSize: 64 }} />
        <Typography variant="h2" sx={{ mt: 3 }}>
          Tu mensaje fue enviado
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, fontSize: 18 }}>
          Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.
        </Typography>
        <Stack sx={{ mt: 4, width: { xs: "100%", sm: "auto" } }}>
          <CtaButton to="/" tone="secondary">
            Volver al inicio
          </CtaButton>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
