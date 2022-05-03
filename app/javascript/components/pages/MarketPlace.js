import React from "react";
import { useState } from "react";
import DisplayInventory from "../components/DisplayInventory";
import { data } from "../assets/MockData";
import SearchBar from "../components/SearchBar";
import "../App.css";

function MarketPlace() {
  const [allData, setData] = useState(data);

  const weaponDropdown = () => {
    return [...new Set(data.map((item) => item.weapon))];
  };

  const priceDropdown = () => {
    return [...new Set(data.map((item) => item.price))];
  };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const weaponName = `${item.name_weapon} ${item.capacity_weapon}`;
      if (weaponName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDescription = (description) => {
    const filteredData = data.filter((item) => {
      if (item.description.toLowerCase().includes(description.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterWeapon = (weapon) => {
    const filteredData = data.filter((item) => {
      if (item.weapon === weapon) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterPrice = (price) => {
    const filteredData = data.filter((item) => {
      if (item.price === price) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container marketplace">
      <div className="row">
        <div className="col-sm-3">
          <SearchBar
            weapons={weaponDropdown()}
            prices={priceDropdown()}
            onNameFilter={handleFilterName}
            onDescriptionFilter={handleFilterDescription}
            onWeaponFilter={handleFilterWeapon}
            onPriceFilter={handleFilterPrice}
          />
        </div>
        <div className="col-sm-9">
          <h1 className="text-white">*** WELCOME TO OUR MARKETPLACE ***</h1>
          <div className="row mt-5">
            {allData.map((item) => (
              <DisplayInventory item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
