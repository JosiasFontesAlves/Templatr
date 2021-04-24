/**
 * @param { string | object } elems 
 */
function templatr(elems) {
    const { body } = document, t = res => body.innerHTML += res;

    [...arguments].forEach(el => {
        switch (typeof el) {
            case 'string':
                t(`<${el}></${el}>`);
                break;
            case 'object':
                for (let e in el) {
                    let atr = [];
                    for (let a in el[e]) {
                        atr.push(`${a}="${el[e][a]}"`);
                    }
                    t(`<${e} ${atr.join(' ')}></${e}>`);
                }
                break;
        }
    });
}

templatr(
    'main', { div: { id: 'container', class: 'mts' } },
    { section: { id: 'adf', class: 'korg' } }, 'footer'
);