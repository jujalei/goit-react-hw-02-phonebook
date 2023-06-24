import {
  SubTitle,
  ContactsList,
  ListItem,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <div>
          <SubTitle>Contacts</SubTitle>
          <ContactsList>
            {contacts.map(contact => {
              return (
                <ListItem key={contact.id}>
                  <span>
                    {contact.name}: {contact.number}
                  </span>
                  <DeleteBtn
                    type="button"
                    onClick={() => {
                      onDelete(contact.id);
                    }}
                  >
                    Delete
                  </DeleteBtn>
                </ListItem>
              );
            })}
          </ContactsList>
        </div>
      )}
    </div>
  );
};
