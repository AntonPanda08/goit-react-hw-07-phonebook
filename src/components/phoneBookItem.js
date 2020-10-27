import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./phoneBookItem.module.css";
import contactOperations from "../redux/contacts/contactOperations";

const PhoneBookItem = ({ name, number, id, onRemoveContact }) => (
  <li className={styles.phoneBookItem}>
    <span>
      {name}: {number}
    </span>
    <Button variant="danger" type="button" onClick={onRemoveContact} size="sm">
      Delete
    </Button>
  </li>
);
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactOperations.removeContact(ownProps.id)),
});
export default connect(null, mapDispatchToProps)(PhoneBookItem);
