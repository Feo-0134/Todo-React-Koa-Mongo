const Router = require('koa-router')
const todoListController = require('../controllers/todoListController')

const router = new Router({
	prefix: '/api'
})

todoListController.prefix ='todo'

router
.post(todoListController.getPath(`add`), todoListController.add)
.get(todoListController.getPath(`find`), todoListController.find)
.post(todoListController.getPath(`delete`), todoListController.delete)
.post(todoListController.getPath(`update`), todoListController.update)

module.exports = router