import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { whatsappMessages } from "../../lib/whatsapp";
import { PageContainer } from "../layout/PageContainer";
import { CheckList } from "./CheckList";
import { CtaButton } from "./CtaButton";
import { PageHero } from "./PageHero";
import { QuoteBand } from "./QuoteBand";
import { SectionLabel } from "./SectionLabel";
import { WhatsappLink } from "./WhatsappLink";

type ProductPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  candidateTitle: string;
  candidate: ReactNode;
  steps: string[];
  included: string[];
  whatsappMessage?: string;
};

export function ProductPage(props: ProductPageProps) {
  return (
    <>
      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
        image={props.image}
        imageAlt={props.imageAlt}
      >
        <CtaButton to="/contacto">Cotiza tu proyecto</CtaButton>
        <WhatsappLink message={props.whatsappMessage ?? whatsappMessages.general} />
      </PageHero>
      <ProcessSection
        candidateTitle={props.candidateTitle}
        candidate={props.candidate}
        steps={props.steps}
      />
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <SectionLabel>Servicio integral</SectionLabel>
          <Typography variant="h2" sx={{ mt: 1.5, mb: 4, fontSize: 32 }}>
            ¿Qué incluye?
          </Typography>
          <CheckList items={props.included} />
        </PageContainer>
      </Box>
      <QuoteBand />
    </>
  );
}

function ProcessSection({
  candidateTitle,
  candidate,
  steps
}: Pick<ProductPageProps, "candidateTitle" | "candidate" | "steps">) {
  return (
    <Box sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 10 } }}>
      <PageContainer>
        <Box sx={{ display: "grid", gap: 6, gridTemplateColumns: { lg: "1fr 1fr" } }}>
          <Box>
            <SectionLabel>Antes de empezar</SectionLabel>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: 32 }}>
              {candidateTitle}
            </Typography>
            <Box sx={{ mt: 2.5, color: "text.secondary" }}>{candidate}</Box>
          </Box>
          <Box>
            <SectionLabel>Proceso</SectionLabel>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: 32 }}>
              Cómo comenzar
            </Typography>
            <Stack component="ol" spacing={2} sx={{ mt: 3, p: 0, listStyle: "none" }}>
              {steps.map((step, index) => (
                <Stack key={step} component="li" direction="row" spacing={2}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body2" fontWeight={700} sx={{ pt: 0.75 }}>
                    {step}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
