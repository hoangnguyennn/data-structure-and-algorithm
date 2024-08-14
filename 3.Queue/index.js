class Nodee {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Tương tự ngăn xếp
 * Do triển khai bằng Array khá đơn giản
 * nên mình sẽ chỉ triển khai bằng danh sách liên kết
 */
class Queue {
  /** Node đầu tiên hàng đợi */
  #head = null;
  /** Node cuối cùng của hàng đợi */
  #foot = null;
  /** Kích thước hàng đợi */
  #size = 0;

  /**
   * Thêm 1 item vào hàng đợi
   * @param {*} value
   */
  enqueue(value) {
    const newNode = new Nodee(value);

    if (this.#foot) {
      /** nếu đã có đuôi hàng, gắn node mới vào đuôi */
      this.#foot.next = newNode;
    }

    /** trỏ đuôi tới node mới được vào */
    this.#foot = newNode;

    if (!this.#head) {
      /** nếu chưa có đầu, node đầu tiên sẽ là đầu */
      this.#head = newNode;
    }

    this.#size++;
  }

  /**
   * Lấy item đầu tiên của hàng đợi
   * @returns
   */
  dequeue() {
    /** nếu hàng đợi rỗng, trả về null */
    if (!this.#head) return null;

    /** lấy ra giá trị của node đầu tiên trong hàng đợi */
    const returnValue = this.#head.value;

    /** trỏ node đầu hàng đợi tới node thứ 2 */
    this.#head = this.#head.next;

    /** giảm kích thước hàng đợi */
    this.#size--;
    return returnValue;
  }

  /**
   * Kiểm tra xem hàng đợi có rỗng không
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Lấy ra kích thước hàng đợi
   * @returns
   */
  size() {
    return this.#size;
  }

  /**
   * Xóa các item trong hàng đợi
   */
  clear() {
    this.#head = null;
    this.#foot = null;
    this.#size = 0;
  }
}
