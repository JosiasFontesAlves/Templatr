function templatr() {
    const { body } = document, res = [];

    [...arguments].forEach(elem => res.push(document.createElement(typeof elem === 'string' ? elem : Object.keys(elem))));

    res.forEach((el, i) => {
        if (typeof arguments[i] === 'object') {
            for (let tag in arguments[i]) {
                for (let atr in arguments[i][tag])
                    el[atr] = arguments[i][tag][atr];
            }
        }
    });

    body.append(...res);
}