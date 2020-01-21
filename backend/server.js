const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended : true
	})
)

const knex = require('knex')({
	client     : 'postgres',
	connection : {
		host     : '127.0.0.1',
		user     : 'postgres',
		password : 'postgres',
		database : 'pws',
		charset  : 'utf8'
	}
})
const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
    tableName: 'users'
})
const WorkingSpace = bookshelf.Model.extend({
    tableName: 'workingspaces'
})

// const newUser = new User({
//     email: 'email@email.com'
// })
// newUser.save()
//  .then(user => {
//      console.log(user)
//  })


 app.post('/workingspace', (req,res) => {
     let data = req.body.values

     console.log(req.body.values)

     const newWorkingSpace = new WorkingSpace({
         name: data.name,
         country : data.country,
         city : data.city,
         address : data.address,
         privacy : data.privacy,
         noise : data.noise,
         popularity : data.popularity,
         security : data.security,
         wifiSpeed : data.wifiSpeed
     })
     newWorkingSpace.save()
                .then(
                    workingspace => console.log(workingspace)
                )
 })



 app.listen(8080, () => {
	console.log(`listening`)
})