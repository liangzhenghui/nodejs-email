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
        user: 'XXXXX@163.com',//你的邮箱
        //这里密码不是qq密码，是你设置的smtp密码
        pass: 'xxxxxx'
    }
});


var mailOptions = {
    from: '发件人<xxxxx@163.com>', // sender address
    to: 'xxxx3@qq.com ', // list of receivers
    subject: '标题你好', // Subject line
    text: '我是内容', // plaintext body 邮件不支持html代码时所显示的文本
    html: '<b>我是html文本</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
