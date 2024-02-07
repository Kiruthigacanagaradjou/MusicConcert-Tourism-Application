

const express = require("express")
const app = express()

const http = require("http");
const fs = require("fs");
const userData = require("./form_data.json");
const dataFilePath = "./form_data.json";
function inituserdata (){
  return new Promise( async (resolve,reject)=>{
    try{
      const userData = JSON.parse(await fs.promises.readFile("./form_data.json","utf8"))
      console.log({userData});
      resolve(userData)
    }catch(error){
      console.log(error);
      reject(error)
    }
  })
};

function userdataoncallback(callback){
  setTimeout( async ()=>{
     const callbackdata = JSON.parse(await fs.promises.readFile("./form_data.json","utf8"))
     callback(null,callbackdata)
  },2000)
}

 


const server = http.createServer(function (req, res) {
  if (req.method === "POST" && req.url === "/submit") {
    let data = "";
    req.on("data", function (chunk) {
      data += chunk;
    });
    req.on("end", function () {
      const formData = JSON.parse(data);
      fs.readFile("./form_data.json", "utf8", function (readError, existingData) {
        if (readError) {
          console.error("Error reading the JSON file:", readError);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading the JSON file");
        } 
        else {
          const jsonData = existingData ? JSON.parse(existingData) : [];
          jsonData.push(formData);
          fs.writeFile("./form_data.json", JSON.stringify(jsonData, null, 2), function (writeError) {
            if (writeError) {
              console.error("Error writing to JSON file:", writeError);
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Error writing to JSON file");
            } else {
              console.log("Form data stored");
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: true }));
            }
          });
        }
      });
    });
  } 
  else if (req.method === "GET" && req.url === "/") {
    fs.readFile("../frontend/signup.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/concert") {
    fs.readFile("../frontend/concert.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/tour") {
    fs.readFile("../frontend/tour.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/contact") {
    fs.readFile("../frontend/contact.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/script.js") {
    fs.readFile("../frontend/script.js", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/styles.css") {
    fs.readFile("../frontend/styles.css", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(content);
      }
    });
  }
  else if (req.method === "GET" && req.url === "/loginform") {
    console.log("Received request for demo.html");
    fs.readFile("../frontend/demo.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } 
  else if (req.method === "GET" && req.url === "/home") {
    //console.log("Received request for home.html");
    // const queryObject = url.parse(req.url, true).query;
    // const role = queryObject.role || 'user';
    fs.readFile("../frontend/home.html", function (readError, content) {
      if (readError) {
        console.error("Error reading the HTML file:", readError);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } 
  else if(req.url==="/api/users" && req.method==="GET"){
                res.writeHead(200,{"Content-Type":"application/json"});
                res.end(JSON.stringify(userData))
          } 
  else if (req.method === "POST" && req.url === "/login") {
    console.log("hiiiiiii")
    let data = "";
    req.on("data", function(chunk) {
      data += chunk;
    });
    req.on("end", function() {
    const formData = JSON.parse(data);
      fs.readFile("./form_data.json", "utf8", function(readError, content) {
        if (readError) {
          console.error("Error reading users.json:", readError);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: false }));
        } else {
          const users = JSON.parse(content);
          // console.log(users)
          const matchedUser = users.find(
            (user) => user.email === formData.email && user.password === formData.password
          );
          if (matchedUser) {
            // res.writeHead(302, { "Location": "/home.html" });
            // res.end();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true ,role:matchedUser.role}));
            console.log("success");
          } else {
           res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({success:false, message:"Wrong user"}))
            console.log("error")
          }
        }
      });
    });
  }
  

  else {
    console.log("nnnn")
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000;
server.listen(port, function () {
  console.log("Server is running on port 3000");
});
// const homeController = { 
//   getMsg:"hello world",
//   getHome:function(req,res){
//     console.log("controller")
//     res.send(homeController.getMsg+","+this.getMsg)
//    },
//    postLogin:function(req,res){
//     const formData = req.body;
//       fs.readFile("./form_data.json", "utf8", function(readError, content) {
//         if (readError) {
//           console.error("Error reading users.json:", readError); 
//           return res.json({success:false,message:"Error on reading user data",error:readError.message})
//         } 
//           const users = JSON.parse(content);
//           const matchedUser = users.find(
//             (user) => user.email === formData.email && user.password === formData.password
//           );
//           if (matchedUser) {        
//             console.log("success");
//             res.json({success:true,data:formData,mesage:"Login success"})
//           } else {      
//             res.json({success:false,message:"user not found"})
//             console.log("error")
//           }
//       });
//     }
//   }
   
//   const adminController = {
//     getUser:function(req,res){
//       fs.readFile("./form_data.json", "utf8", function(readError, content) {
//         if (readError) {
//           console.error("Error reading users.json:", readError);      
//           return res.json({success:false,message:"Error on reading user data",error:readError.message})
//         }
//         console.log("Get user called") 
//         const users = JSON.parse(content);
//         res.json(users);
//       })

//     }

//    }
//    const authorizeMiddleware={
//       loginUser:function(){
//         return function(req,res,next){
//           console.log("Authorized user login middleware called")
//           next()
//         }
//       }
//    }
//   function loginUser(req,res,next){
//     console.log("Authorized user login middleware called")
//     next()
//   }


// app.use((req,res,next)=>{
//   console.log("middleware")
//   next()
// })
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use("/static",express.static("./public"))
// app.post("/login",homeController.postLogin)
// app.get("/",homeController.getHome)
// app.get("/alluser",loginUser,adminController.getUser)



//  app.listen(3001,()=>{
//    console.log("Server running on port 3001")
//  })

