const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors=require('cors')
const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter=require('./routes/article.route')

dotenv.config()
const app = express();
//BodyParser Middleware
app.use(express.json());
app.use(cors())

//ssl
var forceSSL = require('express-force-ssl');
const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./certification/key.pem'),
    cert: fs.readFileSync('./certification/cert.pem')
  };

 app.use(forceSSL); 
  var secureServer = https.createServer(options, app);
 // secureServer.listen(443)

 // const server = https.createServer(options, app);  

 // Redirect HTTP to HTTPS
const httpApp = express();
httpApp.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect(301, `https://${req.hostname}:${process.env.HTTPS_PORT}${req.url}`);
  }
  next();
});

httpApp.listen(process.env.PORT, () => {
  console.log(`HTTP server listening on port ${process.env.PORT}`);
});

app.use(forceSSL);


mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.get("/",(req,res)=>{
res.send("bonjour");
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles',articleRouter);


secureServer.listen(process.env.HTTPS_PORT, () => {
  console.log(`Server is listening on port ${process.env.HTTPS_PORT}`);
});

module.exports = app;