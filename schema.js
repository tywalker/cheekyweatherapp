import Expo, { SQLite } from  'expo'

export const db = SQLite.openDatabase({ name: 'cheeky.db' })

const createCitiesTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists cities (id integer primary key not null, )'
    )
  })
}

createCitiesTable()
