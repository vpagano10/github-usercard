/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/vpagano10')
  .then(response => {
    console.log(response);
    userCard(response.data)
  })
  .catch(error => {
    console.log('The data was not returned', error);
  });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
];

followersArray.forEach(item => {
  axios
    .get(item)
    .then(response => {
      console.log(response);
      userCard(response.data)
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
})


//    STRETCH
axios
  .get('https://api.github.com/users/vpagano10/followers')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log('The data was not returned', error);
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const entryPoint = document.querySelector('.cards');

function userCard(data) {
  const card = document.createElement('div');
  const profileImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3Name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const newProfile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  console.log(data);
  profileImage.src = data.avatar_url;
  h3Name.textContent = data.name;
  location.textContent = `Location: ${data.location}`;
  newProfile.textContent = `Profile: `;
  anchor.textContent = data.html_url;
  anchor.href = data.html_url;
  anchor.target = '_blank';
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3Name.classList.add('name');
  username.classList.add('username');

  card.appendChild(profileImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  newProfile.appendChild(anchor);
  cardInfo.appendChild(newProfile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  entryPoint.appendChild(card);
  console.log(card);
}

const profileCard = document.querySelector('.cards');
// const profile = userCard();


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
