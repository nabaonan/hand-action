// import { random } from 'lodash'


/**
 * 一个方法求指定范围随机数
 * @param {*} start 
 * @param {*} end 
 */

export function random(start, end) {

  /**
   * 分析过程
   * Math.random 计算的是0-1的随机数 左闭右开区间[0,1)
   * 如果要得到1-10 的随机数 Math.random *10 范围[0,10)
   * 如果要得到1-5的随机数 Math.random *5 范围[0,5)
   * 得到 1-3的随机数 Math.random *3 范围[0,3)
   * 由此可知，得到的结果总是从0开始
   * 要想得到的值从start开始，则需要在前面加上一个star 偏移量
   * 比如要想得到[2,4)的随机数则  2+Math.random()*(4-2)
   * 之所以要用4-2，是因为左侧已经加了一个2的偏移量，生成随机数的区间就要减去这个偏移量，如果随机数区间不变的话，会超出end的限制范围
   * 得出结果
   * 如果想要获取区间内的整数，最后的结果还要向下取整
   */

  return Math.floor(start + Math.random() * (end - start))
}