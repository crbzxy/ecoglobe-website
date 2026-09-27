import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { navItems, siteContact } from "../../content/site";
import { CtaButton } from "../marketing/CtaButton";
import { Brand } from "./Brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <TopBar />
      <Toolbar sx={{ maxWidth: 1280, width: "100%", mx: "auto", px: 2, py: 1.5, gap: 2 }}>
        <Brand />
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
          component="nav"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </Stack>
        <Box sx={{ display: { xs: "none", sm: "block" }, ml: { xs: "auto", md: 2 } }}>
          <CtaButton to="/contacto" tone="primary">
            Cotiza gratis
          </CtaButton>
        </Box>
        <IconButton
          sx={{ display: { md: "none" }, ml: "auto" }}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <MobileNav onNavigate={() => setOpen(false)} />
      </Drawer>
    </AppBar>
  );
}

function TopBar() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ maxWidth: 1280, mx: "auto", px: 2, py: 1 }}
      >
        <Typography variant="caption">
          Energía solar en Baja California · +10 años de experiencia
        </Typography>
        <Box
          component="a"
          href={siteContact.phoneHref}
          sx={{ display: { xs: "none", sm: "block" }, "&:hover": { opacity: 0.8 } }}
        >
          <Typography variant="caption">Llámanos: {siteContact.phoneDisplay}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

function NavItem({ to, label }: { to: (typeof navItems)[number]["to"]; label: string }) {
  return (
    <Typography
      component={Link}
      to={to}
      variant="body2"
      fontWeight={700}
      sx={{
        color: "text.secondary",
        "&:hover": { color: "primary.main" }
      }}
      activeProps={{ style: { color: "inherit", fontWeight: 800 } }}
    >
      {label}
    </Typography>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Stack spacing={3} sx={{ width: 280, p: 3 }} component="nav" aria-label="Navegación móvil">
      {navItems.map((item) => (
        <Typography
          key={item.to}
          component={Link}
          to={item.to}
          fontWeight={700}
          onClick={onNavigate}
        >
          {item.label}
        </Typography>
      ))}
      <CtaButton to="/contacto">Cotiza gratis</CtaButton>
    </Stack>
  );
}
