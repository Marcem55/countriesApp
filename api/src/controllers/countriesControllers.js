const axios = require('axios');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const { Country, Activity } = require('../db');

// Function to get all countries
const getAllCountries = async () => {
    try {
        const allCountries = await Country.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        return allCountries;
    } catch (error) {
        console.log(error);
    }
}

// Function to get countries by name
const getCountryByName = async (name) => {
    try {
        const countryByName = await Country.findAll({
            where: {
                name: {[Op.iLike]: `%${name}%`}
            },
            include: Activity,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        // console.log(countryByName);
        return countryByName;
    } catch (error) {
        console.log(error);
    }
}

const getCountryById = async (id) => {
    try {
        const countryById = await Country.findByPk(id.toUpperCase(), {
            include: Activity,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        console.log(countryById);
        return countryById;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCountries,
    getCountryByName,
    getCountryById
}