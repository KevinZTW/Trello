const ADDLIST = (title) => {
  return {
    type: "ADDLIST",
    title: title,
  };
};
const CHANGETITLE = (listId, newtitle) => {
  return {
    type: "CHANGETITLE ",
    newtitle: newtitle,
    listId: listId,
  };
};
//card
const ADDCARD = (listId, title, newcardId) => {
  return {
    type: "ADDCARD",
    title: title,
    listId: listId,
    newcardId: newcardId,
  };
};

const SWITCHCARDINLIST = (listId, destination, source) => {
  console.log(listId);
  return {
    type: "SWITCHCARDINLIST",
    listId: listId,
    destination: destination,
    source: source,
  };
};

export { SWITCHCARDINLIST, ADDLIST, ADDCARD, CHANGETITLE };
