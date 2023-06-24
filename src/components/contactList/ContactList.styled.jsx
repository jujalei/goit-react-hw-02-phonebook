import styled from '@emotion/styled';

const SubTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 30px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.button`
  padding: 1px 5px;
  border: none;
  border-radius: 20px;
  background-color: #fcab79;
  height: 30px;
  transition: border 250ms linear;

  &:hover {
    border: 1px dashed;
  }
`;

export { SubTitle, ContactsList, ListItem, DeleteBtn };
