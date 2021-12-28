
import { it, expect, test } from '@jest/globals'
import { getSalary, getSalary2,getSalary3 } from '../calc'
it('测试', () => {


  expect(getSalary(1)).toEqual(100)
  expect(getSalary(2)).toEqual(300)
  expect(getSalary(3)).toEqual(500)
  expect(getSalary2(4)).toEqual(800)
  expect(getSalary2(5)).toEqual(1100)
  expect(getSalary2(6)).toEqual(1400)
  expect(getSalary3(6)).toEqual(1400)
  
}
)