# file-path

一个简单的命令行工具，用于获取文件的绝对路径。

## 安装

```bash
npm install -g file-path
```

## 使用方法

### 命令行使用

```bash
file-path ./file
```

### 示例

```bash
# 获取当前目录下 package.json 的绝对路径
file-path ./package.json

# 获取上级目录文件的绝对路径
file-path ../README.md

# 获取绝对路径
file-path /Users/username/project/file.txt
```

### 编程接口

```javascript
const { getAbsolutePath } = require('file-path');

try {
  const absolutePath = getAbsolutePath('./file.txt');
  console.log(absolutePath);
} catch (error) {
  console.error('文件不存在:', error.message);
}
```

## 功能特性

- 支持相对路径和绝对路径
- 自动检查文件是否存在
- 提供友好的错误提示
- 支持编程接口调用

## 许可证

MIT 