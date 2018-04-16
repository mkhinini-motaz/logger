var logger = require('./index.js');

logger.isPersistingLogs = false; // ==> because you don't want these dummy logs in your log file



logger.error({ name: "SomeError", message: "The error description", erroCode: 1 })

    .newLine()

    .danger("This is a danger log")
    .dangerBg("And this is when you add Bg to the method name")

    .newLine()

    .dark("This is a dark log")
    .darkBg("And this is when you add Bg to the method name")

    .newLine()

    .info("This is an info log")
    .infoBg("And this is when you add Bg to the method name")

    .newLine()

    .log("This is a simple log, it just calls console.log and persist logs into a file", {a:5,b:9}, 123456789, false, {ap:'lll', az: 259, ss: 77})

    .newLine()

    .light("This is a light log")
    .lightBg("And this is when you add Bg to the method name")

    .newLine()

    .primary("This is a primary log")
    .primaryBg("And this is when you add Bg to the method name")

    .newLine()

    .secondary("This is a secondary log")
    .secondaryBg("And this is when you add Bg to the method name")

    .newLine()

    .success("This is a success log")
    .successBg("And this is when you add Bg to the method name")

    .newLine()

    .warning("This is a warning log")
    .warningBg("And this is when you add Bg to the method name")

    .newLine()

    .white("This is a white log")
    .whiteBg("And this is when you add Bg to the method name")

    .newLine();

logger.styleLog("This is a style log, it just calls console.log and persist logs into a file", {a:5,b:9}, 123456789, false, {ap:'lll', az: 259, ss: 77});

logger.isPersistingLogs = true;
