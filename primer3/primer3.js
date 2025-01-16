// TODO: Implement the createLinkedList function
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(post) {
    const newNode = new Node(post);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  search(keyword) {
    let results = [];
    let current = this.head;
    
    const lowerKeyword = keyword.toLowerCase();
    
    while (current) {
      const lowerText = current.data.text.toLowerCase();
      
      if (lowerText.includes(lowerKeyword)) {
        results.push(current.data);
      }
      current = current.next;
    }
    return results;
  }
}

function createLinkedList(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("Posts must be a non-empty array.");
  }

  const list = new LinkedList();
  
  posts.forEach(post => {
    // Validate the post structure
    if (typeof post.text !== "string" || typeof post.timestamp !== "string" || typeof post.author !== "string" ||
      post.text.trim() === "" || post.timestamp.trim() === "" || post.author.trim() === ""
    ) {
      throw new Error("Each post must have 'text', 'timestamp', and 'author' as strings.");
    }
    const date = new Date(post.timestamp);
    if (isNaN(date.getTime())) { 
      throw new Error("Timestamp must be a valid date string.");}
    list.append(post);
  });
  
  return list;
}

  // TODO: Check if the input 'posts' is valid (an array with at least one element)
  // TODO: Iterate through each post in the 'posts' array
  // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values)
  // TODO: If any post has an invalid structure, throw an error
  // TODO: Create the linked list with the validated posts
  // TODO: Return the head of the linked list


// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  return feed.search(keyword)
  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results
  // TODO: Normalise the keyword for case-insensitive search
  // TODO: Split the keyword into individual words
  // TODO: Traverse the linked list
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results
}

// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.


export {createLinkedList, searchSocialMediaFeed};
