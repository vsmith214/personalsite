const { Education, User } = require('./server/db/models/index');
const db = require('./server/db/index');

const users = [
  {
    email: 'veronica@yahoo.com',
    password: '123'
  },
]

const schools = [{
  school: 'South Carolina State University',
  GPA: 3.0,
  degree: 'Bachelors',
  areaOfStudy: 'CS',
  userId: 1
},
{
  school: 'Georgia Carolina University',
  GPA: 1.7,
  areaOfStudy: 'Mathematics',
  userId: 1,
},
{
  school: 'Coastal Carolina University',
  description: 'bootcamp for women',
  GPA: 2.4,
  degree: 'Doctorate',
  areaOfStudy: 'General',
  userId: 1,
},
];

const buildingUsers = () => Promise.all(users.map(user => User.create(user)));
const buildingEducation = () => Promise.all(schools.map(school => Education.create(school)));

const seed = () =>
  buildingUsers()
    .then(() => buildingEducation());

console.log('Syncing the database,\n Please Wait...');

db.sync({ force: true })
  .then(() => {
    console.log('Seeding the database');
    return seed();
  })
  .then(() => console.log('Seeding successful!'))
  .catch(err => console.error('Could not seed db', err))
  .finally(() => db.close());
