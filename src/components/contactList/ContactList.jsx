export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <div>
          <ul>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <span>
                    {contact.name}: {contact.number}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onDelete(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
