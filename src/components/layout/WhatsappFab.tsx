import ChatIcon from "@mui/icons-material/Chat";
import { Fab } from "@mui/material";
import { whatsappLink, whatsappMessages } from "../../lib/whatsapp";

export function WhatsappFab() {
  return (
    <Fab
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      sx={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 1300,
        bgcolor: "accent.main",
        color: "accent.contrastText",
        "&:hover": { bgcolor: "accent.dark" }
      }}
    >
      <ChatIcon />
    </Fab>
  );
}
