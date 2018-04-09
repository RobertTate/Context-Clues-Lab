var friend = ['Thomas', 'Chris', 'Ives', 'Ian', 'Matt'];
var roomName = ['study', 'observatory', 'kitchen', 'master bedroom', 'ballroom', 'gardens', 'hallway', 'lounge', 'dining room', 'library'];
var weapon = ['letter opener', 'rope', 'revolver', 'kitchen knife', 'candlestick', 'piano wire', 'ak-47', 'shoe-blade', 'poison pill', 'gasoline & match', 'throwing star', 'minigun', 'heavy book', 'trash can', 'pruning sheers', 'IED', 'spoon', 'giant anvil', 'toothbrush'];



function getAlert(i) {
    var friendRotate = friend[i % 5];
    var roomNameRotate = roomName[i % 10];
    var weaponRotate = weapon[i % 20];
    function setAlert() {
        alert(`Accusation ${i}: I accuse ${friendRotate}, with the ${roomNameRotate} in the ${weaponRotate}!`);
    }
    return setAlert;
}

for (i = 0; i <= 100; i++) {
    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode(`Accusation ${i}`);
    var makeAlertHappen = getAlert(i);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);

    h3.addEventListener('click', makeAlertHappen);  
};


