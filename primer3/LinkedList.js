class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};


class LinkedList {
  constructor() {
    this.head = null;
  };

  append(post) {
    const newNode = new Node(post);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      };
      current.next = newNode;
    };
  };

  search(phrase) {
    let results = [];
    let current = this.head;
    const keywords = phrase.toLowerCase().split(' ');

    while (current) {
      const lowerText = current.data.text.toLowerCase();

      if (keywords.some(keyword => lowerText.includes(keyword))) {
        results.push(current.data);
      };
      current = current.next;
    };
    return results;
  };
};

export { LinkedList };