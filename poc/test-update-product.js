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
            const [results, fields] = await connection.query('update products set product= ?, price= ? where id = ?', ['product updated',7803, 5])
            console.log(results, fields)
        }catch(err){
            console.log(err)
        }
        }catch(err){
            console.log(err)
    }
}

run()