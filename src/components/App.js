import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactList from './ContactList';
import Form from './Form';
import Filter from './Filter';
import Section from './Section';
import initialContactList from './initialContactList.json';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContactList,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  function formSubmitHandler(data) {
    const { name, number } = data;

    const arrContactsName = contacts.map(item => {
      return item.name.toLowerCase();
    });

    if (arrContactsName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts([...contacts, contact]);
    }
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function onFilterChange({ target }) {
    const { value } = target;
    setFilter(value);
  }

  function getFilterName() {
    const normalizedName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );
  }

  const visibleContactName = getFilterName();

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={onFilterChange} />

        <ContactList contacts={visibleContactName} onDelete={deleteContact} />
      </Section>
    </>
  );
}

export default App;
