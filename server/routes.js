const {home,getTask,createTask,updateTask,removeTask} = require("./controller.js");

function router(app)
{
    app.get('/',home);
    app.get('/:id',getTask);
    app.post('/new',createTask);
    app.put('/update/:id', updateTask);
    app.delete('/remove/:id', removeTask);
}

module.exports = router;