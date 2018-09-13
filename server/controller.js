const Tasks = require("./model.js");
// module.exports = {
//     home:home,
//     getTask:getTask,
//     createTask:createTask,
//     updateTask:updateTask,
//     removeTask:removeTask
// }

module.exports = {
    home : (req,res) => Tasks.find({})
                        .then(data => console.log("root success")||res.json(data))
                        .catch(errs => console.log("root error")||res.json(errs)),
    getTask : (req,res) => Tasks.find({_id : req.params.id})
                            .then(data => console.log("getTask success")||res.json(data))
                            .catch(errs => console.log("getTask error")||res.json(errs)),
    createTask : (req,res) => Tasks.create(req.body)
                                .then(data => console.log("createTask success")||res.json(data))
                                .catch(errs => console.log("createTask error")||res.json(errs)),
    updateTask : (req,res) => Tasks.update({_id: req.params.id},{$set : req.body})
                                .then(data => console.log("updateTask success")||res.json(data))
                                .catch(errs => console.log("updateTask error")||res.json(errs)),
    removeTask : (req,res) => Tasks.remove({_id : req.params.id})
                                .then(data => console.log("removeTask success")||res.json(data))
                                .catch(errs => console.log("removeTask error")||res.json(errs))
                                
}



// function home(req,res){
//     console.log("root route");

//     Tasks.find({}, function(err,data){
//         if(err){
//             console.log("Route data error", err);
//             res.json({message: "Route data Error", err})
//         }
//         else{
//             res.json({message:"Route data success", data:data})
//         }
             
//     })
// }

// function getTask(req,res){
//     console.log("get task route");

//     Tasks.find({_id : req.params.id}, function(err,data){
//         if(err){
//             console.log("Get data error", err);
//             res.json({message: "Get data Error", err})
//         }
//         else{
//             res.json({message:"Get data success", data:data})
//         }
             
//     })
// }

// function createTask(req,res){
//     console.log("create task route");
     
//     Tasks.create(req.body,function(err,data){
//         if(err){
//             console.log("Create data error", err);
//             res.json({message: "Create data Error", err})
//         }
//         else{
//             res.json({message:"Create data success", data:data})
//         }
             
//     })
// }

// function updateTask(req,res){
//     console.log("update taskroute");

//     Tasks.update({_id : req.params.id}, {$set : req.body}, function(err,data){
//         if(err){
//             console.log("update data error", err);
//             res.json({message: "update data Error", err})
//         }
//         else{
//             res.json({message:"update data success", data:data})
//         }
             
//     })
// }

// function removeTask(req,res){
//     console.log("remove task route");

//     Tasks.remove({_id : req.params.id}, function(err,data){
//         if(err){
//             console.log("remove data error", err);
//             res.json({message: "remove data Error", err})
//         }
//         else{
//             res.json({message:"remove data success", data:data})
//         }
             
//     })
// }