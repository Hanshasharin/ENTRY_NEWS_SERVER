// import express from 'express'
// import { upload } from '../upload.js'
// import { addPost } from '../Controllers/postController.js'
// import { getPosts } from '../Controllers/postController.js'

// const postRouter = express.Router()


// postRouter.post('/',upload.single('image'),addPost)
// postRouter.get('/',getPosts)

// export default postRouter

import express from 'express'
import {upload} from '../upload.js'
import { addPost,getPosts,updatePost,deletePost,getImageById } from '../Controllers/postController.js'
import passport from '../pasport.js'

const postRouter = express.Router()

postRouter.post('/',passport.authenticate('jwt', { session: false }),
                upload.single('image'),addPost)

postRouter.get('/',getPosts)

postRouter.patch('/:id',updatePost)

postRouter.delete('/:id',deletePost)

postRouter.get('/images/:id',getImageById)

export default postRouter