const heroName = "Dezzogo";
const heroLevel = Math.round(Math.random() * 11000);

if (heroLevel <= 1000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Ferro.`);
} else if (heroLevel >= 1001 && heroLevel <= 2000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Bronze.`);
} else if (heroLevel >= 2001 && heroLevel <= 5000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Prata.`);
} else if (heroLevel >= 5001 && heroLevel <= 7000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Ouro.`);
} else if (heroLevel >= 7001 && heroLevel <= 8000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Platina.`);
} else if (heroLevel >= 8001 && heroLevel <= 9000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Ascendente.`);
} else if (heroLevel >= 9001 && heroLevel <= 10000) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Imortal.`);
} else if (heroLevel >= 10001) {
    console.log(`${heroName}'s hero level is ${heroLevel}, so its rank is Radiante.`);
} else {
    console.log(`Sorry, ${heroName}, I don't know your hero's level!`);
}
