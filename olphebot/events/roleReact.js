const { client } = require("../index")

client.on(`interactionCreate`, async (interaction) => {
    if (!interaction.isButton()) return

    const buttonName = interaction.customId

    if (buttonName == "roleFemme") {
        if (interaction.member.roles.cache.has("787523274820288582")) { // Femme
            interaction.member.roles.remove(`787523274820288582`) // Femme
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Femme**.`, ephemeral: true })
        } else {
            interaction.member.roles.add(`787523274820288582`) // Femme
            interaction.member.roles.remove(`787523602060148776`) // Non Binaire
            interaction.member.roles.remove(`787523173737955328`) // Homme
            interaction.reply({ content: `Vous avez désormais le rôle **Femme**.`, ephemeral: true })
        }
    } else if (buttonName == "roleHomme") {
        if (interaction.member.roles.cache.has("787523173737955328")) { // Homme
            interaction.member.roles.remove(`787523173737955328`) // Homme
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Homme**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(`787523274820288582`) // Femme
            interaction.member.roles.remove(`787523602060148776`) // Non Binaire
            interaction.member.roles.add(`787523173737955328`) // Homme
            interaction.reply({ content: `Vous avez désormais le rôle **Homme**.`, ephemeral: true })
        }
    } else if (buttonName == "roleNonBinaire") {
        if (interaction.member.roles.cache.has("787523602060148776")) { // Non Binaire
            interaction.member.roles.remove(`787523602060148776`) // Non Binaire
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Non Binaire**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(`787523274820288582`) // Femme
            interaction.member.roles.add(`787523602060148776`) // Non Binaire
            interaction.member.roles.remove(`787523173737955328`) // Homme
            interaction.reply({ content: `Vous avez désormais le rôle **Non binaire**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleMajeur") {
        if (interaction.member.roles.cache.has(`787523791978233866`)) { // Majeur
            interaction.member.roles.remove(`787523791978233866`) // Majeur
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Majeur**.`, ephemeral: true })
        } else {
            interaction.member.roles.add(`787523791978233866`) // Majeur
            interaction.member.roles.remove(`787523307498766336`) // Mineur
            interaction.reply({ content: `Vous avez désormais le rôle **Majeur**.`, ephemeral: true })
        }
    } else if (buttonName == "roleMineur") {
        if (interaction.member.roles.cache.has(`787523307498766336`)) { // Mineur
            interaction.member.roles.remove(`787523307498766336`) // Mineur
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Mineur**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(`787523791978233866`) // Majeur
            interaction.reply({ content: `Vous avez désormais le rôle **Mineur**.`, ephemeral: true })
            interaction.member.roles.add(`787523307498766336`) // Mineur
        }
    }

    if (buttonName == "roleCouple") {
        if (interaction.member.roles.cache.has("787523856125657129")) { // Couple
            interaction.member.roles.remove("787523856125657129") // Couple*
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Couple**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("787523856125657129") // Couple
            interaction.member.roles.remove("787524168391327745") // Crush
            interaction.member.roles.remove("787523951147614248") // Celib
            interaction.reply({ content: `Vous avez désormais le rôle **Couple**.`, ephemeral: true })
        }
    } else if (buttonName == "roleCrush") {
        if (interaction.member.roles.cache.has("787524168391327745")) { // Crush
            interaction.member.roles.remove("787524168391327745") // Crush
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Crush**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("787524168391327745") // Crush
            interaction.member.roles.remove("787523856125657129") // Couple
            interaction.member.roles.remove("787523951147614248") // Celib
            interaction.reply({ content: `Vous avez désormais le rôle **Crush**.`, ephemeral: true })
        }
    } else if (buttonName == "roleCelib") {
        if (interaction.member.roles.cache.has("787523951147614248")) { // Celib
            interaction.member.roles.remove("787523951147614248") // Celib
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Célibataire**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("787523951147614248") // Celib
            interaction.member.roles.remove("787523856125657129") // Couple
            interaction.member.roles.remove("787524168391327745") // Crush
            interaction.reply({ content: `Vous avez désormais le rôle **Célibataire**.`, ephemeral: true })
        }
    }

    const signesAstro = {
        "Bélier": "880892473642209311",
        "Taureau": "880892474577551410",
        "Gémeaux": "880892475349286982",
        "Cancer": "880892476162994186",
        "Lion": "880892476968271872",
        "Vierge": "880892477870063646",
        "Balance": "880892478771847219",
        "Scorpion": "880892479556173915",
        "Sagittaire": "880892480608944168",
        "Capricorne": "880892481519124510",
        "Verseau": "880892482316009502",
        "Poisson": "880892483217805352"
    }

    if (buttonName == "roleAstroBelier") {
        if (interaction.member.roles.cache.has(signesAstro["Bélier"])) {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Bélier**.`, ephemeral: true })
        } else {
            interaction.member.roles.add(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Bélier**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroTaureau") {
        if (interaction.member.roles.cache.has(signesAstro["Taureau"])) {
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Taureau**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.add(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Taureau**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroGemeaux") {
        if (interaction.member.roles.cache.has(signesAstro["Gémeaux"])) {
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Gémeaux**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.add(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Gémeaux**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroCancer") {
        if (interaction.member.roles.cache.has(signesAstro["Cancer"])) {
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Cancer**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.add(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Cancer**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroLion") {
        if (interaction.member.roles.cache.has(signesAstro["Lion"])) {
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Lion**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.add(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Lion**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroVierge") {
        if (interaction.member.roles.cache.has(signesAstro["Vierge"])) {
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Vierge**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.add(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Vierge**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroBalance") {
        if (interaction.member.roles.cache.has(signesAstro["Balance"])) {
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Balance**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.add(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Balance**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroScorpion") {
        if (interaction.member.roles.cache.has(signesAstro["Scorpion"])) {
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Scorpion**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.add(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Scorpion**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroScorpion") {
        if (interaction.member.roles.cache.has(signesAstro["Scorpion"])) {
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Scorpion**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.add(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Scorpion**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroSagittaire") {
        if (interaction.member.roles.cache.has(signesAstro["Sagittaire"])) {
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Sagittaire**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.add(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Sagittaire**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroCapricorne") {
        if (interaction.member.roles.cache.has(signesAstro["Capricorne"])) {
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Capricorne**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.add(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Capricorne**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroVerseau") {
        if (interaction.member.roles.cache.has(signesAstro["Verseau"])) {
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Verseau**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.add(signesAstro["Verseau"])
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Verseau**.`, ephemeral: true })
        }
    } else if (buttonName == "roleAstroPoisson") {
        if (interaction.member.roles.cache.has(signesAstro["Poisson"])) {
            interaction.member.roles.remove(signesAstro["Poisson"])
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Poisson**.`, ephemeral: true })
        } else {
            interaction.member.roles.remove(signesAstro["Bélier"])
            interaction.member.roles.remove(signesAstro["Taureau"])
            interaction.member.roles.remove(signesAstro["Gémeaux"])
            interaction.member.roles.remove(signesAstro["Cancer"])
            interaction.member.roles.remove(signesAstro["Lion"])
            interaction.member.roles.remove(signesAstro["Vierge"])
            interaction.member.roles.remove(signesAstro["Balance"])
            interaction.member.roles.remove(signesAstro["Scorpion"])
            interaction.member.roles.remove(signesAstro["Sagittaire"])
            interaction.member.roles.remove(signesAstro["Capricorne"])
            interaction.member.roles.remove(signesAstro["Verseau"])
            interaction.member.roles.add(signesAstro["Poisson"])
            interaction.reply({ content: `Vous avez désormais le rôle **Poisson**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifAnnonces") {
        if (interaction.member.roles.cache.has("797506420764573727")) {
            interaction.member.roles.remove("797506420764573727")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Annonces**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("797506420764573727")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Annonces**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifAnimations") {
        if (interaction.member.roles.cache.has("788778750489788467")) {
            interaction.member.roles.remove("788778750489788467")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Animations**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("788778750489788467")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Animations**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifVotes") {
        if (interaction.member.roles.cache.has("787684824432640001")) {
            interaction.member.roles.remove("787684824432640001")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Vote**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("787684824432640001")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Vote**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifGiveaways") {
        if (interaction.member.roles.cache.has("815334677899771915")) {
            interaction.member.roles.remove("815334677899771915")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Giveaways**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("815334677899771915")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Giveaways**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifReseaux") {
        if (interaction.member.roles.cache.has("849315218809946192")) {
            interaction.member.roles.remove("849315218809946192")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications réseaux sociaux**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("849315218809946192")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications réseaux sociaux**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifPartenariat") {
        if (interaction.member.roles.cache.has("820085736677834794")) {
            interaction.member.roles.remove("820085736677834794")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Partenariats**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("820085736677834794")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Partenariats**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifCollaborations") {
        if (interaction.member.roles.cache.has("858436314504232960")) {
            interaction.member.roles.remove("858436314504232960")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Collaborations**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("858436314504232960")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Collaborations**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifMix") {
        if (interaction.member.roles.cache.has("880858647004057671")) {
            interaction.member.roles.remove("880858647004057671")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Mix**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("880858647004057671")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Mix**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifJournal") {
        if (interaction.member.roles.cache.has("880858861307846677")) {
            interaction.member.roles.remove("880858861307846677")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Journal Olphédia**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("880858861307846677")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Journal Olphédia**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleNotifJeux") {
        if (interaction.member.roles.cache.has("882554750518849576")) {
            interaction.member.roles.remove("882554750518849576")
            interaction.reply({ content: `Vous n'avez désormais plus le rôle **Notifications Jeux**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("882554750518849576")
            interaction.reply({ content: `Vous avez désormais le rôle **Notifications Jeux**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleAccessDivertissements") {
        if (interaction.member.roles.cache.has("820402735664463922")) {
            interaction.member.roles.remove("820402735664463922")
            interaction.reply({ content: `Vous n'avez désormais plus accès à la catégorie **divertissements**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("820402735664463922")
            interaction.reply({ content: `Vous avez désormais accès à la catégorie **divertissements**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleAccessJeux") {
        if (interaction.member.roles.cache.has("800061896992227338")) {
            interaction.member.roles.remove("800061896992227338")
            interaction.reply({ content: `Vous n'avez désormais plus accès à la catégorie **jeux**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("800061896992227338")
            interaction.reply({ content: `Vous avez désormais accès à la catégorie **jeux**.`, ephemeral: true })
        }
    }

    if (buttonName == "roleAccessMedias") {
        if (interaction.member.roles.cache.has("842449852868722699")) {
            interaction.member.roles.remove("842449852868722699")
            interaction.reply({ content: `Vous n'avez désormais plus accès à la catégorie **médias**.`, ephemeral: true })
        } else {
            interaction.member.roles.add("842449852868722699")
            interaction.reply({ content: `Vous avez désormais accès à la catégorie **médias**.`, ephemeral: true })
        }
    }


    // Couleurs
    async function removeAllRolesColor(interaction, except) {
        const rolesColor = [
            `797190516889485332`,
            `797191123193823284`,
            `797189776037642290`,
            `797192817738514482`,
            `849590080146243584`,
            `849591393525694484`,
            `849590156347703327`,
            `849590145359675452`,
            `797190847740772434`,
            `797191028674920478`,
            `797192318032674837`,
            `797191128654544907`,
            `849590139760279573`,
            `849590197838151690`,
            `849590228310425662`,
            `849590162404933632`,
            `797191861810757642`,
            `797190301780410368`,
            `797191116851380234`,
            `797190726244630529`,
            `849590167999348806`,
            `849590173591011328`,
            `849590237977772043`,
            `849591406418329620`,
            `820221908100317224`,
            `797191382783230002`,
            `797189901770686555`,
            `797197389441400853`,
            `849590132654735380`,
            `849590233488949252`,
            `849590121607200788`,
            `849590242846572585`,
            `849590150471876618`,
            `850084528877863003`,
            `849590115734519818`,
            `849595236468523008`,
            `849595372258721812`,
            `820227791290368001`,
            `849594870901506049`,
            `849590105526239242`,
            `815351832499060767`
        ]

        for (const role of rolesColor) {
            if (role === except) return
            interaction.member.roles.remove(role)
        }
    }

    if (buttonName == "roleCouleurRougeFonce") {
        if (interaction.member.roles.cache.has("797190516889485332")) {
            interaction.member.roles.remove("797190516889485332")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rouge foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797190516889485332")
            interaction.member.roles.add("797190516889485332")
            interaction.reply({ content: `Vous avez désormais la couleur rouge foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRoseFonce") {
        if (interaction.member.roles.cache.has("797191123193823284")) {
            interaction.member.roles.remove("797191123193823284")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rose foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797191123193823284")
            interaction.member.roles.add("797191123193823284")
            interaction.reply({ content: `Vous avez désormais la couleur rose foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVioletFonce") {
        if (interaction.member.roles.cache.has("797189776037642290")) {
            interaction.member.roles.remove("797189776037642290")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur violet foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797189776037642290")
            interaction.member.roles.add("797189776037642290")
            interaction.reply({ content: `Vous avez désormais la couleur violet foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBleuFonce") {
        if (interaction.member.roles.cache.has("797192817738514482")) {
            interaction.member.roles.remove("797192817738514482")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur bleu foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797192817738514482")
            interaction.member.roles.add("797192817738514482")
            interaction.reply({ content: `Vous avez désormais la couleur bleu foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVertFonce") {
        if (interaction.member.roles.cache.has("849590080146243584")) {
            interaction.member.roles.remove("849590080146243584")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur vert foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590080146243584")
            interaction.member.roles.add("849590080146243584")
            interaction.reply({ content: `Vous avez désormais la couleur vert foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurJauneFonce") {
        if (interaction.member.roles.cache.has("849591393525694484")) {
            interaction.member.roles.remove("849591393525694484")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur jaune foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849591393525694484")
            interaction.member.roles.add("849591393525694484")
            interaction.reply({ content: `Vous avez désormais la couleur jaune foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurOrangeFonce") {
        if (interaction.member.roles.cache.has("849590137792047362")) {
            interaction.member.roles.remove("849590137792047362")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur orange foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590137792047362")
            interaction.member.roles.add("849590137792047362")
            interaction.reply({ content: `Vous avez désormais la couleur orange foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurMarronFonce") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur marron foncé.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur marron foncé.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRouge") {
        if (interaction.member.roles.cache.has("797190516889485332")) {
            interaction.member.roles.remove("797190516889485332")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rouge.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797190516889485332")
            interaction.member.roles.add("797190516889485332")
            interaction.reply({ content: `Vous avez désormais la couleur rouge.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRose") {
        if (interaction.member.roles.cache.has("797189776037642290")) {
            interaction.member.roles.remove("797189776037642290")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rose.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797189776037642290")
            interaction.member.roles.add("797189776037642290")
            interaction.reply({ content: `Vous avez désormais la couleur rose.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurViolet") {
        if (interaction.member.roles.cache.has("797192817738514482")) {
            interaction.member.roles.remove("797192817738514482")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur violet.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797192817738514482")
            interaction.member.roles.add("797192817738514482")
            interaction.reply({ content: `Vous avez désormais la couleur violet.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBleu") {
        if (interaction.member.roles.cache.has("849590080146243584")) {
            interaction.member.roles.remove("849590080146243584")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur bleu.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590080146243584")
            interaction.member.roles.add("849590080146243584")
            interaction.reply({ content: `Vous avez désormais la couleur bleu.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVert") {
        if (interaction.member.roles.cache.has("849591393525694484")) {
            interaction.member.roles.remove("849591393525694484")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur vert.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849591393525694484")
            interaction.member.roles.add("849591393525694484")
            interaction.reply({ content: `Vous avez désormais la couleur vert.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurJaune") {
        if (interaction.member.roles.cache.has("849591393525694484")) {
            interaction.member.roles.remove("849591393525694484")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur jaune.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849591393525694484")
            interaction.member.roles.add("849591393525694484")
            interaction.reply({ content: `Vous avez désormais la couleur jaune.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurOrange") {
        if (interaction.member.roles.cache.has("849590137792047362")) {
            interaction.member.roles.remove("849590137792047362")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur orange.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590137792047362")
            interaction.member.roles.add("849590137792047362")
            interaction.reply({ content: `Vous avez désormais la couleur orange.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurMarron") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur marron.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur marron.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRougePastel") {
        if (interaction.member.roles.cache.has("797190516889485332")) {
            interaction.member.roles.remove("797190516889485332")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rouge pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797190516889485332")
            interaction.member.roles.add("797190516889485332")
            interaction.reply({ content: `Vous avez désormais la couleur rouge pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRosePastel") {
        if (interaction.member.roles.cache.has("797189776037642290")) {
            interaction.member.roles.remove("797189776037642290")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rose pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797189776037642290")
            interaction.member.roles.add("797189776037642290")
            interaction.reply({ content: `Vous avez désormais la couleur rose pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVioletPastel") {
        if (interaction.member.roles.cache.has("797192817738514482")) {
            interaction.member.roles.remove("797192817738514482")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur violet pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "797192817738514482")
            interaction.member.roles.add("797192817738514482")
            interaction.reply({ content: `Vous avez désormais la couleur violet pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBleuPastel") {
        if (interaction.member.roles.cache.has("849590080146243584")) {
            interaction.member.roles.remove("849590080146243584")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur bleu pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590080146243584")
            interaction.member.roles.add("849590080146243584")
            interaction.reply({ content: `Vous avez désormais la couleur bleu pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVertPastel") {
        if (interaction.member.roles.cache.has("849591393525694484")) {
            interaction.member.roles.remove("849591393525694484")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur vert pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849591393525694484")
            interaction.member.roles.add("849591393525694484")
            interaction.reply({ content: `Vous avez désormais la couleur vert pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurJaunePastel") {
        if (interaction.member.roles.cache.has("849591393525694484")) {
            interaction.member.roles.remove("849591393525694484")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur jaune pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849591393525694484")
            interaction.member.roles.add("849591393525694484")
            interaction.reply({ content: `Vous avez désormais la couleur jaune pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurOrangePastel") {
        if (interaction.member.roles.cache.has("849590137792047362")) {
            interaction.member.roles.remove("849590137792047362")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur orange pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590137792047362")
            interaction.member.roles.add("849590137792047362")
            interaction.reply({ content: `Vous avez désormais la couleur orange pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurMarronPastel") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur marron pastel.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur marron pastel.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRougeClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rouge clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur rouge clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurRoseClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur rose clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur rose clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVioletClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur violet clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur violet clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBleuClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur bleu clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur bleu clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVertClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur vert clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur vert clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurJauneClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur jaune clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur jaune clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurOrangeClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur orange clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur orange clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurMarronClair") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur marron clair.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur marron clair.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurGris") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur gris.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur gris.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBeige") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur beige.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur beige.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurPunch") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur punch.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur punch.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurTurquoise") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur turquoise.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur turquoise.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurVioline") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur violine.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur violine.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurInvisibleMobile") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur invisible mobile.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur invisible mobile.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurInvisiblePC") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur invisible PC.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur invisible PC.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurNoir") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur noir.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur noir.`, ephemeral: true })
        }
    } else if (buttonName == "roleCouleurBlanc") {
        if (interaction.member.roles.cache.has("849590138487967239")) {
            interaction.member.roles.remove("849590138487967239")
            interaction.reply({ content: `Vous n'avez désormais plus la couleur blanc.`, ephemeral: true })
        } else {
            await removeAllRolesColor(interaction, "849590138487967239")
            interaction.member.roles.add("849590138487967239")
            interaction.reply({ content: `Vous avez désormais la couleur blanc.`, ephemeral: true })
        }
    } else if (buttonName == "roleToolsRandom") {
        const rolesColor = [
            `797190516889485332`,
            `797191123193823284`,
            `797189776037642290`,
            `797192817738514482`,
            `849590080146243584`,
            `849591393525694484`,
            `849590156347703327`,
            `849590145359675452`,
            `797190847740772434`,
            `797191028674920478`,
            `797192318032674837`,
            `797191128654544907`,
            `849590139760279573`,
            `849590197838151690`,
            `849590228310425662`,
            `849590162404933632`,
            `797191861810757642`,
            `797190301780410368`,
            `797191116851380234`,
            `797190726244630529`,
            `849590167999348806`,
            `849590173591011328`,
            `849590237977772043`,
            `849591406418329620`,
            `820221908100317224`,
            `797191382783230002`,
            `797189901770686555`,
            `797197389441400853`,
            `849590132654735380`,
            `849590233488949252`,
            `849590121607200788`,
            `849590242846572585`,
            `849590150471876618`,
            `850084528877863003`,
            `849590115734519818`,
            `849595236468523008`,
            `849595372258721812`,
            `820227791290368001`,
            `849594870901506049`,
            `849590105526239242`,
            `815351832499060767`
        ]
        const randomColor = rolesColor[Math.floor(Math.random() * rolesColor.length)]
        await removeAllRolesColor(interaction, randomColor)
        interaction.member.roles.add(randomColor)
        interaction.reply({ content: `Vous avez désormais une couleur aléatoire.`, ephemeral: true })
    } else if (buttonName == "roleToolsRemove") {
        await removeAllRolesColor(interaction, null)
        interaction.reply({ content: `Vous n'avez désormais plus de couleur.`, ephemeral: true })
    }

    if (buttonName == "validateRules") {
        if (interaction.member.roles.cache.has(`772219811131949086`)) {
            interaction.member.roles.remove(`772219811131949086`)
            interaction.reply({ content: `Vous avez refusé le règlement. Veuillez re-valider le règlement pour avoir accès au serveur`, ephemeral: true })
            interaction.member.roles.remove(`842449852868722699`)
            interaction.member.roles.remove(`800061896992227338`)
            interaction.member.roles.remove(`820402735664463922`)
        } else {
            interaction.member.roles.add(`772219811131949086`)
            interaction.reply({ content: `Vous avez accepté le règlement. Vous avez désormais accès au serveur ! N'oublie pas de prendre tes rôles dans <#938791593710878800>`, ephemeral: true })
            interaction.member.roles.add(`787273436165570570`)
            interaction.member.roles.add(`800291610092896306`)
        }
    }

})