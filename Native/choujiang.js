/**
 * 假设有一个数组[100,400,200,300]，它的意思是，总数是100+400+200+300=1000,
 * 取到第一个数的概率是100/1000,取到第二个数的概率是400/1000......代码如下:
 */
function getResult(arr) {
    var leng = 0;
    for (var i = 0; i < arr.length; i++) {
        leng += arr[i]
    }
    for (var i = 0; i < arr.length; i++) {
        var random = parseInt(Math.random() * leng); // 获取0-总数之间的一个随机整数
        if (random < arr[i]) {
            return i; // 如果在当前的概率范围内，得到的就是当前概率
        } else {
            leng -= arr[i]; // 否则减去当前的概率范围，进入下一轮循环
        }
    }
}

var gifts = [
    {
        "name":"mac",
        "prop":1
    },
    {
        "name":"红米",
        "prop":10
    },
    {
        "name":"u盘",
        "prop":40
    },
    {
        "name":"香皂",
        "prop":49
    }
];

var gArr = [];
for (var i = 0; i < gifts.length; i++) {
    gArr.push(gifts[i]['prop']);
}
console.log(gifts[getResult(gArr)]['name']);