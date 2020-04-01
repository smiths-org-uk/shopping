import sql from './sql';

export default sql({
    host: 'localhost',
    port: 3306,
    database: 'shopping',
    user: 'root',
    password: '',
    connectionLimit: 100,
});
