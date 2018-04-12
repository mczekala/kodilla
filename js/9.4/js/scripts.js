function drawTree(number) {
	var star = '*';
	for (var i=1;i<number;i=i+2)	{
		console.log(' '.repeat((number-i)/2)+'*'.repeat(i));
	}
}
drawTree(10);