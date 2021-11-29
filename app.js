const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = 'mongodb://127.0.0.1:27017/wassalni';
app.use('/uploads', express.static(process.cwd() + '/uploads'));

mongoose
  .connect(db, {})
  .then(() => console.log('has been connected'))
  .catch((err) => console.log(err));

app.use(cors());
const io = require('./utilities/socketio').init(server);
io.on('connection', (socket) => {
  socket.emit('count', count);
  console.log('user connected', count);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
require('./routes/user.route')(app);
require('./routes/route.route.js')(app);
require('./routes/voyage.route.js')(app);

var server = require('http').createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT);
