// WATS 3020 Mad Libs Assignment

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).');

let authorName = prompt('What is your full name?');

let adjective1 = prompt('Please enter an adjective.');

let vehicle = prompt('Please enter a mode of transport (boat, plane, train, etc).');

let vehiclePart = prompt('Please enter the name of part of the vehicle you named (engine, wheel, etc)');

let parking = prompt('Where would you park your vehicle?');

let precious = prompt('Please enter a precious object.');

let noiseMaker = prompt('Please name something that makes sound.');

let crowdBehavior = prompt('Please enter an activity that people do as a group.');

let adjective2 = prompt('Please enter an adjective.');

let adjective3 = prompt('Please enter another adjective.');

let color = prompt('Please enter your favorite color.');

let familyMember = prompt('Please enter the name of a family relationship (e.g. Sister, Father, etc.)');

let organ = prompt('Please enter the name of a body organ.');

let bodyPart1 = prompt('Please enter another body part.');

let bodyPart2 = prompt('Please enter another body part.');

let bodyPart3 = prompt('Please enter another body part.');

let thing = prompt('Please enter the name of an object.');

let thing2 = prompt('Please enter the name of an object you might give somebody you love.');

let thing3 = prompt('Please enter the name of an object you might give somebody you like.');

let adjective4 = prompt('Please enter a word to describe your chosen vehicle.');

let adjective5 = prompt('Please enter another adjective that describes your chosen vehicle.');

////////////////////////////////////////////////////////////////////////
// Section Numbers
////////////////////////////////////////////////////////////////////////

let userNumber = prompt('Please enter your favorite number that is not zero.');
let number2 = userNumber**4 - 3;
let number3 = number2 * 4 % userNumber;

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector('#madlib-title');
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector('#madlib-text');
storyParagraph.innerHTML = storyText;