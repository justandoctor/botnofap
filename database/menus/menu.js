const menu = (prefix, privat, groups, totalChat, time, time2) => {
	return `
	
                       γ πππ’π  β‘ γ  
βββββββββ
βγ  Hora: ${time}
βγ  Data: ${time2}
βγ  Chat privado : ${privat.length}
βγ  Total de grupos: ${groups.length}
βγ  Total de chats: ${totalChat.length}
βββββββββββββββββββ

                       γ πΌπππ γ
βββββββββ
βγ${prefix}info 
βγ${prefix}criadorbot
βγ${prefix}bug (Sua mensagem)
βγ${prefix}creditos
βγ${prefix}comprarbot
βγ${prefix}perfil
βγ${prefix}menus
βγ${prefix}regras
βγ${prefix}ping
βγ${prefix}nivel
βγ${prefix}rank
βββββββββββββββββββ

                        γ ππππππ γ
βββββββββ
βγ${prefix}tinder
βγ${prefix}rgtinder
βγ${prefix}tinderhelp
βγ${prefix}rolar
βββββββββββββββββββ

                        γ π΄Γ§πππ  γ
βββββββββ
βγ${prefix}covid {estado}
βγ${prefix}xp {Resgata seu xp diΓ‘rio}
βγ${prefix}figugif
βγ${prefix}figu
βγ${prefix}clima
βγ${prefix}imagem 
βγ${prefix}voz {cΓ³digo do idioma} {fala}
βγ${prefix}cadr {texto}
βγ${prefix}buscanime
βγ${prefix}convite
βγ${prefix}getbio
βγ${prefix}send 
βγ${prefix}video
βγ${prefix}brainly (pergunta)
βββββββββββββββββββ

                       γ π·ππ£πππ πππ  γ
βββββββββ
βγ${prefix}cassino
βγ${prefix}pisc 
βγ${prefix}gay 
βγ${prefix}rankgay
βγ${prefix}rankgado
βγ${prefix}rankgostoso
βγ${prefix}putinha
βγ${prefix}resp {sua pergunta}
βγ${prefix}avalie
βγ${prefix}gado
βγ${prefix}safado
βγ${prefix}buc
βγ${prefix}gostoso
βγ${prefix}casal
βγ${prefix}prnhb Nome/texto
βγ${prefix}fakemsg @pessoa |msg1|resp
βγ${prefix}eununca
βββββββββββββββββββ

                       γ π·ππ€πππππ γ
βββββββββ
βγ${prefix}play {nome da mΓΊsica}
βγ${prefix}ytmp4 {url yt}
βββββββββββββββββββ


                       γ π½πππ ππ π£ππβπ γ
βββββββββ
βγ${prefix}ttthelp
βγ${prefix}ttt
βγ${prefix}tttme
βγ${prefix}tttrank
βγ${prefix}jogov @adversΓ‘rio
βββββββββββββββββββ


                       γ ππ‘ππππππ γ
βββββββββ
βγ${prefix}tiktokstalk {id/nome do usuΓ‘rio}
βββββββββββββββββββ

`
}

exports.menu = menu
