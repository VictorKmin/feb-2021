## How to use sequelize migrations

1) Install sequelize-cli
```bash
npm i sequelize-cli
```

2) Create `.sequelizerc` near app.js file

3) Edit `.sequelizerc`

```js
const path = require('path');

module.exports = {
'config': path.join(process.cwd(), 'config', 'sequelize.config.js'),
'models-path': path.join(process.cwd(), 'dataBase', 'MySQL', 'models'),
'seeders-path': path.join(process.cwd(), 'dataBase', 'MySQL', 'seeders'),
'migrations-path': path.join(process.cwd(), 'dataBase', 'MySQL', 'migrations')
};
```

4) Init your sequelize-cli to auto-generate directories.

```bash
npx sequelize-cli init
```

After that you have to see directories from `.sequelizerc` file

5) Change configs at config file from `.sequelizerc` 
In example it will be at: `path.join(process.cwd(), 'config', 'sequelize.config.js')`

6) Generate you first migration

```bash
npx sequelize-cli migration:generate --name migration-name
```

7) Describe migration file
   
[More info here](https://sequelize.org/master/manual/migrations.html#migration-skeleton)

8) Run migration

```bash
npx sequelize-cli db:migrate
```

If you want to undo the latest changes please run command
```bash
npx sequelize-cli db:migrate:undo
```


If you want to know more please click the link below
[How to create README.md](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Author: [Victor Kmin](https://github.com/VictorKmin)
