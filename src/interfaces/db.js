import {sql} from '@harmelodic/interfaces';

export default sql({
    host: '127.0.0.1',
    port: 3306,
    database: 'shopping',
    user: 'shopping',
    password: '',
    connectionLimit: 100,
});
