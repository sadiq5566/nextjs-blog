// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"

export default async function handler(req, res) {
  // fs.promise.readdir("blogdata", (err, files) => {
  //   var allblogs = []
  //   files.forEach(file => {
  //     fs.promise.readFile(`blogdata/${file}`, "utf-8", async (err, data) => {
  //       // if(err) {
  //       //   res.status(500).json({ error: "no such blog found" })
  //       //   return
  //       // }
  //       // res.status(200).json(JSON.parse(data))
  //       await allblogs.push(data)

  //     })
  //   });
  //   res.status(200).json(allblogs)
  // });
  let data = await fs.promises.readdir("blogdata")
  var allblogs = []
  let result;
  for (let i = 0; i < data.length; i++) {

    result = await fs.promises.readFile(`blogdata/${data[i]}`, "utf-8")
    allblogs.push(JSON.parse(result))

  }
  res.status(200).json(allblogs)
}
