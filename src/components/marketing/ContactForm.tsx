import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "@tanstack/react-router";
import { siteContact } from "../../content/site";

export function ContactForm() {
  return (
    <Box
      component="form"
      action={siteContact.emailMailto}
      method="post"
      encType="text/plain"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        borderRadius: 4,
        p: { xs: 3, sm: 4.5 }
      }}
    >
      <Typography variant="h4">Déjanos un mensaje</Typography>
      <Stack spacing={2} sx={{ mt: 3 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <ContactField name="nombre" label="Nombre" />
          <ContactField name="correo" label="Correo electrónico" type="email" />
        </Stack>
        <ContactField name="telefono" label="Teléfono" type="tel" />
        <ContactField name="mensaje" label="Mensaje" multiline />
      </Stack>
      <Typography variant="caption" sx={{ display: "block", mt: 2, opacity: 0.7 }}>
        Al enviar aceptas el{" "}
        <Box component={Link} to="/aviso" sx={{ color: "accent.main", fontWeight: 700 }}>
          aviso de privacidad
        </Box>{" "}
        y el contacto de EcoGlobe respecto a tu solicitud.
      </Typography>
      <Button
        type="submit"
        sx={{
          mt: 3,
          bgcolor: "accent.main",
          color: "accent.contrastText",
          "&:hover": { bgcolor: "accent.dark" }
        }}
      >
        Enviar mensaje
      </Button>
    </Box>
  );
}

function ContactField({
  name,
  label,
  type = "text",
  multiline = false
}: {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      required
      fullWidth
      multiline={multiline}
      minRows={multiline ? 4 : undefined}
      variant="outlined"
      InputLabelProps={{ sx: { color: "primary.contrastText" } }}
      sx={(theme) => ({
        "& .MuiOutlinedInput-root": {
          color: "primary.contrastText",
          "& fieldset": {
            borderColor: alpha(theme.palette.primary.contrastText, 0.28)
          },
          "&:hover fieldset": { borderColor: "accent.main" },
          "&.Mui-focused fieldset": { borderColor: "accent.main" }
        }
      })}
    />
  );
}
