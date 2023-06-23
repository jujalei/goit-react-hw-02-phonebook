export const Filter = ({ searchName, onSearch }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          name="text"
          type="text"
          value={searchName}
          onChange={onSearch}
        ></input>
      </label>
    </div>
  );
};
