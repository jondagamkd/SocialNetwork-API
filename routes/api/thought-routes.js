const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// GET all thoughts /api/thoughts
router.route('/').get(getAllThought);

// GET one thought /api/thoughts/:id
router.route('/:id').get(getThoughtById);

// POST  /api/thoughts/<userId>  Add a thought to a user
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId> Put or Delete a thought from a user
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

// Delete a reaction from a user's thought
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;