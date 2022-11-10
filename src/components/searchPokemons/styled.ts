import { styled, Typography, Box, InputBase } from "@mui/material";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#5DB9FF",
  borderRadius: 10,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export const StyledBox = styled(Box)({
  backgroundColor: "#2e7ebb",
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTypography = styled(Typography)({
  color: "#fff",
  fontSize: 30,
  fontWeight: "bold",
  paddingRight: 20,
});
