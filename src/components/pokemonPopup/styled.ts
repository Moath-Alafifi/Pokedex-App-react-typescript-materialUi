import { Slider, styled, Typography } from "@mui/material";

export const StyledSlider = styled(Slider)({
  " & .MuiSlider-thumb": {
    display: "none",
  },
  width: "70%",
  height:7
});

export const StyledTypography = styled(Typography)({
  display: "inline-flex",
  width: "100%",
  justifyContent: "space-between",
});
