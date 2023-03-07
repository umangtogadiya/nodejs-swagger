# Nodejs Swagger Implementation

1. Install necessary packages:
```
npm install express swagger-ui-express swagger-jsdoc @types/swagger-ui-express @types/swagger-jsdoc
```
- express - https://www.npmjs.com/package/express
- swagger-ui-express - https://www.npmjs.com/package/swagger-ui-express
- swagger-jsdoc - https://www.npmjs.com/package/swagger-jsdoc

2. Create a swagger.yaml file that describes your API in the OpenAPI format. You can use a YAML editor like Swagger Editor or a JSON editor like JSON Editor Online to create the file.


```
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Service", // You can change the title
      version: "1.0.1",
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [{ url: "http://localhost:3001/api/", description: "Version 1" }], // Change this to as your requirements or you can remove this
  },
  apis: ["./src/utils/*.yaml"], // this'll import all yaml file from this folder you can change file format and use from here
};
```

3. Create yaml file with the following structure

```
tags:
  - name: Users Simple
    description: User Information
/user-list:
  get:
    tags:
      - Users Simple
    summary: Users Listing
    description: User Listing Based on Free API
    # if body contains value then use below code ----- Start ->>>>>>>>>
    # requestBody:
    #   required: true
    #   content:
    #     application/json:
    #       schema:
    #         type: object
    #         properties:
    #           id:
    #             type: number
    #             example: 200
    # End ->>>>>>>>>
    responses:
      200:
        description: User Client Info Listing
        # if response return data then use below code ----- Start ->>>>>>>>>
        # content:
        #   application/json:
        #     schema:
        #       type: object
        #       properties:
        #         message:
        #           type: string
        #           example: User Listing fetched from database
        #         data:
        #           type: object
        #           properties:
        #             users:
        #               type: array
        #               example: [{user1}, {user2}, {user3}]
        # End ->>>>>>>>>
      422:
        description: Invalid Input Arguments
      500:
        description: Something went wrong!
```

4. run project with this command

```
npm run dev
```

5. Project will run on https://localhost:3000/api/docs/ 
