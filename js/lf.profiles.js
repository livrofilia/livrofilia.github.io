var emilyIcon = "http://jvribeiro.github.io/emily.jpg",
    camilaIcon = "http://jvribeiro.github.io/camila.jpg",
    tataIcon = "http://jvribeiro.github.io/tata.jpg",
    victorIcon = "http://jvribeiro.github.io/perfil.jpg",

    emilyIconP = "http://jvribeiro.github.io/emilyp.jpg",
    camilaIconP = "http://jvribeiro.github.io/camilap.jpg",
    tataIconP = "http://jvribeiro.github.io/tatap.jpg",
    victorIconP = "http://jvribeiro.github.io/perfilp.jpg",

    emilyFacebookUrl = "https://facebook.com/bloglivrofilia",
    emilySkoobUrl = "https://www.skoob.com.br/usuario/2751418-livrofilia",
    emilyTwitterUrl = "https://www.twitter.com/livrofilia",
    emilyPosts = "http://www.livrofilia.com/search/label/Emily Abreu",
    emilyInstagramUsername = "emiiilysantoos",
    emilyFacebook = "<a title=\"Facebook de Emily\" class=\"facebook\" href=\""+ emilyFacebookUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-facebook\"><\/i> Facebook<\/a>",
    emilyTwitter = "<a title=\"Twitter de Emily\" class=\"twitter\" href=\""+ emilyTwitterUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-twitter\"><\/i> Twitter<\/a>",
    emilyInstagram = "<a title=\"Instagram de Emily\" class=\"instagram\" href=\"http:\/\/instagram.com\/"+ emilyInstagramUsername +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-instagram\"><\/i> Instagram<\/a>",
    emilySkoob = "<a title=\"Emily no Skoob\" class=\"skoob\" href=\""+ emilySkoobUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-book\"><\/i> Skoob<\/a>",

    camilaFacebookUrl = "https://facebook.com/CGabriely",
    camilaPosts = "http://www.livrofilia.com/search/label/Camila Correa",
    camilaInstagramUsername = "camilagcorrea",
    camilaFacebook = "<a title=\"Facebook de Camila\" class=\"facebook\" href=\""+ camilaFacebookUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-facebook\"><\/i> Facebook<\/a>",
    camilaInstagram = "<a title=\"Instagram de Camila\" class=\"instagram\" href=\"http:\/\/instagram.com\/"+ camilaInstagramUsername +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-instagram\"><\/i> Instagram<\/a>",

    tataFacebookUrl = "#",
    tataPosts = "http://www.livrofilia.com/search/label/Thamiris Almeida",
    tataInstagramUsername = "thamirisalmeida22",
    tataFacebook = "<a title=\"Facebook de Thamiris\" class=\"facebook\" href=\""+ tataFacebookUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-facebook\"><\/i><\/a>",
    tataInstagram = "<a title=\"Instagram de Thamiris\" class=\"instagram\" href=\"http:\/\/instagram.com\/"+ tataInstagramUsername +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-instagram\"><\/i><\/a>",

    victorFacebookUrl = "https://facebook.com/OVictorRibeiro",
    victorPosts = "http://www.livrofilia.com/search/label/Victor Ribeiro",
    victorInstagramUsername = "_jvribeiro",
    victorFacebook = "<a title=\"Facebook de Victor\" class=\"facebook\" href=\""+ victorFacebookUrl +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-facebook\"><\/i><\/a>",
    victorInstagram = "<a title=\"Instagram de Victor\" class=\"instagram\" href=\"http:\/\/instagram.com\/"+ victorInstagramUsername +"\" rel=\"nofollow\" target=\"_blank\"><i class=\"fa fa-instagram\"><\/i><\/a>",


