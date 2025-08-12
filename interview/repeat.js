// 题目：手写repeat方法
// 输入： abc.repeat(3)
// 输出 :  'abcabcabc'

function repeat(count) {
  // 处理边界情况
  if (count <= 0) return '';
  if (count === 1) return this.toString();

  // 使用缓存存储已计算的结果
  const cache = {};
  cache[1] = this.toString();

  // 使用二进制分解的方法实现 O(log n) 时间复杂度
  function buildString(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    if (n % 2 === 0) {
      // 偶数情况：n = n/2 + n/2
      const half = buildString(n / 2);
      cache[n] = half + half;
    } else {
      // 奇数情况：n = (n-1)/2 + (n-1)/2 + 1
      const half = buildString((n - 1) / 2);
      cache[n] = half + half + cache[1];
    }

    return cache[n];
  }

  return buildString.call(this, count);
}

// 将repeat方法添加到String原型上
String.prototype.repeat = repeat;

// 测试
console.log('abc'.repeat(3)); // 输出: 'abcabcabc'
console.log('abc'.repeat(7)); // 输出: 'abcabcabcabcabcabc'