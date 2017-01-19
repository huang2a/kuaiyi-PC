// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
    title: {
        text: "总资产变化统计"
    },
    tooltip: {
        trigger: "axis",
        show: true
    },
    legend: {
        data: ["总资产", "总投资", "总收益"],
        x: "center",
        y: "top",
        orient: "horizontal",
        selectedMode: "multiple"
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar", "stack", "tiled"],
                show: false
            },
            dataZoom: {
                show: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: false
            }
        },
        show: true,
        showTitle: true
    },
    calculable: true,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
            name: "时间",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "金额",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "总资产",
            type: "line",
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710],
            smooth: true
        },
        {
            name: "总投资",
            type: "line",
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10],
            smooth: true
        },
        {
            name: "总收益",
            type: "line",
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [1320, 1132, 601, 234, 120, 90, 20],
            smooth: true
        }
    ]
};
    // 为echarts对象加载数据
    myChart01.setOption(option);

