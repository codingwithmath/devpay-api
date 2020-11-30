const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index (req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store (req, res) {
    const { github_username, techs} = req.body;

    const userExist = await Dev.findOne({ github_username });

    if (userExist) {
      console.log(`User ${github_username} already exists!`);
      return res.send(`User ${github_username} already exists!`);
    }

    const response = await axios.get(`https://api.github.com/users/${github_username}`);
   
    const { name = login, avatar_url, bio } = response.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray
    })

    console.log(`User ${github_username} created!`)
    return res.json(dev);
  }
}