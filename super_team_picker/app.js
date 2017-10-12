const Express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = Express();  
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(Express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.render('index');
})

app.get('/cohorts', (request, response) => {
    response.render('cohorts');
})

app.get('/cohorts/new', (request, response) => {
    response.render('new');
})

app.listen(
    9090,
    () => console.log(`Server listening on http://localhost:9090`)
)