const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://zrdbykwccmtnsrkkwnqk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZGJ5a3djY210bnNya2t3bnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NTIzOTMsImV4cCI6MjAxODQyODM5M30.wN7ayo9IoFhGMpf98QP6c_tB_l0qf7lIjnjJ9ciVzkw'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);
app.get('/', (req, res) => {

    const requestedPage = req.query.page; 
    if (requestedPage === 'Home') {
        res.sendFile('InstaChefHome.html', { root: __dirname });
    } else if (requestedPage === 'About us') {
        res.sendFile('AboutUs.html', { root: __dirname });
    } else if (requestedPage === 'Help') {
        res.sendFile('FAQ.html', { root: __dirname });
    } else {
        // Default to home page if no specific page is requested
        res.sendFile('InstaChefHome.html', { root: __dirname });
    }
});

// app.get('/Category', async (req, res) => {
//     console.log(`Getting Category count`)

//     const { data, error } = await supabase
//         .from('InstaChef')
//         .select();

//     if (error) {
//         console.log(error)
//     } else if (data) {
//         res.send(data)
//     }
// })

// app.get('/category_chosen', async (req, res) => {
//     console.log(`getting category chosen`)

//     const { data, error } = await supabase
//         .from('InstaChef')
//         .select();

//     if (error) {
//         console.log(error)
//     } else if (data) {
//         res.send(data)
//     }
// })

// app.post('/category_chosen', async (req, res) => {
//     console.log('Adding Category')

//     var userChoice = req.body.userChoice;

//     const { data, error } = await supabase
//         .from('InstaChef')
//         .insert([
//             { 'Category': userChoice, 'category_choice': userChoice }
//         ])
//         .select();

//     console.log(data)
//     res.header('Content-type', 'application/json')
//     res.send(data)
// })



app.listen(port, () => {
    console.log('Welcome to InstaChef! ')
})