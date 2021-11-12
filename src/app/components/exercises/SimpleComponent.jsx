import React from "react";
import CardWrapper from "../common/Card";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import HomeWorkComponent from "./HOC Home Work/homeworkComponent";
import withIsAuth from "./HOC Home Work/withIsAuth";

function SimpleComponent() {
    const ComponentWithAuth = withIsAuth(HomeWorkComponent);

    return (
        <CardWrapper>
            <SmallTitle>Home work</SmallTitle>
            <Divider />
            <ComponentWithAuth />
        </CardWrapper>
    );
}

export default SimpleComponent;
