/**
 *@project： aml-client
 *@package：
 *@date：2019/8/9 0009 18:27
 *@author 郭宝
 *@brief: 解析服务返回的垃圾图表字符串
 */

export default class ChartUtil {
  static getInstace() {
    if (!ChartUtil.instace) {
      ChartUtil.instace = new ChartUtil();
      console.log('新创建了一个实例');
      return ChartUtil.instace;
    }
    console.log('复用之前的实例');
    return ChartUtil.instace;
  }

  constructor() {
    this.initChartLabel();
  }

  /**
   * 图表类型标签
   */
  initChartLabel() {
    this.LINE_CHART_START_LABEL = '<objectiveHistory>';
    this.LINE_CHART_END_LABEL = '<objectiveHistory/>';

    this.ROC_LINE_CHART_START_LABEL = '<RocCurve>';
    this.ROC_LINE_CHART_END_LABEL = '<RocCurve/>';

    this.CLUSTER_CHART_START_LABEL = '<cluster>';
    this.CLUSTER_CHART_END_LABEL = '<cluster/>';
  }

  /**
   * 是否包含普通图表数据
   * @param str
   * @returns {boolean}
   */
  isContainLineChartData(str) {
    let isContain = false;
    if (this.isContainChartData(str)) {
      if ((str.indexOf(this.LINE_CHART_START_LABEL)!==-1)&&(str.indexOf(this.LINE_CHART_END_LABEL)!==-1)) {
        isContain = true;
      }
    }
    return isContain;
  }

  /**
   * 是否包含ROC图表数据
   * @param str
   * @returns {boolean}
   */
  isContainROCLineChartData(str) {
    let isContain = false;
    if (this.isContainChartData(str)) {
      if ((str.indexOf(this.ROC_LINE_CHART_START_LABEL)!==-1)&&(str.indexOf(this.ROC_LINE_CHART_END_LABEL)!==-1)) {
        isContain = true;
      }
    }
    return isContain;
  }

  /**
   * 是否包含聚类图表数据
   * @param str
   * @returns {boolean}
   */
  isContainClusterChartData(str) {
    let isContain = false;
    if (this.isContainChartData(str)) {
      if ((str.indexOf(this.CLUSTER_CHART_START_LABEL)!==-1)&&(str.indexOf(this.CLUSTER_CHART_END_LABEL)!==-1)) {
        isContain = true;
      }
    }
    return isContain;
  }

  /**
   * 是否包含图表数据
   * @param str
   * @returns {boolean}
   */
  isContainChartData(str) {
    return ((str.indexOf('/>')!==-1&&str.indexOf('<')!==-1));
  }

