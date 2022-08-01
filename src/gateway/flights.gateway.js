const baseUrl = "https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/flights";

export const fetchFlights = () =>
  fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => alert("Internal Server Error. Can't display events"));
