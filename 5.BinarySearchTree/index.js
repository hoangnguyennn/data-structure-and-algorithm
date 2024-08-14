/**
 * Một node trong cây nhị phân có tối đa 2 node con
 * Node bên trái có giá trị nhỏ hơn node cha
 * Node bên phải có giá trị lớn hơn node cha
 */
class TreeNode {
  constructor(value) {
    /** giá trị của node */
    this.value = value;
    /** node bên trái */
    this.left = null;
    /** node bên phải */
    this.right = null;
  }
}

/**
 * Trong cây nhị phân, cần xác định node gốc của cây
 */
class BinaryTree {
  constructor() {
    /** node gốc */
    this.root = null;
  }

  /** thêm 1 node vào cây */
  insert(value) {
    const newNode = new TreeNode(value);

    /** nếu cây chưa có node gốc, thì node gốc sẽ là node vừa thêm vào */
    if (!this.root) {
      this.root = newNode;
      return;
    }

    /** nếu đã có node gốc, chèn node vào bên dưới node gốc */
    this.insertNode(this.root, newNode);
  }

  /** chèn `newNode` vào bên dưới `node` */
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      /** `newNode` nhỏ hơn `node` */

      /** nếu `node` chưa có node bên trái thì gán vào node bên trái */
      if (!node.left) {
        node.left = newNode;
        return;
      }

      /** ngược lại, chèn `newNode` vào bên dưới `node.left */
      this.insertNode(node.left, newNode);
    } else {
      /** `newNode` lớn hơn `node` */

      /** nếu `node` chưa có node bên phải thì gán nó vào node bên phải */
      if (!node.right) {
        node.right = newNode;
        return;
      }

      /** ngược lại, chèn `newNode` vào bên dưới `node.right` */
      this.insertNode(node.right, newNode);
    }
  }

  /** duyệt cây: theo thứ tự tăng dần giá trị */
  inorderTraversal() {
    this.#inorderTraversal(this.root);
  }

  #inorderTraversal(node) {
    if (node) {
      this.#inorderTraversal(node.left);
      console.log(node.value);
      this.#inorderTraversal(node.right);
    }
  }

  /** duyệt cây: duyệt từ trên xuống, từ trái sang phải */
  preorderTraversal() {
    this.#preorderTraversal(this.root);
  }

  #preorderTraversal(node) {
    if (node) {
      console.log(node.value);
      this.#preorderTraversal(node.left);
      this.#preorderTraversal(node.right);
    }
  }

  /** duyệt cây: duyệt từ dưới lên, từ trái sang phải */
  postorderTraversal() {
    this.#postorderTraversal(this.root);
  }

  #postorderTraversal(node) {
    if (node !== null) {
      this.#postorderTraversal(node.left);
      this.#postorderTraversal(node.right);
      console.log(node.value);
    }
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

/**
 * 10 -- 15 -- 18
 * |      |
 * |      12
 * 5 -- 7
 * |
 * 3
 */

tree.inorderTraversal(); // 3, 5, 7, 10, 12, 15, 18

tree.preorderTraversal(); // 10, 5, 3, 7, 15, 12, 18

tree.postorderTraversal(); // 3, 7, 5, 12, 18, 15, 10
