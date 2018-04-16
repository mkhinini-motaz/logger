var logger = require('./index.js');

// logger.isPersistingLogs = false; // ==> because you don't want these dummy logs in your log file



logger.error({ name: "SomeError", message: "The error description", erroCode: 1 });

logger.newLine();

logger.danger("This is a danger log");
logger.dangerBg("And this is when you add Bg to the method name");

logger.newLine();

logger.dark("This is a dark log");
logger.darkBg("And this is when you add Bg to the method name");

logger.newLine();

logger.info("This is an info log");
logger.infoBg("And this is when you add Bg to the method name");

logger.newLine();

logger.log("This is a simple log, it just calls console.log and persist logs into a file", {a:5,b:9}, 123456789, false, {ap:'lll', az: 259, ss: 77});

logger.newLine();

logger.light("This is a light log");
logger.lightBg("And this is when you add Bg to the method name");

logger.newLine();

logger.primary("This is a primary log");
logger.primaryBg("And this is when you add Bg to the method name");

logger.newLine();

logger.secondary("This is a secondary log");
logger.secondaryBg("And this is when you add Bg to the method name");

logger.newLine();

logger.success("This is a success log");
logger.successBg("And this is when you add Bg to the method name");

logger.newLine();

logger.warning("This is a warning log");
logger.warningBg("And this is when you add Bg to the method name");

logger.newLine();

logger.white("This is a white log");
logger.whiteBg("And this is when you add Bg to the method name");

logger.newLine();

logger.styleLog("This is a style log, it just calls console.log and persist logs into a file", {a:5,b:9}, 123456789, false, {ap:'lll', az: 259, ss: 77});

logger.isPersistingLogs = true;
