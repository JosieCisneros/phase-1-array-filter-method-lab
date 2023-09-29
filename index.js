function findMatching (array, string) {
    return array.filter (function(str) {
        return str.toLowerCase() === string.toLowerCase()
    }) 
}

findMatching(array, string) 

function fuzzyMatch (array, string) {
    return array.filter((el) => el.toLowerCase().substring (0, string.length) === string.toLowerCase())
}

fuzzyMatch(array, string)

function matchName (array, string) {
    return array.filter (function(obj) {
        return obj.name === string
    })
}

matchName (array, string)
