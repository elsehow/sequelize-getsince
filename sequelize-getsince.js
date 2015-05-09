moment = require('moment')

function getEntriesSince (timeInPast, sequelizeModel, successCb, errorCb) {
  data = sequelizeModel.findAll({
    where: {
      indra_time: {
        gt: moment(timeInPast).format()
      }
    }
  })
  .then(successCb)
  .error(errorCb)
}


module.exports = getEntriesSince

