const admin = require("firebase-admin");
require("dotenv").config();

try {
  const fileData = Buffer.from(
    process.env.FIREBASE_SERVICES_KEY,
    "base64"
  ).toString("utf8");

  const serviceAccount = JSON.parse(fileData);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("Firebase Admin SDK initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error.message);
  // process.exit(1);
}

module.exports = admin;
