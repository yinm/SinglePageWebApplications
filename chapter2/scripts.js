let
  curryLog,
  logHello,
  logStayinAlive,
  logGoodbye;

curryLog = function(arg_text) {
  const log_it = function() {
    console.log(arg_text);
  };

  return log_it;
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

logGoodbye();
logStayinAlive();