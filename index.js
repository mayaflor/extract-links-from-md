module.exports.getLinksFromMd = function getLinksFromMd(text) {

  if (text === "") {
    throw new Error ("No Parameter found");
  };
  if (typeof text === "number"){
    throw new Error ("Parameter must contain letters");
  };

  let url = text.match(/(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/g);
  let alt = text.match(/(?<=\[).*?(?=\])/g);

  if (url === null){
    return "";
  }
  if (typeof text === "string") {
  
    let urlObj = {}
    let links = []

    if (url !== null){
      url.map((url, i) => {
        urlObj = {href: url, text: alt[i]}
        links.push(urlObj);
      });
    };

    return links
  } 
};