import Expo, { SQLite } from  'expo'

const db = SQLite.openDatabase({ name: 'cheeky.db' })

export const newCity = (lat, lng, name, region, country) => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists cities (id integer primary key not null, latitude real, longitude real, name text, region text, country text)'=
    )
  })

  db.transaction(txt => {
    tx.executeSql(
      'insert into cities (lat, lng, name, region, country) values (?)', [...arguments]
    )
  })
}
