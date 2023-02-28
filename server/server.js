const express = require('express')
const { Pool } = require('pg')
const { application, json, query, response } = require('express')
const app = express()
// const client = require('./db')
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const { reset } = require('nodemon')
const client = require('./db')

const cors = require('cors')






app.use(cors)
app.use(morgan("tiny"))
app.use(express.static("public"));
app.use(express.json())


app.route('/api')
    .get(async (req, res) => {  //get all from Database
        try {
            //const result = {data: "user 1", user: "user 2"} // await client.query('SELECT * FROM task')
            res.json({msg: 'Working in server.js'}).status(200) //.rows
        } catch (err) {
            res.status(500).json({ error: err});
        }     
    })

//     .post(async (req, res) => {  //INSERT INTO task (name, age) VALUES ('John', 33); DB Insert
//         try {               
//                 const { task } = req.body;
//                 const insert = await client.query('INSERT INTO task (task) VALUES ($1);', [task])
//                 const data = await client.query('SELECT * fROM task')
//                 res.json({ validation: true, data: data.rows}).status(201)
                    
//         } catch (err){
//             res.status(500).json({ error: err })
//         }
              
//     })


// app.route('/task/:id')

//     .get(async (req, res) =>{ //.get with setting a var at /pets/:id //get 1
//         try {
//                 const id = req.params.id     
//                 const results = await client.query('SELECT * FROM task WHERE id = $1;', [id])
//                 res.json(results.rows[0])
//             }
//         catch (err){
//             res.status(500).json({ error: err})
//         }
//     })

//     .put(async (req, res) => { // .patch where we are inserting into the json file //UPDATE owners SET age = 30 WHERE name = 'Jane';
//         try {
//             const { task } = req.body
//             const { id } = req.params    
//             await client.query('UPDATE task SET task = $1 WHERE id = $2', [task, id])
                
//             res.json({ message: `Updated id: ${id} Task name: ${taskName}`}).status(204)
//         } catch (err) {
//             //res.status(500).type('text/plain').send('Internal Server Error .patch')
//             res.status(500).json({err})
//         }
//     })
    
//     .patch(async(req,res)=>{
//         try {
//           let {id} = req.params
//           let {body} = req
//           const data = await client.query(`UPDATE task SET task ='${body.task}' WHERE id = ${id}`)
//           res.status(204).send()
//         } catch (error) {
//           res.status(500).json({message: error.message})
//         }
//       })
    
//     .delete(async (req, res) => {
//         try {
//             const {id} = req.params
//             await client.query('DELETE FROM task WHERE id = $1', [id])
//             res.json({ message: `Deleted id: ${id}`}).status(204)
//         } catch (err) {
//             res.status(500).json({err})
//         }
//     })

// app.listen(PORT, () => {
//   console.log(`listening on Port ${PORT}`);
// });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
