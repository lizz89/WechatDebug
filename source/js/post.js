$(function(){

  function buildRequest(type){
    var time = Math.round(new Date().getTime()/1000);
    xml = 	"<xml>\n"+
        "<ToUserName><![CDATA["+$('#toUser').val()+"]]></ToUserName>\n"+
         "<FromUserName><![CDATA["+$('#fromUser').val()+"]]></FromUserName>\n"+
         "<CreateTime>"+time+"</CreateTime>\n";
    if (type == 'text') {
      xml += "<MsgType><![CDATA[text]]></MsgType>\n";
      xml += "<Content><![CDATA["+$("#textInput").val()+"]]></Content>\n";
    } else if (type == 'image') {
      xml += "<MsgType><![CDATA[image]]></MsgType>\n";
      xml += "<PicUrl><![CDATA["+$('#picurl').val()+"]]></PicUrl>";
      $('#svpostinfo').html('<img src="'+$('#picurl').val()+'">');
    } else if (type == 'location') {
      xml += "<MsgType><![CDATA[location]]></MsgType>\n";
      xml += "<Location_X>"+parseFloat($('#location_x').val())+"</Location_X>\n";
      xml += "<Location_Y>"+parseFloat($('#location_y').val())+"</Location_Y>\n";
      xml += "<Scale>20</Scale>\n";
      xml += "<Label><![CDATA[位置信息]]></Label>\n";
      $('span.time', $demoSendBox).hide();
      $('div.mediaImg', $demoSendBox).hide();
      $('div.mediaContent', $demoSendBox).hide();
      $('#svpostinfo').html('<img src="data:image/jpg;base64,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">');
    } else if (type == 'link') {
      xml += "<MsgType><![CDATA[link]]></MsgType>\n";
      xml += "<Title><![CDATA[测试链接]]></Title>\n";
      xml += "<Description><![CDATA[测试链接描述]]></Description>\n";
      xml += "<Url><![CDATA["+$('#url').val()+"]]></Url>\n";
    } else if (type == 'subscribe') {
      xml += "<MsgType><![CDATA[event]]></MsgType>\n";
      xml += "<Event><![CDATA[subscribe]]></Event>\n";
      xml += "<EventKey><![CDATA[]]></EventKey>\n";
    } else if (type == 'unsubscribe') {
      xml += "<MsgType><![CDATA[event]]></MsgType>\n";
      xml += "<Event><![CDATA[unsubscribe]]></Event>\n";
      xml += "<EventKey><![CDATA[]]></EventKey>\n";
    } else if (type == 'event') {
      xml += "<MsgType><![CDATA[event]]></MsgType>\n";
      xml += "<Event><![CDATA[CLICK]]></Event>\n";
      xml += "<EventKey><![CDATA["+$('#event_key').val()+"]]></EventKey>\n";
    }
    xml +=  "<MsgId>1234567890123456</MsgId>\n"+"</xml>";
    return xml;
  }

  function getxml(xmlstring){
    var xmlobject = null;
    try{
      if(window.ActiveXObject){
        xmlobject =new ActiveXObject("Microsoft.XMLDOM");
        xmlobject.async="false";
        xmlobject.loadXML(xmlstring);
      }else{// 用于 Mozilla, Firefox, Opera, 等浏览器的代码：
         var parser=new DOMParser();
         xmlobject =parser.parseFromString(xmlstring,"text/xml");
      }
    }catch(e){alert("您的浏览器不支持模拟测试");}
    return xmlobject;
  }

// xml格式化
// http://www.freeshow.net.cn/questions/ff86f17ec545a7061362e6522133a1e2dcae7270b8bb2e82a272d3923ca930fc/
function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
    var indent = 0;
    if (node.match( /.+<\/\w[^>]*>$/ )) {
    indent = 0;
    } else if (node.match( /^<\/\w/ )) {
    if (pad != 0) {
    pad -= 1;
    }
    } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
    indent = 1;
    } else {
    indent = 0;
    }

    var padding = '';
    for (var i = 0; i < pad; i++) {
    padding += ' ';
    }

    formatted += padding + node + '\r\n';
    pad += indent;
    });

    return formatted;
  }

  function nl2br(str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  }
  // 判断是不是错误信息
  function isError(str){
    // var isError = (str.indexOf('</table>')>0)||(str.indexOf('</pre>')>0);
    var isError = str.indexOf('xdebug');
    isError = parseInt(isError);
    console.log(isError);
    if (isError < 0) {
      return false;
    }else{
      return true;
    }
  }

  // 发送请求
  function sendRequest(type){
    var xml = buildRequest(type);
    $.ajax($('#url').val(), {
      type : 'POST',
      headers : {"Content-type" : "text/xml"},
      data : xml.replace(/[\r\n]/g,""),
    }).done(function(s){
        // 获取的是错误
        if (isError(s)) {
          addTodebuglist(false,s);
        }
        //获取的是正确返回xml
        else{
          var xmlobject = getxml(s);
          if(xmlobject){
            var xmlobj = xmlobject.getElementsByTagName("xml");
            if(xmlobj.length){

              var xmls = xmlobj.item(0);
              var xml = xmls;

              var FromUserName = xml.getElementsByTagName("FromUserName")[0].firstChild.nodeValue;
              var ToUserName = xml.getElementsByTagName("ToUserName")[0].firstChild.nodeValue;
              var MsgType = xml.getElementsByTagName("MsgType")[0].firstChild.nodeValue;

              if(MsgType=='text'){
                var Content = xml.getElementsByTagName("Content")[0].firstChild.nodeValue;
                Content = nl2br(Content);
                addYouTochalist('text',Content);
              }else if(MsgType == 'news'){
                var Title = xml.getElementsByTagName("Title")[0].firstChild.nodeValue;
                var Description = xml.getElementsByTagName("Description")[0].firstChild.nodeValue;
                var PicUrl = xml.getElementsByTagName("PicUrl")[0].firstChild.nodeValue;
                var Url = xml.getElementsByTagName("Url")[0].firstChild.nodeValue;
                $('#svtitle').html(Title);
                $('#svinfo').html(Description);
                $('#svpic').attr('src', PicUrl);
                $('#svurlbox').show().find('a#svurl').attr('href', Url);
                var titleObj = xml.getElementsByTagName("Title");
                if(titleObj.length>1){
                  var svinfolist = imghtml = '';
                  var UrlObj = xml.getElementsByTagName("Url");
                  var PicUrlObj = xml.getElementsByTagName("PicUrl");
                  for(var ti=1;ti<titleObj.length;ti++){
                    imghtml = PicUrlObj[ti].firstChild.nodeValue ? '<img align="right" src="'+PicUrlObj[ti].firstChild.nodeValue+'">' : '';
                    svinfolist += '<p class="clearfix" onclick="popensvurl(\''+UrlObj[ti].firstChild.nodeValue+'\')">'+titleObj[ti].firstChild.nodeValue+imghtml+'</p>';
                  }
                  $('div.mediaFooterbox', $('#demoSendBox')).hide();
                  $('#svinfolist').show().html(svinfolist);
                }
              }
            }
            addTodebuglist(true,s);
            SyntaxHighlighter.highlight();
          }
        }
    })
  }

  // 将我发送的消息添加的消息框
  function addMeTochatlist(type){
    var chatlist = $('#chat_chatmsglist');
    if (type == 'text') {
      var text = $("#textInput").val();
      var thisIterm = $('#example_me').clone();
      thisIterm.appendTo(chatlist).find(".cloudContent").empty().append(text);
      var thisItermPos = thisIterm.position();
      $('#chat').scrollTop(thisItermPos.top);
    }
  }

  // 将服务器返回的消息发送到消息框
  function addYouTochalist(type,content){
    var chatlist = $('#chat_chatmsglist');
    if (type = 'text') {
      var thisIterm = $('#example_you').clone();
      thisIterm.appendTo(chatlist).find(".cloudContent").empty().append(content);
      var thisItermPos = thisIterm.position();
      $('#chat').scrollTop(thisItermPos.top);
    }
  }

  // 将调试信息添加到调试框
  function addTodebuglist(status = true,content = '暂无消息'){
    var debuglist = $('#accordion');
    var randomId = "debug"+parseInt(Math.random()*1000000);
    if (status) {
      var thisDebug_s = $('#example_debug_s').clone();
      thisDebug_s.find("a").attr('href',"#"+randomId);
      thisDebug_s.find(".collapse").attr('id',randomId).find(".panel-body").append("<pre class='brush: xml'>\n<xmp>\n\n"+formatXml(content)+"</xmp></pre>");
      thisDebug_s.show().appendTo(debuglist);
    }else{

      var thisDebug_d = $('#example_debug_d').clone();
      thisDebug_d.find("a").attr('href',"#"+randomId);
      thisDebug_d.find(".collapse").attr('id',randomId).find(".panel-body").append(content);
      thisDebug_d.show().appendTo(debuglist);
    }
  }

  $('a.chatSend').click(function(){
    addMeTochatlist('text');
    sendRequest('text');

  });

  $('#textInput').keyup(function(event){
    if (event.keyCode == 13) {
      addMeTochatlist('text');
      sendRequest('text');
      $('#textInput').val('');
    }
  });
});
