import { Request, Response } from "express"
import Activity from "../models/Activity"

export const getActivities = async (req: Request, res: Response) => {
    const activities = await Activity.findAll({
        order: [['id', 'ASC']]
    })
    res.status(200).json({ data: activities })
}

export const getActivityById = async (req: Request, res: Response) => {
    const activity = await Activity.findByPk(req.params.id)
    if(!activity){
        return res.status(404).json({error: 'Activity not found'})
    }
    res.json({data: activity})
}

export const createActivity = async (req: Request, res: Response) => {
    const activity = await Activity.create(req.body)
    res.status(201).json({ data: activity })
}

export const updateActivity = async (req : Request, res : Response) => {
    const activity = await Activity.findByPk(req.params.id)
    if(!activity){
        return res.status(404).json({error: 'Activity not found'})
    }

    await activity.update(req.body)
    await activity.save()
    res.json({data: activity})
}

export const deleteActivity = async (req: Request, res: Response) => {
    const activity = await Activity.findByPk(req.params.id)
    if(!activity){
        return res.status(404).json({error: 'Activity not found'})
    }
    await activity.destroy()
    res.json({data: 'Product deleted'})
}