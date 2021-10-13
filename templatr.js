function templatr() {
    [...arguments].forEach(elem => {
        const el = document.createElement(typeof elem === 'string' ? elem : Object.keys(elem)[0]);
        if (typeof elem === 'object') {
            for (let tag in elem)
                Object.entries(elem[tag]).forEach(([atr, val]) => el.setAttribute(atr, val));
        }
        document.body.appendChild(el);
    });
}

templatr('header', { div: { id: 'root' } });