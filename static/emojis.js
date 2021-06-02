(async () => {
    const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());

    emojis.map(i => i.aliases.map(j => document.body.innerHTML = document.body.innerHTML.replace(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g'), i.emoji)));
})();
