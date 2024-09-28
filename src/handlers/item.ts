import { Request, Response } from "express"
import Activity from "../models/Activity"

export const getActivities = async (req: Request, res: Response) => {
    const activities = await Activity.findAll({
        order: [['id', 'ASC']]
    })
    res.status(200).json({ data: activities })
}

export const getActivityById = async (req: Request, res: Response) => {
    const product = await Activity.findByPk(req.params.id)
    if(!product){
        res.status(404).json({error: 'Activity not found'})
    }
    res.json({data: product})
}

export const createActivity = async (req: Request, res: Response) => {
    const activity = await Activity.create(req.body)
    res.status(201).json({ data: activity })
}

export const updateActivity = async (req : Request, res : Response) => {
    const product = await Activity.findByPk(req.params.id)
    if(!product){
        res.status(404).json({error: 'Activity not found'})
    }

    await product.update(req.body)
    await product.save()
    res.json({data: product})
}

export const deleteActivity = async (req: Request, res: Response) => {
    res.send('FROM DELETE ACTIVITY')
}