import React from "react";

import PropTypes from "prop-types";

const HomeWorkComponent = ({ user, onLogout, onLogin, isAuth }) => {
    return isAuth ? (
        <div>
            Hello {user.name}.{" "}
            <button className="btn btn-danger" onClick={onLogout}>
                Logout
            </button>
        </div>
    ) : (
        <div>
            Please{" "}
            <button className="btn btn-success" onClick={onLogin}>
                Login
            </button>
        </div>
    );
};
HomeWorkComponent.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func
};
export default HomeWorkComponent;
