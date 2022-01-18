const mongoose = require('mongoose');
const User = require('@/models/User');

const adminSeed = { username: 'admin@admin.com', password: 'admin' };

const initDB = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
    .then(async () => {
      console.log('DB connected');
      const found = await User.findOne({ username: adminSeed.username });
      if (!found) {
        const admin = new User({ ...adminSeed });
        await admin.save();
      }
    })
    .catch((error) => console.log(error));
};

module.exports = initDB;
