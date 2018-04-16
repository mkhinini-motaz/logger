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
 * @param {string} filePath File path to append data to, if the file doesn't exist it will be created but the directory must be already created
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
 * @function danger Adds some styling when logging some danger info to the console
 *
 * @param {string} data The data to log as a danger info
 * @param {boolean} background Edit background color instead of text color
 */
logger.danger = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(220, 53, 69));
    this.styleLog.apply(this, args);
};

/**
 * @function danger Adds some styling when logging some danger info to the console
 *
 * @param {string} data The data to log as a danger info
 * @param {boolean} background Edit background color instead of text color
 */
logger.dangerBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRed);
    this.styleLog.apply(this, args);
};

/**
 * @function error Adds some styling to the error logging to make it more visible on the console, we seperated the console logging from the appendToLogFile function call to avoid endless recursive function calls.
 *
 * @param {Object} error The error object to log
 */
logger.error = function(error) {
    logger.errorLog(error);
    logger.appendToLogFile("ERROR [ " + (new Date()).toString() + " ] : " + JSON.stringify(error));
};

/**
* @function dark Adds some styling when logging some information to the console with the bootstrap4 dark style
*
* @param {string} data The data to log as a danger info
* @param {boolean} background Edit background color instead of text color
*/
logger.dark = function() {
    var args = Object.values(arguments);
    args.push(chalk.black);
    this.styleLog.apply(this, args);
};

/**
 * @function dark Adds some styling when logging some information to the console with the bootstrap4 dark style
 *
 * @param {string} data The data to log as a danger info
 * @param {boolean} background Edit background color instead of text color
 */
logger.darkBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(0, 0, 0).whiteBright);
    this.styleLog.apply(this, args);
};

/**
 * @function info Adds some styling like info in Twitter-Bootstrap4 when logging some message to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.info = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(23, 162, 184));
    this.styleLog.apply(this, args);
};

/**
 * @function info Adds some styling like info in Twitter-Bootstrap4 when logging some message to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.infoBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(23, 162, 184));
    this.styleLog.apply(this, args);
};

/**
 * @function light Adds some styling when logging some information to the console with the bootstrap4 light style
 *
 * @param {string} data The data to log as a danger info
 * @param {boolean} background Edit background color instead of text color
 */
logger.light = function() {
    var args = Object.values(arguments);
    args.push(chalk.white);
    this.styleLog.apply(this, args);
};

/**
 * @function light Adds some styling when logging some information to the console with the bootstrap4 light style
 *
 * @param {string} data The data to log as a danger info
 * @param {boolean} background Edit background color instead of text color
 */
logger.lightBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgWhite.black);
    this.styleLog.apply(this, args);
};

/**
 * @function log Simple function that serves as a wrap for the console.log method and allows to persist that log into the log file
 *
 * @param {string} data The data to log
 */
logger.log = function() {
    console.log.apply(console, arguments);
    logger.appendToLogFile(this.treatArguments(arguments));
}

/**
 * @function newLine Simple function that outputs a new line
 *
 */
logger.newLine = function() {
    console.log("");
    logger.appendToLogFile("");
}

/**
 * @function primary Adds some styling like primary in Twitter-Bootstrap4 when logging some message to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.primary = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(0, 123, 255));
    this.styleLog.apply(this, args);
};

/**
 * @function primary Adds some styling like primary in Twitter-Bootstrap4 when logging some message to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.primaryBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(0, 123, 255));
    this.styleLog.apply(this, args);
};

/**
 * @function secondary Adds some styling when logging some information to the console with the bootstrap4 secondary style
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.secondary = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(108, 117, 125));
    this.styleLog.apply(this, args);
};

/**
 * @function secondary Adds some styling when logging some information to the console with the bootstrap4 secondary style
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.secondaryBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(108, 117, 125));
    this.styleLog.apply(this, args);
};

/**
 * @function success Adds some styling when logging some success information to the console using bootstrap 4 theme
 *
 * @param {string} info The info to log
 * @param {boolean} background Edit background color instead of text color *
 */
logger.success = function(info, background = false) {
    var args = Object.values(arguments);
    args.push(chalk.rgb(74, 226, 14));
    this.styleLog.apply(this, args);
};

/**
 * @function success Adds some styling when logging some success information to the console using bootstrap 4 theme
 *
 * @param {string} info The info to log
 * @param {boolean} background Edit background color instead of text color *
 */
logger.successBg = function(info, background = false) {
    var args = Object.values(arguments);
    args.push(chalk.bgGreen);
    this.styleLog.apply(this, args);
};

/**
 * @function warning Adds some styling when logging some warning to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 */
logger.warning = function() {
    var args = Object.values(arguments);
    args.push(chalk.rgb(255, 193, 7));
    this.styleLog.apply(this, args);
};

/**
 * @function warning Adds some styling when logging some warning to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 */
logger.warningBg = function() {
    var args = Object.values(arguments);
    args.push(chalk.bgRgb(255, 193, 7).black);
    this.styleLog.apply(this, args);
};

/**
 * @function white Adds some styling when logging some information to the console with the bootstrap4 white style
 *
 * @param {string} data The data to log as a warning
 *
 */
logger.white = function(data) {
    var args = Object.values(arguments);
    args.push(chalk.whiteBright);
    this.styleLog.apply(this, args);
};


/**
 * @function white Adds some styling when logging some information to the console with the bootstrap4 white style
 *
 * @param {string} data The data to log as a warning
 *
 */
logger.whiteBg = function(data) {
    var args = Object.values(arguments);
    args.push(chalk.bgWhiteBright.black);
    this.styleLog.apply(this, args);
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
 * @function styleLog Simple function that serves as a wrap for the console.log method with colorful output on the console and allows to persist that log into the log file
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
