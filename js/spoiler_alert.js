var SPOILER = "\
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
    background-image: url(//livrofilia.github.io/img/icons/spoiler_alert.png);\
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
 <\/div>",

adsense = "\
<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"><\/script>\
<!-- Post LF -->\
<ins class=\"adsbygoogle\"\
     style=\"display:block\"\
     data-ad-client=\"ca-pub-6309089152812956\"\
     data-ad-slot=\"7110858025\"\
     data-ad-format=\"auto\"></ins>\
<script>\
(adsbygoogle = window.adsbygoogle || []).push({});\
</script>\
";

(function ( window )
{
  document.body.innerHTML = document.body.innerHTML.replace(/\[\[spoiler\]\]/gi, SPOILER);
  document.body.innerHTML = document.body.innerHTML.replace(/\[\[ad\]\]/gi, adsense);
})( window );
