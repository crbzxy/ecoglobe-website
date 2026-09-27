import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Box, Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useRouter,
  type ErrorComponentProps
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { SiteShell } from "../components/layout/SiteShell";
import { theme } from "../theme/theme";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EcoGlobe" },
      { name: "description", content: "Energía solar en Baja California" },
      { name: "author", content: "EcoGlobe" },
      { name: "theme-color", content: theme.palette.primary.main },
      { property: "og:title", content: "EcoGlobe" },
      { property: "og:description", content: "Energía solar en Baja California" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      },
      { rel: "icon", href: "/favicon.ico" }
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-Y9F6ZS6HBK",
        async: true
      },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y9F6ZS6HBK');"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [emotionCache] = useState(() => createCache({ key: "mui" }));

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteShell>
          <Outlet />
        </SiteShell>
      </ThemeProvider>
    </CacheProvider>
  );
}

function NotFoundPage() {
  return (
    <StatusBlock
      title="Página no encontrada"
      description="La página que buscas no existe o cambió de dirección."
    />
  );
}

function ErrorPage({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusBlock
      title="Esta página no cargó"
      description="Ocurrió un error. Puedes reintentar o volver al inicio."
      actionLabel="Reintentar"
      onAction={() => {
        router.invalidate();
        reset();
      }}
    />
  );
}

function StatusBlock({
  title,
  description,
  actionLabel,
  onAction
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <Box sx={{ minHeight: "50vh", display: "grid", placeItems: "center", p: 3 }}>
      <Box sx={{ textAlign: "center", maxWidth: 420 }}>
        <Typography variant="h4">{title}</Typography>
        <Typography color="text.secondary" sx={{ mt: 1.5 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 3, display: "flex", gap: 1.5, justifyContent: "center" }}>
          {onAction && actionLabel ? (
            <Button onClick={onAction} variant="contained">
              {actionLabel}
            </Button>
          ) : null}
          <Button component={Link} to="/" variant="outlined">
            Volver al inicio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
