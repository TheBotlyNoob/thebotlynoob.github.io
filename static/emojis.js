(async () => {
    const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());
    var gatsby = document.getElementById('___gatsby').innerHTML,
    test;

    console.log(gatsby)

    emojis.map(i => i.aliases.map(j => test = gatsby.replace(console.log(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g')), i.emoji)));
    console.log(test);
})();
