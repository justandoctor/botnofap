const menuadm = (pushname, prefix, getLevelingLevel, isAntiFake, getLevelingXp, sender, _registered, client, process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink,  isBadWord) => {
	return `
	
                                   πππ’π  β‘ 
                       γ ππππ’ ππ πππ γ


βββββββββ
βγβ Nome do Grupo : ${groupMetadata.subject}
βγβ Administradores : ${isGroupAdmins}
βγβ Total de membros : ${groupMetadata.participants.length}
βγβ Total de adminis : ${groupAdmins.length}
βγβ Welcome : ${isWelkom}
βγβ Level : ${isLevelingOn}
βγβ Antilink : ${isAntiLink}
βγβ Comandos usados : ${pepolu}
βγβ Antifake : ${isAntiFake}
βββββββββββββββββββ


βββββββββ
βγ${prefix}listonline
βγ${prefix}promover @tagmembro
βγ${prefix}demitir @tagadmin 
βγ${prefix}ban @tagmembro 
βγ${prefix}setname _{Nome novo do gruoo}_
βγ${prefix}setdesc _{Alterar desc do grupo}_
βγ${prefix}setmarc _{MarcaΓ§Γ£o nova}_
βγ${prefix}atnivel
βγ${prefix}zeusinte _{1/0}_
βγ${prefix}welcome
βγ${prefix}antilinkgrupo 
βγ${prefix}antifake _{1/0}_
βγ${prefix}gp
βγ${prefix}marcar {marcaΓ§Γ£o invisΓ­vel}
βγ${prefix}marcar2 {marcaΓ§Γ£o normal}
βγ${prefix}delete / ${prefix}del {apagar mensagem do bot}
βγ${prefix}delttc (apaga sessΓ£o de jogov)
βγ${prefix}antiview
βββββββββββββββββββ

`
}

exports.menuadm = menuadm
