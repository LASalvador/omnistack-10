const axios = require('axios');
const Dev = require('../models/Dev');
const string2Array = require('../services/stringToArray');

async function store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (! dev) {
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name = login, avatar_url, bio } = apiResponse.data;
        const techsArray = string2Array(techs, ',');

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });    
    }

    

    return res.json(dev);
}

async function index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
}
module.exports = {
    store,
    index
}