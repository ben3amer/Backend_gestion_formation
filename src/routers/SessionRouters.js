import express from 'express'
import Session from '../models/Session.js';
import { auth } from '../middleware/auth.js'
const router = new express.Router()


//CREATE SESSION
router.post("/",auth, async (req, res) => {
  
  try{
    const session = new Session({
      ...req.body,
    });
    await session.save();
    res.status(201).send(session);
  } catch (e){
      res.status(400).send(e);
  }
});

//GET ALL SESSION
router.get("/", auth, async (req, res) => {
  Session.find()
  .then(sessions => res.json(sessions))
  .catch(err => res.status(400).json('err : ' + res.json));
});

//GET SESSION BY ID 
router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const session = await Session.findOne({ _id});
    if (!session) return res.status(404).send();
    res.send(session);
  } catch (e) {
    res.status(500).send(e);
  }
});
//GET SESSION BY FORMATION ID 
router.get("/:idFormation", auth, async (req, res) => {
  const _idFormation = req.params.idFormation;
  try {
    const session = await Session.find({idFormation: _idFormation});
    if (!session) return res.status(404).send();
    res.send(session);
  } catch (e) {
    res.status(500).send(e);
  }
});
//GET SESSION BY FORMATEUR ID 
router.get("/:idFormateur", auth, async (req, res) => {
  const _idFormateur = req.params.idFormateur;
  try {
    const session = await Session.findOne({idFormateur:_idFormateur});
    if (!session) return res.status(404).send();
    res.send(session);
  } catch (e) {
    res.status(500).send(e);
  }
});
//UPDATE SESSION
router.patch("/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["idFormation","titre","dateDebut", "dateFin","description","nbParticipants","idFormateur"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) return res.status(400).send({ error: "Invalid updates" });

  try {
    const _id = req.params.id;
    const session = await Session.findOne({ _id});
    if (!session) return res.status(404).send();
    updates.forEach((update) => (session[update] = req.body[update]));
    await session.save();
    res.send(session);
  } catch (e) {
    res.status(400).send(e);
  }
});

//DELETE SESSION
router.delete("/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const session = await Session.findOneAndDelete({ _id,});
    if (!session) return res.status(404).send();
    res.send(session);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router
