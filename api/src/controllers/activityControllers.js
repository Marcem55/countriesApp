const { Activity, Country } = require('../db');

const postActivity = async (newActivity) => {
    try {
        const { name, difficulty, duration, season, countries } = newActivity;

        const activity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });
        await activity.addCountries(countries);
        console.log(activity);
        return activity;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postActivity
}