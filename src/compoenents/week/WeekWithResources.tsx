import * as React from "react";
import { IEvents } from "../../vm";
import moment from "moment";
import styles from "./week.module.css";
export interface WeekWithResourceProps {
  days: Array<Date>;
  events: Array<IEvents>;
  resources?: Array<string>;
}

export interface WeekWithResourceState {
  days: Array<Date>;
}

class WeekWithResource extends React.Component<
  WeekWithResourceProps,
  WeekWithResourceState
> {
  constructor(props: WeekWithResourceProps) {
    super(props);
    this.state = {
      days: this.props.days
    };
  }

  calculateDates = (date: Date) => {
    var days = [];
    var startOfWeek = moment(date).startOf("week");
    var endOfWeek = moment(date).endOf("week");
    var day = startOfWeek;
    while (day <= endOfWeek) {
      day = day.clone().add(1, "day");
      days.push(day.toDate());
    }
    this.setState({ days });
  };
  render() {
    let eventsData = this.props.events.reduce((acc: any, event) => {
      let eventData = { ...event };
      let eventDate = moment(event.startDate).format("YYYY-MM-DD");
      if (!acc[eventDate]) {
        acc[eventDate] = [];
      }
      eventData.noOfDays =
        moment(eventData.endDate).diff(moment(eventData.startDate), "days") + 1;
      acc[eventDate].push(eventData);
      return acc;
    }, {});
    console.log(eventsData);
    let days = this.state.days;
    return (
      <React.Fragment>
        <section className={styles.padding16}>
          <table className={styles.freeSchedulerTable}>
            <thead>
              <tr>
                <td colSpan={8}>
                  <div className={styles.dateContainer}>
                    <div
                      onClick={() =>
                        this.calculateDates(
                          moment(this.state.days[0])
                            .subtract(2, "day")
                            .toDate()
                        )
                      }
                    >
                      {`<Back`} &nbsp;
                    </div>
                    {moment(days[0]).format("MMM DD YYYY")} -{" "}
                    {moment(days[days.length - 1]).format("MMM DD YYYY")}
                    <div
                      onClick={() =>
                        this.calculateDates(
                          moment(this.state.days[this.state.days.length - 1])
                            .add(2, "day")
                            .toDate()
                        )
                      }
                    >
                      &nbsp;{`Next>`}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Resource</td>
                {this.state.days.map((day, index) => (
                  <td key={index}>
                    {moment(day).format("ddd")}
                    <br />
                    {moment(day).format("DD")}
                  </td>
                ))}
              </tr>
            </thead>
          </table>
        </section>
      </React.Fragment>
    );
  }
}

export default WeekWithResource;