EMILY = "\
<style>\
@media all and (min-width: 480px) {\
.emily {\
    width: calc(100% + 10px);\
    width: -webkit-calc(100% + 10px);\
    width: -moz-calc(100% + 10px);\
    width: -ms-calc(100% + 10px);\
    width: -o-calc(100% + 10px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    background-color: #fde7fc;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 5px;\
    margin-left: -15px;\
    background-image: url(http://jvribeiro.github.io/livrofilia-logo-icon-500-alt-2.png);\
    background-size: auto 135%;\
    background-repeat: no-repeat;\
    background-position: 110% -40px;\
    border-radius: 90px 30px 30px 90px;\
    -webkit-border-radius: 90px 30px 30px 90px;\
    -moz-border-radius: 90px 30px 30px 90px;\
    -ms-border-radius: 90px 30px 30px 90px;\
    -o-border-radius: 90px 30px 30px 90px;\
    }\
\
.emily .icon {\
    width: 150px;\
    height: 150px;\
    border-radius: 50%;\
    -webkit-border-radius: 50%;\
    -moz-border-radius: 50%;\
    -ms-border-radius: 50%;\
    -o-border-radius: 50%;\
    border: 2px solid #FC92FF;\
    display: inline-block;\
    position: relative;\
    background-image: url('"+emilyIcon+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
    float: left;\
}\
.emily .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
}\
.emily h1 {\
    color: #FF00E9;\
}\
}\
\
\
@media all and (max-width: 479px) {\
.emily {\
    width: calc(100% + 10px);\
    width: -webkit-calc(100% + 10px);\
    width: -moz-calc(100% + 10px);\
    width: -ms-calc(100% + 10px);\
    width: -o-calc(100% + 10px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    background-color: #fde7fc;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 5px;\
    margin-left: -15px;\
    }\
\
.emily .icon {\
    width: 100px;\
    height: 100px;\
    border-radius: 50%;\
    -webkit-border-radius: 50%;\
    -moz-border-radius: 50%;\
    -ms-border-radius: 50%;\
    -o-border-radius: 50%;\
    border: 2px solid #FC92FF;\
    display: inline-block;\
    position: relative;\
    background-image: url('"+emilyIcon+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
    left: calc(50% - 50px);\
    left: -webkit-calc(50% - 50px);\
    left: -moz-calc(50% - 50px);\
    left: -ms-calc(50% - 50px);\
    left: -o-calc(50% - 50px);\
}\
.emily .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
    text-align: center;\
}\
.emily h1 {\
    color: #FF00E9;\
    text-align: center;\
}\
}\
</style>\
<div class=\"emily\">\
   <div class=\"icon\"><\/div>\
   <div class=\"text\">\
     <h1>Emily Abreu<\/h1>\
      <a href=\"" + emilyPosts + "\"><i class='fa fa-bookmark-o'></i> Meus posts<\/a> • " + emilyInstagram+" <br> " + emilyFacebook + " • " + emilySkoob + "\
     <\/div>\
</div>\
",

EMILYP = "\
<style>\
.icon-p-emily {\
    margin-right: 10px;\
    width: 50px;\
    height: 50px;\
    border: 1px solid #CB9CFF;\
    float: left;\
    background-image: url('"+emilyIconP+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.emily-p-name {\
    color: #CB9CFF;\
    font-weight: bold;\
}\
</style>\
<a href=\"/search/label/Emily Abreu\" target=\"_blank\">\
<div class=\"icon-p-emily\"><\/div><\/a> <span class='emily-p-name'><a href=\"/search/label/Emily Abreu\" target=\"_blank\">Emily<\/a>: <\/span>\
",

CAMILA = "\
<style>\
@media all and (min-width: 480px) {\
.camila {\
    width: calc(100% + 10px);\
    width: -webkit-calc(100% + 10px);\
    width: -moz-calc(100% + 10px);\
    width: -ms-calc(100% + 10px);\
    width: -o-calc(100% + 10px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    background-color: #f1e8ff;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 5px;\
    margin-left: -15px;\
    background-image: url(http://jvribeiro.github.io/livrofilia-logo-icon-500-alt-2.png);\
    background-size: auto 135%;\
    background-repeat: no-repeat;\
    background-position: 110% -40px;\
    border-radius: 90px 30px 30px 90px;\
    -webkit-border-radius: 90px 30px 30px 90px;\
    -moz-border-radius: 90px 30px 30px 90px;\
    -ms-border-radius: 90px 30px 30px 90px;\
    -o-border-radius: 90px 30px 30px 90px;\
}\
\
.camila .icon {\
    width: 150px;\
    height: 150px;\
    border-radius: 50%;\
    -webkit-border-radius: 50%;\
    -moz-border-radius: 50%;\
    -ms-border-radius: 50%;\
    -o-border-radius: 50%;\
    border: 2px solid #CB9CFF;\
    display: inline-block;\
    position: relative;\
    background-image: url('"+camilaIcon+"');\
    background-size: 100% auto;\
    background-repeat: no-repeat;\
    background-position: 50%;\
    float: left;\
}\
.camila .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
}\
.camila h1 {\
    color: #A500AF;\
}\
}\
\
\
\
\
@media all and (max-width: 479px) {\
.camila {\
    width: calc(100% + 10px);\
    width: -webkit-calc(100% + 10px);\
    width: -moz-calc(100% + 10px);\
    width: -ms-calc(100% + 10px);\
    width: -o-calc(100% + 10px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    background-color: #f1e8ff;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 5px;\
    margin-left: -15px;\
    }\
\
.camila .icon {\
    width: 100px;\
    height: 100px;\
    border-radius: 50%;\
    -webkit-border-radius: 50%;\
    -moz-border-radius: 50%;\
    -ms-border-radius: 50%;\
    -o-border-radius: 50%;\
    border: 2px solid #CB9CFF;\
    display: inline-block;\
    position: relative;\
    background-image: url('"+camilaIcon+"');\
    background-size: 100% auto;\
    background-repeat: no-repeat;\
    background-position: 50%;\
    left: calc(50% - 50px);\
    left: -webkit-calc(50% - 50px);\
    left: -moz-calc(50% - 50px);\
    left: -ms-calc(50% - 50px);\
    left: -o-calc(50% - 50px);\
}\
.camila .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
    text-align: center;\
}\
.camila h1 {\
    color: #A500AF;\
    text-align: center;\
}\
}\
</style>\
<div class=\"camila\">\
   <div class=\"icon\"><\/div>\
   <div class=\"text\">\
     <h1>Camila Correa<\/h1>\
      <a href='" + camilaPosts + "'><i class='fa fa-bookmark-o'></i> Meus posts<\/a> • " + camilaInstagram + " <br> <a href='http://calmomila.com' target='_blank' rel='nofollow'><i class='fa fa-external-link'></i> Calmomila.com<\/a>\
     <\/div>\
</div>\
",

