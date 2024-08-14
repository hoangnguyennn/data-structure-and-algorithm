class Nodee {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /** node đầu tiên của danh sách */
  #head = null;

  /**
   * Thêm một node vào danh sách
   *
   * @param {*} value
   * @returns
   */
  append(value) {
    const newNode = new Nodee(value);

    /** nếu chưa có node đầu tiên, node vừa thêm vào sẽ là node đầu tiên */
    if (!this.#head) {
      this.#head = newNode;
      return;
    }

    let current = this.#head;
    while (current.next) {
      /** di chuyển tới node cuối cùng */
      current = current.next;
    }

    /** đưa node vừa thêm vào cuối danh sách */
    current.next = newNode;
  }

  /**
   * Lấy ra giá trị tại node cụ thể theo index
   *
   * @param {number} index
   * @returns
   */
  getNode(index) {
    let current = this.#head;
    let i = 0;

    while (current !== null) {
      /** nếu vị trí hiện tại là vị trí cần tìm, trả về giá trị của node */
      if (index === i) return current.value;

      current = current.next;
      i++;
    }

    /** không tìm thấy, do index chỉ định vượt quá kích thước danh sách */
    return null;
  }
}

const linkedList = new LinkedList();

const a = new Nodee(0);
const b = new Nodee(10);
const c = new Nodee(20);
const d = new Nodee(30);
const e = new Nodee(40);
const f = new Nodee(50);

/**
 * a -> b -> c -> d -> e -> f
 * ^
 * head ở đây
 */
linkedList.append(a); // index: 0
linkedList.append(b); // index: 1
linkedList.append(c); // index: 2
linkedList.append(d); // index: 3
linkedList.append(e); // index: 4
linkedList.append(f); // index: 5

console.log(linkedList.getNode(3));
