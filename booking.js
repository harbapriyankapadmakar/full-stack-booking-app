const express=require('express')

const route=express.Router();


const path=require('path');

const rootDir=require('../util/path');

const appointmentUser=require('../controller/controller appointment')


route.get('/get-user',appointmentUser.getUser);
route.post('/add-user',appointmentUser.postUser);
route.delete('/delete-user/:id',appointmentUser.deleteUser);

 
module.exports=route;


 
