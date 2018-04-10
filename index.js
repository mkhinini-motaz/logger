/**
 * @author Moatez Mkhinini  <mkhinini.motaz@gmail.com>
 *
 */

var chalk = require("chalk");
var fs = require("fs");

var logger = {};
var logFilePath = './logs/log.txt';
logger.isPersistingLogs = true;

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
logger.danger = function(data, background = false) {
    // yellow
    console.log(background ? chalk.bgRed(data) : chalk.rgb(220, 53, 69)(data));
    logger.appendToLogFile("WARNING [ " + (new Date()).toString() + " ] : " + data);
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
 * @function info Adds some styling like info in Twitter-Bootstrap4 when logging some message to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 *
 */
logger.info = function(data, background = false) {
    // cyan
    console.log(background ? chalk.bgCyan(data) : chalk.rgb(23, 162, 184)(data));
    logger.appendToLogFile("[ " + (new Date()).toString() + " ] : " + data);
};

/**
 * @function log Simple function that serves as a wrap for the console.log method and allows to persist that log into the log file
 *
 * @param {string} data The data to log
 */
logger.log = function(data) {
    console.log(data);
    logger.appendToLogFile(data);
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
logger.primary = function(data, background = false) {
    // blue
    console.log(background ? chalk.bgBlue(data) : chalk.rgb(0, 123, 255)(data));
    logger.appendToLogFile("[ " + (new Date()).toString() + " ] : " + data);
};

/**
 * @function success Adds some styling when logging some success information to the console using bootstrap 4 theme
 *
 * @param {string} info The info to log
 * @param {boolean} background Edit background color instead of text color *
 */
logger.success = function(info, background = false) {
    // green
    console.log(background ? chalk.bgGreen(info) : chalk.rgb(74, 226, 14)(info));
    logger.appendToLogFile("[ " + (new Date()).toString() + " ] : " + info);
};

/**
 * @function warning Adds some styling when logging some warning to the console
 *
 * @param {string} data The data to log as a warning
 * @param {boolean} background Edit background color instead of text color
 */
logger.warning = function(data, background = false) {
    // yellow
    console.log(background ? chalk.bgYellow(data) : chalk.rgb(255, 193, 7)(data));
    logger.appendToLogFile("WARNING [ " + (new Date()).toString() + " ] : " + data);
};


module.exports = logger;
