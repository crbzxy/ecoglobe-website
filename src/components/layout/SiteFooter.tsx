import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { navItems, socialItems } from "../../content/site";
import { Brand } from "./Brand";

const socialIcons: Record<(typeof socialItems)[number]["label"], ReactNode> = {
  Facebook: <FacebookIcon fontSize="small" />,
  Instagram: <InstagramIcon fontSize="small" />,
  LinkedIn: <LinkedInIcon fontSize="small" />,
  YouTube: <YouTubeIcon fontSize="small" />
};

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "flex-end" }}
        spacing={4}
        sx={{ maxWidth: 1280, mx: "auto", px: 2, py: 6 }}
      >
        <Box>
          <Brand footer />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, maxWidth: 360 }}>
            Soluciones de energía solar y electricidad con experiencia local en Baja California.
          </Typography>
        </Box>
        <FooterLinks />
      </Stack>
    </Box>
  );
}

function FooterLinks() {
  return (
    <Stack spacing={2} alignItems={{ md: "flex-end" }}>
      <Stack direction="row" spacing={1}>
        {socialItems.map((item) => (
          <IconButton
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { bgcolor: "primary.dark" }
            }}
          >
            {socialIcons[item.label]}
          </IconButton>
        ))}
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={2.5}>
        {navItems.map((item) => (
          <Typography
            key={item.to}
            component={Link}
            to={item.to}
            variant="body2"
            fontWeight={700}
            color="text.secondary"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            {item.label}
          </Typography>
        ))}
        <Typography
          component={Link}
          to="/aviso"
          variant="body2"
          fontWeight={700}
          color="text.secondary"
          sx={{ "&:hover": { color: "primary.main" } }}
        >
          Aviso de privacidad
        </Typography>
      </Stack>
    </Stack>
  );
}
