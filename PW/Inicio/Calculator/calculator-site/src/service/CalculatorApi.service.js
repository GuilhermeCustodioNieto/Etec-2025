// CalculatorApi.service.js
async function getApi(route) {
  const response = await fetch(`http://localhost:3000/calculator/${route}`);
  const data = await response.json();
  return data.result;
}

async function postApi(route, body) {
  const response = await fetch(`http://localhost:3000/calculator/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data.result;
}

module.exports = {
  getApi,
  postApi,
};
