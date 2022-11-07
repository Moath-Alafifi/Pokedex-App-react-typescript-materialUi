import { Box, Avatar, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: 290 ,
  height: 350,
  backgroundColor: "aliceblue",
  marginBottom: 10,
  borderRadius: 10,

});
export const StyledWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#5DB9FF",
  padding: 20,
  minHeight:550
});

export const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
});

export const StyledPopupWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: "1px 1px 3px #fff",
  backgroundColor: "aliceblue",
  padding: 8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
