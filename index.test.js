const deploy = require('./deploy')
const { readFileSync } = require('fs')

test('wait 500 ms', async () => {
  const jsonStr = readFileSync('./mosaic-data/schema.json')
  const jsonObj = JSON.parse(jsonStr)
  const { statusCode } = await deploy(jsonObj)
  expect(statusCode).toBe(200)
})
