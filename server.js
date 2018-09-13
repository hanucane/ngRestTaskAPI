const express = require("express");
const bp = require("body-parser");
const router = require("./server/routes.js");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.use(express.static( __dirname + '/public/dist/public' ));
router(app);
app.listen(8000, (errs)=>console.log(errs?errs:"Connected"));
