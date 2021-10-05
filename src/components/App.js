import React, { Component } from "react";
import { generate } from "shortid";
import styles from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";

export default class App extends Component {
  state = {
    contacts: [
      {
        id: generate(),
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: generate(),
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: generate(),
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: generate(),
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };

  addContact = ({id, name, number }) => {
    const { contacts } = this.state;
    console.log(name, number);
    const contact = {
      id: generate(),
      name,
      number,
    };
    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`) : contacts.find((contact) => contact.number === number)
      ? alert(`${number} is already in contacts`) : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId ),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
  };


  render() {
    const { filter } = this.state;
    const contactsShow = this.filterContacts();
    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={"Contacts"}>
          <div className={styles.container}>
            <ContactsFilter value={filter} onChange={this.changeFilter} />
            <Contacts
              contacts={contactsShow}
              onDelete={this.deleteContact}
            />
          </div>
        </Section>
      </>
    );
  }
}
