/**
 *@project： todolist
 *@package：
 *@date：2019/7/26 0026 9:52
 *@author 郭宝
 *@brief: 定义一个全局函数,通过该方式，其它地方想调用时可以直接通过对象名.函数名的方式调用，无需导包
 */


let mathUtil = {};


/*
* 最大值
* */
mathUtil.maxValue = function (value1, value2) {
  console.log("value1:" + value1);
  console.log("value2:" + value2);
  return value1 > value2 ? value1 : value2;
};


/*
* 最小值
* */
mathUtil.minValue = function (value1, value2) {
  console.log("value1:" + value1);
  console.log("value2:" + value2);
  return value1 < value2 ? value1 : value2;
};


export default mathUtil
