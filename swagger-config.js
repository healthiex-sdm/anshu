/*
 * @file: swagger-config.js
 * @description: It Contain swagger configurations.
 * @author: Rajat Joshi
 */
import swaggerJsDoc from 'swagger-jsdoc';
// import config from 'config';
// const { swaggerURL, swaggerPort } = config.get('app');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "healthiex Application project apis",
      version: "1.0",
      description: "All api end points",
      contact: {
        name: "Rajat joshi"
      },
      servers: ['http://localhost:3000']
    },
    // produces: ["application/json"],
    // host: `${swaggerPort}`
  },
  apis: [
    "./routes/broker/brokerRegisterRoute.js"
  ],
//   layout: "AugmentingLayout"
};
export default  swaggerJsDoc(swaggerOptions)
