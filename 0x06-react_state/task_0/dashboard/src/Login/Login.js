import React from "react";
import { StyleSheet, css } from 'aphrodite';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            enableSubmit: false,
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleLoginSubmit(event) {
        event.preventDefault();
        console.log('x');
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value }, () => {
            this.state.email !== "" && this.state.password !== "" && this.setState({ enableSubmit: true });});
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value }, () => {
          this.state.email !== "" && this.state.password !== "" && this.setState({ enableSubmit: true });
        });
      }
    render() {
        return (
            <div className="App-login">
              <div className={css(styles.loginStyle)}>
                <p className={css(styles.loginPStyle)}>
                  Login to access the full dashboard
                </p>
                <form
                  className={css(styles.loginFormStyle)}
                  onSubmit={this.handleLoginSubmit}
                >
                  <label className={css(styles.smallLabel)}>
                    Email:
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </label>
                  <label className={css(styles.smallLabel)}>
                    Password:
                    <input
                      type="text"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                    />
                  </label>
                  <input type="submit" value="Submit" disabled={!this.state.enableSubmit}/>
                </form>
              </div>
            </div>
          );
    }
};

const styles = StyleSheet.create({
    loginStyle: {
        minHeight: 150,
        margin: '40px auto 150px auto',
        '@media (max-width: 900px)': {
            minHeight: 0,
            margin: 0,
        }
    },

    loginPStyle: {
        margin: '3rem 0rem 0rem 2rem',
        '@media (max-width: 900px)': {
            marginTop: 0,
        }
    },

    loginFormStyle: {
        margin: '1rem 0rem 2rem 2rem',
    },

    smallLabel: {
        '@media (max-width: 900px)': {
            display: 'block',
        }
    }
})

