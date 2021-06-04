const path = require("path");
const fs = require("fs/promises");
const contactsPath = path.resolve("./db/contacts.json");

const generatedContactId = (list) => {
  const arrayOfId = list.map(({ id }) => id);
  const arrayLength = arrayOfId.length;
  const id = arrayLength > 0 ? arrayOfId[arrayLength - 1] + 1 : 1;
  return id;
};

const listContacts = async () => {
  try {
    const contactList = await fs.readFile(contactsPath, "utf8");
    const parsedList = JSON.parse(contactList, null, 2);
    return parsedList;
  } catch (err) {
    console.log(err.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contactList = await listContacts();
    const contactById = contactList.find(({ id }) => Number(contactId) === id);
    return contactById;
  } catch (err) {
    console.log(err.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contactList = await listContacts();
    const filteredList = contactList.filter(
      ({ id }) => Number(contactId) !== id
    );
    return filteredList;
  } catch (err) {
    console.log(err.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contactList = await listContacts();
    const newContact = {
      id: generatedContactId(contactList),
      name,
      email,
      phone,
    };
    const newContactList = [...contactList, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContactList), "utf8");

    return newContactList;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
