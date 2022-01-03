import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

const posts = [
  { id: 1, post: "Hi how are you?", likes: 5 },
  { id: 2, post: "Fine, and you?", likes: 4 },
];
let messages = [
  { id: 1, message: "I work in an office" },
  { id: 2, message: "A compassionate world" },
  { id: 3, message: "My life is a crazy explosion" },
  { id: 4, message: "Full time student and rockin' it!" },
  { id: 5, message: "I am always helping out - Kindness" },
];
let dialogs = [
  { id: 1, name: "Heo" },
  { id: 2, name: "Victor" },
  { id: 3, name: "Jane" },
  { id: 4, name: "Jonb" },
  { id: 5, name: "Viky" },
];

ReactDOM.render(
  <BrowserRouter>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </BrowserRouter>,
  document.getElementById("root")
);