CAMILAP = "\
<style>\
.icon-p-camila {\
    margin-right: 10px;\
    width: 50px;\
    height: 50px;\
    border: 1px solid #CB9CFF;\
    float: left;\
    background-image: url('"+camilaIconP+"');\
    background-size: 100% auto;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.camila-p-name {\
    color: #CB9CFF;\
    font-weight: bold;\
}\
</style>\
<a href=\"/search/label/Camila Correa\" target=\"_blank\">\
<div class=\"icon-p-camila\"><\/div><\/a> <span class='camila-p-name'><a href=\"/search/label/Camila Correa\" target=\"_blank\">Camila<\/a>: <\/span>\
",

THAMIRIS = "\
<style>\
.tata {\
    width: calc(100% - 30px);\
    width: -webkit-calc(100% - 30px);\
    width: -moz-calc(100% - 30px);\
    width: -o-calc(100% - 30px);\
    width: -ms-calc(100% - 30px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    border-top: 1px solid #D6D6D6;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 30px;\
    }\
\
.tata .icon {\
    margin-top: 15px;\
    width: 200px;\
    height: 200px;\
    display: inline-block;\
    position: relative;\
    border-radius: 30%;\
    -webkit-border-radius: 30%;\
    -moz-border-radius: 30%;\
    -ms-border-radius: 30%;\
    -o-border-radius: 30%;\
    border: 2px solid #FC92FF;\
    background-image: url('"+tataIcon+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.tata .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    border-right: 3px solid #FEDFFF;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
}\
.tata h2 {\
    color: #000000 !important;\
    background-color: #FFF2F8 !important;\
    border-bottom-color: #FF00E9 !important;\
}\
</style>\
<div class=\"tata\">\
   <div class=\"icon\"><\/div>\
   <div class=\"text\">\
     <h2>Thamiris Almeida<\/h2>\
     "+tataInstagram+" - <a href=\""+tataPosts+"\">Ver todos os posts<\/a>\
     <p>16 anos, geminiana, apaixonada por livros — na verdade, eles que são apaixonados por mim. Tenho super mega medo de animais.<\/p>\
     <p>Cores favoritas: <b>preta</b> e <b style=\'color: #FF5AF1\'>rosa</b>.<\/p>\
     <p>Falou em diversão e palhaçada, pode me chamar.<\/p>\
   <\/div>\
</div>\
",

