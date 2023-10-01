import { Router } from 'express'
import * as controllerStatusInvest from '../controllers/controller.apiStatusInvest.js'

const StatusInvestRouter = Router()

StatusInvestRouter.get('/:fundo', controllerStatusInvest.getInfoStatusInvest)



export default StatusInvestRouter