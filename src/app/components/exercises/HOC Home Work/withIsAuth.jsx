import React from "react";
import PropTypes from "prop-types";

const withIsAuth = (Component) => {
    const wrapped = (props) =>
        props.isAuth ? (
            <Component {...props} />
        ) : (
            <>
                {" "}
                Hello unregistered user. Please
                <button
                    className="btn btn-primary ms-3"
                    onClick={props.onLogin}
                >
                    Login
                </button>
            </>
        );
    wrapped.propTypes = {
        props: PropTypes.object
    };
    return wrapped;
};

withIsAuth.propTypes = {
    props: PropTypes.object,
    onLogin: PropTypes.func,
    isAuth: PropTypes.bool,
    onLogout: PropTypes.func
};

export default withIsAuth;
