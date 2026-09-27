import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, TextField, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { PageHero } from "../components/marketing/PageHero";
import { QuoteBand } from "../components/marketing/QuoteBand";
import { faqItems } from "../content/faq";
import { images } from "../content/images";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () =>
    pageHead({
      title: "Preguntas frecuentes sobre energía solar | EcoGlobe",
      description: "Respuestas sobre CFE, paneles solares, consumo, apagones y ahorro energético.",
      path: "/preguntas-frecuentes"
    }),
  component: FaqPage
});

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function FaqPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | false>(false);
  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) {
      return faqItems;
    }
    return faqItems.filter((item) =>
      normalize(`${item.question} ${item.answer} ${item.keywords.join(" ")}`).includes(needle)
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Asesoría clara"
        title="Preguntas frecuentes"
        description="Lo esencial sobre paneles solares, CFE y el ahorro energético antes de tomar una decisión."
        image={images.faq}
        imageAlt="Equipo e instalación de paneles solares EcoGlobe"
      />
      <PageContainer>
        <Box sx={{ py: { xs: 6, md: 8 }, maxWidth: 800, mx: "auto" }}>
          <TextField
            fullWidth
            label="Buscar en preguntas y respuestas"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            sx={{ mb: 3 }}
          />
          {filtered.length === 0 ? (
            <Typography color="text.secondary">
              No hay resultados. Prueba con otras palabras o borra el filtro.
            </Typography>
          ) : (
            filtered.map((item) => (
              <Accordion
                key={item.id}
                expanded={openId === item.id}
                onChange={(_, expanded) => setOpenId(expanded ? item.id : false)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={700}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Box>
      </PageContainer>
      <QuoteBand />
    </>
  );
}
