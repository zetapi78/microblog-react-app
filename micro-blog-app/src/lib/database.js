const url =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

export function getTweets() {
  return fetch(url);
}
