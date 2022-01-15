class HotelBookData {
  // getter and setter method
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Name is Incorect  !!!!!!";
  }

  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^([a-zA-z0-9]{3,}[; ;])*$");
    if (addressRegex.test(address)) this._address = address;
    else throw "Address is Incorect  !!!!!!!!";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }
  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }
  get phonenumber() {
    return this._phonenumber;
  }
  set phone(phone) {
    let phoneRegex = RegExp("^[+]?(([0-9]{2})?)[0-9]{10}$");
    if (phoneRegex.test(phone)) this._phone = phone;
    else throw "Phonenumber is Incorect  !!!!!!!!!";
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{6}$");
    if (zipRegex.test(zip)) this._zip = zip;
    else throw "Invalid zip format !!!!!!!";
  }

  // method
  toString() {
    return (
      "id=" +
      this.id +
      ", name='" +
      this.name +
      ", address='" +
      this.address +
      ",city='" +
      this.city +
      ", state=" +
      this.state +
      ",zip=" +
      this.zip +
      ", phone=" +
      this.phone
    );
  }
}
