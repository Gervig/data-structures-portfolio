import DynamicArray from "./dynamicarray.js";

// opret et array med plads til fem elementer
const darr = new DynamicArray(5); 

// udskriver at der er 0 elementer i arrayet
console.log(`there are currently ${darr.size()} elements in the array`);

// tilføjer tre elementer
darr.add("Harry Potter");
darr.add("Ronald Weasley");
darr.add("Hermione Granger");

// udskriver alle tre elementer - det forventes ikke at du får den til at virke med for...of
for (let i=0; i < darr.size(); i++) {
  console.log(darr.get(i));
}

// og tilføjer tre mere - og overstiger dermed antallet af pladser
darr.add("Neville Longbottom");
darr.add("Fred Weasley");
darr.add("George Weasley");

// udskriver hvor mange der nu er plads til - sandsynligvis 10
console.log(`array now has a capacity of ${darr.capacity()}`);

// indsætter Cho Chang i listen mellem Harry og Ron
// - rykker alle efterfølgende en tak frem
darr.insert(1, "Cho Chang");

// udskriver alle elementer igen, nu Harry, Cho, Ron, Hermione, Neville, Fred, George
for (let i=0; i < darr.size(); i++) {
  console.log(darr.get(i));
}

// erstatter Cho Chang med Ginny Weasley
darr.set(1, "Ginny Weasley");

// sletter et af elementerne, men bevarer de efterfølgende
darr.remove(5);

// udskriv endelig hele listen igen ...