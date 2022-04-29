import React from "react"
import { useState } from "react";

const SearchBar = ({
                       weapons,
                       prices,
                       onNameFilter,
                       onDescriptionFilter,
                       onWeaponFilter,
                       onPriceFilter
                   }) => {
    const [filters, setFilters] = useState({
        name: "",
        description: "",
        weapon: "",
        price: "",
    });

    const handleInput = (field) => (event) => {
        const { value } = event.target;

        setFilters({
            ...filters,
            [field]: value,
        });

        switch (field) {
            case "name":
                onNameFilter(value);
                break;
            case "description":
                onDescriptionFilter(value);
                break;
            case "weapon":
                onWeaponFilter(value);
                break;
            case "price":
                onPriceFilter(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="row my-5">
            <div className="col">
                <h4 className="border-bottom text-white">Filters</h4>
            </div>
            <div className="col-sm-12 my-2">
                <label className="text-white" htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={filters.name}
                    onChange={handleInput("name")}
                />
            </div>

            <div className="col-sm-12 my-2">
                <label className="text-white" htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={filters.description}
                    onChange={handleInput("description")}
                />
            </div>

            <div className="col-sm-12 my-2">
                <label className="text-white" htmlFor="weapon">Weapon Type</label>
                <select
                    className="form-control"
                    id="weapon"
                    onChange={handleInput("weapon")}
                >
                    <option value="">Select</option>
                    {weapons.map((weapon) => (
                        <option value={weapon} key={weapon}>
                            {weapon}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-sm-12 my-2">
                <label className="text-white" htmlFor="price">Price</label>
                <select
                    className="form-control"
                    id="price"
                    onChange={handleInput("price")}
                >
                    <option value="">Select</option>
                    {prices.map((price) => (
                        <option value={price} key={price}>
                            {price}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SearchBar;