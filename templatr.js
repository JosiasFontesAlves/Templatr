function templatr() {
    const { body } = document;
    [...arguments].forEach(elem => {
        let atr = [], res;
        for (let tag in elem) {
            for (let key in elem[tag])
                atr.push(`${key}="${elem[tag][key]}"`);

            res = typeof elem == 'string' ? `<${elem}></${elem}>` : `<${tag} ${atr.join(' ')}></${tag}>`;
        }
        body.innerHTML += res;
    });
}

templatr('header', { div: { id: 'root' } }, 'footer');