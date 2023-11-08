import { Report } from "../models/general.js"

export const general = async (req, res) => {
    try {
        const response = await Report.find()
        res.status(200).send(response)
    } catch (err) {
        res.status(500).json({message: "there is an error"})    
    }
}