// server
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;

// for parsing urlencoded in req.body
app.use(bodyParser.urlencoded({
    extended:true
}));

// for parsing json in req.body
app.use(bodyParser.json());



// get gzip files
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

// serve js files
app.use(express.static('dist'));
app.use(express.static('imgs'));


// routers
import screenRouter from './routes/screenRouter';

// client api
app.use('/screen', screenRouter);



// react server side
import { handleRender } from './ssrFunctions.js';


app.use(handleRender);


app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})








