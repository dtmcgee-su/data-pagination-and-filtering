/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//Display 9 students with all their info from database
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
               <h3 class = "name">${data[i].name.first} ${data[i].name.last}</h3>
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

// create buttons which will show a dfifferent set of students depending on the page clicked
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