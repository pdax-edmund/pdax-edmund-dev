import { v4 as uuid } from 'uuid';

let users = [];

//Create or Post function
export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    console.log(`User [${user.username}] is created in the database.`);
};

//Read or Query function
export const readUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users);
}

//Read or Query user by id
export const readUser = (req, res) => {
    res.send(req.params.id)
};

//Update user by id
export const updateUser = (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    console.log(`username has been updated to ${req.body.username}.Email has been updated to ${req.body.email}`)
};

//Delete user by id
export const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    users = users.filter((user) => user.id !== req.params.id);
};

