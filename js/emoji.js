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


    emoji = document.body;

    $( document ).ready(function ()
    {
      loadEmoji();
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


  $( '#emoji_css' ).remove();
  $( 'head' ).append('<link id="emoji_css" rel="stylesheet" href="http://livrofilia.github.io/css/emoji/emoji.css" />');
}
