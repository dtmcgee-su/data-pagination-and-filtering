/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   let start = (page * 9) - 9;
   let end = (page * 9);
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   for (let i = start; i < list.length; i++) {
      if (i >= start && i < end) {
         let studentItem = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${data[i].picture.thumbnail} alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class = "email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>
          </li>
         `;
         ul.insertAdjacentHTML('beforeend', studentItem);
      }

   }
}

function addPagination(list){
   const maxPages = Math.ceil(data.length / 9);
   const ulLinkList = document.querySelector('.link-list');
   ulLinkList.innerHTML = '';
   for (let i = 1; i <= maxPages; i++) {
      let button = `
      <li>
         <button type = "button">${i}</button>
      </li>`;
      ulLinkList.insertAdjacentHTML('beforeend', button);
   }

    const nextPageButton = document.querySelector('button');
    nextPageButton.className = 'active';

   ulLinkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
         const activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
   })
}
// Call functions
showPage(data, 1);
addPagination(data);