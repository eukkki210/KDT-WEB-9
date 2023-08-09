import express from 'express';
import * as cont from '../controller/Cuser.js';
const router = express.Router();

router.get('/' , cont.main);

router.get('/signup', cont.getSignup);

router.post('/signup', cont.postSignup);

router.get('/signin', cont.getSignin);

router.post('/signin', cont.postSignin);

router.post('/profile', cont.postProfile);

router.post('/profile/edit', cont.editProfile);

router.post('/profile/delete', cont.deleteProfile);

// module.exports = router;
export default router;