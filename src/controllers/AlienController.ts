import Alien from '../models/alien';
import { HydratedDocument } from 'mongoose';
import {Request,Response} from 'express'
import { IAlien } from '../interfaces/IAlien';
import generateErrorResponse from '../helpers/response.error';
import generateSuccessResponse from '../helpers/response.success';

// export const getMusic = async (req, res) => {
//     try {

//         const music = await Music.find()
//         console.log(music)
//         res.json({
//             result: music
//         })
//     }
//     catch (err) {
//         res.json({
//             status: 500,
//             message: "something went wrong",
//             success: false,
//         });

//     }
// }


class AlienController {
	constructor() {
    }

	async getAll(req: Request, res: Response) {
		try {
			const alien:IAlien[] = await Alien.find({"_id":"dfdfd"});
            const a = generateSuccessResponse(alien)
			res.json(a);
		} catch (error) {
            const response = generateErrorResponse(error)
			res.json(response)
		}
	}

    async add(req: Request, res: Response) {
        const alien : HydratedDocument<IAlien>= new Alien({
            name: req.body.name,
            tech:req.body.tech,
            sub:req.body.sub
        })
        try {
          const a1 = await alien.save()
          res.json(a1)
        } catch (error) {
            res.send('Error'+ error)
        }
	}

     async findById(req:Request,res: Response) {
        try {
            const alien = await Alien.findById(req.params.id)
            res.json(alien)
        } catch (error) {
            res.send('Error'+ error)
        }
    }
}
export default new AlienController();
