const _mo = [
    {"id": 1, "name": "Новоорская РБ", "INN": 1234},
    {"id": 2, "name": "Грачевская РБ", "INN": 5647},
    {"id": 3, "name": "Оренбургская РБ", "INN": 1457},
    {"id": 4, "name": "Бузулукская РБ", "INN": 1234},
    {"id": 5, "name": "Новоорская РБ", "INN": 1234},
    {"id": 6, "name": "Новоорская РБ", "INN": 1234},
    {"id": 7, "name": "Новоорская РБ", "INN": 1234},
    {"id": 9, "name": "Новоорская РБ", "INN": 1234},
    {"id": 9, "name": "Новоорская РБ", "INN": 1234},
    {"id": 10, "name": "Новоорская РБ", "INN": 1234}
  ]
  
  export default {
    searchMO (mo, cb) {
      setTimeout(() => {
        cb( _mo.filter(function(item) {
            // return item.name.indexOf(mo.toLowerCase)
            console.log('item.name=', item.name)
            if ( item.name == mo ) {
                console.log('Нашел', item.name)
            }
            return item.name == mo
          }))
        }, 100)
      },
  
  }