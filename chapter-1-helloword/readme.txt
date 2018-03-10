本节内容：ES6转换为ES5

1.babel
1.1 babel简述：可以将ES6转换为ES5,以兼容不支持ES6的浏览器

1.2 ES6转ES5 HelloWorld
1.2.1 npm初始化项目
        npm init -y (-y的意思为mpm init初始化需要选填的参数都设置默认不再一个个选)
1.2.1 安装babel   
        npm install -g babel-cli
1.2.2 安装babel-preset-es2015和babel-cli
        npm install --save-dev babel-preset-es2015 babel-cli   (--save-dev 安装插件到开发环境依赖)
        执行命令后，会在package.json文件中的devDependencies下有依赖
        "devDependencies": {
            "babel-cli": "^6.26.0",
            "babel-preset-es2015": "^6.24.1"
        }
2.2.3 编写代码（略）
2.2.4 新建.babelrc文件，并配置该文件
        {
            "presets":[
                "es2015"
            ],
            "plugins":[]
        }
2.2.5 编译
        babel src/index.js -o dist/index.js
2.2.6 为了简化2.2.5，方便以后执行npm run build就可以进行babel ES6转ES5的编译工作
        配置package.json文件中的"scripts"属性
        新增"自己自定义属性名":"babel src/index.js -o dist/index.js"
        注：不可配置为"babel src/*.js -o dist/*.js"或者"babel src/* -o dist/*"等，具体的babel配置后面学习会将笔记更新上
