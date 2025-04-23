// This script needs to be run in a Node.js environment with the 'mongodb' driver installed.
// Make sure you have run 'npm install mongodb' in your project directory.

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config(); // Load environment variables from a .env file

// Access your MongoDB connection string from environment variables
const uri = process.env.MONGO_URL;

// Replace with the name of your database and collection
const dbName = 'Mini-project'; // Assuming your database name is 'Mini-project'
const collectionName = 'pesticides';

// The name or a unique identifier of the pesticide you want to update
const pesticideIdentifier = 'Imidacloprid'; // You can change this

// The environmental impact data you want to add
const environmentalImpact = {
    Soil: {
      Impact_Level: "Moderate",
      Notes: "Persistent in soil",
    },
    Water: {
      Impact_Level: "High",
      Notes: "Contaminates groundwater",
    },
    Wildlife: {
      Impact_Level: "Moderate",
      Notes: "Harmful to birds",
    },
    "Beneficial Insects": {
      Impact_Level: "High",
      Notes: "Very toxic to bees",
    },
  };
  
  
  
  
  
  

async function updatePesticideEnvironmentalImpact() {
  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Find the pesticide document
    const query = { Name: pesticideIdentifier }; // You can adjust the query based on a unique field
    const pesticide = await collection.findOne(query);

    if (!pesticide) {
      console.log(`Pesticide with identifier "${pesticideIdentifier}" not found.`);
      return;
    }

    const updateResult = await collection.updateOne(
      { _id: pesticide._id },
      { $set: { 'Environmental Impact': environmentalImpact } }
    );

    console.log('Update Result:', updateResult);

    if (updateResult.modifiedCount > 0) {
      console.log(`Successfully added environmental impact data for "${pesticideIdentifier}".`);
    } else {
      console.log(`No changes made for "${pesticideIdentifier}".`);
    }
  } catch (error) {
    console.error('Error updating pesticide:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Disconnected from MongoDB');
    }
  }
}

// Run the script
updatePesticideEnvironmentalImpact();