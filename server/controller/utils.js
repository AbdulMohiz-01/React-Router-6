const getById = (array, id) => {
    return array.find(element => element.id === id)
}

export {
    getById
}