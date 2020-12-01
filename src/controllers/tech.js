const Tech = require('../models/Tech');
const calculateAvarage = require('../utils/calculateAvarage');

module.exports = {
  async store(req, res) {
    const { name, description, salary } = req.body;

    const techExistis = await Tech.findOne({ name });

    if (techExistis) {
      console.log(`Tech ${ name } already exists!`);
      return res.send(`Tech ${ name } already exists!`);
    }

    const tech = await Tech.create({
      name,
      description,
      salary,
      updatedTimes: 0
    });

    console.log(`Tech ${name} created!`);
    return res.json(tech);
  },

  async update (req, res) {
    const tech = req.body;

    const getTech = await Tech.findOne({ name: tech.name });

    if (!getTech) {
      console.log(`Tech ${ name } don't exists!`);
      return res.send(`Tech ${ name } don't exists!`);
    }

    let updatedTimes

    if(!tech.updatedTimes) {
      updatedTimes = 2
    } else {
      updatedTimes = tech.updatedTimes
    }

    console.log("updated times:", updatedTimes)

    const currentSalary = calculateAvarage(getTech.salary, tech.salary, updatedTimes)

    const updatedTech = await Tech.findOneAndUpdate(getTech._id, {
      salary: currentSalary,
      updatedTimes: ++updatedTimes
    }, {
      new: true
    }
    )

    return res.json(updatedTech);
  }
}