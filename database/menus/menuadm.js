const menuadm = (pushname, prefix, getLevelingLevel, isAntiFake, getLevelingXp, sender, _registered, client, process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink,  isBadWord) => {
	return `
	
                                   𝑍𝑒𝑢𝑠 ⚡ 
                       「 𝑀𝑒𝑛𝑢 𝑑𝑜 𝑎𝑑𝑚 」


╔────────
║〆│ Nome do Grupo : ${groupMetadata.subject}
║〆│ Administradores : ${isGroupAdmins}
║〆│ Total de membros : ${groupMetadata.participants.length}
║〆│ Total de adminis : ${groupAdmins.length}
║〆│ Welcome : ${isWelkom}
║〆│ Level : ${isLevelingOn}
║〆│ Antilink : ${isAntiLink}
║〆│ Comandos usados : ${pepolu}
║〆│ Antifake : ${isAntiFake}
╚─────────────────⊀


╔────────
║〆${prefix}listonline
║〆${prefix}promover @tagmembro
║〆${prefix}demitir @tagadmin 
║〆${prefix}ban @tagmembro 
║〆${prefix}setname _{Nome novo do gruoo}_
║〆${prefix}setdesc _{Alterar desc do grupo}_
║〆${prefix}setmarc _{Marcação nova}_
║〆${prefix}atnivel
║〆${prefix}zeusinte _{1/0}_
║〆${prefix}welcome
║〆${prefix}antilinkgrupo 
║〆${prefix}antifake _{1/0}_
║〆${prefix}gp
║〆${prefix}marcar {marcação invisível}
║〆${prefix}marcar2 {marcação normal}
║〆${prefix}delete / ${prefix}del {apagar mensagem do bot}
║〆${prefix}delttc (apaga sessão de jogov)
║〆${prefix}antiview
╚─────────────────⊀

`
}

exports.menuadm = menuadm
