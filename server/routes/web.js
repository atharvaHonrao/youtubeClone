import express from 'express'
const router = express.Router();
import UserControls from '../controlers/userControlls.js'

router.get('/', UserControls.home)
router.get('/home', UserControls.homepage)
router.get('/register', UserControls.home)
router.get('/login', UserControls.loginpage)

router.post('/', UserControls.homepost)
router.post('/login', UserControls.userlogin)

export default router