import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render button");
  });
  return (
    <button className="btn btn-primary" onClick={onLogOut}>
      LogOut
    </button>
  );
};

LogOutButton.propTypes = {
  onLogOut: PropTypes.func,
};
const MemoizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setState(!state)}>
        initiate rerender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;
