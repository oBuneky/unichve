function postSlack(message) {
    var url        = 'https://slack.com/api/chat.postMessage';
    var token      = 'your api token'; 
    var channel    = '#your channel';
    var text       = message;
  
    var username   = 'your name';
    var parse      = 'full';
    
    var icon_emoji = 'your icon';
    var method     = 'post';
 
    var payload = {
        'token'      : token,
        'channel'    : channel,
        'text'       : text,
        'username'   : username,
        'parse'      : parse,
        'icon_emoji' : icon_emoji
    };
 
    var params = {
        'method' : method,
        'payload' : payload
    };
 
    var response = UrlFetchApp.fetch(url, params);
}

// call postSlack
