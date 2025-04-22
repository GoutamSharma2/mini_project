require('dotenv').config();
const mongoose = require("mongoose");
const Pesticide = require("./models/Pesticide"); // Adjust path if needed
const Crop = require("./models/Crop");       // Adjust path if needed

const wheatPesticideData = [
  {
    "Name": "Tebuconazole",
    "Active Ingredients": "Tebuconazole",
    "Application Method": "Foliar spray",
    "Target Species": "Rust, powdery mildew, Septoria leaf blotch",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Use NIOSH-approved respirator",
      "Wear protective eyewear",
      "Wash hands before eating/drinking",
      "Remove contaminated clothing immediately"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Moderate", "Notes": "Moderately persistent." },
      "Water": { "Impact Level": "Moderate", "Notes": "Potential groundwater contamination." },
      "Wildlife": { "Impact Level": "Low", "Notes": "Low vertebrate toxicity." },
      "Beneficial Insects": { "Impact Level": "Low", "Notes": "Low impact on pollinators." }
    },
    "Usage Instructions": [
      "Apply 250-500 ml/ha in 300-400 L water",
      "Apply at first disease symptoms",
      "Repeat after 14-21 days if needed",
      "Do not apply during flowering",
      "Avoid spraying in windy conditions"
    ],
    "Advantages": [
      "Systemic triazole fungicide",
      "Curative and protective action",
      "Long residual activity",
      "Rainfast within 2 hours"
    ],
    "Disadvantages": [
      "Resistance risk (DMI fungicide)",
      "35-day PHI required",
      "Can inhibit plant growth at high rates",
      "Skin/eye irritant"
    ]
  },
  {
    "Name": "Lambda-Cyhalothrin",
    "Active Ingredients": "Lambda-Cyhalothrin",
    "Application Method": "Foliar spray",
    "Target Species": "Aphids, armyworms, cereal leaf beetles",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Use respirator if spraying indoors",
      "Wear protective eyewear",
      "Wash hands before eating/drinking",
      "Remove contaminated clothing immediately"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Moderate", "Notes": "Moderately persistent." },
      "Water": { "Impact Level": "High", "Notes": "Highly toxic to aquatic life." },
      "Wildlife": { "Impact Level": "High", "Notes": "Toxic to birds." },
      "Beneficial Insects": { "Impact Level": "High", "Notes": "Kills pollinators." }
    },
    "Usage Instructions": [
      "Apply 50-75 ml/ha in 200-300 L water",
      "Target pest colonies directly",
      "Apply at first sign of infestation",
      "Avoid spraying during flowering",
      "Reapply after 14 days if needed"
    ],
    "Advantages": [
      "Fast-acting pyrethroid",
      "Low mammalian toxicity",
      "Controls resistant pests",
      "Rainfast within 1 hour"
    ],
    "Disadvantages": [
      "Highly toxic to bees",
      "Resistance development risk",
      "Broad-spectrum (kills beneficials)",
      "PHI of 30 days required"
    ]
  },
  {
    "Name": "Glyphosate",
    "Active Ingredients": "Glyphosate",
    "Application Method": "Pre-planting spray",
    "Target Species": "Annual and perennial weeds",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Avoid inhalation of spray mist",
      "Wash hands after handling",
      "Do not apply before rain",
      "Keep away from water sources"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Low", "Notes": "Binds to soil particles." },
      "Water": { "Impact Level": "Moderate", "Notes": "Runoff concerns." },
      "Wildlife": { "Impact Level": "Low", "Notes": "Low vertebrate toxicity." },
      "Beneficial Insects": { "Impact Level": "Low", "Notes": "Minimal direct impact." }
    },
    "Usage Instructions": [
      "Apply 1-2 kg a.i./ha in 200-300 L water",
      "Apply to actively growing weeds",
      "Allow 7 days before planting wheat",
      "Use drift-reduction nozzles",
      "Do not apply to stressed weeds"
    ],
    "Advantages": [
      "Non-selective herbicide",
      "Controls glyphosate-resistant weeds when used properly",
      "No soil residual activity",
      "Cost-effective"
    ],
    "Disadvantages": [
      "Increasing weed resistance",
      "Drift damage to nearby crops",
      "7-day pre-plant interval",
      "Controversial environmental profile"
    ]
  },
  {
    "Name": "Chlorpyrifos",
    "Active Ingredients": "Chlorpyrifos",
    "Application Method": "Seed treatment",
    "Target Species": "Wireworms, aphids, termites",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Use NIOSH-approved respirator",
      "Avoid skin contact",
      "Wash work clothes separately",
      "Do not use treated seed for feed"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "High", "Notes": "Persistent in soil." },
      "Water": { "Impact Level": "High", "Notes": "Runoff and leaching risk." },
      "Wildlife": { "Impact Level": "High", "Notes": "Highly toxic to birds." },
      "Beneficial Insects": { "Impact Level": "High", "Notes": "Toxic to pollinators." }
    },
    "Usage Instructions": [
      "Apply 500-750 ml/100 kg seed",
      "Treat in well-ventilated area",
      "Allow treated seed to dry before planting",
      "Use proper seed treatment equipment",
      "Observe all buffer zone requirements"
    ],
    "Advantages": [
      "Effective against soil pests",
      "Long-lasting protection",
      "Reduces need for foliar sprays",
      "Controls multiple pest species"
    ],
    "Disadvantages": [
      "Highly toxic to aquatic organisms",
      "Banned in many countries",
      "60-day PHI required",
      "Potential neurotoxic effects"
    ]
  },
  {
    "Name": "Mancozeb",
    "Active Ingredients": "Mancozeb",
    "Application Method": "Foliar spray",
    "Target Species": "Leaf rust, Septoria, powdery mildew",
    "Safety Precautions": [
      "Wear waterproof gloves",
      "Use dust mask when mixing",
      "Avoid contact with eyes",
      "Wash contaminated skin immediately",
      "Do not eat/drink while applying"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Low", "Notes": "Short half-life." },
      "Water": { "Impact Level": "Low", "Notes": "Binds to sediments." },
      "Wildlife": { "Impact Level": "Low", "Notes": "Low vertebrate toxicity." },
      "Beneficial Insects": { "Impact Level": "Low", "Notes": "Minimal impact." }
    },
    "Usage Instructions": [
      "Apply 1.5-2 kg/ha in 500 L water",
      "Begin applications preventatively",
      "Reapply every 7-10 days",
      "Ensure complete leaf coverage",
      "Do not apply with oil-based products"
    ],
    "Advantages": [
      "Multi-site fungicide action",
      "Prevents resistance development",
      "Works in cool/wet conditions",
      "Compatible with many pesticides"
    ],
    "Disadvantages": [
      "Leaves visible residue",
      "No curative action",
      "14-day PHI required",
      "Eye/skin irritant"
    ]
  },
  {
    "Name": "2,4-D",
    "Active Ingredients": "2,4-Dichlorophenoxyacetic acid",
    "Application Method": "Post-emergence spray",
    "Target Species": "Broadleaf weeds",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Use face shield + goggles",
      "Avoid drift to sensitive crops",
      "Wash equipment thoroughly",
      "Do not apply during temperature inversions"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Low", "Notes": "Short half-life." },
      "Water": { "Impact Level": "Moderate", "Notes": "Runoff potential." },
      "Wildlife": { "Impact Level": "Low", "Notes": "Low vertebrate toxicity." },
      "Beneficial Insects": { "Impact Level": "Low", "Notes": "Minimal impact." }
    },
    "Usage Instructions": [
      "Apply 500-1000 ml/ha in 200 L water",
      "Apply when weeds are small (2-4 leaves)",
      "Use drift-reduction nozzles",
      "Apply to wheat after tillering but before boot stage",
      "Observe buffer zones near sensitive crops"
    ],
    "Advantages": [
      "Controls resistant broadleaf weeds",
      "Low cost per hectare",
      "Systemic action",
      "Established safety profile"
    ],
    "Disadvantages": [
      "Volatility/drift concerns",
      "Can damage wheat if misapplied",
      "Not effective on grasses",
      "Increasing regulatory scrutiny"
    ]
  },
  {
    "Name": "Imidacloprid",
    "Active Ingredients": "Imidacloprid",
    "Application Method": "Seed treatment",
    "Target Species": "Aphids, wireworms, termites",
    "Safety Precautions": [
      "Wear chemical-resistant gloves",
      "Avoid inhalation of dust",
      "Wash hands after handling",
      "Store away from food/feed",
      "Do not use treated seed for food/feed"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "High", "Notes": "Persistent in soil." },
      "Water": { "Impact Level": "High", "Notes": "Potential groundwater contamination." },
      "Wildlife": { "Impact Level": "High", "Notes": "Toxic to birds." },
      "Beneficial Insects": { "Impact Level": "High", "Notes": "Highly toxic to bees." }
    },
    "Usage Instructions": [
      "Apply 5-7 g/kg of seed",
      "Treat seeds in well-ventilated area",
      "Allow treated seeds to dry before sowing",
      "Use proper seed treatment equipment",
      "Do not graze treated areas"
    ],
    "Advantages": [
      "Long-lasting systemic protection",
      "Effective against sucking pests",
      "Reduces need for foliar sprays",
      "Low application rates"
    ],
    "Disadvantages": [
      "High bee toxicity",
      "Potential resistance development",
      "Long soil persistence",
      "Restricted in some countries"
    ]
  },
  {
    "Name": "Bacillus thuringiensis (Bt)",
    "Active Ingredients": "Bacillus thuringiensis var. kurstaki",
    "Application Method": "Foliar spray",
    "Target Species": "Armyworms, cutworms",
    "Safety Precautions": [
      "Wear basic protective gear",
      "Avoid inhalation when mixing",
      "Wash hands after handling",
      "Store in cool conditions",
      "Keep out of direct sunlight"
    ],
    "Environmental Impact": {
      "Soil": { "Impact Level": "Low", "Notes": "Naturally occurring." },
      "Water": { "Impact Level": "Low", "Notes": "No aquatic toxicity." },
      "Wildlife": { "Impact Level": "Low", "Notes": "Non-toxic." },
      "Beneficial Insects": { "Impact Level": "Low", "Notes": "Species-specific." }
    },
    "Usage Instructions": [
      "Apply 0.5-1.0 kg/ha in 200 L water",
      "Target young larval stages",
      "Apply in evening for best results",
      "Reapply every 5-7 days as needed",
      "Agitate tank continuously"
    ],
    "Advantages": [
      "Organic certification approved",
      "Safe for pollinators",
      "No PHI (can harvest same day)",
      "No resistance issues"
    ],
    "Disadvantages": [
      "Short residual (2-3 days)",
      "UV degradation in sunlight",
      "Only controls caterpillars",
      "Slow action (2-5 days)"
    ]
  }
];

