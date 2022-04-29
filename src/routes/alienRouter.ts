const express = require('express')
const alienRouter = express.Router()
const Alien = require('../models/alien')

alienRouter.get('/',async(req:any, res:any) => {
    try {
        // const alien = await Alien.find()
        res.json({"name":"harish"})
    } catch (error) {
        res.send('Error'+ error)
    }
})

alienRouter.get('/:id', async(req:any, res:any) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (error) {
        res.send('Error'+ error)
    }
})

alienRouter.post('/', async(req:any, res:any) =>{
    const alien = new Alien({
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
})

alienRouter.patch('/:id', async(req:any, res:any) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
})

export default alienRouter;