TATAP = "\
<style>\
.icon-p-tata {\
    margin-right: 10px;\
    width: 50px;\
    height: 50px;\
    border: 1px solid #CB9CFF;\
    float: left;\
    background-image: url('"+tataIconP+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.tata-p-name {\
    color: #CB9CFF;\
    font-weight: bold;\
}\
</style>\
<a href=\"/search/label/Thamiris Almeida\" target=\"_blank\">\
<div class=\"icon-p-tata\"><\/div><\/a> <span class='tata-p-name'><a href=\"/search/label/Camila Correa\" target=\"_blank\">Thamiris<\/a>: <\/span>\
",

VICTOR = "\
<style>\
.victor {\
    width: calc(100% - 30px);\
    width: -webkit-calc(100% - 30px);\
    width: -moz-calc(100% - 30px);\
    width: -o-calc(100% - 30px);\
    width: -ms-calc(100% - 30px);\
    height: auto;\
    display: inline-block;\
    font-size: 12pt;\
    border-top: 1px solid #D6D6D6;\
    padding: 10px;\
    text-align: justify;\
    margin-bottom: 30px;\
    }\
\
.victor .icon {\
    margin-top: 15px;\
    width: 200px;\
    height: 200px;\
    border-radius: 30%;\
    -webkit-border-radius: 30%;\
    -moz-border-radius: 30%;\
    -ms-border-radius: 30%;\
    -o-border-radius: 30%;\
    border: 2px solid #E0E0E0;\
    display: inline-block;\
    position: relative;\
    background-image: url('"+victorIcon+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.victor .text {\
    font-family: Segoe UI, Trebucuhet, sans-serif;\
    color: #000;\
    font-size: 12pt;\
    border-right: 3px solid #E0E0E0;\
    width: 400px;\
    max-width: 90%;\
    min-width: 230px;\
    height: auto;\
    padding-left: 15px;\
    padding-right: 15px;\
    display: inline-block;\
    top: 0;\
    left: 170px;\
}\
.victor h2 {\
    color: #6693FD !important;\
    background-color: #F2FFFE !important;\
    border-bottom-color: #9CB3FF !important;\
}\
</style>\
<div class=\"victor\">\
   <div class=\"icon\"><\/div>\
   <div class=\"text\">\
     <h2>Victor Ribeiro<\/h2>\
     "+victorInstagram+" - <a href=\""+victorPosts+"\">Ver todos os posts<\/a>\
     <p>Insira uma bio aqui. ^^<\/p><br><br><br><br>\
   <\/div>\
</div>\
",

