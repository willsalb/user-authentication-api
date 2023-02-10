import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();
const port = 3000;

//Adicionando um midleware que interpreta o content-type e quando for JSON lidar com JSON
app.use(express.json());

app.use(usersRoute);
app.use(statusRoute);

app.listen(port, () => {
  console.log(`Runing in port ${port}`);
});
