import { Box } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { images } from "../../content/images";

type BrandProps = {
  footer?: boolean;
};

export function Brand({ footer = false }: BrandProps) {
  return (
    <Box
      component={Link}
      to="/"
      aria-label="EcoGlobe, inicio"
      sx={{ display: "inline-flex", alignItems: "center" }}
    >
      <Box
        component="img"
        src={footer ? images.logoFooter : images.logo}
        alt="EcoGlobe"
        sx={{ height: { xs: 36, md: 44 }, width: "auto", maxWidth: { xs: 160, md: "none" } }}
      />
    </Box>
  );
}
