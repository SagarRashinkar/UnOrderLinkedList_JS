class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// of list
	add(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null) this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}

	// removes a given element from the
	// list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}

	// prints the list items
	printList() {
		var curr = this.head;
		var str = '';
		while (curr) {
			str += curr.element + ' ';
			curr = curr.next;
		}
		return str;
	}

	// gives the size of the list
	size_of_list() {
		return this.size;
		// console.log(this.size);
	}
}

module.exports = new LinkedList();