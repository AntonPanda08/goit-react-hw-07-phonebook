import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import styles from "./contactForm.module.css";
import contactOperations from "../redux/contacts/contactOperations";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactSelectors from "../redux/contacts/contactSelectors";
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    showToast: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  NotificationError = () => {
    toast.error("Contact already in list", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.setState({
      showToast: true,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.NotificationError();
      return;
    }

    addContact(name, number);
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="What's your name?"
            required
          />
        </label>

        <label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="What's your phone?"
            required
          />
        </label>

        <Button
          variant="info"
          type="submit"
          value="submit"
          className={styles.addBtn}
        >
          {" "}
          Add contact
        </Button>
        <CSSTransition in={this.state.showToast} timeout={250}>
          <ToastContainer
            transition={Slide}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            duration={250}
          />
        </CSSTransition>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addContact: contactOperations.createContact,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContactsArray(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
