const express = require('express');

const router = express.Router();

const {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
} = require('../controller/employeeController');

router.post('/', createEmployee);

router.get('/get/emp', getEmployees);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

module.exports = router;