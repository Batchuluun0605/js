import express, { request, response } from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js";

const app = express();
const PORT = 8000;
const MONGODB_URL =
  "mongodb+srv://batchuluun:@cluster0.6crpbvz.mongodb.net/?retryWrites=true&w=majority";
app.use(bp.json());

// const users = [
//     {
//       id: 1,
//       name: "orgil",
//     },
//     {
//       id: 2,
//       name: "naki",
//     },
//     {
//       id: 3,
//       name: "munherdene",
//     },
//   ];
app.get("/", async (request, response) => {
  const res = await Url.find();
  response.send({ success: true, res }).end();
});

// app.get('/:id', (request, response) => {
//     const id = request.params.id
//     const filterData = users.filter((user) => user.id === parseInt(id) )
//     response.send({success:true, users: filterData}).end
//  })

app.put("/:id", (request, response) => {
  const id = request.params.id;
  users.map((user) => {
    if (user.id === parseInt(id)) {
      console.log(id);
      user.name = request.body.name;
    }
  });
  response.send({ success: true, users: users });
});
app.post("/", async (request, response) => {
  const newUrl = await Url.create(request.body);
  response.send({ success: true, urls: newUrl }).end();
});

// app.delete('/:id', (request, response) => {
//     const id = request.params.id;
//     const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
//     if (deletedUserId !== -1) {
//     users.splice(deletedUserId, 1);
//     }
//     response.send({ success: true, users: users }).end();
//    });
app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("connect");
  } catch (error) {
    console.log("error");
  }
  console.log("server running");
});
