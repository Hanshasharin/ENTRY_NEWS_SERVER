// import Employees from "../Models/employeeModel.js";

// const addEmployees = async (req, res) => {
//   try {
//     await main();
//     await Employee.create([
//     //   {
//     //     name: "Alice",
//     //     age: 30,
//     //     rank: "Senior Engineer",
//     //   },

//     //   {
//     //     name: "Bob",
//     //     age: 25,
//     //     rank: "Software Developer",
//     //   },

//     //   {
//     //     name: "Charlie",
//     //     age: 35,
//     //     rank: "Project Manager",
//     //   },

//     //   {
//     //     name: "David",
//     //     age: 28,
//     //     rank: "Data Analyst",
//     //   },

//     //   {
//     //     name: "Eva",
//     //     age: 33,
//     //     rank: "Quality Assurance Engineer",
//     //   },

    
//         {
//             "name": "Alice",
//             "age": 30,
//             "rank": "Senior Engineer"
//         },
//         {
//             "name": "Bob",
//             "age": 25,
//             "rank": "Software Developer"
//         },
//         {
//             "name": "Charlie",
//             "age": 35,
//             "rank": "Project Manager"
//         },
//         {
//             "name": "David",
//             "age": 28,
//             "rank": "Data Analyst"
//         },
//         {
//             "name": "Eva",
//             "age": 33,
//             "rank": "Quality Assurance Engineer"
//         }
    
    
//     ])
//     res.status(200).send("Employees added successfully");

    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "internal server error" });
//   }
// };


// export {addEmployees}
import Employee from "../Models/employeeModel.js"

const addEmployees = async (req,res)=>{

    try {
        await Employee.create([
            { name: 'Jean-Luc Picard', age: 59, rank: 'Captain' },
            { name: 'William Riker', age: 29, rank: 'Commander' },
            { name: 'Deanna Troi', age: 28, rank: 'Lieutenant Commander' },
            { name: 'Geordi La Forge', age: 29, rank: 'Lieutenant' },
            { name: 'Worf', age: 24, rank: 'Lieutenant' }
        ])
        res.status(201).send("Employees added")
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server error"})
        
    }
}

const countByAge = async(req,res)=>{
try {
    const records = await Employee.aggregate([
        {
            $group:
            {
                _id:"$age",
                count:{$sum:1}
            }

        }
    ])
    res.status(200).json(records)

} catch (error) {
    console.log(error)
    res.status(500).json({error:"Internal Server error"})
}

}

const countByAgeGreaterThan =async (req,res)=>{
try {
    const age = Number(req.params.age)
    const records = await Employee.aggregate([
        {
            $match:{age:{$gt:age}}
        },
        {
            $group:
            {
                _id:"$age",
                count:{$sum:1}
            }
        }
    ])
    res.status(200).json(records)

} catch (error) {
    console.log(error)
    res.status(500).json({error:"Internal Server error"})
    
}
}

const getEmployeesSortedByName = async(req,res)=>{
    try {
        const records= await Employee.aggregate([
            {$sort: {name:-1}},
            {$limit:4},
            {
                $project:{
                    _id:0,
                    EmployeeName:"$name",
                    rank:1
                }
            }
        ])
        res.status(200).json(records)

    } catch (error) {
        console.log(error)
    res.status(500).json({error:"Internal Server error"})
        
    }
}
export {addEmployees,countByAge,countByAgeGreaterThan,getEmployeesSortedByName}