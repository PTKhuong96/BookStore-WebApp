import React, { useState } from "react";

const FilterForm = ({ handleSubmit, history }) => {
  const [filterEntry, setFilterEntry] = useState("");
  // update filter text state
  const updateFilterInput = e => {
    setFilterEntry(e.target.value);
  };
  return (
    <form
      className="filter-form"
      onSubmit={e => handleSubmit(e, history, filterEntry)}
    >
      <input
        className="filter-button"
        type="text"
        name="filter"
        placeholder="Filter book by name"
        onChange={updateFilterInput}
        value={filterEntry}
      />
    </form>
  );
};

export default FilterForm;
