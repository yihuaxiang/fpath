const path = require('path');
const fs = require('fs');

/**
 * 获取文件的绝对路径
 * @param {string} filePath - 文件路径
 * @returns {string} 绝对路径
 * @throws {Error} 如果文件不存在
 */
function getAbsolutePath(filePath) {
  const absolutePath = path.resolve(filePath);
  
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`文件不存在: ${absolutePath}`);
  }
  
  return absolutePath;
}

module.exports = {
  getAbsolutePath
}; 