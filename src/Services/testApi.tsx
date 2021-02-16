export const getBrokenCustomers = () => {
  return fetch(`https://swapi.dev/api/ppl`) //change from ppl to people
    .then(response => response.json())
    .then(jsonResponse => {
      return jsonResponse;
    })
    .catch((error) => {
      return error;
    });
}

export const getCustomers = () => {
  return fetch(`https://swapi.dev/api/people`) //change from ppl to people
    .then(response => response.json())
    .then(jsonResponse => {
      return jsonResponse;
    })
    .catch((error) => {
      return error;
    });
}

// export const getCustomers = () => {
//   return fetch(`https://swapi.dev/api/people/1/`) //change from ppl to people
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         return response;
//       }
//     })
// }

