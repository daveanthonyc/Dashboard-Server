import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    O1: {
        total: Number,
        offline: Number,
        online: Number,
        absentee: Array
    },
    O2: {
        total: Number,
        offline: Number,
        online: Number,
        absentee: Array
    },
    HWPL: {
        total: Number,
        offline: Number,
        online: Number,
        absentee: Array
    },
})

export const Report = mongoose.model('reports', reportSchema) 