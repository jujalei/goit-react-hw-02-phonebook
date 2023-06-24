import { FilterWrap, FilterInput } from './Filter.styled';

export const Filter = ({ searchName, onSearch }) => {
  return (
    <FilterWrap>
      <label>
        Find contacts by name
        <FilterInput
          name="text"
          type="text"
          value={searchName}
          onChange={onSearch}
        />
      </label>
    </FilterWrap>
  );
};
