import express from 'express'

const router = new express.Router()

router.get('/formation', (req, res) => {
  res.send('formation')
})

export default router