VICTORP = "\
<style>\
.icon-p-victor {\
    margin-right: 10px;\
    width: 50px;\
    height: 50px;\
    border: 1px solid #CB9CFF;\
    float: left;\
    background-image: url('"+victorIconP+"');\
    background-size: auto 100%;\
    background-repeat: no-repeat;\
    background-position: 50%;\
}\
.victor-p-name {\
    color: #CB9CFF;\
    font-weight: bold;\
}\
</style>\
<div class=\"icon-p-victor\"><\/div> <span class='victor-p-name'>Victor: <\/span><\/a>\
",

profile = document.body;

(function (window) {
profile.innerHTML = profile.innerHTML.replace(/\[\[emily\]\]/gi,EMILY);
profile.innerHTML = profile.innerHTML.replace(/\[\[Emily\]\]/gi,EMILY);
profile.innerHTML = profile.innerHTML.replace(/\[\[EMILY\]\]/gi,EMILY);
profile.innerHTML = profile.innerHTML.replace(/\[\[emi\]\]/gi,EMILY);
profile.innerHTML = profile.innerHTML.replace(/\[\[Emi\]\]/gi,EMILY);
profile.innerHTML = profile.innerHTML.replace(/\[\[EMI\]\]/gi,EMILY);

profile.innerHTML = profile.innerHTML.replace(/\[\[camila\]\]/gi,CAMILA);
profile.innerHTML = profile.innerHTML.replace(/\[\[Camila\]\]/gi,CAMILA);
profile.innerHTML = profile.innerHTML.replace(/\[\[CAMILA\]\]/gi,CAMILA);

profile.innerHTML = profile.innerHTML.replace(/\[\[thamiris\]\]/gi,THAMIRIS);
profile.innerHTML = profile.innerHTML.replace(/\[\[Thamiris\]\]/gi,THAMIRIS);
profile.innerHTML = profile.innerHTML.replace(/\[\[THAMIRIS\]\]/gi,THAMIRIS);
profile.innerHTML = profile.innerHTML.replace(/\[\[Tata\]\]/gi,THAMIRIS);
profile.innerHTML = profile.innerHTML.replace(/\[\[tata\]\]/gi,THAMIRIS);
profile.innerHTML = profile.innerHTML.replace(/\[\[TATA\]\]/gi,THAMIRIS);

profile.innerHTML = profile.innerHTML.replace(/\[\[victor\]\]/gi,VICTOR);
profile.innerHTML = profile.innerHTML.replace(/\[\[Victor\]\]/gi,VICTOR);
profile.innerHTML = profile.innerHTML.replace(/\[\[VICTOR\]\]/gi,VICTOR);
profile.innerHTML = profile.innerHTML.replace(/\[\[jv\]\]/gi,VICTOR);


profile.innerHTML = profile.innerHTML.replace(/\[emily-p\]/gi,EMILYP);
profile.innerHTML = profile.innerHTML.replace(/\[EMILY-P\]/gi,EMILYP);
profile.innerHTML = profile.innerHTML.replace(/\[Emily-p\]/gi,EMILYP);
profile.innerHTML = profile.innerHTML.replace(/\[Emily-P\]/gi,EMILYP);

profile.innerHTML = profile.innerHTML.replace(/\[camila-p\]/gi,CAMILAP);
profile.innerHTML = profile.innerHTML.replace(/\[CAMILA-P\]/gi,CAMILAP);
profile.innerHTML = profile.innerHTML.replace(/\[Camila-p\]/gi,CAMILAP);
profile.innerHTML = profile.innerHTML.replace(/\[Camila-P\]/gi,CAMILAP);

profile.innerHTML = profile.innerHTML.replace(/\[tata-p\]/gi,TATAP);
profile.innerHTML = profile.innerHTML.replace(/\[TATA-P\]/gi,TATAP);
profile.innerHTML = profile.innerHTML.replace(/\[Tata-p\]/gi,TATAP);
profile.innerHTML = profile.innerHTML.replace(/\[Tata-P\]/gi,TATAP);
})(window);
