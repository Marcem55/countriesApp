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
    const { name, difficulty, duration, season, countries } = newActivity;
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });

        const activityCountries = await Country.findAll({
            where: {
                name: countries
            }
        })

        const fullActivity = await activity.addCountry(activityCountries);

        return fullActivity;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postActivity,
    getActivities
}