const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
  const database = client.database("nota");
  const container = database.container("notaContDb");

  const { userId, id, name, description } = req.body;
  const newItem = { userId, id, name, description };

  try {
    const { resource: createdItem } = await container.items.create(newItem);
    context.res = {
      status: 201,
      body: createdItem,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Error creating item",
    };
  }
};
