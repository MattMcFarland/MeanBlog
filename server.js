var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    path = require("path"),
    methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/posts');

app.use("/app", express.static(path.join(__dirname + "/app")));
app.use("/node_modules", express.static(path.join(__dirname + "/node_modules")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/blog", function(req, res){
    res.sendFile(path.join(__dirname + "/app/views/blog.html"));
});

app.get("/create_post", function(req, res){
   res.sendFile(path.join(__dirname + "/app/views/create_post.html"));
});

app.post("/create_post", function(req, res, next){
    var newPost = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save(function(err, post){
        if (err) { console.log(next(err)) }
        res.json(201, newPost);
    })
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
});