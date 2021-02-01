const { info, setFailed, getInput } = require('@actions/core')
const deploy = require('./deploy')
const { existsSync, readFileSync } = require('fs')
async function run () {
  try {
    const fileLocation = getInput('file')
    const apiKey = getInput('api-key')
    info(`Search for file ${fileLocation}`)
    info('Starting Execution : ', (new Date()).toTimeString())
    if (existsSync(fileLocation)) {
      const jsonStr = readFileSync(fileLocation)
      const jsonObj = JSON.parse(jsonStr)
      info(`File Parsing Success : ${fileLocation}`)
      info(`Initiating deployment for : ${fileLocation}`)
      const { statusCode, response } = await deploy(jsonObj, apiKey, info)
      if (statusCode !== 200) {
        setFailed(`Execution failed with error : ${response}`)
      }
      info('Deployment Done for app successfully')
      info(JSON.stringify(response))
    }
    info('Ending Execution : ', (new Date()).toTimeString())
  } catch (error) {
    setFailed(JSON.stringify(error.message))
  }
}

run()
