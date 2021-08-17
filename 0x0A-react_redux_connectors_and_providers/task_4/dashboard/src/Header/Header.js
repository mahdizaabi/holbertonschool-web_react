import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import PropTypes from "prop-types";

export default class Header extends Component {
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <header className={css(styles.headerStyle)}>
          <img src={logo} className={css(styles.logoStyle)} alt="logo" />
          <h1 className={css(styles.titleStyle)}>School dashboard</h1>
        </header>
        {user && user.email && user.password && (
          <section id="logoutSection">
            <h1>
              Welcome {user.email}
              <a className={css(styles.italicText)} onClick={logout}>
                (logout)
              </a>
            </h1>
          </section>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    display: "flex",
    alignItems: "center",
    height: "25vh",
    minHeight: 150,
  },

  logoStyle: {
    height: "100%",
  },

  titleStyle: {
    color: "#E0344B",
    fontSize: "2.5rem",
    marginLeft: "1rem",
  },

  italicText: {
    fontStyle: "italic",
  },
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};
Header.defaultProps = {
  user: {},
  logout: () => {},
};

const mapStateToProps = (state) => ({ user: state.ui.toJS().user });
const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });
const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export { ConnectedHeader };
