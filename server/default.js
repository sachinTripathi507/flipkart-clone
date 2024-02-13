import {products} from './constant/data.js';
import Product from './model/product-schema.js';


const DefaultData=async()=>{
    try {
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data inserted sucessfully');
    } catch (error) {
        console.log('error while inserting default data',error.mesaage);
    }
}

export default DefaultData;