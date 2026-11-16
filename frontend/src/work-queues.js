// 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/
export const workQueues = [
  { module: 'requests', state: 'OUT', label: '借出中的样品申请' },
  { module: 'returns', state: 'DRAFT', label: '待验收样品归还' },
];
/** 读取当前企业看板的状态数量。商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。 */
export function queueCount(modules, queue) {
  return modules.find(m => m.key === queue.module)?.states.find(s => s.state === queue.state)?.total ?? 0;
}
/** 按已查询条件导出，页码不参与导出。商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。 */
export function exportPath(module, {q, state}) {
  return '/export/' + encodeURIComponent(module) + '?' + new URLSearchParams({q, state});
}
