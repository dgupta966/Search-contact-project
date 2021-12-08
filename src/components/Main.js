import React from "react";
import SearchBar from "./SearchBar";
import Data from "./Data";
import SideBar from "./Sidebar";
const Main = () => {
  return (
    <div>
      {/* <div className="mobile">
        <SideBar />
      </div> */}
      <h3 style={{ marginTop: "10px" }}>All Contacts (100)</h3>
      {/* <SearchBar /> */}
      <Data />
    </div>
  );
};

export default Main;
