const contacts = require("./contacts");

const argv = require('yargs').argv;


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const getList = await contacts.listContacts();
          console.log(getList);
      break;

    case 'get':
          const oneContact = await contacts.getContactById(id);
          console.log(oneContact);
      break;

    case 'add':
          const newContact = await contacts.addContact(name, email, phone);
          console.log(newContact);
      break;

    case 'remove':
          const removeContact = await contacts.removeContact(id);
          console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
