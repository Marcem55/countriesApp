const { Activity, Country } = require('../db');

const getActivities = async () => {
    try {
        const activities = Activity.findAll({
            include: {
                model: Country
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        // console.log(activities);
        return activities;
    } catch (error) {
        console.log(error);
    }
}

const postActivity = async (newActivity) => {
    const { name, difficulty, duration, season } = newActivity;
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        return activity;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postActivity,
    getActivities
}