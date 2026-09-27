import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

type ServiceCatalogPath =
  | "/paneles-solares"
  | "/paneles-solares-autonomos"
  | "/soluciones-en-electricidad"
  | "/aire-acondicionado";

type ServiceCatalogCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  to: ServiceCatalogPath;
};

const cardSx = {
  display: "grid",
  gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "120px minmax(0, 1fr)" },
  alignItems: "center",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  minWidth: 0,
  transition: "border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
  "&:hover": {
    borderColor: "primary.main",
    boxShadow: 2,
    transform: "translateY(-4px)"
  },
  "&:hover .service-catalog-arrow": { transform: "translateX(4px)" }
} as const;

export function ServiceCatalogCard({ number, title, description, image, to }: ServiceCatalogCardProps) {
  return (
    <Card component={Link} to={to} variant="outlined" sx={cardSx}>
      <Box sx={{ display: "grid", placeItems: "center", p: 2 }}>
        <Box
          sx={{
            width: { xs: 72, sm: 88 },
            height: { xs: 72, sm: 88 },
            borderRadius: "50%",
            bgcolor: "secondary.main",
            display: "grid",
            placeItems: "center",
            overflow: "hidden"
          }}
        >
          <Box
            component="img"
            src={image}
            alt=""
            sx={{ width: "72%", height: "72%", objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Stack sx={{ px: { xs: 2, sm: 0 }, pr: { sm: 3 }, pb: 3, pt: { xs: 0, sm: 3 }, minWidth: 0, gap: 1 }}>
        <Typography variant="caption" color="primary.main" fontWeight={700}>
          {number}
        </Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 0.5 }}>
          <Typography variant="body2" fontWeight={700} color="primary.main">
            Saber más
          </Typography>
          <ArrowForwardIcon
            className="service-catalog-arrow"
            sx={{ fontSize: 16, color: "primary.main", transition: "transform 180ms ease" }}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
