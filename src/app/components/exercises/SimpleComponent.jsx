import React, { useState } from "react";
import CardWrapper from "../common/Card";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import HomeWorkComponent from "./HOC Home Work/homeworkComponent";
import withIsAuth from "./HOC Home Work/withIsAuth";
import withPropsStyles from "./HOC Home Work/withPropsStyles";

function SimpleComponent() {
    const [isAuth, setIsAuth] = useState(false);
    const ComponentWithAuth = withIsAuth(HomeWorkComponent);
    const user = JSON.parse(localStorage.getItem("user"));
    const ComposedComponent = withPropsStyles(ComponentWithAuth);
    const handleLogin = () => {
        setIsAuth(true);
        return localStorage.setItem("user", JSON.stringify({ name: "Alex" }));
    };
    const handleLogout = () => {
        setIsAuth(false);
        return localStorage.removeItem("user");
    };
    return (
        <CardWrapper>
            <SmallTitle>Home work</SmallTitle>
            <Divider />
            <ComposedComponent
                isAuth={isAuth}
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
            />
        </CardWrapper>
    );
}

export default SimpleComponent;
