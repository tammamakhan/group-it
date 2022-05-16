const { GroupMember, User, Event } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Event.findAll({
      attributes: [
        'id',
        'host_id',
        'name',
        'description',
        'start',
        'end',
        'street_address',
        'city',
        'state',
        'zip_code'
      ],
      include: [
        {
          model: GroupMember,
          attributes: ['id', 'member_id', 'group_id'],
          include: {
            model: User,
            attributes: ['email']
          }
        },
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
      .then(dbEventData => {
        // pass a single post object into the homepage template
        const events = dbEventData.map(event => event.get({ plain: true }));
        res.render('home-page', { events, loggedIn: req.session.loggedIn });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
//Redirects user to login.
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/create-event', (req, res) => {
     res.render('create-event');
});

router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/home-page', (req, res) => {
  res.redirect('/');
});




module.exports = router; 
