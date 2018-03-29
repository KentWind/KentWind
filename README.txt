The objective of this branch is to create the necessary DB Connection, PHP, and JavaScript files to be able to:
	1. Create database connection.
	2. Generate data for mock sensors.
	3. Push mock data into the database.
		REQUIRES:
			a. Moving current live_data to historical_data table.
			b. Deleting old live_data.
			c. Inserting newly generated mock data into live_data.
	4. Pull live data from the database into JavaScript.