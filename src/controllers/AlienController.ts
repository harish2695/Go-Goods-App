import Alien from '../models/alien';
import { HydratedDocument } from 'mongoose';
import {Request,Response} from 'express'
import { IAlien } from '../interfaces/IAlien';

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
			const alien:IAlien[] = await Alien.find(req.params.id?{"_id":`${req.params.id}`}:{});
			res.json(alien);
		} catch (error) {
			res.send('Error' + error);
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
