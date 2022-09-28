const dotenv = require("dotenv").config();
module.exports = {
	token: process.env.OLPHESUPPORT_TOKEN,
	prefix: `.`,
	ticketChannel: process.env.OLPHESUPPORT_TICKETCHANNEL,
	hautStaff: process.env.OLPHESUPPORT_HS,
	mainGuild: process.env.OLPHESUPPORT_MAINSERVER,
	ticketCategory: process.env.OLPHESUPPORT_TICKETCATEGORY,
	partenariatCategory: process.env.OLPHESUPPORT_PARTENARIATCAT,
	problemCategory: process.env.OLPHESUPPORT_PROBLEMCAT,
	autreCategory: process.env.OLPHESUPPORT_AUTRECAT,
};
