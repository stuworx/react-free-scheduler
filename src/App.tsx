import React from "react";
import "./App.css";
import Main from "./compoenents/Main";
import { IEvents } from "./vm";
import moment from "moment";

const App: React.FC = () => {
  let events: Array<IEvents> = [
    {
      startDate: moment()
        .subtract(2, "days")
        .toDate(),
      endDate: moment().toDate(),
      name: "my first event",
      resource: "res1"
    }
  ];
  return <Main events={events} date={new Date()} />;
};

export default App;
