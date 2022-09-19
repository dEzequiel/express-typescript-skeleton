# Introduction

REST API skeleton made in Express using TypeScript, implements error handling, middlewares, JWA authorization and file system I/O. All the process was made following [Leifer Mendez](https://github.com/leifermendez) lessons about Express with TypeScript. 


Take a look at my notes made during the API creation process. You can find notes about error handling, paths, middlewares, controllers... Available in [Notion](https://elegant-radium-f35.notion.site/Express-1e905fc2ffa74090a0885ec33f982441)(Spanish).

# **Route:** Entity

## **Get all entities**

This endpoint retrieves all entities.

- **HTTP Request**

  **GET** http://localhost:3001/entity

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom", "email": "michael@hotmail.com" }`

- **Error Response:**

  - **Code:** 500 UNAUTHORIZED <br />
    **Content:** `{ "Internal server error." }`

## **Get entity**

This endpoint retrieves specific entity by id.

- **HTTP Request**

  **GET** http://localhost:3001/entity/id/12

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom", "email": "michael@hotmail.com" }`

- **Error Response:**

  - **Code:** 500 UNAUTHORIZED <br />
    **Content:** `{ "Internal server error." }`

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ Entity with ID=${id} not found" }`

## **Create entity**

This endpoint creates new entity.

- **HTTP Request**

  POST http://localhost:3001/entity

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom", "email": "michael@hotmail.com" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "Entity is already registered." }`

## **Update entity**

This endpoint updates existing entity.

- **HTTP Request**

  PUT http://localhost:3001/entity/id/:id

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "Entity with ID=id updated sucesfully" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ "Entity with ID=id not found" }`

## **Delete entity**

This endpoint deletes existing entity.

- **HTTP Request**

  **DELETE** http://localhost:3001/entity/id/:id

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "Entity with ID=id updated sucesfully" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ "Entity with ID=id not found" }`

# **Route:** Auth

## **Post new user**

This endpoint register new user.

- **HTTP Request**

  **POSTT** http://localhost:3001/auth/register

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom", "email": "michael@hotmail.com"}`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "EMAIL IS ALREADY REGISTERED" }`

## **Login as user**

This endpoint login with existing credentials.

- **HTTP Request**

  **POST** http://localhost:3001/auth/login

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `'user': { id : 12, name : "Michael Bloom", "email": "michael@hotmail.com"}, 'token': 'eyJhbGciOiJIUzI1NiJ9.ZXplQDE.PM-IdWuyutSG2Ab3y-h2aNLpthbb8auH-ddawbK74GM'`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "EMAIL OR PASSWORD ARE INCORRECT." }`


## **Get all users**

This endpoint retrieves all existing users.

**Remember — to use this endpoint you need valid JWT token.**


- **HTTP Request**

  **GET** http://localhost:3001/auth

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `['user': { id : 12, name : "Michael Bloom", "email": "michael@hotmail.com"]`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "SESSION INVALID." }`

## **Errors**

This API uses the following error codes:

| **Error code** | **Mening**                                                                  |
|----------------|-----------------------------------------------------------------------------|
| 200            | OK -- Everything good.                                                      |
| 204            | No content -- Cant't return nothing.                                        |
| 400            | Bad Request -- Your request is invalid.                                     |
| 401            | Unauthorized -- Your JWT token is wrong.                                    |
| 404            | Not Found -- The specified entity could not be found.                       |
| 500            | Internal Server Error -- We had a problem with our server. Try again later. |
                                                                           