import { Input } from "antd";
import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  const { Search } = Input;
  return (
    <div className="search-bar">
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <div>What else do i put here</div>
    </div>
  );
};

export default SearchBar;
