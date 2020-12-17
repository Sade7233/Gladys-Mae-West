var Fact1 = document.getElementById("Fact1")
var Fact2 = document.getElementById("Fact2")
var Fact3 = document.getElementById("Fact3")

var FactParagraph = document.getElementById("FactParagraph")

function funFact1 () {
  //when Fact 1 button clicked, paragraph changes to Fun Fact
FactParagraph.innerHTML="Gladys is a member of the Alpha Kappa Alpha (AKA) sorority."
}

Fact1.addEventListener("click", funFact1);

function funFact2 () {
  //when Fact 2 button clicked, paragraph changes to Fun Fact
FactParagraph.innerHTML="Gladys actually favors paper maps over the electronic GPS system because she would rather rely on her own calculations than risk that the system's data points are wrong or outdated."
}

Fact2.addEventListener("click", funFact2);

function funFact3 () {
  //when Fact 3 button clicked, paragraph changes to Fun Fact
FactParagraph.innerHTML="Gladys met her husband, a fellow mathematician, at work. He was one of ther other 3 black folks who worked at the naval base!"
}

Fact3.addEventListener("click", funFact3);

/*she is a member of the Alpha Kappa Alpha (AKA) sorority
2) she actually favors paper maps over the electronic GPS system because she'd rather rely on her own calculations than risk that the system's data points are wrong or outdated
3) She met her husband, a fellow mathematician (how cuteee!) at work (surprise! he was one of*/
