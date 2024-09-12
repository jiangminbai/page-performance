# 长任务(Long Task)
### RAIL准则
RAIL对web应用的四个生命周期提出的准则：
- 响应(Response): 在50ms内处理事件
- 动画(Animation): 在10ms内生成一帧
- 空间(Del): 最大限度地延长空闲时间
- 加载(Load): 提交内容并在5s内实现互动

### 长任务排查
1. performance面板上超过50ms以上的任务，被当做长任务，显示红色

2. 可以通过Bottom-Up -> Group By Activity去排查

### 长任务优化策略

1. 将阻塞主线程的长任务拆分成异步的串行小任务(50ms以内),
await new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 0)}) 每执行一个任务完成后，将控制权交给主线程

2. webWorker 额外的线程计算长任务，不阻塞主线程

3. requestIdleCallback 在浏览器空闲时执行任务，但是执行的任务如果时间太长会阻塞下一次的渲染。