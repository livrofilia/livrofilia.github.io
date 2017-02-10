/*
  Livrofilia Book Info

  author: Victor Ribeiro
  link: http://jvribeiro.github.io

  dependecies: jquery
*/


//<![CDATA[
var livro = [],
listItemNumber = [],
authorNumber = [],
s5_d9e3q8 = []
urlDaImagem = [],
titulo = [],
tituloOriginal = [],
autor1 = [],
autor2 = [],
autor3 = [],
autor4 = [],
autor5 = [],
editora = [],
paginas = [],
midia = [],
linkDoWattpad = [],
linkDaResenha = [];

for ( i = 1; i <= $( '.book_info' ).size(); i++ )
{
  livro[i] = {},

  urlDaImagem[i] = document.querySelector( '._' + i + ' .urlDaImagem' ).innerHTML,
  titulo[i] = document.querySelector( '._' + i + ' .titulo' ).innerHTML,
  tituloOriginal[i] = document.querySelector( '._' + i + ' .tituloOriginal' ).innerHTML,
  autor1[i] = document.querySelector( '._' + i + ' .autor1' ).innerHTML,
  autor2[i] = document.querySelector( '._' + i + ' .autor2' ).innerHTML,
  autor3[i] = document.querySelector( '._' + i + ' .autor3' ).innerHTML,
  autor4[i] = document.querySelector( '._' + i + ' .autor4' ).innerHTML,
  autor5[i] = document.querySelector( '._' + i + ' .autor5' ).innerHTML,
  editora[i] = document.querySelector( '._' + i + ' .editora' ).innerHTML,
  paginas[i] = document.querySelector( '._' + i + ' .paginas' ).innerHTML,
  midia[i] = document.querySelector( '._' + i + ' .midia' ).innerHTML,
  linkDoWattpad[i] = document.querySelector( '._' + i + ' .linkDoWattpad' ).innerHTML,
  linkDaResenha[i] = document.querySelector( '._' + i + ' .linkDaResenha' ).innerHTML;

  livro[i].urlDaImagem =  JSON.parse( JSON.stringify(urlDaImagem[i]) );
  livro[i].titulo =  JSON.parse( JSON.stringify(titulo[i]) );
  livro[i].tituloOriginal =  JSON.parse( JSON.stringify(tituloOriginal[i]) );
  livro[i].autor1 =  JSON.parse( JSON.stringify(autor1[i]) );
  livro[i].autor2 =  JSON.parse( JSON.stringify(autor2[i]) );
  livro[i].autor3 =  JSON.parse( JSON.stringify(autor3[i]) );
  livro[i].autor4 =  JSON.parse( JSON.stringify(autor4[i]) );
  livro[i].autor5 =  JSON.parse( JSON.stringify(autor5[i]) );
  livro[i].editora =  JSON.parse( JSON.stringify(editora[i]) );
  livro[i].paginas =  JSON.parse( JSON.stringify(paginas[i]) );
  livro[i].midia =  JSON.parse( JSON.stringify(midia[i]) );
  livro[i].linkDoWattpad =  JSON.parse( JSON.stringify(linkDoWattpad[i]) );
  livro[i].linkDaResenha =  JSON.parse( JSON.stringify(linkDaResenha[i]) );

  console.log('Informações de ' + livro[i].titulo + ': ' + JSON.stringify(livro[i]) + '\n\n');

  document.querySelector( '._' + i ).innerHTML = '';

  $( '._' + i ).append(
    "<div class='lf-book-info-holder' style='background-image: url(" + livro[i].urlDaImagem + ");'>"
  + "  <div class='lf-book-info-cover'>"
  + "    <img src='" + livro[i].urlDaImagem + "' />"
  + "  </div>"
  + "  <div class='lf-book-info-info'><div class='lf-book-info-overlay'></div>"
  + "    <ul>"
  + "      <li class='lf_Li_titulo'>Título: <strong>" + livro[i].titulo + "</strong></li>"
  + "      <li class='lf_Li_tituloOriginal'>Título Original: <strong>" + livro[i].tituloOriginal + "</strong></li>"
  + "      <li class='lf_Li_autor'><span class='lf-book-info-author'>Autor</span>: "
  + "          <span class='author-1'>"
  + "            <strong>"
  + "             <a href='/search/label/" + livro[i].autor1 + "'>" + livro[i].autor1 + "</a>"
  + "            </strong>"
  + "          </span>"
  + "        <div class='author'>"
  + "          <div class='author-2'>"
  + "            <strong>"
  + "             <a href='/search/label/" + livro[i].autor2 + "'>" + livro[i].autor2 + "</a>"
  + "            </strong>"
  + "          </div>"
  + "          <div class='author-3'>"
  + "            <strong>"
  + "             <a href='/search/label/" + livro[i].autor3 + "'>" + livro[i].autor3 + "</a>"
  + "            </strong>"
  + "          </div>"
  + "          <div class='author-4'>"
  + "            <strong>"
  + "             <a href='/search/label/" + livro[i].autor4 + "'>" + livro[i].autor4 + "</a>"
  + "            </strong>"
  + "          </div>"
  + "          <div class='author-5'>"
  + "            <strong>"
  + "             <a href='/search/label/" + livro[i].autor5 + "'>" + livro[i].autor5 + "</a>"
  + "            </strong>"
  + "          </div>"
  + "        </div>"
  + "      </li>"
  + "      <li class='lf_Li_editora'>Editora: <strong>" + livro[i].editora + "</strong></li>"
  + "      <li class='lf_Li_paginas'>Páginas: <strong>" + livro[i].paginas + "</strong></li>"
  + "      <li class='lf_Li_midia'>Mídia: <strong>" + livro[i].midia + "</strong></li>"
  + "      <li class='lf_Li_linkDoWattpad'><strong><a href='" + livro[i].linkDoWattpad + "' target='_blank' rel='nofollow'><i class='fa fa-hand-o-right'></i> Leia no Wattpad</a></strong></li>"
  + "      <br>"
  + "      <li class='lf_Li_linkDaResenha'><strong><a href='" + livro[i].linkDaResenha + "' target='_blank' rel='nofollow'><i class='fa fa-hand-o-right'></i> Leia a Resenha do Livrofilia</a></strong></li>"
  + "      <div class='s5_d9e3q8'></div>"
  + "    </ul>"
  + "  </div>"
  + "</div>"
  );

  if ( autor2[i] == '' ) document.querySelector( '._' + i + ' .author-2' ).remove();
  if ( autor3[i] == '' ) document.querySelector( '._' + i + ' .author-3' ).remove();
  if ( autor4[i] == '' ) document.querySelector( '._' + i + ' .author-4' ).remove();
  if ( autor5[i] == '' ) document.querySelector( '._' + i + ' .author-5' ).remove();

  if ( autor1[i] == '' ) $( '._' + i + ' .lf_Li_autor' ).remove();
  if ( tituloOriginal[i] == '' ) $( '._' + i + ' .lf_Li_tituloOriginal' ).remove();
  if ( editora[i] == '' ) $( '._' + i + ' .lf_Li_editora' ).remove();
  if ( paginas[i] == '' ) $( '._' + i + ' .lf_Li_paginas' ).remove();
  if ( midia[i] == '' ) $( '._' + i + ' .lf_Li_midia' ).remove();
  if ( linkDoWattpad[i] == '' ) $( '._' + i + ' .lf_Li_linkDoWattpad' ).remove();
  if ( linkDaResenha[i] == '' ) $( '._' + i + ' .lf_Li_linkDaResenha' ).remove();

  listItemNumber[i] = $( '._' + i + ' .lf-book-info-info ul li' ).size();
  authorNumber[i] = $( '._' + i + ' .lf_Li_autor .author div' ).size();
  s5_d9e3q8[i] = document.querySelector( '._' + i + ' .s5_d9e3q8' );

       if ( listItemNumber[i] == 1 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br><br><br><br><br><br>';
  else if ( listItemNumber[i] == 2 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br><br><br><br>';
  else if ( listItemNumber[i] == 3 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br><br><br>';
  else if ( listItemNumber[i] == 4 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br><br>';
  else if ( listItemNumber[i] == 5 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br>';
  else if ( listItemNumber[i] == 6 ) s5_d9e3q8[i].innerHTML = '<br><br><br><br>';
  else if ( listItemNumber[i] == 7 ) s5_d9e3q8[i].innerHTML = '<br><br><br>';
  else if ( listItemNumber[i] == 8 ) s5_d9e3q8[i].innerHTML = '<br><br>';

  if ( authorNumber[i] != 0 ) document.querySelector( '._' + i + ' .lf-book-info-author' ).innerHTML = 'Autores';
  else document.querySelector( '._' + i + ' .lf-book-info-author' ).innerHTML = 'Autor(a)';
};

$( 'head' ).append('<link rel="stylesheet" href="//livrofilia.github.io/css/lf.book_info.css" />');
//]]>
