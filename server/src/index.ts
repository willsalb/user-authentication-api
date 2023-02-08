import  express, {Request, Response, NextFunction}  from "express";
import usersRoute from "./routes/users.route";

const app = express();
const port = 3000;

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Helo world!!")
});

app.listen(port, () => {
    console.log(`Runing in port ${port}`)
});