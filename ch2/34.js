var curryLog;
var logHello;
var logStayinAlive;
var logGoodbye;

curryLog = function(argText) {
  return function() {
    console.log(argText);
  }
};

logHello = curryLog('hello!');
logStayinAlive = curryLog('stayin alive!');
logGoodbye = curryLog('goodbye');

curryLog('fred');

logHello();
logStayinAlive();
logGoodbye();
logHello();

delete window.logHello;
delete window.logStayinAlive;

logGoodbye();
logStayinAlive();