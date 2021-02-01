const fetch = require('node-fetch')
const deploy = async (schema, apiKey, info) => {
  const url = 'https://data.svc.oneadvanced.com/control/v1/deployment'
  apiKey = apiKey === undefined ? require('minimist')(process.argv.slice(2)).apikey : apiKey
  info(`Hitting URL : ${url}`)
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
