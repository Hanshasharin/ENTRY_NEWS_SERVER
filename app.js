//  import express from 'express';
// import cors from 'cors';
// import userRouter from './Routers/userRouter.js';
// import employeeRouter from './Routers/employeeRouter.js';

// const app = express();

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // CORS middleware
// app.use(cors());

// // Routers
// app.use('/users', userRouter);
// app.use('/employee', employeeRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   // Check if the error is a JSON parsing error
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ error: 'Invalid JSON payload' });
//   }
  
//   // Handle other errors
//   console.error(err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// import express from 'express';
// import cors from 'cors';
// import userRouter from './Routers/userRouter.js';
// import employeeRouter from './Routers/employeeRouter.js';
// import postRouter from './Routers/postRouter.js';

// const app = express();

// app.use(express.json()); // This line is important for parsing JSON data
// app.use(cors());
// app.use('/users', userRouter);
// app.use('/employee', employeeRouter);
// app.use ('/post',postRouter)

// app.listen(3000, () => {
//     console.log('listening to port 3000');
// });

import express from 'express'
import cors from 'cors'
import userRouter from './Routers/userRouter.js'
import employeeRouter from './Routers/employeeRouter.js'
import postRouter from './Routers/postRouter.js'
import path from 'path';
import mongoose from 'mongoose'
import 'dotenv/config'

const app=express()

async function main() {
    console.log(process.env.MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL);
  }
  main().then(console.log("Conncted to db")).catch(err => console.log(err));

app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/employees',employeeRouter)
app.use('/posts',postRouter)

const dirname= path.resolve()
app.use(express.static(path.join(dirname,'uploads')))


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
