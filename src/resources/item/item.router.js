import {Router} from 'express'
import controllers from './item.controllers'

const router = Router()

// api/item/
router.route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// api/item/:id

router.route('/:id')
  .put(controllers.updateOne)
  .get(controllers.getOne)
  .delete(controllers.removeOne)

export default router
