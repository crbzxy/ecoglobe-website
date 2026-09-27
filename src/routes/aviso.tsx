import { Box, Link as MuiLink, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { SectionLabel } from "../components/marketing/SectionLabel";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/aviso")({
  head: () =>
    pageHead({
      title: "Aviso de privacidad | EcoGlobe",
      description: "Aviso de privacidad y tratamiento de datos personales de EcoGlobe.",
      path: "/aviso"
    }),
  component: PrivacyPage
});

function PrivacyPage() {
  return (
    <PageContainer>
      <Box component="article" sx={{ py: 8, maxWidth: 800 }}>
        <SectionLabel>Información legal</SectionLabel>
        <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: 40, sm: 52 } }}>
          Aviso de privacidad
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          Última actualización: 14/07/2021
        </Typography>
        <LegalSection title="Responsable de sus datos">
          ECO Globe S de RL de CV, mejor conocido como ECO Globe, con domicilio en R de la Brisa
          2011, Fracc. Altabrisa, Tijuana, Baja California, es responsable del uso y protección de
          sus datos personales.
        </LegalSection>
        <LegalSection title="Finalidades del tratamiento">
          Los datos recabados se utilizan para tramitar contratos de interconexión con CFE y
          elaborar contratos. De manera adicional pueden utilizarse para presentar cotizaciones,
          mercadotecnia, publicidad y prospección comercial. Negarse al uso de datos para
          finalidades secundarias no será motivo para negar los servicios o productos solicitados.
        </LegalSection>
        <LegalSection title="Datos personales utilizados">
          Podemos utilizar datos de identificación, contacto, domicilio, teléfono, correo, RFC,
          CURP, nacionalidad, estado civil, número de registro de CFE y datos patrimoniales o
          financieros necesarios para prestar el servicio.
        </LegalSection>
        <LegalSection title="Transferencias">
          Los datos pueden compartirse con CFE para el trámite de contratos de interconexión,
          cuando corresponda y con el consentimiento requerido.
        </LegalSection>
        <LegalSection title="Derechos ARCO">
          Usted puede solicitar acceso, rectificación, cancelación u oposición al tratamiento de
          sus datos, así como revocar su consentimiento, mediante solicitud por escrito.
          Responsable: Manuel Ruiz Arias. Correo:{" "}
          <MuiLink href="mailto:manuelruiz@ecoglobe.com.mx">manuelruiz@ecoglobe.com.mx</MuiLink>.
          Teléfono: <MuiLink href="tel:+526642276342">664 227 6342</MuiLink>.
        </LegalSection>
        <LegalSection title="Cambios al aviso">
          Las modificaciones derivadas de requerimientos legales, necesidades del servicio o
          cambios en nuestras prácticas se publicarán en este sitio web.
        </LegalSection>
      </Box>
    </PageContainer>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box component="section" sx={{ mt: 5 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75 }}>
        {children}
      </Typography>
    </Box>
  );
}
