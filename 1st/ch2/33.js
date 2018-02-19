// Run in browser
var curryLog, logHello, logStayinAlive, logGoodbye;

curryLog = function(argText) {
  var logIt = function() {
    console.log(argText);
  };
  return logIt;
};

logHello = curryLog('hello');
logStayinAlive = curryLog('stayin alive!');
logGoodbye = curryLog('goodbye');

curryLog('fred');

logHello();
logStayinAlive();
logGoodbye();
logHello();

delete window.logHello;
delete window.logStayinAlive;

logHello();
logStayinAlive();
logGoodbye();