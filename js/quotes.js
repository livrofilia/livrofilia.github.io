var rdm = Math.floor(Math.random() * cita.length);
var q = document.getElementById('cit-text');
var citaText = cita[rdm];
var citaBook = livro[rdm];
var citaAuthor = autor[rdm];

q.innerHTML = citaText
+ "<br><div class='cita-book'>— "
+ citaBook
+ "</div>"
+ "<div class='cita-aut'>("
+ "<a href='/search/label/" + citaAuthor + "'>"
+ citaAuthor
+ "</a>)</div>";
