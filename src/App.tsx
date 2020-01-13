import React from "react";
import "./App.css";
import Main from "./compoenents/Main";
import { IEvents } from "./vm";
import moment from "moment";

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  onDatesChange = (start: Date, end: Date) => {
    console.log("start", start, "endDate", end);
  };
  render() {
    let events: Array<IEvents> = [
      {
        startDate: moment("02-01-2020", "DD-MM-YYYY").toDate(),
        endDate: moment("02-01-2020", "DD-MM-YYYY").toDate(),
        name: "my first event",
        resource: "1234"
      },
      {
        startDate: moment()
          .subtract(7, "days")
          .toDate(),
        endDate: moment().toDate(),
        name: "my first event",
        resource: "1234"
      },
      {
        startDate: moment("17-01-2020", "DD-MM-YYYY").toDate(),
        endDate: moment("17-01-2020", "DD-MM-YYYY")
          .add(1, "day")
          .toDate(),
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
      <React.Fragment>
        <Main
          className="scheduler-main"
          events={events}
          date={new Date()}
          resources={resources}
          resourceId="_id"
          renderResourceItem={(item: any) => (
            <React.Fragment>{item.name}</React.Fragment>
          )}
          renderEventItem={(event: IEvents) => (
            <React.Fragment>{event.name}</React.Fragment>
          )}
          onDatesChange={this.onDatesChange}
        />
      </React.Fragment>
    );
  }
}
