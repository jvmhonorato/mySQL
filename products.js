const init = connection =>{
    const create = async(data)=>{
        const conn = await connection
        await conn.query('insert into products (product, price) values(?)',data)
    } 
    const remove = async(id) => {
        const conn = await connection
        await conn.query('delete from products where id = ? limit 1', [id])
    }
    const update = async(id, data) => {
        const conn = await connection
        await conn.query('update products set product = ? where id = ?', [...data, id])
     }
     const findAll = async()=> {
        const conn = await connection
       const [results] = await conn.query('select * from products')
       const productsIds = results.map(product => product.id).join(',')
       const [images] = await conn.query('select * from images where product_id in ('+ productsIds +')')

       console.log(images)

       return results
     }
     const addImage = async(productId, data) => {
        const conn = await connection
        await conn.query('insert into images (product_id, description, url) values (?,?,?)', [productId, ...data])
     }
    return {
        create,
        remove,
        update,
         findAll,
         addImage
    }
}
module.exports = init
