const Joi = require('joi');

const taskSchema = {
    name: Joi.string().min(3).required(),
    completed: Joi.boolean()
};

// function validateTask(task) {
//     return Joi.validate(task, taskSchema);
// }
// alternate way of writing the function shown below -

exports.validateTask = (task) => Joi.validate(task, taskSchema);