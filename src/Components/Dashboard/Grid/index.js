import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
// import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { get100Coins } from "../../../Functions/get100Coins";

function Grid({ coin, icon, handledel }) {
  const handleSave = (event) => {
    if (localStorage.getItem("watch")) {
      console.log("Items present");
      var currItems = JSON.parse(localStorage.getItem("watch"));
      currItems.push(coin.id);
      localStorage.setItem("watch", JSON.stringify(currItems));
    } else {
      console.log("No items");
      localStorage.setItem("watch", JSON.stringify([coin.id]));
      
    }
  };
  const handleDelete = async (event) => {
    if (localStorage.getItem("watch")) {
      console.log("Items present");
      var currItems = JSON.parse(localStorage.getItem("watch"));
      var newItems = currItems.filter((item) => item != coin.id);
      localStorage.setItem("watch", JSON.stringify(newItems));
      const myCoins = await get100Coins();
      const getStoredCoinId = JSON.parse(localStorage.getItem("watch"));
      const filteredArray = myCoins.filter((value) => getStoredCoinId.includes(value.id));
      handledel(filteredArray);

    }
  };
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt="logo..." />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          {!icon ? (
            <Link>
              <div className="addtowatch">
                <BookmarkAddIcon fontSize="large" onClick={handleSave} />
              </div>
              
            </Link>
          ) : (
            <Link>
              <div className="addtowatch">
                <DeleteIcon fontSize="large" onClick={handleDelete} />
              </div>

              
            </Link>
          )}
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">Total Volume : {coin.total_volume.toLocaleString()}</p>
          <p className="total_volume">Market Cap : ${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
