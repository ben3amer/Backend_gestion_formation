import express from 'express'
import { auth, adminAuth } from '../middleware/auth.js'
import Participant from '../models/Participant.js'
import Session from '../models/Session.js'
const router = new express.Router()

//CREATE PARTICIPANT
router.post("/",auth, async (req, res) => {
  try{
    const participant = new Participant({
      ...req.body,
    });
    await participant.save();
    res.status(201).send(participant);
  } catch (e){
      res.status(400).send(e);
  }
});

//GET ALL PARTICIPANT
router.get("/", auth, async (req, res) => {
  Participant.find()
    .then(participant => res.json(participant))
    .catch(err => res.status(400).json('err : ' + res.json));
  });

//GET PARTICIPANT BY ID 
router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const participant = await Participant.findOne({ _id});
    if (!participant) return res.status(404).send();
    res.send(participant);
  } catch (e) {
    res.status(500).send(e);
  }
});
//GET PARTICIPANT BY NAME AND LAST NAME 
router.get("/:firstname/:lastname", auth, async (req, res) => {
  const _firstname = req.params.firstname;
  const _lastname = req.params.lastname;
  try {
    const participant = await Participant.findOne({firstName : _firstname ,lastName:_lastname});
    if (!participant) return res.status(404).send();
    res.send(participant);
  } catch (e) {
    res.status(500).send(e);
  }
});

//UPDATE PARTICIPANT
router.patch("/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["email","firstName", "lastName","age","idSession"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) return res.status(400).send({ error: "Invalid updates" });

  try {
    const _id = req.params.id;
    const participant = await Participant.findOne({ _id});
    if (!participant) return res.status(404).send();
    updates.forEach((update) => (participant[update] = req.body[update]));
    await participant.save();
    res.send(participant);
  } catch (e) {
    res.status(400).send(e);
  }
});

//DELETE PARTICIPANT
router.delete("/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const participant = await Participant.findOneAndDelete({ _id,});
    if (!participant) return res.status(404).send();
    res.send(participant);
  } catch (e) {
    res.status(500).send(e);
  }
});
export default router
