import { Container } from "@mui/material";
import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  id?: string;
};

export function PageContainer({ children, id }: PageContainerProps) {
  return (
    <Container
      id={id}
      maxWidth="lg"
      sx={{ px: 2, boxSizing: "border-box", overflowX: "hidden" }}
    >
      {children}
    </Container>
  );
}
