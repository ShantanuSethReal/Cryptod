import React, { useEffect, useState } from "react";
import { get100Coins } from "../Functions/get100Coins";
import Grid from "../Components/Dashboard/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "../Components/Dashboard/Tabs/styles.css";
import List from "../Components/Dashboard/List";
import Header from "../Components/Common/Header";

export default function WatchList() {
  const [value, setValue] = useState("grid");
  // const [coin, setCoin] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [coinsmatch, setcoinsmatch] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const myCoins = await get100Coins();
    const getStoredCoinId = JSON.parse(localStorage.getItem("watch"));
    if (getStoredCoinId) {
      const filteredArray = myCoins.filter((value) => getStoredCoinId.includes(value.id));
      setcoinsmatch(filteredArray);
    }
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
      <Header></Header>
      <h1 className="heading-watchlist">Your WatchList</h1>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coinsmatch.map((item, index) => {
              return <Grid coin={item} key={index} icon={true} handledel={setcoinsmatch} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coinsmatch.map((item, index) => {
              return <List coin={item} key={index} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
