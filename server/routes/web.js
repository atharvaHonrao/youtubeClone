import express from 'express'
const router = express.Router();
import UserControls from '../controlers/userControlls.js'

router.get('/', UserControls.home)
router.post('/', UserControls.homepost)
router.get('/home', UserControls.homepage)



router.get('/register', UserControls.home)


router.get('/login', UserControls.loginpage)

router.post('/login', UserControls.userlogin)

export default router