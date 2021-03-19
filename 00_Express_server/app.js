//load the express
const express = require('express');

//initialize the express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//configure body-parser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended : false})