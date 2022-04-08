const router = require('express').Router();
const controller = require('../controllers/users');

// GET /users
router.route('/').get(controller.get);

// GET PUT DELETE /users/:id
router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

// POST to /users
router.route('/create').post(controller.post);

// GET users notes
router.route('/:id/notes').get(controller.getNotes);

// DELETE users notes
router.route('/:id/notes/:noteId').delete(controller.deleteNotes);

// GET all users classes

router.route('/:id/classes').get(controller.getClasses);

module.exports = router;
