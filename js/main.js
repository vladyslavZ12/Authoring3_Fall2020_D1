// import your packages here
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    //console.log(Team);

    //debugger;

    // select our user elements and load the content
    // let userSection = document.querySelector(".user-section").children;

    // userSection[1].textContent = Team["Justin"].name;
    // userSection[2].textContent = Team["Justin"].role;
    // userSection[3].textContent = Team["Justin"].nickname;

    // XHTTP is the old tried-and-true way of doing AJAX - still relevant, but there are better options
    let myReq = new XMLHttpRequest;
    myReq.addEventListener('readystatechange', handleRequest);

    myReq.open('GET', '../DataSet.json');
    myReq.send();

    function handleRequest() {
        if (myReq.readyState === XMLHttpRequest.DONE) {
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

    function handleDataSet(data) {
        let myData = JSON.parse(data),
            userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        debugger;

        for (let user in myData) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = myData[user].name;
            currentUserText[2].textContent = myData[user].role;
            currentUserText[3].textContent = myData[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        console.log(data);
    }

    // fetch is an easier syntax to remember, and is pretty well supported but still considered a "base model" way of doing AJAX

    // fetch('../DataSet.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch((err) => {
    //         console.error(err)
    //     });
})();