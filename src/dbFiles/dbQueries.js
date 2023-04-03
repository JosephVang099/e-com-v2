const getConnection = require('./db');

const getAllProducts = () => {

    const connection = await getConnection();

    return connection.execute (
        'SELECT productID, productname, productDescription, quantity FROM Products'
    );
};

module.exports = { getAllProducts};