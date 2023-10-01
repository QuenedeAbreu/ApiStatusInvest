import { Router } from 'express'
import StatusInvestRouter from './router.apiStatusInvest.js'
const router = Router()


router.use('/statusInvest', StatusInvestRouter)

router.use('/', (req, res) => {
  res.status(200).json({
    message: "First Page!"
  })
})

//page not found
router.use((req, res) => {
  req
  res.status(404).json({
    message: "Page not found"
  });
})


export default router