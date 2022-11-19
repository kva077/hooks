import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
  const isAuth = localStorage.getItem("token");
  const onLogin = () => {
    localStorage.setItem("token", "auth");
  };
  const onLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <CardWrapper>
        <SimpleComponent
          isAuth={isAuth}
          onLogOut={onLogOut}
          onLogin={onLogin}
        />
      </CardWrapper>
    </>
  );
};

export default withFunctions;
