let bookcountList;
window.addEventListener("DOMContentLoaded", (event) => {
  bookcountList = getHotelBookDataFromStorage();
  document.querySelector(".book-count").textContent = bookcountList.length;
  createInnerHtml();
  localStorage.removeItem("editBook");
});

const getHotelBookDataFromStorage = () => {
  return localStorage.getItem("ContactList")
    ? JSON.parse(localStorage.getItem("ContactList"))
    : [];
};

const createInnerHtml = () => {
  console.log(bookcountList);
  const headerHtml =
    "<th></th><th>FullName</th><th>Address</th><th>City</th>" +
    "<th>State</th><th>Zip</th><th>Phone</th><th></th>";
  if (bookcountList.length == 0) return;
  let innerHtml = `${headerHtml}`;
  for (const hotelData of bookcountList) {
    innerHtml = `${innerHtml}
    <tr>
      <td></td>
      <td>${hotelData._name}</td>
      <td>${hotelData._address}</td>
      <td>${hotelData._city}</td>
      <td>${hotelData._state}</td>
      <td>${hotelData._zip}</td>
      <td>${hotelData._phone}</td>
      
    
    <td>
      <img id="${hotelData._id}" onclick="remove(this)" alt="delete"
           src="../logo/delete-black-18dp.svg">
      <img id="${hotelData._id}" alt="edit" onclick="update(this)"
           src="../logo/create-black-18dp.svg"> 
    </td>
  </tr>
  `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const remove = (node) => {
  let hotelData = bookcountList.find((bookData) => bookData._id == node._id);
  if (!hotelData) return;
  const index = bookcountList
    .map((bookData) => bookData.id)
    .indexOf(hotelData._id);
  bookcountList.splice(index, 1);
  localStorage.setItem("ContactList", JSON.stringify(bookcountList));
  document.querySelector(".book-count").textContent = bookcountList.length;
  createInnerHtml();
};
