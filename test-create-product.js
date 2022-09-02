const mysql = require('mysql2/promise')





//Query promisificada
const run = async() => {
        try{
            const connection = await mysql.createConnection({
                host:'localhost',
                user: 'root',
                database: 'cat-products'
        })
        try{
            const [results] = await connection.query('insert into products (product, price) values (?,?)',['product 3', 978])
             await connection.query('insert into categories_products(product_id, category_id) values (?,?)',[results.insertId,1])
            //console.log(results.insertId)
        }catch(err){
            console.log(err)
        }
        }catch(err){
            console.log(err)
    }
}

run()