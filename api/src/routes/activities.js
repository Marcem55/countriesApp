const { Router } =  require('express');
const { postActivity } = require('../controllers/activityControllers');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newActivity = req.body;
        await postActivity(newActivity);
        console.log(newActivity);
        return res.status(200).send('Activity succesfully created');
    } catch (error) {
        console.log('Error');
        return res.status(400).json({message: error});
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const activities = await getActivities();
//         return res.status(200).json(activities);
//     } catch (error) {
//         return res.status(400).json({message: error});
//     }
// })

module.exports = router;