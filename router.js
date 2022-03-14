import Router from 'express'
import forumController from "./forum/ForumController.js";
import messageController from "./message/MessageController.js"

const router = new Router()

router.post('/forums', forumController.create)
router.get('/forums', forumController.getAll)
router.get('/forums/:id', forumController.getOne)
router.put('/forums', forumController.update)
router.delete('/forums/:id', forumController.delete)

router.post('/message', messageController.create)
router.get('/messages', messageController.getAll)
router.get('/messages/:forumId', messageController.getAllMessagesForForum)
router.put('/message', messageController.update)
router.delete('/message/:id', messageController.delete)


export default router;