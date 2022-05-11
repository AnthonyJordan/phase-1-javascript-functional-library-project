

function myEach(collection, cb) {
    const newCollection = Object.values(collection)
    for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i])
    }
    return collection
}

function myMap(collection, cb) {
    const newCollection = Object.values(collection)
    for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = cb(newCollection[i])
    }
    return newCollection
}

function myReduce(collection, cb, acc) {
    const newCollection = Object.values(collection)
    let count = acc ? acc : newCollection[0]
    const start = acc ? 0 : 1
    for (let i = start; i < newCollection.length; i++) {
        count = cb(count, newCollection[i])
    }
    return count
}

function myFind(collection, finderCB) {
    const newCollection = Object.values(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (finderCB(newCollection[i])) {
            return newCollection[i]
        }
    }
    return undefined
}

function myFilter(collection, filterCB) {
    const newCollection = Object.values(collection)
    const returnCollection = []
    for (let i = 0; i < newCollection.length; i++) {
        if (filterCB(newCollection[i])) {
            returnCollection.push(newCollection[i])
        }
    }
    return returnCollection
}

function mySize(collection) {
    const newCollection = Object.values(collection)
    return newCollection.length
}

function myFirst(collection, amount) {
    const newCollection = Object.values(collection)
    if (!amount) { return newCollection[0] }
    const returnCollection = []
    for (let i = 0; i <= amount - 1; i++) {
        returnCollection.push(newCollection[i])
    }
    return returnCollection
}


function myLast(collection, amount) {
    const newCollection = Object.values(collection)
    if (!amount) { return newCollection[newCollection.length - 1] }
    const returnCollection = []
    for (let i = 0; i <= amount - 1; i++) {
        returnCollection.unshift(newCollection[newCollection.length - 1 - i])
    }
    return returnCollection
}

function myKeys(object) {
    const returnArray = []
    for (const key in object) {
        returnArray.push(key)
    }
    return returnArray
}

function myValues(object) {
    const returnArray = []
    for (const key in object) {
        returnArray.push(object[key])
    }
    return returnArray
}

function mySortBy(array, cb) {
    const arrayCopy = [...array]
    function compareNumbers(a, b) {
        return cb(a) - cb(b);
    }
    function compareStrings(a, b) {
        if (cb(a) < cb(b)) {
            return -1;
        }
        if (cb(a) > cb(b)) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
    const compare = typeof array[0] === "string" ? compareStrings : compareNumbers
    return arrayCopy.sort(compare)

}

function myFlatten(array, bool = false, newArray = []) {
    if (bool) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                for (let j = 0; j < array[i].length; j++) {
                    newArray.push(array[i][j])
                }
            } else {
                newArray.push(array[i])
            }
        }
        return newArray
    }
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            newArray.push(array[i])
        } else (
            myFlatten(array[i], false, newArray)
        )
    }
    return newArray
}