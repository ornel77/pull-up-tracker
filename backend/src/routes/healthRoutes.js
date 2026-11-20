import {Router} from 'express';

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Pull-Up Tracker API is running",
        timestamp: new Date().toISOString()
    })
})

export default router