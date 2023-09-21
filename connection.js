import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://ssshivyasaxena20:Security%23123@cluster0.d9gey6n.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("dashboard");

export default db;