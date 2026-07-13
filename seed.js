require('dotenv').config();
const connectDB = require('./src/config/db');
const Tour = require('./src/models/tour.model');

const data = [
  { title: 'ทัวร์โตเกียว', description: 'เที่ยวโตเกียว 3 วัน', price: 12000, seats: 10 },
  { title: 'ทัวร์เกียวโต', description: 'ชมวัดดัง', price: 15000, seats: 8 },
];

const seed = async () => {
  await connectDB();
  await Tour.deleteMany({});
  await Tour.insertMany(data);
  console.log('Seed done');
  process.exit();
};

seed();
