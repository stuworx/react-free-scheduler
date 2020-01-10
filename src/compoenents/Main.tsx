import * as React from "react";
import WeekWithResource from "./week/WeekWithResources";
import { IEvents } from "../vm";
import moment from "moment";
export interface MainProps {
  events: Array<IEvents>;
  date: Date;
  resources?: Array<string>;
}

export interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {};
  }
  render() {
    let events = this.props.events;
    var days = [];
    var startOfWeek = moment(this.props.date).startOf("week");
    var endOfWeek = moment(this.props.date).endOf("week");
    var day = startOfWeek;
    while (day <= endOfWeek) {
      day = day.clone().add(1, "d");
      days.push(day.toDate());
    }
    // console.log(days);
    return (
      <React.Fragment>
        <h2>Main</h2>
        <WeekWithResource
          days={days}
          events={events}
          resources={this.props.resources}
        />
      </React.Fragment>
    );
  }
}

export default Main;
