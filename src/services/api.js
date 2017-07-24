import Expo, { SQLite } from  'expo'

const db = SQLite.openDatabase({ name: 'cheeky.db' })

export const showCities = () => {
  db.transaction(tx => {
    tx.executeSql(
      'select * from cities', [], (_, { rows }) => console.log(JSON.stringify(rows))
    )
  },
  null,
  console.log('success')
  )
}

export const newCity = (lat, lng, name, region, country) => {
  console.log(lat)
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists cities (id integer primary key not null, latitude real, longitude real, name text, region text, country text)'
    );
    tx.executeSql(
      'insert into cities (latitude, longitude, name, region, country) values (?, ?, ?, ?, ?)', [lat, lng, name, region, country]
    );
  })
}
