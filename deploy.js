const fetch = require('node-fetch')
const deploy = async (schema, apiKey) => {
  const url = 'https://data.oneadvanced.io/control/v1/deployment'
  apiKey = apiKey === undefined ? require('minimist')(process.argv.slice(2)).apikey : apiKey
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(schema),
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey }
  })
  const json = await res.json()
  return {
    statusCode: res.ok ? 200 : res.status,
    response: json
  }
}

module.exports = deploy
