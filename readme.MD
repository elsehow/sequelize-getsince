
## sequelize-getEntriesSince

A simple wrapper for Sequelize that gets all entries of type `sequelizeModel` since some time `timeInPast`


## getEntriesSince(timeInPast, sequelizeModel, successCb, errorCb)

## example usage

```
getSince = require('getSince')

// our db
sequelize_db = Sequelize(...)
SomeSequelizeModel =  sequelize_db.define(...)

timeInPast = moment().subtract(24, 'hours')

getSince(
	timeInPast
  , SomeSequelizeModel
  // success cb
  , function handleRecentReadings(data) {
    console.log('got it!', data)
    sequelize_db.close()
  }
  // error cb
  , function(err) { 
    console.log('error!', err) 
    sequelize_db.close()
  })
```
