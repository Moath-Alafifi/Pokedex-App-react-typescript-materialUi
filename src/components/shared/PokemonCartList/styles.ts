export const styledWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#5DB9FF",
    padding: "20px !important",
    minHeight: 550,
    " @media (max-width: 640px)": {
      justifyContent: "center",
    },
    " @media (max-width: 940px)": {
      justifyContent: "space-around",
    },
  };