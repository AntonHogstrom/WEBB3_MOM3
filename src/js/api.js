const profile = document.querySelectorAll('.profile > img');

window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    if(!response.ok) {
        
        const message =  `You got an ERROR: ${response.status}`;
        throw new Error(message);

    } else {
        const responseObj = await response.json();
        for(let i=0;i<profile.length; i++) {
            let url = responseObj.results[i].picture.medium;
            let user = responseObj.results[i].login.username;
            profile[i].src = url;
            profile[i].alt = user;
            profile[i].title = user;
        }

    }
});