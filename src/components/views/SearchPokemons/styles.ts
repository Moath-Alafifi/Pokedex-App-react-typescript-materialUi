export const styledInputBase = {
    color: "#fff",
    backgroundColor: "#5DB9FF",
    borderRadius: 10,
    paddingLeft: 2,
    "& .MuiInputBase-input": {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
    " @media (max-width: 640px)": {
      "& .MuiInputBase-input": {
        width: "18ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  };
  
 export const styledBox = {
    backgroundColor: "#2e7ebb",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
 export const styledTypography = {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 5,
    " @media (max-width: 640px)": {
      fontSize: 20,
      paddingRight: 1,
    },
  };
  
 
  