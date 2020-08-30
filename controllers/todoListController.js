const Todo = require('../models/todoList')
const { default: to } = require('await-to-js')

class TodoController {
    prefix = ''
    getPath(name){
        return `/${this.prefix}/${name}`
    }
    async add(ctx, next) {
        ctx.verifyParams({
            content: {type: 'string', required: true },
            finished: {type: 'boolean', required: true}
        })
        const { content, finished } = ctx.request.body
        const [err, data] = await to( new Todo({content, finished}).save())
        if(err) return ctx.throw(500, err)
        ctx.response.body = data 
    }
    
    // to get all todos
    async find(ctx, next) {
        const data = await Todo.find()
        ctx.response.body = data.join('\n')
    }

    async delete(ctx, next) {
        ctx.verifyParams({
            content: {type: 'string', required: true},
            finished: {type: 'boolean', required: true}           
        })
        const {content, finished} = ctx.request.body
        const data = await Todo.deleteOne({content: content, finished: finished})
        ctx.response.body = data
    }

    async update(ctx, next) {
        ctx.verifyParams({
            content: {type: 'string', required: true },
            finished: {type: 'boolean', required: true}
        })
        const {content, finished} = ctx.request.body
        const [err, data] = await to(Todo.updateOne({content}, {$set: {finished}}) )
        if(err) return ctx.throw(500, err)
        ctx.response.body = data
    }
}

module.exports = new TodoController()