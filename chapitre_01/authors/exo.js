const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
// app.get('/', (req, res) => {
//     res.send('Authors API');
//   });

// app.get('/bonjour/:name/age/:age', (req, res) => {
//     res.send(`Bonjour ${req.params.name} ! Tu as ${req.params.age} ans.`);
// });

// app.get('/hello', (req, res) => {
//     res.send('Hello world!');
// });

// app.get('/authors/:authorsname/books', (req, res) => {
//     let authors = req.params.authorsname;
//     let authorsname = "";
//     let books= "";

//     switch (authors) {
//         case "1":
//             authorsname = "Lawrence Nowell , uk";
//             books = " Beowulf"
//             break;
        
//         case "2":
//             authorsname = "William Shakespeare , uk";
//             books = " Hamlet, Othello, Romeo and Juliet, MacBeth"
//             break;

//         case "3":
//             authorsname = "Charles Dickens , us";
//             books = " Oliver Twist, A Christmas Carol"
//             break;

//         case "4":
//             authorsname ="Oscar Wilde , uk";
//             books=" The Picture of Dorian Gray, The Importance of Being Earnest"

//         default:
//             authorsname = "not found"
// 			books = "none"
//             break;
//     }
//     res.send( authorsname+","+ books);
//     });
    

    


app.get('/authors/:id', (req, res) => {
    let authors = req.params.id;
    let authorsname = "";
    let books= "";
    let nationality =""

    switch (authors) {
        case "1":
            authorsname = "Lawrence Nowell ";
            nationality ="UK"
            books = " Beowulf"
            break;
        
        case "2":
            authorsname = "William Shakespeare ";
            nationality="UK"
            books = " Hamlet, Othello, Romeo and Juliet, MacBeth"
            break;

        case "3":
            authorsname = "Charles Dickens ";
            nationality="US"
            books = " Oliver Twist, A Christmas Carol"
            break;

        case "4":
            authorsname ="Oscar Wilde ";
            nationality="UK"
            books=" The Picture of Dorian Gray, The Importance of Being Earnest"

        default:
            authorsname = "not found"
			books = "none"
            break;
    }
    

     res.json({
        authors: authorsname,
        nationality: nationality,
       
    });
});

app.get('/authors/:id/books', (req, res) => {
    let authors = req.params.id;
    let authorsname = "";
    let books= "";
    let nationality =""

    switch (authors) {
        case "1":
            authorsname = "Lawrence Nowell ";
            nationality ="UK"
            books = " Beowulf"
            break;
        
        case "2":
            authorsname = "William Shakespeare ";
            nationality="UK"
            books = " Hamlet, Othello, Romeo and Juliet, MacBeth"
            break;

        case "3":
            authorsname = "Charles Dickens ";
            nationality="US"
            books = " Oliver Twist, A Christmas Carol"
            break;

        case "4":
            authorsname ="Oscar Wilde ";
            nationality="UK"
            books=" The Picture of Dorian Gray, The Importance of Being Earnest"

        default:
            authorsname = "not found"
			books = "none"
            break;
    }
    

     res.json({
        
        books:[books]
    });
});
    
    