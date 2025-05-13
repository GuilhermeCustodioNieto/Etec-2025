const express = require('express')
const app = express()
const cors = require('cors')
const calculatorRouter = require('./controller/CalculatorController.js')

const PORT = 3000

app.use(express.json())
app.use(cors({origin: 'http://localhost:3002'}))

app.use('/calculator', calculatorRouter)

app.listen(PORT, () => {
    console.log(`App rodando em http://localhost:${PORT}`);
    
})