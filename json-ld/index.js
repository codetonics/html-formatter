async function getData(document) {
    return [...document.querySelectorAll('script[type="application/ld+json"]')]
        .filter(ele => (ele.text && ele.text.length > 0))
        .map(ele => JSON.parse(ele.text));
}

module.exports = {
    getData
};