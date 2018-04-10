
## Msk log

**msk-log** is a very simple and small package for all developers that appreciate simple packages, this package simply add some styling to your logs using Twitter/Bootstrap4 colors with the same colors names as methods names for logging.
This package was designed so that it has the minimum code in it and yet insure a functionality that many of you requires when dealing with logs, persisting those logs into a file, and of course if you don't want to you can simple enjoy the colors that this package has to offer.
This package represents a series of functions that were writing using the popular **chalk** package.
If you have any suggestions on how we can improve this package while keeping it as simple as possible, please let us know.

## Install
To install the package, simply run this command at the root of your project :

    npm install msk-log
this will install the **msk-log** package as well as the **chalk** package if you don't have it already.
To see the output of all the methods available, run the following command :

    node test.js node_modules/simple-log/test.js

## Usage
In your script, require the logger with the following line of code :

    var logger = require("msk-log")
Then you use it as you use the console :

    logger.log("Your message");
Behind the scenes, this will execute the **console.log** command and then persists your message in the **./logs/system.log** file.
## Methods
### Configuration methods
Right now, **msk-log** only has one configuration methods that allows you to enable or disable persisting the logs in a file on the hard drive.
#### usage :
Just call this method with an argument that will evaluate to true if you want to activate persisting logs in a file *(default option)* , or pass a value that will evaluate to false to disable persisting logs.
    logger.persistLogs(truthyValue)

### Output methods
The **msk-log** has many output methods where their names are inspired from the Bootstrap4 framework so that you feel familiar with it very quickly, these methods have two modes, if you pass just a massage it will change the text color, if you add true as a second argument, it will change the background color instead. The **logger.log("msg")** doesn't have the second argument, because it is supposed to be a simple log like **console.log**.
 - logger.error(errorObj, [background])
 - logger.danger("message", [background])
 - logger.info("message", [background])
 - logger.log("message")
 - logger.primary("message", [background])
 - logger.success("message", [background])
 - logger.warning("message", [background])

The **logger.error** method takes an error object and persists it in the log file after converting it to a JSON string.
### Persisting to log file without console output
If you want to add some message or data to the log file without showing it on the console, you can use the following method :

    logger.appendToLogFile("message");
**Attention :** If you disable persisting logs with **logger.persistLogs(falsyValue)**, this method won't persist anything.

## Copyright
Feel free to use, modify, publish or sell this package as you like.
**(c) Moatez Mkhinini <mkhinini.motaz@gmail.com>**
