// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const port = process.env.PORT
const exphbs = require('express-handlebars')

// setting static files
app.use(express.static('public'))
app.use('/assets', express.static('assets'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//models
const officeList = require('./models/office.json')

const eventsList = require('./models/events.json')



// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/server', (req, res) => {
  res.render('./server/server', { productsCSS: true })
})


// server
app.get('/sv1121i', (req, res) => {
  res.render('./server/sv1121i', { productCSS: true })
})

app.get('/sv2121i', (req, res) => {
  res.render('./server/sv2121i', { productCSS: true })
})

app.get('/sv2121a', (req, res) => {
  res.render('./server/sv2121a', { productCSS: true })
})

app.get('/sv1120i', (req, res) => {
  res.render('./server/sv1120i', { productCSS: true })
})

app.get('/sv2081a', (req, res) => {
  res.render('./server/sv2081a', { productCSS: true })
})

app.get('/sv1121a', (req, res) => {
  res.render('./server/sv1121a', { productCSS: true })
})

app.get('/sv1120a', (req, res) => {
  res.render('./server/sv1120a', { productCSS: true })
})


app.get('/sv1020i', (req, res) => {
  res.render('./server/sv1020i', { productCSS: true })
})

// storage
app.get('/es2000', (req, res) => {
  res.render('./storage/es2000', { productCSS: true })
})

// GPU AI

app.get('/accelerator', (req, res) => {
  res.render('./accelerator/accelerator', { productsCSS: true })
})


app.get('/gb6181', (req, res) => {
  res.render('./accelerator/gb6181', { productCSS: true })
})

app.get('/gb10181n', (req, res) => {
  res.render('./accelerator/gb10181n', { productCSS: true })
})



app.get('/gb8011', (req, res) => {
  res.render('./accelerator/gb8011', { productCSS: true })
})

app.get('/eb3000', (req, res) => {
  res.render('./accelerator/eb3000', { productCSS: true })
})

// workstation
app.get('/ws5010a', (req, res) => {
  res.render('./workstation/ws5010a', { productCSS: true })
})

//edge

app.get('/ea5165n', (req, res) => {
  res.render('./edge-server/ea5165n', { productCSS: true })
})

app.get('/csr', (req, res) => {
  res.render('CSR', { csrCSS: true })
})

app.get('/esg', (req, res) => {
  res.render('esg2', { esg2CSS: true })
})

// app.get('/esg', (req, res) => {
//   res.render('esg', { esgCSS: true })
// })


app.get('/about', (req, res) => {

  res.render('about', { aboutCSS: true, offices: officeList })
})

app.get('/cooling', (req, res) => {
  res.render('cooling', { coolCSS: true })
})

app.get('/cdi', (req, res) => {
  res.render('cdi', { cdiCSS: true })
})


app.get('/download', (req, res) => {
  res.render('download', { dlCSS: true })
})

app.get('/privacy-and-policy', (req, res) => {
  res.render('privacy-and-policy', { csrCSS: true })
})

// amd

app.get('/amd', (req, res) => {
  res.render('amd', { amdCSS: true })
})

// xeon
app.get('/xeon', (req, res) => {
  res.render('./xeon', { xeonCSS: true })
})

//活動頁

app.get('/events', (req, res) => {
  res.render('events', { eventsCSS: true })
})

//單頁活動頁
app.get('/sc21', (req, res) => {
  res.render('./sc21', { eventCSS: true, events: eventsList })
})

//單頁活動頁
app.get('/sc22', (req, res) => {
  res.render('./sc22', { eventCSS: true, events: eventsList })
})

//單頁活動頁
app.get('/sc23', (req, res) => {
  res.render('./sc23', { eventCSS: true, events: eventsList })
})

//單頁活動頁
app.get('/ocp', (req, res) => {
  res.render('./ocp', { eventCSS: true, events: eventsList })
})

//單頁活動頁
app.get('/computex23', (req, res) => {
  res.render('./computex23', { eventCSS: true, events: eventsList })
})



//modular design
app.get('/modular', (req, res) => {
  res.render('./modular', { modCSS: true })
})



// // Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})