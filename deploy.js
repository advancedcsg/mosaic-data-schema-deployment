const fetch = require('node-fetch')
const deploy = async (schema) => {
  const url = 'https://data.oneadvanced.io/control/v1/apps/deploy' // 'https://data.svc.oneadvanced.com/control/v1/apps/deploy' // MD deployment url
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(schema),
    headers: { 'Content-Type': 'application/json', 'x-api-key': '8bd8fd80-6756-5ee3-a261-c0792e3f47d3' }
  })
  const json = await res.json()
  return {
    statusCode: res.ok ? 200 : res.statusCode,
    response: json
  }
}

module.exports = deploy
