const name = 'victor jiang';

function foo() {
  return 'foo';
}

const fname = foo();

{
	console.log('这段代码保留');
}
// 导出一个foo函数
function hello() {
	console.log(fname);
	console.log(`hello! ${name}`);
}

export { hello as default };
