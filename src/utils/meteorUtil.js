/**
 *@project： client_master
 *@package：
 *@date：2019/4/9 0009 14:55
 *@author 郭宝
 *@brief:
 */

/**
 * 开始执行流星
 * @param meteorContainerId 流行容器dom id
 */
let start = function(meteorContainerId) {
  let starts = document.getElementById(meteorContainerId);
  let star = document.getElementsByClassName('star');

// js随机生成流星
  for (let j = 0; j < 30; j++) {
    let newStar = document.createElement("div");
    newStar.className = "star";
    newStar.style.top = randomDistance(30, -30) + 'px';
    newStar.style.left = randomDistance(150, 20) + 'px';
    starts.appendChild(newStar)
  }

// 封装随机数方法
  function randomDistance(max, min) {
    let distance = Math.floor(Math.random() * (max - min + 1) * 20 + min)
    return distance
  }

// 给流星添加动画延时
  for (let i = 0, len = star.length; i < len; i++) {
    if (i % 3 == 0) {
      star[i].style.animationDelay = '0s'
    } else {
      star[i].style.animationDelay = i * 0.5 + 's'
    }
  }
}

export default {
  start,
}
