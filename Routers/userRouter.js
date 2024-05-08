//  import express from 'express'
// import { login,getUsers,getUserByUserName ,addUser,updateUserbyId,deleteUser} from '../Controllers/userController.js'

// const userRouter = express.Router()

// userRouter.get('/',getUsers)
// userRouter.get('/username/:username',getUserByUserName)
// userRouter.post('/',addUser)
// userRouter.post('/login',login)
// userRouter.patch('/:id',updateUserbyId)
// userRouter.delete("/:id",deleteUser)


// export default userRouter
import express from 'express'
import { addUser,login, getUserById,deleteUser, getUsers, sendMail, updateUser,getUserByUserName,updateUserbyID } from '../Controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
  
userRouter.post('/', addUser)

userRouter.post('/login',login)

userRouter.get('/username/:username',getUserByUserName)
userRouter.get('/:id',getUserById)

userRouter.patch('/:id',updateUserbyID)
  
userRouter.put('/:userId', updateUser,sendMail)
  
userRouter.delete('/:id',deleteUser )

export default userRouter;