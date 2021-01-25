import React from "react";

const QueenItem = ({ item }) => {
  //console.log(item);
  //console.log(item.seasons[0].seasonNumber);
  //console.log(item.seasons[0].place);

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
              <strong>Season: </strong> {item.seasons[0].seasonNumber}
            </li>
            <li>
              <strong>Season Place: </strong> {item.seasons[0].place}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default QueenItem;
