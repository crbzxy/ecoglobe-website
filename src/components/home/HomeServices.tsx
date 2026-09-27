import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { homeServices } from "../../content/home";
import { useCarousel } from "../../hooks/useCarousel";
import { PageContainer } from "../layout/PageContainer";
import { HomeServiceSlide } from "./HomeServiceSlide";

const navButtonSx = {
  border: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
  "&:hover": { bgcolor: "secondary.main", borderColor: "primary.main" }
} as const;

type CarouselNavProps = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
};

function CarouselNav({ index, total, onPrev, onNext, onGoTo }: CarouselNavProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={1.5} sx={{ mt: 3 }}>
      <IconButton aria-label="Servicio anterior" onClick={onPrev} sx={navButtonSx}>
        <ChevronLeftIcon />
      </IconButton>
      {Array.from({ length: total }, (_, dotIndex) => (
        <Box
          key={dotIndex}
          component="button"
          type="button"
          aria-label={`Ir al servicio ${dotIndex + 1}`}
          aria-current={dotIndex === index}
          onClick={() => onGoTo(dotIndex)}
          sx={{
            width: dotIndex === index ? 24 : 8,
            height: 8,
            p: 0,
            border: 0,
            borderRadius: 999,
            cursor: "pointer",
            bgcolor: dotIndex === index ? "primary.main" : "divider",
            transition: "width 180ms ease, background-color 180ms ease",
            "&:hover": { bgcolor: "primary.light" }
          }}
        />
      ))}
      <IconButton aria-label="Servicio siguiente" onClick={onNext} sx={navButtonSx}>
        <ChevronRightIcon />
      </IconButton>
    </Stack>
  );
}

export function HomeServices() {
  const { index, goTo, goNext, goPrev } = useCarousel(homeServices.length);
  const activeService = homeServices[index];

  return (
    <Box
      id="servicios"
      component="section"
      sx={{ bgcolor: "secondary.main", borderTop: 1, borderBottom: 1, borderColor: "divider" }}
    >
      <PageContainer>
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "baseline" }}
            spacing={1.5}
            sx={{ mb: 4 }}
          >
            <Typography variant="h2">Nuestros servicios</Typography>
            <Typography
              component={Link}
              to="/servicios"
              fontWeight={700}
              color="primary.main"
              sx={{ "&:hover": { color: "primary.dark" } }}
            >
              Ver todos
            </Typography>
          </Stack>
          <HomeServiceSlide key={activeService.number} {...activeService} />
          <CarouselNav
            index={index}
            total={homeServices.length}
            onPrev={goPrev}
            onNext={goNext}
            onGoTo={goTo}
          />
        </Box>
      </PageContainer>
    </Box>
  );
}
