#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');

program
  .name('file-path')
  .description('获取文件的绝对路径')
  .version('1.0.0')
  .argument('<file>', '文件路径')
  .action((file) => {
    try {
      // 解析绝对路径
      const absolutePath = path.resolve(file);
      
      // 检查文件是否存在
      if (!fs.existsSync(absolutePath)) {
        console.error(`错误: 文件不存在 - ${absolutePath}`);
        process.exit(1);
      }
      
      // 输出绝对路径
      console.log(absolutePath);
    } catch (error) {
      console.error(`错误: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(); 