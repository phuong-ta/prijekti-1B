function tarkasta() {
    var etunimi = document.forms["lomake"]["etunimi"].value;
    var sukunimi = document.forms["lomake"]["sukunimi"].value;
    var ika = document.forms["lomake"]["ika"].value;
    var osoite = document.forms["lomake"]["osoite"].value;
    var postinumero = document.forms["lomake"]["postinumero"].value;
    var paikka = document.forms["lomake"]["paikka"].value;
    var puh = document.forms["lomake"]["puh"].value;
    var email = document.forms["lomake"]["email"].value;
    var sukupuoli = document.forms["lomake"]["sukupuoli"].value;
    var content= document.forms["lomake"]["content"].value;
    var ehdot = /\S+@\S+/;

    if (etunimi.length < 5 ) {
        alert("Anna vähintään 5-merkkinen etunimi");
        document.forms["lomake"]["etunimi"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (sukunimi.length < 2) {
        alert("Anna vähintään 3-merkkinen sukunimi");
        document.forms["lomake"]["sukunimi"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (ika =='') {
        alert("Ole hyvä, valitse ikäryhmä");
        document.forms["lomake"]["ika"].style.backgroundColor  = "#FFE4C4";
        return false;
    } else if (osoite =='') {
        alert("Ole hyvä, laita osoite");
        document.forms["lomake"]["osoite"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (postinumero.length <5) {
        alert("Anna vähintään 5-numero postinumero");
        document.forms["lomake"]["postinumero"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (paikka =='') {
        alert("Ole hyvä, laita sinun postitoimipaikka");
        document.forms["lomake"]["paikka"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (puh.length <10) {
        alert("Antamasi puhelinnumero ei kelpaa, tarkistaa ja laita uudestaan");
        document.forms["lomake"]["puh"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (!ehdot.test(email)) {
        alert("Antamasi sähköpostisi ei kelpaa, tarkistaa ja laita uudestaan");
        document.forms["lomake"]["email"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (sukupuoli =='') {
        alert("Valitse sukupuoli, valitse 'en halua ilmoittaa', jos et halua ilmoittaa");
        document.forms["lomake"]["sukupuoli"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else if (content.length< 6) {
        alert("anna syy, vaikka 'Alennus'");
        document.forms["lomake"]["content"].style.backgroundColor  = "#FFE4C4";
        return false;
    }else{
        alert("Liityminen onistui, tervetuloa Tokmaniin");
    }
  }

  function tyhjenna(lomake)
{
  var clean = lomake.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}