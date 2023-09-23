import { MongoClient } from "mongodb";





async function handler(req, res) {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.status(400).json({ message: "Please provide your email!" });
  }

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db("personal-blog");
  const existedUser = await db
    .collection("emails")
    .findOne({ userEmail: email });
  if (existedUser) {
    res.status(400).json({
      message: "User existed with tis email.Please provide different one",
    });
    return;
  }

  await db.collection("emails").insertOne({ userEmail: email });

  client.close();

  res.status(201).json({ message: "Signed up Successfully!" });
}

export default handler;
