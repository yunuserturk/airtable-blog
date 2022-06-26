import Airtable from "airtable";

const AirtableBase = new Airtable({ apiKey: process.env.REACT_APP_API_KEY  });
const AirtableBase_ = AirtableBase.base(process.env.REACT_APP_API_BASE);

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