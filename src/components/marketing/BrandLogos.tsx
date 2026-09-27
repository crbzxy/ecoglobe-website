import { Box, Typography } from "@mui/material";
import { brandLogos } from "../../content/images";
import { PageContainer } from "../layout/PageContainer";

type BrandLogoCardProps = {
  src: string;
  label: string;
};

function BrandLogoCard({ src, label }: BrandLogoCardProps) {
  return (
    <Box
      component="li"
      sx={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 80, md: 120 },
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 3 },
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        transition: "border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 2,
          transform: "translateY(-4px)"
        }
      }}
    >
      <Box
        component="img"
        src={src}
        alt={label}
        sx={{
          display: "block",
          width: "100%",
          maxWidth: 200,
          height: { xs: 48, md: 64 },
          objectFit: "contain"
        }}
      />
    </Box>
  );
}

export function BrandLogos() {
  return (
    <Box component="section" sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 10 } }}>
      <PageContainer>
        <Typography variant="h6" align="center" color="accent.dark" sx={{ mb: 4 }}>
          Marcas con las que trabajamos
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))"
            }
          }}
        >
          {brandLogos.map((brand) => (
            <BrandLogoCard key={brand.label} src={brand.src} label={brand.label} />
          ))}
        </Box>
      </PageContainer>
    </Box>
  );
}
