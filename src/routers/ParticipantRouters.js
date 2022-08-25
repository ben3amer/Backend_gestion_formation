import express from 'express'

const router = new express.Router()

router.get('/participant', (req, res) => {
  res.send('participant')
})

export default router
