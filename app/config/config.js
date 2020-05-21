const MONGODB = {
    DB_USER: 'dromme_db',
    DB_PASS: 'admin',
    DB_HOST: 'cluster0-eovgw.gcp.mongodb.net/web_db',
  }

const MONGODB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const MONGO_URI = `mongodb+srv://${MONGODB.DB_USER}:${MONGODB.DB_PASS}@${MONGODB.DB_HOST}`;
const PORT = '8081';

module.exports = {MONGODB, MONGODB_OPTIONS, MONGO_URI, PORT};