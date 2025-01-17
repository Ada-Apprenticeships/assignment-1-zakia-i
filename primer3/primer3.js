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

  search(phrase) {
    let results = [];
    let current = this.head;
    
    const keywords = phrase.toLowerCase().split(' ');
    
    while (current) {
      const lowerText = current.data.text.toLowerCase();
      
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        results.push(current.data);
      }
      current = current.next;
    }
    return results;
  }
}


function isValidValue(value) {
  return typeof value === "string" && value.trim() !== "";
}

function createLinkedList(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("Posts must be a non-empty array.");
  }

  const list = new LinkedList();
  
  posts.forEach(post => {
    if (!isValidValue(post.text) || !isValidValue(post.timestamp) || !isValidValue(post.author)) {
      throw new Error("Each post must have the fields 'text', 'timestamp', and 'author' as non-empty strings.");
    }

    const date = new Date(post.timestamp);
    if (isNaN(date.getTime())) { 
      throw new Error("Timestamp must be a valid date string.");}

    list.append(post);
    });
  
  return list;
}

function searchSocialMediaFeed(feed, keyword) {
  return feed.search(keyword)
}

export {createLinkedList, searchSocialMediaFeed};
