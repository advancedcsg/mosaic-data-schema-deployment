const fetch = require('node-fetch')
const deploy = async (schema, apiKey) => {
  const url = 'https://data.oneadvanced.io/control/v1/apps/deploy' // 'https://data.svc.oneadvanced.com/control/v1/apps/deploy' // MD deployment url
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(schema),
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey }
  })
  const json = await res.json()
  return {
    statusCode: res.ok ? 200 : res.statusCode,
    response: json
  }
}

module.exports = deploy
