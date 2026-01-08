(1) npm init playwright

(2) npm install express

(3) npm i react-router-dom

(4) npm install cors

(5) npm install pg

(5) Created new folder called backend

(6) In the backend folder I first created two files named 'app.js' and 'server.js'

(7) I created 4 new folders called 'Controller', 'Model', 'db', 'View'

(8) In the Controller folder I created a new file called rhcp.controller.js

(9) In the db folder I created a new file called index.js

(10) In the Model folder I created a new file called rhcp.model.js

(11) in the View folder I created a new file called rchp.view.js

(12) I created a new db using psql in the terminal:aaron@LAPTOP-1OGMUS8M: createdb rhcp_music_db

(13) psql -d rhcp_music_db

(14) I created the relational database tables (sql_tables_relational.txt) 

(15) I wrote code in the index.js file in the db folder

(16) I wrote the code in the rhcp.model.js file

(17) I wrote the code for the rhcp.controller.js file 

(18) I wrote the cvode for the rhcp.view.js file

(19) I wrote the code for the app.js file

(20) I wrote the code for the server.js file

(21) I ran the seed_rhcp file with the command: psql -d rhcp_music_db -f seed_rhcp.sql

(22) In the Viual Sudio terminal: psql -d rhcp_music_db</br> 
     rhcp_music_db=> \dt </br>
     rhcp_music_db=> SELECT * FROM music LIMIT 5;</br>

(23) I created a .env file and added the sensitive data to it

(24) I added the .env to the .gitignore file

(25) I added the following code to my index.js </br>
  user: process.env.DB_USER, </br>
  host: process.env.DB_HOST, </br>
  database: process.env.DB_NAME, </br>
  password: process.env.DB_PASSWORD, </br>
  port: Number(process.env.DB_PORT),  </br>

(26) 
