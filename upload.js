

// import multer from "multer"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
      
//       cb(null, file.originalname + '-' + Date.now())
//     }
//   })
  
//   const upload = multer({ storage: storage })

//   export{upload}

import multer from "multer";
let fileName=''

const storage = multer.diskStorage({
    destination: function (req, Image, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req,image, cb) {
        fileName=image.originalname 
    
      cb(null,Date.now() + '-' +fileName)
     }
});

const upload = multer({ storage: storage });

export { upload};
