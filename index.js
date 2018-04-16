/**
 * @author Moatez Mkhinini  <mkhinini.motaz@gmail.com>
 *
 */

var chalk = require("chalk");
var fs = require("fs");

var logger = {};
var dir = './logs' ;

var logFilePath = dir +'/system.log';

logger.isPersistingLogs = true;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/**
 * @function persistLogs Allows you to activate or deactivate persisting logs
 *
 * @param  {Boolean} [persistingLogs=true] To indicate wether to activate persisting logs to a file or not
 */
logger.persistLogs = function (persistingLogs = true) {
    // to take under consideration that the parameter may not be boolean
    persistingLogs = !!persistingLogs;
    this.isPersistingLogs = persistingLogs;
};

/**
 * @function errorLog Adds some styling to the error logging to make it more visible on the console
 *
 * @param {Object} error The error object to log
 */
logger.errorLog = function(error) {
    if (error) {
        console.log(chalk.white.bgRed.bold('------------------------- An error has occured -------------------------'));
        console.log(error);
        console.log(chalk.white.bgRed.bold('------------------------------------------------------------------------'));
    }
};

/**
 * @function appendToLogFile Allows you to append text to a file, this function has been writting in callback style following the official documentation of node.js.
 * This function will not be exposed outside this file.
 *
 * @param {string} data  Data to append into the file
 */
logger.appendToLogFile = function(data) {
    if (! this.isPersistingLogs) {
        return;
    }
    fs.open(logFilePath, 'a', (error, file) => {
        logger.errorLog(error);
        fs.appendFile(file, data + "\n", 'utf8', (error) => {
            logger.errorLog(error);
            fs.close(file, (error) => {
                logger.errorLog(error);
            });
        });
    });
};

/**
 * @function danger Adds some styling to the text when logging some danger info to the console
 */
logger.danger = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(220, 53, 69));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function dangerBg Adds some styling to the background when logging some danger info to the console
 */
logger.dangerBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRed);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function error Adds some styling to the error logging to make it more visible on the console, we seperated the console logging from the appendToLogFile function call to avoid endless recursive function calls.
 *
 * @param {Object} error The error object to log
 */
logger.error = function(error) {
    logger.errorLog(error);
    logger.appendToLogFile("ERROR [ " + (new Date()).toString() + " ] : " + JSON.stringify(error));
    return this;
};

/**
* @function dark Adds some styling to the text when logging some information to the console with the bootstrap4 dark style
*/
logger.dark = function() {
    var args = Object.values(arguments);
    args.push(chalk.black);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function darkBg Adds some styling to the background when logging some information to the console with the bootstrap4 dark style
 */
logger.darkBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(0, 0, 0).whiteBright);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function info Adds some styling to the text like info in Twitter-Bootstrap4 when logging some message to the console
 */
logger.info = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(23, 162, 184));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function infoBg Adds some styling to the background like info in Twitter-Bootstrap4 when logging some message to the console
 */
logger.infoBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(23, 162, 184));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function light Adds some styling to the text when logging some information to the console with the bootstrap4 light style
 */
logger.light = function() {
    var args = Object.values(arguments);
    args.push(chalk.white);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function lightBg Adds some styling to the background when logging some information to the console with the bootstrap4 light style
 */
logger.lightBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgWhite.black);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function log Simple function that serves as a wrap for the console.log method and allows to persist that log into the log file
 */
logger.log = function() {
    console.log.apply(console, arguments);
    logger.appendToLogFile(this.treatArguments(arguments));
    return this;
}

/**
 * @function newLine Simple function that outputs a new line
 */
logger.newLine = function() {
    console.log("");
    logger.appendToLogFile("");
    return this;
}

/**
 * @function primary Adds some styling to the text like primary in Twitter-Bootstrap4 when logging some message to the console
 */
logger.primary = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(0, 123, 255));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function primaryBg Adds some styling to the background like primary in Twitter-Bootstrap4 when logging some message to the console
 */
logger.primaryBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(0, 123, 255));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function secondary Adds some styling to the text when logging some information to the console with the bootstrap4 secondary style
 */
logger.secondary = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(108, 117, 125));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function secondaryBg Adds some styling to the background when logging some information to the console with the bootstrap4 secondary style
 *
 */
logger.secondaryBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(108, 117, 125));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function success Adds some styling to the text when logging some success information to the console using bootstrap 4 theme
 */
logger.success = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(74, 226, 14));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function successBg Adds some styling to the background when logging some success information to the console using bootstrap 4 theme
 */
logger.successBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgGreen);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function warning Adds some styling to the text when logging some warning to the console
 */
logger.warning = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(255, 193, 7));
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function warningBg Adds some styling to the background when logging some warning to the console
 */
logger.warningBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(255, 193, 7).black);
    this.styleLog.apply(this, args);
    return this;
};

/**
 * @function white Adds some styling to the text when logging some information to the console with the bootstrap4 white style
 */
logger.white = function() {
    var args = Object.values(arguments);
    args.push(chalk.whiteBright);
    this.styleLog.apply(this, args);
    return this;
};


/**
 * @function whiteBg Adds some styling to the background when logging some information to the console with the bootstrap4 white style
 */
logger.whiteBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgWhiteBright.black);
    this.styleLog.apply(this, args);
    return this;
};


/**
 * @function treatArguments Converts the arguments array to a string
 *
 * @param {string} args Arguments to be treated
 *
 */
logger.treatArguments = function(args) {
    if (Array.isArray(args) || typeof args == 'object') {
        if (args.length == 0) {
            return "[]";
        } else if (args.length == 1) {
            return args[0];
        } else {
            let result = [];
            for (let element of args) {
                if (element != undefined) {
                    result.push((typeof element == 'object' && !Array.isArray(element)) ? JSON.stringify(element) : element );
                }
            }
            return (result.length == 1 || ( result.length == 1  && result[result.length] == undefined )) ? result[0] : result.join('  ');
        }
    } else {
        return args;
    }
};

/**
 * @function styleLog Simple function that serves as a base for all log methods, it also persists data to the log file
 *
 */
logger.styleLog = function() {
    var chalkStyle = arguments[arguments.length - 1];
    if (typeof chalkStyle == 'function') {
        delete arguments[arguments.length - 1];
        let args = this.treatArguments(arguments)
        console.log(chalkStyle(args))
        this.appendToLogFile("[ " + (new Date()).toString() + " ] : " + args);
    }
    else {
        this.log.apply(this, arguments);
    }
}

module.exports = logger;
