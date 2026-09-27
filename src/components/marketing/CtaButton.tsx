import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type CtaTone = "accent" | "primary" | "secondary" | "light";

type InternalCtaProps = {
  to: "/contacto" | "/servicios" | "/panel-mas-aire" | "/";
  tone?: CtaTone;
  children: ReactNode;
};

const toneStyles = {
  accent: {
    bgcolor: "accent.main",
    color: "accent.contrastText",
    "&:hover": { bgcolor: "accent.dark" }
  },
  primary: {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    "&:hover": { bgcolor: "primary.dark" }
  },
  secondary: {
    bgcolor: "transparent",
    color: "text.primary",
    border: 1,
    borderColor: "divider",
    "&:hover": { bgcolor: "secondary.main" }
  },
  light: {
    bgcolor: "background.paper",
    color: "text.primary",
    "&:hover": { bgcolor: "secondary.main" }
  }
} as const;

export function CtaButton({ to, tone = "accent", children }: InternalCtaProps) {
  return (
    <Button component={Link} to={to} sx={toneStyles[tone]}>
      {children}
    </Button>
  );
}
