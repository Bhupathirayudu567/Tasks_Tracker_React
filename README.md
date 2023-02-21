# INTRODUCTION
This is a Task_Tracker webpage created using React and also JSON Server.JSON server is used as a Backend.In this webpage we can add our daily tasks which we are going to do.After completion of the tasks we can delete the tasks also.This project is purely based on JavaScript and React.The side colour appearing in every task acts as remainder.It tells us that the task is true or false.If it is in green colour our task is true or else it is false.


STEPS TO CREATE A REACT-APP
----------------------------
first install node js <br>
npx create-react-app my-app <br>
cd my-app <br>
npm start<br>

STEPS TO PRODUCTION BUILD SERVER:
-------------------------------------
npm run build  <br>
npm install -g serve <br>
set-ExecutionPolicy RemoteSigned -Scope CurrentUser <br>
Get-ExecutionPolicy <br>
Get-ExecutionPolicy -list <br>
 serve -s build -l 8000 (the port number is your wish) <br>
 We can see our production build server in the url https://localhost:8000

STEPS TO CREATE BACKEND JSON SERVER :
----------------------------------------
Go to package.json file <br>
Go to Scripts and Add element <br> 
 "server":"json-server --watch db.json --port 5000" (here port number is your choice) <br>
A db.json file will be added to our project which act as a database where the content which is going to be added here will be rendered in the server. <br>
We can see our Backend  server in the url https://localhost:5000

My Project Output:
--------------------
<p align="center">
  <img width="460" height="300" src="">
</p>
