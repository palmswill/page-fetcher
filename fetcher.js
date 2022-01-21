
const request=require("request");
const fs=require("fs");

const [origin,location]=process.argv.slice(2);



request(origin, (err, res, body) => {
  if (!err){
    if (res.statusCode===200){
      let size=body.length;
      fs.writeFile(location, body , err =>{
        if(err) {
          console.error(err);
          return
        }
        console.log(`Downloaded and saved ${size} bytes to ${location}`)
      })


    }
  }
});