
// const names = ["Dey", "Juan", "John", "Paul"]

// names.push("Mary")

// console.log(names);



function filter(){

    const existingCategoryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const newCategoryIds=[1, 2, 3, 4, 5, 6]

    const categoriesToDisconnect = existingCategoryIds.filter(
        categoryId => !newCategoryIds.includes(categoryId)
    );
    console.log(categoriesToDisconnect);
}

function includes(){

    const ids = [1, 2, 3, 12, 5, 54, 7, 8, 32]

    const isHereIds = ids.includes(35);

    console.log(isHereIds);

}

// includes();
filter();