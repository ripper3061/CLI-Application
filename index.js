const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  } = require("./contacts");

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
        const newContacts = await addContact(name, email, phone);
        console.table(newContacts);
        break;
  
      case "remove":
        const clearContacts = await removeContact(id);
        console.table(clearContacts);
        break;
  
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  };

//   invokeAction({action: 'list'})
// invokeAction({action: 'get', id:'C9sjBfCo4UJCWjzBnOtxl'})
// invokeAction({action: 'add', name:'test1', email: 'test1@test.com', phone:'(233) 738-2360'})
invokeAction({action: 'remove', id:'qhdB7o_ZTMHRBAOsC-P4C'})

