import moment from "moment";

const flights = [
  {
    status: true,
    time: moment(new Date()).format("HH:MM"),
    flightId: "WA66261",
    destination: "Kipr",
    terminal: "A",
    company: "AVP",
  },
  {
    status: true,
    time: moment(new Date()).format("HH:MM"),
    flightId: "LO75524",
    destination: "Lviv",
    terminal: "D",
    company: "LOT",
  },
  {
    status: true,
    time: moment(new Date()).format("HH:MM"),
    flightId: "MS92013",
    destination: "Kyiv",
    terminal: "A",
    company: "SPA",
  },
  {
    status: true,
    time: moment(new Date()).format("HH:MM"),
    flightId: "KA92013",
    destination: "Kyiv",
    terminal: "B",
    company: "LOT",
  },
  {
    status: false,
    time: moment(new Date()).format("HH:MM"),
    flightId: "W66260",
    destination: "Lviv",
    terminal: "A",
    company: "AVP",
  },
  {
    status: false,
    time: moment(new Date()).format("HH:MM"),
    flightId: "LO755",
    destination: "Kipr",
    terminal: "D",
    company: "AVP",
  },
  {
    status: false,
    time: moment(new Date()).format("HH:MM"),
    flightId: "M9201",
    destination: "Kyiv",
    terminal: "A",
    company: "AVP",
  },
];

export const arrivals = flights.filter((flight) => flight.status === true);
export const departures = flights.filter((flight) => flight.status === false);
