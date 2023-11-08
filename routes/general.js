import express from 'express'
import { general } from '../controllers/general.js'

export const router = express.Router()

router.get('/', general)