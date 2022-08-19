const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlights = date =>
  fetch(`${baseUrl}/${date}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display flights"));
