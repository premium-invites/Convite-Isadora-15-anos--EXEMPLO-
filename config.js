/* ISADORA — XV ANOS | CONFIGURAÇÃO PARA GITHUB PAGES
   As artes em assets/ já estão convertidas para WebP.
   Use ?editor=1 para ajustar áreas de clique, copiar o código e atualizar este arquivo.
   DADOS QUE AINDA FALTAM: WhatsApp de confirmação e link real do endereço.
   A opção "Dinheiro ou Pix" na arte é informativa: não há chave Pix fornecida. */
window.CONFIG = {
  nome: "Isadora — XV anos",
  whatsapp: {
    numero: "+555181086566", // PREENCHER com DDI+DDD+numero do responsável (ex: 55...)
    mensagem: "Olá! Gostaria de confirmar minha presença na festa de 15 anos da Isadora, em 19/12/2026, às 21h."
  },
  mapa: "https://maps.app.goo.gl/7u8vWhQiNzzg65jL8", // PREENCHER com a URL https://... do local da festa
  contatoCriador: {
    numero: "+5588988692212", // Contato Pedro Vieira presente no ZIP original: CONFIRMAR
    mensagem: "Olá, Pedro Vieira! Gostei do convite digital da Isadora e quero saber mais sobre um convite personalizado."
  },
  telas: {
    video: true, // Ativar apenas depois de enviar assets/video.mp4 (H.264)
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },
  pix: {
    ativo: true,
    chave: "nayti.neq@gmail.com",
    posicao: {"left":17.241494170830357,"top":82.06638115631692,"width":64.94599095883892,"height":5.214132762312634}
  },
info: { ativo:true, posicao: {"left":72.00340233166786,"top":88.42826552462527,"width":22.113062098501068,"height":7.262526766595289} },

botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":23.480680466333574,"top":90.47173447537473,"width":53.4,"height":4.8} },
    dresscode: { mostrarTexto:false, posicao: {"left":16.809659766833214,"top":78.56295503211992,"width":67.20340233166786,"height":7} },
    manual: { mostrarTexto:false, posicao: {"left":22.13918629550321,"top":88.19186295503212,"width":57.115369973828216,"height":5.929336188436831} },
  },
  tema: {
    cor: "#b5d7ed",
    corBotaoVoltar: "transparent",
    corTextoBotaoVoltar: "transparent"
  },
  botoesVoltar: {
    presentes: { mostrarTexto: false, posicao: {left: 23.1, top: 90.9, width: 53.4, height: 4.8} },
    dresscode: { mostrarTexto: false, posicao: {left: 17.0, top: 86.7, width: 65.3, height: 7.0} },
    manual: { mostrarTexto: false, posicao: {left: 17.0, top: 86.8, width: 65.3, height: 7.0} }
  },
  hotspots: {
        confirm: { left:9.355103497501783, top:58.505995717344746, width:19.867071139662148, height:11.12441113490364 },
        map: { left:39.82612419700214, top:58.61306209850107, width:20.438091839162503, height:11.445610278372591 },
        gift: { left:69.35510349750179, top:58.61306209850107, width:22.34149417083036, height:11.55267665952891 },
        dress: { left:24.34544373066857, top:72.73426124197003, width:20.438091839162503, height:11.673875802997859 },
        manual: { left:55.006804663335714, top:72.30599571734476, width:21.009112538662862, height:11.459743040685225 }
  },
  contagem: {
    dataEvento: "2026-12-19T21:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#0b3451", corLegenda: "#0b3451",
    posicao: {left: 22, top: 48, width: 56, height: 6}
  },
  musica: {volume: 0.50}
};
