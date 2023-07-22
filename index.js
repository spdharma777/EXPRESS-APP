const express = require("express");

//const { users } = require("./data");  copy  To related routes.js

const app = express();

const userRoutes = require("./routes/users.routes");

app.use(express.json()); //parsing/converting json data

//custom middleware
app.use(userRoutes);

//app.use attach middlewares

// call http://localhost:4000/
// app.get("/", (req, res) => {
//   res.send({
//     message: "hello world!!!!!!!!!!! nanba",
//   });
// });

// app.get('/users/:userId',(req,res)=>{
//   console.log('Req.params:',req.params);
//   res.send()
// })

// app.get("/users", (req, res) => {
//   res.send({
//     users: users, //users:users both names are same so only users need
//   });
// });

// app.get("/users/:userId", (req, res) => {
//   const userId = parseInt(req.params.userId);
//   const userFound = users.find((user) => user.id === userId);
//   res.send({
//     message: "user have been retrieved.",
//     user: userFound,
//   });
// });

// app.post("/users", (req, res) => {
//   const newUser = req.body;
//   const latestUserList = [...users, newUser];
//   res.send({
//     message: "user has been retrieved.",
//     users: latestUserList,
//   });
// });

// app.put("/users/:userId", (req, res) => {
//   const userId = parseInt(req.params.userId);
//   const userFound = users.find((user) => user.id === userId);
//   const updateUser = { ...userFound, ...req.body };
//   res.send({
//     message: "user has been updated succesfully.",
//     user: updateUser,
//   });
// });

// app.delete("/users/:userId", (req, res) => {
//   const userId = parseInt(req.params.userId);
//   const updatedUserList = users.filter((user) => user.id !== userId);

//   res.send({
//     message: "user has been deleted succesfully.",
//     users: updatedUserList,
//   });
// });
//post call http:localhost:4000/greetings/
// app.post("/greetings", (req, res) => {
//   res.send({ message: `Happy birthday ${req.body.name}!!!!!` });
// });

// connect s     erver on port
app.listen(4000, () => {
  console.log("App is running on port 4000");
});
