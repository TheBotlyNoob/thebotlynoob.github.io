(async () => {
    const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());

    emojis.map(i => i.aliases.map(j => document.getElementById('___gatsby').innerHTML = document.getElementById('___gatsby').innerHTML.replace(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g'), i.emoji)));
})();
