import React from "react";
import '../App.css'

const DisplayInventory = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card my-2  weapon-div">
                <img src={item?.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    <h5 className="card-title">{item?.name_weapon}<h6 className="card-subtitle mb-2">{item?.capacity_weapon}</h6></h5>
                    <h6 className="card-text card-header">Description:</h6><br />
                        <p>{item?.description}</p>
                    <h6 className="card-header">Type:</h6>
                    <p className="card-text">{item?.weapon}</p>
                    <h6 className="card-header">Price: </h6>
                    <p className="card-text">   {item?.price} </p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DisplayInventory;