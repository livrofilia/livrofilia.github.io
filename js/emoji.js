var _before = '<span class="emoji_holder"><img class="emoji" src="//livrofilia.github.io/img/emoji/',
    _after = '.png" /></span>',

    // Expressões
    _glasses = _before + 'Sunglasses_Emoji_42x42' + _after,
    _moneyTongue = _before + 'Money_Face_Emoji_Icon_42x42' + _after,
    _angry = _before + 'Angry_Emoji_42x42' + _after,
    _oops = _before + 'Smiling_with_Sweat_Emoji_Icon_42x42' + _after,
    _smileShy_1 = _before + 'Smiling_Face_Emoji_with_Blushed_Cheeks_42x42' + _after,
    _impressed = _before + 'Hushed_Face_Emoji_42x42' + _after,
    _anguished = _before + 'Anguished_Face_Emoji_42x42' + _after,
    _wink = _before + 'Wink_Emoji_42x42' + _after,
    _neutralFace = _before + 'Neutral_Face_Emoji_42x42' + _after,
    _tongue = _before + 'Hungry_Face_Emoji_42x42' + _after,
    _happy = _before + 'Smiling_Emoji_with_Eyes_Opened_Icon_42x42' + _after,
    _lightSmile = _before + 'Slightly_Smiling_Face_Emoji_Icon_42x42' + _after,
    _winkTongue = _before + 'Tongue_Out_Emoji_with_Winking_Eye_Icon_42x42' + _after,
    _kissing = _before + 'Blow_Kiss_Emoji_42x42' + _after,
    _heartEyes = _before + 'Heart_Eyes_Emoji_42x42' + _after,
    _lol = _before + 'Tears_of_Joy_Emoji_Icon_42x42' + _after,
    _omg = _before + 'OMG_Face_Emoji_42x42' + _after,
    _moon1 = _before + 'Dark_Blue_Moon_Emoji_42x42' + _after,
    _moon2 = _before + 'Yellow_Moon_Emoji_42x42' + _after,

    // Simbolos
    _heart = _before + 'Heart_Red_Emoji_Icon_42x42' + _after,
    _heartBlue = _before + 'Heart_Blue_Emoji_Icon_42x42' + _after,
    _heartGreen = _before + 'Heart_Green_Emoji_Icon_42x42' + _after,
    _heartYellow = _before + 'Heart_Yellow_Emoji_Icon_42x42' + _after,
    _heartPurple = _before + 'Heart_Purple_Emoji_Icon_42x42' + _after,
    _brokenHeart = _before + 'Broken_Red_Heart_Emoji_Icon_42x42' + _after,


    noiframe = document.querySelector( ':not(iframe)' ),

    emoji = {
      create: function ()
      {
        // Expressões
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😎|\[\[oculos\]\]|8(|-)(\)|\]))/gi, " " + _glasses );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (🤑|\[\[rico\]\]|\$(|-)(\]|\)))/gi, " " + _moneyTongue );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😠|\[\[zangado\]\]|&gt;:(|-)(o|\[|\())/gi, " " + _angry );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😅|\[\[ops\]\]|\^(|_|-)\^\')/gi, " " + _oops );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😊|\[\[sorriso_timido\]\]|\^(|_|-)\^)/gi, " " + _smileShy_1 );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😯|\[\[impressionado\]\]|:(|-)(o|0))/gi, " " + _impressed );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😧|\[\[(gasp|GASP)\]\]|D(|-):)/g, " " + _anguished );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😉|\[\[piscando\]\]|;(|-)(\)|\]))/gi, " " + _wink );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😐|\[\[neutro\]\]|:(|-)(\||I|1))/g, " " + _neutralFace );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😋|\[\[lingua\]\]|:(|-)p)/gi, " " + _tongue );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😃|\[\[(feliz|FELIZ|alegre|ALEGRE)\]\]|😃|:(|-)D)/g, " " + _happy );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (🙂|\[\[sorrisinho\]\]|:(|-)(\)|\]))/gi, " " + _lightSmile );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😜|\[\[lingua_piscando\]\]|;(|-)p)/gi, " " + _winkTongue );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😘|\[\[beijo\]\]|(:|;)(|-)\*)/gi, " " + _kissing );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😍|\[\[apaixonado\]\]|♥(|_|-)♥)/gi, " " + _heartEyes );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😂|\[\[(kk|kkk|kkkk|kkkkk|kkkkkk|lol)\]\]|😂)/gi, " " + _lol );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (😱|\[\[omg\]\])/gi, " " + _omg );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (🌚|\[\[aquela_carinha\]\]|🌚)/gi, " " + _moon1 );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (🌝|\[\[aquela_carinha2\]\]|🌝)/gi, " " + _moon2 );

        // Simbolos
        noiframe.innerHTML = noiframe.innerHTML.replace( / (❤|\[\[coração\]\]|♥|&lt;3|s2)/gi, " " + _heart );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (💙|\[\[coração_azul\]\]|♥_azul|&lt;3_azul|s2_azul)/gi, " " + _heartBlue );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (💚|\[\[coração_verde\]\]|♥_verde|&lt;3_verde|s2_verde)/gi, " " + _heartGreen );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (💛|\[\[coração_amarelo\]\]|♥_amarelo|&lt;3_amarelo|s2_amarelo)/gi, " " + _heartYellow );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (💜|\[\[coração_roxo\]\]|♥_roxo|&lt;3_roxo|s2_roxo)/gi, " " + _heartPurple );
        noiframe.innerHTML = noiframe.innerHTML.replace( / (💔|\[\[coração_partido\]\]|&lt;\/3)/gi, " " + _brokenHeart );

        $( 'head' ).append('<link rel="stylesheet" href="//livrofilia.github.io/css/emoji/emoji.css" />');
      }
    };


    $( document ).ready(function ()
    {
      emoji.create();
    });
