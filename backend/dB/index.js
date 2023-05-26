const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sreelakshmi24:sreelakshmi24@sreelakshmiprem24.l4einlx.mongodb.net/product')
.then(() =>
{
    console.log('Connected to MongoDB');

})
.catch((err) =>
{
    console.log(err);
})
