const express = require('express');
const router = express.Router();
const joi = require('joi');
const frindsControllers = require('../controllers/friends/friendsController')
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middlewares/auth');
const postFriendInvitaionScheme = joi.object({
    email: joi.string().email().required()
});
const inviteDecisionScheme = joi.object({
    id: joi.string().required()
});
router.post('/invite', auth, validator.body(postFriendInvitaionScheme), frindsControllers.controllers.postFriendInvitation);
router.post('/accept', auth, validator.body(inviteDecisionScheme), frindsControllers.controllers.accetFrindInvitation);
router.post('/reject', auth, validator.body(inviteDecisionScheme), frindsControllers.controllers.rejectFriendInvitation);


module.exports = router;