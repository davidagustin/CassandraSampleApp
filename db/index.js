const cassandra = require('cassandra-driver');
const connection = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter:'datacenter1', keyspace: 'test' });

module.exports = connection;
