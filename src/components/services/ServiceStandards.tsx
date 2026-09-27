import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedIcon from "@mui/icons-material/Verified";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import { Box, Stack, Typography } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import { serviceStandards } from "../../content/services";
import { PageContainer } from "../layout/PageContainer";
import { SectionLabel } from "../marketing/SectionLabel";

const standardIcons: SvgIconComponent[] = [VerifiedIcon, ShieldIcon, WifiTetheringIcon];

function StandardCard({
  title,
  text,
  Icon
}: {
  title: string;
  text: string;
  Icon: SvgIconComponent;
}) {
  return (
    <Stack
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        p: 3.5,
        bgcolor: "background.paper",
        height: "100%"
      }}
    >
      <Box sx={{ color: "primary.main" }}>
        <Icon />
      </Box>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        {text}
      </Typography>
    </Stack>
  );
}

export function ServiceStandards() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <PageContainer>
        <SectionLabel>Nuestro estándar</SectionLabel>
        <Typography variant="h2" sx={{ mt: 1.5, mb: 4 }}>
          Acompañamiento después de instalar
        </Typography>
        <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))" } }}>
          {serviceStandards.map((item, index) => (
            <StandardCard key={item.title} title={item.title} text={item.text} Icon={standardIcons[index]} />
          ))}
        </Box>
      </PageContainer>
    </Box>
  );
}
