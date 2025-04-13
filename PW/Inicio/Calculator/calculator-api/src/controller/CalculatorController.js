const express = require('express')
const CalculatorService = require('../service/CalculatorService')
const ControllerExceptions = require('./exceptions/ControllerExceptions')
const router = express.Router()

const calulatorService = new CalculatorService()
const controllerExceptions = ControllerExceptions

router.post('/calculate', (req, res) => {
    try{
        const result = calulatorService.calculate(req.body.num1, req.body.num2, req.body.operator)

        res.json({result: result})
    } catch(err) {
        res.status(500).json({error: controllerExceptions.internalServerError})
    }
})

router.post('/changeSign', (req, res) => {
    try{
        const result = calulatorService.changeSign(req.body.num)
        res.json({result: result})
    }
    catch(err) {
        res.status(500).json({error: controllerExceptions.internalServerError})
    }
})

router.post('/porcentage', (req, res) => {
    try{
        const result = calulatorService.porcentage(req.body.num)
        res.json({result: result})

    }catch(err) {
        res.status(500).json({error: controllerExceptions.internalServerError})
    }
    
})

router.get('/clear', (req, res) => {
    try{
        const result = calulatorService.clear()
        res.json({result: result})
    }catch(err) {
        res.status(500).json({error: controllerExceptions.internalServerError})
    }
})

router.post('/quintanilia', (req, res) => {
    try{
        const resultado = eval(req.body.calculo)
        res.json({result: resultado})
    }catch(err) {
        res.status(500).json({error: controllerExceptions.internalServerError})
    }
})



module.exports = router 