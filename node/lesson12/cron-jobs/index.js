const cron = require('node-cron');

const calculateStudentPoints = require('./calculateStudentPoints');

module.exports = () => {
  cron.schedule('*/30 * * * * *', async () => {
    console.log(`Cron iteration start at ${new Date().toISOString()}`);
    await calculateStudentPoints();
    console.log(`Cron iteration finish at ${new Date().toISOString()}`);
  });
};
