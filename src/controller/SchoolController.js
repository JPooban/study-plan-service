import * as schoolService from '../service/SchoolService';

const list = async (req, res) => {
  try {
    let schools = await schoolService.list()

    if (schools.length <= 0) res.sendStatus(204)
    res.status(200).json(schools)
  } catch (error) {
    res.status(400).json(error)
  }
}

const save = async (req, res) => {
  try {
    let schools = await schoolService.save(req.body)
    res.status(201).json(schools)
  } catch (error) {
    res.status(400).json(error)
  }
}

export {
  list,
  save
}