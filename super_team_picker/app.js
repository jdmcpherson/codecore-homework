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

app.listen(
    9090,
    () => console.log(`Server listening on http://localhost:9090`)
)