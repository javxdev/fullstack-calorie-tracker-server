import { Request, Response } from "express"
import Activity from "../models/Activity"

export const getActivities = async (req: Request, res: Response) => {
    const activities = await Activity.findAll({
        order: [['id', 'ASC']]
    })
    res.status(200).json({ data: activities })
}

export const getActivityById = async (req: Request, res: Response) => {
    res.send('FROM GET ACTIVITY BY ID')
}

export const createActivity = async (req: Request, res: Response) => {
    const activity = await Activity.create(req.body)
    res.status(201).json({ data: activity })
}

export const updateActivity = async (req : Request, res : Response) => {
    res.send('FROM UPDATE ACTIVITY')
}

export const deleteActivity = async (req: Request, res: Response) => {
    res.send('FROM DELETE ACTIVITY')
}