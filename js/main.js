// import your packages here
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }
    }

    // async is now THE WAY to do AJAX / asynchronous operations
    async function fetchData() {
        // ask for a resource, and then do something with it when it resolves
        let resource = await fetch('../DataSt.json').then(response => {
            if (response.status !== 200) {
                console.error('server done broke!' + response.status);
                popErrorBox(response);

                return false;
                // response = JSON.stringify({message: 'some stupid server error'});
            }

            return response;
        });

        // fetch uses the Promise API, so it'll return with the resource or return false - either way, it resolves the promise

        // we'll assume success and pass through a parsed JavaScript object from the JSON data we get
        let dataset = await resource.json();

        return dataset;            
    }

    fetchData().then(data => handleDataSet(data));

    // fetch is an easier syntax to remember, and is pretty well supported but still considered a "base model" way of doing AJAX

    // fetch('../DataSet.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch((err) => {
    //         console.error(err)
    //     });
})();