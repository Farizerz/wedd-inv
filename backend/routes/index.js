import express from 'express';
import { indexGB, inputGB } from '../controllers/guestbookController.js';
import { indexRSVP, inputRSVP } from '../controllers/rsvpController.js';

const router = express.Router();

router.get('/', indexGB);
router.post('/guestbook/post', inputGB);
router.get('/rsvp', indexRSVP);
router.post('/rsvp/post', inputRSVP);

export default router;