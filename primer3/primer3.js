import { LinkedList } from './LinkedList.js';

const isValidValue = (value) => {
  return typeof value === "string" && value.trim() !== "";
};

const createLinkedList = (posts) => {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("Posts must be a non-empty array.");
  };

  const list = new LinkedList();

  posts.forEach(post => {
    if (!isValidValue(post.text) || !isValidValue(post.timestamp) || !isValidValue(post.author)) {
      throw new Error("Each post must have the fields 'text', 'timestamp', and 'author' as non-empty strings.");
    };

    const date = new Date(post.timestamp);
    if (isNaN(date.getTime())) {
      throw new Error("Timestamp must be a valid date string.");
    };

    list.append(post);
  });

  return list;
};

const searchSocialMediaFeed = (feed, keyword) => {
  return feed.search(keyword);
};

export { createLinkedList, searchSocialMediaFeed };
