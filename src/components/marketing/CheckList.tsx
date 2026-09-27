import CheckIcon from "@mui/icons-material/Check";
import { Box, Stack, Typography } from "@mui/material";

type CheckListProps = {
  items: string[];
};

export function CheckList({ items }: CheckListProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: "grid",
        gap: 1.5,
        gridTemplateColumns: { sm: "1fr 1fr" },
        listStyle: "none",
        p: 0,
        m: 0
      }}
    >
      {items.map((item) => (
        <Stack
          key={item}
          component="li"
          direction="row"
          spacing={1.5}
          sx={{ border: 1, borderColor: "divider", borderRadius: 3, p: 2 }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              display: "grid",
              placeItems: "center",
              flexShrink: 0
            }}
          >
            <CheckIcon sx={{ fontSize: 14 }} />
          </Box>
          <Typography variant="body2" fontWeight={700}>
            {item}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
}
