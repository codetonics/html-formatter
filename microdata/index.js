async function getData(document) {
    const scopes = [...document.querySelectorAll('[itemscope]')];
    const data = []

    scopes.map(scope => {
        const currentNode = {};
        data.push(currentNode);
        _processScope(scope, scopes, currentNode)
    })

    console.log(data);

    return data;
}

module.exports = {
    getData
}

function _processScope(scope, allScopes, currentNode) {
    allScopes.splice(allScopes.indexOf(scope), 1);
    const itemType = scope.getAttribute('itemtype');
    if (itemType) {
        currentNode['@context'] = itemType;
    }

    const types = [...scope.querySelectorAll('[itemtype]')];

    function _processType(type){
            if (type.getAttribute('itemscope') && type.getAttribute('itemprop')) {
                allScopes.splice(allScopes.indexOf(type), 1);
    
                types.splice(types.indexOf(type), 1);
                oldCurrentNode = currentNode;
                currentNode[type.getAttribute('itemprop')] = {};
                _processScope(type, allScopes, currentNode[type.getAttribute('itemprop')]);
                currentNode = oldCurrentNode;
            } else {
                function _processProp(prop){
                    currentNode[prop.getAttribute('itemprop')] = 'SOME VALUE';
                }

                const props = [...scope.querySelectorAll('[itemprop]')];
                props.map(prop => _processProp(prop));
            }
    }
    types.map(type => _processType(type));
}