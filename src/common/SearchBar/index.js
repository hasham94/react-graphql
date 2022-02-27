import { Wrapper } from "./style";

const SearchBar = ({ searchInput, setSearchInput, gender, setGender }) => {
  return (
    <Wrapper>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="search-field"
        type="text"
        placeholder="Search by name..."
      />
      <div>
        <label for="filter">Filter By:</label>

        <select
          name="filter"
          id="filter"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option></option>
          <option value="Male">male</option>
          <option value="Female">female</option>
        </select>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
