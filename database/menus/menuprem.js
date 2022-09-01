const menuprem = (prefix, sender) => {
	return `
	
                               𝑍𝑒𝑢𝑠 ⚡ 
                   「 𝑀𝑒𝑛𝑢 𝑝𝑟𝑒𝑚𝑖𝑢𝑚 」
                   
                   𝐅𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚𝐬
╔────────
║〆${prefix}addfigurin (nome)
║〆${prefix}listfigu
║〆${prefix}mandarfigu (nome)
╚─────────────────⊀

	
	                   𝐕𝐢𝐝𝐞𝐨𝐬
╔────────
║〆${prefix}addvideo (nome)
║〆${prefix}videolist
║〆${prefix}getvideo (nome)
╚─────────────────⊀

	
	                   𝐈𝐦𝐚𝐠𝐞𝐧𝐬
╔────────
║〆${prefix}addimage (nome)
║〆${prefix}fotolist
║〆${prefix}getimage (nome)
╚─────────────────⊀
	
	
	                   𝐀𝐮𝐝𝐢𝐨𝐬
╔────────
║〆${prefix}addaud (nome)
║〆${prefix}audiolist
║〆${prefix}getau (nome)
╚─────────────────⊀

`
}

exports.menuprem = menuprem
