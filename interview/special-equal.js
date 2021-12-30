
/**
 * 实现  a==1&&a==2&&a==3
 */

export const a = {
  val: 1,
  valueOf: function () {
    return this.val++
  }
}

