import moment from "moment";

export const departures = [
  {
    status: "Do not Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "W66260",
    destination: "Lviv",
    terminal: "A",
    company: "AVP",
  },
  {
    status: "Do not Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "LO755",
    destination: "Kipr",
    terminal: "D",
    company: "AVP",
  },
  {
    status: "Do not Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "M9201",
    destination: "Kyiv",
    terminal: "A",
    company: "AVP",
  },
];
