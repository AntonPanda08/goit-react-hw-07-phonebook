import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "./components/header";
import { connect } from "react-redux";
import PhoneBookList from "./components/phoneBookList";
import Filter from "./components/filter";
import ContactForm from "./components/contactForm";
import "react-toastify/dist/ReactToastify.css";
import styles from "./components/phonebookList.module.css";
import contactOperations from "./redux/contacts/contactOperations";
import contactSelectors from "./redux/contacts/contactSelectors";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.contacts !== this.state.contacts) {
    //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    // }
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.container}>
        <Header header="Phonebook" />
        <ContactForm />
        <br />
        <CSSTransition
          in={contacts > 1}
          timeout={250}
          unmountOnExit
          classNames={styles}
        >
          <Filter />
        </CSSTransition>
        <br />
        <PhoneBookList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContactsLength(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
