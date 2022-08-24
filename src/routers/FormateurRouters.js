import express from 'express'

const router = new express.Router()

router.get('/formateur', (req, res) => {
  res.send('formateur')
})

export default router
