const dotenv = require("dotenv").config();
module.exports = {
	token: process.env.OLPHEDIA_TOKEN,
	blagueApiToken: process.env.JOKE_APITOKEN,
	embedColor: `#8019fd`,
	badges: [
		{ name: `DISCORD_EMPLOYEE`, emoji: `<:discord_staff:891369469836939274>` },
		{ name: `TEAM_USER`, emoji: `<:discord_staff:891369469836939274>` },
		{ name: `BUGHUNTER_LEVEL_1`, emoji: `<:bug_hunter1:891369220305195008>` },
		{ name: `BUGHUNTER_LEVEL_2`, emoji: `<:bug_hunter2:891369283517562881>` },
		{ name: `PARTNERED_SERVER_OWNER`, emoji: `<:partner:891369404930064454>` },
		{
			name: `HYPESQUAD_EVENTS`,
			emoji: `<:hypesquad_events:891369666394599424>`,
		},
		{ name: `HOUSE_BRAVERY`, emoji: `<:bravery:891368745883287615>` },
		{ name: `HOUSE_BRILLIANCE`, emoji: `<:brilliance:891368663419080795>` },
		{ name: `HOUSE_BALANCE`, emoji: `<:balance:891368788568711228>` },
		{ name: `EARLY_SUPPORTER`, emoji: `<:early_supporter:891368912598483014>` },
		{ name: `VERIFIED_BOT`, emoji: `<:early_developer:891369001912000594>` },
		{
			name: `EARLY_VERIFIED_BOT_DEVELOPER`,
			emoji: `<:early_developer:891369001912000594>`,
		},
		{
			name: `DISCORD_CERTIFIED_MODERATOR`,
			emoji: `<:certified_moderator:891369091032547368>`,
		},
	],
	logsChannel: process.env.OLPHEDIA_LOGS,
	doneEmoji: `<a:1_valide_olphedia_yes:910565465192030208>`,
	errorEmoji: `<a:1_valide_olphedia_no:910565289517805648>`,
};
