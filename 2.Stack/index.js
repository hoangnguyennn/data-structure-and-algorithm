/**
 * Triển khai ngăn xếp bằng array
 */
class ArrayStack {
  #items = [];

  /**
   * Thêm 1 item lên trên cùng của ngăn xếp
   * @param {*} value
   */
  push(value) {
    this.#items.push(value);
  }

  /**
   * Lấy ra item trên cùng của ngăn xếp
   * @returns
   */
  pop() {
    return this.#items.pop();
  }

  /**
   * Kiểm tra xem ngăn xếp có rỗng không
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Lấy ra kích thước ngăn xếp
   * @returns
   */
  size() {
    return this.#items.length;
  }

  /**
   * Xóa các item trong ngăn xếp
   */
  clear() {
    this.#items = [];
  }
}

const arrayStack = new ArrayStack();

const a = 0;
const b = 10;
const c = 20;
const d = 30;
const e = 40;
const f = 50;

arrayStack.push(a);
arrayStack.push(b);
arrayStack.push(c);
arrayStack.push(d);
arrayStack.push(e);
arrayStack.push(f);

console.log(arrayStack.pop()); // f
console.log(arrayStack.pop()); // e
console.log(arrayStack.pop()); // d
console.log(arrayStack.pop()); // c
console.log(arrayStack.pop()); // b
console.log(arrayStack.pop()); // a

class Nodee {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Triển khai ngăn xếp bằng danh sách liên kết
 *
 * Trong ngăn xếp, cần xác định vị trí của node trên cùng để có thể thêm vào hoặc lấy ra
 */
class LinkedListStack {
  /** Node trên cùng của ngăn xếp */
  #head = null;
  /** Kích thước ngăn xếp */
  #size = 0;

  /**
   * Thêm 1 node lên trên cùng của ngăn xếp
   * @param {*} value
   */
  push(value) {
    const newNode = new Nodee(value);

    /** đặt node mới nhất lên trước trên cùng */
    if (this.#head) {
      newNode.next = this.#head;
    }

    /** trỏ #head tới node vừa thêm vào */
    this.#head = newNode;

    /** tăng kích thước ngăn xếp */
    this.#size++;
  }

  /**
   * Lấy ra giá trị của node trên cùng của ngăn xếp
   * @returns
   */
  pop() {
    /** nếu ngăn xếp rỗng, trả về null */
    if (!this.#head) return null;

    /** lấy ra giá trị của node trên cùng */
    const returnValue = this.#head.value;

    /** trỏ #head vào node trên cùng thứ 2 */
    this.#head = this.#head.next;

    /** giảm kích thước ngăn xếp */
    this.#size--;

    /** trả về giá trị node trên cùng đã lưu trước đó */
    return returnValue;
  }

  /**
   * Kiểm tra xem ngăn xếp có rỗng không
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Lấy ra kích thước ngăn xếp
   * @returns
   */
  size() {
    return this.#size;
  }

  /**
   * Xóa các node trong ngăn xếp
   */
  clear() {
    this.#head = null;
    this.#size = 0;
  }
}

const linkedListStack = new LinkedListStack();

linkedListStack.push(a);
linkedListStack.push(b);
linkedListStack.push(c);
linkedListStack.push(d);
linkedListStack.push(e);
linkedListStack.push(f);

console.log(linkedListStack.pop()); // f
console.log(linkedListStack.pop()); // e
console.log(linkedListStack.pop()); // d
console.log(linkedListStack.pop()); // c
console.log(linkedListStack.pop()); // b
console.log(linkedListStack.pop()); // a
