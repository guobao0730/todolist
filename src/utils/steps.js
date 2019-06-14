/**
 *@project： todolist
 *@package：
 *@date：2019/6/14 0014 16:10
 *@author 郭宝
 *@brief: 页面分布引导步骤
 */

const steps = [
  {
    element: '#eb-send',
    popover: {
      title: '发送',
      description: '通过该功能可以将本地消息发送到后台',
      position: 'top'
    }
  },
  {
    element: '#eb-add',
    popover: {
      title: '添加',
      description: '通过该功能可以添加用户组数据',
      position: 'bottom'
    }
  }

];

export default steps
