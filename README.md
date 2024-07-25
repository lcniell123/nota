# nota

## Overview

This project demonstrates a CRUD (Create, Read, Update, Delete) application built with React for the frontend and Azure Functions for the backend, using Azure Cosmos DB for data storage.

### Features

- **Create Item**: Add new items to the Cosmos DB.
- **Read Items**: Retrieve and display items from the Cosmos DB.
- **Update Item**: Modify existing items in the Cosmos DB.
- **Delete Item**: Remove items from the Cosmos DB.

## File Structure
```
my-azure-app/
│
├── azure-functions/
│ ├── CreateItem/
│ │ ├── index.js
│ │ ├── function.json
│ ├── ReadItems/
│ │ ├── index.js
│ │ ├── function.json
│ ├── UpdateItem/
│ │ ├── index.js
│ │ ├── function.json
│ ├── DeleteItem/
│ │ ├── index.js
│ │ ├── function.json
│ ├── local.settings.json
│ ├── host.json
│ ├── proxies.json
│ ├── .gitignore
│ └── package.json
│
├── react-app/
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ ├── src/
│ │ ├── components/
│ │ │ ├── CreateItemComponent.js
│ │ │ ├── ReadItemsComponent.js
│ │ │ ├── UpdateItemComponent.js
│ │ │ ├── DeleteItemComponent.js
│ │ ├── services/
│ │ │ ├── apiService.js
│ │ ├── App.js
│ │ ├── index.js
│ ├── .gitignore
│ ├── package.json
│ └── README.md
│
├── .gitignore
├── README.md
└── package.json
```
perl
Copy code

## Prerequisites

- Node.js
- Azure Account
- Azure CLI

## Setup

### Azure Functions

1. **Navigate to the `azure-functions` directory:**

    ```bash
    cd azure-functions
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up local settings:**

    Create a `local.settings.json` file in the `azure-functions` directory with the following content:

    ```json
    {
      "IsEncrypted": false,
      "Values": {
        "AzureWebJobsStorage": "UseDevelopmentStorage=true",
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "COSMOS_DB_CONNECTION_STRING": "your-cosmos-db-connection-string"
      }
    }
    ```

4. **Start the Azure Functions locally:**

    ```bash
    func start
    ```

### React Application

1. **Navigate to the `react-app` directory:**

    ```bash
    cd react-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the React application:**

    ```bash
    npm start
    ```

## Usage

### Create Item

The `CreateItemComponent` allows you to add a new item to the Cosmos DB.

### Read Items

The `ReadItemsComponent` fetches and displays all items from the Cosmos DB.

### Update Item

The `UpdateItemComponent` allows you to modify an existing item in the Cosmos DB.

### Delete Item

The `DeleteItemComponent` allows you to remove an item from the Cosmos DB.

## Configuration

Ensure you set the correct `COSMOS_DB_CONNECTION_STRING` in the `local.settings.json` file for local development. For production, set the environment variables in your Azure Function App settings.

## Deployment

To deploy the Azure Functions and React application, follow these steps:

1. **Deploy Azure Functions:**

    ```bash
    cd azure-functions
    func azure functionapp publish <your-function-app-name>
    ```

2. **Build and deploy React application:**

    ```bash
    cd react-app
    npm run build
    ```

    Follow your preferred method to deploy the static files in the `build` directory to your web server or Azure Static Web Apps.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests.

## License

This project is licensed under the MIT License.
