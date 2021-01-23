import React from "react";

const QueenItem = ({ item }) => {
  //console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image_url} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Quote: </strong> {item.quote}
            </li>
            <li>
              <strong>Season: </strong>
            </li>
            <li>
              <strong>Season Place: </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default QueenItem;
