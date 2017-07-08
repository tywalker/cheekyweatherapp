const Realm = require('realm');

const City = {
  name: 'City',
  primaryKey: 'id',
  properties: {
    id:  'int',
    name: { type: 'string', indexed: true},
    country: 'string',
    lon: 'int',
    lat: 'int',
  },
};

module.exports = new Realm({ schema: [City], schemaVersion: 1});
