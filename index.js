/** 
 * @param {string[] | object} elems 
 */
function templatr(elems) {
    const { body } = document, t = res => body.innerHTML += res;

    [...arguments].forEach(el => {
        switch (Array.isArray(el)) {
            case true: // se forem tags vazias
                for (let x in el) {
                    t(`<${el[x]}></${el[x]}>`);
                }
                break;
            default: // tags com atributos
                for (let tag in el) {
                    let atr = [];
                    for (let k in el[tag]) {
                        atr.push(`${k}="${el[tag][k]}"`);
                    }
                    t(`<${tag} ${atr.join(' ')}></${tag}>`);
                }
                break;
        }
    });
}

templatr( // Teste básico
    ['header', 'main', 'footer'],
    { div: { id: 'zk', class: 'mts' } },
    { div: { id: 'teste', class: 'm84ts' } },
);