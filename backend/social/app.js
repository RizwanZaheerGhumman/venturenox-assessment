const express = require('express');
const { initProducer } = require('./utilities/producer');
const sequelize = require('./db/config/sequelize');
const tenantRoutes = require('./routes/tenantRoutes/tenantRoutes');
const userRoutes = require('./routes/userRoutes/userRoutes')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sequelize
	.authenticate()
	.then(() => {
		console.log('Database connection established successfully.');

		sequelize.sync({ force:false,logging: console.log })
			.then(() => {
				console.log('Database synced');
			})
			.catch((syncError) => {
				console.error('Error syncing database:', syncError);
			});
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', error);
	});


app.use('/tenant',tenantRoutes);
app.use('/user',userRoutes);
app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});
app.listen(process.env.PORT || 4000, async () => {

	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});