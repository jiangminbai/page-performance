# 数组性能优化

1. concat 与 [...] 性能对比

- concat比spread运行速度快10倍左右
- concat中类型数组比普通数组快200倍
- spread中类型数组和普通数组差不多
2. arr.push(...arr1)爆栈

3. 类型数组

类型数组赋值比普通数组快4倍