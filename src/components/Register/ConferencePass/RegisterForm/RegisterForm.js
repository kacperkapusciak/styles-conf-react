import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";
import styles from "components/Register/ConferencePass/RegisterForm/RegisterForm.module.css";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    quantity: 1,
    comments: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const registerData = this.state;
    this.props.onFormSubmit(registerData);
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <fieldset className={styles.registerGroup}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Number of Passes
            <select name="quantity" required onChange={this.handleInputChange}>
              {[1, 2, 3, 4, 5].map(val => (
                <option key={`form-options-${val}`} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </label>

          <label>
            Comments
            <textarea name="comments" onChange={this.handleInputChange} />
          </label>
        </fieldset>

        <input
          className={styles.btn}
          type="submit"
          name="submit"
          value="Purchase"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (registerData) => dispatch(actions.purchasePass(registerData))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
