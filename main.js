var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Soy Desarrolladora Fronted Jr.!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Creando el futuro')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('<strong>inovacion</strong>')
    .pauseFor(2500)
    .start();