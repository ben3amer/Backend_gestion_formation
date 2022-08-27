import express from 'express'
import { auth, adminAuth } from '../middleware/auth.js'
import Formation from '../models/Formation.js'

const router = new express.Router()


//CREATE FORMATION
router.post("/",auth, async (req, res) => {
  try{
    const formation = new Formation({
      ...req.body,
    });
    await formation.save();
    res.status(201).send(formation);
  } catch (e){
      res.status(400).send(e);
  }
});

//GET ALL FORMATION
router.get("/", auth, async (req, res) => {
    Formation.find()
    .then(formations => res.json(formations))
    .catch(err => res.status(400).json('err : ' + res.json));
  });

//GET FORMATION BY ID 
router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const formation = await Formation.findOne({ _id});
    if (!formation) return res.status(404).send();
    res.send(formation);
  } catch (e) {
    res.status(500).send(e);
  }
});
//GET FORMATION BY TITRE
router.get("/:titre", auth, async (req, res) => {
  const _titre = req.params.titre;

  try {
    const formation = await Formation.findOne({titre : _titre});
    if (!formation) return res.status(404).send();
    res.send(formation);
  } catch (e) {
    res.status(500).send(e);
  }
});

//UPDATE FORMATION
router.patch("/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["titre","nbSession","nbParticipants","duree","budget","completed","year"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) return res.status(400).send({ error: "Invalid updates" });

  try {
    const _id = req.params.id;
    const formation = await Formation.findOne({ _id});
    if (!formation) return res.status(404).send();
    updates.forEach((update) => (formation[update] = req.body[update]));
    await formation.save();
    res.send(formation);
  } catch (e) {
    res.status(400).send(e);
  }
});

//DELETE FORMATION
router.delete("/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const formation = await Formation.findOneAndDelete({ _id});
    if (!formation) return res.status(404).send();
    res.send(formation);
  } catch (e) {
    res.status(500).send(e);
  }
});
export default router
