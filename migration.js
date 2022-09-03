const db =require('./db')
const fs = require('fs')


const migration = async()=> {
    const connection = await db 

    // const migrations = fs.readdirSync('./migrations')
    // migrations.forEach(migration => {
    //     const m = require('./migrations/'+migration)
    //     m.up(connection)
    // })
    const migrations = fs.readdirSync('./migrations')
    for await (const migration of migrations) {
        const m = require('./migrations/'+migration)
        //USAR 'UP' PRA CRIAR TABLES E 'DOWN' PRA REMOVER TABELAS
        await m.down(connection)
    }
   
}

migration()