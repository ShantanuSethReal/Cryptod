import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import "./styles.css";
import Grid from "../Grid";
import List from "../List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");
  // const [coin, setCoin] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((item, index) => {
              return <Grid coin={item} key={index} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, index) => {
              return <List coin={item} key={index} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
;