const { v4: uuidv4 } = require('uuid');

let users = [];

const getUsers = (req, res) => {
    //res.send('Hello user page');
    res.send(users);
};

const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(users);

};

const getSingleUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    res.send(foundUser);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);

    res.send(users);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);

    const { firstName, lastName, age } = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(user);
};

module.exports = {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser
};