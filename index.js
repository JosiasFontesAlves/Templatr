/** 
 * @param {string[] | object} elems 
 */
function templatr(elems) {
    const { body } = document, t = res => body.innerHTML += res;

    [...arguments].forEach(el => {
        if (typeof el == 'object') {
            switch (Array.isArray(el)) {
                case true: // se forem tagss vazias
                    for (let x in el) {
                        t(`<${el[x]}></${el[x]}>`);
                    }
                    break;
            }
        }
    });
}

templatr(
    ['header', 'main', 'footer'],
);