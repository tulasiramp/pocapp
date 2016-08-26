
const config = {
  port: 3000
}

const test = () => {
  return 'test'
}

const objectTest = (response) => {
  response({
    test: 'test'
  })
}

export { config, test, objectTest }
