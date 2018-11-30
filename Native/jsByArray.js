/**
 *
 * 排序算法
 * 斐波拉契数列
 * 去重算法
 */

// 数组去重
// 类hash算法
function delExist(arr)
{
    if (Object.prototype.toString.call(arr) != "[Object Array]")
	return new Error("参数错误!");
    var hash = {}
    var newArr = []
	for (let i = 0; i < arr.length; i++)
	{
		if (!hash(arr[i])) {
			hash[arr[i]] = true;
			newArr.push(arr[i])
		}
	}
	return newArr;
}

// 利用双重循环实现
function doubleDelExist(arr)
{
	var newArr = []; // 记录重复的索引
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] != arr[j] && newArr.indexOf(arr[i]) == -1) {
				newArr.push(arr[i]);
			}
		}
	}
	return newArr;
}

// 斐波拉契数列
<script>
	(function(){
	    // 通项公式:F(n) = f(n-1)+f(n-2)
		function Fibonacci(n) {
			if (n == 1 || n == 2) return 1
			return Fibonacci(n - 1) + Fibonacci(n - 2);
		}			
	});
</script>
