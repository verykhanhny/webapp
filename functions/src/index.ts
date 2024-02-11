/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as https from 'firebase-functions/v2/https';
import express = require('express');
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// Initialize Firebase Admin SDK
admin.initializeApp();

// Firestore instance
const db = admin.firestore();

// Create Express app
const app = express();

app.get('', async (req, res) => {
  try {
    // Read data from Firestore
    const snapshot = await db.collection('reviews').get();
    const data = snapshot.docs.map((doc) => doc.data());

    // Send the data as response
    res.json(data);
  } catch (error) {
    logger.error('Error reading from Firestore:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('', async (req, res) => {
  try {
    // Extract data from the request JSON
    const data = JSON.parse(req.body);
    logger.info('data:', data);

    // Write data to Firestore collection
    const snapshot = await db.collection('reviews').add(data);

    // Send success response
    res.status(201).json({
      message: 'Data written to Firestore',
      docId: snapshot.id,
    });
  } catch (error) {
    logger.error('Error writing to Firestore:', error);
    res.status(500).send('Internal Server Error');
  }
});

export const handler = https.onRequest({cors: true}, app);
