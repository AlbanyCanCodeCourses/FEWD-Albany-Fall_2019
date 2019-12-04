// switch statement

var fileName = "myJournal"
var ext = '.xls'



    switch (ext) {
      case '.doc':
        console.log("file created: ", fileName + ext);
        break;
      case '.docx':
        console.log("file created: ", fileName + ext);
        break;
      case '.ppt':
        console.log("file created: ", fileName + ext)
        break;
      case '.html':
        console.log("file created: ", fileName + ext)
        break;
      default: console.log("extenion not found")
    }


