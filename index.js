import mongoose from "mongoose";
import { Blog } from "./model/Blog-v1.js";
import { User } from "./model/User.js";

try {
  const conn = await mongoose.connect(
    "mongodb://127.0.0.1:27017/test?retryWrites=true&w=majority"
  );
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
  process.exit(1);
}

const user = await User.create({
  name: "Jack Max",
  email: "jack@email.com",
});
console.log(user);

const article = new Blog({
  title: "Awesome Post!",
  slug: "Awesome-Post",
  published: true,
  author: user._id,
  content: "This is an awesome post!",
  tags: ["awesome", "post"],
});

await article.save();

const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// Insert data // method 2
const article2 = await Blog.create({
  title: "Awesome Post 2!",
  slug: "Awesome-Post-2",
  published: true,
  author: user._id,
  content: "This is an awesome post!",
  tags: ["awesome", "post"],
});

console.log(article2);

// Update data
// article.title = "Updated Awesome Post ! ! !";
// await article.save();
// console.log(article);

// //Finding  data
// const article3 = await Blog.findById("66260e0d4002e84623d8c167").exec();
// console.log(article3);

// //Projecting document fields
// const article4 = await Blog.findById(
//   "66260e0d4002e84623d8c167",
//   "title slug content"
// ).exec();
// console.log(article4);

// //Deleting data
// article.author = user._id;
// await article.save();

// const blog = await Blog.deleteOne({ author: "Jack Max" });
// console.log(blog);

// //Useful methods
// const blog1 = await Blog.exists({ author: "Jack Max" });
// console.log(blog1);

// const blogFind = await Blog.findOne({ author: "Jack Max" });
// console.log(blogFind);

// const blogWhere = await Blog.where("author")
//   .equals("Jack Max")
//   .select("title author");
// console.log(blogWhere);
