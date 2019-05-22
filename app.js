var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    cookieParser   = require("cookie-parser"),
    methodOverride = require("method-override");
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

// Restful routing

app.get("/", function(req, res){
    res.render("index");
});

// resume page

app.get("/resume", function(req, res){
    res.render("resume");
});

// about page

app.get("/about", function(req, res){
    res.render("about");
});

// contact page

app.get("/contact", function(req, res){
    res.render("contact");
});

// gallery page

app.get("/gallery", function(req, res){
    res.render("gallery");
});

// blog page

app.get("/blog", function(req, res){
    res.render("blog");
});

// blog detail page

app.get("/blogdetail", function(req, res){
    res.render("blog-detail");
});

// server Listen 

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!");
});