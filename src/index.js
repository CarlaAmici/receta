import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let instrucciones = "Torta casera: ";
let ingredientes =
  "Ingredientes que vamos a precisar (300 gramos de harina leudante, 300 gramos de azúcar, 3 huevos, 200 mililitros de leche, esencia de vainilla). ";
let pasouno =
  "Para comenzar a preparar esta torta casera hay que separar las claras de las yemas de los huevos y batir las yemas durante 2 minutos con una batidora.";
let pasodos =
  "Transcurridos los 2 minutos, añade la mitad del azúcar y sigue batiendo hasta integrarlo por completo. El resultado debe ser una mezcla espumosa y uniforme para que la torta quede bien esponjosa.";
let pasotres =
  "Cuando las yemas y el azúcar estén bien incorporados, puedes dejar de utilizar la batidora para emplear batidor manual si lo prefieres. Dicho esto, agrega la leche y mezcla haciendo movimientos circulares. Luego, incorpora la esencia de vainilla y sigue revolviendo hasta obtener una masa homogénea.";
let pasocuatro =
  "Ahora, añade poco a poco la harina previamente tamizada para conseguir una masa con más aire y, por ende, una torta casera más esponjosa. Para integrar este ingrediente, recomendamos utilizar una espátula y realizar movimientos envolventes suaves.";
let pasocinco =
  "Bate las claras a punto de nieve con el azúcar restante, como si quisieras hacer un merengue suizo. Después, incorpora las claras batidas a la mezcla haciendo movimientos envolventes para que no pierdan volumen. Precalienta el horno a 180 ºC.";
let pasoseis =
  "Para terminar, coloca la masa en el molde seleccionado, previamente engrasado con mantequilla o aceite y enharinado, y hornea a 150 grados durante 60 minutos aproximadamente. Dependiendo del tipo de horno, puede tardar más.";
let pasosiete =
  "Comprueba con un palillo que el bizcocho de vainilla está hecho, deja que se enfríe y desmolda. Puedes decorarlo con azúcar glas espolvoreado por encima o elaborar una cobertura de chocolate blanco, por ejemplo.";
console.log(
  instrucciones +
    "\n" +
    ingredientes +
    "\n" +
    pasouno +
    "\n" +
    pasodos +
    "\n" +
    pasotres +
    "\n" +
    pasocuatro +
    "\n" +
    pasocinco +
    "\n" +
    pasoseis +
    "\n" +
    pasosiete
);
