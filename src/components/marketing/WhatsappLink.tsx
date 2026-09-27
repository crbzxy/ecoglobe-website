import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";
import { whatsappLink, whatsappMessages } from "../../lib/whatsapp";

type WhatsappLinkProps = {
  message?: string;
  label?: string;
  tone?: "secondary" | "light";
};

export function WhatsappLink({
  message = whatsappMessages.general,
  label = "Consultar por WhatsApp",
  tone = "secondary"
}: WhatsappLinkProps) {
  const isLight = tone === "light";

  return (
    <Button
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<ChatIcon />}
      sx={{
        bgcolor: isLight ? "background.paper" : "transparent",
        color: "text.primary",
        border: 1,
        borderColor: isLight ? "transparent" : "divider",
        "&:hover": { bgcolor: "secondary.main" }
      }}
    >
      {label}
    </Button>
  );
}
