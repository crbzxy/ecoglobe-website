import { Typography } from "@mui/material";

type SectionLabelProps = {
  children: string;
  inverted?: boolean;
};

export function SectionLabel({ children, inverted = false }: SectionLabelProps) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: inverted ? "accent.main" : "accent.dark",
        fontWeight: 700,
        letterSpacing: "0.08em"
      }}
    >
      {children}
    </Typography>
  );
}
