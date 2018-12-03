import * as programService from '../service/ProgramService';

const list = async (req, res) => {
  try {
    let programs = await programService.list()

    if (programs.length <= 0) res.sendStatus(204)
    res.status(200).json(programs)
  } catch (error) {
    res.status(400).json(error)
  }
}

const save = async (req, res) => {
  try {
    let program = await programService.save(req.body)
    res.status(201).json(program)
  } catch (error) {
    res.status(400).json(error)
  }
}

export {
  list,
  save
}