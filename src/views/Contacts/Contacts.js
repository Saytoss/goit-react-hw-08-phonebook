import React from "react";
import Section from "../../common/Section/Section";
import ContactForm from "../../components/ContactForm/ContactFormContainer";
import Filter from "../../components/Filter/FilterContainer";
import ContactList from "../../components/ContactList/ContactListContainer";
import withAuth from "../../components/hoc/withAuth";

function Contacts() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}

export default withAuth(Contacts);
