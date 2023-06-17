const { Command } = require('commander');
const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  } = require("./contacts");

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

  const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        console.log("invoke contacts list");
        const contacts = await listContacts();
        console.table(contacts);
        break;
        
    case "get":
        console.log("invoke contact by id");
        const contact = await getContactById(id);
        console.log(contact);
        break;
  
      case "add":
        console.log("invoke add contact");
        const newContact = await addContact(name, email, phone);
        console.log(newContact);
        break;
  
      case "remove":
        console.log("invoke remove contact");
        const removedContactById = await removeContact(id);
        console.log(removedContactById);
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  };

invokeAction(argv);

