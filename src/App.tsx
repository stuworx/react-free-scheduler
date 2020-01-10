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
      resource: "1234"
    }
  ];
  let resources = [
    {
      _id: "1234",
      name: "test"
    }
  ];
  return (
    <Main
      events={events}
      date={new Date()}
      resources={resources}
      resourceIdentifierInEvent="_id"
      renderResourceItem={(item: any) => (
        <React.Fragment>{JSON.stringify(item)}</React.Fragment>
      )}
      renderEventItem={(event: IEvents) => (
        <React.Fragment>{JSON.stringify(event)}</React.Fragment>
      )}
    />
  );
};

export default App;
