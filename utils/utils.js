/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * version1>version2,返回1
 * version1<version2,返回-1
 * version1=version2,返回0
 */
 export var compareVersion = function (version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const n1 = Number(v1[i] || 0);
        const n2 = Number(v2[i] || 0);
        if (n1 !== n2) {
            return n1 > n2 ? 1 : -1;
        }
    }
    return 0;
};



export const download = (res, type, filename) => {
    // 创建blob对象，解析流数据
    const blob = new Blob([res], {
      // 如何后端没返回下载文件类型，则需要手动设置：type: 'application/pdf;chartset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
      type: type
    })
    const a = document.createElement('a')
    // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
    const URL = window.URL || window.webkitURL
    // 根据解析后的blob对象创建URL 对象
    const herf = URL.createObjectURL(blob)
    // 下载链接
    a.href = herf
    // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    // 在内存中移除URL 对象
    window.URL.revokeObjectURL(herf)
  }


export function getCookie (name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return '';
}