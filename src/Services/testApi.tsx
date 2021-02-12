export const getPeople = () => {
    return fetch(`https://swapi.dev/api/people/1/`)
      .then(response => response.json())
      .then(jsonResponse => {
          return jsonResponse;
      })
      .catch((error) => {
        return error;
      });
}