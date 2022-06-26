import Airtable from "airtable";

const AirtableBase = new Airtable({ apiKey: "keylchnrLjIMWqbQj" });
const AirtableBase_ = AirtableBase.base("appTWrCynChvivv6E");

const table = AirtableBase_.table("myblog");
const posts =[]


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