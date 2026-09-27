import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsappFab } from "./WhatsappFab";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <SiteFooter />
      <WhatsappFab />
    </Box>
  );
}
