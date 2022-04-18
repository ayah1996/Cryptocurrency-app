import React from "react";
import { Input } from "antd";
const SearchInput = ({ placeholder = "", onChange }) => {
  return (
    <>
      <div className="search-input">
        <Input placeholder={placeholder} onChange={onChange} bordered={false} />
      </div>
    </>
  );
};

export default SearchInput;
