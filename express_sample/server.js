//express読み込み
const express = require('express')
//dotenv読み込み
const dotenv = require('dotenv')

//dotenv設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//サーバ作成
const app = express()

//ミドルウェアの設定
app.use(express.static(__dirname + '/public'))

// URLエンコード
app.use(express.urlencoded({ extended: true }))

//GETリクエスト処理
app.get('/', (req,res) =>{
    //リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req,query)

    //レスポンス処理
    res.send('Hello!!')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

// POSTリクエスト
app.post('/auth', (req, res) => {
    // POSTデータ取得
    var loginName = req.body.login_name
    var password = req.body.password
    console.log(loginName, password)

    var message = "ログイン失敗"
    // .env で設定した値で、ログインチェック
    // TODO：データベースに接続してユーザ取得
    // TODO：パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
            message = "ログイン成功"
        //TODO ログインが成功したらユーザの状態を保存
        //TODO ログイン後のページの転送
    } else {
        // TODO ログイン画面に戻す
    }
    res.send(message)
})

//ctrl + c
//サーバ待機
app.listen(PORT,HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})