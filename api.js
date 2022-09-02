const db = require('./db')
const categories = require('./categories')(db)


const test = async()=> {
    //await categories.create(['New category'])
    //await categories.remove(4)
    //await categories.update(2,['New category updated'])
    const cats = await categories.findAll()
    console.log(cats)
}

test()