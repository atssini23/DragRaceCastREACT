import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Queens"
          value={text}
          onChange={(q) => onChange(q.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;
