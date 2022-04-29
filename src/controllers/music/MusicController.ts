import Album from '../../models/music/album'
import Music from '../../models/music/music'

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

class MusicController {
	constructor() {
    }

	// async getAll(req: any, res: any) {
	// 	try {
	// 		const alien = await Alien.find();
	// 		res.json(alien);
	// 	} catch (error) {
	// 		res.send('Error' + error);
	// 	}
	// }

    async addMusic(req:any,res:any){
        const music = new Music({
            name: req.body.name,
            artist: req.body.artist,
            length: req.body.length
        })
        try {
            const a1 = await music.save()
          res.json(a1)
        } catch (error) {
            res.send('Error'+error)
        }
    }

    async getMusic(req:any, res:any){
        try {
            const music = await Music.find()
            res.json(music)
        } catch (error) {
            res.send('Error'+error)
        }
    }

    async addAlbum(req:any,res:any){
        try {
            const id = await Music.findById('626a852c33d801099628c443')
            const album = new Album({
                name:req.body.name,
                artist: req.body.artist,
                totalSongs: req.body.total,
                songs:[id._id],
                price: req.body.price
            })
            const resp = await album.save()
            res.json(resp)
        } catch (error) {
            res.send('Error'+error)
        }
       
    }
    async getAlbum(req:any, res:any){
        try {
            const album = await Album.find()
            res.json(album)
        } catch (error) {
            res.send('Error'+error)
        }
    }
    
}
export default new MusicController();
