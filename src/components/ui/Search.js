import React, { useState } from "react";

const Search = () => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Seach Queens"
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;
