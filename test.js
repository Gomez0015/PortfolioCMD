const filesystem = {
    home: {
        guest: {
            guesttxt: "Hello Guest!"
        },
        hometxt: 'Hello Home!'
    },
    root: {
        roottxt: 'Hello Root!'
    }
}


var pieces = 'home/guest/'.split('/');

pieces = pieces.filter(element => {
    return element !== '';
});


var node = filesystem;

for (var i = 0; i < pieces.length; ++i) {

    node = node[pieces[i]];

    if (!node) {
        console.log('not found');
    } else {
        console.log(node);
    }
}