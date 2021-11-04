import React from "react";
import { Link, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/bgyoons">
            bgyoons Profile
          </NavLink>
          {/* <Link to="/profiles/bgyoons">bgyoons Profile</Link> */}
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/ran">
            ran Profile
          </NavLink>
          {/* <Link to="/profiles/ran">ran Profile</Link> */}
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
