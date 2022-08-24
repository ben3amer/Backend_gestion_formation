import express from 'express'

const router = new express.Router()

router.get('/session', (req, res) => {
  res.send('session')
})

export default router
