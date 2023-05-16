import axios from "axios";
import React, { useEffect, useState } from "react";
import BackToTop from "../Components/Common/BackToTop/index";
import Header from "../Components/Common/Header/index";
import Loader from "../Components/Common/Loader/index.js";
import PaginationComponent from "../Components/Dashboard/Pagination/index";
import Search from "../Components/Dashboard/SearchBar/index";
import TabsComponent from "../Components/Dashboard/Tabs/index";
import { get100Coins } from "../Functions/get100Coins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && <PaginationComponent page={page} handlePageChange={handlePageChange} />}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
