let randomStringIndex = Math.floor(Math.random() * 5);

//Collection of the three sets of strings that will be randomly combined later
const stringCollection = {
    firstString: ['Knock knock', 'Rapple rapple', 'Ding dong', 'Hello hello', 'Kia Ora tatou'],
    secondString: ['Who\'s there', 'What do you want', 'Occupied', 'Get off my property', 'Please come in'],
    thirdString: ['Do you want a cookie?', 'Boo hoo', 'Got any milkshakes?', 'Lovely day out here', 'We have a warrant for your arrest']
}

// Generating first random string
const generateFirstRandomString = () => {
    return stringCollection.firstString[randomStringIndex];
}

// Generating second random string
const generateSecondRandomString = () => {
    return stringCollection.secondString[randomStringIndex];
}

// Generating third random string
const generateThirdRandomString = () => {
    return stringCollection.thirdString[randomStringIndex];
}

//Combining the strings together
const printCombinedStrings = () => {
    console.log('Person 1: ' + generateFirstRandomString());
    console.log('Person 2: ' + generateSecondRandomString());
    console.log('Person 1: ' + generateThirdRandomString());
}

printCombinedStrings();