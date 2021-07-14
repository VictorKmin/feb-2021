// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//   user: 'user',
//   password: 'user',
//   database: 'feb-2021',
//   host: 'localhost'
// });
//
// module.exports = connection.promise();

const Sequalize = require('sequelize');
const path = require('path');
const fs = require('fs');

module.exports = (() => {
  let instance;

  const initConnection = () => {
    const client = new Sequalize('feb-2021', 'user', 'user', { dialect: 'mysql' });

    const models = {};
    const modelsDirectory = path.join(process.cwd(), 'node', 'lesson11', 'dataBase', 'MySQL', 'models');

    const readAndSetModels = () => {
      fs.readdir(modelsDirectory, (err, files) => {
        files.forEach((file) => {
          const [modelName] = file.split('.');
          // eslint-disable-next-line import/no-dynamic-require
          const modelFile = require(path.join(modelsDirectory, file));

          models[modelName] = modelFile(client);
        });
      });
    };

    return {
      getModel: (modelName) => models[modelName],
      setModels: () => readAndSetModels(),
      transactionInstance: () => client.transaction()
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection();
      }

      return instance;
    }
  };
})();
