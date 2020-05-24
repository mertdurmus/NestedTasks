var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    subTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
})

module.exports = mongoose.model('Task', taskSchema)





//https://mongoosejs.com/docs/populate.html
//https://stackoverflow.com/questions/24693458/how-to-find-a-sub-document-using-mongoose


// https://stackoverflow.com/questions/54790558/how-to-save-nested-array-of-objects-data-using-mongoose
//https://stackoverflow.com/questions/43024285/embedding-schemas-is-giving-error/43024503
// https://zellwk.com/blog/mongoose-subdocuments/
//https://zellwk.com/blog/mongoose-subdocuments/