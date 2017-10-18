const Express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer')
const kx = require('./db/connection')

const app = Express();  
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(Express.static(path.join(__dirname, 'public')))
const upload = multer({ dest: path.join(__dirname, '.', 'public', 'uploads') })

app.get('/', (request, response) => {
    response.render('index');
})

app.get('/cohorts', (request, response) => {
    kx 
        .select()
        .from('cohorts')
        .orderBy('created_at', 'DESC')
        .then(cohorts => {
            response.render('cohorts', { cohorts })
        })
})

app.get('/cohorts/new', (request, response) => {
    response.render('new');
})

app.post('/cohorts/new', upload.single('image'), (request, response) => {
    const { body } = request;
    const { name, members } = request.body;
    
    if (request.file != undefined) {
        const { filename } = request.file;
        kx
            .insert({ name: name, members: members, image_path: `./uploads/${filename}`})
            .into('cohorts')
            .then(() => response.redirect('/cohorts'))
    } else {
        response.redirect('/cohorts/new')
    }
})

app.get('/cohorts/:id', (request, response) => {
    const { id } = request.params
    
    if (request.query.members !== undefined) {
        const { sortMethod, quantity, members } = request.query

        function shuffle(arr) {
            console.log(arr);
            for (let i = arr.length - 1; i >= 0; i--) { 
                let j = Math.floor(Math.random() * (i + 1)); 
                let x = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = x; 
            } 
            console.log('arr', arr);
            return arr; 
        } 

        function makeTeams(arr) {
            let membersArr = shuffle(arr.toString().split(', '));
            let numTeams = parseInt(quantity);
            let teams = []; 
            if (sortMethod === "op1") { 
                let teams_count = numTeams;
                let perTeam = Math.floor((membersArr.length + 1) / numTeams);
                while (teams_count > 0) { 
                    teams.push(membersArr.splice(0, perTeam))
                    teams_count--; 
                } 
                return teams; 
            } else if (sortMethod === "op2") {
                let teams_count = Math.ceil((membersArr.length)/ numTeams);
                while (teams_count > 0) { 
                    teams.push(membersArr.splice(0, numTeams)) 
                    teams_count--; 
                } 
                return teams; 
            }
        }

        let output = makeTeams(members)

        kx
            .first()
            .from('cohorts')
            .where({id})
            .then(cohort => {
                response.render('team', { cohort, teams: output })
            })
    } else {
        kx
        .first()
        .from('cohorts')
        .where({id})
        .then(cohort => {
            response.render('team', { cohort, teams: null })
        })
    }

})

// app.post('/cohorts/:id', (request, response) => {
//     const { sortMethod, quantity } = request.query;
   
//     // response.append('container', 'test') 
//     // if ({sortMethod} === "op1") {
        
//     // } else if ({sortMethod} === "op2") {

//     // } else {
//     //     const { id } = request.params

//     //     kx
//     //         .first()
//     //         .from('cohorts')
//     //         .where({id})
//     //         .then(cohort => {
//     //             response.render('team', {cohort})
//     //         })
//     // }

//     const { id } = request.params

//     kx
//     .first()
//     .from('cohorts')
//     .where({id})
//     .then(cohort => {
//         response.render('team', {cohort})
//     })
// })

app.listen(
    9090,
    () => console.log(`Server listening on http://localhost:9090`)
)