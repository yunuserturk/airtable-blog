import Airtable from "airtable";
require("dotenv").config();

const AirtableBase = new Airtable({ apiKey: process.env.API_KEY  });
const AirtableBase_ = AirtableBase.base(process.env.API_BASE);

const table = AirtableBase_.table("myblog");
let posts =[]


const getPosts = async () => {
  posts = await table.select({}).all();
  const posts_ = posts.map(post => {
    return {
      id: post.id,
      title: post.fields.title,
      content: post.fields.content,
      date: post.fields.date
    };
  });

  return posts_;

};

export default getPosts;