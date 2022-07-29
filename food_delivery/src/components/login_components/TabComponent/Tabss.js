import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
const Tabss = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div
      style={{
        marginTop: "15px",
        // backgroundColor: "#b66c13",
        color: "#b66c13",
      }}
    >
      {/* <h2>How to Create Tabs in ReactJS?</h2> */}
      <Paper square>
        <Tabs
          value={value}
          // backgroundColor="yellow"
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Customer" />
          <Tab label="Restaurant Manager" />
          {/* <Tab label="Disabled TAB!" disabled />
          <Tab label="Active Tab Three" /> */}
        </Tabs>
        {/* <h3>TAB NO: {value} clicked!</h3> */}
      </Paper>
    </div>
  );
};
  
export default Tabss;