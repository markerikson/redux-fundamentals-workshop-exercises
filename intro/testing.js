function deepFreeze (o) {
    Object.freeze(o);

    var oIsFunction = typeof o === "function";
    var hasOwnProp = Object.prototype.hasOwnProperty;

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (hasOwnProp.call(o, prop)
            && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
};

function logger(logger) {
    const pre = document.createElement("pre");

    // script tag exists prior to the body.
    function addLoggerTag() {
        //const body = document.getElementsByTagName("body")[0];
        //body.appendChild(pre);
        const root = document.getElementById("root");
        root.appendChild(pre);
        console.log("Pre appended");
    }
    if(document.readyState) {
        addLoggerTag();
    }
    else {
        document.addEventListener("DOMContentLoaded", addLoggerTag);
    }


    return function(...msg) {
        //logger(msg);
        const txt = document.createTextNode(msg.join("\n") + "\n");
        pre.appendChild(txt);
    };
}

const TinyTest = {



    run: function(tests) {
        const info = logger(console.log.bind(console));
        const error = logger(console.error.bind(console));


        let failures = 0;
        for (let testName in tests) {
            let testAction = tests[testName];
            try {
                testAction();
                //console.log('Test:', testName, 'OK');
                info('Test:', testName, 'OK');
            } catch (e) {
                failures++;
                //console.error('Test:', testName, 'FAILED', e);
                //console.error(e.stack);
                error('Test:', testName, 'FAILED', e);
                const splitLines = e.stack.split("\n");
                const filteredLines = splitLines.filter(line => !line.includes("babel.min.js") && !line.includes("testing.js"));
                const newStack = filteredLines.join("\n");
                error(newStack);
            }
        }
        setTimeout(function() { // Give document a chance to complete
            if (window.document && document.body) {
                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
            }
        }, 0);
    },

    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },

    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },


};

const fail                = TinyTest.fail,
    assert              = TinyTest.assert,
    assertEquals        = TinyTest.assertEquals,
    eq                  = TinyTest.assertEquals, // alias for assertEquals
    assertStrictEquals  = TinyTest.assertStrictEquals,
    tests               = TinyTest.run;