const router = require('express').Router()

const UserController = require('../controllers/UserController')

//middlewares
const verifyToken = require('../helpers/verifyToken')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkusers', UserController.checkUser)
router.get('/:id', UserController.getUserById)


router.patch('/edit/:id', verifyToken, UserController.editUser)




module.exports = router