
const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)


const test = async()=> {
    //await categories.create(['New category'])
    //await categories.remove(4)
    //await categories.update(2,['New category updated'])
    // const cats = await categories.findAll()
    // console.log(cats)
    //await products.addImage(5,['img test', 'url'])
    const prods = await products.findAll()
    console.log(prods)
}
test()