# Helsinki City Bike App
A MERN stack based application to display data from city bike journeys in the Helsinki Capital area. This application is a pre-assignment for the Solita Dev Academy Finland 2023 program.

https://user-images.githubusercontent.com/9402604/216610150-8d644207-00e5-4595-904c-3646de1f7f80.mp4

## Running the Project
- Install the latest version of node.js(https://nodejs.org/en/).
- Clone the repository.
- Install dependencies using "npm install" in both client and server folders.
- Include .env file provided separately upon request inside the "server" folder.
- Start the backend server using npm start.
- Start the frontend using npm start.
- The app will be available at http://localhost:3000/.
## Here is a video presentation for running the project:

https://user-images.githubusercontent.com/9402604/216616140-6017d7fe-bd3d-4c60-9bd9-0b6713d1db25.mp4

## Data
The app uses 1 datasets of journey data and a dataset that contains information about city bicycle stations in the Helsinki Region.

## Note: I used only 1000 journey data due to limitation in storage capacity in my MongoDB database.

## Features
## Data Import
- The application imports data from CSV files to a MongoDB database.
- The data is validated before importing.
-Journeys that lasted less than ten seconds and journeys that covered distances shorter than 10 meters are not imported.
## Journey List View
- The application displays a list of journeys.
- Each journey is displayed with departure and return stations, covered distance in kilometers, and duration in minutes.
- Pagination.
- Searching.
## Station List
- The application displays a list of all the stations.
- Pagination.
- Searching.
## Single Station View On The Map
- The application displays a single station's name and address on the map.


## Note: 
I haven't finished implementing all the features yet, but I am eager to add them in the future as a personal project:)
