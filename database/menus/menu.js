const menu = (prefix, privat, groups, totalChat, time, time2) => {
	return `
	
                       「 𝑍𝑒𝑢𝑠 ⚡ 」  
╔────────
║〆  Hora: ${time}
║〆  Data: ${time2}
║〆  Chat privado : ${privat.length}
║〆  Total de grupos: ${groups.length}
║〆  Total de chats: ${totalChat.length}
╚─────────────────⊀

                       「 𝐼𝑛𝑓𝑜 」
╔────────
║〆${prefix}info 
║〆${prefix}criadorbot
║〆${prefix}bug (Sua mensagem)
║〆${prefix}creditos
║〆${prefix}comprarbot
║〆${prefix}perfil
║〆${prefix}menus
║〆${prefix}regras
║〆${prefix}ping
║〆${prefix}nivel
║〆${prefix}rank
╚─────────────────⊀

                        「 𝑇𝑖𝑛𝑑𝑒𝑟 」
╔────────
║〆${prefix}tinder
║〆${prefix}rgtinder
║〆${prefix}tinderhelp
║〆${prefix}rolar
╚─────────────────⊀

                        「 𝐴ç𝑜𝑒𝑠 」
╔────────
║〆${prefix}covid {estado}
║〆${prefix}xp {Resgata seu xp diário}
║〆${prefix}figugif
║〆${prefix}figu
║〆${prefix}clima
║〆${prefix}imagem 
║〆${prefix}voz {código do idioma} {fala}
║〆${prefix}cadr {texto}
║〆${prefix}buscanime
║〆${prefix}convite
║〆${prefix}getbio
║〆${prefix}send 
║〆${prefix}video
║〆${prefix}brainly (pergunta)
╚─────────────────⊀

                       「 𝐷𝑖𝑣𝑒𝑟𝑠𝑜𝑒𝑠 」
╔────────
║〆${prefix}cassino
║〆${prefix}pisc 
║〆${prefix}gay 
║〆${prefix}rankgay
║〆${prefix}rankgado
║〆${prefix}rankgostoso
║〆${prefix}putinha
║〆${prefix}resp {sua pergunta}
║〆${prefix}avalie
║〆${prefix}gado
║〆${prefix}safado
║〆${prefix}buc
║〆${prefix}gostoso
║〆${prefix}casal
║〆${prefix}prnhb Nome/texto
║〆${prefix}fakemsg @pessoa |msg1|resp
║〆${prefix}eununca
╚─────────────────⊀

                       「 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 」
╔────────
║〆${prefix}play {nome da música}
║〆${prefix}ytmp4 {url yt}
╚─────────────────⊀


                       「 𝐽𝑜𝑔𝑜 𝑑𝑎 𝑣𝑒𝑙ℎ𝑎 」
╔────────
║〆${prefix}ttthelp
║〆${prefix}ttt
║〆${prefix}tttme
║〆${prefix}tttrank
║〆${prefix}jogov @adversário
╚─────────────────⊀


                       「 𝑆𝑡𝑎𝑙𝑘𝑒𝑎𝑟 」
╔────────
║〆${prefix}tiktokstalk {id/nome do usuário}
╚─────────────────⊀

`
}

exports.menu = menu
