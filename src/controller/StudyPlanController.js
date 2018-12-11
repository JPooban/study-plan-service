import * as planService from '../service/StudyPlanService';

const list = async (req, res) => {
  try {
    let plans = await planService.list()
  
    if (plans.length <= 0) res.sendStatus(204)
    res.status(200).json(plans)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const save = async (req, res) => {
  try {
    let plans = await planService.save(req.body)
    res.status(201).json(plans)
  } catch (error) {
    res.status(400).json(error)
  }
}

export {
  list,
  save
}