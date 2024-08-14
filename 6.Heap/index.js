/**
 * Triển khai min heap, các node con sẽ luôn lớn hơn node cha
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * đưa giá trị mới vào heap
   * @param {*} value giá trị bất kỳ
   */
  insert(value) {
    /** đưa giá trị mới vào heap */
    this.heap.push(value);

    /** đưa node vừa thêm vào đúng vị trị của nó */
    this.heapifyUp(this.heap.length - 1);
  }

  /**
   * đưa node con mới thêm vào (ở cuối mảng - ngọn) lên gần gốc hơn nếu nó mang giá trị nhỏ
   * @param {*} index vị trí của node vừa thêm vào
   */
  heapifyUp(index) {
    /** lấy ra index của node cha dựa theo index của node con */
    let parentIndex = this.getParentIndex(index);

    /**
     * kiểm tra xem node vừa thêm vào và node cha của nó
     * nếu node vừa thêm vào nhỏ hơn node cha của nó thì đổi vị trí với node cha
     * tiếp tục lặp lại cho tới khi node con lớn hơn node cha hoặc tới đầu mảng thì dừng
     */
    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      /** đổi vị trí node cha và node con */
      this.swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  /**
   * lấy vị trí của node cha theo vị trí của node con
   * @param {number} index vị trí của node con
   * @returns
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * hoán đổi vị trí 2 node
   * @param {number} i vị trí node thứ nhất
   * @param {number} k vị trí node thứ hai
   */
  swap(i, k) {
    [this.heap[i], this.heap[k]] = [this.heap[k], this.heap[i]];
  }

  /** hiển thị danh sách node */
  display() {
    console.log(this.heap);
  }

  /** xóa node nhỏ nhất và duy trì tính chất heap */
  extractMin() {
    /** trả về null và không làm gì hết */
    if (this.heap.length === 0) return null;

    /** lấy ra giá trị của node nhỏ nhất */
    const min = this.heap[0];

    /** lấy ra giá trị của node cuối mảng */
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      /** đưa node ngọn lên đầu (làm gốc) */
      this.heap[0] = end;

      /** đưa node vừa di chuyển từ đầu mảng về đúng vị trí của nó */
      this.heapifyDown(0);
    }

    return min;
  }

  /**
   * đưa node cha xuống nếu nó lớn hơn node con
   * @param {number} index vị trí của node cha
   */
  heapifyDown(index) {
    /** vị trí node nhỏ nhất hiện tại */
    let smallest = index;

    /** lấy vị trí node con thứ nhất */
    const leftChildIndex = this.getLeftChildIndex(index);
    /** lấy vị trí node con thứ 2 */
    const rightChildIndex = this.getRightChildIndex(index);

    /** nếu vị trí node con thứ nhất tồn tại trong heap */
    /** và giá trị của nó nhỏ hơn node cha */
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      /** thì vị trí node nhỏ nhất sẽ là vị trí node con thứ nhất */
      smallest = leftChildIndex;
    }

    /** nếu vị trí node con thứ 2 tồn tại trong heap */
    /** và giá trị của nó nhỏ hơn node nhỏ nhất */
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      /** thì vị trí node nhỏ nhất sẽ là vị trí node con thứ 2 */
      smallest = rightChildIndex;
    }

    /**
     * có 3 node:
     * node cha: index
     * node con 1: leftChildIndex
     * node con 2: rightChildIndex
     *
     * tìm ra giá trị nhỏ nhất trong 3 node, đưa node đó lên làm node cha
     * sau đó tiếp tục kiểm tra node nhỏ nhất hiện tại và 2 node con của nó
     *
     * index: vị trí node cha hiện tại
     * smallest: vị trí node nhỏ nhất hiện tại
     */

    /** nếu vị trí node nhỏ nhất hiện tại không phải là node ban đầu */
    if (smallest !== index) {
      /** đổi vị trí node ban đầu với node nhỏ nhất */
      this.swap(index, smallest);
      /** tiếp tục đưa node nhỏ nhất hiện tại về đúng vị trí của nó */
      this.heapifyDown(smallest);
    }
  }

  /**
   * lấy vị trí node con thứ nhất dựa theo vị trí node cha
   * @param {number} index vị trí node cha
   * @returns
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /**
   * lấy vị trí node con thứ hai dựa theo vị trí node cha
   * @param {number} index vị trí node cha
   * @returns
   */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * triển khai thuật toán heapsort
   * độ phức tạp: thời gian tốt nhất - trung bình - tệ nhất là O(n log n)
   * không gian: O(1)
   */
  heapSort() {
    const copy = new MinHeap();
    copy.heap = [...this.heap];
    const result = [];
    while (copy.heap.length > 0) {
      result.push(copy.extractMin());
    }

    return result;
  }
}

const minHeap = new MinHeap();
minHeap.insert(3);
/**
 * 3
 */

minHeap.insert(5);
/**
 * 3
 * |
 * 5
 */

minHeap.insert(9);
/**
 * 3 -- 9
 * |
 * 5
 */

minHeap.insert(1);
/**
 * 3 -- 9               3 -- 9              1 -- 9
 * |                    |                   |
 * 5            ===>>   1           ===>>   3
 * |                    |                   |
 * 1                    5                   5
 */

minHeap.insert(4);
/**
 * 1 -- 9
 * |
 * 3 -- 4
 * |
 * 5
 */

minHeap.insert(8);
/**
 * 1 ---- 9             1 ---- 8
 * |      |             |      |
 * |      8     ===>>   |      9
 * 3 -- 4               3 -- 4
 * |                    |
 * 5                    5
 */

minHeap.insert(2);
/**
 * 1 ---- 8 -- 2          1 ---- 2 -- 8
 * |      |               |      |
 * |      9               |      9
 * 3 -- 4         ===>>   3 -- 4
 * |                      |
 * 5                      5
 */

minHeap.display(); // kết quả: [1, 3, 2, 5, 4, 9, 8]

minHeap.extractMin();
/**
 * 2 ---- 8
 * |      |
 * |      9
 * 3 -- 4
 * |
 * 5
 */

minHeap.extractMin();
/**
 * 3 -- 8
 * |
 * 5 -- 4
 * |
 * 9
 */
