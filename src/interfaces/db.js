const mysql = require('mysql');

const sql = {};
let pool;

sql.close = () => {
    if (pool) pool.end();
    pool = null;
};

sql.query = (sql) => {
    return new Promise(((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (err) reject(err);

            con.query(sql, (error, results) => {
                if (error) reject(error);

                con.release();
                resolve(results);
            });
        });
    }));
};

process.on('beforeExit', () => {
    sql.close();
});

const db = (config) => {
    pool = mysql.createPool(config);
    return sql;
}

module.exports = db({
    host: '127.0.0.1',
    port: 3306,
    database: 'shopping',
    user: 'shopping',
    password: '',
    connectionLimit: 100,
});
