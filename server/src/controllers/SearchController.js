const Dev = require('../models/Dev');
const string2array = require('../services/stringToArray');

async function index(req, res) {
    const {latitude, longitude, techs} = req.query;
    
    const arrayTechs = string2array(techs, ",");

    const devs = await Dev.find({
        techs: {
            $in: arrayTechs
        },
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 10000, 
            }
        }
    });

    res.json({devs})
}


module.exports = {
    index,
}