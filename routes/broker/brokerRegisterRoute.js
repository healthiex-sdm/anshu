import express from 'express';
// var router = express.Router();

let router = express.Router();
let Controller = require('../../controllers/broker/brokerRegistration')

/**
 * @swagger
 * /register:
 *  post:
 *   tags: ["broker"]
 *   summary:  register broker
 *   description: api used to register broker
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: 
 *      - in: body
 *        name: register
 *        description:  Broker registration.
 *        schema:
 *         type: object
 *         required:
 *          - registration
 *         properties:
 *           firstName:
 *             type: string
 *             required:
 *           middleName:
 *             type: string
 *             required:
 *           lastName:
 *             type: string
 *             required:
 *           address1:
 *             type: string
 *             required:
 *           address2:
 *             type: string
 *             required:
 *           phone:
 *             type: number
 *             required:
 *           country:
 *             type: string
 *             required:
 *           state:
 *             type: string
 *             required:
 *           city:
 *             type: string
 *             required:
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:
 *           bankaccountName:
 *             type: string
 *             required:
 *           bankAccountNumber:
 *             type: number
 *             required:
 *           zipcode:
 *             type: number
 *             required:
 *           authCode:
 *             type: string
 *             required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

router.post("/register", Controller.register)






/* Post users login code using email. */
// router.post("/sendCode", Controller.emailAuthCode)

// /* Post users Login. */
// router.post("/login", Controller.login)

// /* Post add new group. */
// router.post("/addgroup", Controller.addgroup)



export default router;
