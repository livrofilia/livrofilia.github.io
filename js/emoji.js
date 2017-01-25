var _before = '<span class="emoji_holder"><img class="emoji" src="http://livrofilia.github.io/img/emoji/',
    _after = '.png" /></span>',

    // Expressões
    _glasses = _before + 'Sunglasses_Emoji_42x42' + _after,
    _moneyTongue = _before + 'Money_Face_Emoji_Icon_42x42' + _after,
    _angry = _before + 'Angry_Emoji_42x42' + _after,
    _smileShy_1 = _before + 'Smiling_Face_Emoji_with_Blushed_Cheeks_42x42' + _after,
    _impressed = _before + 'Hushed_Face_Emoji_42x42' + _after,
    _anguished = _before + 'Anguished_Face_Emoji_42x42' + _after,
    _wink = _before + 'Wink_Emoji_42x42' + _after,
    _neutralFace = _before + 'Neutral_Face_Emoji_42x42' + _after,
    _tongue = _before + 'Hungry_Face_Emoji_42x42' + _after,
    _happy = _before + 'Smiling_Emoji_with_Eyes_Opened_Icon_42x42' + _after,
    _lightSmile = _before + 'Slightly_Smiling_Face_Emoji_Icon_42x42' + _after,
    _oops = _before + 'Smiling_with_Sweat_Emoji_Icon_42x42' + _after,
    _winkTongue = _before + 'Tongue_Out_Emoji_with_Winking_Eye_Icon_42x42' + _after,
    _kissing = _before + 'Blow_Kiss_Emoji_42x42' + _after,
    _heartEyes = _before + 'Heart_Eyes_Emoji_42x42' + _after,
    _lol = _before + 'Tears_of_Joy_Emoji_Icon_42x42' + _after,
    _omg = _before + 'OMG_Face_Emoji_42x42' + _after,

    // Simbolos
    _heart = _before + 'Red_Heart_Emoji_Icon_42x42' + _after,
    _brokenHeart = _before + 'Broken_Red_Heart_Emoji_Icon_42x42' + _after,




    RELOGIO = _before + '001' + _after,
    PALETA = _before + '002' + _after,
    SOM = _before + '003' + _after,
    VOLTAR = _before + '004' + _after,
    ESTRELA = _before + '005' + _after,
    MUNDO = _before + '006' + _after,
    CANCELAR = _before + '007' + _after,
    OK = _before + '008' + _after,
    IDEIA = _before + '012' + _after,
    CASA = _before + '013' + _after,
    BAIXO = _before + '014' + _after,
    TACA = _before + '015' + _after,
    FOTO = _before + '016' + _after,
    CONTRARIADO = _before + '022' + _after,
    NOTA = _before + '025' + _after,
    BLOGGER = _before + '026' + _after,
    ESPANTADO = _before + '029' + _after,
    TRISTE = _before + '030' + _after,
    RAIO = _before + '032' + _after,
    CHAVE = _before + '033' + _after,
    MSN = _before + '034' + _after,
    MSN2 = _before + '035' + _after,
    TELEFONE = _before + '036' + _after,
    PIZZA = _before + '037' + _after,
    PRESENTE = _before + '038' + _after,
    CIMA = _before + '040' + _after,
    BANANA = _before + '041' + _after,


    emoji = document.body;


    $( document ).ready(function ()
    {
      loadEmoji();
      window.setTimeout(function ()
      {
        window.setInterval(function ()
        {
          loadEmoji();
        }, 15000);
      }, 15000);
    });


function loadEmoji ()
{
  // Expressões
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[oculos\]\]|8(|-)(\)|\]))/gi, " " + _glasses );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[rico\]\]|\$(|-)(\]|\)))/gi, " " + _moneyTongue );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[zangado\]\]|&gt;:(|-)(o|\[|\())/gi, " " + _angry );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[sorriso_timido\]\]|\^(|_|-)\^)/gi, " " + _smileShy_1 );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[impressionado\]\]|:(|-)(o|0))/gi, " " + _impressed );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[(gasp|GASP)\]\]|D(|-):)/g, " " + _anguished );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[piscando\]\]|😉|;(|-)(\)|\]))/gi, " " + _wink );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[neutro\]\]|:(|-)(\||I|1))/g, " " + _neutralFace );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[lingua\]\]|:(|-)p)/gi, " " + _tongue );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[(feliz|FELIZ|alegre|ALEGRE)\]\]|:(|-)D)/g, " " + _happy );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[sorrisinho\]\]|:(|-)(\)|\]))/gi, " " + _lightSmile );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[ops\]\]|😅)/gi, " " + _oops );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[lingua_piscando\]\]|;(|-)p)/gi, " " + _winkTongue );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[beijo\]\]|(:|;)(|-)\*)/gi, " " + _kissing );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[apaixonado\]\]|♥(|_|-)♥)/gi, " " + _heartEyes );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[(kk|kkk|kkkk|kkkkk|kkkkkk|lol)\]\])/gi, " " + _lol );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[omg\]\])/gi, " " + _omg );

  // Simbolos
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[coração\]\]|♥|&lt;3|s2)/gi, " " + _heart );
  emoji.innerHTML = emoji.innerHTML.replace( / (\[\[coração_partido\]\]|&lt;\/3)/gi, " " + _brokenHeart );


  emoji.innerHTML = emoji.innerHTML.replace( /(\[\[relogio\]\])/gi,RELOGIO );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[paleta\]\]/gi ,PALETA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[som\]\]/gi ,SOM );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[voltar\]\]/gi ,VOLTAR );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[estrela\]\]/gi ,ESTRELA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[mundo\]\]/gi ,MUNDO );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[cancelar\]\]/gi ,CANCELAR );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[ok\]\]/gi ,OK );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[ideia\]\]/gi ,IDEIA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[casa\]\]/gi ,CASA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[baixo\]\]/gi ,BAIXO );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[taca\]\]/gi ,TACA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[foto\]\]/gi ,FOTO );
  emoji.innerHTML = emoji.innerHTML.replace( /( \:S)/gi ," "+CONTRARIADO );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[8\]\]/gi ,NOTA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[espantado\]\]/gi ,ESPANTADO );
  emoji.innerHTML = emoji.innerHTML.replace( /( \:\()/gi ," "+TRISTE );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[raio\]\]/gi ,RAIO );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[chave\]\]/gi ,CHAVE );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[msn\]\]/gi ,MSN );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[msn2\]\]/gi ,MSN2 );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[telefone\]\]/gi ,TELEFONE );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[pizza\]\]/gi ,PIZZA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[presente\]\]/gi ,PRESENTE );

  emoji.innerHTML = emoji.innerHTML.replace( /\[\[cima\]\]/gi ,CIMA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[banana\]\]/gi ,BANANA );
  emoji.innerHTML = emoji.innerHTML.replace( /\[\[blogger\]\]/gi ,BLOGGER );


  $( 'head' ).append('<link rel="stylesheet" href="http://livrofilia.github.io/css/emoji/emoji.css" />');
}
