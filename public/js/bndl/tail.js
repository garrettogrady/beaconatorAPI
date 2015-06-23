/*! Built by Fusionary (fusionary.com) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/widget\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/mouse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/position\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/draggable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/droppable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/resizable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/selectable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/sortable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/accordion\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/autocomplete\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/button\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/datepicker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/dialog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/menu\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/progressbar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/spinner\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/tabs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/tooltip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-blind\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-bounce\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-clip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-drop\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-explode\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-fade\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-fold\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-highlight\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-pulsate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-scale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-shake\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-slide\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/effect-transfer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	__webpack_require__(22);
	
	__webpack_require__(23);
	
	__webpack_require__(24);
	
	__webpack_provided_window_dot_jQuery = _jquery2['default'];
	__webpack_provided_window_dot_$ = _jquery2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//
	
	var arr = [];
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
		version = "2.1.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},
	
		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
		nodeType = context.nodeType;
	
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		if ( !seed && documentIsHTML ) {
	
			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;
	
			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var matched = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}
	
			return matched;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});
	
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	Data.accepts = jQuery.acceptData;
	
	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}
	
			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];
	
			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;
	
				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );
	
				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}
	
			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}
	
			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];
	
			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}
	
			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			if ( key === undefined ) {
				this.cache[ unlock ] = {};
	
			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();
	
	var data_user = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );
	
					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}
	
			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;
	
	
	
	support.focusinBubbles = "onfocusin" in window;
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );
	
					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
	
			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			_default: [ 0, "", "" ]
		};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}
	
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			data_user.set( dest, udataCur );
		}
	}
	
	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];
	
						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			return fragment;
		},
	
		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];
	
					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[ i ], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}
	
			return window.getComputedStyle( elem, null );
		};
	
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}
	
		if ( computed ) {
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );
	
			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";
	
			docElem.removeChild( container );
		}
	
		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {
	
					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {
	
					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );
	
					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );
	
					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );
	
					docElem.removeChild( container );
					div.removeChild( marginDiv );
	
					return ret;
				}
			});
		}
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend({
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
	
				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = window.location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport(function( options ) {
		var callback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;
	
					xhr.open( options.type, options.url, options.async, options.username, options.password );
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
	
					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");
	
					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * Bootstrap v3.2.0 (http://getbootstrap.com)
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	"use strict";
	
	if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (a) {
	  "use strict";function b() {
	    var a = document.createElement("bootstrap"),
	        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
	  }a.fn.emulateTransitionEnd = function (b) {
	    var c = !1,
	        d = this;a(this).one("bsTransitionEnd", function () {
	      c = !0;
	    });var e = function e() {
	      c || a(d).trigger(a.support.transition.end);
	    };return (setTimeout(e, b), this);
	  }, a(function () {
	    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
	        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
	      } });
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var c = a(this),
	          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
	    });
	  }var c = "[data-dismiss=\"alert\"]",
	      d = function d(b) {
	    a(b).on("click", c, this.close);
	  };d.VERSION = "3.2.0", d.prototype.close = function (b) {
	    function c() {
	      f.detach().trigger("closed.bs.alert").remove();
	    }var d = a(this),
	        e = d.attr("data-target");e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));var f = a(e);b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c());
	  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
	    return (a.fn.alert = e, this);
	  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.button"),
	          f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
	    });
	  }var c = function c(b, d) {
	    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	  };c.VERSION = "3.2.0", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
	    var c = "disabled",
	        d = this.$element,
	        e = d.is("input") ? "val" : "html",
	        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () {
	      "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
	    }, this), 0);
	  }, c.prototype.toggle = function () {
	    var a = !0,
	        b = this.$element.closest("[data-toggle=\"buttons\"]");if (b.length) {
	      var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
	    }a && this.$element.toggleClass("active");
	  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
	    return (a.fn.button = d, this);
	  }, a(document).on("click.bs.button.data-api", "[data-toggle^=\"button\"]", function (c) {
	    var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.carousel"),
	          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
	          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
	    });
	  }var c = function c(b, _c) {
	    this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	  };c.VERSION = "3.2.0", c.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0 }, c.prototype.keydown = function (a) {
	    switch (a.which) {case 37:
	        this.prev();break;case 39:
	        this.next();break;default:
	        return;}a.preventDefault();
	  }, c.prototype.cycle = function (b) {
	    return (b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this);
	  }, c.prototype.getItemIndex = function (a) {
	    return (this.$items = a.parent().children(".item"), this.$items.index(a || this.$active));
	  }, c.prototype.to = function (b) {
	    var c = this,
	        d = this.getItemIndex(this.$active = this.$element.find(".item.active"));return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
	      c.to(b);
	    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
	  }, c.prototype.pause = function (b) {
	    return (b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this);
	  }, c.prototype.next = function () {
	    return this.sliding ? void 0 : this.slide("next");
	  }, c.prototype.prev = function () {
	    return this.sliding ? void 0 : this.slide("prev");
	  }, c.prototype.slide = function (b, c) {
	    var d = this.$element.find(".item.active"),
	        e = c || d[b](),
	        f = this.interval,
	        g = "next" == b ? "left" : "right",
	        h = "next" == b ? "first" : "last",
	        i = this;if (!e.length) {
	      if (!this.options.wrap) return;e = this.$element.find(".item")[h]();
	    }if (e.hasClass("active")) return this.sliding = !1;var j = e[0],
	        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: g });if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
	      if ((this.sliding = !0, f && this.pause(), this.$indicators.length)) {
	        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(e)]);l && l.addClass("active");
	      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: g });return (a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function () {
	        e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
	          i.$element.trigger(m);
	        }, 0);
	      }).emulateTransitionEnd(1000 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this);
	    }
	  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
	    return (a.fn.carousel = d, this);
	  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (c) {
	    var d,
	        e = a(this),
	        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
	      var g = a.extend({}, f.data(), e.data()),
	          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
	    }
	  }), a(window).on("load", function () {
	    a("[data-ride=\"carousel\"]").each(function () {
	      var c = a(this);b.call(c, c.data());
	    });
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.collapse"),
	          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);!e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]();
	    });
	  }var c = function c(b, d) {
	    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
	  };c.VERSION = "3.2.0", c.DEFAULTS = { toggle: !0 }, c.prototype.dimension = function () {
	    var a = this.$element.hasClass("width");return a ? "width" : "height";
	  }, c.prototype.show = function () {
	    if (!this.transitioning && !this.$element.hasClass("in")) {
	      var c = a.Event("show.bs.collapse");if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
	        var d = this.$parent && this.$parent.find("> .panel > .in");if (d && d.length) {
	          var e = d.data("bs.collapse");if (e && e.transitioning) return;b.call(d, "hide"), e || d.data("bs.collapse", null);
	        }var f = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;var g = function g() {
	          this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
	        };if (!a.support.transition) return g.call(this);var h = a.camelCase(["scroll", f].join("-"));this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
	      }
	    }
	  }, c.prototype.hide = function () {
	    if (!this.transitioning && this.$element.hasClass("in")) {
	      var b = a.Event("hide.bs.collapse");if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
	        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;var d = function d() {
	          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
	        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
	      }
	    }
	  }, c.prototype.toggle = function () {
	    this[this.$element.hasClass("in") ? "hide" : "show"]();
	  };var d = a.fn.collapse;a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
	    return (a.fn.collapse = d, this);
	  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=\"collapse\"]", function (c) {
	    var d,
	        e = a(this),
	        f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
	        g = a(f),
	        h = g.data("bs.collapse"),
	        i = h ? "toggle" : e.data(),
	        j = e.attr("data-parent"),
	        k = j && a(j);h && h.transitioning || (k && k.find("[data-toggle=\"collapse\"][data-parent=\"" + j + "\"]").not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i);
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
	      var d = c(a(this)),
	          e = { relatedTarget: this };d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
	    }));
	  }function c(b) {
	    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
	  }function d(b) {
	    return this.each(function () {
	      var c = a(this),
	          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
	    });
	  }var e = ".dropdown-backdrop",
	      f = "[data-toggle=\"dropdown\"]",
	      g = function g(b) {
	    a(b).on("click.bs.dropdown", this.toggle);
	  };g.VERSION = "3.2.0", g.prototype.toggle = function (d) {
	    var e = a(this);if (!e.is(".disabled, :disabled")) {
	      var f = c(e),
	          g = f.hasClass("open");if ((b(), !g)) {
	        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a("<div class=\"dropdown-backdrop\"/>").insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if ((f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())) return;e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
	      }return !1;
	    }
	  }, g.prototype.keydown = function (b) {
	    if (/(38|40|27)/.test(b.keyCode)) {
	      var d = a(this);if ((b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled"))) {
	        var e = c(d),
	            g = e.hasClass("open");if (!g || g && 27 == b.keyCode) return (27 == b.which && e.find(f).trigger("focus"), d.trigger("click"));var h = " li:not(.divider):visible a",
	            i = e.find("[role=\"menu\"]" + h + ", [role=\"listbox\"]" + h);if (i.length) {
	          var j = i.index(i.filter(":focus"));38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
	        }
	      }
	    }
	  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
	    return (a.fn.dropdown = h, this);
	  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
	    a.stopPropagation();
	  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ", [role=\"menu\"], [role=\"listbox\"]", g.prototype.keydown);
	})(jQuery), +(function (a) {
	  "use strict";function b(b, d) {
	    return this.each(function () {
	      var e = a(this),
	          f = e.data("bs.modal"),
	          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
	    });
	  }var c = function c(b, _c2) {
	    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
	      this.$element.trigger("loaded.bs.modal");
	    }, this));
	  };c.VERSION = "3.2.0", c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
	    return this.isShown ? this.hide() : this.show(a);
	  }, c.prototype.show = function (b) {
	    var c = this,
	        d = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", a.proxy(this.hide, this)), this.backdrop(function () {
	      var d = a.support.transition && c.$element.hasClass("fade");c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();var e = a.Event("shown.bs.modal", { relatedTarget: b });d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
	        c.$element.trigger("focus").trigger(e);
	      }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e);
	    }));
	  }, c.prototype.hide = function (b) {
	    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
	  }, c.prototype.enforceFocus = function () {
	    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
	      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
	    }, this));
	  }, c.prototype.escape = function () {
	    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
	      27 == a.which && this.hide();
	    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
	  }, c.prototype.hideModal = function () {
	    var a = this;this.$element.hide(), this.backdrop(function () {
	      a.$element.trigger("hidden.bs.modal");
	    });
	  }, c.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	  }, c.prototype.backdrop = function (b) {
	    var c = this,
	        d = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
	      var e = a.support.transition && d;if ((this.$backdrop = a("<div class=\"modal-backdrop " + d + "\" />").appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
	        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
	      }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)) return;e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass("in");var f = function f() {
	        c.removeBackdrop(), b && b();
	      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
	    } else b && b();
	  }, c.prototype.checkScrollbar = function () {
	    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
	  }, c.prototype.setScrollbar = function () {
	    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth);
	  }, c.prototype.resetScrollbar = function () {
	    this.$body.css("padding-right", "");
	  }, c.prototype.measureScrollbar = function () {
	    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return (this.$body[0].removeChild(a), b);
	  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
	    return (a.fn.modal = d, this);
	  }, a(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function (c) {
	    var d = a(this),
	        e = d.attr("href"),
	        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
	        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
	      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
	        d.is(":visible") && d.trigger("focus");
	      });
	    }), b.call(f, g, this);
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.tooltip"),
	          f = "object" == typeof b && b;(e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
	    });
	  }var c = function c(a, b) {
	    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
	  };c.VERSION = "3.2.0", c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>", trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
	    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
	      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
	        var h = "hover" == g ? "mouseenter" : "focusin",
	            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
	      }
	    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	  }, c.prototype.getDefaults = function () {
	    return c.DEFAULTS;
	  }, c.prototype.getOptions = function (b) {
	    return (b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b);
	  }, c.prototype.getDelegateOptions = function () {
	    var b = {},
	        c = this.getDefaults();return (this._options && a.each(this._options, function (a, d) {
	      c[a] != d && (b[a] = d);
	    }), b);
	  }, c.prototype.enter = function (b) {
	    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
	      "in" == c.hoverState && c.show();
	    }, c.options.delay.show)) : c.show());
	  }, c.prototype.leave = function (b) {
	    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
	      "out" == c.hoverState && c.hide();
	    }, c.options.delay.hide)) : c.hide());
	  }, c.prototype.show = function () {
	    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
	      this.$element.trigger(b);var c = a.contains(document.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !c) return;var d = this,
	          e = this.tip(),
	          f = this.getUID(this.type);this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
	          h = /\s?auto?\s?/i,
	          i = h.test(g);i && (g = g.replace(h, "") || "top"), e.detach().css({ top: 0, left: 0, display: "block" }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);var j = this.getPosition(),
	          k = e[0].offsetWidth,
	          l = e[0].offsetHeight;if (i) {
	        var m = g,
	            n = this.$element.parent(),
	            o = this.getPosition(n);g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g);
	      }var p = this.getCalculatedOffset(g, j, k, l);this.applyPlacement(p, g);var q = function q() {
	        d.$element.trigger("shown.bs." + d.type), d.hoverState = null;
	      };a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q();
	    }
	  }, c.prototype.applyPlacement = function (b, c) {
	    var d = this.tip(),
	        e = d[0].offsetWidth,
	        f = d[0].offsetHeight,
	        g = parseInt(d.css("margin-top"), 10),
	        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
	        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
	      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
	        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
	        m = k.left ? "left" : "top",
	        n = k.left ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(l, d[0][n], m);
	  }, c.prototype.replaceArrow = function (a, b, c) {
	    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
	  }, c.prototype.setContent = function () {
	    var a = this.tip(),
	        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	  }, c.prototype.hide = function () {
	    function b() {
	      "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
	    }var c = this,
	        d = this.tip(),
	        e = a.Event("hide.bs." + this.type);return (this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this));
	  }, c.prototype.fixTitle = function () {
	    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	  }, c.prototype.hasContent = function () {
	    return this.getTitle();
	  }, c.prototype.getPosition = function (b) {
	    b = b || this.$element;var c = b[0],
	        d = "BODY" == c.tagName;return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(), width: d ? a(window).width() : b.outerWidth(), height: d ? a(window).height() : b.outerHeight() }, d ? { top: 0, left: 0 } : b.offset());
	  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
	    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
	  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
	    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
	        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
	      var h = b.top - f - g.scroll,
	          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
	    } else {
	      var j = b.left - f,
	          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
	    }return e;
	  }, c.prototype.getTitle = function () {
	    var a,
	        b = this.$element,
	        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	  }, c.prototype.getUID = function (a) {
	    do a += ~ ~(1000000 * Math.random()); while (document.getElementById(a));return a;
	  }, c.prototype.tip = function () {
	    return this.$tip = this.$tip || a(this.options.template);
	  }, c.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	  }, c.prototype.validate = function () {
	    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
	  }, c.prototype.enable = function () {
	    this.enabled = !0;
	  }, c.prototype.disable = function () {
	    this.enabled = !1;
	  }, c.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  }, c.prototype.toggle = function (b) {
	    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	  }, c.prototype.destroy = function () {
	    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
	  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
	    return (a.fn.tooltip = d, this);
	  };
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.popover"),
	          f = "object" == typeof b && b;(e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
	    });
	  }var c = function c(a, b) {
	    this.init("popover", a, b);
	  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>" }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
	    return c.DEFAULTS;
	  }, c.prototype.setContent = function () {
	    var a = this.tip(),
	        b = this.getTitle(),
	        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	  }, c.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  }, c.prototype.getContent = function () {
	    var a = this.$element,
	        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	  }, c.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find(".arrow");
	  }, c.prototype.tip = function () {
	    return (this.$tip || (this.$tip = a(this.options.template)), this.$tip);
	  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
	    return (a.fn.popover = d, this);
	  };
	})(jQuery), +(function (a) {
	  "use strict";function b(c, d) {
	    var e = a.proxy(this.process, this);this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
	  }function c(c) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.scrollspy"),
	          f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
	    });
	  }b.VERSION = "3.2.0", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  }, b.prototype.refresh = function () {
	    var b = "offset",
	        c = 0;a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();var d = this;this.$body.find(this.selector).map(function () {
	      var d = a(this),
	          e = d.data("target") || d.attr("href"),
	          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      d.offsets.push(this[0]), d.targets.push(this[1]);
	    });
	  }, b.prototype.process = function () {
	    var a,
	        b = this.$scrollElement.scrollTop() + this.options.offset,
	        c = this.getScrollHeight(),
	        d = this.options.offset + c - this.$scrollElement.height(),
	        e = this.offsets,
	        f = this.targets,
	        g = this.activeTarget;if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
	  }, b.prototype.activate = function (b) {
	    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");var c = this.selector + "[data-target=\"" + b + "\"]," + this.selector + "[href=\"" + b + "\"]",
	        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
	    return (a.fn.scrollspy = d, this);
	  }, a(window).on("load.bs.scrollspy.data-api", function () {
	    a("[data-spy=\"scroll\"]").each(function () {
	      var b = a(this);c.call(b, b.data());
	    });
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
	    });
	  }var c = function c(b) {
	    this.element = a(b);
	  };c.VERSION = "3.2.0", c.prototype.show = function () {
	    var b = this.element,
	        c = b.closest("ul:not(.dropdown-menu)"),
	        d = b.data("target");if ((d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active"))) {
	      var e = c.find(".active:last a")[0],
	          f = a.Event("show.bs.tab", { relatedTarget: e });if ((b.trigger(f), !f.isDefaultPrevented())) {
	        var g = a(d);this.activate(b.closest("li"), c), this.activate(g, g.parent(), function () {
	          b.trigger({ type: "shown.bs.tab", relatedTarget: e });
	        });
	      }
	    }
	  }, c.prototype.activate = function (b, c, d) {
	    function e() {
	      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
	    }var f = c.find("> .active"),
	        g = d && a.support.transition && f.hasClass("fade");g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in");
	  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
	    return (a.fn.tab = d, this);
	  }, a(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"], [data-toggle=\"pill\"]", function (c) {
	    c.preventDefault(), b.call(a(this), "show");
	  });
	})(jQuery), +(function (a) {
	  "use strict";function b(b) {
	    return this.each(function () {
	      var d = a(this),
	          e = d.data("bs.affix"),
	          f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
	    });
	  }var c = function c(b, d) {
	    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
	  };c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
	        b = this.$element.offset();return this.pinnedOffset = b.top - a;
	  }, c.prototype.checkPositionWithEventLoop = function () {
	    setTimeout(a.proxy(this.checkPosition, this), 1);
	  }, c.prototype.checkPosition = function () {
	    if (this.$element.is(":visible")) {
	      var b = a(document).height(),
	          d = this.$target.scrollTop(),
	          e = this.$element.offset(),
	          f = this.options.offset,
	          g = f.top,
	          h = f.bottom;"object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;if (this.affixed !== i) {
	        null != this.unpin && this.$element.css("top", "");var j = "affix" + (i ? "-" + i : ""),
	            k = a.Event(j + ".bs.affix");this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({ top: b - this.$element.height() - h }));
	      }
	    }
	  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
	    return (a.fn.affix = d, this);
	  }, a(window).on("load", function () {
	    a("[data-spy=\"affix\"]").each(function () {
	      var c = a(this),
	          d = c.data();d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
	    });
	  });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* =========================================================
	 * bootstrap-datepicker.js 
	 * http://www.eyecon.ro/bootstrap-datepicker
	 * =========================================================
	 * Copyright 2012 Stefan Petre
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */
	
	'use strict';
	
	!(function ($) {
	
		// Picker object
	
		var Datepicker = function Datepicker(element, options) {
			this.element = $(element);
			this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || 'mm/dd/yyyy');
			this.picker = $(DPGlobal.template).appendTo('body').on({
				click: $.proxy(this.click, this) //,
				//mousedown: $.proxy(this.mousedown, this)
			});
			this.isInput = this.element.is('input');
			this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
	
			if (this.isInput) {
				this.element.on({
					focus: $.proxy(this.show, this),
					//blur: $.proxy(this.hide, this),
					keyup: $.proxy(this.update, this)
				});
			} else {
				if (this.component) {
					this.component.on('click', $.proxy(this.show, this));
				} else {
					this.element.on('click', $.proxy(this.show, this));
				}
			}
	
			this.minViewMode = options.minViewMode || this.element.data('date-minviewmode') || 0;
			if (typeof this.minViewMode === 'string') {
				switch (this.minViewMode) {
					case 'months':
						this.minViewMode = 1;
						break;
					case 'years':
						this.minViewMode = 2;
						break;
					default:
						this.minViewMode = 0;
						break;
				}
			}
			this.viewMode = options.viewMode || this.element.data('date-viewmode') || 0;
			if (typeof this.viewMode === 'string') {
				switch (this.viewMode) {
					case 'months':
						this.viewMode = 1;
						break;
					case 'years':
						this.viewMode = 2;
						break;
					default:
						this.viewMode = 0;
						break;
				}
			}
			this.startViewMode = this.viewMode;
			this.weekStart = options.weekStart || this.element.data('date-weekstart') || 0;
			this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
			this.onRender = options.onRender;
			this.fillDow();
			this.fillMonths();
			this.update();
			this.showMode();
		};
	
		Datepicker.prototype = {
			constructor: Datepicker,
	
			show: function show(e) {
				this.picker.show();
				this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
				this.place();
				$(window).on('resize', $.proxy(this.place, this));
				if (e) {
					e.stopPropagation();
					e.preventDefault();
				}
				if (!this.isInput) {}
				var that = this;
				$(document).on('mousedown', function (ev) {
					if ($(ev.target).closest('.datepicker').length == 0) {
						that.hide();
					}
				});
				this.element.trigger({
					type: 'show',
					date: this.date
				});
			},
	
			hide: function hide() {
				this.picker.hide();
				$(window).off('resize', this.place);
				this.viewMode = this.startViewMode;
				this.showMode();
				if (!this.isInput) {
					$(document).off('mousedown', this.hide);
				}
				//this.set();
				this.element.trigger({
					type: 'hide',
					date: this.date
				});
			},
	
			set: function set() {
				var formated = DPGlobal.formatDate(this.date, this.format);
				if (!this.isInput) {
					if (this.component) {
						this.element.find('input').prop('value', formated);
					}
					this.element.data('date', formated);
				} else {
					this.element.prop('value', formated);
				}
			},
	
			setValue: function setValue(newDate) {
				if (typeof newDate === 'string') {
					this.date = DPGlobal.parseDate(newDate, this.format);
				} else {
					this.date = new Date(newDate);
				}
				this.set();
				this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
				this.fill();
			},
	
			place: function place() {
				var offset = this.component ? this.component.offset() : this.element.offset();
				this.picker.css({
					top: offset.top + this.height,
					left: offset.left
				});
			},
	
			update: function update(newDate) {
				this.date = DPGlobal.parseDate(typeof newDate === 'string' ? newDate : this.isInput ? this.element.prop('value') : this.element.data('date'), this.format);
				this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
				this.fill();
			},
	
			fillDow: function fillDow() {
				var dowCnt = this.weekStart;
				var html = '<tr>';
				while (dowCnt < this.weekStart + 7) {
					html += '<th class="dow">' + DPGlobal.dates.daysMin[dowCnt++ % 7] + '</th>';
				}
				html += '</tr>';
				this.picker.find('.datepicker-days thead').append(html);
			},
	
			fillMonths: function fillMonths() {
				var html = '';
				var i = 0;
				while (i < 12) {
					html += '<span class="month">' + DPGlobal.dates.monthsShort[i++] + '</span>';
				}
				this.picker.find('.datepicker-months td').append(html);
			},
	
			fill: function fill() {
				var d = new Date(this.viewDate),
				    year = d.getFullYear(),
				    month = d.getMonth(),
				    currentDate = this.date.valueOf();
				this.picker.find('.datepicker-days th:eq(1)').text(DPGlobal.dates.months[month] + ' ' + year);
				var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0),
				    day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
				prevMonth.setDate(day);
				prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7) % 7);
				var nextMonth = new Date(prevMonth);
				nextMonth.setDate(nextMonth.getDate() + 42);
				nextMonth = nextMonth.valueOf();
				var html = [];
				var clsName, prevY, prevM;
				while (prevMonth.valueOf() < nextMonth) {
					if (prevMonth.getDay() === this.weekStart) {
						html.push('<tr>');
					}
					clsName = this.onRender(prevMonth);
					prevY = prevMonth.getFullYear();
					prevM = prevMonth.getMonth();
					if (prevM < month && prevY === year || prevY < year) {
						clsName += ' old';
					} else if (prevM > month && prevY === year || prevY > year) {
						clsName += ' new';
					}
					if (prevMonth.valueOf() === currentDate) {
						clsName += ' active';
					}
					html.push('<td class="day ' + clsName + '">' + prevMonth.getDate() + '</td>');
					if (prevMonth.getDay() === this.weekEnd) {
						html.push('</tr>');
					}
					prevMonth.setDate(prevMonth.getDate() + 1);
				}
				this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
				var currentYear = this.date.getFullYear();
	
				var months = this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
				if (currentYear === year) {
					months.eq(this.date.getMonth()).addClass('active');
				}
	
				html = '';
				year = parseInt(year / 10, 10) * 10;
				var yearCont = this.picker.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
				year -= 1;
				for (var i = -1; i < 11; i++) {
					html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + '">' + year + '</span>';
					year += 1;
				}
				yearCont.html(html);
			},
	
			click: function click(e) {
				e.stopPropagation();
				e.preventDefault();
				var target = $(e.target).closest('span, td, th');
				if (target.length === 1) {
					switch (target[0].nodeName.toLowerCase()) {
						case 'th':
							switch (target[0].className) {
								case 'switch':
									this.showMode(1);
									break;
								case 'prev':
								case 'next':
									this.viewDate['set' + DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate['get' + DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1));
									this.fill();
									this.set();
									break;
							}
							break;
						case 'span':
							if (target.is('.month')) {
								var month = target.parent().find('span').index(target);
								this.viewDate.setMonth(month);
							} else {
								var year = parseInt(target.text(), 10) || 0;
								this.viewDate.setFullYear(year);
							}
							if (this.viewMode !== 0) {
								this.date = new Date(this.viewDate);
								this.element.trigger({
									type: 'changeDate',
									date: this.date,
									viewMode: DPGlobal.modes[this.viewMode].clsName
								});
							}
							this.showMode(-1);
							this.fill();
							this.set();
							break;
						case 'td':
							if (target.is('.day') && !target.is('.disabled')) {
								var day = parseInt(target.text(), 10) || 1;
								var month = this.viewDate.getMonth();
								if (target.is('.old')) {
									month -= 1;
								} else if (target.is('.new')) {
									month += 1;
								}
								var year = this.viewDate.getFullYear();
								this.date = new Date(year, month, day, 0, 0, 0, 0);
								this.viewDate = new Date(year, month, Math.min(28, day), 0, 0, 0, 0);
								this.fill();
								this.set();
								this.element.trigger({
									type: 'changeDate',
									date: this.date,
									viewMode: DPGlobal.modes[this.viewMode].clsName
								});
							}
							break;
					}
				}
			},
	
			mousedown: function mousedown(e) {
				e.stopPropagation();
				e.preventDefault();
			},
	
			showMode: function showMode(dir) {
				if (dir) {
					this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
				}
				this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
			}
		};
	
		$.fn.datepicker = function (option, val) {
			return this.each(function () {
				var $this = $(this),
				    data = $this.data('datepicker'),
				    options = typeof option === 'object' && option;
				if (!data) {
					$this.data('datepicker', data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults, options)));
				}
				if (typeof option === 'string') data[option](val);
			});
		};
	
		$.fn.datepicker.defaults = {
			onRender: function onRender(date) {
				return '';
			}
		};
		$.fn.datepicker.Constructor = Datepicker;
	
		var DPGlobal = {
			modes: [{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			}, {
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			}, {
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			}],
			dates: {
				days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
				months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			isLeapYear: function isLeapYear(year) {
				return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
			},
			getDaysInMonth: function getDaysInMonth(year, month) {
				return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
			},
			parseFormat: function parseFormat(format) {
				var separator = format.match(/[.\/\-\s].*?/),
				    parts = format.split(/\W+/);
				if (!separator || !parts || parts.length === 0) {
					throw new Error('Invalid date format.');
				}
				return { separator: separator, parts: parts };
			},
			parseDate: function parseDate(date, format) {
				var parts = date.split(format.separator),
				    date = new Date(),
				    val;
				date.setHours(0);
				date.setMinutes(0);
				date.setSeconds(0);
				date.setMilliseconds(0);
				if (parts.length === format.parts.length) {
					var year = date.getFullYear(),
					    day = date.getDate(),
					    month = date.getMonth();
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						val = parseInt(parts[i], 10) || 1;
						switch (format.parts[i]) {
							case 'dd':
							case 'd':
								day = val;
								date.setDate(val);
								break;
							case 'mm':
							case 'm':
								month = val - 1;
								date.setMonth(val - 1);
								break;
							case 'yy':
								year = 2000 + val;
								date.setFullYear(2000 + val);
								break;
							case 'yyyy':
								year = val;
								date.setFullYear(val);
								break;
						}
					}
					date = new Date(year, month, day, 0, 0, 0);
				}
				return date;
			},
			formatDate: function formatDate(date, format) {
				var val = {
					d: date.getDate(),
					m: date.getMonth() + 1,
					yy: date.getFullYear().toString().substring(2),
					yyyy: date.getFullYear()
				};
				val.dd = (val.d < 10 ? '0' : '') + val.d;
				val.mm = (val.m < 10 ? '0' : '') + val.m;
				var date = [];
				for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
					date.push(val[format.parts[i]]);
				}
				return date.join(format.separator);
			},
			headTemplate: '<thead>' + '<tr>' + '<th class="prev">&lsaquo;</th>' + '<th colspan="5" class="switch"></th>' + '<th class="next">&rsaquo;</th>' + '</tr>' + '</thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
		};
		DPGlobal.template = '<div class="datepicker dropdown-menu">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + '</table>' + '</div>' + '</div>';
	})(__webpack_provided_window_dot_jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * jQuery UI Touch Punch 0.2.3
	 *
	 * Copyright 2011–2014, Dave Furfero
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 * Depends:
	 *  jquery.ui.widget.js
	 *  jquery.ui.mouse.js
	 */
	"use strict";
	
	!(function (a) {
	  function f(a, b) {
	    if (!(a.originalEvent.touches.length > 1)) {
	      a.preventDefault();var c = a.originalEvent.changedTouches[0],
	          d = document.createEvent("MouseEvents");d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
	    }
	  }if ((a.support.touch = "ontouchend" in document, a.support.touch)) {
	    var e,
	        b = a.ui.mouse.prototype,
	        c = b._mouseInit,
	        d = b._mouseDestroy;b._touchStart = function (a) {
	      var b = this;!e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
	    }, b._touchMove = function (a) {
	      e && (this._touchMoved = !0, f(a, "mousemove"));
	    }, b._touchEnd = function (a) {
	      e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
	    }, b._mouseInit = function () {
	      var b = this;b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b);
	    }, b._mouseDestroy = function () {
	      var b = this;b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b);
	    };
	  }
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	 * DC jQuery Vertical Accordion Menu - jQuery vertical accordion menu plugin
	 * Copyright (c) 2011 Design Chemical
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 *  http://www.opensource.org/licenses/mit-license.php
	 *  http://www.gnu.org/licenses/gpl.html
	 *
	 */
	
	'use strict';
	
	(function ($) {
	
	  $.fn.dcAccordion = function (options) {
	
	    //set default options
	    var defaults = {
	      classParent: 'dcjq-parent',
	      classActive: 'active',
	      classArrow: 'dcjq-icon',
	      classCount: 'dcjq-count',
	      classExpand: 'dcjq-current-parent',
	      eventType: 'click',
	      hoverDelay: 300,
	      menuClose: true,
	      autoClose: true,
	      autoExpand: false,
	      speed: 'slow',
	      saveState: true,
	      disableLink: true,
	      showCount: false };
	
	    //call in the default otions
	    options = $.extend(defaults, options);
	
	    this.each(function (options) {
	
	      var obj = this;
	      setUpAccordion();
	      //      if(defaults.saveState == true){
	      //        checkCookie(defaults.cookie, obj);
	      //      }
	      if (defaults.autoExpand === true) {
	        $('li.' + defaults.classExpand + ' > a').addClass(defaults.classActive);
	      }
	      resetAccordion();
	
	      if (defaults.eventType === 'hover') {
	
	        var config = {
	          sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
	          interval: defaults.hoverDelay, // number = milliseconds for onMouseOver polling interval
	          over: linkOver, // function = onMouseOver callback (REQUIRED)
	          timeout: defaults.hoverDelay, // number = milliseconds delay before onMouseOut
	          out: linkOut // function = onMouseOut callback (REQUIRED)
	        };
	
	        $('li a', obj).hoverIntent(config);
	        var configMenu = {
	          sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
	          interval: 1000, // number = milliseconds for onMouseOver polling interval
	          over: menuOver, // function = onMouseOver callback (REQUIRED)
	          timeout: 1000, // number = milliseconds delay before onMouseOut
	          out: menuOut // function = onMouseOut callback (REQUIRED)
	        };
	
	        $(obj).hoverIntent(configMenu);
	
	        // Disable parent links
	        if (defaults.disableLink == true) {
	
	          $('li a', obj).click(function (e) {
	            if ($(this).siblings('ul').length > 0) {
	              e.preventDefault();
	            }
	          });
	        }
	      } else {
	
	        $('li a', obj).click(function (e) {
	
	          var $activeLi = $(this).parent('li');
	          var $parentsLi = $activeLi.parents('li');
	          var $parentsUl = $activeLi.parents('ul');
	
	          // Prevent browsing to link if has child links
	          if (defaults.disableLink) {
	            if ($(this).siblings('ul').length > 0) {
	              e.preventDefault();
	            }
	          }
	
	          // Auto close sibling menus
	          if (defaults.autoClose) {
	            autoCloseAccordion($parentsLi, $parentsUl);
	          }
	
	          if ($('> ul', $activeLi).is(':visible')) {
	            $('ul', $activeLi).slideUp(defaults.speed);
	            $('a', $activeLi).removeClass(defaults.classActive);
	          } else {
	            $(this).siblings('ul').slideToggle(defaults.speed);
	            $('> a', $activeLi).addClass(defaults.classActive);
	          }
	
	          //          // Write cookie if save state is on
	          //          if(defaults.saveState == true){
	          //            createCookie(defaults.cookie, obj);
	          //          }
	        });
	      }
	
	      // Set up accordion
	      function setUpAccordion() {
	
	        var $arrow = '<span class="' + defaults.classArrow + '"></span>';
	        var classParentLi = defaults.classParent + '-li';
	        $('> ul', obj).show();
	        $('li', obj).each(function () {
	          if ($('> ul', this).length > 0) {
	            $(this).addClass(classParentLi);
	            $('> a', this).addClass(defaults.classParent).append($arrow);
	          }
	        });
	        $('> ul', obj).hide();
	        if (defaults.showCount == true) {
	          $('li.' + classParentLi, obj).each(function () {
	            if (defaults.disableLink == true) {
	              var getCount = parseInt($('ul a:not(.' + defaults.classParent + ')', this).length);
	            } else {
	              var getCount = parseInt($('ul a', this).length);
	            }
	            $('> a', this).append(' <span class="' + defaults.classCount + '">' + getCount + '</span>');
	          });
	        }
	      }
	
	      function linkOver() {
	
	        $activeLi = $(this).parent('li');
	        $parentsLi = $activeLi.parents('li');
	        $parentsUl = $activeLi.parents('ul');
	
	        // Auto close sibling menus
	        if (defaults.autoClose == true) {
	          autoCloseAccordion($parentsLi, $parentsUl);
	        }
	
	        if ($('> ul', $activeLi).is(':visible')) {
	          $('ul', $activeLi).slideUp(defaults.speed);
	          $('a', $activeLi).removeClass(defaults.classActive);
	        } else {
	          $(this).siblings('ul').slideToggle(defaults.speed);
	          $('> a', $activeLi).addClass(defaults.classActive);
	        }
	
	        // Write cookie if save state is on
	        if (defaults.saveState) {
	          createCookie(defaults.cookie, obj);
	        }
	      }
	
	      function linkOut() {}
	
	      function menuOver() {}
	
	      function menuOut() {
	
	        if (defaults.menuClose == true) {
	          $('ul', obj).slideUp(defaults.speed);
	          // Reset active links
	          $('a', obj).removeClass(defaults.classActive);
	          createCookie(defaults.cookie, obj);
	        }
	      }
	
	      // Auto-Close Open Menu Items
	      function autoCloseAccordion($parentsLi, $parentsUl) {
	        $('ul', obj).not($parentsUl).slideUp(defaults.speed);
	        // Reset active links
	        $('a', obj).removeClass(defaults.classActive);
	        $('> a', $parentsLi).addClass(defaults.classActive);
	      }
	      // Reset accordion using active links
	      function resetAccordion() {
	        $('ul', obj).hide();
	        var $allActiveLi = $('a.' + defaults.classActive, obj);
	        $allActiveLi.siblings('ul').show();
	      }
	    });
	
	    // Retrieve cookie value and set active items
	    //    function checkCookie(cookieId, obj){
	    //      var cookieVal = $.cookie(cookieId);
	    //      if(cookieVal != null){
	    //        // create array from cookie string
	    //        var activeArray = cookieVal.split(',');
	    //        $.each(activeArray, function(index,value){
	    //          var $cookieLi = $('li:eq('+value+')',obj);
	    //          $('> a',$cookieLi).addClass(defaults.classActive);
	    //          var $parentsLi = $cookieLi.parents('li');
	    //          $('> a',$parentsLi).addClass(defaults.classActive);
	    //        });
	    //      }
	    //    }
	
	    // Write cookie
	    //    function createCookie(cookieId, obj){
	    //      var activeIndex = [];
	    //      // Create array of active items index value
	    //      $('li a.'+defaults.classActive,obj).each(function(i){
	    //        var $arrayItem = $(this).parent('li');
	    //        var itemIndex = $('li',obj).index($arrayItem);
	    //          activeIndex.push(itemIndex);
	    //        });
	    //      // Store in cookie
	    //      $.cookie(cookieId, activeIndex, { path: '/' });
	    //    }
	  };
	})(jQuery);
	
	//      cookie  : 'dcjq-accordion'
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
	 * Dual licensed under MIT and GPL.
	 * @author Ariel Flesler
	 * @version 1.4.6
	 */
	'use strict';
	
	;(function ($) {
	  var h = $.scrollTo = function (a, b, c) {
	    $(window).scrollTo(a, b, c);
	  };h.defaults = { axis: 'xy', duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit: true };h.window = function (a) {
	    return $(window)._scrollable();
	  };$.fn._scrollable = function () {
	    return this.map(function () {
	      var a = this,
	          isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;if (!isWin) return a;var b = (a.contentWindow || a).document || a.ownerDocument || a;return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement;
	    });
	  };$.fn.scrollTo = function (e, f, g) {
	    if (typeof f == 'object') {
	      g = f;f = 0;
	    }if (typeof g == 'function') g = { onAfter: g };if (e == 'max') e = 9000000000;g = $.extend({}, h.defaults, g);f = f || g.duration;g.queue = g.queue && g.axis.length > 1;if (g.queue) f /= 2;g.offset = both(g.offset);g.over = both(g.over);return this._scrollable().each(function () {
	      if (e == null) return;var d = this,
	          $elem = $(d),
	          targ = e,
	          toff,
	          attr = {},
	          win = $elem.is('html,body');switch (typeof targ) {case 'number':case 'string':
	          if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
	            targ = both(targ);break;
	          }targ = $(targ, this);if (!targ.length) return;case 'object':
	          if (targ.is || targ.style) toff = (targ = $(targ)).offset();}$.each(g.axis.split(''), function (i, a) {
	        var b = a == 'x' ? 'Left' : 'Top',
	            pos = b.toLowerCase(),
	            key = 'scroll' + b,
	            old = d[key],
	            max = h.max(d, a);if (toff) {
	          attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);if (g.margin) {
	            attr[key] -= parseInt(targ.css('margin' + b)) || 0;attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0;
	          }attr[key] += g.offset[pos] || 0;if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos];
	        } else {
	          var c = targ[pos];attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c;
	        }if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);if (!i && g.queue) {
	          if (old != attr[key]) animate(g.onAfterFirst);delete attr[key];
	        }
	      });animate(g.onAfter);function animate(a) {
	        $elem.animate(attr, f, g.easing, a && function () {
	          a.call(this, targ, g);
	        });
	      }
	    }).end();
	  };h.max = function (a, b) {
	    var c = b == 'x' ? 'Width' : 'Height',
	        scroll = 'scroll' + c;if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();var d = 'client' + c,
	        html = a.ownerDocument.documentElement,
	        body = a.ownerDocument.body;return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
	  };function both(a) {
	    return typeof a == 'object' ? a : { top: a, left: a };
	  }
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, $) {/** Notify.js - v0.3.1 - 2014/02/06
	 * http://notifyjs.com/
	 * Copyright (c) 2014 Jaime Pillora - MIT
	 */
	"use strict";
	
	(function (t, i, n, e) {
	  "use strict";var o,
	      r,
	      s,
	      a,
	      l,
	      h,
	      c,
	      p,
	      u,
	      d,
	      f,
	      A,
	      m,
	      w,
	      g,
	      y,
	      b,
	      v,
	      x,
	      C,
	      S,
	      E,
	      M,
	      k,
	      H,
	      D,
	      F,
	      T = [].indexOf || function (t) {
	    for (var i = 0, n = this.length; n > i; i++) if (i in this && this[i] === t) return i;return -1;
	  };S = "notify", C = S + "js", s = S + "!blank", M = { t: "top", m: "middle", b: "bottom", l: "left", c: "center", r: "right" }, m = ["l", "c", "r"], F = ["t", "m", "b"], b = ["t", "b", "l", "r"], v = { t: "b", m: null, b: "t", l: "r", c: null, r: "l" }, x = function (t) {
	    var i;return (i = [], n.each(t.split(/\W+/), function (t, n) {
	      var o;return (o = n.toLowerCase().charAt(0), M[o] ? i.push(o) : e);
	    }), i);
	  }, D = {}, a = { name: "core", html: "<div class=\"" + C + "-wrapper\">\n  <div class=\"" + C + "-arrow\"></div>\n  <div class=\"" + C + "-container\"></div>\n</div>", css: "." + C + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + C + "-corner ." + C + "-wrapper,\n." + C + "-corner ." + C + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + C + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + C + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n  cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n  position: relative;\n}\n\n." + C + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}" }, H = { "border-radius": ["-webkit-", "-moz-"] }, f = function (t) {
	    return D[t];
	  }, r = function (i, e) {
	    var o, r, s, a;if (!i) throw "Missing Style name";if (!e) throw "Missing Style definition";if (!e.html) throw "Missing Style HTML";return ((null != (a = D[i]) ? a.cssElem : void 0) && (t.console && console.warn("" + S + ": overwriting style '" + i + "'"), D[i].cssElem.remove()), e.name = i, D[i] = e, o = "", e.classes && n.each(e.classes, function (t, i) {
	      return (o += "." + C + "-" + e.name + "-" + t + " {\n", n.each(i, function (t, i) {
	        return (H[t] && n.each(H[t], function (n, e) {
	          return o += "  " + e + t + ": " + i + ";\n";
	        }), o += "  " + t + ": " + i + ";\n");
	      }), o += "}\n");
	    }), e.css && (o += "/* styles for " + e.name + " */\n" + e.css), o && (e.cssElem = y(o), e.cssElem.attr("id", "notify-" + e.name)), s = {}, r = n(e.html), u("html", r, s), u("text", r, s), e.fields = s);
	  }, y = function (t) {
	    var i;i = l("style"), i.attr("type", "text/css"), n("head").append(i);try {
	      i.html(t);
	    } catch (e) {
	      i[0].styleSheet.cssText = t;
	    }return i;
	  }, u = function (t, i, e) {
	    var o;return ("html" !== t && (t = "text"), o = "data-notify-" + t, p(i, "[" + o + "]").each(function () {
	      var i;return (i = n(this).attr(o), i || (i = s), e[i] = t);
	    }));
	  }, p = function (t, i) {
	    return t.is(i) ? t : t.find(i);
	  }, E = { clickToHide: !0, autoHide: !0, autoHideDelay: 5000, arrowShow: !0, arrowSize: 5, breakNewLines: !0, elementPosition: "bottom", globalPosition: "top right", style: "bootstrap", className: "error", showAnimation: "slideDown", showDuration: 400, hideAnimation: "slideUp", hideDuration: 200, gap: 5 }, g = function (t, i) {
	    var e;return (e = function () {}, e.prototype = t, n.extend(!0, new e(), i));
	  }, h = function (t) {
	    return n.extend(E, t);
	  }, l = function (t) {
	    return n("<" + t + "></" + t + ">");
	  }, A = {}, d = function (t) {
	    var i;return (t.is("[type=radio]") && (i = t.parents("form:first").find("[type=radio]").filter(function (i, e) {
	      return n(e).attr("name") === t.attr("name");
	    }), t = i.first()), t);
	  }, w = function (t, i, n) {
	    var o, r;if ("string" == typeof n) n = parseInt(n, 10);else if ("number" != typeof n) return;if (!isNaN(n)) return (o = M[v[i.charAt(0)]], r = i, t[o] !== e && (i = M[o.charAt(0)], n = -n), t[i] === e ? t[i] = n : t[i] += n, null);
	  }, k = function (t, i, n) {
	    if ("l" === t || "t" === t) return 0;if ("c" === t || "m" === t) return n / 2 - i / 2;if ("r" === t || "b" === t) return n - i;throw "Invalid alignment";
	  }, c = function (t) {
	    return (c.e = c.e || l("div"), c.e.text(t).html());
	  }, o = (function () {
	    function t(t, i, e) {
	      "string" == typeof e && (e = { className: e }), this.options = g(E, n.isPlainObject(e) ? e : {}), this.loadHTML(), this.wrapper = n(a.html), this.wrapper.data(C, this), this.arrow = this.wrapper.find("." + C + "-arrow"), this.container = this.wrapper.find("." + C + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = d(t), this.elem.data(C, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(i);
	    }return (t.prototype.loadHTML = function () {
	      var t;return (t = this.getStyle(), this.userContainer = n(t.html), this.userFields = t.fields);
	    }, t.prototype.show = function (t, i) {
	      var n,
	          o,
	          r,
	          s,
	          a,
	          l = this;if ((o = function () {
	        return (t || l.elem || l.destroy(), i ? i() : e);
	      }, a = this.container.parent().parents(":hidden").length > 0, r = this.container.add(this.arrow), n = [], a && t)) s = "show";else if (a && !t) s = "hide";else if (!a && t) s = this.options.showAnimation, n.push(this.options.showDuration);else {
	        if (a || t) return o();s = this.options.hideAnimation, n.push(this.options.hideDuration);
	      }return (n.push(o), r[s].apply(r, n));
	    }, t.prototype.setGlobalPosition = function () {
	      var t, i, e, o, r, s, a, h;return (h = this.getPosition(), a = h[0], s = h[1], r = M[a], t = M[s], o = a + "|" + s, i = A[o], i || (i = A[o] = l("div"), e = {}, e[r] = 0, "middle" === t ? e.top = "45%" : "center" === t ? e.left = "45%" : e[t] = 0, i.css(e).addClass("" + C + "-corner"), n("body").append(i)), i.prepend(this.wrapper));
	    }, t.prototype.setElementPosition = function () {
	      var t, i, o, r, s, a, l, h, c, p, u, d, f, A, g, y, x, C, S, E, H, D, z, Q, B, R, N, P, U;for (z = this.getPosition(), E = z[0], C = z[1], S = z[2], u = this.elem.position(), h = this.elem.outerHeight(), d = this.elem.outerWidth(), c = this.elem.innerHeight(), p = this.elem.innerWidth(), Q = this.wrapper.position(), s = this.container.height(), a = this.container.width(), A = M[E], y = v[E], x = M[y], l = {}, l[x] = "b" === E ? h : "r" === E ? d : 0, w(l, "top", u.top - Q.top), w(l, "left", u.left - Q.left), U = ["top", "left"], B = 0, N = U.length; N > B; B++) H = U[B], g = parseInt(this.elem.css("margin-" + H), 10), g && w(l, H, g);if ((f = Math.max(0, this.options.gap - (this.options.arrowShow ? o : 0)), w(l, x, f), this.options.arrowShow)) {
	        for (o = this.options.arrowSize, i = n.extend({}, l), t = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white", R = 0, P = b.length; P > R; R++) H = b[R], D = M[H], H !== y && (r = D === A ? t : "transparent", i["border-" + D] = "" + o + "px solid " + r);w(l, M[y], o), T.call(b, C) >= 0 && w(i, M[C], 2 * o);
	      } else this.arrow.hide();return (T.call(F, E) >= 0 ? (w(l, "left", k(C, a, d)), i && w(i, "left", k(C, o, p))) : T.call(m, E) >= 0 && (w(l, "top", k(C, s, h)), i && w(i, "top", k(C, o, c))), this.container.is(":visible") && (l.display = "block"), this.container.removeAttr("style").css(l), i ? this.arrow.removeAttr("style").css(i) : e);
	    }, t.prototype.getPosition = function () {
	      var t, i, n, e, o, r, s, a;if ((i = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), t = x(i), 0 === t.length && (t[0] = "b"), n = t[0], 0 > T.call(b, n))) throw "Must be one of [" + b + "]";return ((1 === t.length || (e = t[0], T.call(F, e) >= 0 && (o = t[1], 0 > T.call(m, o))) || (r = t[0], T.call(m, r) >= 0 && (s = t[1], 0 > T.call(F, s)))) && (t[1] = (a = t[0], T.call(m, a) >= 0 ? "m" : "l")), 2 === t.length && (t[2] = t[1]), t);
	    }, t.prototype.getStyle = function (t) {
	      var i;if ((t || (t = this.options.style), t || (t = "default"), i = D[t], !i)) throw "Missing style: " + t;return i;
	    }, t.prototype.updateClasses = function () {
	      var t, i;return (t = ["base"], n.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), i = this.getStyle(), t = n.map(t, function (t) {
	        return "" + C + "-" + i.name + "-" + t;
	      }).join(" "), this.userContainer.attr("class", t));
	    }, t.prototype.run = function (t, i) {
	      var o,
	          r,
	          a,
	          l,
	          h,
	          u = this;if ((n.isPlainObject(i) ? n.extend(this.options, i) : "string" === n.type(i) && (this.options.className = i), this.container && !t)) return (this.show(!1), e);if (this.container || t) {
	        r = {}, n.isPlainObject(t) ? r = t : r[s] = t;for (a in r) o = r[a], l = this.userFields[a], l && ("text" === l && (o = c(o), this.options.breakNewLines && (o = o.replace(/\n/g, "<br/>"))), h = a === s ? "" : "=" + a, p(this.userContainer, "[data-notify-" + l + h + "]").html(o));return (this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide ? (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(function () {
	          return u.show(!1);
	        }, this.options.autoHideDelay)) : e);
	      }
	    }, t.prototype.destroy = function () {
	      return this.wrapper.remove();
	    }, t);
	  })(), n[S] = function (t, i, e) {
	    return (t && t.nodeName || t.jquery ? n(t)[S](i, e) : (e = i, i = t, new o(null, i, e)), t);
	  }, n.fn[S] = function (t, i) {
	    return (n(this).each(function () {
	      var e;return (e = d(n(this)).data(C), e ? e.run(t, i) : new o(n(this), t, i));
	    }), this);
	  }, n.extend(n[S], { defaults: h, addStyle: r, pluginOptions: E, getStyle: f, insertCSS: y }), n(function () {
	    return (y(a.css).attr("id", "core-notify"), n(i).on("click notify-hide", "." + C + "-wrapper", function (t) {
	      var i;return (i = n(this).data(C), i && (i.options.clickToHide || "notify-hide" === t.type) ? i.show(!1) : e);
	    }));
	  });
	})(window, document, jQuery), $.notify.addStyle("bootstrap", { html: "<div>\n<span data-notify-text></span>\n</div>", classes: { base: { "font-weight": "bold", padding: "8px 15px 8px 14px", "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)", "background-color": "#fcf8e3", border: "1px solid #fbeed5", "border-radius": "4px", "white-space": "nowrap", "padding-left": "25px", "background-repeat": "no-repeat", "background-position": "3px 7px" }, error: { color: "#B94A48", "background-color": "#F2DEDE", "border-color": "#EED3D7", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)" }, success: { color: "#468847", "background-color": "#DFF0D8", "border-color": "#D6E9C6", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)" }, info: { color: "#3A87AD", "background-color": "#D9EDF7", "border-color": "#BCE8F1", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)" }, warn: { color: "#C09853", "background-color": "#FCF8E3", "border-color": "#FBEED5", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)" } } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(3)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	 WATable 1.09
	 Copyright (c) 2012 Andreas Petersson(apesv03@gmail.com)
	 http://wootapa-watable.appspot.com/
	
	 Permission is hereby granted, free of charge, to any person obtaining
	 a copy of this software and associated documentation files (the
	 "Software"), to deal in the Software without restriction, including
	 without limitation the rights to use, copy, modify, merge, publish,
	 distribute, sublicense, and/or sell copies of the Software, and to
	 permit persons to whom the Software is furnished to do so, subject to
	 the following conditions:
	
	 The above copyright notice and this permission notice shall be
	 included in all copies or substantial portions of the Software.
	
	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	'use strict';
	
	var _Object$keys = __webpack_require__(12)['default'];
	
	(function ($, undefined) {
	
	    var WATable = function WATable() {
	
	        var priv = {}; //private api
	        var publ = {}; //public api
	
	        priv.options = {};
	        var defaults = {
	            url: '', //webservice url
	            urlData: '', //webservice params
	            urlPost: false, //use POST instead of GET
	            debug: false, //prints debug info to console
	            filter: false, //show filter row
	            columnPicker: false, //show columnpicker
	            checkboxes: false, //show body checkboxes
	            checkAllToggle: true, //show check all toggle
	            actions: '', //holds action links
	            pageSize: 10, //current pagesize
	            pageSizes: [10, 20, 30, 40, 50, 'All'], //available pagesizes
	            hidePagerOnEmpty: false, //removes pager if no rows
	            preFill: false, //prefill table with empty rows
	            sorting: true, // enable column sorting
	            sortEmptyLast: true, //empty values will be shown last
	            types: { //type specific options
	                string: {},
	                number: {},
	                bool: {},
	                date: {}
	            },
	            transition: undefined, //transition type when paging
	            transitionDuration: 0.3 //duration of transition in seconds
	        };
	
	        /* bundled scripts */
	        priv.ext = {};
	        priv.ext.XDate = /* xdate 0.7 */(function (a, b, c, d) {
	            function e() {
	                var b = this instanceof e ? this : new e(),
	                    c = arguments,
	                    d = c.length,
	                    h;typeof c[d - 1] == 'boolean' && (h = c[--d], c = y(c, 0, d));if (d) if (d == 1) if ((d = c[0], d instanceof a || typeof d == 'number')) b[0] = new a(+d);else if (d instanceof e) {
	                    var c = b,
	                        i = new a(+d[0]);if (f(d)) i.toString = G;c[0] = i;
	                } else {
	                    if (typeof d == 'string') {
	                        b[0] = new a(0);a: {
	                            for (var c = d, d = h || !1, i = e.parsers, j = 0, k; j < i.length; j++) if (k = i[j](c, d, b)) {
	                                b = k;break a;
	                            }b[0] = new a(c);
	                        }
	                    }
	                } else b[0] = new a(F.apply(a, c)), h || (b[0] = u(b[0]));else b[0] = new a();typeof h == 'boolean' && g(b, h);return b;
	            }function f(a) {
	                return a[0].toString === G;
	            }function g(b, c, d) {
	                if (c) {
	                    if (!f(b)) d && (b[0] = new a(F(b[0].getFullYear(), b[0].getMonth(), b[0].getDate(), b[0].getHours(), b[0].getMinutes(), b[0].getSeconds(), b[0].getMilliseconds()))), b[0].toString = G;
	                } else f(b) && (b[0] = d ? u(b[0]) : new a(+b[0]));return b;
	            }function h(a, b, c, d, e) {
	                var f = x(s, a[0], e),
	                    a = x(t, a[0], e),
	                    e = b == 1 ? c % 12 : f(1),
	                    g = !1;d.length == 2 && typeof d[1] == 'boolean' && (g = d[1], d = [c]);a(b, d);g && f(1) != e && (a(1, [f(1) - 1]), a(2, [v(f(0), f(1))]));
	            }function i(a, c, d, e) {
	                var d = Number(d),
	                    f = b.floor(d);a['set' + B[c]](a['get' + B[c]]() + f, e || !1);f != d && c < 6 && i(a, c + 1, (d - f) * D[c], e);
	            }function j(a, c, d) {
	                var a = a.clone().setUTCMode(!0, !0),
	                    c = e(c).setUTCMode(!0, !0),
	                    f = 0;if (d == 0 || d == 1) {
	                    for (var g = 6; g >= d; g--) f /= D[g], f += s(c, !1, g) - s(a, !1, g);d == 1 && (f += (c.getFullYear() - a.getFullYear()) * 12);
	                } else d == 2 ? (d = a.toDate().setUTCHours(0, 0, 0, 0), f = c.toDate().setUTCHours(0, 0, 0, 0), f = b.round((f - d) / 86400000) + (c - f - (a - d)) / 86400000) : f = (c - a) / [3600000, 60000, 1000, 1][d - 3];return f;
	            }function k(c) {
	                var d = c(0),
	                    e = c(1),
	                    c = c(2),
	                    e = new a(F(d, e, c)),
	                    f = l(d),
	                    c = f;e < f ? c = l(d - 1) : (d = l(d + 1), e >= d && (c = d));return b.floor(b.round((e - c) / 86400000) / 7) + 1;
	            }function l(b) {
	                b = new a(F(b, 0, 4));b.setUTCDate(b.getUTCDate() - (b.getUTCDay() + 6) % 7);return b;
	            }function m(a, b, c, e) {
	                var f = x(s, a, e),
	                    g = x(t, a, e),
	                    c = l(c === d ? f(0) : c);e || (c = u(c));a.setTime(+c);g(2, [f(2) + (b - 1) * 7]);
	            }function n(a, b, c, d, f) {
	                var g = e.locales,
	                    h = g[e.defaultLocale] || {},
	                    i = x(s, a, f),
	                    c = (typeof c == 'string' ? g[c] : c) || {};return o(a, b, function (a) {
	                    if (d) for (var b = (a == 7 ? 2 : a) - 1; b >= 0; b--) d.push(i(b));return i(a);
	                }, function (a) {
	                    return c[a] || h[a];
	                }, f);
	            }function o(a, b, c, e, f) {
	                for (var g, h, i = ''; g = b.match(E);) {
	                    i += b.substr(0, g.index);if (g[1]) {
	                        h = i;for (var i = a, j = g[1], k = c, l = e, m = f, n = j.length, q = void 0, r = ''; n > 0;) q = p(i, j.substr(0, n), k, l, m), q !== d ? (r += q, j = j.substr(n), n = j.length) : n--;i = h + (r + j);
	                    } else g[3] ? (h = o(a, g[4], c, e, f), parseInt(h.replace(/\D/g, ''), 10) && (i += h)) : i += g[7] || '\'';b = b.substr(g.index + g[0].length);
	                }return i + b;
	            }function p(a, c, d, f, g) {
	                var h = e.formatters[c];if (typeof h == 'string') return o(a, h, d, f, g);else if (typeof h == 'function') return h(a, g || !1, f);switch (c) {case 'fff':
	                        return A(d(6), 3);case 's':
	                        return d(5);case 'ss':
	                        return A(d(5));case 'm':
	                        return d(4);case 'mm':
	                        return A(d(4));case 'h':
	                        return d(3) % 12 || 12;case 'hh':
	                        return A(d(3) % 12 || 12);case 'H':
	                        return d(3);case 'HH':
	                        return A(d(3));case 'd':
	                        return d(2);case 'dd':
	                        return A(d(2));case 'ddd':
	                        return f('dayNamesShort')[d(7)] || '';case 'dddd':
	                        return f('dayNames')[d(7)] || '';case 'M':
	                        return d(1) + 1;case 'MM':
	                        return A(d(1) + 1);case 'MMM':
	                        return f('monthNamesShort')[d(1)] || '';case 'MMMM':
	                        return f('monthNames')[d(1)] || '';case 'yy':
	                        return (d(0) + '').substring(2);case 'yyyy':
	                        return d(0);case 't':
	                        return q(d, f).substr(0, 1).toLowerCase();case 'tt':
	                        return q(d, f).toLowerCase();case 'T':
	                        return q(d, f).substr(0, 1);case 'TT':
	                        return q(d, f);case 'z':case 'zz':case 'zzz':
	                        return (g ? c = 'Z' : (f = a.getTimezoneOffset(), a = f < 0 ? '+' : '-', d = b.floor(b.abs(f) / 60), f = b.abs(f) % 60, g = d, c == 'zz' ? g = A(d) : c == 'zzz' && (g = A(d) + ':' + A(f)), c = a + g), c);case 'w':
	                        return k(d);case 'ww':
	                        return A(k(d));case 'S':
	                        return (c = d(2), c > 10 && c < 20 ? 'th' : ['st', 'nd', 'rd'][c % 10 - 1] || 'th');}
	            }function q(a, b) {
	                return a(3) < 12 ? b('amDesignator') : b('pmDesignator');
	            }function r(a) {
	                return !isNaN(+a[0]);
	            }function s(a, b, c) {
	                return a['get' + (b ? 'UTC' : '') + B[c]]();
	            }function t(a, b, c, d) {
	                a['set' + (b ? 'UTC' : '') + B[c]].apply(a, d);
	            }function u(b) {
	                return new a(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds(), b.getUTCMilliseconds());
	            }function v(b, c) {
	                return 32 - new a(F(b, c, 32)).getUTCDate();
	            }function w(a) {
	                return function () {
	                    return a.apply(d, [this].concat(y(arguments)));
	                };
	            }function x(a) {
	                var b = y(arguments, 1);return function () {
	                    return a.apply(d, b.concat(y(arguments)));
	                };
	            }function y(a, b, e) {
	                return c.prototype.slice.call(a, b || 0, e === d ? a.length : e);
	            }function z(a, b) {
	                for (var c = 0; c < a.length; c++) b(a[c], c);
	            }function A(a, b) {
	                b = b || 2;for (a += ''; a.length < b;) a = '0' + a;return a;
	            }var B = 'FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year'.split(','),
	                C = ['Years', 'Months', 'Days'],
	                D = [12, 31, 24, 60, 60, 1000, 1],
	                E = /(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,
	                F = a.UTC,
	                G = a.prototype.toUTCString,
	                H = e.prototype;H.length = 1;H.splice = c.prototype.splice;H.getUTCMode = w(f);H.setUTCMode = w(g);H.getTimezoneOffset = function () {
	                return f(this) ? 0 : this[0].getTimezoneOffset();
	            };z(B, function (a, b) {
	                H['get' + a] = function () {
	                    return s(this[0], f(this), b);
	                };b != 8 && (H['getUTC' + a] = function () {
	                    return s(this[0], !0, b);
	                });b != 7 && (H['set' + a] = function (a) {
	                    h(this, b, a, arguments, f(this));return this;
	                }, b != 8 && (H['setUTC' + a] = function (a) {
	                    h(this, b, a, arguments, !0);return this;
	                }, H['add' + (C[b] || a)] = function (a, c) {
	                    i(this, b, a, c);return this;
	                }, H['diff' + (C[b] || a)] = function (a) {
	                    return j(this, a, b);
	                }));
	            });H.getWeek = function () {
	                return k(x(s, this, !1));
	            };H.getUTCWeek = function () {
	                return k(x(s, this, !0));
	            };H.setWeek = function (a, b) {
	                m(this, a, b, !1);return this;
	            };H.setUTCWeek = function (a, b) {
	                m(this, a, b, !0);return this;
	            };H.addWeeks = function (a) {
	                return this.addDays(Number(a) * 7);
	            };H.diffWeeks = function (a) {
	                return j(this, a, 2) / 7;
	            };e.parsers = [function (b, c, d) {
	                if (b = b.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)) {
	                    var e = new a(F(b[1], b[3] ? b[3] - 1 : 0, b[5] || 1, b[7] || 0, b[8] || 0, b[10] || 0, b[12] ? Number('0.' + b[12]) * 1000 : 0));b[13] ? b[14] && e.setUTCMinutes(e.getUTCMinutes() + (b[15] == '-' ? 1 : -1) * (Number(b[16]) * 60 + (b[18] ? Number(b[18]) : 0))) : c || (e = u(e));return d.setTime(+e);
	                }
	            }];e.parse = function (a) {
	                return +e('' + a);
	            };H.toString = function (a, b, c) {
	                return a === d || !r(this) ? this[0].toString() : n(this, a, b, c, f(this));
	            };H.toUTCString = H.toGMTString = function (a, b, c) {
	                return a === d || !r(this) ? this[0].toUTCString() : n(this, a, b, c, !0);
	            };H.toISOString = function () {
	                return this.toUTCString('yyyy-MM-dd\'T\'HH:mm:ss(.fff)zzz');
	            };e.defaultLocale = '';e.locales = { '': { monthNames: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','), monthNamesShort: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','), dayNames: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','), dayNamesShort: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','), amDesignator: 'AM', pmDesignator: 'PM' } };e.formatters = { i: 'yyyy-MM-dd\'T\'HH:mm:ss(.fff)', u: 'yyyy-MM-dd\'T\'HH:mm:ss(.fff)zzz' };z('getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON'.split(','), function (a) {
	                H[a] = function () {
	                    return this[0][a]();
	                };
	            });H.setTime = function (a) {
	                this[0].setTime(a);return this;
	            };H.valid = w(r);H.clone = function () {
	                return new e(this);
	            };H.clearTime = function () {
	                return this.setHours(0, 0, 0, 0);
	            };H.toDate = function () {
	                return new a(+this[0]);
	            };e.now = function () {
	                return +new a();
	            };e.today = function () {
	                return new e().clearTime();
	            };e.UTC = F;e.getDaysInMonth = v;if (typeof module !== 'undefined' && module.exports) module.exports = e;return e;
	        })(Date, Math, Array);
	
	        //these holds the actual dom table objects, and is used to identify what parts of the table that needs to be created.
	        var _cont; //container holding table
	        var _table; //the table
	        var _head; //table header
	        var _headSort; //table header sorting row
	        var _headFilter; //table header filter row
	        var _body; //table body
	        var _foot; //table footer
	
	        var _data; //columns and rows
	        var _currPage = 1; //current page
	        var _pageSize; //current pagesize
	        var _totalPages; //total pages
	        var _currSortCol; //current sorting column
	        var _currSortFlip = false; //current sorting direction
	        var _currDpOp; //clicked datepicker operator
	        var _filterCols = {}; //array with current filters
	        var _filterTimeout; //timer for delayed filtering
	        var _uniqueCol; //reference to column with the unique property
	        var _uniqueCols = {}; //array with checked rows
	        var _checkToggleChecked = false; //check-all toggle state
	
	        var _vendors = ['webkit', 'moz', 'Moz', 'ms', 'o', 'O']; //vendors prefixes. used for not yet officially supported features.
	        var _transition = {
	            supported: undefined, //true if browser supports transitions
	            doTransition: false, //true if allowed to transition
	            direction: undefined, //direction of transition.
	            available: {
	                'bounce': {
	                    next: {
	                        tin: 'bounceIn',
	                        tout: 'bounceOut'
	                    },
	                    prev: {
	                        tin: 'bounceIn',
	                        tout: 'bounceOut'
	                    }
	                },
	                'fade': {
	                    next: {
	                        tin: 'fadeIn',
	                        tout: 'fadeOut'
	                    },
	                    prev: {
	                        tin: 'fadeIn',
	                        tout: 'fadeOut'
	                    }
	                },
	                'flip': {
	                    next: {
	                        tin: 'flipInX',
	                        tout: 'flipOutX'
	                    },
	                    prev: {
	                        tin: 'flipInX',
	                        tout: 'flipOutX'
	                    }
	                },
	                'rotate': {
	                    next: {
	                        tin: 'rotateInDownLeft',
	                        tout: 'rotateOutDownLeft'
	                    },
	                    prev: {
	                        tin: 'rotateInUpLeft',
	                        tout: 'rotateOutUpLeft'
	                    }
	                },
	                'scroll': {
	                    next: {
	                        tin: 'fadeInUp',
	                        tout: 'fadeOutUp'
	                    },
	                    prev: {
	                        tin: 'fadeInDown',
	                        tout: 'fadeOutDown'
	                    }
	                },
	                'slide': {
	                    next: {
	                        tin: 'fadeInRight',
	                        tout: 'fadeOutLeft'
	                    },
	                    prev: {
	                        tin: 'fadeInLeft',
	                        tout: 'fadeOutRight'
	                    }
	                }
	            }
	
	        };
	
	        /*
	         initialize the plugin.
	         */
	        priv.init = function () {
	            _cont = priv.options.id;
	            priv.options.types.string = (priv.options.types || {}).string || {};
	            priv.options.types.number = (priv.options.types || {}).number || {};
	            priv.options.types.bool = (priv.options.types || {}).bool || {};
	            priv.options.types.date = (priv.options.types || {}).date || {};
	            priv.options.transition = priv.options.transition === true ? 'scroll' : priv.options.transition;
	
	            //check support transitions
	            _transition.supported = priv.supportsTransition();
	
	            //fill the table with empty cells
	            if (priv.options.preFill) {
	                var data = {
	                    cols: {
	                        dummy: {
	                            index: 1,
	                            friendly: '&nbsp;',
	                            type: 'string'
	                        }
	                    },
	                    rows: []
	                };
	                for (var i = 0; i < priv.options.pageSize; i++) data.rows.push({ dummy: '&nbsp;' });
	                priv.setData(data);
	            }
	            //try call webservice for data
	            priv.update();
	        };
	
	        /*
	         creates the table with all its parts and handlers.
	         note that only the parts we need is created.
	         (yeah, the function is huge)
	         */
	        priv.createTable = function () {
	            var start = new priv.ext.XDate();
	
	            //create table itself
	            if (!_table) {
	                _head = _body = _foot = undefined;
	                _table = $('<table class="watable table table-striped table-hover table-bordered table-condensed"></table>').appendTo(_cont);
	            }
	
	            //create the header which will later hold both sorting and filtering
	            if (!_head) {
	                _table.find('thead').remove();
	                _headSort = _headFilter = undefined;
	                _head = $('<thead></thead>').prependTo(_table);
	            }
	
	            //sort the columns in index order
	            var colsSorted = _Object$keys(_data.cols).sort(function (a, b) {
	                return _data.cols[a].index - _data.cols[b].index;
	            });
	
	            //create the header sorting row
	            if (!_headSort) {
	                _head.find('.sort i').tooltip('hide');
	                _head.find('.sort').remove();
	                _headSort = $('<tr class="sort"></tr>').prependTo(_head);
	
	                //create the checkall toggle
	                if (_uniqueCol && priv.options.checkboxes) {
	                    var checked = _checkToggleChecked ? 'checked' : '';
	                    var headCell = $('<th></th>').appendTo(_headSort);
	                    if (priv.options.checkAllToggle) {
	                        var elem = $('<input {0} class="checkToggle" type="checkbox" />'.f(checked)).appendTo(headCell);
	                        elem.on('change', priv.checkToggleChanged);
	                    }
	                }
	
	                //create the sortable headers
	                for (var i = 0; i < colsSorted.length; i++) {
	                    var column = colsSorted[i];
	                    var props = _data.cols[column];
	
	                    if (!props.hidden) {
	                        var headCell = $('<th></th>').appendTo(_headSort);
	                        var link;
	                        if (priv.options.sorting && props.sorting !== false) {
	                            link = $('<a class="pull-left" href="#">{0}</a>'.f(props.friendly || column));
	                            link.on('click', { column: column }, priv.columnClicked);
	                        } else {
	                            link = $('<span class="pull-left">{0}</span>'.f(props.friendly || column));
	                        }
	                        link.appendTo(headCell);
	
	                        if (props.tooltip) {
	                            $('<span class="glyphicon glyphicon-info-sign"></span>').tooltip({
	                                title: props.tooltip.trim(),
	                                html: true,
	                                container: 'body',
	                                placement: 'top',
	                                delay: {
	                                    show: 500,
	                                    hide: 100
	                                }
	                            }).appendTo(link);
	                        }
	
	                        //Add sort arrow
	                        if (column == _currSortCol) {
	                            if (_currSortFlip) $('<span class="glyphicon glyphicon-chevron-down pull-right"></span>').appendTo(headCell);else $('<span class="glyphicon glyphicon-chevron-up pull-right"></span>').appendTo(headCell);
	                        }
	                    }
	                }
	            }
	
	            //create the header filtering row
	            if (!_headFilter && priv.options.filter) {
	                _head.find('.filter').remove();
	                _headFilter = $('<tr class="filter"></tr>').appendTo(_head);
	                var headCell;
	                var elem;
	                var placeHolder = '';
	                var tooltip = '';
	
	                //create the filter checkbox
	                if (_uniqueCol && priv.options.checkboxes) {
	                    tooltip = priv.options.types.bool.filterTooltip || 'Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked';
	                    headCell = $('<th></th>').appendTo(_headFilter);
	                    elem = $('<input class="filter indeterminate" checked type="checkbox" />').appendTo(headCell);
	                    $.map(_filterCols, function (colProps, col) {
	                        if (col == 'unique') {
	                            if (colProps.filter) elem.prop('checked', true).removeClass('indeterminate');else if (!colProps.filter) elem.prop('checked', false).removeClass('indeterminate');else if (colProps.filter == '') elem.addClass('indeterminate');
	                        }
	                    });
	
	                    if (tooltip) {
	                        elem.tooltip({
	                            title: tooltip.trim(),
	                            html: true,
	                            container: 'body',
	                            trigger: 'hover',
	                            placement: 'top',
	                            delay: {
	                                show: 500,
	                                hide: 100
	                            }
	                        });
	                    }
	                    elem.on('click', { column: 'unique' }, priv.filterChanged);
	                }
	
	                //create the column filters
	                for (var i = 0; i < colsSorted.length; i++) {
	                    var column = colsSorted[i];
	                    var props = _data.cols[column];
	                    tooltip = props.filterTooltip === true ? undefined : props.filterTooltip === false ? '' : props.filterTooltip;
	                    placeHolder = props.placeHolder === true ? undefined : props.placeHolder === false ? '' : props.placeHolder;
	
	                    if (!props.hidden) {
	                        headCell = $('<th></th>').appendTo(_headFilter);
	
	                        switch (props.type || 'string') {
	                            case 'number':
	                                if (placeHolder == undefined) placeHolder = priv.options.types.number.placeHolder;
	                                placeHolder = placeHolder === true || placeHolder == undefined ? '10..20 =50' : placeHolder === false ? '' : placeHolder;
	                                if (tooltip == undefined) tooltip = priv.options.types.number.filterTooltip;
	                                tooltip = tooltip === true || tooltip == undefined ? 'Values 10 to 20:<br/>10..20<br/>Values except 10 to 20:<br/>!10..20<br/>Values exactly 50:<br/>=50' : tooltip === false ? '' : tooltip;
	                                elem = $('<input placeholder="{0}" class="filter" type="text" />'.f(placeHolder));
	                                elem.on('keyup', { column: column }, priv.filterChanged);
	                                break;
	                            case 'date':
	                                if (placeHolder == undefined) placeHolder = priv.options.types.date.placeHolder;
	                                placeHolder = placeHolder === true || placeHolder == undefined ? '-7..0' : placeHolder === false ? '' : placeHolder;
	                                if (tooltip == undefined) tooltip = priv.options.types.date.filterTooltip;
	                                tooltip = tooltip === true || tooltip == undefined ? 'Today:<br/>0..1<br/>All except today:<br/>!0..1<br/>A week today excluded:<br/>-7..0' : tooltip === false ? '' : tooltip;
	                                elem = $('<div><input placeholder="{0}" class="filter" type="text" /></div>'.f(placeHolder));
	
	                                if (priv.options.types.date.datePicker === true || priv.options.types.date.datePicker == undefined) {
	                                    if ($().datepicker) {
	                                        elem.addClass('date-wrap');
	                                        var today = new priv.ext.XDate(false).setHours(0, 0, 0, 0).toString('yyyy-MM-dd');
	                                        var dp = $('<div style="float:right" class="date" data-date="{0}" data-date-format="{1}" />'.f(today, 'yyyy-mm-dd')).appendTo(elem);
	                                        $('<input style="display:none" type="text"  />').appendTo(dp);
	                                        $('<span class="add-on glyphicon glyphicon-chevron-right"></span>').on('click', { op: 'l' }, priv.dpOpChanged).appendTo(dp);
	                                        $('<span class="add-on glyphicon glyphicon-chevron-left"></span>').on('click', { op: 'r' }, priv.dpOpChanged).appendTo(dp);
	                                        dp.datepicker({ weekStart: 1 });
	                                        dp.on('changeDate', { column: column, input: $('input.filter', elem) }, priv.dpClicked);
	                                    } else priv.log('datepicker plugin not found');
	                                }
	                                elem.on('keyup', 'input.filter', { column: column }, priv.filterChanged);
	                                break;
	                            case 'bool':
	                                if (tooltip == undefined) tooltip = priv.options.types.bool.filterTooltip;
	                                tooltip = tooltip === true || tooltip == undefined ? 'Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked' : tooltip === false ? '' : tooltip;
	                                elem = $('<input class="filter indeterminate" checked type="checkbox" />');
	                                elem.on('click', { column: column }, priv.filterChanged);
	                                break;
	                            case 'string':
	                                if (placeHolder == undefined) placeHolder = priv.options.types.string.placeHolder;
	                                placeHolder = placeHolder === true || placeHolder == undefined ? 'John Doe' : placeHolder === false ? '' : placeHolder;
	                                if (tooltip == undefined) tooltip = priv.options.types.string.filterTooltip;
	                                tooltip = tooltip === true || tooltip == undefined ? 'Find John Doe:<br/>John Doe<br/>Find John and Jane Doe(Regex):<br/>?John Doe|Jane Doe<br/>Find all except John Doe:<br/>!John Doe' : tooltip === false ? '' : tooltip;
	                                elem = $('<input placeholder="{0}" class="filter" type="text" />'.f(placeHolder));
	                                elem.on('keyup', { column: column }, priv.filterChanged);
	                                break;
	                            case 'none':
	                                elem = $('<div>&nbsp;</div>');
	                                break;
	                        }
	
	                        if (tooltip) {
	                            elem.tooltip({
	                                title: tooltip.trim(),
	                                html: true,
	                                container: 'body',
	                                trigger: 'hover',
	                                placement: 'top',
	                                delay: {
	                                    show: 500,
	                                    hide: 100
	                                }
	                            });
	                        }
	
	                        if (elem && props.filter) {
	                            $.map(_filterCols, function (colProps, col) {
	                                if (col == column) {
	                                    if (colProps.col.type == 'bool') {
	                                        if (colProps.filter) elem.prop('checked', true).removeClass('indeterminate');else if (!colProps.filter) elem.prop('checked', false).removeClass('indeterminate');else if (colProps.filter == '') elem.addClass('indeterminate');
	                                    } else elem.val(colProps.filter);
	                                }
	                            });
	                            elem.appendTo(headCell);
	                        }
	                    }
	                }
	            }
	
	            //create the body
	            if (!_body) {
	                var prevBody = _table.find('tbody');
	                if (!_transition.doTransition && prevBody.length) prevBody.remove();
	                _body = $('<tbody style="display:none"></tbody>').insertAfter(_head);
	                _body.on('change', '.unique', priv.rowChecked);
	                _body.on('click', 'td', priv.rowClicked);
	
	                //find out what rows to show next...
	                var rowsAdded = 0;
	                _data.toRow = _data.fromRow + priv.options.pageSize;
	                if (_data.toRow > _data.rows.length) _data.toRow = _data.rows.length;
	
	                //slice out the chunk of data we need and create rows
	                $.each(_data.rows.slice(_data.fromRow, _data.toRow), function (index, props) {
	                    var row = $('<tr class="{0}"></tr>'.f(index % 2 == 0 ? 'odd' : 'even')).appendTo(_body);
	
	                    //create checkbox
	                    if (_uniqueCol && priv.options.checkboxes) {
	                        var check = _uniqueCols[props[_uniqueCol]] != undefined ? 'checked' : '';
	                        var checkable = props['checkable'] === false ? 'disabled' : '';
	                        var cell = $('<td></td>').appendTo(row);
	                        $('<input class="unique" {0} {1} type="checkbox" />'.f(check, checkable)).appendTo(cell);
	                    }
	
	                    //create cells
	                    for (var i = 0; i < colsSorted.length; i++) {
	                        var key = colsSorted[i];
	                        var val = props[key];
	                        if (!_data.cols[key]) return;
	                        if (_data.cols[key].unique) row.data('unique', val);
	
	                        if (!_data.cols[key].hidden) {
	                            var cell = $('<td></td>').appendTo(row);
	                            cell.data('column', key);
	                            if (val === undefined) continue;
	
	                            var format = props[key + 'Format'] || _data.cols[key].format || '{0}';
	
	                            switch (_data.cols[key].type) {
	                                case 'string':
	                                    cell.html(format.f(val));
	                                    break;
	                                case 'number':
	                                    val = +val;
	                                    var forceDecimals = !isNaN(_data.cols[key].decimals);
	                                    if (forceDecimals) cell.html(format.f(val.toFixed(_data.cols[key].decimals)));else {
	                                        (val || 0) % 1 === 0 ? cell.html(format.f(val)) : cell.html(format.f(val.toFixed(priv.options.types.number.decimals || 2)));
	                                    }
	                                    break;
	                                case 'date':
	                                    val = new priv.ext.XDate(val, priv.options.types.date.utc === true).toString(priv.options.types.date.format || 'yyyy-MM-dd HH:mm:ss');
	                                    cell.html(format.f(val));
	                                    break;
	                                case 'bool':
	                                    $('<input type="checkbox" {0} disabled />'.f(val ? 'checked' : '')).appendTo(cell);
	                                    break;
	                            }
	                        }
	                    }
	                    rowsAdded++;
	
	                    //enough rows created?
	                    if (rowsAdded >= priv.options.pageSize) {
	                        _data.toRow = _data.fromRow + rowsAdded;
	                        return false;
	                    }
	                });
	
	                if (_currPage == 1) {
	                    _pageSize = rowsAdded;
	                    _totalPages = Math.round(Math.ceil(_data.rows.length / _pageSize));
	                }
	
	                //pad with empty rows if we're at last page.
	                if (_currPage == _totalPages) {
	                    while (rowsAdded < _pageSize) {
	                        var row = $('<tr></tr>').appendTo(_body);
	
	                        if (_uniqueCol && priv.options.checkboxes) {
	                            var cell = $('<td></td>').appendTo(row);
	                            $('<input disabled type="checkbox" />').appendTo(cell);
	                        }
	
	                        $.each(_data.cols, function (column, props) {
	                            if (!props.hidden) $('<td>&nbsp;</td>').appendTo(row);
	                        });
	                        rowsAdded++;
	                    }
	                }
	
	                //transition between bodys?
	                if (prevBody.length && _transition.doTransition) {
	                    var transition = _transition.direction == 1 ? _transition.available[priv.options.transition].next : _transition.available[priv.options.transition].prev;
	
	                    //animation duration
	                    var vendorCSSProps = {};
	                    $.each(_vendors, function (index, vendor) {
	                        var key = '-{0}-animation-duration'.f(vendor);
	                        vendorCSSProps[key] = '{0}s'.f(priv.options.transitionDuration);
	                    });
	                    prevBody.css(vendorCSSProps);
	
	                    var fallbackTimer;
	                    var vendorAnimationEnd = $.map(_vendors, function (vendor) {
	                        return '{0}AnimationEnd {0}animationend'.f(vendor);
	                    }).join(' ');
	                    prevBody.one('{0} animationend'.f(vendorAnimationEnd), function (e) {
	                        clearTimeout(fallbackTimer);
	                        prevBody.remove();
	                        _body.css(vendorCSSProps);
	                        //animate in the current body
	                        _body.one('{0} animationend'.f(vendorAnimationEnd), function (e) {
	                            _body.removeClass('animated {0}'.f(transition.tin));
	                        });
	                        _body.show(0).addClass('animated {0}'.f(transition.tin));
	                    });
	
	                    //fallback timer to prevent paging from breaking when animationend wont fire
	                    fallbackTimer = setTimeout(function (e) {
	                        priv.log('animate.css seems to be missing!', true);
	                        prevBody.remove();
	                        _body.show(0);
	                        _transition.supported = false;
	                    }, priv.options.transitionDuration * 1000 + 500);
	
	                    //animate out the previous body
	                    prevBody.addClass('animated {0}'.f(transition.tout));
	                    _transition.doTransition = false;
	                } else _body.show(0);
	            }
	
	            //create the footer
	            if (!_foot) {
	                _table.find('tfoot').remove();
	                _foot = $('<tfoot></tfoot>').insertAfter(_body);
	
	                var footRow = $('<tr></tr>').appendTo(_foot);
	                var footCell = $('<td colspan="999"></td>').appendTo(footRow);
	
	                //create summary
	                if (_data.rows.length > 0) $('<p>Rows {0}-{1} of {2}</p>'.f(_data.fromRow + 1, Math.min(_data.toRow, _data.rows.length), _data.rows.length)).appendTo(footCell);else {
	                    $('<p>No results</p>').appendTo(footCell);
	                    _totalPages = 0;
	                }
	
	                //create the pager.
	                var lowerPage = _currPage - 2;
	                var upperPage = _currPage + 2;
	                if (upperPage > _totalPages) {
	                    var diff = upperPage - _totalPages;
	                    upperPage = _totalPages;
	                    lowerPage -= diff;
	                }
	                if (lowerPage < 1) lowerPage = 1;
	                if (upperPage < 5) upperPage = 5;
	
	                var footToolbar = $('<div class="btn-toolbar"></div>').appendTo(footCell);
	                var footDiv = $('<div class="btn-group"></div>').appendTo(footToolbar);
	                var footPagerUl = $('<ul class="pagination"></ul>').appendTo(footDiv);
	
	                $('<li class="{0}"><a href="#">«</a></li>'.f(_currPage == 1 ? 'disabled' : '')).on('click', { pageIndex: _currPage - 1 }, priv.pageChanged).appendTo(footPagerUl);
	
	                for (var i = lowerPage; i <= upperPage; i++) {
	                    var link;
	                    if (i == _currPage) {
	                        link = $('<li class="active"><a href="#">{0}</a></li>'.f(i));
	                    } else {
	                        link = $('<li class="{1}"><a href="#">{0}</a></li>'.f(i, i > _totalPages ? 'disabled' : ''));
	                        link.on('click', { pageIndex: i }, priv.pageChanged);
	                    }
	                    link.appendTo(footPagerUl);
	                }
	                $('<li class="{0}"><a href="#">»</a></li>'.f(_currPage == _totalPages ? 'disabled' : '')).on('click', { pageIndex: _currPage + 1 }, priv.pageChanged).appendTo(footPagerUl);
	
	                //create pagesize dropdown
	                if (priv.options.pageSizes.length) {
	                    var div = $('<div class="btn-group dropup pagesize"></div>').appendTo(footToolbar);
	                    var btn = $('<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">Rows&nbsp;</button>').appendTo(div);
	                    var span = $('<span class="caret"></span>').appendTo(btn);
	                    var ul = $('<ul class="dropdown-menu">').appendTo(div);
	
	                    $.each(priv.options.pageSizes, function (index, val) {
	                        var li = $('<li></li>').appendTo(ul);
	                        $('<a href="#">{0}</a>'.f(val)).appendTo(li);
	                    });
	                    div.on('click', 'a', priv.pageSizeChanged);
	                }
	
	                //create columnpicker dropdown
	                if (priv.options.columnPicker) {
	                    var div = $('<div class="btn-group dropup columnpicker"></div>').appendTo(footToolbar);
	                    var btn = $('<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">Columns&nbsp;</button>').appendTo(div);
	                    var span = $('<span class="caret"></span>').appendTo(btn);
	                    var ul = $('<ul class="dropdown-menu">').appendTo(div);
	
	                    for (var i = 0; i < colsSorted.length; i++) {
	                        var col = colsSorted[i];
	                        var props = _data.cols[col];
	
	                        if (props.type != 'unique') {
	                            var li = $('<li></li>').appendTo(ul);
	                            $('<input {0} type="checkbox" title="{1}" value="{1}" >&nbsp;{2}</input>'.f(props.hidden ? '' : 'checked', col, props.friendly || col)).appendTo(li);
	                        }
	                    }
	                    div.on('click', 'input', priv.columnPickerClicked);
	                }
	
	                //create actions dropdown
	                if (priv.options.actions) {
	                    var div = $('<div class="btn-group dropup actions"></div>').appendTo(footToolbar);
	                    var btn = $('<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-list"></span>&nbsp;</button>').appendTo(div);
	                    var span = $('<span class="caret"></span>').appendTo(btn);
	                    var ul = $('<ul class="dropdown-menu">').appendTo(div);
	
	                    if (priv.options.actions.filter) {
	                        var li = $('<li></li>').appendTo(ul);
	                        $('<input {0} type="checkbox" >&nbsp;Filter</input>'.f(priv.options.filter ? 'checked' : '')).appendTo(li);
	                        li.on('click', 'input', function (e) {
	                            priv.options.filter = !priv.options.filter;
	                            _head = undefined;
	                            priv.createTable();
	                        });
	                    }
	                    if (priv.options.actions.columnPicker) {
	                        var li = $('<li></li>').appendTo(ul);
	                        $('<input {0} type="checkbox" >&nbsp;ColumnPicker</input>'.f(priv.options.columnPicker ? 'checked' : '')).appendTo(li);
	                        li.on('click', 'input', function (e) {
	                            priv.options.columnPicker = !priv.options.columnPicker;
	                            _foot = undefined;
	                            priv.createTable();
	                        });
	                    }
	                    if (priv.options.actions.custom) {
	                        $.each(priv.options.actions.custom, function (index, val) {
	                            var li = $('<li></li>').appendTo(ul);
	                            $(val).appendTo(li);
	                        });
	                    }
	                }
	            }
	
	            if (_data.rows.length == 0 && priv.options.hidePagerOnEmpty) $('.btn-toolbar', _foot).remove();
	            priv.log('table created in {0} ms.'.f(new priv.ext.XDate() - start));
	            if (typeof priv.options.tableCreated == 'function') priv.options.tableCreated.call(_table.get(0), { table: _table.get(0) });
	        };
	
	        /*
	         calls the webservice(if defined).
	         */
	        priv.update = function (callback, skipCols, resetChecked) {
	            if (!priv.options.url) {
	                priv.log('no url found');
	                return;
	            }
	
	            priv.log('requesting data from url:{0} data:{1}'.f(priv.options.url, JSON.stringify(priv.options.urlData) || ''));
	            var start = new priv.ext.XDate();
	
	            $.ajax({
	                url: priv.options.url,
	                type: priv.options.urlPost ? 'POST' : 'GET',
	                dataType: 'json',
	                contentType: 'application/json; charset=utf-8',
	                data: priv.options.urlData,
	                async: true,
	                success: function success(data) {
	                    priv.log('request finished in {0} ms.'.f(new priv.ext.XDate() - start));
	
	                    //assign the new data
	                    if (data.d && data.d.cols) priv.setData(data.d, skipCols, resetChecked);else priv.setData(data, skipCols, resetChecked);
	                    if (typeof callback == 'function') callback.call(this);
	                },
	                error: function error(err) {
	                    priv.log('request error: '.f(err));
	                }
	            });
	        };
	
	        /*
	         assigns the new data.
	         */
	        priv.setData = function (pData, skipCols, resetChecked) {
	            var data = $.extend(true, {}, pData);
	            data.fromRow = _data && _data.fromRow || 0;
	            data.toRow = _data && _data.toRow || 0;
	
	            //use previous column definitions?
	            skipCols = skipCols || false;
	            if (skipCols) data.cols = _data.cols;else _filterCols = {};
	
	            _data = data;
	            _data.rowsOrg = _data.rows;
	
	            //we might have more/less data now. Recalculate stuff.
	            if (_currPage > 1) {
	                _data.toRow = Math.min(_data.rows.length, _data.toRow);
	                _data.fromRow = _data.toRow - _pageSize;
	                _data.fromRow = Math.max(_data.fromRow, 0);
	                _currPage = Math.ceil(_data.fromRow / _pageSize) + 1;
	                _totalPages = Math.ceil(_data.rows.length / _pageSize);
	            } else {
	                _data.fromRow = 0;
	                if (priv.options.pageSize != -1) _data.toRow = _data.fromRow + priv.options.pageSize;
	                _data.toRow = Math.max(_data.toRow, _data.rows.length);
	            }
	
	            //wash the new data a bit
	            _uniqueCol = '';
	            $.each(_data.cols, function (col, props) {
	                //set sorting
	                if (!_currSortCol && props.sortOrder && priv.options.sorting && props.sorting !== false) {
	                    _currSortCol = col;
	                    _currSortFlip = props.sortOrder != 'asc';
	                }
	
	                //default to string type if missing
	                if (!props.type) _data.cols[col].type = 'string';
	
	                //if several unique columns is defined, use the first.
	                if (props.unique) {
	                    if (!_uniqueCol) _uniqueCol = col;else props.unique = false;
	                }
	
	                //if index property is missing, create one
	                if (!props.index) _data.cols[col].index = new priv.ext.XDate();
	                props.column = col;
	
	                //set any initial filter
	                if (!skipCols) {
	                    if (props.filter == undefined) props.filter = true;
	                    if (props.filter && typeof props.type != 'bool' && typeof props.filter != 'boolean') {
	                        _filterCols[col] = _filterCols[col] || {
	                            filter: String(props.filter),
	                            col: props
	                        };
	                    }
	                }
	            });
	
	            //keep any previously checked rows around?
	            if (resetChecked === true || resetChecked === undefined) _uniqueCols = {};else {
	                for (var key in _uniqueCols) _uniqueCols[key] = priv.getRow(key);
	            }
	
	            if (_uniqueCol) {
	                //create a unique column definition
	                _data.cols['unique'] = {
	                    column: 'unique',
	                    type: 'unique',
	                    index: -1,
	                    hidden: true
	                };
	
	                //add rows that needs to be pre-checked
	                $.each(_data.rows, function (index, row) {
	                    if (row['checked'] === true) _uniqueCols[row[_uniqueCol]] = row;
	                });
	            }
	
	            _head = undefined;
	            _body = undefined;
	            _foot = undefined;
	            priv.filter();
	            priv.sort();
	            priv.createTable();
	        };
	
	        /*
	         filters the data.
	         */
	        priv.filter = function () {
	            if (!priv.options.filter) return;
	            if (_Object$keys(_filterCols).length == 0) return;
	
	            //get a fresh copy of the data
	            _data.rows = $.extend(true, {}, _data.rowsOrg);
	            var start = new priv.ext.XDate();
	
	            //for every column with a filter, run through the rows and return the matching rows
	            $.each(_filterCols, function (col, colProps) {
	                priv.log('filtering on text:{0} col:{1} type:{2} '.f(colProps.filter, colProps.col.column, colProps.col.type));
	
	                switch (colProps.col.type) {
	                    case 'string':
	                        var filter = colProps.filter;
	                        var ne = false,
	                            regex = false,
	                            validRegex = true;
	
	                        //Escaping first character means cannot be negate or regex
	                        if (filter.charAt(0) == '\\') filter = filter.substr(1);else {
	                            var ne = filter.charAt(0) == '!';
	                            if (ne) filter = filter.substring(1);
	                            regex = filter.length > 0 && filter.charAt(0) == '?';
	                        }
	
	                        if (regex) {
	                            filter = filter.substr(1);
	                            try {
	                                filter = new RegExp(filter, 'gi');
	                            } catch (err) {
	                                priv.log('invalid regex:{0}'.f(filter), true);
	                                validRegex = false;
	                            }
	                        } else filter = filter.toLowerCase();
	
	                        _data.rows = $.map(_data.rows, function (row) {
	                            var val = String(row[col]);
	
	                            if (regex && validRegex) {
	                                var matches = val.match(filter);
	                                if (!matches && ne) return row;
	
	                                if (matches && !ne) {
	                                    var pos = 0;
	                                    $.each(matches, function (index, match) {
	                                        var matchMask = '<span class="filter">{0}</span>'.f(match);
	                                        pos = val.indexOf(match, pos);
	                                        var pre = val.substring(0, pos);
	                                        var post = val.substring(pos + match.length);
	                                        val = '{0}{1}{2}'.f(pre, matchMask, post);
	                                        pos += matchMask.length;
	                                    });
	
	                                    if (!row[col + 'Format'] && !colProps.col.format) {
	                                        row[col + 'Format'] = val;
	                                    }
	                                    return row;
	                                }
	                            } else {
	                                var pos = val.toLowerCase().indexOf(filter);
	
	                                if (pos == -1 && ne || filter === '') return row;else if (row[col] != undefined && pos >= 0 && !ne) {
	                                    if (!row[col + 'Format'] && !colProps.col.format) {
	                                        var pre = val.substring(0, pos);
	                                        var match = val.substring(pos, pos + filter.length);
	                                        var post = val.substring(pos + filter.length, row[col].length);
	                                        row[col + 'Format'] = '{0}<span class="filter">{1}</span>{2}'.f(pre, match, post);
	                                    }
	                                    return row;
	                                }
	                            }
	                        });
	                        break;
	                    case 'number':
	                    case 'date':
	                        var expr = colProps.filter.replace(/\s+/gi, ' ');
	                        var pos = -1,
	                            lval,
	                            rval,
	                            op;
	                        var ne = expr.charAt(0) == '!';
	                        if (ne) expr = expr.substring(1);
	
	                        //find operator,l/r value
	                        $.each(['..', '='], function (index, operator) {
	                            pos = expr.indexOf(operator);
	                            if (pos >= 0) {
	                                op = operator;
	                                lval = expr.substring(0, pos);
	                                rval = expr.substring(pos + op.length);
	
	                                lval = parseFloat(lval);
	                                rval = parseFloat(rval);
	                                if (isNaN(lval)) lval = Number.NEGATIVE_INFINITY;
	                                if (isNaN(rval)) rval = Number.MAX_VALUE;
	
	                                if (colProps.col.type == 'date') {
	                                    var today = new priv.ext.XDate(priv.options.types.date.utc === true).setHours(0, 0, 0, 0);
	                                    lval = today - lval * -1 * (60 * 60 * 24 * 1000);
	                                    rval = today - rval * -1 * (60 * 60 * 24 * 1000);
	                                }
	                                return false;
	                            }
	                        });
	
	                        _data.rows = $.map(_data.rows, function (row) {
	                            var match = false;
	
	                            switch (op) {
	                                case '=':
	                                    if (row[col] == rval) match = true;
	                                    break;
	                                case '..':
	                                    if (colProps.col.type == 'date') {
	                                        if (row[col] >= lval && row[col] < rval) match = true;
	                                    } else {
	                                        if (row[col] >= lval && row[col] <= rval) match = true;
	                                    }
	                                    break;
	                                default:
	                                    break;
	                            }
	                            if (match && !ne || !match && ne || expr.length == 0 || pos < 0) return row;
	                        });
	                        break;
	                    case 'bool':
	                        _data.rows = $.map(_data.rows, function (row) {
	                            if (colProps.filter === '') return row;
	                            if (row[col] != undefined && (Boolean(row[col]) && colProps.filter || !Boolean(row[col]) && !colProps.filter)) return row;
	                        });
	                        break;
	                    case 'unique':
	                        _data.rows = $.map(_data.rows, function (row) {
	                            if (colProps.filter === '') return row;
	                            var a = row[_uniqueCol];
	                            var b = _uniqueCols[a] ? _uniqueCols[a][_uniqueCol] : '';
	                            if (colProps.filter && a === b || !colProps.filter && b === '') return row;
	                        });
	                        break;
	                }
	                if (colProps.filter === '') delete _filterCols[colProps.col.column];
	            });
	            priv.log('filtering finished in {0} ms.'.f(new priv.ext.XDate() - start));
	
	            _currPage = 1;
	            _data.fromRow = 0;
	            _body = undefined;
	            _foot = undefined;
	        };
	
	        /*
	         sorts the data on the current sorting column
	         */
	        priv.sort = function () {
	            if (!_data.cols[_currSortCol]) _currSortCol = '';
	            if (!_currSortCol) return;
	
	            var start = new priv.ext.XDate();
	            priv.log('sorting on col:{0} order:{1}'.f(_currSortCol, _currSortFlip ? 'desc' : 'asc'));
	
	            var isString = _data.cols[_currSortCol].type == 'string';
	            _data.rows = _data.rows.sort(function (a, b) {
	
	                var valA = a[_currSortCol];
	                var valB = b[_currSortCol];
	
	                if (isString) {
	                    if (valA == undefined) valA = '';
	                    if (valB == undefined) valB = '';
	
	                    if (String(valA).toLowerCase() == String(valB).toLowerCase()) return 0;
	                    if (String(valA).toLowerCase() > String(valB).toLowerCase()) return _currSortFlip ? -1 : 1;else return _currSortFlip ? 1 : -1;
	                } else {
	                    valA = +valA;
	                    valB = +valB;
	                    if (valA == undefined || isNaN(valA)) {
	                        valA = priv.options.sortEmptyLast ? _currSortFlip ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
	                    }
	                    if (valB == undefined || isNaN(valB)) {
	                        valB = priv.options.sortEmptyLast ? _currSortFlip ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
	                    }
	                    if (valA == valB) return 0;
	                    if (valA > valB) return _currSortFlip ? -1 : 1;else return _currSortFlip ? 1 : -1;
	                }
	            });
	            priv.log('sorting finished in {0} ms.'.f(new priv.ext.XDate() - start));
	        };
	
	        /*
	         helper that returns the underlying data by the unique value
	         */
	        priv.getRow = function (unique) {
	            var start = new priv.ext.XDate();
	            var row;
	            $.each(_data.rowsOrg, function (i, r) {
	                if (r[_uniqueCol] == unique) {
	                    row = r;
	                    return false;
	                }
	            });
	            priv.log('row lookup finished in {0} ms.'.f(new priv.ext.XDate() - start));
	            return row;
	        };
	
	        /*
	         helper for console logging
	         */
	        priv.log = function (message, isWarning) {
	            if (isWarning) console.warn(message);else if (priv.options.debug) console.log(message);
	        };
	
	        /*
	        helper to detect transition support
	         */
	        priv.supportsTransition = function () {
	            var style = document.createElement('p').style;
	            //check vendorfree support
	            if (style['transition'] == '') return true;
	
	            //check vendor support
	            var vendorSupport = false;
	            $.each(_vendors, function (index, vendor) {
	                if ('{0}Transition'.f(vendor) in style) {
	                    vendorSupport = true;
	                    return false;
	                }
	            });
	            return vendorSupport;
	        };
	
	        /* Event Handlers
	         *************************************************************************/
	
	        /*
	         when: typing a filter
	         what: triggers filtering on the value
	         */
	        priv.filterChanged = function (e) {
	            //clear old timer if we're typing fast enough
	            if (_filterTimeout) {
	                clearTimeout(_filterTimeout);
	                priv.log('filtering cancelled');
	            }
	
	            var filter = this.value;
	            var col = _data.cols[e.data.column];
	            var timeout = 200;
	
	            //boolean filters needs some special care
	            if (col.type == 'bool' || col.type == 'unique') {
	                timeout = 0;
	                var elem = $(this);
	                var cssClass = 'indeterminate';
	                if (elem.hasClass(cssClass)) {
	                    e.preventDefault();
	                    elem.removeClass(cssClass);
	                    filter = true;
	                } else {
	                    if (!elem.is(':checked')) {
	                        filter = false;
	                    } else {
	                        elem.addClass(cssClass);
	                        filter = '';
	                    }
	                }
	            }
	
	            //add the filter to the filter array
	            _filterCols[col.column] = {
	                filter: filter,
	                col: col
	            };
	
	            //wait a few deciseconds before filtering
	            _filterTimeout = setTimeout(function () {
	                _filterTimeout = undefined;
	                priv.filter();
	                priv.sort();
	                priv.createTable();
	            }, timeout);
	        };
	
	        /*
	         when: changing page in pager
	         what: triggers table to be created with new page
	         */
	        priv.pageChanged = function (e) {
	            e.preventDefault();
	            if (e.data.pageIndex < 1 || e.data.pageIndex > _totalPages) return;
	
	            //if we have a valid transition, enable it.
	            _transition.doTransition = _transition.supported && priv.options.transitionDuration > 0 && _transition.available[priv.options.transition] || false; //
	            _transition.direction = e.data.pageIndex < _currPage ? 0 : 1;
	            //set the new page
	            _currPage = e.data.pageIndex;
	            priv.log('paging to index:{0}'.f(_currPage));
	
	            //find out what rows to create
	            _data.fromRow = (_currPage - 1) * _pageSize;
	            _data.toRow = _data.fromRow + _pageSize;
	            if (_data.toRow > _data.rows.length) _data.toRow = _data.rows.length;
	
	            //trigger callback
	            if (typeof priv.options.pageChanged == 'function') {
	                priv.options.pageChanged.call(e.target, {
	                    event: e,
	                    page: _currPage
	                });
	            }
	
	            _body = undefined;
	            _foot = undefined;
	            priv.createTable();
	        };
	
	        /*
	         when: changing pagesize in pagesize dropdown
	         what: triggers table to be created with new pagesize
	         */
	        priv.pageSizeChanged = function (e) {
	            e.preventDefault();
	            var val = $(this).text().toLowerCase();
	            priv.log('pagesize changed to:{0}'.f(val));
	
	            //set the new pagesize
	            if (val == 'all') priv.options.pageSize = _data.rows.length;else priv.options.pageSize = parseInt(val);
	
	            //revert to first page, as its gets messy otherwise.
	            _currPage = 1;
	            _data.fromRow = 0;
	            _data.toRow = _data.fromRow + priv.options.pageSize;
	            if (_data.toRow > _data.rows.length) _data.toRow = _data.rows.length;
	
	            //trigger callback
	            if (typeof priv.options.pageSizeChanged == 'function') {
	                priv.options.pageSizeChanged.call(e.target, {
	                    event: e,
	                    pageSize: priv.options.pageSize
	                });
	            }
	
	            _body = undefined;
	            _foot = undefined;
	            priv.createTable();
	        };
	
	        /*
	         when: clicking a column
	         what: triggers table to be sorted by the column
	         */
	        priv.columnClicked = function (e) {
	            e.preventDefault();
	            priv.log('col:{0} clicked'.f(e.data.column));
	
	            //set the new sorting column
	            if (_currSortCol == e.data.column) _currSortFlip = !_currSortFlip;
	            _currSortCol = e.data.column;
	
	            //trigger callback
	            if (typeof priv.options.columnClicked == 'function') {
	                priv.options.columnClicked.call(e.target, {
	                    event: e,
	                    column: _data.cols[_currSortCol],
	                    descending: _currSortFlip
	                });
	            }
	
	            _headSort = undefined;
	            _body = undefined;
	            priv.sort();
	            priv.createTable();
	        };
	
	        /*
	         when: clicking a column in columnpicker
	         what: triggers table to show/hide the column
	         */
	        priv.columnPickerClicked = function (e) {
	            e.stopPropagation();
	
	            var elem = $(this);
	            var col = elem.val();
	            priv.log('col:{0} {1}'.f(col, elem.is(':checked') ? 'checked' : 'unchecked'));
	
	            //toggle column visibility
	            _data.cols[col].hidden = !_data.cols[col].hidden;
	
	            _data.cols[col].index = _data.cols[col].index || new priv.ext.XDate();
	            _head = undefined;
	            _body = undefined;
	            priv.createTable();
	        };
	
	        /*
	         when: clicking the check-all checkbox
	         what: toggles checked state on all rows, and adds/removes them from checked array
	         */
	        priv.checkToggleChanged = function (e) {
	            var elem = $(this);
	
	            if (elem.is(':checked')) {
	                var start = new priv.ext.XDate();
	                //for every row(except non checkables), add it to the checked array
	                $.each(_data.rows, function (index, props) {
	                    var row = _data.rows[index];
	                    if (row.checkable === false) return;
	                    _uniqueCols[props[_uniqueCol]] = row;
	                });
	                priv.log('{0} rows checked in {1} ms.'.f(_data.rows.length, new priv.ext.XDate() - start));
	                _checkToggleChecked = true;
	            } else {
	                var start = new priv.ext.XDate();
	                //for every checked row(except non checkables), remove it from checked array
	                for (var key in _uniqueCols) {
	                    var row = _uniqueCols[key];
	                    if (row.checkable === false) continue;else delete _uniqueCols[key];
	                }
	                priv.log('{0} rows unchecked in {1} ms.'.f(_data.rows.length, new priv.ext.XDate() - start));
	                _checkToggleChecked = false;
	            }
	            _body = undefined;
	            priv.createTable();
	        };
	
	        /*
	         when: clicking a row checkbox
	         what: toggles checked state on row, and add/removes it from checked array
	         */
	        priv.rowChecked = function (e) {
	            var elem = $(this);
	
	            //get the row's unique value
	            var unique = elem.closest('tr').data('unique');
	            priv.log('row({0}) {1}'.f(unique, elem.is(':checked') ? 'checked' : 'unchecked'));
	
	            //store the row in checked array
	            if (elem.is(':checked')) _uniqueCols[unique] = priv.getRow(unique);else delete _uniqueCols[unique];
	        };
	
	        /*
	         when: clicking anywhere on a row
	         what: row data and other info is returned to caller
	         */
	        priv.rowClicked = function (e) {
	            if (!_uniqueCol) {
	                priv.log('no unique column specified');
	                return;
	            }
	
	            //gather callback data
	            var elem = $(this);
	            var column = _data.cols[elem.data('column')];
	            var unique = elem.closest('tr').data('unique');
	            var row = priv.getRow(unique);
	            var isChecked = elem.closest('tr').find('.unique').is(':checked');
	
	            //trigger callback
	            if (typeof priv.options.rowClicked == 'function') {
	                priv.options.rowClicked.call(e.target, {
	                    event: e,
	                    row: row,
	                    column: column,
	                    checked: isChecked
	                });
	            }
	        };
	
	        /*
	         when: clicking a datepicker operator
	         what: sets the datepicker operator before a datepicker date is chosen.
	         */
	        priv.dpOpChanged = function (e) {
	            priv.log('dp oper:{0} clicked'.f(e.data.op));
	            e.preventDefault();
	            _currDpOp = e.data.op;
	        };
	
	        /*
	         when: clicking a datepicker date
	         what: triggers filtering on the date
	         */
	        priv.dpClicked = function (e) {
	            priv.log('dp date:{0} clicked'.f(new priv.ext.XDate(e.date, priv.options.types.date.utc === true).toString('yyyy-MM-dd')));
	
	            e.preventDefault();
	            input = $(this).prev('input.filter').get(0);
	            Placeholders.disable(input); //Remove date placeholders for IE
	
	            var today = new priv.ext.XDate(false).setHours(0, 0, 0, 0);
	            var daysDiff = Math.floor(e.date / (60 * 60 * 24 * 1000)) - Math.floor(today / (60 * 60 * 24 * 1000));
	
	            var filter = $(e.data.input);
	            var op = '..';
	            var pos = filter.val().indexOf(op);
	            var lval = filter.val().substring(0, pos);
	            var rval = filter.val().substring(pos + op.length);
	
	            if (_currDpOp == 'l') lval = daysDiff;
	            if (_currDpOp == 'r') rval = daysDiff;
	
	            filter.val('{0}{1}{2}'.f(lval, op, rval));
	            Placeholders.enable(input);
	            $(this).datepicker('hide');
	            filter.trigger('keyup');
	        };
	
	        /* Public API
	         *************************************************************************/
	
	        publ.init = function (options) {
	            priv.log('watable initialization...');
	            //merge supplied options with defaults
	            $.extend(priv.options, defaults, options);
	            priv.init();
	            return publ;
	        };
	
	        publ.update = function (callback, skipCols, resetChecked) {
	            priv.log('publ.update called');
	            priv.update(callback, skipCols, resetChecked);
	            return publ;
	        };
	
	        publ.getData = function (checked, filtered) {
	            priv.log('publ.getData called');
	            checked = checked || false;
	            filtered = filtered || false;
	
	            var data = $.extend(true, {}, _data);
	            delete data.cols['unique'];
	
	            $.each(data.cols, function (col) {
	                if (_filterCols[col]) data.cols[col].filter = _filterCols[col].filter;
	            });
	
	            if (!filtered) {
	                delete data.rows;
	                data.rows = data.rowsOrg;
	            }
	            delete data.rowsOrg;
	            delete data.fromRow;
	            delete data.toRow;
	
	            if (checked) {
	                delete data.rows;
	                data.rows = $.map(_uniqueCols, function (val, index) {
	                    return val;
	                });
	            }
	            return data;
	        };
	
	        publ.setData = function (data, skipCols, resetChecked) {
	            priv.log('publ.setData called');
	            priv.setData(data, skipCols, resetChecked);
	            return publ;
	        };
	
	        publ.option = function (option, val) {
	            priv.log('publ.option called');
	            if (val == undefined) return priv.options[option];
	            priv.options[option] = val;
	            _head = undefined;
	            _body = undefined;
	            _foot = undefined;
	            priv.createTable();
	            return publ;
	        };
	
	        return publ;
	    };
	
	    $.fn.WATable = function (options) {
	        options = options || {};
	        return this.each(function () {
	            options.id = this;
	            $(this).data('WATable', new WATable().init(options));
	        });
	    };
	
	    String.prototype.format = String.prototype.f = function () {
	        var s = this;
	        var i = arguments.length;
	        while (i--) s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
	        return s;
	    };
	
	    //IE Polyfills
	
	    /* json3 */(function () {
	        var e = null;(function (t) {
	            function r(t) {
	                if (r[t] !== u) return r[t];var s;if ('bug-string-char-index' == t) s = 'a' != 'a'[0];else if ('json' == t) s = r('json-stringify') && r('json-parse');else {
	                    var o;if ('json-stringify' == t) {
	                        s = l.stringify;var a = 'function' == typeof s && c;if (a) {
	                            (o = function () {
	                                return 1;
	                            }).toJSON = o;try {
	                                a = '0' === s(0) && '0' === s(new Number()) && '""' == s(new String()) && s(i) === u && s(u) === u && s() === u && '1' === s(o) && '[1]' == s([o]) && '[null]' == s([u]) && 'null' == s(e) && '[null,null,null]' == s([u, i, e]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == s({ a: [o, !0, !1, e, '\u0000\b\n\f\r\t'] }) && '1' === s(e, o) && '[\n 1,\n 2\n]' == s([1, 2], e, 1) && '"-271821-04-20T00:00:00.000Z"' == s(new Date(-8640000000000000)) && '"+275760-09-13T00:00:00.000Z"' == s(new Date(8640000000000000)) && '"-000001-01-01T00:00:00.000Z"' == s(new Date(-62198755200000)) && '"1969-12-31T23:59:59.999Z"' == s(new Date(-1));
	                            } catch (f) {
	                                a = !1;
	                            }
	                        }s = a;
	                    }if ('json-parse' == t) {
	                        s = l.parse;if ('function' == typeof s) try {
	                            if (0 === s('0') && !s(!1)) {
	                                o = s('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var h = 5 == o.a.length && 1 === o.a[0];if (h) {
	                                    try {
	                                        h = !s('"\t"');
	                                    } catch (p) {}if (h) try {
	                                        h = 1 !== s('01');
	                                    } catch (d) {}if (h) try {
	                                        h = 1 !== s('1.');
	                                    } catch (v) {}
	                                }
	                            }
	                        } catch (m) {
	                            h = !1;
	                        }s = h;
	                    }
	                }return r[t] = !!s;
	            }var i = ({}).toString,
	                s,
	                o,
	                u,
	                a = "function" === 'function' && __webpack_require__(19),
	                f = 'object' == typeof JSON && JSON,
	                l = 'object' == typeof exports && exports && !exports.nodeType && exports;l && f ? (l.stringify = f.stringify, l.parse = f.parse) : l = t.JSON = f || {};var c = new Date(-3509827334573292);try {
	                c = -109252 == c.getUTCFullYear() && 0 === c.getUTCMonth() && 1 === c.getUTCDate() && 10 == c.getUTCHours() && 37 == c.getUTCMinutes() && 6 == c.getUTCSeconds() && 708 == c.getUTCMilliseconds();
	            } catch (h) {}if (!r('json')) {
	                var p = r('bug-string-char-index');if (!c) var d = Math.floor,
	                    v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
	                    m = function m(e, t) {
	                    return v[t] + 365 * (e - 1970) + d((e - 1969 + (t = +(t > 1))) / 4) - d((e - 1901 + t) / 100) + d((e - 1601 + t) / 400);
	                };if (!(s = ({}).hasOwnProperty)) s = function (t) {
	                    var r = {},
	                        o;if ((r.__proto__ = e, r.__proto__ = { toString: 1 }, r).toString != i) s = function (t) {
	                        var r = this.__proto__,
	                            t = (t in (this.__proto__ = e, this));this.__proto__ = r;return t;
	                    };else {
	                        o = r.constructor;s = function (e) {
	                            var t = (this.constructor || o).prototype;return e in this && !(e in t && this[e] === t[e]);
	                        };
	                    }r = e;return s.call(this, t);
	                };var g = { 'boolean': 1, number: 1, string: 1, 'undefined': 1 };o = function (t, r) {
	                    var u = 0,
	                        a,
	                        f,
	                        l;(a = function () {
	                        this.valueOf = 0;
	                    }).prototype.valueOf = 0;f = new a();for (l in f) s.call(f, l) && u++;a = f = e;if (u) o = u == 2 ? function (e, t) {
	                        var n = {},
	                            r = i.call(e) == '[object Function]',
	                            o;for (o in e) !(r && o == 'prototype') && !s.call(n, o) && (n[o] = 1) && s.call(e, o) && t(o);
	                    } : function (e, t) {
	                        var n = i.call(e) == '[object Function]',
	                            r,
	                            o;for (r in e) !(n && r == 'prototype') && s.call(e, r) && !(o = r === 'constructor') && t(r);(o || s.call(e, r = 'constructor')) && t(r);
	                    };else {
	                        f = ['valueOf', 'toString', 'toLocaleString', 'propertyIsEnumerable', 'isPrototypeOf', 'hasOwnProperty', 'constructor'];o = function (e, t) {
	                            var n = i.call(e) == '[object Function]',
	                                r,
	                                o;if (o = !n) if (o = typeof e.constructor != 'function') {
	                                o = typeof e.hasOwnProperty;o = o == 'object' ? !!e.hasOwnProperty : !g[o];
	                            }o = o ? e.hasOwnProperty : s;for (r in e) !(n && r == 'prototype') && o.call(e, r) && t(r);for (n = f.length; r = f[--n]; o.call(e, r) && t(r));
	                        };
	                    }return o(t, r);
	                };if (!r('json-stringify')) {
	                    var y = { 92: '\\\\', 34: '\\"', 8: '\\b', 12: '\\f', 10: '\\n', 13: '\\r', 9: '\\t' },
	                        b = function b(e, t) {
	                        return ('000000' + (t || 0)).slice(-e);
	                    },
	                        w = function w(e) {
	                        var t = '"',
	                            n = 0,
	                            r = e.length,
	                            i = r > 10 && p,
	                            s;for (i && (s = e.split('')); n < r; n++) {
	                            var o = e.charCodeAt(n);switch (o) {case 8:case 9:case 10:case 12:case 13:case 34:case 92:
	                                    t = t + y[o];break;default:
	                                    if (o < 32) {
	                                        t = t + ('\\u00' + b(2, o.toString(16)));break;
	                                    }t = t + (i ? s[n] : p ? e.charAt(n) : e[n]);}
	                        }return t + '"';
	                    },
	                        E = function E(t, r, a, f, l, c, h) {
	                        var p, v, g, y, S, x, T, N, C;try {
	                            p = r[t];
	                        } catch (k) {}if (typeof p == 'object' && p) {
	                            v = i.call(p);if (v == '[object Date]' && !s.call(p, 'toJSON')) if (p > -1 / 0 && p < 1 / 0) {
	                                if (m) {
	                                    y = d(p / 86400000);for (v = d(y / 365.2425) + 1970 - 1; m(v + 1, 0) <= y; v++);for (g = d((y - m(v, 0)) / 30.42); m(v, g + 1) <= y; g++);y = 1 + y - m(v, g);S = (p % 86400000 + 86400000) % 86400000;x = d(S / 3600000) % 24;T = d(S / 60000) % 60;N = d(S / 1000) % 60;S = S % 1000;
	                                } else {
	                                    v = p.getUTCFullYear();g = p.getUTCMonth();y = p.getUTCDate();x = p.getUTCHours();T = p.getUTCMinutes();N = p.getUTCSeconds();S = p.getUTCMilliseconds();
	                                }p = (v <= 0 || v >= 10000 ? (v < 0 ? '-' : '+') + b(6, v < 0 ? -v : v) : b(4, v)) + '-' + b(2, g + 1) + '-' + b(2, y) + 'T' + b(2, x) + ':' + b(2, T) + ':' + b(2, N) + '.' + b(3, S) + 'Z';
	                            } else p = e;else if (typeof p.toJSON == 'function' && (v != '[object Number]' && v != '[object String]' && v != '[object Array]' || s.call(p, 'toJSON'))) p = p.toJSON(t);
	                        }a && (p = a.call(r, t, p));if (p === e) return 'null';v = i.call(p);if (v == '[object Boolean]') return '' + p;if (v == '[object Number]') return p > -1 / 0 && p < 1 / 0 ? '' + p : 'null';if (v == '[object String]') return w('' + p);if (typeof p == 'object') {
	                            for (t = h.length; t--;) if (h[t] === p) throw TypeError();h.push(p);C = [];r = c;c = c + l;if (v == '[object Array]') {
	                                g = 0;for (t = p.length; g < t; g++) {
	                                    v = E(g, p, a, f, l, c, h);C.push(v === u ? 'null' : v);
	                                }t = C.length ? l ? '[\n' + c + C.join(',\n' + c) + '\n' + r + ']' : '[' + C.join(',') + ']' : '[]';
	                            } else {
	                                o(f || p, function (e) {
	                                    var t = E(e, p, a, f, l, c, h);t !== u && C.push(w(e) + ':' + (l ? ' ' : '') + t);
	                                });t = C.length ? l ? '{\n' + c + C.join(',\n' + c) + '\n' + r + '}' : '{' + C.join(',') + '}' : '{}';
	                            }h.pop();return t;
	                        }
	                    };l.stringify = function (e, t, n) {
	                        var r, s, o, u;if (typeof t == 'function' || typeof t == 'object' && t) if ((u = i.call(t)) == '[object Function]') s = t;else if (u == '[object Array]') {
	                            o = {};for (var a = 0, f = t.length, l; a < f; l = t[a++], (u = i.call(l), u == '[object String]' || u == '[object Number]') && (o[l] = 1));
	                        }if (n) if ((u = i.call(n)) == '[object Number]') {
	                            if ((n = n - n % 1) > 0) {
	                                r = '';for (n > 10 && (n = 10); r.length < n; r = r + ' ');
	                            }
	                        } else u == '[object String]' && (r = n.length <= 10 ? n : n.slice(0, 10));return E('', (l = {}, l[''] = e, l), s, o, r, '', []);
	                    };
	                }if (!r('json-parse')) {
	                    var S = String.fromCharCode,
	                        x = { 92: '\\', 34: '"', 47: '/', 98: '\b', 116: '\t', 110: '\n', 102: '\f', 114: '\r' },
	                        T,
	                        N,
	                        C = function C() {
	                        T = N = e;throw SyntaxError();
	                    },
	                        k = function k() {
	                        for (var t = N, r = t.length, i, s, o, u, a; T < r;) {
	                            a = t.charCodeAt(T);switch (a) {case 9:case 10:case 13:case 32:
	                                    T++;break;case 123:case 125:case 91:case 93:case 58:case 44:
	                                    i = p ? t.charAt(T) : t[T];T++;return i;case 34:
	                                    i = '@';for (T++; T < r;) {
	                                        a = t.charCodeAt(T);if (a < 32) C();else if (a == 92) {
	                                            a = t.charCodeAt(++T);switch (a) {case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
	                                                    i = i + x[a];T++;break;case 117:
	                                                    s = ++T;for (o = T + 4; T < o; T++) {
	                                                        a = t.charCodeAt(T);a >= 48 && a <= 57 || a >= 97 && a <= 102 || a >= 65 && a <= 70 || C();
	                                                    }i = i + S('0x' + t.slice(s, T));break;default:
	                                                    C();}
	                                        } else {
	                                            if (a == 34) break;a = t.charCodeAt(T);for (s = T; a >= 32 && a != 92 && a != 34;) a = t.charCodeAt(++T);i = i + t.slice(s, T);
	                                        }
	                                    }if (t.charCodeAt(T) == 34) {
	                                        T++;return i;
	                                    }C();default:
	                                    s = T;if (a == 45) {
	                                        u = true;a = t.charCodeAt(++T);
	                                    }if (a >= 48 && a <= 57) {
	                                        for (a == 48 && (a = t.charCodeAt(T + 1), a >= 48 && a <= 57) && C(); T < r && (a = t.charCodeAt(T), a >= 48 && a <= 57); T++);if (t.charCodeAt(T) == 46) {
	                                            for (o = ++T; o < r && (a = t.charCodeAt(o), a >= 48 && a <= 57); o++);o == T && C();T = o;
	                                        }a = t.charCodeAt(T);if (a == 101 || a == 69) {
	                                            a = t.charCodeAt(++T);(a == 43 || a == 45) && T++;for (o = T; o < r && (a = t.charCodeAt(o), a >= 48 && a <= 57); o++);o == T && C();T = o;
	                                        }return +t.slice(s, T);
	                                    }u && C();if (t.slice(T, T + 4) == 'true') {
	                                        T = T + 4;return true;
	                                    }if (t.slice(T, T + 5) == 'false') {
	                                        T = T + 5;return false;
	                                    }if (t.slice(T, T + 4) == 'null') {
	                                        T = T + 4;return e;
	                                    }C();}
	                        }return '$';
	                    },
	                        L = function L(e) {
	                        var t, n;e == '$' && C();if (typeof e == 'string') {
	                            if ((p ? e.charAt(0) : e[0]) == '@') return e.slice(1);if (e == '[') {
	                                for (t = [];; n || (n = true)) {
	                                    e = k();if (e == ']') break;if (n) if (e == ',') {
	                                        e = k();e == ']' && C();
	                                    } else C();e == ',' && C();t.push(L(e));
	                                }return t;
	                            }if (e == '{') {
	                                for (t = {};; n || (n = true)) {
	                                    e = k();if (e == '}') break;if (n) if (e == ',') {
	                                        e = k();e == '}' && C();
	                                    } else C();(e == ',' || typeof e != 'string' || (p ? e.charAt(0) : e[0]) != '@' || k() != ':') && C();t[e.slice(1)] = L(k());
	                                }return t;
	                            }C();
	                        }return e;
	                    },
	                        A = function A(e, t, n) {
	                        n = O(e, t, n);n === u ? delete e[t] : e[t] = n;
	                    },
	                        O = function O(e, t, n) {
	                        var r = e[t],
	                            s;if (typeof r == 'object' && r) if (i.call(r) == '[object Array]') for (s = r.length; s--;) A(r, s, n);else o(r, function (e) {
	                            A(r, e, n);
	                        });return n.call(e, t, r);
	                    };l.parse = function (t, r) {
	                        var s, o;T = 0;N = '' + t;s = L(k());k() != '$' && C();T = N = e;return r && i.call(r) == '[object Function]' ? O((o = {}, o[''] = s, o), '', r) : s;
	                    };
	                }
	            }a && !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return l;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        })(this);
	    })();
	    _Object$keys = _Object$keys || function (o) {
	        var result = [];for (var name in o) {
	            if (o.hasOwnProperty(name)) result.push(name);
	        }return result;
	    };
	    String.prototype.trim = String.prototype.trim || function () {
	        return this.replace(/^\s+|\s+$/g, '');
	    };
	    Date.now = Date.now || function () {
	        return +new Date();
	    };
	    console = window.console || { log: function log() {}, warn: function warn() {} };
	})(jQuery);
	/* wait a little longer */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	module.exports = __webpack_require__(15).core.Object.keys;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(15)
	  , $def     = __webpack_require__(17)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(18).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(16)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(15)
	  , toString = {}.toString
	  , getNames = $.getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	$(document).ready(function () {
	
	    if (!$('#table-con').length) {
	        return;
	    }
	    //An example with all options.
	    var waTable = $('#table-con').WATable({
	        debug: true, //Prints some debug info to console
	        pageSize: 8, //Initial pagesize
	        //transition: 'slide',       //Type of transition when paging (bounce, fade, flip, rotate, scroll, slide).Requires https://github.com/daneden/animate.css.
	        //transitionDuration: 0.2,    //Duration of transition in seconds.
	        filter: true, //Show filter fields
	        sorting: true, //Enable sorting
	        sortEmptyLast: true, //Empty values will be shown last
	        columnPicker: true, //Show the columnPicker button
	        pageSizes: [1, 5, 8, 12, 200], //Set custom pageSizes. Leave empty array to hide button.
	        hidePagerOnEmpty: true, //Removes the pager if data is empty.
	        checkboxes: true, //Make rows checkable. (Note. You need a column with the 'unique' property)
	        checkAllToggle: true, //Show the check-all toggle
	        preFill: true, //Initially fills the table with empty rows (as many as the pagesize).
	        //url: '/someWebservice'    //Url to a webservice if not setting data manually as we do in this example
	        //urlData: { report:1 }     //Any data you need to pass to the webservice
	        //urlPost: true             //Use POST httpmethod to webservice. Default is GET.
	        types: { //Following are some specific properties related to the data types
	            string: {},
	            number: {
	                decimals: 1 //Sets decimal precision for float types
	            },
	            bool: {},
	            date: {
	                utc: true, //Show time as universal time, ie without timezones.
	                //format: 'yy/dd/MM',   //The format. See all possible formats here http://arshaw.com/xdate/#Formatting.
	                datePicker: true //Requires "Datepicker for Bootstrap" plugin (http://www.eyecon.ro/bootstrap-datepicker).
	            }
	        },
	        actions: { //This generates a button where you can add elements.
	            filter: true, //If true, the filter fields can be toggled visible and hidden.
	            columnPicker: true, //if true, the columnPicker can be toggled visible and hidden.
	            custom: [//Add any other elements here. Here is a refresh and export example.
	            $('<a href="#" class="refresh"><span class="glyphicon glyphicon-refresh"></span>&nbsp;Refresh</a>'), $('<a href="#" class="export_all"><span class="glyphicon glyphicon-share"></span>&nbsp;Export all rows</a>'), $('<a href="#" class="export_checked"><span class="glyphicon glyphicon-share"></span>&nbsp;Export checked rows</a>'), $('<a href="#" class="export_filtered"><span class="glyphicon glyphicon-share"></span>&nbsp;Export filtered rows</a>')]
	        },
	        tableCreated: function tableCreated(data) {
	            //Fires when the table is created / recreated. Use it if you want to manipulate the table in any way.
	            console.log('table created'); //data.table holds the html table element.
	            console.log(data); //'this' keyword also holds the html table element.
	        },
	        rowClicked: function rowClicked(data) {
	            //Fires when a row is clicked (Note. You need a column with the 'unique' property).
	            console.log('row clicked'); //data.event holds the original jQuery event.
	            console.log(data); //data.row holds the underlying row you supplied.
	            //data.column holds the underlying column you supplied.
	            //data.checked is true if row is checked.
	            //'this' keyword holds the clicked element.
	            if ($(this).hasClass('userId')) {
	                data.event.preventDefault();
	                alert('You clicked userId: ' + data.row.userId);
	            }
	        },
	        columnClicked: function columnClicked(data) {
	            //Fires when a column is clicked
	            console.log('column clicked'); //data.event holds the original jQuery event
	            console.log(data); //data.column holds the underlying column you supplied
	            //data.descending is true when sorted descending (duh)
	        },
	        pageChanged: function pageChanged(data) {
	            //Fires when manually changing page
	            console.log('page changed'); //data.event holds the original jQuery event
	            console.log(data); //data.page holds the new page index
	        },
	        pageSizeChanged: function pageSizeChanged(data) {
	            //Fires when manually changing pagesize
	            console.log('pagesize changed'); //data.event holds teh original event
	            console.log(data); //data.pageSize holds the new pagesize
	        }
	    }).data('WATable'); //This step reaches into the html data property to get the actual WATable object. Important if you want a reference to it as we want here.
	
	    //Generate some data
	    var data = getData();
	    waTable.setData(data); //Sets the data.
	    //waTable.setData(data, true); //Sets the data but prevents any previously set columns from being overwritten
	    //waTable.setData(data, false, false); //Sets the data and prevents any previously checked rows from being reset
	
	    var allRows = waTable.getData(false); //Gets the data you previously set.
	    var checkedRows = waTable.getData(true); //Gets the data you previously set, but with checked rows only.
	    var filteredRows = waTable.getData(false, true); //Gets the data you previously set, but with filtered rows only.
	
	    var pageSize = waTable.option('pageSize'); //Get option
	    //waTable.option("pageSize", pageSize); //Set option
	
	    //Example event handler triggered by the custom refresh link above.
	    $('body').on('click', '.refresh', function (e) {
	        e.preventDefault();
	        var data = getData();
	        waTable.setData(data, true);
	    });
	    //Example event handler triggered by the custom export links above.
	    $('body').on('click', '.export_checked, .export_filtered, .export_all', function (e) {
	        e.preventDefault();
	        var elem = $(e.target);
	        var data;
	        if (elem.hasClass('export_all')) data = waTable.getData(false);else if (elem.hasClass('export_checked')) data = waTable.getData(true);else if (elem.hasClass('export_filtered')) data = waTable.getData(false, true);
	        console.log(data.rows.length + ' rows returned');
	        console.log(data);
	        alert(data.rows.length + ' rows returned.\nSee console for details.');
	    });
	});
	
	//Generates some data. This step is of course normally done by your web server.
	function getData() {
	
	    //First define the columns
	    var cols = {
	        userId: {
	            index: 1, //The order this column should appear in the table
	            type: 'number', //The type. Possible are string, number, bool, date(in milliseconds).
	            friendly: '<span class=\'glyphicon glyphicon-user\'></span>', //Name that will be used in header. Can also be any html as shown here.
	            format: '<a href=\'#\' class=\'userId\' target=\'_blank\'>{0}</a>', //Used to format the data anything you want. Use {0} as placeholder for the actual data.
	            unique: true, //This is required if you want checkable rows, or to use the rowClicked callback. Be certain the values are really unique or weird things will happen.
	            sortOrder: 'asc', //Data will initially be sorted by this column. Possible are "asc" or "desc"
	            tooltip: 'This column has an initial filter', //Show some additional info about column
	            filter: '1..400' //Set initial filter.
	        },
	        name: {
	            index: 2,
	            type: 'string',
	            friendly: 'Name',
	            tooltip: 'This column has a custom placeholder', //Show some additional info about column
	            placeHolder: 'abc123' //Overrides default placeholder and placeholder specified in data types(row 34).
	        },
	        age: {
	            index: 3,
	            type: 'number',
	            friendly: 'Age',
	            sorting: false, //dont allow sorting
	            tooltip: 'This column has filtering and sorting turned off', //Show some additional info about column
	            filter: false //Removes filter field for this column
	        },
	        weight: {
	            index: 4,
	            type: 'number',
	            decimals: 2, //Force decimal precision
	            friendly: 'Weight',
	            placeHolder: '50..90',
	            tooltip: 'This column has no tooltip for the filter', //Show some additional info about column
	            filterTooltip: false //Turn off tooltip for this column
	        },
	        height: {
	            index: 5,
	            type: 'number',
	            friendly: 'Height',
	            hidden: true //Hides the column. Useful if you want this value later on but no visible to user. It's available to be visible if columnPicker is enabled.
	        },
	        important: {
	            index: 6,
	            type: 'bool',
	            friendly: 'Important'
	        },
	        someDate: {
	            index: 7,
	            type: 'date', //Don't forget dates are expressed in milliseconds
	            friendly: 'SomeDate'
	        }
	    };
	
	    /*
	      Create the actual data.
	      Whats worth mentioning is that you can use a 'format' property just as in the column definition,
	      but on a row level. See below on how we create a weightFormat property. This will be used when rendering the weight column.
	      Also, you can pre-check rows with the 'checked' property and prevent rows from being checkable with the 'checkable' property.
	    */
	    var rows = [];
	    var i = 1;
	    while (i <= 1000) {
	        var weight = Math.floor(Math.random() * 40) + 50 + Math.floor(Math.random() * 100) / 100;
	        var weightClass = weight < 70 ? 'green' : weight < 80 && weight >= 70 ? 'yellow' : 'red';
	
	        //We leave some fields intentionally undefined, so you can see how sorting/filtering works with these.
	        var doc = {
	            userId: i,
	            name: i % 100 == 0 ? undefined : elfName(),
	            age: Math.floor(Math.random() * 50) + 20,
	            weight: weight > 50 && weight < 60 ? undefined : weight,
	            weightFormat: '<div class=\'' + weightClass + '\'>{0}</div>',
	            height: Math.floor(Math.random() * 50) + 150,
	            important: i % 3 == 0 ? undefined : i % 4 == 0,
	            someDate: i % 4 == 0 ? undefined : Date.now() + i * Math.floor(Math.random() * (60 * 60 * 24 * 100)),
	            checkable: i % 4 != 0,
	            checked: i % 3 == 0
	        };
	        rows.push(doc);
	        i++;
	    }
	
	    //Create the returning object. Besides cols and rows, you can also pass any other object you would need later on.
	    var data = {
	        cols: cols,
	        rows: rows,
	        otherStuff: {
	            thatIMight: 1,
	            needLater: true
	        }
	    };
	
	    return data;
	}
	
	//Helper function to generate names
	function elfName() {
	    var elf_male = new Array('Abardon', 'Acaman', 'Achard', 'Ackmard', 'Agon', 'Agnar', 'Abdun', 'Aidan', 'Airis', 'Aldaren', 'Alderman', 'Alkirk', 'Amerdan', 'Anfarc', 'Aslan', 'Actar', 'Atgur', 'Atlin', 'Aldan', 'Badek', 'Baduk', 'Bedic', 'Beeron', 'Bein', 'Bithon', 'Bohl', 'Boldel', 'Bolrock', 'Bredin', 'Bredock', 'Breen', 'tristan', 'Bydern', 'Cainon', 'Calden', 'Camon', 'Cardon', 'Casdon', 'Celthric', 'Cevelt', 'Chamon', 'Chidak', 'Cibrock', 'Cipyar', 'Colthan', 'Connell', 'Cordale', 'Cos', 'Cyton', 'Daburn', 'Dawood', 'Dak', 'Dakamon', 'Darkboon', 'Dark', 'Darg', 'Darmor', 'Darpick', 'Dask', 'Deathmar', 'Derik', 'Dismer', 'Dokohan', 'Doran', 'Dorn', 'Dosman', 'Draghone', 'Drit', 'Driz', 'Drophar', 'Durmark', 'Dusaro', 'Eckard', 'Efar', 'Egmardern', 'Elvar', 'Elmut', 'Eli', 'Elik', 'Elson', 'Elthin', 'Elbane', 'Eldor', 'Elidin', 'Eloon', 'Enro', 'Erik', 'Erim', 'Eritai', 'Escariet', 'Espardo', 'Etar', 'Eldar', 'Elthen', 'Elfdorn', 'Etran', 'Eythil', 'Fearlock', 'Fenrirr', 'Fildon', 'Firdorn', 'Florian', 'Folmer', 'Fronar', 'Fydar', 'Gai', 'Galin', 'Galiron', 'Gametris', 'Gauthus', 'Gehardt', 'Gemedes', 'Gefirr', 'Gibolt', 'Geth', 'Gom', 'Gosform', 'Gothar', 'Gothor', 'Greste', 'Grim', 'Gryni', 'Gundir', 'Gustov', 'Halmar', 'Haston', 'Hectar', 'Hecton', 'Helmon', 'Hermedes', 'Hezaq', 'Hildar', 'Idon', 'Ieli', 'Ipdorn', 'Ibfist', 'Iroldak', 'Ixen', 'Ixil', 'Izic', 'Jamik', 'Jethol', 'Jihb', 'Jibar', 'Jhin', 'Julthor', 'Justahl', 'Kafar', 'Kaldar', 'Kelar', 'Keran', 'Kib', 'Kilden', 'Kilbas', 'Kildar', 'Kimdar', 'Kilder', 'Koldof', 'Kylrad', 'Lackus', 'Lacspor', 'Lahorn', 'Laracal', 'Ledal', 'Leith', 'Lalfar', 'Lerin', 'Letor', 'Lidorn', 'Lich', 'Loban', 'Lox', 'Ludok', 'Ladok', 'Lupin', 'Lurd', 'Mardin', 'Markard', 'Merklin', 'Mathar', 'Meldin', 'Merdon', 'Meridan', 'Mezo', 'Migorn', 'Milen', 'Mitar', 'Modric', 'Modum', 'Madon', 'Mafur', 'Mujardin', 'Mylo', 'Mythik', 'Nalfar', 'Nadorn', 'Naphazw', 'Neowald', 'Nildale', 'Nizel', 'Nilex', 'Niktohal', 'Niro', 'Nothar', 'Nathon', 'Nadale', 'Nythil', 'Ozhar', 'Oceloth', 'Odeir', 'Ohmar', 'Orin', 'Oxpar', 'Othelen', 'Padan', 'Palid', 'Palpur', 'Peitar', 'Pendus', 'Penduhl', 'Pildoor', 'Puthor', 'Phar', 'Phalloz', 'Qidan', 'Quid', 'Qupar', 'Randar', 'Raydan', 'Reaper', 'Relboron', 'Riandur', 'Rikar', 'Rismak', 'Riss', 'Ritic', 'Ryodan', 'Rysdan', 'Rythen', 'Rythorn', 'Sabalz', 'Sadaron', 'Safize', 'Samon', 'Samot', 'Secor', 'Sedar', 'Senic', 'Santhil', 'Sermak', 'Seryth', 'Seth', 'Shane', 'Shard', 'Shardo', 'Shillen', 'Silco', 'Sildo', 'Silpal', 'Sithik', 'Soderman', 'Sothale', 'Staph', 'Suktar', 'zuth', 'Sutlin', 'Syr', 'Syth', 'Sythril', 'Talberon', 'Telpur', 'Temil', 'Tamilfist', 'Tempist', 'Teslanar', 'Tespan', 'Tesio', 'Thiltran', 'Tholan', 'Tibers', 'Tibolt', 'Thol', 'Tildor', 'Tilthan', 'Tobaz', 'Todal', 'Tothale', 'Touck', 'Tok', 'Tuscan', 'Tusdar', 'Tyden', 'Uerthe', 'Uhmar', 'Uhrd', 'Updar', 'Uther', 'Vacon', 'Valker', 'Valyn', 'Vectomon', 'Veldar', 'Velpar', 'Vethelot', 'Vildher', 'Vigoth', 'Vilan', 'Vildar', 'Vi', 'Vinkol', 'Virdo', 'Voltain', 'Wanar', 'Wekmar', 'Weshin', 'Witfar', 'Wrathran', 'Waytel', 'Wathmon', 'Wider', 'Wyeth', 'Xandar', 'Xavor', 'Xenil', 'Xelx', 'Xithyl', 'Yerpal', 'Yesirn', 'Ylzik', 'Zak', 'Zek', 'Zerin', 'Zestor', 'Zidar', 'Zigmal', 'Zilex', 'Zilz', 'Zio', 'Zotar', 'Zutar', 'Zytan');
	    var elf_female = new Array('Acele Acholate', 'Ada', 'Adiannon', 'Adorra', 'Ahanna', 'Akara', 'Akassa', 'Akia', 'Amara', 'Amarisa', 'Amarizi', 'Ana', 'Andonna', 'Ariannona', 'Arina', 'Arryn', 'Asada', 'Awnia', 'Ayne', 'Basete', 'Bathelie', 'Bethel', 'Brana', 'Brynhilde', 'Calene', 'Calina', 'Celestine', 'Corda', 'Enaldie', 'Enoka', 'Enoona', 'Errinaya', 'Fayne', 'Frederika', 'Frida', 'Gvene', 'Gwethana', 'Helenia', 'Hildandi', 'Helvetica', 'Idona', 'Irina', 'Irene', 'Illia', 'Irona', 'Justalyne', 'Kassina', 'Kilia', 'Kressara', 'Laela', 'Laenaya', 'Lelani', 'Luna', 'Linyah', 'Lyna', 'Lynessa', 'Mehande', 'Melisande', 'Midiga', 'Mirayam', 'Mylene', 'Naria', 'Narisa', 'Nelena', 'Nimaya', 'Nymia', 'Ochala', 'Olivia', 'Onathe', 'Parthinia', 'Philadona', 'Prisane', 'Rhyna', 'Rivatha', 'Ryiah', 'Sanata', 'Sathe', 'Senira', 'Sennetta', 'Serane', 'Sevestra', 'Sidara', 'Sidathe', 'Sina', 'Sunete', 'Synestra', 'Sythini', 'zena', 'Tabithi', 'Tomara', 'Teressa', 'Tonica', 'Thea', 'Teressa', 'Urda', 'Usara', 'Useli', 'Unessa', 'ursula', 'Venessa', 'Wanera', 'Wellisa', 'yeta', 'Ysane', 'Yve', 'Yviene', 'Zana', 'Zathe', 'Zecele', 'Zenobe', 'Zema', 'Zestia', 'Zilka', 'Zoucka', 'Zona', 'Zyneste', 'Zynoa');
	    var elf_surname = new Array('Abardon', 'Acaman', 'Achard', 'Ackmard', 'Agon', 'Agnar', 'Aldan', 'Abdun', 'Aidan', 'Airis', 'Aldaren', 'Alderman', 'Alkirk', 'Amerdan', 'Anfarc', 'Aslan', 'Actar', 'Atgur', 'Atlin', 'Badek', 'Baduk', 'Bedic', 'Beeron', 'Bein', 'Bithon', 'Bohl', 'Boldel', 'Bolrock', 'Bredin', 'Bredock', 'Breen', 'tristan', 'Bydern', 'Cainon', 'Calden', 'Camon', 'Cardon', 'Casdon', 'Celthric', 'Cevelt', 'Chamon', 'Chidak', 'Cibrock', 'Cipyar', 'Colthan', 'Connell', 'Cordale', 'Cos', 'Cyton', 'Daburn', 'Dawood', 'Dak', 'Dakamon', 'Darkboon', 'Dark', 'Dark', 'Darmor', 'Darpick', 'Dask', 'Deathmar', 'Derik', 'Dismer', 'Dokohan', 'Doran', 'Dorn', 'Dosman', 'Draghone', 'Drit', 'Driz', 'Drophar', 'Durmark', 'Dusaro', 'Eckard', 'Efar', 'Egmardern', 'Elvar', 'Elmut', 'Eli', 'Elik', 'Elson', 'Elthin', 'Elbane', 'Eldor', 'Elidin', 'Eloon', 'Enro', 'Erik', 'Erim', 'Eritai', 'Escariet', 'Espardo', 'Etar', 'Eldar', 'Elthen', 'Etran', 'Eythil', 'Fearlock', 'Fenrirr', 'Fildon', 'Firdorn', 'Florian', 'Folmer', 'Fronar', 'Fydar', 'Gai', 'Galin', 'Galiron', 'Gametris', 'Gauthus', 'Gehardt', 'Gemedes', 'Gefirr', 'Gibolt', 'Geth', 'Gom', 'Gosform', 'Gothar', 'Gothor', 'Greste', 'Grim', 'Gryni', 'Gundir', 'Gustov', 'Halmar', 'Haston', 'Hectar', 'Hecton', 'Helmon', 'Hermedes', 'Hezaq', 'Hildar', 'Idon', 'Ieli', 'Ipdorn', 'Ibfist', 'Iroldak', 'Ixen', 'Ixil', 'Izic', 'Jamik', 'Jethol', 'Jihb', 'Jibar', 'Jhin', 'Julthor', 'Justahl', 'Kafar', 'Kaldar', 'Kelar', 'Keran', 'Kib', 'Kilden', 'Kilbas', 'Kildar', 'Kimdar', 'Kilder', 'Koldof', 'Kylrad', 'Lackus', 'Lacspor', 'Lahorn', 'Laracal', 'Ledal', 'Leith', 'Lalfar', 'Lerin', 'Letor', 'Lidorn', 'Lich', 'Loban', 'Lox', 'Ludok', 'Ladok', 'Lupin', 'Lurd', 'Mardin', 'Markard', 'Merklin', 'Mathar', 'Meldin', 'Merdon', 'Meridan', 'Mezo', 'Migorn', 'Milen', 'Mitar', 'Modric', 'Modum', 'Madon', 'Mafur', 'Mujardin', 'Mylo', 'Mythik', 'Nalfar', 'Nadorn', 'Naphazw', 'Neowald', 'Nildale', 'Nizel', 'Nilex', 'Niktohal', 'Niro', 'Nothar', 'Nathon', 'Nadale', 'Nythil', 'Ozhar', 'Oceloth', 'Odeir', 'Ohmar', 'Orin', 'Oxpar', 'Othelen', 'Padan', 'Palid', 'Palpur', 'Peitar', 'Pendus', 'Penduhl', 'Pildoor', 'Puthor', 'Phar', 'Phalloz', 'Qidan', 'Quid', 'Qupar', 'Randar', 'Raydan', 'Reaper', 'Relboron', 'Riandur', 'Rikar', 'Rismak', 'Riss', 'Ritic', 'Ryodan', 'Rysdan', 'Rythen', 'Rythorn', 'Sabalz', 'Sadaron', 'Safize', 'Samon', 'Samot', 'Secor', 'Sedar', 'Senic', 'Santhil', 'Sermak', 'Seryth', 'Seth', 'Shane', 'Shard', 'Shardo', 'Shillen', 'Silco', 'Sildo', 'Silpal', 'Sithik', 'Soderman', 'Sothale', 'Staph', 'Suktar', 'zuth', 'Sutlin', 'Syr', 'Syth', 'Sythril', 'Talberon', 'Telpur', 'Temil', 'Tamilfist', 'Tempist', 'Teslanar', 'Tespan', 'Tesio', 'Thiltran', 'Tholan', 'Tibers', 'Tibolt', 'Thol', 'Tildor', 'Tilthan', 'Tobaz', 'Todal', 'Tothale', 'Touck', 'Tok', 'Tuscan', 'Tusdar', 'Tyden', 'Uerthe', 'Uhmar', 'Uhrd', 'Updar', 'Uther', 'Vacon', 'Valker', 'Valyn', 'Vectomon', 'Veldar', 'Velpar', 'Vethelot', 'Vildher', 'Vigoth', 'Vilan', 'Vildar', 'Vi', 'Vinkol', 'Virdo', 'Voltain', 'Wanar', 'Wekmar', 'Weshin', 'Witfar', 'Wrathran', 'Waytel', 'Wathmon', 'Wider', 'Wyeth', 'Xandar', 'Xavor', 'Xenil', 'Xelx', 'Xithyl', 'Yerpal', 'Yesirn', 'Ylzik', 'Zak', 'Zek', 'Zerin', 'Zestor', 'Zidar', 'Zigmal', 'Zilex', 'Zilz', 'Zio', 'Zotar', 'Zutar', 'Zytan');
	    var prefix_male = elf_male;
	    var prefix_female = elf_female;
	    var suffix = elf_surname;
	    var n1m = parseInt(Math.random() * prefix_male.length);
	    var n1f = parseInt(Math.random() * prefix_female.length);
	    var n2 = parseInt(Math.random() * suffix.length);
	    var n2ekstra = parseInt(Math.random() * suffix.length);
	    var extraname = 'extranahme';
	    var prename_male = prefix_male[n1m].slice(0, 1).toUpperCase() + prefix_male[n1m].slice(1);
	    var prename_female = prefix_female[n1f].slice(0, 1).toUpperCase() + prefix_female[n1f].slice(1);
	    var sufname = suffix[n2].slice(0, 1).toUpperCase() + suffix[n2].slice(1);
	    var extraname = suffix[n2ekstra].slice(0, 1).toUpperCase() + suffix[n2ekstra].slice(1);
	    var n3 = parseInt(Math.random() * 100);
	    if (n3 <= 40) {
	        name = prename_male + ' ' + sufname;
	    } else if (n3 > 40 && n3 <= 70) {
	        name = prename_female + ' ' + sufname;
	    }
	    return name;
	}
	
	//filterTooltip: "Giggedi..."    //What to say in tooltip when hoovering filter fields. Set false to remove.
	//placeHolder: "Type here..."    //What to say in placeholder filter fields. Set false for empty.

	//filterTooltip: false
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Backstretch - v2.0.3 - 2012-11-30
	* http://srobbin.com/jquery-plugins/backstretch/
	* Copyright (c) 2012 Scott Robbin; Licensed MIT */
	"use strict";
	
	(function (e, t, n) {
	  "use strict";e.fn.backstretch = function (r, s) {
	    return ((r === n || r.length === 0) && e.error("No images were supplied for Backstretch"), e(t).scrollTop() === 0 && t.scrollTo(0, 0), this.each(function () {
	      var t = e(this),
	          n = t.data("backstretch");n && (s = e.extend(n.options, s), n.destroy(!0)), n = new i(this, r, s), t.data("backstretch", n);
	    }));
	  }, e.backstretch = function (t, n) {
	    return e("body").backstretch(t, n).data("backstretch");
	  }, e.expr[":"].backstretch = function (t) {
	    return e(t).data("backstretch") !== n;
	  }, e.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5000, fade: 0 };var r = { wrap: { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 }, img: { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxWidth: "none", zIndex: -999999 } },
	      i = function i(n, _i, o) {
	    this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(_i) ? _i : [_i], e.each(this.images, function () {
	      e("<img />")[0].src = this;
	    }), this.isBody = n === document.body, this.$container = e(n), this.$wrap = e("<div class=\"backstretch\"></div>").css(r.wrap).appendTo(this.$container), this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;if (!this.isBody) {
	      var u = this.$container.css("position"),
	          a = this.$container.css("zIndex");this.$container.css({ position: u === "static" ? "relative" : u, zIndex: a === "auto" ? 0 : a, background: "none" }), this.$wrap.css({ zIndex: -999998 });
	    }this.$wrap.css({ position: this.isBody && s ? "fixed" : "absolute" }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
	      this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1), this.resize());
	    }, this));
	  };i.prototype = { resize: function resize() {
	      try {
	        var e = { left: 0, top: 0 },
	            n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
	            r = n,
	            i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
	            s = r / this.$img.data("ratio"),
	            o;s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px")), this.$wrap.css({ width: n, height: i }).find("img:not(.deleteable)").css({ width: r, height: s }).css(e);
	      } catch (u) {}return this;
	    }, show: function show(t) {
	      if (Math.abs(t) > this.images.length - 1) return;this.index = t;var n = this,
	          i = n.$wrap.find("img").addClass("deleteable"),
	          s = e.Event("backstretch.show", { relatedTarget: n.$container[0] });return (clearInterval(n.interval), n.$img = e("<img />").css(r.img).bind("load", function (t) {
	        var r = this.width || e(t.target).width(),
	            o = this.height || e(t.target).height();e(this).data("ratio", r / o), e(this).fadeIn(n.options.speed || n.options.fade, function () {
	          i.remove(), n.paused || n.cycle(), n.$container.trigger(s, n);
	        }), n.resize();
	      }).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n);
	    }, next: function next() {
	      return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
	    }, prev: function prev() {
	      return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
	    }, pause: function pause() {
	      return (this.paused = !0, this);
	    }, resume: function resume() {
	      return (this.paused = !1, this.next(), this);
	    }, cycle: function cycle() {
	      return (this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
	        this.paused || this.next();
	      }, this), this.options.duration)), this);
	    }, destroy: function destroy(n) {
	      e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch");
	    } };var s = (function () {
	    var e = navigator.userAgent,
	        n = navigator.platform,
	        r = e.match(/AppleWebKit\/([0-9]+)/),
	        i = !!r && r[1],
	        s = e.match(/Fennec\/([0-9]+)/),
	        o = !!s && s[1],
	        u = e.match(/Opera Mobi\/([0-9]+)/),
	        a = !!u && u[1],
	        f = e.match(/MSIE ([0-9]+)/),
	        l = !!f && f[1];return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && ({}).toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6);
	  })();
	})(jQuery, window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	$(document).ready(function () {
	
	  if (!FM.isAuth) {
	    return;
	  }
	
	  $.backstretch('/img/login-bg.jpg', { speed: 500 });
	
	  // LOGIN
	  $('#login').submit(function (e) {
	    e.preventDefault();
	
	    var payload = {
	      email: $('#email').val(),
	      password: $('#password').val()
	    };
	
	    $.post('/login', payload).done(function (result) {
	      console.log(result);
	      if (result.error) {
	        $.notify(result.details, 'error');
	      } else {
	        window.location.href = '/';
	      }
	    });
	  });
	
	  // REGISTER
	  $('#register').submit(function (e) {
	    e.preventDefault();
	
	    var url = '/register';
	
	    var payload = {
	      fname: $('#fname').val(),
	      lname: $('#lname').val(),
	      email: $('#email').val(),
	      password: $('#password').val(),
	      password2: $('#password2').val()
	    };
	
	    $.post(url, payload).done(function (result) {
	      console.log(result);
	      if (result.error) {
	
	        $.notify(result.details, 'error');
	      } else {
	        $.notify(result.details, 'success');
	        setTimeout(function () {
	          window.location.href = '/';
	        }, 3000);
	      }
	    });
	  });
	
	  $('#forgot-btn').click(function (e) {
	    e.preventDefault();
	
	    var payload = {
	      email: $('#forgot-email').val()
	    };
	    console.log(payload);
	
	    $.post('/forgot', payload).done(function (result) {
	      console.log(result);
	      if (!result.error) {
	        $.notify('You have been sent a password reset email.', 'success');
	      } else {
	        $.notify(result.details, 'error');
	      }
	    });
	  });
	
	  $('#reset').submit(function (e) {
	    e.preventDefault();
	
	    var payload = {
	      email: $('#email').val(),
	      password: $('#password').val(),
	      password2: $('#password2').val(),
	      token: $('#forgotToken').val()
	    };
	    console.log('Attempting password reset...', payload);
	    $.post('/reset', payload).done(function (result) {
	      console.log(result);
	      if (!result.error) {
	        $.notify('Password reset successfully. Redirecting to login...', 'success');
	        setTimeout(function () {
	          window.location.href = '/login';
	        }, 3000);
	      } else {
	        $.notify(result.details, 'error');
	      }
	    });
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	$(document).ready(function () {
	  var host = location.hostname;
	  if (!/beaconator/.test(location.hostname)) {
	    host += ':3000';
	  }
	
	  $('#add-event').on('submit', function (event) {
	    event.preventDefault();
	
	    var url = ['http:/', host, 'api', 'event'].join('/');
	
	    var payload = {};
	
	    $(this).find('input').each(function () {
	      payload[this.name] = this.value;
	    });
	
	    $.ajax(url, {
	      method: 'POST',
	      data: payload
	    }).then(function (json) {
	      console.log(json);
	    }, function (err) {
	      console.log(err.responseText);
	    });
	  });
	});
	
	(function () {
	  'use strict';
	
	  if (!$('#table-events').length) {
	    return;
	  }
	
	  var table = $('#table-events').WATable({
	    debug: true, //Prints some debug info to console
	    pageSize: 25, //Initial pagesize
	    //transition: 'slide',       //Type of transition when paging (bounce, fade, flip, rotate, scroll, slide).Requires https://github.com/daneden/animate.css.
	    //transitionDuration: 0.2,    //Duration of transition in seconds.
	    filter: true, //Show filter fields
	    sorting: true, //Enable sorting
	    sortEmptyLast: true, //Empty values will be shown last
	    pageSizes: [10, 25, 50, 100], //Set custom pageSizes. Leave empty array to hide button.
	    hidePagerOnEmpty: true, //Removes the pager if data is empty.
	    checkboxes: true, //Make rows checkable. (Note. You need a column with the 'unique' property)
	    checkAllToggle: true, //Show the check-all toggle
	    preFill: true, //Initially fills the table with empty rows (as many as the pagesize).
	    //url: '/someWebservice'    //Url to a webservice if not setting data manually as we do in this example
	    //urlData: { report:1 }     //Any data you need to pass to the webservice
	    //urlPost: true             //Use POST httpmethod to webservice. Default is GET.
	    types: { //Following are some specific properties related to the data types
	      string: {
	        //filterTooltip: "Giggedi..."    //What to say in tooltip when hoovering filter fields. Set false to remove.
	        filterTooltip: false,
	        placeHolder: 'filter...' //What to say in placeholder filter fields. Set false for empty.
	      },
	      number: {
	        decimals: 1 //Sets decimal precision for float types
	      },
	      bool: {},
	      date: {
	        utc: false, //Show time as universal time, ie without timezones.
	        format: 'MM/dd/yyyy, hh:mm tt', //The format. See all possible formats here http://arshaw.com/xdate/#Formatting.
	        datePicker: true, //Requires "Datepicker for Bootstrap" plugin (http://www.eyecon.ro/bootstrap-datepicker).
	        placeHolder: false
	      }
	    },
	    actions: { //This generates a button where you can add elements.
	      filter: true, //If true, the filter fields can be toggled visible and hidden.
	      columnPicker: true, //if true, the columnPicker can be toggled visible and hidden.
	      custom: [//Add any other elements here. Here is a refresh and export example.
	      $('<a href="#" class="refresh"><span class="glyphicon glyphicon-refresh"></span>&nbsp;Refresh</a>'), $('<a href="#" class="export_all"><span class="glyphicon glyphicon-share"></span>&nbsp;Export all rows</a>'), $('<a href="#" class="export_checked"><span class="glyphicon glyphicon-share"></span>&nbsp;Export checked rows</a>'), $('<a href="#" class="export_filtered"><span class="glyphicon glyphicon-share"></span>&nbsp;Export filtered rows</a>')]
	    },
	    tableCreated: function tableCreated(data) {
	      //Fires when the table is created / recreated. Use it if you want to manipulate the table in any way.
	      console.log('table created'); //data.table holds the html table element.
	      console.log(data); //'this' keyword also holds the html table element.
	    },
	    rowClicked: function rowClicked(data) {
	      //Fires when a row is clicked (Note. You need a column with the 'unique' property).
	      console.log('row clicked'); //data.event holds the original jQuery event.
	      console.log(data); //data.row holds the underlying row you supplied.
	      //data.column holds the underlying column you supplied.
	      //data.checked is true if row is checked.
	      //'this' keyword holds the clicked element.
	      if ($(this).hasClass('userId')) {
	        data.event.preventDefault();
	        alert('You clicked userId: ' + data.row.userId);
	      }
	    },
	    columnClicked: function columnClicked(data) {
	      //Fires when a column is clicked
	      console.log('column clicked'); //data.event holds the original jQuery event
	      console.log(data); //data.column holds the underlying column you supplied
	      //data.descending is true when sorted descending (duh)
	    },
	    pageChanged: function pageChanged(data) {
	      //Fires when manually changing page
	      console.log('page changed'); //data.event holds the original jQuery event
	      console.log(data); //data.page holds the new page index
	    },
	    pageSizeChanged: function pageSizeChanged(data) {
	      //Fires when manually changing pagesize
	      console.log('pagesize changed'); //data.event holds teh original event
	      console.log(data); //data.pageSize holds the new pagesize
	    }
	  }).data('WATable');
	
	  console.log(table);
	  table.setData(FM.table);
	})();
	
	//filterTooltip: false
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, jQuery) {'use strict';
	
	(function () {
	
	  //    sidebar toggle
	  var responsiveView = function responsiveView() {
	    var wSize = $(window).width();
	    if (wSize <= 768) {
	      $('#container').addClass('sidebar-close');
	      $('#sidebar > ul').hide();
	    }
	
	    if (wSize > 768) {
	      $('#container').removeClass('sidebar-close');
	      $('#sidebar > ul').show();
	    }
	  };
	
	  $(window).on('load', responsiveView);
	  $(window).on('resize', responsiveView);
	
	  /*---LEFT BAR ACCORDION----*/
	  $('#nav-accordion').dcAccordion({
	    eventType: 'click',
	    autoClose: true,
	    saveState: true,
	    disableLink: true,
	    speed: 'slow',
	    showCount: false,
	    autoExpand: true,
	    //  cookie: 'dcjq-accordion-1',
	    classExpand: 'dcjq-current-parent'
	  });
	
	  //    sidebar dropdown menu auto scrolling
	
	  jQuery('#sidebar .sub-menu > a').click(function () {
	    var o = $(this).offset();
	    var diff = 250 - o.top;
	    if (diff > 0) {
	      $('#sidebar').scrollTo('-=' + Math.abs(diff), 500);
	    } else {
	      $('#sidebar').scrollTo('+=' + Math.abs(diff), 500);
	    }
	  });
	
	  $('.fa-bars').click(function () {
	    if ($('#sidebar > ul').is(':visible') === true) {
	      $('#main-content').css({
	        'margin-left': '0px'
	      });
	      $('#sidebar').css({
	        'margin-left': '-210px'
	      });
	      $('#sidebar > ul').hide();
	      $('#container').addClass('sidebar-closed');
	    } else {
	      $('#main-content').css({
	        'margin-left': '210px'
	      });
	      $('#sidebar > ul').show();
	      $('#sidebar').css({
	        'margin-left': '0'
	      });
	      $('#container').removeClass('sidebar-closed');
	    }
	  });
	
	  // custom scrollbar
	  // $('#sidebar').niceScroll({styler:'fb',cursorcolor:'#4ECDC4', cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});
	
	  // $('html').niceScroll({styler:'fb',cursorcolor:'#4ECDC4', cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
	
	  // widget tools
	
	  jQuery('.panel .tools .fa-chevron-down').click(function () {
	    var el = jQuery(this).parents('.panel').children('.panel-body');
	    if (jQuery(this).hasClass('fa-chevron-down')) {
	      jQuery(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
	      el.slideUp(200);
	    } else {
	      jQuery(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
	      el.slideDown(200);
	    }
	  });
	
	  jQuery('.panel .tools .fa-times').click(function () {
	    jQuery(this).parents('.panel').parent().remove();
	  });
	
	  //    tool tips
	  $('.tooltips').tooltip();
	
	  //    popovers
	  $('.popovers').popover();
	
	  // custom bar chart
	
	  if ($('.custom-bar-chart')) {
	    $('.bar').each(function () {
	      var i = $(this).find('.value').html();
	      $(this).find('.value').html('');
	      $(this).find('.value').animate({
	        height: i
	      }, 2000);
	    });
	  }
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(3)))

/***/ }
/******/ ]);
//# sourceMappingURL=tail.js.map