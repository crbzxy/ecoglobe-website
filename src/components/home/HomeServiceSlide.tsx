import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import type { HomeServicePath } from "../../content/home";

type HomeServiceSlideProps = {
  number: string;
  title: string;
  description: string;
  to: HomeServicePath;
  image: string;
};

const slideCardSx = {
  display: "grid",
  gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1.1fr) minmax(0, 1fr)" },
  overflow: "hidden",
  minWidth: 0,
  textDecoration: "none",
  color: "inherit",
  "&:hover": { borderColor: "primary.main" },
  "&:hover .service-slide-arrow": { transform: "translateX(4px)" }
} as const;

export function HomeServiceSlide({ number, title, description, to, image }: HomeServiceSlideProps) {
  return (
    <Card component={Link} to={to} variant="outlined" sx={slideCardSx}>
      <Box
        sx={{
          minWidth: 0,
          display: "grid",
          placeItems: "center",
          bgcolor: "secondary.main",
          p: 3,
          minHeight: { xs: 240, md: 360 }
        }}
      >
        <Box
          component="img"
          src={image}
          alt=""
          sx={{ display: "block", width: "100%", maxHeight: { xs: 220, md: 320 }, objectFit: "contain" }}
        />
      </Box>
      <Stack justifyContent="center" sx={{ px: { xs: 3, md: 5 }, py: { xs: 3, md: 5 }, gap: 1.5, minWidth: 0 }}>
        <Typography variant="caption" color="primary.main" fontWeight={700}>
          {number}
        </Typography>
        <Typography variant="h3">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
        <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 1 }}>
          <Typography fontWeight={700} color="primary.main">
            Conocer más
          </Typography>
          <ArrowForwardIcon
            className="service-slide-arrow"
            sx={{ fontSize: 18, color: "primary.main", transition: "transform 180ms ease" }}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
