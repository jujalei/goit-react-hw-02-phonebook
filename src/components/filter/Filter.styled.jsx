import styled from '@emotion/styled';

const FilterWrap = styled.form`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 30px;
`;

const FilterInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  background-color: #f7ecd7;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px dashed;
  padding-left: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const FilterClearBtn = styled.button`
  position: absolute;
  right: 3px;
  top: 26px;

  cursor: pointer;
  font-size: 16px;

  border: none;
  border-radius: 20px;
  background-color: #fcab79;
  height: 25px;
  width: 25px;
  transition: border 250ms linear;

  &:hover {
    border: 1px dashed;
  }
`;

export { FilterWrap, FilterInput, InputWrapper, FilterClearBtn };
