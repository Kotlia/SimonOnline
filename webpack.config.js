module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/js/Main.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public`,
      // 出力ファイル名
      filename: "main.js"
    }
  };