import ChatIcon from "@mui/icons-material/Chat";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/layout/PageContainer";
import { ContactForm } from "../components/marketing/ContactForm";
import { SectionLabel } from "../components/marketing/SectionLabel";
import { siteContact } from "../content/site";
import { pageHead } from "../lib/seo";
import { whatsappLink, whatsappMessages } from "../lib/whatsapp";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageHead({
      title: "Contacto | EcoGlobe",
      description: "Contacta a EcoGlobe en Tijuana para cotizar paneles solares y soluciones eléctricas.",
      path: "/contacto"
    }),
  component: ContactPage
});

const contactCards = [
  {
    icon: <PhoneIcon />,
    label: "Llámanos",
    text: siteContact.phoneDisplay,
    href: siteContact.phoneHref
  },
  {
    icon: <ChatIcon />,
    label: "WhatsApp",
    text: "Escríbenos directamente",
    href: whatsappLink(whatsappMessages.contacto)
  },
  {
    icon: <PlaceIcon />,
    label: "Visítanos",
    text: siteContact.address,
    href: siteContact.mapsHref
  }
];

function ContactPage() {
  return (
    <PageContainer>
      <Box sx={{ py: { xs: 8, lg: 12 } }}>
        <SectionLabel>Hablemos</SectionLabel>
        <Typography variant="h1" sx={{ mt: 2, maxWidth: 720, fontSize: { xs: 40, sm: 56 } }}>
          Tu proyecto de energía empieza aquí
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 640, fontSize: 18 }}>
          Cuéntanos qué necesitas y te ayudaremos a encontrar una solución personalizada.
        </Typography>
        <Box
          sx={{
            mt: 6,
            display: "grid",
            gap: 4,
            gridTemplateColumns: { lg: "0.8fr 1.2fr" }
          }}
        >
          <Stack spacing={2}>
            {contactCards.map((card) => (
              <Stack
                key={card.label}
                component="a"
                href={card.href}
                direction="row"
                spacing={2}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 4,
                  p: 2.5,
                  transition: "transform 160ms ease",
                  "&:hover": { transform: "translateY(-2px)" }
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    color: "primary.main",
                    display: "grid",
                    placeItems: "center"
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Typography fontWeight={700}>{card.label}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {card.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
          <ContactForm />
        </Box>
        <Box
          component="iframe"
          title="Ubicación EcoGlobe en Tijuana"
          src={siteContact.mapsEmbed}
          sx={{ mt: 6, width: "100%", height: 280, border: 0, borderRadius: 4 }}
        />
      </Box>
    </PageContainer>
  );
}
