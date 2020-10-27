import React from "react";
import PropTypes from "prop-types";
import contactAction from "../redux/contacts/contactAction";
import { connect } from "react-redux";
import contactSelectors from "../redux/contacts/contactSelectors";
const Filter = ({ filter, onChangeFilter }) => (
  <label>
    Find contacts by name
    <br />
    <input
      type="text"
      value={filter}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  filter: contactSelectors.getFilter(state),
});
const mapsDispatchToProps = {
  onChangeFilter: contactAction.changeFilter,
};
export default connect(mapStateToProps, mapsDispatchToProps)(Filter);
