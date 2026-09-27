import { Box } from "@mui/material";

type ContentImageProps = {
  src: string;
  alt: string;
};

export function ContentImage({ src, alt }: ContentImageProps) {
  return (
    <Box
      sx={{
        minWidth: 0,
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        p: 2
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          display: "block",
          width: "100%",
          maxWidth: "100%",
          maxHeight: { xs: 280, md: 420 },
          height: "auto",
          objectFit: "contain",
          borderRadius: 2
        }}
      />
    </Box>
  );
}
