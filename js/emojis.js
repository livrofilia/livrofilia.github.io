var pre = "<img class='lf-emoticon' src='http://acessoriosparablogs.com.br/emoticons/",
    pos = ".png' style='border:none' border='0' />",
    PALETA = pre + '002' + pos,
    SOM = pre + '003' + pos,
    VOLTAR = pre + '004' + pos,
    ESTRELA = pre + '005' + pos,
    MUNDO = pre + '006' + pos,
    CANCELAR = pre + '007' + pos,
    OK = pre + '008' + pos,
    OCULOS = pre + '009' + pos,
    SORRISO1 = pre + '010' + pos,
    LINGUA_PISCANDO = pre + '011' + pos,
    IDEIA = pre + '012' + pos,
    CASA = pre + '013' + pos,
    BAIXO = pre + '014' + pos,
    TACA = pre + '015' + pos,
    FOTO = pre + '016' + pos,
    ZANGADO = pre + '017' + pos,
    GOZANDO = pre + '018' + pos,
    BOCA_ABERTA = pre + '019' + pos,
    PEIXE = pre + '020' + pos,
    PISCANDO = pre + '021' + pos,
    CONTRARIADO = pre + '022' + pos,
    SERIO = pre + '023' + pos,
    LINGUA = pre + '024' + pos,
    NOTA = pre + '025' + pos,
    BLOGGER = pre + '026' + pos,
    CORACAO = pre + '027' + pos,
    FELIZ = pre + '028' + pos,
    ESPANTADO = pre + '029' + pos,
    TRISTE = pre + '030' + pos,
    SORRISO2 = pre + '031' + pos,
    RAIO = pre + '032' + pos,
    CHAVE = pre + '033' + pos,
    MSN = pre + '034' + pos,
    MSN2 = pre + '035' + pos,
    TELEFONE = pre + '036' + pos,
    PIZZA = pre + '037' + pos,
    PRESENTE = pre + '038' + pos,
    CORACAO_PARTIDO = pre + '039' + pos,
    CIMA = pre + '040' + pos,
    BANANA = pre + '041' + pos,
    RELOGIO = pre + '001' + pos,
    SPOILER = "\
<style>\
.cont {\
  width: 650px;\
  max-width: 90%;\
    height: 800px;\
    font-size: 12pt;\
    border: 1px solid #ccc;\
    border-radius: 5px;\
    padding: 15px;\
    color: #636363;\
    background: #FFFFFF;\
    margin: 0;\
}\
\
.spoiler {\
width: calc(100% - 30px);\
    width: -webkit-calc(100% - 30px);\
    width: -moz-calc(100% - 30px);\
    width: -o-calc(100% - 30px);\
    width: -ms-calc(100% - 30px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    box-shadow: 0 0 20px #000;\
    -webkit-box-shadow: 0 0 20px #000;\
    -moz-box-shadow: 0 0 20px #000;\
    -ms-box-shadow: 0 0 20px #000;\
    -o-box-shadow: 0 0 20px #000;\
    border-radius: 5px;\
    padding: 15px;\
    background: #FFFDB3;\
    text-align: justify;\
    margin: 0;\
    }\
\
.spoiler .icon {\
  width: 150px;\
    height: 150px;\
    display: inline-block;\
    position: relative;\
    background-image: url(http://jvribeiro.github.io/spoiler_alert.png);\
    background-size: 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.spoiler .text {\
  color: #000;\
    font-size: 13pt;\
    width: 70%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
}\
.spoiler .red {\
  color: #f00;\
  font-weight: bold;\
}\
.spoiler .h2 {\
  font-size: 20pt;\
  color: #f00;\
  text-align: center;\
  font-weight: bold;\
}\
</style>\
\
<div class=\"spoiler\">\
   <div class=\"icon\"><\/div>\
   <div class=\"text\">\
     <div class=\"h2\">Alerta de Spoiler!<\/div>\
     <p>Atenção! Este post contém alguns <a href=\"http://www.livrofilia.com\/p\/politica-de-spoilers.html\" title=\"Política de Spoilers\"><b>SPOILERS<\/b><\/a>! Caso ainda não tenha lido o livro em questão e não quer revelações do enredo, <span class=\"red\">NÃO CONTINUE LENDO<\/span>.<\/p>\
     <p>Se você se sente confortável com spoilers, <b>prossiga por sua conta e risco<\/b>. Veja nossa <a href=\"http://www.livrofilia.com\/p\/politica-de-spoilers.html\" title=\"Política de Spoilers\"><b>Política de Spoilers<\/b><\/a> para mais informações.<\/p>\
   <\/div>\
 <\/div>\
",

    emoji = document.body;

