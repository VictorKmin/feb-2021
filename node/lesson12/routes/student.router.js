const router = require('express').Router();
const { Op } = require('sequelize');

const db = require('../dataBase/MySQL').getInstance();

router.get('/', async (req, res) => {
  const Student = db.getModel('Student');

  const { perPage = 20, page = 1, ...otherOption } = req.query;

  const offset = perPage * (page - 1);
  const where = _userQueryBuild(otherOption);

  // const studik = await Student.findOne({
  //   attributes: [
  //     'name',
  //     'age'
  //   ],
  //   where: {
  //     id: req.query.id
  //   }
  // });

  const students = await Student.findAll({
    where,
    raw: true,
    nest: true,
    limit: +perPage,
    offset
  });

  res.json(students);
});

router.post('/', async (req, res, next) => {
  const transaction = await db.transactionInstance();
  try {
    const Student = db.getModel('Student');

    const newVar = await Student.create(req.body, { transaction, raw: true });

    const normalizedResponse = newVar.get();

    // throw new Error('XXX')

    await Student.update(
      { age: 99 },
      {
        where: { id: normalizedResponse.id },
        transaction
      }
    );

    await transaction.commit();

    res.json();
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
});

module.exports = router;

function _userQueryBuild(otherOption) {
  let where = {};

  if (otherOption['age.gte']) {
    where = {
      ...where,
      age: {
        [Op.gte]: otherOption['age.gte']
      }
    };
  }
  if (otherOption['age.lte']) {
    where = {
      ...where,
      age: {
        [Op.lte]: otherOption['age.lte']
      }
    };
  }
  if (otherOption.name) {
    where = {
      ...where,
      name: {
        [Op.like]: otherOption.name
      }
    };
  }

  return where;
}

// const i = {
//   name: 'Dimas',
//   age: 22,
//   'Car.model': 'Tsla',
//   'Car.price': '999999'
// }
//
// const i2 = {
//   name: 'Dimas',
//   age: 22,
//   Car: {
//     model: 'Tsla',
//     proce
//   }
// }
