import express from 'express';
const screenRouter = express.Router();



screenRouter.route('/')

.post(function(req,res) {
    console.log('reached screenRouter');
    console.log(req.body);
    res.json('success');
})

export default screenRouter;