  /**
   * 解析普通曲线图
   "{"data":["0.6931471805599458", "0.5627324422013428", "0.34456217377333004", "0.1109242259983111", "0.06346920375678598", "0.03206351150625215", "0.01751445299695284", "0.009497450510612255", "0.005224070638124681", "0.0028453242923014866", "0.0015270593938253518", "0.0008076381951314476", "0.0004517497558911341", "0.0003638741976664615", "0.00010060488894810774", "6.824577993981779e-05", "3.5156853862695176e-05", "2.0463274122228423e-05", "1.1399719621202971e-05", "6.40229581383411e-06", "3.4952981000482602e-06", "1.8015418776084335e-06", "9.003246144800682e-07", "4.536444734030268e-07", "2.2771891938884543e-07", "1.1550073791782265e-07", "9.289757224191257e-08", "4.691795867621934e-08", "2.4404903753517093e-08", "1.2068362981846068e-08", "6.079302235986245e-09"],"name":"梯度下降曲线"}"
   *<objectiveHistory>"{"data":["0.6931471805599458", "0.5627324422013428", "0.34456217377333004", "0.1109242259983111", "0.06346920375678598", "0.03206351150625215", "0.01751445299695284", "0.009497450510612255", "0.005224070638124681", "0.0028453242923014866", "0.0015270593938253518", "0.0008076381951314476", "0.0004517497558911341", "0.0003638741976664615", "0.00010060488894810774", "6.824577993981779e-05", "3.5156853862695176e-05", "2.0463274122228423e-05", "1.1399719621202971e-05", "6.40229581383411e-06", "3.4952981000482602e-06", "1.8015418776084335e-06", "9.003246144800682e-07", "4.536444734030268e-07", "2.2771891938884543e-07", "1.1550073791782265e-07", "9.289757224191257e-08", "4.691795867621934e-08", "2.4404903753517093e-08", "1.2068362981846068e-08", "6.079302235986245e-09"],"name":"梯度下降曲线"}"<objectiveHistory/>
   * @param str
   */
  parseChartData(str) {
    if (str) {
      let chertObj = {};
      let jsonData = str.substring(str.indexOf('['), str.indexOf(']') + 1);
      console.log(jsonData);
      // 去除两边的[ ]
      jsonData = jsonData.substring(1, jsonData.length - 1);
      // 去除双引号
      jsonData = jsonData.replace(/\"/g, '');
      // 去除所有的空格
      jsonData = jsonData.replace(/\s/g, '');
      let chartDataStr = jsonData.split(',');
      console.log(chartDataStr);
      let chaerData = [];
      for (let i = 0; i < chartDataStr.length; i++) {
        let a = parseFloat(chartDataStr[i]);
        chaerData.push(a);
      }
      console.log(chaerData);

      // 取出name   "name":"梯度下降曲线"
      console.log(str);
      let name = str.substring(str.lastIndexOf('"name":') + 7, str.lastIndexOf('}'));
      name = name.replace(/\"/g, '');
      console.log('name:' + name);
      chertObj.name = name;
      chertObj.data = chaerData;

      return chertObj;
    }
  }

  /**
   * 继续ROC曲线图
   * <RocCurve>"{"FPR":[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0],"TPR":[0.0, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],"name":"ROC曲线","areaUnderROC":1.0}"<RocCurve/>
   *
   *rocData: {
            name: 'ROC曲线',
            data: {
              x: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0],
              y: [0.0, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
            }
          }
   *
   * @param str
   */
  parseRocData(str) {
    let rocData = {};
    // 清除所有的空格
    // 去除所有的空格
    str = str.replace(/\s/g, '');
    // "name":"ROC曲线","areaUnderROC":1.0
    let name = str.substring(str.lastIndexOf('"name":"')+8, str.lastIndexOf('","'));
    console.log('name:'+name);
    // name:ROC曲线

    let x = str.substring(str.indexOf('[')+1, str.indexOf(']'));
    x = x.split(',');

    // 将字符串数组转换为number数组
    x = x.map(Number);
    console.log(x);

    let y = str.substring(str.lastIndexOf('[')+1, str.lastIndexOf(']'));
    y = y.split(',');

    // 将字符串数组转换为number数组
    y = y.map(Number);
    console.log(y);

    rocData = {
      name,
      x,
      y
    };

    return rocData;
  }

  /**
   * 解析聚类图
   * data:[[6.870934009552002, 28.23629379272461, 1.0], [5.980809688568115, 25.709688186645508, 1.0]]
   * @param str
   * @returns {Array}
   */
  parseClusteringChart(str) {
    let chartData = [];
    // 去除所有的空格
    str = str.replace(/\s/g, '');
    // [[x,y],[x,y]]
    str = str.substring(str.indexOf('[')+1, str.lastIndexOf(']'));

    // [6.870934009552002, 28.23629379272461, 1.0
    let array = str.split('],[');
    console.log(array);
    for (let i = 0; i <array.length; i++) {
      let str = array[i];
      str = str.replace('[', '');
      str = str.replace(']', '');
      // 6.870934009552002,28.23629379272461,1.0
      let datas = str.split(',');

      // 将字符串数组转换为number数组
      datas = datas.map(Number);
      // [6.870934009552002, 28.23629379272461, 1]
      chartData.push(datas);
    }

    console.log(chartData);
    return chartData;
  }
}
