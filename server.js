/**
 * Created by admin on 2017-02-11.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    service: '163',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: 'jmm4570@163.com',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: 'yuan4570'
    }
});


var mailOptions = {
    from: '我<jmm4570@163.com>', // sender address
    to: '876730203@qq.com ', // list of receivers
    subject: '标题你好1', // Subject line
    text: '我是内容', // plaintext body
    html: '<b>我是什么额</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});