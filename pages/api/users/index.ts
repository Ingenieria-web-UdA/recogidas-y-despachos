import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersEndpoint = async (req: NextApiRequest, res: NextApiResponse) =>{
    if(req.method==="GET"){
        const users = await prisma.user.findMany();
        res.status(200).json({users});
    }else if(req.method==="POST"){
        const {body} = req;     //del req me estoy sacando la propiedad body
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        });
        res.status(200).json({newUser});
    }else{
        res.status(405).json({response: 'method not allowed'});
    }
};

export default usersEndpoint;