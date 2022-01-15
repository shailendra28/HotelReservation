let isUpdate = false;
let hotelBookObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new HotelBookData().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  const address = document.querySelector("#address");
  const textError = document.querySelector(".address-error");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new HotelBookData().address = address.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  const zip = document.querySelector("#zip");
  const textError = document.querySelector(".zip-error");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new HotelBookData().zip = zip.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  const phone = document.querySelector("#phone");
  const textError = document.querySelector(".phone-error");
  phone.addEventListener("input", function () {
    if (phone.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new HotelBookData().phone = phone.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});

const save = () => {
  try {
    let hotelBookData = createHotelBook();
    createAndUpdateStorage(hotelBookData);
  } catch (e) {
    return;
  }
};

function createAndUpdateStorage(hotelBookData) {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));
  if (contactList != undefined) {
    console.log("Data: ", hotelBookData);
    contactList.push(hotelBookData);
  } else {
    contactList = [hotelBookData];
  }
  alert(JSON.stringify(hotelBookData));
  localStorage.setItem("ContactList", JSON.stringify(contactList));
}

const createHotelBook = () => {
  console.log("clicked");
  let hotelBookData = new HotelBookData();
  try {
    hotelBookData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".name-error", e);
    throw e;
  }
  hotelBookData.phone = getInputValueById("#phone");
  hotelBookData.address = getInputValueById("#address");
  hotelBookData.city = getInputValueById("#city");
  hotelBookData.state = getInputValueById("#state");
  hotelBookData.zip = getInputValueById("#zip");
  alert(JSON.stringify(hotelBookData));
  return hotelBookData;
};

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];
  allItems.forEach((item) => {
    if (item.checked) setItems.push(item.value);
  });
  return setItems;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
};

const checkForUpdate = () => {
  const hotelBookJson = localStorage.getItem("editBook");
  isUpdate = hotelBookJson ? true : false;
  if (!isUpdate) return;
  hotelBookObj = JSON.parse(hotelBookJson);
  setForm();
};

const setForm = () => {
  setValue("#name", hotelBookObj._name);
  setValue("#address", hotelBookObj._address);
  setValue("#city", hotelBookObj._city);
  setValue("#state", hotelBookObj._state);
  setValue("#zip", hotelBookObj._zip);
  setValue("#phone", hotelBookObj._phone);
};

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach((item) => {
    if (Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    } else if (item.value === value) item.checked = true;
  });
};

const resetForm = () => {
  setValue("#name", "");
  setValue("#address", "");
  setValue("#city", "");
  setValue("#state", "");
  setValue("#zip", "");
  setValue("#phone", "");
};
const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach((item) => {
    item.checked = false;
  });
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
};
