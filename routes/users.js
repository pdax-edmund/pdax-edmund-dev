import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Edmund",
        lastName: "Nietes",
        email: "edmund.nietes@pdax.ph"
    },
    {
        firstName: "Linus",
        lastName: "Torvalds",
        email: "linus.torvalds@pdax.ph"
    },
    {
        firstName: "Kevin",
        lastName: "Mitnick",
        email: "kevin.mitnick@pdax.ph"
    }
]

router.get('/', (req, res) => {
    //console.log(users)
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    // console.log('user');
    users.push(user);

    res.send('New user successfully added');
});

export default router;