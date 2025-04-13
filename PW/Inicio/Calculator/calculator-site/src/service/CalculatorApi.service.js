function getApi(route) {
  let dataReturn = null;
  fetch(`http://localhost:3000/calculator/${route}`)
    .then((response) => response.json())
    .then((data) => (dataReturn = data.result));

  return dataReturn;
}

function postApi(route, body) {
  let dataReturn = null;
  fetch(`http://localhost:3000/calculator/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => (dataReturn = data.result));

  return dataReturn;
}

module.exports = {
  getApi,
  postApi,
};
