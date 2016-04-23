var db = connect("localhost:27017/rpdb");
var steps = null;

var stepItems = [
{
    title: "Boom shackalack",
    description: "Etiam a boom shackalack gizzle augue i saw beyonces tizzles and my pizzle went crizzle accumsizzle. We gonna chung in est. Vivamizzle mauris dolor, viverra shizznit, facilisizzle id, mah nizzle dang, pizzle. You son of a bizzle pimpin' ipsizzle owned gangsta faucibus orci luctizzle et cool posuere stuff Curae; Black crackalackin. Integer faucibizzle. Ass rizzle dawg shizzle my nizzle crocodizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle rutrizzle aliquizzle dang. Sed facilisizzle. Black sizzle nulla, venenatis eu, scelerisque daahng dawg, blandizzle ac, magna."
}, {
    title: "The bizzle gizzle",
    description: "Nulla the bizzle. Etizzle yippiyo i'm in the shizzle fo shizzle. Vestibulum vulputate arcu id sheezy. Crizzle accumsizzle pot izzle fizzle. Curabitur adipiscing things vizzle bow wow wow. Sheezy laorizzle, its fo rizzle eget gangsta ghetto, ass sizzle fo shizzle pizzle, eu placerizzle i'm in the shizzle mauris crazy mi. Etiam adipiscing, lectus izzle funky fresh aliquizzle, tellizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle away orci, a sagittizzle nulla mi crackalackin purizzle. Ma nizzle dawg mattis owned. Shut the shizzle up fo aliquizzle dolor. Mah nizzle leo enim, things dizzle."
}, {
    title: "Izzle sheezy",
    description: "Aliquizzle cool, yippiyo izzle blandizzle sheezy, nibh fo shizzle tempizzle dizzle, my shizz mollis magna phat pellentesque est. Maecenas placerat, libero daahng dawg euismizzle crazy, ipsum yo gravida that's the shizzle, izzle vehicula nisl ass owned tellivizzle. Away nulla bling bling, imperdiet quizzle, uhuh ... yih! volutpizzle, pulvinar i saw beyonces tizzles and my pizzle went crizzle, pede. Vivamizzle funky fresh. Curabitizzle placerizzle, daahng dawg quis cursizzle sheezy."
}];

db.steps.insert(stepItems[0]);
db.steps.insert(stepItems[1]);
db.steps.insert(stepItems[2]);


