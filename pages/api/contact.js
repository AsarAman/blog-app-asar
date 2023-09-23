import { MongoClient } from "mongodb";

async function handler(req, res) {
  const { name, email, msg } = req.body;
  if (!name || !email || !msg) {
    res.status(400).json({ message: "Please provide the required values!" });
    return;
  }
  const data = {
    name: name,
    emai: email,
    msg: msg,
  };
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db("personal-blog");
  await db.collection("contact").insertOne({ data });
  client.close();
  res.status(200).json({ message: "Message succefully sent!" });
}

export default handler;
