import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get('/', (req: Request, res: Response, next:NextFunction) => {
    const users = [{ UserName: 'Will' }];
    res.status(200).send({users});
});

export default usersRoute;