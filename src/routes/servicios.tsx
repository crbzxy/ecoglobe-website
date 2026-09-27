import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { BrandLogos } from "../components/marketing/BrandLogos";
import { PageHero } from "../components/marketing/PageHero";
import { QuoteBand } from "../components/marketing/QuoteBand";
import { ServiceCatalogCard } from "../components/services/ServiceCatalogCard";
import { ServiceStandards } from "../components/services/ServiceStandards";
import { images } from "../content/images";
import { serviceCards } from "../content/services";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () =>
    pageHead({
      title: "Servicios de energía y electricidad | EcoGlobe",
      description:
        "Paneles solares, sistemas autónomos, soluciones eléctricas y aire acondicionado en Baja California.",
      path: "/servicios"
    }),
  component: ServicesPage
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Energía bien diseñada para cada necesidad"
        description="Desde tu recibo de CFE hasta un proyecto autónomo o eléctrico completo: te acompañamos con ingeniería, instalación y soporte."
        image={images.about}
        imageAlt="Equipo EcoGlobe instalando paneles solares en Baja California"
      />
      <Box sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 10 } }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" }
            }}
          >
            {serviceCards.map((service, index) => (
              <ServiceCatalogCard
                key={service.title}
                number={`0${index + 1}`}
                title={service.title}
                description={service.description}
                image={service.image}
                to={service.to}
              />
            ))}
          </Box>
        </PageContainer>
      </Box>
      <ServiceStandards />
      <QuoteBand />
      <BrandLogos />
    </>
  );
}
