var logger = require('./index.js');

logger.isPersistingLogs = false; // ==> because you don't want these dummy logs in your log file



logger.error({ name: "SomeError", message: "The error description", erroCode: 1 });

logger.newLine();

logger.danger("This is a danger log");
logger.danger("And this is when you add true as the second argument", true);

logger.newLine();

logger.dark("This is a dark log");
logger.dark("And this is when you add true as the second argument", true);

logger.newLine();

logger.info("This is an info log");
logger.info("And this is when you add true as the second argument", true);

logger.newLine();

logger.log("This is a simple log, it just calls console.log and persist logs into a file");

logger.newLine();

logger.light("This is a light log");
logger.light("And this is when you add true as the second argument", true);

logger.newLine();

logger.primary("This is a primary log");
logger.primary("And this is when you add true as the second argument", true);

logger.newLine();

logger.secondary("This is a secondary log");
logger.secondary("And this is when you add true as the second argument", true);

logger.newLine();

logger.success("This is a success log");
logger.success("And this is when you add true as the second argument", true);

logger.newLine();

logger.warning("This is a warning log");
logger.warning("And this is when you add true as the second argument", true);

logger.newLine();

logger.white("This is a white log");
logger.white("And this is when you add true as the second argument", true);

logger.isPersistingLogs = true;
