try {
  process.loadEnvFile() // enables this server to use env variables
} catch (error) {
  console.log(".env file not found. Using default values")
}

// backend development still uses ES5
// import jsonServer from "json-server" // ES6
const jsonServer = require("json-server") // ES5
const server = jsonServer.create()

// add the default configurations of the system
const middlewares = jsonServer.defaults()
server.use(middlewares)

// add the routes (defaults)
const router = jsonServer.router("db.json")
server.use(router)

const PORT = process.env.PORT || 5005
server.listen(PORT, () => {
  console.log(`JSON server running locally on port: http://localhost:${PORT}`)
})
