import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { PageContainer } from "../layout/PageContainer";
import { ContentImage } from "./ContentImage";
import { CtaButton } from "./CtaButton";
import { SectionLabel } from "./SectionLabel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children
}: PageHeroProps) {
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
          <SectionLabel>{eyebrow}</SectionLabel>
          <Typography variant="h1" sx={{ mt: 2, maxWidth: 640 }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 520, fontSize: { xs: 16, md: 18 } }}>
            {description}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            flexWrap="wrap"
            gap={1.5}
            sx={{ mt: 4, width: { xs: "100%", sm: "auto" } }}
          >
            {children ?? <CtaButton to="/contacto">Cotiza tu proyecto</CtaButton>}
          </Stack>
        </Box>
        <ContentImage src={image} alt={imageAlt} />
      </Box>
    </PageContainer>
  );
}
