const Tech = require('../models/Tech');
const calculateAvarage = require('../utils/calculateAvarage');

module.exports = {
  async read(req, res) {
    const { name} = req.params;

    const techName = String(name).toLowerCase();

    const tech = await Tech.find({ name: techName});

    if (!tech.length) {
      console.log(`Tech ${ name } don't exists!`);
      return res.send(`Tech ${ name } don't exists!`);
    }

    return res.send(tech)
  },

  async store(req, res) {
    const { name, description } = req.body;

    const techName = String(name).toLowerCase();

    const techExistis = await Tech.findOne({ name: techName});

    if (techExistis) {
      console.log(`Tech ${ name } already exists!`);
      return res.send(`Tech ${ name } already exists!`);
    }

    const role = {
      junior: {
        salary: 0,
        updatedTimes: 0
      },
      mid: {
        salary: 0,
        updatedTimes: 0
      },
      senior: {
        salary: 0,
        updatedTimes: 0
      }
    }

    const tech = await Tech.create({
      name: techName,
      role,
      description,
    });

    console.log(`Tech ${name} created!`);
    return res.json(tech);
  },

  async update (req, res) {
    const {name, role, salary} = req.body;

    const techName = String(name).toLowerCase();

    const getTech = await Tech.findOne({ name: techName });
    
    if (!getTech) {
      console.log(`Tech ${ techName } don't exists!`);
      return res.send(`Tech ${ techName } don't exists!`);
    }

    const getRoleName = Object.keys(getTech.role).find(tech => tech === role)

    console.log("role escolhida:", getRoleName)

    if (!getRoleName) {
      console.log("Invalid role!");
      return res.send("Invalid role");
    }

    const roleInfo = Object.assign(getTech["role"][getRoleName], {})

    roleInfo.updatedTimes = roleInfo.updatedTimes >= 1 ? 2 : 1;

    roleInfo.salary = calculateAvarage(roleInfo.salary, salary, roleInfo.updatedTimes).toFixed(2);

    getTech.role[getRoleName] = roleInfo

    const updatedTech = await Tech.findOneAndUpdate({
      _id: getTech
    }, {
      $set: {
        role: getTech.role
      }
    }, {
      new: true
    })
    return res.json(updatedTech);
  }
}