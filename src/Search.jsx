import React from "react";

function Search() {
  const [search, setSearch] = React.useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <SearchComponent value={search} onChange={handleChange}>
        Search:
      </SearchComponent>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

function SearchComponent({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
