const express = require ('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
const app = express()
const mysql = require ('mysql')


const db = mysql.createPool({
    host: 'localHost',
    user: 'root',
    password: 'crazy1234',
    database: 'cruddb',
})
app.get('/api/get', (res, req) => {
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
    console.log(result)
})

})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req,res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = "INSERT INTO cruddb.movie_reviews (movieName, movieReview) VALUES (?, ?);"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err)
    })
})
app.get('/', (req, res) =>{
    
    
    
    
    //const sqlInsert = "INSERT INTO cruddb.movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');";
    //db.query(sqlInsert, (err, result) => {
    //res.send('sad');
    //})
})

app.listen(3001, ()=>{
    console.log("Server runnning on port 3001")
})