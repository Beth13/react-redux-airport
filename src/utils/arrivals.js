import moment from "moment";

export const arrivals = [
  {
    status: "Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "WA66261",
    destination: "Kipr",
    terminal: "A",
    company: "AVP",
  },
  {
    status: "Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "LO75524",
    destination: "Lviv",
    terminal: "D",
    company: "LOT",
  },
  {
    status: "Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "MS92013",
    destination: "Kyiv",
    terminal: "A",
    company: "SPA",
  },
  {
    status: "Landed",
    time: moment(new Date()).format("HH:MM"),
    flightId: "KA92013",
    destination: "Kyiv",
    terminal: "B",
    company: "LOT",
  },
];
