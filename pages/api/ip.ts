import { NextApiRequest, NextApiResponse } from "next";

const handler = (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const ip = req.socket.remoteAddress
        res.status(200).json({ip})
    } catch (error) {
        res.status(500).json({error: 'There was an error'})
    }
}

export default handler