import React from "react";
import Navbar from "./components/navbar";

import Doctors from "./components/doctors/Doctors";
import Medicine from "./components/medicine/index.js";

const App = () => {
  return (
    <div>
      <Medicine />
      {/* <Doctors /> */}
    </div>
  );
};

export default App;
