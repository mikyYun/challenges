# JavaScript Heap 
What is `Heap`??
* Tree to help fast-searching calculation finding min / max
* MinHeap and MaxHeap
1. MinHeap : min value on root and larger on children
2. MaxHeap : max value on root. parents nodes must have bigger value than child nodes

## Insert and Get data from Heap
1. Insert(ex.minheap)
```
  Origin
     2
   4   3
  5 6 

Add 1
     2
   4   3
  5 6 1

compare value with parent and if parent is bigger than the value, change until parent is smaller than the value

     2
   4   1
  5 6 3

  Final
     1
   4   2
  5 6 3
```
Time consumtion : O(log(n))

2. Get(ex. minheap)

    a. root is min value. fill the root value with the last node of the tree(last child...)

    b. The new root value has bigger value than child nodes. sorting

    c. finding proper location..

Time consumtion : O(log(n))

BubbleUp: When inserting value, (minheap: parent is bigger, maxheap: parent is smaller)

BubbleDown: When getting value, (minheap: parent is bigger, maxheap: parent is smaller)

```
          parent
          (index - 1) / 2

          self
          (index)

leftChild         rightChild
(index * 2) + 1   (index * 2) + 2
```

How to implement?
```js
// swap
this.items = []; // in class..

function swap(index1, index2) {
  let temp = items[index1];
  items[index1] = items[index2];
  items[index2] = temp;
}

// get parent
function parentIndex(index) {
  return Math.floor((index - 1) / 2);
}

// leftChild
function leftChild(index) {
  return index * 2 + 1;
}

// right Child
function rightChild(index) {
  return index * 2 + 2;
}

// get parentNode
function parent(index) {
  return items[parentIndex(index)];
}

// get left childNode
function leftChild(index) {
  return items[leftChildIndex(index)];
}

// get right childNode
function rightChild(index) {
  return items[rightChildIndex(index)];
}

// get max or min(root)
function peek() {
  return items[0];
}

// count heaps
function size() {
  return items.length;
}
/** MINHEAP **/
// bubbleUp
function min_bubbleUp() {
  let index = items.length - 1;
  while(parent(index) !== undefined && parent(index) > items[index]) {
    swap(index, parentIndex(index));
    index = parentIndex(index)
  } 
}

// bubbleDown
function min_bubbleDown() {
  let index = 0;
  while(leftChild(left) !== undefined && leftChild(index) < items[index] || rightChild(index) < items[index]) {
    let smallerIndex = leftChildIndex(index);
    if (rightChild(index) !== undefined && rightChild(index) < items[smallerIndex]) {
      smallerIndex = rightChildIndex(index);
    }
    swap(index, smallerIndex);
    index = smallerIndex;
  }
}

/** MAXHEAP **/
// bubbleUp
function max_bubbleUp() {
  let index = items.length - 1;
  while(parent(index) !== undefined && parent(index) < items[index]) {
    swap(index, parentIndex(index));
    index = parentIndex(index);
  }
}

// bubbleDown
function bubbleDown() {
  let index = 0;
  while(leftChild(index) !== undefined && leftChild(index) > items[index] || rightChild(index) > items[index]) {
    let largetIndex = leftChildIndex(index);
    if (rightChild(index) !== undefined && rightChild(index) > items[largerIndex]) {
      largerIndex = rightChild(index);
    }
    swap(largerIndex, index);
    index = largerIndex;
  }
}

// poll
function poll() {
  let item = items[0] // first element(node)
  items[0] = items[items.length - 1] // copy last element to root
  items.pop(); // pop last element
  bubbleDown();
  return item;
}
```