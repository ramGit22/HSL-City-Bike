# Helsinki City Bike App


https://user-images.githubusercontent.com/9402604/216610150-8d644207-00e5-4595-904c-3646de1f7f80.mp4



A MERN stack based application to display data from city bike journeys in the Helsinki Capital area. This application is a pre-assignment for the Solita Dev Academy Finland 2023 program.

## Running the Project
- Install the latest version of node.js(https://nodejs.org/en/).
- Clone the repository.
- Install dependencies using "npm install" in both client and server folders.
- Start the backend server using npm start.
- Start the frontend using npm start.
- The app will be available at http://localhost:3000/.
## Data
The app uses 3 datasets of journey data and a dataset that contains information about city bicycle stations in the Helsinki Region.

## Features
## Data Import
- The application imports data from CSV files to a MongoDB database.
- The data is validated before importing.
Journeys that lasted less than ten seconds and journeys that covered distances shorter than 10 meters are not imported.
## Journey List View
- The application displays a list of journeys.
- Each journey is displayed with departure and return stations, covered distance in kilometers, and duration in minutes.
- Pagination.
- Searching.
## Station List
- The application displays a list of all the stations.
- Pagination.
Searching.
## Single Station View
- The application displays a single station's name.
- The station's address is displayed.
- The station's location on the map is displayed.

