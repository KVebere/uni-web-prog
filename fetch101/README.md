# Fetch

## Contents
Herein are:
  * examples of the `fetch` API.
  * Unit tests for practicing use of `fetch`.

## Installation & Use
1. Clone the repository thus:
   ```bash
   git clone https://github.com/portsoc/fetch101.git
   ```
2. Go into the locally cloned repo:
   ```bash
   cd fetch101
   ```
3. Install libraries (including the http server we use in the next stage):
   ```bash
   npm install
   ```
4. Start a simple HTTP server on port 8080 with:
   ```bash
   npm start
   ```
5. See the examples at [http://localhost:8080/examples/](http://localhost:8080/examples/)
6. Unit tests.
   * See the unit tests at [http://localhost:8080/](http://localhost:8080/)
   * Edit `index.js`; improving and adding code until all the tests pass.

## Examples
0. fetch_message
    * Get `message.txt`, from a server and put in the DOM

1. fetch_message
    * Get `message.txt`, from a server and put in the DOM (use a function, avoiding global scope code)

2. fetch_on_button
    * When a button is pressed, get `message.txt`, from a server and put in the DOM

3. error_handling
    * Two buttons are presented.  One fetches `message.txt` which is retrieved successfully.  The second button retrieves `imaginary.file` which does not exist, so a the `response` object's `ok` property (i.e. `response.ok`) will be false; an error messsage is therefore displayed.

4. json_data
    * When a button is pressed, get `data.json` from a server, parse the data and populate an unordered list with it.

5. response_headers
    * This extends the error handling example.   The same function is used to process three outcomes when different files are loaded.  In addition to handlng the non-existent file, the response headers are checked to learn the type of the retrieved data.  Different types of data (text and JSON in this example) can be processed differently.

6. other_peoples_data
    * Instead of a local JSON file, a remote data file is loaded.

7. interaction
  * user input is taken and used to construct a URL.
  * the response from the server is used to indicate whether a word is valid in scrabble or not.