async function addOrLinkPesticidesToWheat() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected ✅");

    const wheatSeasonName = "Rabi";
    const wheatCropName = "Wheat";

    let rabiSeason = await Crop.findOne({ season: wheatSeasonName });
    console.log("Rabi Season Found:", rabiSeason);

    if (!rabiSeason) {
      console.error(`Error: Season "${wheatSeasonName}" not found.`);
      mongoose.disconnect();
      return;
    }

    let wheatEntry = rabiSeason.crops.find(crop => crop.name === wheatCropName);
    console.log("Wheat Crop Entry Found:", wheatEntry);

    if (!wheatEntry) {
      console.error(`Error: Crop "${wheatCropName}" not found in "${wheatSeasonName}" season.`);
      mongoose.disconnect();
      return;
    }

    let addedCount = 0;
    let linkedCount = 0;
    let skippedCount = 0;

    for (const pestData of wheatPesticideData) {
      const existingPesticide = await Pesticide.findOne({ Name: pestData.Name });

      if (!existingPesticide) {
        // Pesticide doesn't exist, so create and save it
        const newPesticide = new Pesticide(pestData);
        const savedPesticide = await newPesticide.save();
        addedCount++;
        console.log(`Added new pesticide: ${savedPesticide.Name} (ID: ${savedPesticide._id})`);
        // Link the newly added pesticide
        if (!wheatEntry.pesticides.includes(savedPesticide._id)) {
          wheatEntry.pesticides.push(savedPesticide._id);
          linkedCount++;
          console.log(`Linked newly added "${savedPesticide.Name}" to "${wheatCropName}" in "${wheatSeasonName}" season.`);
        } else {
          console.log(`"${savedPesticide.Name}" was just added and is already linked to "${wheatCropName}".`);
        }
      } else {
        // Pesticide already exists, only link if not already linked
        if (!wheatEntry.pesticides.includes(existingPesticide._id)) {
          wheatEntry.pesticides.push(existingPesticide._id);
          linkedCount++;
          console.log(`Linked existing pesticide "${existingPesticide.Name}" (ID: ${existingPesticide._id}) to "${wheatCropName}" in "${wheatSeasonName}" season.`);
        } else {
          console.log(`"${existingPesticide.Name}" (ID: ${existingPesticide._id}) is already linked to "${wheatCropName}" in "${wheatSeasonName}" season.`);
          skippedCount++;
        }
      }
    }

    await rabiSeason.save();
    console.log(`\nOperation completed for "${wheatCropName}" in "${wheatSeasonName}" season:`);
    console.log(`${addedCount} new pesticides added.`);
    console.log(`${linkedCount} pesticides linked (newly added or existing).`);
    console.log(`${skippedCount} existing pesticides were already linked.`);

  } catch (error) {
    console.error(`Error adding or linking pesticides to ${wheatCropName}:`, error);
    mongoose.disconnect();
  } finally {
    if (mongoose.connection.readyState === 1) {
      mongoose.disconnect();
    }
  }
}

async function main() {
  await addOrLinkPesticidesToWheat();
}

main();