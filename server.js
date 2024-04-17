/*
 * Copyright 2023 Jack Henry & Associates, Inc.®
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const app = express();

// Define the port the Express application will run on
const app_port = 8080;

// Set EJS as the application's view engine for rendering dynamic HTML pages
app.set('view engine', 'ejs');

// Used as the Plugin Card face
app.get('/iframe', async (req, res) => {
  res.render('pages/dynamic', { message: 'Plugin iframe response' });
});

// Used as the Plugin Card's Primary Action Button target
app.get('/action', async (req, res) => {
  res.render('pages/dynamic', { message: 'Plugin action response' });
});

// Start the server listening on the defined port
app.listen(app_port, () => {
    // Log message to console when server is running
    console.log(`App running at http://localhost:${app_port}`);
});
