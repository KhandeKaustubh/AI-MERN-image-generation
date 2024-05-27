import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant";
import PostSchema from "../../../server/mongodb/models/post";
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
export async function deleteimg(id) {
  // console.log(id);
  const response = await fetch("/api/v1/dalle/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });  

}
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
