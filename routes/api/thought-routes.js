const router = require('express').Router({ mergeParams: true });
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// GET all thoughts /api/thoughts
router.route('/').get(getAllThought);

// GET one thought /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// POST  /api/thoughts/<userId>  Add a thought to a user
router
.route('/:userId')
.post(addThought);

// POST  /api/thoughts/<thoughtId>/reactions Add a reaction for a thought
router
.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE  /api/thoughts/<thoughtId>/reactions/<reactionId> Delete a reaction
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;