import React from "react";

import PropTypes from "prop-types";
// import Subtitle from "../../common/typografy/subtitle";

const HomeWorkComponent = ({ user, onLogout }) => {
    console.log(onLogout);

    return (
        <div>
            Hello {user.name}.{" "}
            <button className="btn btn-danger" onClick={onLogout}>
                Logout
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
