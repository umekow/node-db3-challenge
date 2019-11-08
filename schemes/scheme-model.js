/*
*find()
*findById(id)
*findSteps(id)
*
*/
const knex = require('knex'); 
const config = require('../knexfile.js'); 
const db = knex(config.development); 

const find = () => {
    return db('schemes');
}

const findById = id => {
    return db('schemes').where({ id }).first(); 
}

const findSteps = id => {
    return db('steps').where({scheme_id : id}).orderBy('step_number')
}

const add = scheme => {
    return db('schemes').insert(scheme)
}

const update = (changes, id) => {
    return db('schemes').where({id}).update(changes);
}

const remove = id => {
    return db('schemes').where({id}).del();
}

const addStep = (step, scheme_id) => {
    return db('steps').insert({...step, scheme_id: scheme_id })
}

module.exports = {
    find, findById, findSteps, add, update, remove, addStep
}