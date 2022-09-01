exports.wait = () => {
	return`_Aguarde, estou fazendo.⏰_`
}

exports.succes = () => {
	return`*Sucesso✓*`
}

exports.welcome = () => {
	return`( ꈍᴗꈍ) Olá @${num.split('@')[0]} Seja Bem-Vindo(a) ao grupo 💕`
}

exports.lvlon = () => {
	return`*Os níveis está ativado 👴🏽🤙🏿*`
}

exports.lvloff = () => {
	return`*Os níveis está desativado 😔*`
}

exports.lvlnul = () => {
	return`_Você ainda não tem um nível!_`
} 

exports.lvlnoon = () => {
	return`*Peça a um adm para ativar os níveis neste grupo!*`
}

exports.noregis = () => {
	return`
				      *「 NÃO REGISTRADO 」*
Olá *${pushname}*, você ainda não se registrou, use _"#rg nome|idade_* para se registrar no nosso banco de dados🎲!

_•Exemplo: ${prefix}rg zeus|18_

*OBS: Não se esqueça do "|" pois é importante para poder se registrar*

`
}

exports.rediregis = () => {
	return`*Você já está registrado em nosso banco de dados 🏦🎲🤝*`
}

exports.stikga = () => {
	return`*Falha, tente novamente mais tarde!*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Comando só pode ser usado em grupos!*
https://chat.whatsapp.com/HT9y0w00dSeAMvtBBvAROY`
}

exports.matar = (pushname, anug, mem) => {
	return` ${pushname} matou o @${mem('@')[0]}

Tem um assassino a solta corram antes que seja tarde!!`
}

exports.ownerb = () => {
	return`Esse comando só pode ser usado pelo Zeus `
}

exports.ownerg = () => {
	return`*🚫*`
} 
exports.vip = () => { 
  return `_Você não possui uma conta *vip*😥_` 
}

exports.zeusinte = () => {
	return`Ative a inteligência artificial do zeus para poder usar esse comando`

}

exports.errofig = () => {
	return`Erro`

}

exports.admin = () => {
	return`_que se ta tentando fazer membro?kkkk 🤣🤣🤣_`
}
exports.nivel = () => { 
  return`*Para fazer uso deste comando é nescessário ter o nível 3 👳🏿‍♂️*`
} 
exports.badmin = () => {
	return`Preciso ser adm para o uso desse comando 😞*`
}

exports.userpremium = () => { 
	return `_Você não possui uma conta premium😥_` 
}

exports.nsfwoff = () => {
	return`Ative o nsfw para poder usar esse comando!`
}

exports.bug = () => {
	return`*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco 🤨*`
}

exports.clears = () => {
	return`Todas as conversas foram apagadas :b`
}

exports.pc = () => {
	return`*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`Registrado🤝`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado, use *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*`
}

exports.levelup = (pushname, role, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
					*Parabéns, você upou de nível 🥳* 
	
╔────────
│➣ Nome: @${pushname.split('@')[0]}
│➣ Nivel: *${getLevel}* -> *${getLevelingLevel(sender)}*
│➣ Experiência:  *${getLevelingXp(sender)}*
╚─────────────────⊀`}
exports.limitend = (pushname) => {
	return`Você ja resgatou seu xp diario! Espere até amanhã para resgatar novamente!`
}

exports.limitcount = (limitCounts) => {
	return`💤` 
}

exports.satukos = () => {
	return`*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*`
}