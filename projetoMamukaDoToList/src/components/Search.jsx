import React from "react";

function Search ({ search, setSearch }) {
  <div className="search">
    <h2>Pesquisar:</h2>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..."
    />
  </div>
};

export default Search;