(function (window) {
emoji.innerHTML = emoji.innerHTML.replace(/\[\[relogio\]\]/gi ,RELOGIO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[paleta\]\]/gi ,PALETA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[som\]\]/gi ,SOM);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[voltar\]\]/gi ,VOLTAR);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[estrela\]\]/gi ,ESTRELA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[mundo\]\]/gi ,MUNDO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[cancelar\]\]/gi ,CANCELAR);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[ok\]\]/gi ,OK);
emoji.innerHTML = emoji.innerHTML.replace(/( 8\))/gi ," "+OCULOS);
emoji.innerHTML = emoji.innerHTML.replace(/( \$\))/gi ," "+SORRISO1);
emoji.innerHTML = emoji.innerHTML.replace(/( \;P)/gi ," "+LINGUA_PISCANDO);
emoji.innerHTML = emoji.innerHTML.replace(/( \;p)/gi ," "+LINGUA_PISCANDO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[ideia\]\]/gi ,IDEIA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[casa\]\]/gi ,CASA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[baixo\]\]/gi ,BAIXO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[taca\]\]/gi ,TACA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[foto\]\]/gi ,FOTO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[zangado\]\]/gi ,ZANGADO);
emoji.innerHTML = emoji.innerHTML.replace(/( \>\:\()/gi ," "+ZANGADO);
emoji.innerHTML = emoji.innerHTML.replace(/( \>\:o)/gi ," "+ZANGADO);
emoji.innerHTML = emoji.innerHTML.replace(/( \^\^)/gi ," "+GOZANDO);
emoji.innerHTML = emoji.innerHTML.replace(/( \^\_\^)/gi ," "+GOZANDO);
emoji.innerHTML = emoji.innerHTML.replace(/( \^\-\^)/gi ," "+GOZANDO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:O)/gi ," "+BOCA_ABERTA);
emoji.innerHTML = emoji.innerHTML.replace(/( \:o)/gi ," "+BOCA_ABERTA);
emoji.innerHTML = emoji.innerHTML.replace(/( D\:)/gi ," "+PEIXE);
emoji.innerHTML = emoji.innerHTML.replace(/( \;\))/gi ," "+PISCANDO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:S)/gi ," "+CONTRARIADO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:I)/gi ," "+SERIO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:\|)/gi ," "+SERIO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:P)/gi ," "+LINGUA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[8\]\]/gi ,NOTA);
emoji.innerHTML = emoji.innerHTML.replace(/♥/gi ,CORACAO);
emoji.innerHTML = emoji.innerHTML.replace(/(\[coração\])/gi ,CORACAO);
emoji.innerHTML = emoji.innerHTML.replace(/( <3)/gi ," "+CORACAO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:D)/gi ," "+FELIZ);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[espantado\]\]/gi ,ESPANTADO);
emoji.innerHTML = emoji.innerHTML.replace(/( \:\()/gi ," "+TRISTE);
emoji.innerHTML = emoji.innerHTML.replace(/( \:\))/gi ," "+SORRISO2);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[raio\]\]/gi ,RAIO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[chave\]\]/gi ,CHAVE);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[msn\]\]/gi ,MSN);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[msn2\]\]/gi ,MSN2);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[telefone\]\]/gi ,TELEFONE);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[pizza\]\]/gi ,PIZZA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[presente\]\]/gi ,PRESENTE);
emoji.innerHTML = emoji.innerHTML.replace(/( <\/3)/gi ," "+CORACAO_PARTIDO);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[cima\]\]/gi ,CIMA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[banana\]\]/gi ,BANANA);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[blogger\]\]/gi ,BLOGGER);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[spoiler\]\]/gi ,SPOILER);
emoji.innerHTML = emoji.innerHTML.replace(/\[\[SPOILER\]\]/gi ,SPOILER);
})(window);
