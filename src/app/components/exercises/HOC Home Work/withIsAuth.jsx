import React, { useState } from "react";
import PropTypes from "prop-types";

const withIsAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const handleLogin = () => {
        localStorage.setItem("user", JSON.stringify({ name: "Alex" }));
        setIsAuth(true);
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <Component
            isAuth={isAuth}
            user={user}
            onLogin={handleLogin}
            onLogout={handleLogout}
            {...props}
        />
    );
};

withIsAuth.propTypes = {
    props: PropTypes.object,
    onLogin: PropTypes.func,
    isAuth: PropTypes.bool,
    onLogout: PropTypes.func
};

export default withIsAuth;
