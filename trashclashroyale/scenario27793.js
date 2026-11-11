"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_threadStarter = f => function() {
    let args = Array.prototype.slice.apply(arguments);
    $rt_startThread(function() {
        f.apply(this, args);
    });
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_getThread = () => {
    {
        return jl_Thread_currentThread();
    }
},
$rt_setThread = t => {
    {
        return jl_Thread_setCurrentThread(t);
    }
},
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z"),
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_doublecls = $rt_createPrimitiveCls("double", "D"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits = n => {
    $rt_numberConversionDoubleArray[0] = n;
    return $rt_numberConversionLongArray[0];
},
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_gt = (a, b) => a > b,
Long_ge = (a, b) => a >= b,
Long_lt = (a, b) => a < b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
};
let Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_and = (a, b) => BigInt.asIntN(64, a & b),
Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArrayFromData = data => {
    let buffer = new BigInt64Array(data.length);
    buffer.set(data);
    return new $rt_longArrayCls(buffer);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_createBooleanArray = sz => new $rt_booleanArrayCls(new Int8Array(sz)),
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_0(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_createOutputFunction = outputFunction => {
    let buffer = "";
    return msg => {
        let index = 0;
        while (true) {
            let next = msg.indexOf('\n', index);
            if (next < 0) {
                break;
            }
            outputFunction(buffer + msg.substring(index, next));
            buffer = "";
            index = next + 1;
        }
        buffer += msg.substring(index);
    };
},
$rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.info(msg)) : () => {
},
$rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.error(msg)) : () => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
};
function TeaVMThread(runner) {
    this.status = 3;
    this.stack = [];
    this.suspendCallback = null;
    this.runner = runner;
    this.attribute = null;
    this.completeCallback = null;
}
TeaVMThread.prototype.push = function() {
    for (let i = 0;i < arguments.length;++i) {
        this.stack.push(arguments[i]);
    }
    return this;
};
TeaVMThread.prototype.s = TeaVMThread.prototype.push;
TeaVMThread.prototype.pop = function() {
    return this.stack.pop();
};
TeaVMThread.prototype.l = TeaVMThread.prototype.pop;
TeaVMThread.prototype.isResuming = function() {
    return this.status === 2;
};
TeaVMThread.prototype.isSuspending = function() {
    return this.status === 1;
};
TeaVMThread.prototype.suspend = function(callback) {
    this.suspendCallback = callback;
    this.status = 1;
};
TeaVMThread.prototype.start = function(callback) {
    if (this.status !== 3) {
        throw new Error("Thread already started");
    }
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 0;
    this.completeCallback = callback ? callback : result => {
        if (result instanceof Error) {
            throw result;
        }
    };
    this.run();
};
TeaVMThread.prototype.resume = function() {
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 2;
    this.run();
};
TeaVMThread.prototype.run = function() {
    $rt_currentNativeThread = this;
    let result;
    try {
        result = this.runner();
    } catch (e){
        result = e;
    } finally {
        $rt_currentNativeThread = null;
    }
    if (this.suspendCallback !== null) {
        let self = this;
        let callback = this.suspendCallback;
        this.suspendCallback = null;
        callback(() => self.resume());
    } else if (this.status === 0) {
        this.completeCallback(result);
    }
};
let $rt_suspending = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isSuspending();
},
$rt_resuming = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isResuming();
},
$rt_requireNativeThread = () => {
    let nativeThread = $rt_nativeThread();
    if (nativeThread === null) {
        throw new Error("Suspension point reached from non-threading context " + "(perhaps, from native JS method). See https://teavm.org/docs/runtime/coroutines.html " + "('Interaction with JavaScript' section)");
    }
    return nativeThread;
},
$rt_startThread = (runner, callback) => (new TeaVMThread(runner)).start(callback),
$rt_currentNativeThread = null,
$rt_nativeThread = () => $rt_currentNativeThread,
$rt_invalidPointer = () => {
    throw new Error("Invalid recorded state");
};
function jl_Object() {
    this.$monitor = null;
    this.$id$ = 0;
}
let jl_Object_monitorEnterSync = $o => {
    let var$2;
    if (jl_Thread_currentThread() === null)
        return;
    if ($o.$monitor === null)
        jl_Object_createMonitor($o);
    if ($o.$monitor.$owner === null)
        $o.$monitor.$owner = jl_Thread_currentThread();
    else if ($o.$monitor.$owner !== jl_Thread_currentThread())
        $rt_throw(jl_IllegalStateException__init_0($rt_s(0)));
    var$2 = $o.$monitor;
    var$2.$count = var$2.$count + 1 | 0;
},
jl_Object_monitorExitSync = $o => {
    let var$2, var$3;
    if (jl_Thread_currentThread() === null)
        return;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === jl_Thread_currentThread()) {
        var$2 = $o.$monitor;
        var$3 = var$2.$count - 1 | 0;
        var$2.$count = var$3;
        if (!var$3)
            $o.$monitor.$owner = null;
        jl_Object_isEmptyMonitor($o);
        return;
    }
    $rt_throw(jl_IllegalMonitorStateException__init_());
},
jl_Object_monitorEnter = $o => {
    let var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$o = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 1;
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter0($o, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($o, var$2, $ptr);
},
jl_Object_monitorEnter0 = ($o, $count) => {
    let var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$count = $thread.pop();$o = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($o.$monitor === null)
            jl_Object_createMonitor($o);
        if ($o.$monitor.$owner === null)
            $o.$monitor.$owner = jl_Thread_currentThread();
        if ($o.$monitor.$owner === jl_Thread_currentThread()) {
            var$3 = $o.$monitor;
            var$3.$count = var$3.$count + $count | 0;
            return;
        }
        $ptr = 1;
    case 1:
        jl_Object_monitorEnterWait0($o, $count);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($o, $count, var$3, $ptr);
},
jl_Object_createMonitor = $o => {
    $o.$monitor = jl_Object$Monitor__init_0();
},
jl_Object_monitorEnterWait0 = (var$1, var$2) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        jl_Object_monitorEnterWait$_asyncCall_$(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, var$2, $ptr);
},
jl_Object_monitorEnterWait = ($o, $count, $callback) => {
    let $thread_0, var$5, $monitor;
    $thread_0 = jl_Thread_currentThread();
    if ($o.$monitor === null) {
        jl_Object_createMonitor($o);
        jl_Thread_setCurrentThread($thread_0);
        var$5 = $o.$monitor;
        var$5.$count = var$5.$count + $count | 0;
        $callback.$complete(null);
        return;
    }
    if ($o.$monitor.$owner === null) {
        $o.$monitor.$owner = $thread_0;
        jl_Thread_setCurrentThread($thread_0);
        var$5 = $o.$monitor;
        var$5.$count = var$5.$count + $count | 0;
        $callback.$complete(null);
        return;
    }
    $monitor = $o.$monitor;
    if ($monitor.$enteringThreads === null)
        $monitor.$enteringThreads = otp_Platform_createQueue();
    otp_PlatformQueue_add$static($monitor.$enteringThreads, jl_Object$monitorEnterWait$lambda$_6_0__init_0($thread_0, $o, $count, $callback));
},
jl_Object_monitorExit = $o => {
    jl_Object_monitorExit0($o, 1);
},
jl_Object_monitorExit0 = ($o, $count) => {
    let $monitor;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === jl_Thread_currentThread()) {
        $monitor = $o.$monitor;
        $monitor.$count = $monitor.$count - $count | 0;
        if ($monitor.$count > 0)
            return;
        $monitor.$owner = null;
        if ($monitor.$enteringThreads !== null && !otp_PlatformQueue_isEmpty$static($monitor.$enteringThreads))
            otp_Platform_postpone(jl_Object$monitorExit$lambda$_8_0__init_0($o));
        else
            jl_Object_isEmptyMonitor($o);
        return;
    }
    $rt_throw(jl_IllegalMonitorStateException__init_());
},
jl_Object_waitForOtherThreads = $o => {
    let $monitor, $enteringThreads, $r;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === null) {
        $monitor = $o.$monitor;
        if ($monitor.$enteringThreads !== null && !otp_PlatformQueue_isEmpty$static($monitor.$enteringThreads)) {
            $enteringThreads = $monitor.$enteringThreads;
            $r = otp_PlatformQueue_remove$static($enteringThreads);
            $monitor.$enteringThreads = null;
            $r.$run();
        }
        return;
    }
},
jl_Object_isEmptyMonitor = $this => {
    let $monitor, var$2;
    $monitor = $this.$monitor;
    if ($monitor === null)
        return 1;
    a: {
        b: {
            if ($monitor.$owner === null) {
                if ($monitor.$enteringThreads !== null) {
                    var$2 = $monitor.$enteringThreads;
                    if (!otp_PlatformQueue_isEmpty$static(var$2))
                        break b;
                }
                if ($monitor.$notifyListeners === null)
                    break a;
                var$2 = $monitor.$notifyListeners;
                if (otp_PlatformQueue_isEmpty$static(var$2))
                    break a;
            }
        }
        return 0;
    }
    jl_Object_deleteMonitor($this);
    return 1;
},
jl_Object_deleteMonitor = $this => {
    $this.$monitor = null;
},
jl_Object_holdsLock = $o => {
    return $o.$monitor !== null && $o.$monitor.$owner === jl_Thread_currentThread() ? 1 : 0;
},
jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_notify = $this => {
    let $listeners, $listener;
    if (!jl_Object_holdsLock($this))
        $rt_throw(jl_IllegalMonitorStateException__init_());
    $listeners = $this.$monitor.$notifyListeners;
    if ($listeners === null)
        return;
    a: {
        while (true) {
            if (otp_PlatformQueue_isEmpty$static($listeners))
                break a;
            $listener = otp_PlatformQueue_remove$static($listeners);
            if (!$listener.$expired())
                break;
        }
        otp_Platform_postpone($listener);
    }
    if (otp_PlatformQueue_isEmpty$static($listeners))
        $this.$monitor.$notifyListeners = null;
},
jl_Object_notifyAll = $this => {
    let $listeners, $listener;
    if (!jl_Object_holdsLock($this))
        $rt_throw(jl_IllegalMonitorStateException__init_());
    $listeners = $this.$monitor.$notifyListeners;
    if ($listeners === null)
        return;
    while (!otp_PlatformQueue_isEmpty$static($listeners)) {
        $listener = otp_PlatformQueue_remove$static($listeners);
        if (!$listener.$expired())
            otp_Platform_postpone($listener);
    }
    $this.$monitor.$notifyListeners = null;
},
jl_Object_wait0 = ($this, $timeout) => {
    let var$2, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$timeout = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        try {
            var$2 = 0;
            $ptr = 1;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_InterruptedException) {
            } else {
                throw $$e;
            }
        }
        $rt_throw(jl_InterruptedException__init_());
    case 1:
        a: {
            try {
                jl_Object_wait1($this, $timeout, var$2);
                if ($rt_suspending()) {
                    break main;
                }
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return;
        }
        $rt_throw(jl_InterruptedException__init_());
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $timeout, var$2, $ptr);
},
jl_Object_wait1 = ($this, $timeout, $nanos) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$nanos = $thread.pop();$timeout = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!jl_Object_holdsLock($this))
            $rt_throw(jl_IllegalMonitorStateException__init_());
        $ptr = 1;
    case 1:
        jl_Object_waitImpl0($this, $timeout, $nanos);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $timeout, $nanos, $ptr);
},
jl_Object_waitImpl0 = (var$0, var$1, var$2) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();var$0 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        jl_Object_waitImpl$_asyncCall_$(var$0, var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$0, var$1, var$2, $ptr);
},
jl_Object_waitImpl = ($this, $timeout, $nanos, $callback) => {
    let $monitor, $listener, $timeoutToSchedule;
    $monitor = $this.$monitor;
    $listener = jl_Object$NotifyListenerImpl__init_0($this, $callback, $monitor.$count);
    if ($monitor.$notifyListeners === null)
        $monitor.$notifyListeners = otp_Platform_createQueue();
    otp_PlatformQueue_add$static($monitor.$notifyListeners, $listener);
    (jl_Thread_currentThread()).$interruptHandler = $listener;
    if (!(Long_le($timeout, Long_ZERO) && $nanos <= 0)) {
        $timeoutToSchedule = Long_lt($timeout, Long_fromInt(2147483647)) ? Long_lo($timeout) : 2147483647;
        $listener.$timerId = otp_Platform_schedule($listener, $timeoutToSchedule);
    }
    jl_Object_monitorExit0($this, $monitor.$count);
},
jl_Object_wait = $this => {
    let var$1, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        try {
            var$1 = Long_ZERO;
            $ptr = 1;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_InterruptedException) {
            } else {
                throw $$e;
            }
        }
        $rt_throw(jl_InterruptedException__init_());
    case 1:
        a: {
            try {
                jl_Object_wait0($this, var$1);
                if ($rt_suspending()) {
                    break main;
                }
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return;
        }
        $rt_throw(jl_InterruptedException__init_());
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
jl_Object_lambda$monitorExit$2 = $o => {
    jl_Object_waitForOtherThreads($o);
},
jl_Object_lambda$monitorEnterWait$0 = ($thread_0, $o, $count, $callback) => {
    let var$5;
    jl_Thread_setCurrentThread($thread_0);
    $o.$monitor.$owner = $thread_0;
    var$5 = $o.$monitor;
    var$5.$count = var$5.$count + $count | 0;
    $callback.$complete(null);
},
jl_Object_monitorEnterWait$_asyncCall_$ = (var$1, var$2) => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Object_monitorEnterWait(var$1, var$2, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
},
jl_Object_waitImpl$_asyncCall_$ = (var$0, var$1, var$2) => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Object_waitImpl(var$0, var$1, var$2, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
};
function g_Actor() {
    let a = this; jl_Object.call(a);
    a.$x = 0;
    a.$y = 0;
    a.$mySequenceNumber = 0;
    a.$lastPaintSequenceNumber = 0;
    a.$rotation = 0;
    a.$world = null;
    a.$image0 = null;
    a.$data = null;
    a.$boundingRect = null;
    a.$boundingXs = null;
    a.$boundingYs = null;
    a.$imageWidth = 0;
    a.$imageHeight = 0;
    a.$sleepingFor = 0;
}
let g_Actor_sequenceNumber = 0,
g_Actor_greenfootImage = null,
g_Actor_delegate = null,
g_Actor_$callClinit = () => {
    g_Actor_$callClinit = $rt_eraseClinit(g_Actor);
    g_Actor__clinit_();
},
g_Actor_initialise = () => {
    let var$1, var$2, $e, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$e = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_Actor_$callClinit();
        try {
            var$1 = new g_GreenfootImage;
            var$2 = gu_GreenfootUtil_getGreenfootLogoPath();
            $ptr = 1;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_Exception) {
                $e = $$je;
            } else {
                throw $$e;
            }
        }
        $e.$printStackTrace();
        (jl_System_err()).$println($rt_s(1));
        return;
    case 1:
        a: {
            try {
                g_GreenfootImage__init_(var$1, var$2);
                if ($rt_suspending()) {
                    break main;
                }
                g_Actor_greenfootImage = var$1;
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Exception) {
                    $e = $$je;
                } else {
                    throw $$e;
                }
            }
            $e.$printStackTrace();
            (jl_System_err()).$println($rt_s(1));
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, var$2, $e, $ptr);
},
g_Actor__init_ = $this => {
    let var$1, $image, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$image = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_Actor_$callClinit();
        jl_Object__init_($this);
        $this.$rotation = 0;
        $this.$boundingXs = $rt_createIntArray(4);
        $this.$boundingYs = $rt_createIntArray(4);
        $this.$sleepingFor = 0;
        var$1 = g_Actor_sequenceNumber;
        g_Actor_sequenceNumber = var$1 + 1 | 0;
        $this.$mySequenceNumber = var$1;
        $ptr = 1;
    case 1:
        $tmp = g_Actor_getClassImage($this);
        if ($rt_suspending()) {
            break main;
        }
        $image = $tmp;
        if ($image === null)
            $image = g_Actor_greenfootImage;
        var$3 = $image.$getCopyOnWriteClone();
        $this.$setImage(var$3);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $image, var$3, $ptr);
},
g_Actor_act = $this => {
    return;
},
g_Actor_getX = $this => {
    g_Actor_failIfNotInWorld($this);
    return $this.$x;
},
g_Actor_getY = $this => {
    g_Actor_failIfNotInWorld($this);
    return $this.$y;
},
g_Actor_setRotation = ($this, $rotation) => {
    if ($rotation >= 360)
        $rotation = $rotation >= 720 ? $rotation % 360 | 0 : $rotation + (-360) | 0;
    else if ($rotation < 0)
        $rotation = $rotation >= (-360) ? $rotation + 360 | 0 : 360 + ($rotation % 360 | 0) | 0;
    if ($this.$rotation != $rotation) {
        $this.$rotation = $rotation;
        $this.$boundingRect = null;
        g_Actor_sizeChanged($this);
    }
},
g_Actor_turnTowards = ($this, $x, $y) => {
    let $a;
    $a = jl_Math_atan2($y - $this.$y | 0, $x - $this.$x | 0);
    $this.$setRotation(jl_Math_toDegrees($a) | 0);
},
g_Actor_isAtEdge = $this => {
    g_Actor_failIfNotInWorld($this);
    return $this.$x > 0 && $this.$y > 0 && $this.$x < (($this.$getWorld()).$getWidth() - 1 | 0) && $this.$y < (($this.$getWorld()).$getHeight() - 1 | 0) ? 0 : 1;
},
g_Actor_setLocation = ($this, $x, $y) => {
    g_Actor_setLocationDrag($this, $x, $y);
},
g_Actor_move = ($this, $distance) => {
    let $radians, var$3, var$4, $dx, $dy;
    $radians = jl_Math_toRadians($this.$rotation);
    var$3 = jl_Math_cos($radians);
    var$4 = $distance;
    $dx = Long_lo((jl_Math_round(var$3 * var$4)));
    $dy = Long_lo((jl_Math_round(jl_Math_sin($radians) * var$4)));
    $this.$setLocation($this.$x + $dx | 0, $this.$y + $dy | 0);
},
g_Actor_turn = ($this, $amount) => {
    $this.$setRotation($this.$rotation + $amount | 0);
},
g_Actor_setLocationDrag = ($this, $x, $y) => {
    let $oldX, $oldY, $dx, $dy, $i, var$8;
    if ($this.$world !== null) {
        $oldX = $this.$x;
        $oldY = $this.$y;
        if (!$this.$world.$isBounded()) {
            $this.$x = $x;
            $this.$y = $y;
        } else {
            $this.$x = g_Actor_limitValue($this, $x, $this.$world.$width0);
            $this.$y = g_Actor_limitValue($this, $y, $this.$world.$height0);
        }
        if (!($this.$x == $oldX && $this.$y == $oldY)) {
            a: {
                if ($this.$boundingRect !== null) {
                    $dx = $rt_imul($this.$x - $oldX | 0, $this.$world.$cellSize0);
                    $dy = $rt_imul($this.$y - $oldY | 0, $this.$world.$cellSize0);
                    gci_Rect_setX($this.$boundingRect, gci_Rect_getX($this.$boundingRect) + $dx | 0);
                    gci_Rect_setY($this.$boundingRect, gci_Rect_getY($this.$boundingRect) + $dy | 0);
                    $i = 0;
                    while (true) {
                        if ($i >= 4)
                            break a;
                        var$8 = $this.$boundingXs.data;
                        var$8[$i] = var$8[$i] + $dx | 0;
                        var$8 = $this.$boundingYs.data;
                        var$8[$i] = var$8[$i] + $dy | 0;
                        $i = $i + 1 | 0;
                    }
                }
            }
            g_Actor_locationChanged($this, $oldX, $oldY);
        }
    }
},
g_Actor_limitValue = ($this, $v, $limit) => {
    if ($v < 0)
        $v = 0;
    if ($limit <= $v)
        $v = $limit - 1 | 0;
    return $v;
},
g_Actor_getWorld = $this => {
    return $this.$world;
},
g_Actor_addedToWorld = ($this, $world) => {
    return;
},
g_Actor_getImage0 = $this => {
    return $this.$image0;
},
g_Actor_setImage = ($this, $image) => {
    let $sizeChanged;
    if ($image === null && $this.$image0 === null)
        return;
    $sizeChanged = 1;
    if ($image !== null) {
        if ($image.$getWidth() == $this.$imageWidth && $image.$getHeight() == $this.$imageHeight)
            $sizeChanged = 0;
        else {
            $this.$imageWidth = $image.$getWidth();
            $this.$imageHeight = $image.$getHeight();
        }
    } else {
        $sizeChanged = !$this.$imageHeight && !$this.$imageWidth ? 0 : 1;
        $this.$imageWidth = 0;
        $this.$imageHeight = 0;
    }
    $this.$image0 = $image;
    if ($sizeChanged) {
        $this.$boundingRect = null;
        g_Actor_sizeChanged($this);
    }
},
g_Actor_setWorld = ($this, $world) => {
    $this.$world = $world;
},
g_Actor_addToWorld = ($this, $x, $y, $world) => {
    if ($world.$isBounded()) {
        $x = g_Actor_limitValue($this, $x, $world.$getWidth());
        $y = g_Actor_limitValue($this, $y, $world.$getHeight());
    }
    $this.$x = $x;
    $this.$y = $y;
    $this.$boundingRect = null;
    $this.$setWorld($world);
    $this.$setLocation($x, $y);
},
g_Actor_getBoundingRect = $this => {
    if ($this.$boundingRect === null)
        g_Actor_calcBounds($this);
    return $this.$boundingRect;
},
g_Actor_calcBounds = $this => {
    let $w, $cellSize, var$3, var$4, $wx, $wy, $i, $minX, $maxX, $minY, $maxY, $x, $y;
    $w = $this.$getActiveWorld();
    if ($w === null)
        return;
    $cellSize = $w.$getCellSize();
    if ($this.$image0 === null) {
        var$3 = $rt_imul($this.$x, $cellSize);
        var$4 = $cellSize / 2 | 0;
        $wx = var$3 + var$4 | 0;
        $wy = $rt_imul($this.$y, $cellSize) + var$4 | 0;
        $this.$boundingRect = gci_Rect__init_($wx, $wy, 0, 0);
        $i = 0;
        while ($i < 4) {
            $this.$boundingXs.data[$i] = $wx;
            $this.$boundingYs.data[$i] = $wy;
            $i = $i + 1 | 0;
        }
        return;
    }
    if ($this.$rotation % 90 | 0) {
        g_Actor_getRotatedCorners($this, $this.$boundingXs, $this.$boundingYs, $cellSize);
        $minX = 2147483647;
        $maxX = (-2147483648);
        $minY = 2147483647;
        $maxY = (-2147483648);
        $i = 0;
        while ($i < 4) {
            $minX = jl_Math_min($this.$boundingXs.data[$i] - 1 | 0, $minX);
            $maxX = jl_Math_max($this.$boundingXs.data[$i] + 1 | 0, $maxX);
            $minY = jl_Math_min($this.$boundingYs.data[$i] - 1 | 0, $minY);
            $maxY = jl_Math_max($this.$boundingYs.data[$i] + 1 | 0, $maxY);
            $i = $i + 1 | 0;
        }
        $this.$boundingRect = gci_Rect__init_($minX, $minY, ($maxX - $minX | 0) + 1 | 0, ($maxY - $minY | 0) + 1 | 0);
    } else {
        if ($this.$rotation % 180 | 0) {
            var$3 = $this.$image0.$getHeight();
            var$4 = $this.$image0.$getWidth();
        } else {
            var$3 = $this.$image0.$getWidth();
            var$4 = $this.$image0.$getHeight();
        }
        $x = $rt_imul($cellSize, $this.$x) + ((($cellSize - var$3 | 0) - 1 | 0) / 2 | 0) | 0;
        $y = $rt_imul($cellSize, $this.$y) + ((($cellSize - var$4 | 0) - 1 | 0) / 2 | 0) | 0;
        $this.$boundingRect = gci_Rect__init_($x, $y, var$3, var$4);
        $this.$boundingXs.data[0] = $x;
        $this.$boundingYs.data[0] = $y;
        $this.$boundingXs.data[1] = ($x + var$3 | 0) - 1 | 0;
        $this.$boundingYs.data[1] = $y;
        $this.$boundingXs.data[2] = $this.$boundingXs.data[1];
        $this.$boundingYs.data[2] = ($y + var$4 | 0) - 1 | 0;
        $this.$boundingXs.data[3] = $x;
        $this.$boundingYs.data[3] = $this.$boundingYs.data[2];
    }
},
g_Actor_setData = ($this, $o) => {
    $this.$data = $o;
},
g_Actor_getData = $this => {
    return $this.$data;
},
g_Actor_toPixel = ($this, $x) => {
    let $aWorld;
    $aWorld = $this.$getActiveWorld();
    if ($aWorld === null)
        $rt_throw(jl_IllegalStateException__init_0($rt_s(2)));
    return $rt_imul($x, $aWorld.$getCellSize()) + ($aWorld.$getCellSize() / 2 | 0) | 0;
},
g_Actor_getClassImage = $this => {
    let $clazz, $image, var$3, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$image = $thread.pop();$clazz = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $clazz = jl_Object_getClass($this);
        while (true) {
            if ($clazz === null) {
                g_Actor_$callClinit();
                return g_Actor_greenfootImage;
            }
            $image = null;
            try {
                $ptr = 1;
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
            if (var$3 !== null)
                break;
            $clazz = jl_Class_getSuperclass($clazz);
        }
        return var$3;
    case 1:
        a: {
            try {
                $tmp = $this.$getImage($clazz);
                if ($rt_suspending()) {
                    break main;
                }
                var$3 = $tmp;
                $image = var$3;
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
        }
        while (var$3 === null) {
            $clazz = jl_Class_getSuperclass($clazz);
            if ($clazz === null) {
                g_Actor_$callClinit();
                return g_Actor_greenfootImage;
            }
            $image = null;
            try {
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
        }
        return var$3;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $clazz, $image, var$3, $ptr);
},
g_Actor_sizeChanged = $this => {
    if ($this.$world !== null)
        $this.$world.$updateObjectSize($this);
},
g_Actor_locationChanged = ($this, $oldX, $oldY) => {
    if ($this.$world !== null)
        $this.$world.$updateObjectLocation($this, $oldX, $oldY);
},
g_Actor_failIfNotInWorld = $this => {
    if ($this.$world !== null)
        return;
    $rt_throw(jl_IllegalStateException__init_0($rt_s(3)));
},
g_Actor_getRotatedCorners = ($this, $xs, $ys, $cellSize) => {
    let var$4, var$5, $width, $height, $rotR, $sinR, $cosR, var$11, var$12, $xc, $yc, $i, $nx, $ny;
    var$4 = $ys.data;
    var$5 = $xs.data;
    $width = $this.$image0.$getWidth();
    $height = $this.$image0.$getHeight();
    var$5[0] = ( -$width | 0) / 2 | 0;
    var$5[1] = (var$5[0] + $width | 0) - 1 | 0;
    var$5[2] = var$5[1];
    var$5[3] = var$5[0];
    var$4[0] = ( -$height | 0) / 2 | 0;
    var$4[1] = var$4[0];
    var$4[2] = (var$4[1] + $height | 0) - 1 | 0;
    var$4[3] = var$4[2];
    $rotR = jl_Math_toRadians($this.$rotation);
    $sinR = jl_Math_sin($rotR);
    $cosR = jl_Math_cos($rotR);
    var$11 = $rt_imul($cellSize, $this.$x);
    var$12 = $cellSize / 2.0;
    $xc = var$11 + var$12;
    $yc = $rt_imul($cellSize, $this.$y) + var$12;
    $i = 0;
    while ($i < 4) {
        $nx = var$5[$i] * $cosR - var$4[$i] * $sinR + $xc | 0;
        $ny = var$4[$i] * $cosR + var$5[$i] * $sinR + $yc | 0;
        var$5[$i] = $nx;
        var$4[$i] = $ny;
        $i = $i + 1 | 0;
    }
},
g_Actor_checkOutside = ($myX, $myY, $otherX, $otherY) => {
    let $v, var$6, var$7, $v_0, $v1, $edgeX, $edgeY, $reX, $e, var$14, $scalar;
    g_Actor_$callClinit();
    $v = 0;
    while ($v < 4) {
        var$6 = $myY.data;
        var$7 = $myX.data;
        $v_0 = $v + 1 | 0;
        $v1 = $v_0 & 3;
        $edgeX = var$7[$v] - var$7[$v1] | 0;
        $edgeY = var$6[$v] - var$6[$v1] | 0;
        $reX =  -$edgeY | 0;
        if (!(!$reX && !$edgeX)) {
            $e = 0;
            while (true) {
                if ($e >= 4)
                    return 1;
                var$14 = $otherY.data;
                $scalar = $rt_imul($reX, $otherX.data[$e] - var$7[$v1] | 0) + $rt_imul($edgeX, var$14[$e] - var$6[$v1] | 0) | 0;
                if ($scalar < 0)
                    break;
                $e = $e + 1 | 0;
            }
        }
        $v = $v_0;
    }
    return 0;
},
g_Actor_intersects = ($this, $other) => {
    let $cellSize, var$3, var$4, $thisBounds, $otherBounds, $myX, $myY, $otherX, $otherY;
    if ($this.$image0 === null) {
        if ($other.$image0 !== null) {
            $cellSize = $this.$world.$getCellSize();
            var$3 = $rt_imul($this.$x, $cellSize);
            var$4 = $cellSize / 2 | 0;
            return $other.$containsPoint(var$3 + var$4 | 0, $rt_imul($this.$y, $cellSize) + var$4 | 0);
        }
        return $this.$x == $other.$x && $this.$y == $other.$y ? 1 : 0;
    }
    if ($other.$image0 === null) {
        $cellSize = $this.$world.$getCellSize();
        var$3 = $rt_imul($other.$x, $cellSize);
        var$4 = $cellSize / 2 | 0;
        return $this.$containsPoint(var$3 + var$4 | 0, $rt_imul($other.$y, $cellSize) + var$4 | 0);
    }
    $thisBounds = $this.$getBoundingRect();
    $otherBounds = $other.$getBoundingRect();
    if (!$this.$rotation && !$other.$rotation)
        return gci_Rect_intersects($thisBounds, $otherBounds);
    if (!gci_Rect_intersects($thisBounds, $otherBounds))
        return 0;
    $myX = $this.$boundingXs;
    $myY = $this.$boundingYs;
    $otherX = $other.$boundingXs;
    $otherY = $other.$boundingYs;
    if (g_Actor_checkOutside($myX, $myY, $otherX, $otherY))
        return 0;
    if (!g_Actor_checkOutside($otherX, $otherY, $myX, $myY))
        return 1;
    return 0;
},
g_Actor_getObjectsInRange = ($this, $radius, $cls) => {
    let $inRange;
    g_Actor_failIfNotInWorld($this);
    $inRange = $this.$world.$getObjectsInRange($this.$x, $this.$y, $radius, $cls);
    $inRange.$remove($this);
    return $inRange;
},
g_Actor_getOneIntersectingObject = ($this, $cls) => {
    g_Actor_failIfNotInWorld($this);
    return $this.$world.$getOneIntersectingObject($this, $cls);
},
g_Actor_isTouching = ($this, $cls) => {
    g_Actor_failIfNotInWorld($this);
    return $this.$getOneIntersectingObject0($cls) === null ? 0 : 1;
},
g_Actor_removeTouching = ($this, $cls) => {
    let $a;
    g_Actor_failIfNotInWorld($this);
    $a = $this.$getOneIntersectingObject0($cls);
    if ($a !== null)
        $this.$world.$removeObject($a);
},
g_Actor_containsPoint = ($this, $px, $py) => {
    let $v, $v_0, $v1, $edgeX, $edgeY, $reX, $scalar, var$10, var$11;
    g_Actor_failIfNotInWorld($this);
    if ($this.$image0 === null)
        return 0;
    if ($this.$boundingRect === null)
        g_Actor_calcBounds($this);
    if ($this.$rotation && $this.$rotation != 90 && $this.$rotation != 270) {
        $v = 0;
        while ($v < 4) {
            $v_0 = $v + 1 | 0;
            $v1 = $v_0 & 3;
            $edgeX = $this.$boundingXs.data[$v] - $this.$boundingXs.data[$v1] | 0;
            $edgeY = $this.$boundingYs.data[$v] - $this.$boundingYs.data[$v1] | 0;
            $reX =  -$edgeY | 0;
            if (!(!$reX && !$edgeX)) {
                $scalar = $rt_imul($reX, $px - $this.$boundingXs.data[$v1] | 0) + $rt_imul($edgeX, $py - $this.$boundingYs.data[$v1] | 0) | 0;
                if ($scalar >= 0)
                    return 0;
            }
            $v = $v_0;
        }
        return 1;
    }
    a: {
        if ($px >= gci_Rect_getX($this.$boundingRect) && $px < gci_Rect_getRight($this.$boundingRect)) {
            var$10 = $this.$boundingRect;
            if ($py >= gci_Rect_getY(var$10) && $py < gci_Rect_getTop($this.$boundingRect)) {
                var$11 = 1;
                break a;
            }
        }
        var$11 = 0;
    }
    return var$11;
},
g_Actor_getSequenceNumber = $this => {
    return $this.$mySequenceNumber;
},
g_Actor_getSleepingFor = $this => {
    return $this.$sleepingFor;
},
g_Actor_setSleepingFor = ($this, $sleepingFor) => {
    $this.$sleepingFor = $sleepingFor;
},
g_Actor_getLastPaintSeqNum = $this => {
    return $this.$lastPaintSequenceNumber;
},
g_Actor_setLastPaintSeqNum = ($this, $num) => {
    $this.$lastPaintSequenceNumber = $num;
},
g_Actor_setDelegate = $d => {
    g_Actor_$callClinit();
    g_Actor_delegate = $d;
},
g_Actor_getDelegate = () => {
    g_Actor_$callClinit();
    return g_Actor_delegate;
},
g_Actor_getImage = ($this, $clazz) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$clazz = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_Actor_$callClinit();
        var$2 = g_Actor_delegate;
        var$3 = jl_Class_getName($clazz);
        $ptr = 1;
    case 1:
        $tmp = var$2.$getImage0(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        return var$2;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $clazz, var$2, var$3, $ptr);
},
g_Actor_getActiveWorld = $this => {
    let $handler;
    if ($this.$world !== null)
        return $this.$world;
    $handler = gc_WorldHandler_getInstance();
    if ($handler === null)
        return null;
    return $handler.$getWorld();
},
g_Actor__clinit_ = () => {
    g_Actor_sequenceNumber = 0;
};
let Overlay = $rt_classWithoutFields(g_Actor),
Overlay__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Overlay__init_0 = () => {
    let var_0 = new Overlay();
    Overlay__init_(var_0);
    return var_0;
},
ZoneTroopsPlace = $rt_classWithoutFields(Overlay),
ZoneTroopsPlace__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        ($this.$getImage1()).$setTransparency(1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ZoneTroopsPlace__init_0 = () => {
    let var_0 = new ZoneTroopsPlace();
    ZoneTroopsPlace__init_(var_0);
    return var_0;
},
ZoneTroopsPlaceStart = $rt_classWithoutFields(ZoneTroopsPlace),
ZoneTroopsPlaceStart__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        ZoneTroopsPlace__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ZoneTroopsPlaceStart__init_0 = () => {
    let var_0 = new ZoneTroopsPlaceStart();
    ZoneTroopsPlaceStart__init_(var_0);
    return var_0;
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
    a.$stackTrace = null;
}
let jl_Throwable__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_2 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_1 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_ensureStackTrace = $this => {
    return;
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getLocalizedMessage = $this => {
    return $this.$getMessage();
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Throwable_printStackTrace = $this => {
    $this.$printStackTrace0(jl_System_err());
},
jl_Throwable_printStackTrace0 = ($this, $stream) => {
    let $message, var$3, var$4, var$5, var$6, $element;
    $stream.$print(jl_Class_getName(jl_Object_getClass($this)));
    $message = $this.$getLocalizedMessage();
    if ($message !== null) {
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(4)), $message);
        $stream.$print(jl_StringBuilder_toString(var$3));
    }
    a: {
        $stream.$println0();
        jl_Throwable_ensureStackTrace($this);
        if ($this.$stackTrace !== null) {
            var$4 = $this.$stackTrace.data;
            var$5 = var$4.length;
            var$6 = 0;
            while (true) {
                if (var$6 >= var$5)
                    break a;
                $element = var$4[var$6];
                $stream.$print($rt_s(5));
                $stream.$println1($element);
                var$6 = var$6 + 1 | 0;
            }
        }
    }
    if ($this.$cause !== null && $this.$cause !== $this) {
        $stream.$print($rt_s(6));
        $this.$cause.$printStackTrace0($stream);
    }
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_Exception__init_0 = ($this, $message) => {
    jl_Throwable__init_0($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_0(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
gp_GreenfootUtilDelegate = $rt_classWithoutFields(0),
gj_GreenfootUtilJsDelegate = $rt_classWithoutFields(),
gj_GreenfootUtilJsDelegate__init_ = $this => {
    jl_Object__init_($this);
},
gj_GreenfootUtilJsDelegate__init_0 = () => {
    let var_0 = new gj_GreenfootUtilJsDelegate();
    gj_GreenfootUtilJsDelegate__init_(var_0);
    return var_0;
},
gj_GreenfootUtilJsDelegate_getGreenfootLogoPath = $this => {
    return $rt_s(7);
},
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_InputStream = $rt_classWithoutFields(),
ji_InputStream__init_ = $this => {
    jl_Object__init_($this);
},
ji_InputStream_read = ($this, $b) => {
    return $this.$read($b, 0, $b.data.length);
};
function ji_FilterInputStream() {
    ji_InputStream.call(this);
    this.$in = null;
}
let ji_FilterInputStream__init_ = ($this, $in) => {
    ji_InputStream__init_($this);
    $this.$in = $in;
},
ji_FilterInputStream__init_0 = var_0 => {
    let var_1 = new ji_FilterInputStream();
    ji_FilterInputStream__init_(var_1, var_0);
    return var_1;
};
function ji_BufferedInputStream() {
    let a = this; ji_FilterInputStream.call(a);
    a.$buf = null;
    a.$count0 = 0;
    a.$marklimit = 0;
    a.$markpos = 0;
    a.$pos = 0;
}
let ji_BufferedInputStream__init_ = ($this, $in) => {
    ji_FilterInputStream__init_($this, $in);
    $this.$markpos = (-1);
    $this.$buf = $rt_createByteArray(8192);
},
ji_BufferedInputStream__init_0 = var_0 => {
    let var_1 = new ji_BufferedInputStream();
    ji_BufferedInputStream__init_(var_1, var_0);
    return var_1;
},
ji_BufferedInputStream_fillbuf = ($this, $localIn, $localBuf) => {
    let var$3, var$4, var$5, $newLength, $newbuf, $bytesread, $result;
    if ($this.$markpos != (-1) && ($this.$pos - $this.$markpos | 0) < $this.$marklimit) {
        a: {
            if (!$this.$markpos) {
                var$3 = $localBuf.data;
                var$4 = $this.$marklimit;
                var$5 = var$3.length;
                if (var$4 > var$5) {
                    $newLength = var$5 * 2 | 0;
                    if ($newLength > $this.$marklimit)
                        $newLength = $this.$marklimit;
                    $newbuf = $rt_createByteArray($newLength);
                    jl_System_fastArraycopy($localBuf, 0, $newbuf, 0, var$5);
                    $this.$buf = $newbuf;
                    $localBuf = $this.$buf;
                    break a;
                }
            }
            if ($this.$markpos > 0) {
                var$3 = $localBuf.data;
                jl_System_fastArraycopy($localBuf, $this.$markpos, $localBuf, 0, var$3.length - $this.$markpos | 0);
            }
        }
        var$3 = $localBuf.data;
        $this.$pos = $this.$pos - $this.$markpos | 0;
        $this.$count0 = 0;
        $this.$markpos = 0;
        $bytesread = $localIn.$read($localBuf, $this.$pos, var$3.length - $this.$pos | 0);
        $this.$count0 = $bytesread <= 0 ? $this.$pos : $this.$pos + $bytesread | 0;
        return $bytesread;
    }
    $result = $localIn.$read0($localBuf);
    if ($result > 0) {
        $this.$markpos = (-1);
        $this.$pos = 0;
        $this.$count0 = $result;
    }
    return $result;
},
ji_BufferedInputStream_read = $this => {
    let $localBuf, $localIn, var$3, var$4;
    jl_Object_monitorEnterSync($this);
    try {
        $localBuf = $this.$buf;
        $localIn = $this.$in;
        if ($localBuf !== null && $localIn !== null) {
            if ($this.$pos >= $this.$count0 && ji_BufferedInputStream_fillbuf($this, $localIn, $localBuf) == (-1))
                return (-1);
            if ($localBuf !== $this.$buf) {
                $localBuf = $this.$buf;
                if ($localBuf === null)
                    $rt_throw(ji_IOException__init_($rt_s(8)));
            }
            if (($this.$count0 - $this.$pos | 0) <= 0)
                return (-1);
            var$3 = $localBuf.data;
            var$4 = $this.$pos;
            $this.$pos = var$4 + 1 | 0;
            return var$3[var$4] & 255;
        }
        $rt_throw(ji_IOException__init_($rt_s(8)));
    } finally {
        jl_Object_monitorExitSync($this);
    }
};
function g_World() {
    let a = this; jl_Object.call(a);
    a.$collisionChecker0 = null;
    a.$objectsDisordered = null;
    a.$objectsInPaintOrder = null;
    a.$objectsInActOrder = null;
    a.$textLabels = null;
    a.$cellSize0 = 0;
    a.$width0 = 0;
    a.$height0 = 0;
    a.$backgroundImage = null;
    a.$backgroundIsClassImage = 0;
    a.$isBounded0 = 0;
}
let g_World_DEFAULT_BACKGROUND_COLOR = null,
g_World_$callClinit = () => {
    g_World_$callClinit = $rt_eraseClinit(g_World);
    g_World__clinit_();
},
g_World__init_ = ($this, $worldWidth, $worldHeight, $cellSize) => {
    let var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();$cellSize = $thread.pop();$worldHeight = $thread.pop();$worldWidth = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_World_$callClinit();
        var$4 = 1;
        $ptr = 1;
    case 1:
        g_World__init_0($this, $worldWidth, $worldHeight, $cellSize, var$4);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $worldWidth, $worldHeight, $cellSize, var$4, $ptr);
},
g_World__init_0 = ($this, $worldWidth, $worldHeight, $cellSize, $bounded) => {
    let var$5, $wHandler, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$wHandler = $thread.pop();var$5 = $thread.pop();$bounded = $thread.pop();$cellSize = $thread.pop();$worldHeight = $thread.pop();$worldWidth = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_World_$callClinit();
        jl_Object__init_($this);
        $this.$collisionChecker0 = gc_ColManager__init_0();
        $this.$objectsDisordered = g_TreeActorSet__init_0();
        $this.$textLabels = ju_ArrayList__init_0();
        $this.$cellSize0 = 1;
        $this.$backgroundIsClassImage = 1;
        g_World_initialize($this, $worldWidth, $worldHeight, $cellSize);
        $this.$isBounded0 = $bounded;
        $this.$backgroundIsClassImage = 1;
        $ptr = 1;
    case 1:
        $tmp = g_World_getClassImage($this);
        if ($rt_suspending()) {
            break main;
        }
        var$5 = $tmp;
        g_World_setBackground($this, var$5);
        $wHandler = gc_WorldHandler_getInstance();
        if ($wHandler !== null)
            $wHandler.$setInitialisingWorld($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $worldWidth, $worldHeight, $cellSize, $bounded, var$5, $wHandler, $ptr);
},
g_World_setBackground = ($this, $image) => {
    let $imgWidth, $imgHeight, $worldWidth, $worldHeight, $tile, $x, $y;
    if ($image === null) {
        $this.$backgroundIsClassImage = 0;
        $this.$backgroundImage = null;
    } else {
        $imgWidth = $image.$getWidth();
        $imgHeight = $image.$getHeight();
        $worldWidth = $this.$getWidthInPixels();
        $worldHeight = $this.$getHeightInPixels();
        $tile = $imgWidth >= $worldWidth && $imgHeight >= $worldHeight ? 0 : 1;
        if (!$tile)
            $this.$backgroundImage = $image;
        else {
            $this.$backgroundIsClassImage = 0;
            $this.$backgroundImage = g_GreenfootImage__init_0($worldWidth, $worldHeight);
            $this.$backgroundImage.$setColor(g_World_DEFAULT_BACKGROUND_COLOR);
            $this.$backgroundImage.$fill();
            $x = 0;
            while ($x < $worldWidth) {
                $y = 0;
                while ($y < $worldHeight) {
                    $this.$backgroundImage.$drawImage($image, $x, $y);
                    $y = $y + $imgHeight | 0;
                }
                $x = $x + $imgWidth | 0;
            }
        }
    }
},
g_World_getBackground = $this => {
    if ($this.$backgroundImage === null) {
        $this.$backgroundImage = g_GreenfootImage__init_0($this.$getWidthInPixels(), $this.$getHeightInPixels());
        $this.$backgroundImage.$setColor(g_World_DEFAULT_BACKGROUND_COLOR);
        $this.$backgroundImage.$fill();
        $this.$backgroundIsClassImage = 0;
    } else if ($this.$backgroundIsClassImage) {
        $this.$backgroundImage = $this.$backgroundImage.$getCopyOnWriteClone();
        $this.$backgroundIsClassImage = 0;
    }
    return $this.$backgroundImage;
},
g_World_getWidth = $this => {
    return $this.$width0;
},
g_World_getHeight = $this => {
    return $this.$height0;
},
g_World_getCellSize = $this => {
    return $this.$cellSize0;
},
g_World_setPaintOrder = ($this, $classes) => {
    let var$2;
    if ($classes === null) {
        if ($this.$objectsInPaintOrder === $this.$objectsDisordered) {
            if ($this.$objectsInActOrder !== null)
                $this.$objectsDisordered = $this.$objectsInActOrder;
            else {
                var$2 = $rt_createArray(jl_Class, 0);
                $this.$objectsDisordered.$setClassOrder(1, var$2);
            }
        }
        $this.$objectsInPaintOrder = null;
        return;
    }
    if ($this.$objectsInPaintOrder === null) {
        if ($this.$objectsInActOrder === $this.$objectsDisordered) {
            $this.$objectsInPaintOrder = g_TreeActorSet__init_0();
            $this.$objectsInPaintOrder.$setClassOrder(1, $classes);
            $this.$objectsInPaintOrder.$addAll($this.$objectsDisordered);
            return;
        }
        $this.$objectsInPaintOrder = $this.$objectsDisordered;
    }
    $this.$objectsInPaintOrder.$setClassOrder(1, $classes);
},
g_World_addObject = ($this, $object, $x, $y) => {
    let $whInstance;
    if ($object.$world !== null) {
        if ($object.$world === $this)
            return;
        $object.$world.$removeObject($object);
    }
    $this.$objectsDisordered.$add($object);
    g_World_addInPaintOrder($this, $object);
    g_World_addInActOrder($this, $object);
    $object.$addToWorld($x, $y, $this);
    $this.$collisionChecker0.$addObject($object);
    $object.$addedToWorld($this);
    $whInstance = gc_WorldHandler_getInstance();
    if ($whInstance !== null)
        (gc_WorldHandler_getInstance()).$objectAddedToWorld($object);
},
g_World_removeObject = ($this, $object) => {
    if ($object !== null && $object.$world === $this) {
        $this.$objectsDisordered.$remove0($object);
        $this.$collisionChecker0.$removeObject($object);
        if ($this.$objectsDisordered !== $this.$objectsInActOrder && $this.$objectsInActOrder !== null)
            $this.$objectsInActOrder.$remove0($object);
        else if ($this.$objectsDisordered !== $this.$objectsInPaintOrder && $this.$objectsInPaintOrder !== null)
            $this.$objectsInPaintOrder.$remove0($object);
        $object.$setWorld(null);
        return;
    }
},
g_World_removeObjects = ($this, $objects) => {
    let $iter, $actor;
    $iter = $objects.$iterator();
    while ($iter.$hasNext()) {
        $actor = $iter.$next();
        $this.$removeObject($actor);
    }
},
g_World_getObjects = ($this, $cls) => {
    let $result, $i, $actor;
    $result = ju_ArrayList__init_0();
    $i = $this.$objectsDisordered.$iterator();
    while ($i.$hasNext()) {
        $actor = $i.$next();
        if (!($cls !== null && !jl_Class_isInstance($cls, $actor)))
            $result.$add0($actor);
    }
    return $result;
},
g_World_act = $this => {
    return;
},
g_World_started = $this => {
    return;
},
g_World_stopped = $this => {
    return;
},
g_World_getObjectsAt = ($this, $x, $y, $cls) => {
    return $this.$collisionChecker0.$getObjectsAt($x, $y, $cls);
},
g_World_showText = ($this, $text, $x, $y) => {
    let $i, $label;
    $i = $this.$textLabels.$iterator();
    a: {
        while (true) {
            if (!$i.$hasNext())
                break a;
            $label = $i.$next();
            if ($label.$getX() == $x && $label.$getY() == $y)
                break;
        }
        if (($label.$getText()).$equals($text))
            return;
        $i.$remove1();
    }
    if ($text !== null && $text.$length())
        $this.$textLabels.$add0(gc_TextLabel__init_0($text, $x, $y));
},
g_World_isBounded = $this => {
    return $this.$isBounded0;
},
g_World_getObjectsInRange = ($this, $x, $y, $r, $cls) => {
    return $this.$collisionChecker0.$getObjectsInRange($x, $y, $r, $cls);
},
g_World_getHeightInPixels = $this => {
    return $rt_imul($this.$height0, $this.$cellSize0);
},
g_World_getWidthInPixels = $this => {
    return $rt_imul($this.$width0, $this.$cellSize0);
},
g_World_toCellFloor = ($this, $pixel) => {
    return jl_Math_floor($pixel / $this.$cellSize0) | 0;
},
g_World_getObjectsAtPixel = ($this, $x, $y) => {
    let $result, $objects, var$5, $actor, $bounds;
    $result = ju_LinkedList__init_();
    $objects = $this.$getObjectsListInPaintOrder();
    var$5 = $objects.$iterator();
    while (var$5.$hasNext()) {
        $actor = var$5.$next();
        $bounds = $actor.$getBoundingRect();
        if ($x >= gci_Rect_getX($bounds) && $x <= gci_Rect_getRight($bounds) && $y >= gci_Rect_getY($bounds) && $y <= gci_Rect_getTop($bounds) && $actor.$containsPoint($x, $y))
            $result.$add0($actor);
    }
    return $result;
},
g_World_updateObjectLocation = ($this, $object, $oldX, $oldY) => {
    $this.$collisionChecker0.$updateObjectLocation($object, $oldX, $oldY);
},
g_World_updateObjectSize = ($this, $object) => {
    $this.$collisionChecker0.$updateObjectSize($object);
},
g_World_startSequence = $this => {
    $this.$collisionChecker0.$startSequence();
},
g_World_getOneIntersectingObject = ($this, $object, $cls) => {
    return $this.$collisionChecker0.$getOneIntersectingObject($object, $cls);
},
g_World_getObjectsListInPaintOrder = $this => {
    if ($this.$objectsInPaintOrder === null)
        return $this.$objectsDisordered;
    return $this.$objectsInPaintOrder;
},
g_World_getObjectsListInActOrder = $this => {
    if ($this.$objectsInActOrder === null)
        return $this.$objectsDisordered;
    return $this.$objectsInActOrder;
},
g_World_initialize = ($this, $width, $height, $cellSize) => {
    $this.$width0 = $width;
    $this.$height0 = $height;
    $this.$cellSize0 = $cellSize;
    $this.$collisionChecker0.$initialize0($width, $height, $cellSize, 0);
},
g_World_getClassImage = $this => {
    let $clazz, $image, var$3, var$4, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$image = $thread.pop();$clazz = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $clazz = jl_Object_getClass($this);
        while (true) {
            if ($clazz === null)
                return null;
            $image = null;
            try {
                var$3 = g_Actor_getDelegate();
                var$4 = jl_Class_getName($clazz);
                $ptr = 1;
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
            if (var$3 !== null)
                break;
            $clazz = jl_Class_getSuperclass($clazz);
        }
        return var$3;
    case 1:
        a: {
            try {
                $tmp = var$3.$getImage0(var$4);
                if ($rt_suspending()) {
                    break main;
                }
                var$3 = $tmp;
                $image = var$3;
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
        }
        while (var$3 === null) {
            $clazz = jl_Class_getSuperclass($clazz);
            if ($clazz === null)
                return null;
            $image = null;
            try {
                var$3 = g_Actor_getDelegate();
                var$4 = jl_Class_getName($clazz);
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                } else {
                    throw $$e;
                }
            }
            var$3 = $image;
        }
        return var$3;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $clazz, $image, var$3, var$4, $ptr);
},
g_World_addInActOrder = ($this, $object) => {
    if ($this.$objectsInActOrder !== null)
        $this.$objectsInActOrder.$add($object);
},
g_World_addInPaintOrder = ($this, $object) => {
    if ($this.$objectsInPaintOrder !== null)
        $this.$objectsInPaintOrder.$add($object);
},
g_World__clinit_ = () => {
    g_Color_$callClinit();
    g_World_DEFAULT_BACKGROUND_COLOR = g_Color_WHITE;
},
ScreenMainWorld = $rt_classWithoutFields(g_World),
ScreenMainWorld__init_ = $this => {
    let var$1, var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 1000;
        var$2 = 600;
        var$3 = 1;
        $ptr = 1;
    case 1:
        g_World__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$4 = new Music;
        $ptr = 2;
    case 2:
        Music__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 0, 0);
        var$4 = new MenuScreenMainText;
        $ptr = 3;
    case 3:
        MenuScreenMainText__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 500, 500);
        var$4 = new MenuScreenMainLogo;
        $ptr = 4;
    case 4:
        MenuScreenMainLogo__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 500, 350);
        g_Greenfoot_start();
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, $ptr);
},
ScreenMainWorld__init_0 = () => {
    let var_0 = new ScreenMainWorld();
    ScreenMainWorld__init_(var_0);
    return var_0;
},
ScreenMainWorld_act = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!g_Greenfoot_mouseClicked(null))
            return;
        var$1 = new DifficultyMenuWorld;
        $ptr = 1;
    case 1:
        DifficultyMenuWorld__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        g_Greenfoot_setWorld(var$1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
ju_Enumeration = $rt_classWithoutFields(0);
function Troop() {
    let a = this; g_Actor.call(a);
    a.$hp0 = 0;
    a.$attack1 = 0;
    a.$range = 0;
    a.$speed = 0;
    a.$baseSpeed = 0;
    a.$timeSpeed = 0;
    a.$speedSpeed = 0;
    a.$moveAtMaxSpeed = 0;
    a.$spriteTime0 = 0;
    a.$attackTime = 0;
    a.$attackSpeed = 0;
    a.$imageNumber = 0;
    a.$troopName = null;
    a.$target = null;
    a.$specialDeath = 0;
    a.$health = null;
    a.$random0 = 0;
    a.$oneDirection = 0;
    a.$isBattlingTroop = 0;
    a.$isBattlingTower = 0;
    a.$distance = 0;
}
let Troop__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$random0 = g_Greenfoot_getRandomNumber(20) - 10 | 0;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Troop__init_0 = () => {
    let var_0 = new Troop();
    Troop__init_(var_0);
    return var_0;
},
Troop_changeSprite = $this => {
    let $sprite, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$sprite = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $sprite = ($this.$spriteTime0 - 2 | 0) / 3 | 0;
        $this.$spriteTime0 = $this.$spriteTime0 + 1 | 0;
        if (!$this.$isBattlingTroop && !$this.$isBattlingTower) {
            $ptr = 2;
            continue main;
        }
        $ptr = 1;
    case 1:
        $tmp = $this.$attackImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime0 == ($this.$attackSpeed + 1 | 0))
            $this.$spriteTime0 = 0;
        return;
    case 2:
        $tmp = $this.$moveImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime0 == ($this.$attackSpeed + 1 | 0))
            $this.$spriteTime0 = 0;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $sprite, var$2, $ptr);
},
Troop_moveImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$imageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$troopName;
        var$6 = $this.$troopName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(9)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$troopName;
        var$6 = $this.$troopName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(9)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
Troop_attackImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$imageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$troopName;
        var$6 = $this.$troopName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(9)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$troopName;
        var$6 = $this.$troopName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(9)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
Troop_movement = $this => {
    $this.$timeSpeed = $this.$timeSpeed - 1 | 0;
    if ($this.$speed < 2) {
        if (!$this.$timeSpeed) {
            $this.$move($this.$speed);
            $this.$timeSpeed = $this.$speedSpeed;
        }
    } else if (!$this.$timeSpeed && $this.$moveAtMaxSpeed > 0) {
        $this.$move(1);
        $this.$timeSpeed = $this.$speedSpeed;
        $this.$moveAtMaxSpeed = $this.$moveAtMaxSpeed - 1 | 0;
    } else if (!$this.$timeSpeed && !$this.$moveAtMaxSpeed) {
        $this.$move($this.$speed);
        $this.$timeSpeed = $this.$speedSpeed;
        $this.$moveAtMaxSpeed = 2;
    }
},
Troop_checkHealth = $this => {
    if ($this.$hp0 <= 0)
        ($this.$getWorld()).$removeObject($this);
};
function TroopEnemy() {
    let a = this; Troop.call(a);
    a.$ally = null;
    a.$tower = null;
}
let TroopEnemy__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Troop__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemy__init_0 = () => {
    let var_0 = new TroopEnemy();
    TroopEnemy__init_(var_0);
    return var_0;
},
TroopEnemy_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ($this.$getWorld()).$addObject0($this.$health, $this.$getX(), $this.$getY() - 20 | 0);
        $ptr = 1;
    case 1:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        $this.$movement();
        $ptr = 2;
    case 2:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        if ($this.$specialDeath) {
            if (!$this.$oneDirection)
                $this.$turn(180);
            else
                $this.$setRotation(180);
            return;
        }
        $ptr = 3;
    case 3:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        if (!$this.$oneDirection)
            $this.$turn(180);
        else
            $this.$setRotation(180);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemy_findEnemy = $this => {
    let var$1, $king, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$king = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$speed = $this.$baseSpeed;
        $this.$oneDirection = 1;
        $this.$distance = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TroopAlly))).$isEmpty())
            $this.$isBattlingTroop = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TroopAlly))).$isEmpty())
            $this.$isBattlingTower = 0;
        a: {
            if (!($this.$getObjectsInRange0(120, $rt_cls(TroopAlly))).$isEmpty() && !$this.$isBattlingTower && $this.$range > 30) {
                var$1 = $this.$target;
                if (var$1.$equals($rt_s(13))) {
                    if (!($this.$ally !== null && $this.$ally.$getWorld() !== null))
                        $this.$ally = ($this.$getObjectsInRange0(120, $rt_cls(TroopAlly))).$get(0);
                    $this.$turnTowards($this.$ally.$getX(), $this.$ally.$getY());
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getY() - $this.$getY() | 0), 2.0) | 0;
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getX() - $this.$getX() | 0), 2.0) | 0;
                    $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                    if ($this.$distance > $this.$range)
                        break a;
                    $this.$isBattlingTroop = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if ($this.$attackTime)
                        break a;
                    var$1 = $this.$ally;
                    $ptr = 1;
                    continue main;
                }
            }
            if (!($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$isEmpty() && !((($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$get(0)).$getY() < 300 && (($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$get(0)).$getY() > 250 && (($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$get(0)).$getX() > 100 && (($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$get(0)).$getX() < 300 && $this.$getY() > 200 && $this.$getY() < 250 && $this.$getX() > 100 && $this.$getX()
            < 300) && !$this.$isBattlingTower) {
                var$1 = $this.$target;
                if (var$1.$equals($rt_s(14))) {
                    if (!($this.$ally !== null && $this.$ally.$getWorld() !== null))
                        $this.$ally = ($this.$getObjectsInRange0(120, $rt_cls(TroopAllyGround))).$get(0);
                    $this.$turnTowards($this.$ally.$getX(), $this.$ally.$getY());
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getY() - $this.$getY() | 0), 2.0) | 0;
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getX() - $this.$getX() | 0), 2.0) | 0;
                    $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                    if ($this.$distance > $this.$range)
                        break a;
                    $this.$isBattlingTroop = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if ($this.$attackTime)
                        break a;
                    $this.$attack($this.$ally);
                    $this.$attackTime = $this.$attackSpeed;
                    break a;
                }
            }
            if (!($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$isEmpty() && !$this.$isBattlingTroop && $this.$range > 30) {
                if (!($this.$tower !== null && $this.$tower.$getWorld() !== null))
                    $this.$tower = ($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$get(0);
                $this.$turnTowards($this.$tower.$getX(), $this.$tower.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance > $this.$range)
                    break a;
                $this.$isBattlingTower = 1;
                $this.$speed = 0;
                $this.$attackTime = $this.$attackTime - 1 | 0;
                if ($this.$attackTime)
                    break a;
                else {
                    var$1 = $this.$tower;
                    $ptr = 2;
                    continue main;
                }
            }
            if (!($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$isEmpty() && !$this.$isBattlingTroop) {
                if (!($this.$tower !== null && $this.$tower.$getWorld() !== null))
                    $this.$tower = ($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$get(0);
                $this.$turnTowards($this.$tower.$getX(), $this.$tower.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance <= $this.$range) {
                    $this.$isBattlingTower = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if (!$this.$attackTime)
                        $this.$attackTower($this.$tower);
                }
            } else if ($this.$getY() < 250 && $this.$getX() <= 200 && !($this instanceof TroopEnemyAir))
                $this.$turnTowards(100 + $this.$random0 | 0, 250);
            else if ($this.$getY() < 250 && $this.$getX() > 200 && !($this instanceof TroopEnemyAir))
                $this.$turnTowards(300 + $this.$random0 | 0, 250);
            else if (!($this.$getObjectsInRange0(50, $rt_cls(TowerDestroyed))).$isEmpty() && !($this.$getObjectsInRange0(500, $rt_cls(TowerDownKing))).$isEmpty()) {
                $king = (($this.$getWorld()).$getObjects($rt_cls(TowerDownKing))).$get(0);
                $this.$turnTowards($king.$getX(), $king.$getY());
            } else
                $this.$setRotation(90);
        }
        return;
    case 1:
        $this.$createProjectile(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    case 2:
        $this.$createProjectile0(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $king, $ptr);
},
TroopEnemy_attack = ($this, $ally) => {
    $ally.$hp0 = $ally.$hp0 - $this.$attack1 | 0;
    $this.$attackTime = $this.$attackSpeed;
},
TroopEnemy_attackTower = ($this, $tower) => {
    $tower.$hp = $tower.$hp - $this.$attack1 | 0;
    $this.$attackTime = $this.$attackSpeed;
},
TroopEnemy_createProjectile = ($this, $ally) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$ally = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (jl_Object_getClass($this) === $rt_cls(TroopEnemyArcher)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileArrowEnemy;
            $ptr = 1;
            continue main;
        }
        if (jl_Object_getClass($this) === $rt_cls(TroopEnemyGoblinSpear)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileSpearEnemy;
            $ptr = 2;
            continue main;
        }
        if (jl_Object_getClass($this) !== $rt_cls(TroopEnemyDragonBaby)) {
            $this.$attackTime = $this.$attackSpeed;
            return;
        }
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballEnemy;
        $ptr = 3;
        continue main;
    case 1:
        ProjectileArrowEnemy__init_(var$3, $ally);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 2:
        ProjectileSpearEnemy__init_(var$3, $ally);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 3:
        ProjectileFireballEnemy__init_(var$3, $ally);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ally, var$2, var$3, $ptr);
},
TroopEnemy_createProjectile0 = ($this, $tower) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$tower = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (jl_Object_getClass($this) === $rt_cls(TroopEnemyArcher)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileArrowEnemy;
            $ptr = 1;
            continue main;
        }
        if (jl_Object_getClass($this) === $rt_cls(TroopEnemyGoblinSpear)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileSpearEnemy;
            $ptr = 2;
            continue main;
        }
        if (jl_Object_getClass($this) !== $rt_cls(TroopEnemyDragonBaby)) {
            $this.$attackTime = $this.$attackSpeed;
            return;
        }
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballEnemy;
        $ptr = 3;
        continue main;
    case 1:
        ProjectileArrowEnemy__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 2:
        ProjectileSpearEnemy__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 3:
        ProjectileFireballEnemy__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $tower, var$2, var$3, $ptr);
},
TroopEnemy_checkHealth = $this => {
    Troop_checkHealth($this);
},
TroopEnemy_movement = $this => {
    Troop_movement($this);
},
TroopEnemy_attackImages = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        $tmp = Troop_attackImages($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = $tmp;
        return var$1;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
TroopEnemy_moveImages = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        $tmp = Troop_moveImages($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = $tmp;
        return var$1;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
TroopEnemy_changeSprite = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Troop_changeSprite($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemyGround = $rt_classWithoutFields(TroopEnemy),
TroopEnemyGround__init_ = ($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime) => {
    let var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();$attackTime = $thread.pop();$timeSpeed = $thread.pop();$speed = $thread.pop();$range = $thread.pop();$attack = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp0 = $hp;
        $this.$attack1 = $attack;
        $this.$range = $range;
        $this.$speed = $speed;
        $this.$baseSpeed = $speed;
        $this.$timeSpeed = $timeSpeed;
        $this.$speedSpeed = $timeSpeed;
        $this.$spriteTime0 = $attackTime;
        $this.$attackTime = $attackTime;
        $this.$attackSpeed = $attackTime;
        var$7 = new HealthBar;
        var$8 = 0;
        $ptr = 2;
    case 2:
        HealthBar__init_(var$7, $this, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health = var$7;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime, var$7, var$8, $ptr);
},
TroopEnemyGround__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new TroopEnemyGround();
    TroopEnemyGround__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
TroopEnemyPekkaMini = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyPekkaMini__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 80;
        var$2 = 30;
        var$3 = 30;
        var$4 = 1;
        var$5 = 1;
        var$6 = 58;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 19;
        $this.$troopName = $rt_s(15);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyPekkaMini__init_0 = () => {
    let var_0 = new TroopEnemyPekkaMini();
    TroopEnemyPekkaMini__init_(var_0);
    return var_0;
},
TroopEnemyPekkaMini_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
};
function Spell() {
    let a = this; g_Actor.call(a);
    a.$damage0 = 0;
    a.$radius = 0;
    a.$directionX = 0;
    a.$directionY = 0;
    a.$spriteTime = 0;
    a.$spriteSpeed = 0;
    a.$moveImageNumber = 0;
    a.$attackImageNumber = 0;
    a.$isBattling = 0;
    a.$isUsed = 0;
    a.$spellName = null;
    a.$type = null;
    a.$time1 = 0;
}
let Spell__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Spell__init_0 = () => {
    let var_0 = new Spell();
    Spell__init_(var_0);
    return var_0;
},
SpellAlly = $rt_classWithoutFields(Spell),
SpellAlly__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Spell__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
SpellAlly__init_0 = () => {
    let var_0 = new SpellAlly();
    SpellAlly__init_(var_0);
    return var_0;
},
SpellAlly_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!$this.$type.$equals($rt_s(16))) {
            if (!$this.$type.$equals($rt_s(17)))
                return;
            $this.$time1 = $this.$time1 - 1 | 0;
            $ptr = 1;
            continue main;
        }
        $this.$turnTowards($this.$directionX, $this.$directionY);
        $this.$move(5);
        if (jl_Math_abs($this.$getY() - $this.$directionY | 0) < 5 && jl_Math_abs($this.$getX() - $this.$directionX | 0) < 5 && !$this.$isUsed) {
            $this.$spriteTime = 0;
            $this.$isBattling = 1;
            $this.$isUsed = 1;
        }
        $ptr = 2;
        continue main;
    case 1:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        if (!($this.$time1 % 20 | 0))
            $this.$doZoneDamage();
        if (!$this.$time1)
            ($this.$getWorld()).$removeObject($this);
        return;
    case 2:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        $this.$setRotation(0);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
SpellAlly_findEnemy = $this => {
    let var$1, $enemy, $tower;
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TroopEnemy))).$iterator();
    while (var$1.$hasNext()) {
        $enemy = var$1.$next();
        $enemy.$hp0 = $enemy.$hp0 - $this.$damage0 | 0;
    }
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TowerEnemy))).$iterator();
    while (var$1.$hasNext()) {
        $tower = var$1.$next();
        $tower.$hp = $tower.$hp - (($this.$damage0 * 2 | 0) / 3 | 0) | 0;
    }
},
SpellAlly_doZoneDamage = $this => {
    let var$1, $enemy, $tower;
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TroopEnemy))).$iterator();
    while (var$1.$hasNext()) {
        $enemy = var$1.$next();
        $enemy.$hp0 = $enemy.$hp0 - ($this.$damage0 * 2 | 0) | 0;
    }
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TowerEnemy))).$iterator();
    while (var$1.$hasNext()) {
        $tower = var$1.$next();
        $tower.$hp = $tower.$hp - $this.$damage0 | 0;
    }
},
SpellAlly_changeSprite = $this => {
    let $sprite, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$sprite = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$type.$equals($rt_s(16))) {
            $sprite = ($this.$spriteTime - 2 | 0) / 3 | 0;
            $this.$spriteTime = $this.$spriteTime + 1 | 0;
            if ($this.$isBattling) {
                $ptr = 2;
                continue main;
            }
            $ptr = 3;
            continue main;
        }
        if (!$this.$type.$equals($rt_s(17)))
            return;
        $sprite = ($this.$spriteTime - 2 | 0) / 3 | 0;
        $this.$spriteTime = $this.$spriteTime + 1 | 0;
        $ptr = 1;
    case 1:
        $tmp = $this.$attackImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        return;
    case 2:
        $tmp = $this.$attackImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        if ($this.$isBattling && $this.$spriteTime == 1)
            $this.$findEnemy();
        if ($this.$isBattling && $sprite == ($this.$attackImageNumber - 1 | 0))
            ($this.$getWorld()).$removeObject($this);
        return;
    case 3:
        $tmp = $this.$moveImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        if ($this.$isBattling && $this.$spriteTime == 1)
            $this.$findEnemy();
        if ($this.$isBattling && $sprite == ($this.$attackImageNumber - 1 | 0))
            ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $sprite, var$2, $ptr);
},
SpellAlly_moveImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$moveImageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
SpellAlly_attackImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$attackImageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
SpellAllyAir = $rt_classWithoutFields(SpellAlly),
SpellAllyAir__init_ = ($this, $damage, $radius, $spriteTime, $moveImageNumber, $attackImageNumber, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$attackImageNumber = $thread.pop();$moveImageNumber = $thread.pop();$spriteTime = $thread.pop();$radius = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage0 = $damage;
        $this.$radius = $radius;
        $this.$spriteTime = $spriteTime;
        $this.$spriteSpeed = $spriteTime;
        $this.$moveImageNumber = $moveImageNumber;
        $this.$attackImageNumber = $attackImageNumber;
        $this.$type = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $radius, $spriteTime, $moveImageNumber, $attackImageNumber, $type, $ptr);
},
SpellAllyAir__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new SpellAllyAir();
    SpellAllyAir__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
SpellAllyFireball = $rt_classWithoutFields(SpellAllyAir),
SpellAllyFireball__init_ = ($this, $x, $y) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$y = $thread.pop();$x = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$3 = 40;
        var$4 = 50;
        var$5 = 38;
        var$6 = 13;
        var$7 = 9;
        var$8 = $rt_s(16);
        $ptr = 1;
    case 1:
        SpellAllyAir__init_($this, var$3, var$4, var$5, var$6, var$7, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$spellName = $rt_s(19);
        $this.$directionX = $x;
        $this.$directionY = $y;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $x, $y, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
SpellAllyFireball__init_0 = (var_0, var_1) => {
    let var_2 = new SpellAllyFireball();
    SpellAllyFireball__init_(var_2, var_0, var_1);
    return var_2;
},
SpellAllyFireball_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
jl_Runnable = $rt_classWithoutFields(0);
function gj_MouseManager$handleTouchEvent$lambda$_11_0() {
    let a = this; jl_Object.call(a);
    a.$_0 = null;
    a.$_1 = null;
    a.$_2 = null;
}
let gj_MouseManager$handleTouchEvent$lambda$_11_0__init_ = (var$0, var$1, var$2, var$3) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
    var$0.$_1 = var$2;
    var$0.$_2 = var$3;
},
gj_MouseManager$handleTouchEvent$lambda$_11_0__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gj_MouseManager$handleTouchEvent$lambda$_11_0();
    gj_MouseManager$handleTouchEvent$lambda$_11_0__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gj_MouseManager$handleTouchEvent$lambda$_11_0_run = var$0 => {
    gj_MouseManager_lambda$handleTouchEvent$1(var$0.$_0, var$0.$_1, var$0.$_2);
};
function ClashWorld() {
    let a = this; g_World.call(a);
    a.$towerupleft = null;
    a.$towerupright = null;
    a.$towerdownleft = null;
    a.$towerdownright = null;
    a.$elixir = 0.0;
    a.$elixirSpeed = 0.0;
    a.$allyCrowns = 0;
    a.$enemyCrowns = 0;
    a.$time = 0;
    a.$enemies = 0;
    a.$cardNext0 = null;
    a.$draw0 = null;
    a.$victory = null;
    a.$defeat = null;
}
let ClashWorld_diff = 0.0,
ClashWorld_cardStart = null,
ClashWorld_$callClinit = () => {
    ClashWorld_$callClinit = $rt_eraseClinit(ClashWorld);
    ClashWorld__clinit_();
},
ClashWorld__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ClashWorld_$callClinit();
        var$1 = 400;
        var$2 = 600;
        var$3 = 1;
        $ptr = 1;
    case 1:
        g_World__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$4 = new TowerUpPrincess;
        $ptr = 2;
    case 2:
        TowerUpPrincess__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$towerupleft = var$4;
        var$4 = new TowerUpPrincess;
        $ptr = 3;
    case 3:
        TowerUpPrincess__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$towerupright = var$4;
        var$4 = new TowerDownPrincess;
        $ptr = 4;
    case 4:
        TowerDownPrincess__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$towerdownleft = var$4;
        var$4 = new TowerDownPrincess;
        $ptr = 5;
    case 5:
        TowerDownPrincess__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$towerdownright = var$4;
        $this.$elixir = 1.0;
        $this.$elixirSpeed = 0.012 * ClashWorld_diff;
        $this.$time = 5400;
        $this.$enemies = 10;
        var$4 = new EndState;
        var$1 = 0;
        $ptr = 6;
    case 6:
        EndState__init_(var$4, var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$draw0 = var$4;
        var$4 = new EndState;
        var$1 = 1;
        $ptr = 7;
    case 7:
        EndState__init_(var$4, var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$victory = var$4;
        var$4 = new EndState;
        var$1 = 2;
        $ptr = 8;
    case 8:
        EndState__init_(var$4, var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$defeat = var$4;
        var$5 = $rt_wrapArray(jl_Class, [$rt_cls(Overlay), $rt_cls(Card), $rt_cls(SpellEnemyAir), $rt_cls(SpellAllyAir), $rt_cls(HealthBar), $rt_cls(Projectile), $rt_cls(TowerAlly), $rt_cls(Troop), $rt_cls(TowerEnemy), $rt_cls(SpellEnemyGround), $rt_cls(SpellAllyGround), $rt_cls(ZoneTroopsOverlay), $rt_cls(ZoneTroopsPlace)]);
        $this.$setPaintOrder(var$5);
        var$4 = new Music;
        $ptr = 9;
    case 9:
        Music__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 0, 0);
        $ptr = 10;
    case 10:
        $this.$prepareOverlay();
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 11;
    case 11:
        $this.$prepareTowers();
        if ($rt_suspending()) {
            break main;
        }
        g_Greenfoot_start();
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, $ptr);
},
ClashWorld__init_0 = () => {
    let var_0 = new ClashWorld();
    ClashWorld__init_(var_0);
    return var_0;
},
ClashWorld_act = $this => {
    let $random, var$2, var$3, $bar, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$bar = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$random = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time = $this.$time - 1 | 0;
        if ($this.$time == 5399) {
            $this.$prepareOverlayCards();
            $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
            while (ClashWorld_cardStart.data[$random].$getWorld() !== null) {
                $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
            }
            $this.$cardNext0 = ClashWorld_cardStart.data[$random];
        }
        if ($this.$time == 1800) {
            var$2 = new DoubleElixirText;
            $ptr = 1;
            continue main;
        }
        if ($this.$time < 1) {
            $this.$time = $this.$time + 1 | 0;
            if ($this.$allyCrowns == $this.$enemyCrowns)
                $this.$addObject0($this.$draw0, 200, 300);
            else if ($this.$allyCrowns > $this.$enemyCrowns)
                $this.$addObject0($this.$victory, 200, 300);
            else if ($this.$allyCrowns < $this.$enemyCrowns)
                $this.$addObject0($this.$defeat, 200, 300);
            $this.$removeObjects($this.$getObjects($rt_cls(HealthBar)));
            $this.$removeObjects($this.$getObjects($rt_cls(Troop)));
        }
        var$3 = $this.$time / 30 | 0;
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(var$2, var$3);
        $this.$showText(jl_StringBuilder_toString(var$2), 30, 20);
        $this.$addElixir();
        if ($this.$draw0.$getWorld() === null && $this.$victory.$getWorld() === null && $this.$defeat.$getWorld() === null) {
            $ptr = 2;
            continue main;
        }
        $this.$checkCrowns();
        return;
    case 1:
        DoubleElixirText__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 200, 300);
        $this.$elixirSpeed = $this.$elixirSpeed * 2.0;
        $bar = ($this.$getObjects($rt_cls(ElixirBar))).$get(0);
        $bar.$elixirSpeed0 = $bar.$elixirSpeed0 * 2.0;
        if ($this.$time < 1) {
            $this.$time = $this.$time + 1 | 0;
            if ($this.$allyCrowns == $this.$enemyCrowns)
                $this.$addObject0($this.$draw0, 200, 300);
            else if ($this.$allyCrowns > $this.$enemyCrowns)
                $this.$addObject0($this.$victory, 200, 300);
            else if ($this.$allyCrowns < $this.$enemyCrowns)
                $this.$addObject0($this.$defeat, 200, 300);
            $this.$removeObjects($this.$getObjects($rt_cls(HealthBar)));
            $this.$removeObjects($this.$getObjects($rt_cls(Troop)));
        }
        var$3 = $this.$time / 30 | 0;
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(var$2, var$3);
        $this.$showText(jl_StringBuilder_toString(var$2), 30, 20);
        $this.$addElixir();
        if ($this.$draw0.$getWorld() === null && $this.$victory.$getWorld() === null && $this.$defeat.$getWorld() === null) {
            $ptr = 2;
            continue main;
        }
        $this.$checkCrowns();
        return;
    case 2:
        $this.$addEnemies();
        if ($rt_suspending()) {
            break main;
        }
        $this.$checkCrowns();
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $random, var$2, var$3, $bar, $ptr);
},
ClashWorld_addElixir = $this => {
    if ($this.$elixir < 10.0)
        $this.$elixir = $this.$elixir + $this.$elixirSpeed;
},
ClashWorld_addEnemies = $this => {
    let var$1, var$2, $posX, $posY, $base, var$6, var$7, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();$base = $thread.pop();$posY = $thread.pop();$posX = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 70 * $this.$enemies | 0;
        ClashWorld_$callClinit();
        if (!g_Greenfoot_getRandomNumber(var$1 / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            var$2 = new TroopEnemyKnight;
            $ptr = 1;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((70 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyArcher;
            $ptr = 2;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((50 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 5.0) {
            var$2 = new TroopEnemyGiant;
            $ptr = 4;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            var$2 = new TroopEnemyPekkaMini;
            $ptr = 5;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            var$2 = new TroopEnemyDragonBaby;
            $ptr = 6;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            a: {
                b: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break a;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break b;
                        default:
                            break a;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            c: {
                d: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break c;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break d;
                        default:
                            break c;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 1:
        TroopEnemyKnight__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = g_Greenfoot_getRandomNumber(300) + 50 | 0;
        var$7 = g_Greenfoot_getRandomNumber(150) + 50 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        $this.$elixir = $this.$elixir - 3.0;
        if (!g_Greenfoot_getRandomNumber((70 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyArcher;
            $ptr = 2;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((50 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 5.0) {
            var$2 = new TroopEnemyGiant;
            $ptr = 4;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            var$2 = new TroopEnemyPekkaMini;
            $ptr = 5;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            var$2 = new TroopEnemyDragonBaby;
            $ptr = 6;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            e: {
                a: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break e;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break a;
                        default:
                            break e;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            f: {
                c: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break f;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break c;
                        default:
                            break f;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 2:
        TroopEnemyArcher__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX - 7 | 0, $posY);
        var$2 = new TroopEnemyArcher;
        $ptr = 3;
    case 3:
        TroopEnemyArcher__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX + 7 | 0, $posY);
        $this.$elixir = $this.$elixir - 3.0;
        if (!g_Greenfoot_getRandomNumber((50 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 5.0) {
            var$2 = new TroopEnemyGiant;
            $ptr = 4;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            var$2 = new TroopEnemyPekkaMini;
            $ptr = 5;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            var$2 = new TroopEnemyDragonBaby;
            $ptr = 6;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            g: {
                e: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break g;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break e;
                        default:
                            break g;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            h: {
                f: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break h;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break f;
                        default:
                            break h;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 4:
        TroopEnemyGiant__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = g_Greenfoot_getRandomNumber(300) + 50 | 0;
        var$7 = g_Greenfoot_getRandomNumber(150) + 50 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        $this.$elixir = $this.$elixir - 5.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            var$2 = new TroopEnemyPekkaMini;
            $ptr = 5;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            var$2 = new TroopEnemyDragonBaby;
            $ptr = 6;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            i: {
                g: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break i;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break g;
                        default:
                            break i;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            j: {
                h: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break j;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break h;
                        default:
                            break j;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 5:
        TroopEnemyPekkaMini__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = g_Greenfoot_getRandomNumber(300) + 50 | 0;
        var$7 = g_Greenfoot_getRandomNumber(150) + 50 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        $this.$elixir = $this.$elixir - 4.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            var$2 = new TroopEnemyDragonBaby;
            $ptr = 6;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            k: {
                i: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break k;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break i;
                        default:
                            break k;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            b: {
                j: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break b;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break j;
                        default:
                            break b;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 6:
        TroopEnemyDragonBaby__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = g_Greenfoot_getRandomNumber(300) + 50 | 0;
        var$7 = g_Greenfoot_getRandomNumber(150) + 50 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        $this.$elixir = $this.$elixir - 4.0;
        if (!g_Greenfoot_getRandomNumber((80 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 2.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemyGoblinSpear;
            $ptr = 7;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            l: {
                k: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break l;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break k;
                        default:
                            break l;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            a: {
                b: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break a;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break b;
                        default:
                            break a;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 7:
        TroopEnemyGoblinSpear__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX, $posY + 9 | 0);
        var$2 = new TroopEnemyGoblinSpear;
        $ptr = 8;
    case 8:
        TroopEnemyGoblinSpear__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = $posX - 9 | 0;
        var$7 = $posY - 7 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        var$2 = new TroopEnemyGoblinSpear;
        $ptr = 9;
    case 9:
        TroopEnemyGoblinSpear__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX + 9 | 0, var$7);
        $this.$elixir = $this.$elixir - 2.0;
        if (!g_Greenfoot_getRandomNumber((90 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 1.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(150) + 50 | 0;
            var$2 = new TroopEnemySkeleton;
            $ptr = 10;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            m: {
                l: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break m;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break l;
                        default:
                            break m;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            e: {
                a: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break e;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break a;
                        default:
                            break e;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 10:
        TroopEnemySkeleton__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX, $posY + 9 | 0);
        var$2 = new TroopEnemySkeleton;
        $ptr = 11;
    case 11:
        TroopEnemySkeleton__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = $posX - 9 | 0;
        var$7 = $posY - 7 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        var$2 = new TroopEnemySkeleton;
        $ptr = 12;
    case 12:
        TroopEnemySkeleton__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX + 9 | 0, var$7);
        $this.$elixir = $this.$elixir - 1.0;
        if (!g_Greenfoot_getRandomNumber((20 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 8.0) {
            var$2 = new TroopEnemyGolem;
            $ptr = 13;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            n: {
                m: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break n;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break m;
                        default:
                            break n;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            g: {
                e: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break g;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break e;
                        default:
                            break g;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 13:
        TroopEnemyGolem__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        var$6 = g_Greenfoot_getRandomNumber(300) + 50 | 0;
        var$7 = g_Greenfoot_getRandomNumber(150) + 50 | 0;
        $this.$addObject0(var$2, var$6, var$7);
        $this.$elixir = $this.$elixir - 8.0;
        if (!g_Greenfoot_getRandomNumber((140 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 3.0) {
            $posX = g_Greenfoot_getRandomNumber(300) + 50 | 0;
            $posY = g_Greenfoot_getRandomNumber(50) + 150 | 0;
            $base = new TowerBaseCannon;
            $ptr = 14;
            continue main;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            o: {
                n: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break o;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break n;
                        default:
                            break o;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            i: {
                g: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break i;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break g;
                        default:
                            break i;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 14:
        TowerBaseCannon__init_($base);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0($base, $posX, $posY + 4 | 0);
        var$2 = new TowerUpCannon;
        $ptr = 15;
    case 15:
        TowerUpCannon__init_(var$2, $base);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, $posX, $posY - 5 | 0);
        $this.$elixir = $this.$elixir - 3.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            p: {
                o: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break p;
                            var$2 = new SpellEnemyFireball;
                            var$6 = 95;
                            var$7 = 370;
                            $ptr = 18;
                            continue main;
                        case 2:
                            break o;
                        default:
                            break p;
                    }
                    var$2 = new SpellEnemyFireball;
                    var$7 = 200;
                    var$6 = 405;
                    $ptr = 16;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyFireball;
                    var$6 = 305;
                    var$7 = 370;
                    $ptr = 19;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            k: {
                i: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break k;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break i;
                        default:
                            break k;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 16:
        SpellEnemyFireball__init_(var$2, var$7, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 200, 50);
        $this.$elixir = $this.$elixir - 4.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            p: {
                o: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break p;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break o;
                        default:
                            break p;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 17:
        SpellEnemyPoison__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 200, 405);
        $this.$elixir = $this.$elixir - 4.0;
        return;
    case 18:
        SpellEnemyFireball__init_(var$2, var$6, var$7);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 200, 50);
        $this.$elixir = $this.$elixir - 4.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            p: {
                o: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break p;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break o;
                        default:
                            break p;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 19:
        SpellEnemyFireball__init_(var$2, var$6, var$7);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 200, 50);
        $this.$elixir = $this.$elixir - 4.0;
        if (!g_Greenfoot_getRandomNumber((60 * $this.$enemies | 0) / ClashWorld_diff | 0) && $this.$elixir >= 4.0) {
            p: {
                o: {
                    switch (g_Greenfoot_getRandomNumber(3)) {
                        case 0:
                            break;
                        case 1:
                            if ($this.$towerdownleft.$getWorld() === null)
                                break p;
                            var$2 = new SpellEnemyPoison;
                            $ptr = 20;
                            continue main;
                        case 2:
                            break o;
                        default:
                            break p;
                    }
                    var$2 = new SpellEnemyPoison;
                    $ptr = 17;
                    continue main;
                }
                if ($this.$towerdownright.$getWorld() !== null) {
                    var$2 = new SpellEnemyPoison;
                    $ptr = 21;
                    continue main;
                }
            }
            $this.$elixir = $this.$elixir - 4.0;
        }
        return;
    case 20:
        SpellEnemyPoison__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 95, 370);
        $this.$elixir = $this.$elixir - 4.0;
        return;
    case 21:
        SpellEnemyPoison__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 305, 370);
        $this.$elixir = $this.$elixir - 4.0;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $posX, $posY, $base, var$6, var$7, $ptr);
},
ClashWorld_checkCrowns = $this => {
    if ($this.$allyCrowns == 3) {
        if ($this.$towerupleft !== null)
            $this.$towerupleft.$hp = 0;
        if ($this.$towerupright !== null)
            $this.$towerupright.$hp = 0;
        $this.$addObject0($this.$victory, 200, 300);
        $this.$removeObjects($this.$getObjects($rt_cls(HealthBar)));
        $this.$removeObjects($this.$getObjects($rt_cls(Troop)));
    }
    if ($this.$enemyCrowns == 3) {
        if ($this.$towerdownleft !== null)
            $this.$towerdownleft.$hp = 0;
        if ($this.$towerdownright !== null)
            $this.$towerdownright.$hp = 0;
        $this.$addObject0($this.$defeat, 200, 300);
        $this.$removeObjects($this.$getObjects($rt_cls(HealthBar)));
        $this.$removeObjects($this.$getObjects($rt_cls(Troop)));
    }
},
ClashWorld_prepareOverlay = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new ElixirBar;
        $ptr = 1;
    case 1:
        ElixirBar__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 63, 570);
        var$1 = new ElixirBarOverlay;
        $ptr = 2;
    case 2:
        ElixirBarOverlay__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 195, 570);
        var$1 = new ScoreOverlayUp;
        $ptr = 3;
    case 3:
        ScoreOverlayUp__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 380, 190);
        var$1 = new ScoreOverlayDown;
        $ptr = 4;
    case 4:
        ScoreOverlayDown__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 380, 315);
        var$1 = new CardNextOverlay;
        $ptr = 5;
    case 5:
        CardNextOverlay__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 345, 535);
        var$1 = new CardNext;
        $ptr = 6;
    case 6:
        CardNext__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 345, 500);
        var$1 = new ZoneTroopsOverlay;
        $ptr = 7;
    case 7:
        ZoneTroopsOverlay__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 200, 300);
        var$1 = new ZoneTroopsPlaceStart;
        $ptr = 8;
    case 8:
        ZoneTroopsPlaceStart__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 200, 360);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
ClashWorld_prepareOverlayCards = $this => {
    let $i, $random;
    $i = 0;
    while ($i < 4) {
        ClashWorld_$callClinit();
        $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
        while (ClashWorld_cardStart.data[$random].$getWorld() !== null) {
            $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
        }
        $this.$addObject0(ClashWorld_cardStart.data[$random], ($i * 70 | 0) + 50 | 0, 500);
        $i = $i + 1 | 0;
    }
},
ClashWorld_prepareTowers = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$addObject0($this.$towerdownleft, 95, 370);
        $this.$addObject0($this.$towerdownright, 305, 370);
        var$1 = new TowerDownKing;
        $ptr = 1;
    case 1:
        TowerDownKing__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 200, 405);
        $this.$addObject0($this.$towerupleft, 95, 130);
        $this.$addObject0($this.$towerupright, 305, 130);
        var$1 = new TowerUpKing;
        $ptr = 2;
    case 2:
        TowerUpKing__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 200, 85);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
ClashWorld_changeCard = ($this, $x, $y) => {
    let $random;
    $this.$addObject0($this.$cardNext0, $x, $y);
    $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
    while (ClashWorld_cardStart.data[$random].$getWorld() !== null) {
        $random = g_Greenfoot_getRandomNumber(ClashWorld_cardStart.data.length);
    }
    $this.$cardNext0 = ClashWorld_cardStart.data[$random];
},
ClashWorld__clinit_ = () => {
    ClashWorld_cardStart = $rt_createArray(Card, 8);
};
function DifficultyMenuWorld() {
    g_World.call(this);
    this.$time7 = 0;
}
let DifficultyMenuWorld__init_ = $this => {
    let var$1, var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 1000;
        var$2 = 600;
        var$3 = 1;
        $ptr = 1;
    case 1:
        g_World__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$4 = new Music;
        $ptr = 2;
    case 2:
        Music__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 0, 0);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, $ptr);
},
DifficultyMenuWorld__init_0 = () => {
    let var_0 = new DifficultyMenuWorld();
    DifficultyMenuWorld__init_(var_0);
    return var_0;
},
DifficultyMenuWorld_act = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time7 = $this.$time7 + 1 | 0;
        if ($this.$time7 == 1) {
            var$1 = new MenuButtonDifficulty;
            var$2 = $rt_s(20);
            $ptr = 1;
            continue main;
        }
        if ($this.$time7 == 21) {
            var$1 = new MenuButtonDifficulty;
            var$2 = $rt_s(21);
            $ptr = 2;
            continue main;
        }
        if ($this.$time7 != 41)
            return;
        var$2 = new MenuButtonDifficulty;
        var$1 = $rt_s(22);
        $ptr = 3;
        continue main;
    case 1:
        MenuButtonDifficulty__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 155, 0);
        return;
    case 2:
        MenuButtonDifficulty__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$1, 500, 0);
        return;
    case 3:
        MenuButtonDifficulty__init_(var$2, var$1);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$2, 845, 0);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
ji_Serializable = $rt_classWithoutFields(0),
jl_Number = $rt_classWithoutFields(),
jl_Number__init_ = $this => {
    jl_Object__init_($this);
},
jl_Comparable = $rt_classWithoutFields(0);
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_ = ($this, $value) => {
    jl_Integer_$callClinit();
    jl_Number__init_($this);
    $this.$value0 = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_hashCode0 = $value => {
    jl_Integer_$callClinit();
    return $value;
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_parseInt0 = ($s, $radix) => {
    jl_Integer_$callClinit();
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$length(), $radix);
    $rt_throw(jl_NumberFormatException__init_0($rt_s(23)));
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12, var$13, var$14;
    jl_Integer_$callClinit();
    if ($beginIndex == $endIndex)
        $rt_throw(jl_NumberFormatException__init_0($rt_s(24)));
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            switch ($s.$charAt($beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex)
            $rt_throw(jl_NumberFormatException__init_2());
        while (true) {
            if (var$6 >= $endIndex) {
                if ($negative)
                    $value =  -$value | 0;
                return $value;
            }
            var$9 = var$6 + 1 | 0;
            $digit = jl_Integer_decodeDigit($s.$charAt(var$6));
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(25)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$12 = new jl_NumberFormatException;
                var$13 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$14 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$14, $rt_s(26)), $radix), $rt_s(4)), var$13);
                jl_NumberFormatException__init_(var$12, jl_StringBuilder_toString(var$14));
                $rt_throw(var$12);
            }
            if ($value > $maxValue)
                break;
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(27)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        $rt_throw(jl_NumberFormatException__init_0($rt_s(28)));
    }
    var$11 = new jl_NumberFormatException;
    var$12 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$12, $rt_s(29)), $radix);
    jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$12));
    $rt_throw(var$11);
},
jl_Integer_parseInt = $s => {
    jl_Integer_$callClinit();
    return jl_Integer_parseInt0($s, 10);
},
jl_Integer_valueOf = $i => {
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache();
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_ensureIntegerCache = () => {
    let $j;
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache === null) {
            jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= jl_Integer_integerCache.data.length)
                    break a;
                jl_Integer_integerCache.data[$j] = jl_Integer__init_0($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_intValue = $this => {
    return $this.$value0;
},
jl_Integer_hashCode = $this => {
    return jl_Integer_hashCode0($this.$value0);
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value0 == $this.$value0 ? 1 : 0;
},
jl_Integer_decodeDigit = $c => {
    jl_Integer_$callClinit();
    if ($c >= 48 && $c <= 57)
        return $c - 48 | 0;
    if ($c >= 97 && $c <= 122)
        return ($c - 97 | 0) + 10 | 0;
    if ($c >= 65 && $c <= 90)
        return ($c - 65 | 0) + 10 | 0;
    return (-1);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function gs_SoundFactory$2$handleEvent$lambda$_1_0() {
    jl_Object.call(this);
    this.$_05 = null;
}
let gs_SoundFactory$2$handleEvent$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_05 = var$1;
},
gs_SoundFactory$2$handleEvent$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new gs_SoundFactory$2$handleEvent$lambda$_1_0();
    gs_SoundFactory$2$handleEvent$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
gs_SoundFactory$2$handleEvent$lambda$_1_0_run = var$0 => {
    gs_SoundFactory$2_lambda$handleEvent$0(var$0.$_05);
},
jl_AbstractStringBuilder$Constants = $rt_classWithoutFields(),
jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null,
jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null,
jl_AbstractStringBuilder$Constants_floatAnalysisResult = null,
jl_AbstractStringBuilder$Constants_$callClinit = () => {
    jl_AbstractStringBuilder$Constants_$callClinit = $rt_eraseClinit(jl_AbstractStringBuilder$Constants);
    jl_AbstractStringBuilder$Constants__clinit_();
},
jl_AbstractStringBuilder$Constants__init_ = $this => {
    jl_AbstractStringBuilder$Constants_$callClinit();
    jl_Object__init_($this);
},
jl_AbstractStringBuilder$Constants__init_0 = () => {
    let var_0 = new jl_AbstractStringBuilder$Constants();
    jl_AbstractStringBuilder$Constants__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder$Constants__clinit_ = () => {
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), Long_create(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = otcit_DoubleAnalyzer$Result__init_0();
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = otcit_FloatAnalyzer$Result__init_0();
},
TroopEnemyArcher = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyArcher__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 40;
        var$2 = 5;
        var$3 = 85;
        var$4 = 1;
        var$5 = 1;
        var$6 = 35;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 12;
        $this.$troopName = $rt_s(30);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyArcher__init_0 = () => {
    let var_0 = new TroopEnemyArcher();
    TroopEnemyArcher__init_(var_0);
    return var_0;
},
TroopEnemyArcher_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
otp_PlatformRunnable = $rt_classWithoutFields(0),
otr_EventQueue$Event = $rt_classWithoutFields(0),
jl_Object$NotifyListener = $rt_classWithoutFields(0),
otj_JSObject = $rt_classWithoutFields(0),
otjb_TimerHandler = $rt_classWithoutFields(0),
jl_ThreadInterruptHandler = $rt_classWithoutFields(0);
function jl_Object$NotifyListenerImpl() {
    let a = this; jl_Object.call(a);
    a.$obj = null;
    a.$callback0 = null;
    a.$currentThread0 = null;
    a.$timerId = 0;
    a.$expired0 = 0;
    a.$performed = 0;
    a.$lockCount = 0;
}
let jl_Object$NotifyListenerImpl__init_ = ($this, $obj, $callback, $lockCount) => {
    jl_Object__init_($this);
    $this.$currentThread0 = jl_Thread_currentThread();
    $this.$timerId = (-1);
    $this.$obj = $obj;
    $this.$callback0 = $callback;
    $this.$lockCount = $lockCount;
},
jl_Object$NotifyListenerImpl__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jl_Object$NotifyListenerImpl();
    jl_Object$NotifyListenerImpl__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_Object$NotifyListenerImpl_expired = $this => {
    let $result;
    $result = $this.$expired0;
    $this.$expired0 = 1;
    return $result;
},
jl_Object$NotifyListenerImpl_onTimer = $this => {
    otp_Platform_postpone(jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0__init_0($this));
},
jl_Object$NotifyListenerImpl_run = $this => {
    if ($this.$performed)
        return;
    $this.$performed = 1;
    if ($this.$timerId >= 0) {
        otp_Platform_killSchedule($this.$timerId);
        $this.$timerId = (-1);
    }
    jl_Thread_setCurrentThread($this.$currentThread0);
    jl_Object_monitorEnterWait($this.$obj, $this.$lockCount, $this.$callback0);
},
jl_Object$NotifyListenerImpl_interrupted = $this => {
    if ($this.$performed)
        return;
    $this.$performed = 1;
    if ($this.$timerId >= 0) {
        otp_Platform_killSchedule($this.$timerId);
        $this.$timerId = (-1);
    }
    otp_Platform_postpone(jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0__init_0($this));
},
jl_Object$NotifyListenerImpl_lambda$interrupted$3 = $this => {
    $this.$callback0.$error(jl_InterruptedException__init_());
},
jl_Object$NotifyListenerImpl_lambda$onTimer$1 = $this => {
    if (!$this.$expired())
        $this.$run();
},
jl_Object$NotifyListenerImpl_onTimer$exported$0 = var$1 => {
    var$1.$onTimer();
},
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Document = $rt_classWithoutFields(0),
otjde_EventTarget = $rt_classWithoutFields(0),
otjdh_HTMLDocument = $rt_classWithoutFields(),
otjdh_HTMLDocument_current = () => {
    return window.document;
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_$callClinit = () => {
    jl_Long_$callClinit = $rt_eraseClinit(jl_Long);
    jl_Long__clinit_();
},
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
function TroopAllyGhost() {
    let a = this; Troop.call(a);
    a.$elixir0 = 0;
    a.$type1 = null;
    a.$name0 = null;
}
let TroopAllyGhost__init_ = ($this, $elixir, $type, $name) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$name = $thread.pop();$type = $thread.pop();$elixir = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Troop__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$elixir0 = $elixir;
        $this.$type1 = $type;
        $this.$name0 = $name;
        ($this.$getImage1()).$setTransparency(100);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $elixir, $type, $name, $ptr);
},
TroopAllyGhost__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new TroopAllyGhost();
    TroopAllyGhost__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
TroopAllyGhostDragonBaby = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostDragonBaby__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = $rt_s(31);
        var$3 = $rt_s(32);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostDragonBaby__init_0 = () => {
    let var_0 = new TroopAllyGhostDragonBaby();
    TroopAllyGhostDragonBaby__init_(var_0);
    return var_0;
},
TroopAllyGhostDragonBaby_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyDragonBaby;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyDragonBaby__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
},
ju_Map = $rt_classWithoutFields(0);
function jl_Thread() {
    let a = this; jl_Object.call(a);
    a.$uncaughtExceptionHandler = null;
    a.$id = Long_ZERO;
    a.$priority = 0;
    a.$timeSliceStart = Long_ZERO;
    a.$finishedLock = null;
    a.$interruptedFlag = 0;
    a.$interruptHandler = null;
    a.$key0 = null;
    a.$name1 = null;
    a.$alive = 0;
    a.$target0 = null;
}
let jl_Thread_mainThread = null,
jl_Thread_currentThread0 = null,
jl_Thread_nextId = 0,
jl_Thread_activeCount = 0,
jl_Thread_defaultUncaughtExceptionHandler = null,
jl_Thread_$callClinit = () => {
    jl_Thread_$callClinit = $rt_eraseClinit(jl_Thread);
    jl_Thread__clinit_();
},
jl_Thread__init_1 = $this => {
    jl_Thread_$callClinit();
    jl_Thread__init_0($this, null, null);
},
jl_Thread__init_6 = () => {
    let var_0 = new jl_Thread();
    jl_Thread__init_1(var_0);
    return var_0;
},
jl_Thread__init_3 = ($this, $name) => {
    jl_Thread_$callClinit();
    jl_Thread__init_0($this, null, $name);
},
jl_Thread__init_4 = var_0 => {
    let var_1 = new jl_Thread();
    jl_Thread__init_3(var_1, var_0);
    return var_1;
},
jl_Thread__init_2 = ($this, $target) => {
    jl_Thread_$callClinit();
    jl_Thread__init_0($this, $target, null);
},
jl_Thread__init_ = var_0 => {
    let var_1 = new jl_Thread();
    jl_Thread__init_2(var_1, var_0);
    return var_1;
},
jl_Thread__init_0 = ($this, $target, $name) => {
    let var$3;
    jl_Thread_$callClinit();
    jl_Object__init_($this);
    $this.$finishedLock = jl_Object__init_0();
    $this.$alive = 1;
    $this.$name1 = $name;
    $this.$target0 = $target;
    var$3 = jl_Thread_nextId;
    jl_Thread_nextId = var$3 + 1 | 0;
    $this.$id = Long_fromInt(var$3);
},
jl_Thread__init_5 = (var_0, var_1) => {
    let var_2 = new jl_Thread();
    jl_Thread__init_0(var_2, var_0, var_1);
    return var_2;
},
jl_Thread_start = $this => {
    otp_Platform_startThread(jl_Thread$start$lambda$_4_0__init_0($this));
},
jl_Thread_runThread = $this => {
    let $t, var$2, var$3, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$t = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            try {
                try {
                    jl_Thread_$callClinit();
                    jl_Thread_activeCount = jl_Thread_activeCount + 1 | 0;
                    jl_Thread_setCurrentThread($this);
                    $this.$key0 = jl_Object__init_0();
                    $ptr = 1;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Throwable) {
                        $t = $$je;
                    } else {
                        throw $$e;
                    }
                }
                ($this.$getUncaughtExceptionHandler()).$uncaughtException($this, $t);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;

            }
            var$3 = $this.$finishedLock;
            $ptr = 2;
            continue main;
        }
        var$2 = $this.$finishedLock;
        $ptr = 4;
        continue main;
    case 1:
        a: {
            b: {
                c: {
                    try {
                        $this.$run();
                        if ($rt_suspending()) {
                            break main;
                        }
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else{
                            var$2 = $$je;
                            break b;
                        }
                    }
                    var$2 = $this.$finishedLock;
                    $ptr = 3;
                    continue main;
                }
                try {
                    ($this.$getUncaughtExceptionHandler()).$uncaughtException($this, $t);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$2 = $$je;

                }
            }
            var$3 = $this.$finishedLock;
            $ptr = 2;
            continue main;
        }
        var$2 = $this.$finishedLock;
        $ptr = 4;
        continue main;
    case 2:
        jl_Object_monitorEnter(var$3);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                jl_Object_notifyAll($this.$finishedLock);
                jl_Object_monitorExit(var$3);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;

            }
            jl_Object_monitorExit(var$3);
            $rt_throw(var$2);
        }
        $this.$alive = 0;
        jl_Thread_activeCount = jl_Thread_activeCount - 1 | 0;
        $this.$key0 = null;
        jl_Thread_setCurrentThread(jl_Thread_mainThread);
        $rt_throw(var$2);
    case 3:
        jl_Object_monitorEnter(var$2);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                jl_Object_notifyAll($this.$finishedLock);
                jl_Object_monitorExit(var$2);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit(var$2);
            $rt_throw(var$3);
        }
        $this.$alive = 0;
        jl_Thread_activeCount = jl_Thread_activeCount - 1 | 0;
        $this.$key0 = null;
        jl_Thread_setCurrentThread(jl_Thread_mainThread);
        return;
    case 4:
        jl_Object_monitorEnter(var$2);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                jl_Object_notifyAll($this.$finishedLock);
                jl_Object_monitorExit(var$2);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit(var$2);
            $rt_throw(var$3);
        }
        $this.$alive = 0;
        jl_Thread_activeCount = jl_Thread_activeCount - 1 | 0;
        $this.$key0 = null;
        jl_Thread_setCurrentThread(jl_Thread_mainThread);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $t, var$2, var$3, $ptr);
},
jl_Thread_setCurrentThread = $thread_0 => {
    jl_Thread_$callClinit();
    if (jl_Thread_currentThread0 !== $thread_0)
        jl_Thread_currentThread0 = $thread_0;
    jl_Thread_currentThread0.$timeSliceStart = jl_System_currentTimeMillis();
},
jl_Thread_run = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$target0 === null)
            return;
        var$1 = $this.$target0;
        $ptr = 1;
    case 1:
        var$1.$run();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
jl_Thread_currentThread = () => {
    jl_Thread_$callClinit();
    return jl_Thread_currentThread0;
},
jl_Thread_interrupt = $this => {
    $this.$interruptedFlag = 1;
    if ($this.$interruptHandler !== null) {
        $this.$interruptHandler.$interrupted();
        $this.$interruptHandler = null;
    }
},
jl_Thread_interrupted = () => {
    let $thread_0, $result;
    jl_Thread_$callClinit();
    $thread_0 = jl_Thread_currentThread();
    $result = $thread_0.$interruptedFlag;
    $thread_0.$interruptedFlag = 0;
    return $result;
},
jl_Thread_sleep = var$1 => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        jl_Thread_$callClinit();
        $ptr = 1;
    case 1:
        jl_Thread_sleep$_asyncCall_$(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, $ptr);
},
jl_Thread_sleep0 = ($millis, $callback) => {
    let $current, $handler, $intMillis;
    jl_Thread_$callClinit();
    $current = jl_Thread_currentThread();
    $handler = jl_Thread$SleepHandler__init_0($current, $callback);
    $intMillis = Long_ge($millis, Long_fromInt(2147483647)) ? 2147483647 : Long_lo($millis);
    $handler.$scheduleId = otp_Platform_schedule($handler, $intMillis);
    $current.$interruptHandler = $handler;
},
jl_Thread_setPriority = ($this, $newPriority) => {
    $this.$priority = $newPriority;
},
jl_Thread_getUncaughtExceptionHandler = $this => {
    if ($this.$uncaughtExceptionHandler !== null)
        return $this.$uncaughtExceptionHandler;
    jl_Thread_$callClinit();
    return jl_Thread_defaultUncaughtExceptionHandler;
},
jl_Thread__clinit_ = () => {
    jl_Thread_mainThread = jl_Thread__init_4($rt_s(33));
    jl_Thread_currentThread0 = jl_Thread_mainThread;
    jl_Thread_nextId = 1;
    jl_Thread_activeCount = 1;
    jl_Thread_defaultUncaughtExceptionHandler = jl_DefaultUncaughtExceptionHandler__init_0();
},
jl_Thread_sleep$_asyncCall_$ = var$1 => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Thread_sleep0(var$1, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
},
gj_ContentReceiver = $rt_classWithoutFields(0);
function gj_Client$getResourceBytes$lambda$_12_0() {
    let a = this; jl_Object.call(a);
    a.$_020 = null;
    a.$_18 = null;
}
let gj_Client$getResourceBytes$lambda$_12_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_020 = var$1;
    var$0.$_18 = var$2;
},
gj_Client$getResourceBytes$lambda$_12_0__init_0 = (var_0, var_1) => {
    let var_2 = new gj_Client$getResourceBytes$lambda$_12_0();
    gj_Client$getResourceBytes$lambda$_12_0__init_(var_2, var_0, var_1);
    return var_2;
},
gj_Client$getResourceBytes$lambda$_12_0_gotContent = (var$0, var$1) => {
    gj_Client_lambda$getResourceBytes$8(var$0.$_020, var$0.$_18, var$1);
},
gj_Client$getResourceBytes$lambda$_12_0_gotContent$exported$0 = (var$1, var$2) => {
    var$1.$gotContent(var$2);
},
gj_ErrorCallback = $rt_classWithoutFields(0);
function gj_Client$getResourceBytes$lambda$_12_1() {
    let a = this; jl_Object.call(a);
    a.$_04 = null;
    a.$_13 = null;
}
let gj_Client$getResourceBytes$lambda$_12_1__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_04 = var$1;
    var$0.$_13 = var$2;
},
gj_Client$getResourceBytes$lambda$_12_1__init_0 = (var_0, var_1) => {
    let var_2 = new gj_Client$getResourceBytes$lambda$_12_1();
    gj_Client$getResourceBytes$lambda$_12_1__init_(var_2, var_0, var_1);
    return var_2;
},
gj_Client$getResourceBytes$lambda$_12_1_gotError = var$0 => {
    gj_Client_lambda$getResourceBytes$9(var$0.$_04, var$0.$_13);
},
gj_Client$getResourceBytes$lambda$_12_1_gotError$exported$0 = var$1 => {
    var$1.$gotError();
},
otp_PlatformQueue = $rt_classWithoutFields(),
otp_PlatformQueue_wrap = $obj => {
    return $obj;
},
otp_PlatformQueue_isEmpty$static = $this => {
    return $this.length ? 0 : 1;
},
otp_PlatformQueue_add$static = ($this, $e) => {
    let var$3;
    var$3 = otp_PlatformQueue_wrap($e);
    $this.push(var$3);
},
otp_PlatformQueue_remove$static = $this => {
    return otji_JSWrapper_maybeWrap($this.shift());
};
function TroopAlly() {
    let a = this; Troop.call(a);
    a.$enemy0 = null;
    a.$tower2 = null;
}
let TroopAlly__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Troop__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAlly__init_0 = () => {
    let var_0 = new TroopAlly();
    TroopAlly__init_(var_0);
    return var_0;
},
TroopAlly_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ($this.$getWorld()).$addObject0($this.$health, $this.$getX(), $this.$getY() - 20 | 0);
        $ptr = 1;
    case 1:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        $this.$movement();
        $ptr = 2;
    case 2:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        if ($this.$specialDeath) {
            if (!$this.$oneDirection)
                $this.$turn(90);
            else
                $this.$setRotation(0);
            return;
        }
        $ptr = 3;
    case 3:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        if (!$this.$oneDirection)
            $this.$turn(90);
        else
            $this.$setRotation(0);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAlly_findEnemy = $this => {
    let var$1, $king, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$king = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$speed = $this.$baseSpeed;
        $this.$oneDirection = 1;
        $this.$distance = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TroopEnemy))).$isEmpty())
            $this.$isBattlingTroop = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TowerEnemy))).$isEmpty())
            $this.$isBattlingTower = 0;
        a: {
            if (!($this.$getObjectsInRange0(120, $rt_cls(TroopEnemy))).$isEmpty() && !$this.$isBattlingTower && $this.$range > 30) {
                var$1 = $this.$target;
                if (var$1.$equals($rt_s(13))) {
                    if (!($this.$enemy0 !== null && $this.$enemy0.$getWorld() !== null))
                        $this.$enemy0 = ($this.$getObjectsInRange0(120, $rt_cls(TroopEnemy))).$get(0);
                    $this.$turnTowards($this.$enemy0.$getX(), $this.$enemy0.$getY());
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$enemy0.$getY() - $this.$getY() | 0), 2.0) | 0;
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$enemy0.$getX() - $this.$getX() | 0), 2.0) | 0;
                    $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                    if ($this.$distance > $this.$range)
                        break a;
                    $this.$isBattlingTroop = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if ($this.$attackTime)
                        break a;
                    var$1 = $this.$enemy0;
                    $ptr = 1;
                    continue main;
                }
            }
            if (!($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$isEmpty() && !((($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$get(0)).$getY() < 250 && (($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$get(0)).$getY() > 200 && (($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$get(0)).$getX() > 110 && (($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$get(0)).$getX() < 290 && $this.$getY() > 250 && $this.$getY() < 300 && $this.$getX() > 100 && $this.$getX()
            < 300) && !$this.$isBattlingTower) {
                var$1 = $this.$target;
                if (var$1.$equals($rt_s(14))) {
                    if (!($this.$enemy0 !== null && $this.$enemy0.$getWorld() !== null))
                        $this.$enemy0 = ($this.$getObjectsInRange0(120, $rt_cls(TroopEnemyGround))).$get(0);
                    $this.$turnTowards($this.$enemy0.$getX(), $this.$enemy0.$getY());
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$enemy0.$getY() - $this.$getY() | 0), 2.0) | 0;
                    $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$enemy0.$getX() - $this.$getX() | 0), 2.0) | 0;
                    $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                    if ($this.$distance > $this.$range)
                        break a;
                    $this.$isBattlingTroop = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if ($this.$attackTime)
                        break a;
                    $this.$attack0($this.$enemy0);
                    $this.$attackTime = $this.$attackSpeed;
                    break a;
                }
            }
            if (!($this.$getObjectsInRange0(100, $rt_cls(TowerEnemy))).$isEmpty() && !$this.$isBattlingTroop && $this.$range > 30) {
                if (!($this.$tower2 !== null && $this.$tower2.$getWorld() !== null))
                    $this.$tower2 = ($this.$getObjectsInRange0(100, $rt_cls(TowerEnemy))).$get(0);
                $this.$turnTowards($this.$tower2.$getX(), $this.$tower2.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower2.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower2.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance > $this.$range)
                    break a;
                $this.$isBattlingTower = 1;
                $this.$speed = 0;
                $this.$attackTime = $this.$attackTime - 1 | 0;
                if ($this.$attackTime)
                    break a;
                else {
                    var$1 = $this.$tower2;
                    $ptr = 2;
                    continue main;
                }
            }
            if (!($this.$getObjectsInRange0(100, $rt_cls(TowerEnemy))).$isEmpty() && !$this.$isBattlingTroop) {
                if (!($this.$tower2 !== null && $this.$tower2.$getWorld() !== null))
                    $this.$tower2 = ($this.$getObjectsInRange0(100, $rt_cls(TowerEnemy))).$get(0);
                $this.$turnTowards($this.$tower2.$getX(), $this.$tower2.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower2.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower2.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance <= $this.$range) {
                    $this.$isBattlingTower = 1;
                    $this.$speed = 0;
                    $this.$attackTime = $this.$attackTime - 1 | 0;
                    if (!$this.$attackTime)
                        $this.$attackTower0($this.$tower2);
                }
            } else if ($this.$getY() > 250 && $this.$getX() <= 200 && !($this instanceof TroopAllyAir))
                $this.$turnTowards(100 + $this.$random0 | 0, 250);
            else if ($this.$getY() > 250 && $this.$getX() > 200 && !($this instanceof TroopAllyAir))
                $this.$turnTowards(300 + $this.$random0 | 0, 250);
            else if (!($this.$getObjectsInRange0(50, $rt_cls(TowerDestroyed))).$isEmpty() && !($this.$getObjectsInRange0(500, $rt_cls(TowerUpKing))).$isEmpty()) {
                $king = (($this.$getWorld()).$getObjects($rt_cls(TowerUpKing))).$get(0);
                $this.$turnTowards($king.$getX(), $king.$getY());
            } else
                $this.$setRotation((-90));
        }
        return;
    case 1:
        $this.$createProjectile1(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    case 2:
        $this.$createProjectile2(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $king, $ptr);
},
TroopAlly_attack = ($this, $enemy) => {
    $enemy.$hp0 = $enemy.$hp0 - $this.$attack1 | 0;
    $this.$attackTime = $this.$attackSpeed;
},
TroopAlly_attackTower = ($this, $tower) => {
    $tower.$hp = $tower.$hp - $this.$attack1 | 0;
    $this.$attackTime = $this.$attackSpeed;
},
TroopAlly_createProjectile0 = ($this, $enemy) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$enemy = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (jl_Object_getClass($this) === $rt_cls(TroopAllyArcher)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileArrowAlly;
            $ptr = 1;
            continue main;
        }
        if (jl_Object_getClass($this) === $rt_cls(TroopAllyGoblinSpear)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileSpearAlly;
            $ptr = 2;
            continue main;
        }
        if (jl_Object_getClass($this) !== $rt_cls(TroopAllyDragonBaby)) {
            $this.$attackTime = $this.$attackSpeed;
            return;
        }
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballAlly;
        $ptr = 3;
        continue main;
    case 1:
        ProjectileArrowAlly__init_(var$3, $enemy);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 2:
        ProjectileSpearAlly__init_(var$3, $enemy);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 3:
        ProjectileFireballAlly__init_(var$3, $enemy);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $enemy, var$2, var$3, $ptr);
},
TroopAlly_createProjectile = ($this, $tower) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$tower = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (jl_Object_getClass($this) === $rt_cls(TroopAllyArcher)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileArrowAlly;
            $ptr = 1;
            continue main;
        }
        if (jl_Object_getClass($this) === $rt_cls(TroopAllyGoblinSpear)) {
            var$2 = $this.$getWorld();
            var$3 = new ProjectileSpearAlly;
            $ptr = 2;
            continue main;
        }
        if (jl_Object_getClass($this) !== $rt_cls(TroopAllyDragonBaby)) {
            $this.$attackTime = $this.$attackSpeed;
            return;
        }
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballAlly;
        $ptr = 3;
        continue main;
    case 1:
        ProjectileArrowAlly__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 2:
        ProjectileSpearAlly__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    case 3:
        ProjectileFireballAlly__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $tower, var$2, var$3, $ptr);
},
TroopAlly_checkHealth = $this => {
    Troop_checkHealth($this);
},
TroopAlly_movement = $this => {
    Troop_movement($this);
},
TroopAlly_attackImages = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        $tmp = Troop_attackImages($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = $tmp;
        return var$1;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
TroopAlly_moveImages = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        $tmp = Troop_moveImages($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = $tmp;
        return var$1;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
TroopAlly_changeSprite = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Troop_changeSprite($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAllyGround = $rt_classWithoutFields(TroopAlly),
TroopAllyGround__init_ = ($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime) => {
    let var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();$attackTime = $thread.pop();$timeSpeed = $thread.pop();$speed = $thread.pop();$range = $thread.pop();$attack = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp0 = $hp;
        $this.$attack1 = $attack;
        $this.$range = $range;
        $this.$speed = $speed;
        $this.$baseSpeed = $speed;
        $this.$timeSpeed = $timeSpeed;
        $this.$speedSpeed = $timeSpeed;
        $this.$spriteTime0 = $attackTime;
        $this.$attackTime = $attackTime;
        $this.$attackSpeed = $attackTime;
        var$7 = new HealthBar;
        var$8 = 1;
        $ptr = 2;
    case 2:
        HealthBar__init_(var$7, $this, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health = var$7;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime, var$7, var$8, $ptr);
},
TroopAllyGround__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new TroopAllyGround();
    TroopAllyGround__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
TroopAllyGiant = $rt_classWithoutFields(TroopAllyGround),
TroopAllyGiant__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 260;
        var$2 = 12;
        var$3 = 30;
        var$4 = 1;
        var$5 = 2;
        var$6 = 58;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 19;
        $this.$troopName = $rt_s(34);
        $this.$target = $rt_s(35);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyGiant__init_0 = () => {
    let var_0 = new TroopAllyGiant();
    TroopAllyGiant__init_(var_0);
    return var_0;
},
TroopAllyGiant_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
jl_CharSequence = $rt_classWithoutFields(0),
otjde_LoadEventTarget = $rt_classWithoutFields(0),
otjde_LoadEventTarget_listenLoad$static = ($this, $listener) => {
    $this.addEventListener("load", otji_JS_function($listener, "handleEvent"));
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_0 = $this => {
    jl_IndexOutOfBoundsException__init_0($this);
},
jl_StringIndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
otjde_EventListener = $rt_classWithoutFields(0);
function gj_TouchManager() {
    jl_Object.call(this);
    this.$mouseManager0 = null;
}
let gj_TouchManager__init_ = ($this, $mouseManager) => {
    jl_Object__init_($this);
    $this.$mouseManager0 = $mouseManager;
},
gj_TouchManager__init_0 = var_0 => {
    let var_1 = new gj_TouchManager();
    gj_TouchManager__init_(var_1, var_0);
    return var_1;
},
gj_TouchManager_handleEvent0 = ($this, $e) => {
    $this.$mouseManager0.$handleTouchEvent($e);
},
gj_TouchManager_handleEvent = ($this, var$1) => {
    $this.$handleEvent(var$1);
},
gj_TouchManager_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46__init_ = $this => {
    jl_Object__init_($this);
},
otci_Base46__init_0 = () => {
    let var_0 = new otci_Base46();
    otci_Base46__init_(var_0);
    return var_0;
},
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, var$5, $digit, $hasMore;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit = $c => {
    if ($c < 34)
        return $c - 32 | 0;
    if ($c >= 92)
        return ($c - 32 | 0) - 2 | 0;
    return ($c - 32 | 0) - 1 | 0;
};
function gs_Sound() {
    jl_Object.call(this);
    this.$element = null;
}
let gs_Sound__init_0 = ($this, $element) => {
    jl_Object__init_($this);
    $this.$element = $element;
},
gs_Sound__init_ = var_0 => {
    let var_1 = new gs_Sound();
    gs_Sound__init_0(var_1, var_0);
    return var_1;
},
gs_Sound_play = $this => {
    $this.$element.play();
},
gs_Sound_stop = $this => {
    let var$1, var$2;
    $this.$element.pause();
    var$1 = $this.$element;
    var$2 = 0.0;
    var$1.currentTime = var$2;
},
gs_Sound_isPlaying = $this => {
    return !($this.$element.paused ? 1 : 0) && !($this.$element.ended ? 1 : 0) ? 1 : 0;
},
gs_Sound_setVolume = ($this, $vol) => {
    let var$2, var$3;
    var$2 = $this.$element;
    var$3 = $vol / 100.0;
    var$2.volume = var$3;
},
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper__init_ = $this => {
    otji_JSWrapper$Helper_$callClinit();
    jl_Object__init_($this);
},
otji_JSWrapper$Helper__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper();
    otji_JSWrapper$Helper__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper_lambda$static$1 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_numberWrappers.delete($token);
},
otji_JSWrapper$Helper_lambda$static$0 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_stringWrappers.delete($token);
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = var$1;
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
},
ZoneTroopsPlaceRight = $rt_classWithoutFields(ZoneTroopsPlace),
ZoneTroopsPlaceRight__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        ZoneTroopsPlace__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ZoneTroopsPlaceRight__init_0 = () => {
    let var_0 = new ZoneTroopsPlaceRight();
    ZoneTroopsPlaceRight__init_(var_0);
    return var_0;
};
function Projectile() {
    let a = this; g_Actor.call(a);
    a.$damage = 0;
    a.$speed7 = 0;
    a.$time4 = 0;
    a.$type0 = null;
}
let Projectile__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Projectile__init_0 = () => {
    let var_0 = new Projectile();
    Projectile__init_(var_0);
    return var_0;
};
function ProjectileAlly() {
    let a = this; Projectile.call(a);
    a.$enemy = null;
    a.$tower0 = null;
}
let ProjectileAlly__init_ = ($this, $damage, $speed, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$speed = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Projectile__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage = $damage;
        $this.$speed7 = $speed;
        $this.$time4 = 50;
        $this.$type0 = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $speed, $type, $ptr);
},
ProjectileAlly__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ProjectileAlly();
    ProjectileAlly__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ProjectileAlly_act = $this => {
    $this.$move($this.$speed7);
    if (!$this.$type0.$equals($rt_s(36)))
        $this.$attackZoneEnemy();
    else
        $this.$attackEnemy();
    $this.$vanish();
},
ProjectileAlly_attackEnemy = $this => {
    let var$1;
    if ($this.$enemy !== null && $this.$enemy.$getWorld() !== null) {
        $this.$turnTowards($this.$enemy.$getX(), $this.$enemy.$getY());
        if ($this.$intersects0($this.$enemy)) {
            var$1 = $this.$enemy;
            var$1.$hp0 = var$1.$hp0 - $this.$damage | 0;
        }
    } else if ($this.$tower0 !== null && $this.$tower0.$getWorld() !== null) {
        $this.$turnTowards($this.$tower0.$getX(), $this.$tower0.$getY());
        if ($this.$intersects0($this.$tower0)) {
            var$1 = $this.$tower0;
            var$1.$hp = var$1.$hp - $this.$damage | 0;
        }
    }
},
ProjectileAlly_attackZoneEnemy = $this => {
    let var$1, $enemy, $tower;
    a: {
        if ($this.$enemy !== null && $this.$enemy.$getWorld() !== null) {
            $this.$turnTowards($this.$enemy.$getX(), $this.$enemy.$getY());
            if ($this.$intersects0($this.$enemy)) {
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TroopEnemy))).$iterator();
                while (var$1.$hasNext()) {
                    $enemy = var$1.$next();
                    $enemy.$hp0 = $enemy.$hp0 - $this.$damage | 0;
                }
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TowerEnemy))).$iterator();
                while (var$1.$hasNext()) {
                    $tower = var$1.$next();
                    $tower.$hp = $tower.$hp - $this.$damage | 0;
                }
            }
        } else if ($this.$tower0 !== null && $this.$tower0.$getWorld() !== null) {
            $this.$turnTowards($this.$tower0.$getX(), $this.$tower0.$getY());
            if ($this.$intersects0($this.$tower0)) {
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TroopEnemy))).$iterator();
                while (var$1.$hasNext()) {
                    $enemy = var$1.$next();
                    $enemy.$hp0 = $enemy.$hp0 - $this.$damage | 0;
                }
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TowerEnemy))).$iterator();
                while (true) {
                    if (!var$1.$hasNext())
                        break a;
                    $tower = var$1.$next();
                    $tower.$hp = $tower.$hp - $this.$damage | 0;
                }
            }
        }
    }
},
ProjectileAlly_vanish = $this => {
    let var$1;
    a: {
        b: {
            $this.$time4 = $this.$time4 - 1 | 0;
            if ($this.$time4 && !$this.$isAtEdge()) {
                if ($this.$enemy !== null) {
                    var$1 = $this.$enemy;
                    if (var$1.$getWorld() === null)
                        break b;
                    if ($this.$intersects0($this.$enemy))
                        break b;
                }
                if ($this.$tower0 === null)
                    break a;
                var$1 = $this.$tower0;
                if (var$1.$getWorld() !== null && !$this.$intersects0($this.$tower0))
                    break a;
            }
        }
        ($this.$getWorld()).$removeObject($this);
    }
},
ProjectileCannonAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileCannonAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 8;
        var$3 = 4;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileCannonAlly__init_0 = var_0 => {
    let var_1 = new ProjectileCannonAlly();
    ProjectileCannonAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileCannonAlly_act = $this => {
    ProjectileAlly_act($this);
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_118_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_118_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_118_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_118_0();
    jl_String$_clinit_$lambda$_118_0__init_(var_0);
    return var_0;
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_AbstractStringBuilder__init_1 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_2 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append2 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_append = ($this, $string) => {
    return $this.$insert0($this.$length0, $string);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(37);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append0 = ($this, $value) => {
    return $this.$append2($value, 10);
},
jl_AbstractStringBuilder_append4 = ($this, $value, $radix) => {
    return $this.$insert1($this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert3 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append1 = ($this, $value) => {
    return $this.$insert2($this.$length0, $value);
},
jl_AbstractStringBuilder_insert = ($this, $target, $value) => {
    let var$3, var$4, var$5, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, var$16, $pos, $i, $intDigit, var$20;
    var$3 = $rt_compare($value, 0.0);
    if (!var$3) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 48;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 46;
            $this.$buffer.data[var$5] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 45;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 48;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 46;
        $this.$buffer.data[var$3] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 78;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 97;
        $this.$buffer.data[var$5] = 78;
        return $this;
    }
    if (!isFinite($value) ? 1 : 0) {
        if (var$3 > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            var$3 = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 73;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 110;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 102;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 110;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 116;
        $this.$buffer.data[var$5] = 121;
        return $this;
    }
    jl_AbstractStringBuilder$Constants_$callClinit();
    $number = jl_AbstractStringBuilder$Constants_doubleAnalysisResult;
    otcit_DoubleAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent;
    $negative = $number.$sign0;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 18;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if (!($exp > (-100) && $exp < 100))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    var$3 = $sz + ($digits + $leadingZeros | 0) | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + var$3 | 0);
    if (!$negative)
        var$16 = $target;
    else {
        var$4 = $this.$buffer.data;
        var$16 = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = Long_create(1569325056, 23283064);
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 48;
        var$4 = $this.$buffer.data;
        var$16 = var$3 + 1 | 0;
        var$4[var$3] = 46;
        while (true) {
            var$3 = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            var$4 = $this.$buffer.data;
            var$5 = var$16 + 1 | 0;
            var$4[var$16] = 48;
            $leadingZeros = var$3;
            var$16 = var$5;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if (Long_le($pos, Long_ZERO))
            $intDigit = 0;
        else {
            $intDigit = Long_lo(Long_div($mantissa, $pos));
            $mantissa = Long_rem($mantissa, $pos);
        }
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            var$16 = var$3;
        else {
            var$4 = $this.$buffer.data;
            var$16 = var$3 + 1 | 0;
            var$4[var$3] = 46;
        }
        $pos = Long_div($pos, Long_fromInt(10));
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        var$5 = var$16 + 1 | 0;
        var$4[var$16] = 69;
        if ($exp >= 0)
            var$20 = var$5;
        else {
            $exp =  -$exp | 0;
            var$4 = $this.$buffer.data;
            var$20 = var$5 + 1 | 0;
            var$4[var$5] = 45;
        }
        if ($exp >= 100) {
            var$4 = $this.$buffer.data;
            var$3 = var$20 + 1 | 0;
            var$4[var$20] = (48 + ($exp / 100 | 0) | 0) & 65535;
            $exp = $exp % 100 | 0;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = (48 + ($exp / 10 | 0) | 0) & 65535;
        } else if ($exp < 10)
            var$5 = var$20;
        else {
            var$4 = $this.$buffer.data;
            var$5 = var$20 + 1 | 0;
            var$4[var$20] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        $this.$buffer.data[var$5] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_trailingDecimalZeros = $n => {
    let $zeros, $result, $bit, $i;
    $zeros = Long_fromInt(1);
    $result = 0;
    $bit = 16;
    jl_AbstractStringBuilder$Constants_$callClinit();
    $i = jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data.length - 1 | 0;
    while ($i >= 0) {
        if (Long_eq(Long_rem($n, Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i])), Long_ZERO)) {
            $result = $result | $bit;
            $zeros = Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i]);
        }
        $bit = $bit >>> 1 | 0;
        $i = $i + (-1) | 0;
    }
    return $result;
},
jl_AbstractStringBuilder_append3 = ($this, $c) => {
    return $this.$insert3($this.$length0, $c);
},
jl_AbstractStringBuilder_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $obj) => {
    return $this.$insert0($index, $obj === null ? $rt_s(37) : $obj.$toString());
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf1($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_1($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append2($this, $obj);
    return $this;
},
jl_StringBuilder_append2 = ($this, $string) => {
    jl_AbstractStringBuilder_append($this, $string);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    jl_AbstractStringBuilder_append0($this, $value);
    return $this;
},
jl_StringBuilder_append3 = ($this, $value) => {
    jl_AbstractStringBuilder_append1($this, $value);
    return $this;
},
jl_StringBuilder_append1 = ($this, $c) => {
    jl_AbstractStringBuilder_append3($this, $c);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $target, $value) => {
    jl_AbstractStringBuilder_insert($this, $target, $value);
    return $this;
},
jl_StringBuilder_insert4 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert1($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert2($this, $index, $c);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert0($this, $index, $string);
    return $this;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert4(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert5(var$1, var$2);
},
jl_StringBuilder_insert2 = ($this, var$1, var$2) => {
    return $this.$insert6(var$1, var$2);
},
jl_StringBuilder_insert6 = ($this, var$1, var$2) => {
    return $this.$insert7(var$1, var$2);
};
function Tower() {
    let a = this; g_Actor.call(a);
    a.$hp = 0;
    a.$basehp = 0;
    a.$range0 = 0;
    a.$attackTime0 = 0;
    a.$attackSpeed0 = 0;
    a.$distance0 = 0;
    a.$projectile = null;
}
let Tower__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Tower__init_0 = () => {
    let var_0 = new Tower();
    Tower__init_(var_0);
    return var_0;
},
Tower_act = $this => {
    return;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_ = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_0(var_0);
    return var_0;
},
jur_RandomGenerator = $rt_classWithoutFields(0);
function ProjectileEnemy() {
    let a = this; Projectile.call(a);
    a.$ally0 = null;
    a.$tower1 = null;
}
let ProjectileEnemy__init_ = ($this, $damage, $speed, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$speed = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Projectile__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage = $damage;
        $this.$speed7 = $speed;
        $this.$time4 = 50;
        $this.$type0 = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $speed, $type, $ptr);
},
ProjectileEnemy__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ProjectileEnemy();
    ProjectileEnemy__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ProjectileEnemy_act = $this => {
    $this.$move($this.$speed7);
    if (!$this.$type0.$equals($rt_s(36)))
        $this.$attackZoneEnemy();
    else
        $this.$attackEnemy();
    $this.$vanish();
},
ProjectileEnemy_attackEnemy = $this => {
    let var$1;
    if ($this.$ally0 !== null && $this.$ally0.$getWorld() !== null) {
        $this.$turnTowards($this.$ally0.$getX(), $this.$ally0.$getY());
        if ($this.$intersects0($this.$ally0)) {
            var$1 = $this.$ally0;
            var$1.$hp0 = var$1.$hp0 - $this.$damage | 0;
        }
    } else if ($this.$tower1 !== null && $this.$tower1.$getWorld() !== null) {
        $this.$turnTowards($this.$tower1.$getX(), $this.$tower1.$getY());
        if ($this.$intersects0($this.$tower1)) {
            var$1 = $this.$tower1;
            var$1.$hp = var$1.$hp - $this.$damage | 0;
        }
    }
},
ProjectileEnemy_attackZoneEnemy = $this => {
    let var$1, $ally, $tower;
    a: {
        if ($this.$ally0 !== null && $this.$ally0.$getWorld() !== null) {
            $this.$turnTowards($this.$ally0.$getX(), $this.$ally0.$getY());
            if ($this.$intersects0($this.$ally0)) {
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TroopAlly))).$iterator();
                while (var$1.$hasNext()) {
                    $ally = var$1.$next();
                    $ally.$hp0 = $ally.$hp0 - $this.$damage | 0;
                }
                var$1 = ($this.$getObjectsInRange0(50, $rt_cls(TowerAlly))).$iterator();
                while (var$1.$hasNext()) {
                    $tower = var$1.$next();
                    $tower.$hp = $tower.$hp - $this.$damage | 0;
                }
            }
        } else if ($this.$tower1 !== null && $this.$tower1.$getWorld() !== null) {
            $this.$turnTowards($this.$tower1.$getX(), $this.$tower1.$getY());
            if ($this.$intersects0($this.$tower1)) {
                var$1 = ($this.$getObjectsInRange0(40, $rt_cls(TroopAlly))).$iterator();
                while (var$1.$hasNext()) {
                    $ally = var$1.$next();
                    $ally.$hp0 = $ally.$hp0 - $this.$damage | 0;
                }
                var$1 = ($this.$getObjectsInRange0(50, $rt_cls(TowerAlly))).$iterator();
                while (true) {
                    if (!var$1.$hasNext())
                        break a;
                    $tower = var$1.$next();
                    $tower.$hp = $tower.$hp - $this.$damage | 0;
                }
            }
        }
    }
},
ProjectileEnemy_vanish = $this => {
    let var$1;
    a: {
        b: {
            $this.$time4 = $this.$time4 - 1 | 0;
            if ($this.$time4 && !$this.$isAtEdge()) {
                if ($this.$ally0 !== null) {
                    var$1 = $this.$ally0;
                    if (var$1.$getWorld() === null)
                        break b;
                    if ($this.$intersects0($this.$ally0))
                        break b;
                }
                if ($this.$tower1 === null)
                    break a;
                var$1 = $this.$tower1;
                if (var$1.$getWorld() !== null && !$this.$intersects0($this.$tower1))
                    break a;
            }
        }
        ($this.$getWorld()).$removeObject($this);
    }
},
ProjectileTowerEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileTowerEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 18;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileTowerEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileTowerEnemy();
    ProjectileTowerEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileTowerEnemy_act = $this => {
    ProjectileEnemy_act($this);
},
ju_Hashtable$1 = $rt_classWithoutFields(),
ju_Hashtable$1__init_ = $this => {
    jl_Object__init_($this);
},
ju_Hashtable$1__init_0 = () => {
    let var_0 = new ju_Hashtable$1();
    ju_Hashtable$1__init_(var_0);
    return var_0;
},
ju_Iterator = $rt_classWithoutFields(0),
ju_Hashtable$2 = $rt_classWithoutFields(),
ju_Hashtable$2__init_ = $this => {
    jl_Object__init_($this);
},
ju_Hashtable$2__init_0 = () => {
    let var_0 = new ju_Hashtable$2();
    ju_Hashtable$2__init_(var_0);
    return var_0;
},
ju_Map$Entry = $rt_classWithoutFields(0),
jl_Cloneable = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
},
ju_MapEntry_equals = ($this, $object) => {
    let $entry;
    if ($this === $object)
        return 1;
    if (!$rt_isInstance($object, ju_Map$Entry))
        return 0;
    $entry = $object;
    return ju_Objects_equals($this.$key, $entry.$getKey()) && ju_Objects_equals($this.$value, $entry.$getValue()) ? 1 : 0;
},
ju_MapEntry_getKey = $this => {
    return $this.$key;
},
ju_MapEntry_getValue = $this => {
    return $this.$value;
},
ju_MapEntry_hashCode = $this => {
    return ju_Objects_hashCode($this.$key) ^ ju_Objects_hashCode($this.$value);
};
function ju_Hashtable$Entry() {
    let a = this; ju_MapEntry.call(a);
    a.$next6 = null;
    a.$hashcode = 0;
}
let ju_Hashtable$Entry__init_ = ($this, $theKey, $theValue) => {
    ju_MapEntry__init_($this, $theKey, $theValue);
    $this.$hashcode = $theKey.$hashCode1();
},
ju_Hashtable$Entry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_Hashtable$Entry();
    ju_Hashtable$Entry__init_(var_2, var_0, var_1);
    return var_2;
},
ju_Hashtable$Entry_getKeyHash = $this => {
    return $this.$key.$hashCode1();
},
ju_Hashtable$Entry_equalsKey = ($this, $aKey, $hash) => {
    return $this.$hashcode == $aKey.$hashCode1() && $this.$key.$equals($aKey) ? 1 : 0;
},
TroopAllySkeleton = $rt_classWithoutFields(TroopAllyGround),
TroopAllySkeleton__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 5;
        var$2 = 5;
        var$3 = 25;
        var$4 = 1;
        var$5 = 1;
        var$6 = 41;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 14;
        $this.$troopName = $rt_s(38);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllySkeleton__init_0 = () => {
    let var_0 = new TroopAllySkeleton();
    TroopAllySkeleton__init_(var_0);
    return var_0;
},
TroopAllySkeleton_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
g_MouseInfoVisitor = $rt_classWithoutFields(),
g_MouseInfoVisitor__init_ = $this => {
    jl_Object__init_($this);
},
g_MouseInfoVisitor__init_0 = () => {
    let var_0 = new g_MouseInfoVisitor();
    g_MouseInfoVisitor__init_(var_0);
    return var_0;
},
g_MouseInfoVisitor_setActor = ($info, $actor) => {
    $info.$setActor($actor);
},
g_MouseInfoVisitor_setLoc = ($info, $x, $y) => {
    $info.$setLoc($x, $y);
},
g_MouseInfoVisitor_setButton = ($info, $button) => {
    $info.$setButton($button);
},
g_MouseInfoVisitor_newMouseInfo = () => {
    return g_MouseInfo__init_0();
},
g_MouseInfoVisitor_setClickCount = ($mouseInfo, $clickCount) => {
    $mouseInfo.$setClickCount($clickCount);
},
TroopAllyGhostArcher = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostArcher__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 3;
        var$2 = $rt_s(31);
        var$3 = $rt_s(30);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostArcher__init_0 = () => {
    let var_0 = new TroopAllyGhostArcher();
    TroopAllyGhostArcher__init_(var_0);
    return var_0;
},
TroopAllyGhostArcher_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyArcher;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyArcher__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() - 7 | 0, $this.$getY());
        var$3 = $this.$getWorld();
        var$4 = new TroopAllyArcher;
        $ptr = 2;
    case 2:
        TroopAllyArcher__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() + 7 | 0, $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
},
jl_ReflectiveOperationException = $rt_classWithoutFields(jl_Exception),
jl_ReflectiveOperationException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_ReflectiveOperationException__init_0 = () => {
    let var_0 = new jl_ReflectiveOperationException();
    jl_ReflectiveOperationException__init_(var_0);
    return var_0;
};
function Card() {
    let a = this; g_Actor.call(a);
    a.$troop = null;
    a.$cardTroop = null;
    a.$hasBeenUsed = 0;
}
let Card__init_ = ($this, $cardTroop) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$cardTroop = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$cardTroop = $cardTroop;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $cardTroop, $ptr);
},
Card__init_0 = var_0 => {
    let var_1 = new Card();
    Card__init_(var_1, var_0);
    return var_1;
},
Card_act = $this => {
    let $keyPressed, $ghost, $world;
    $keyPressed = 0;
    if (g_Greenfoot_mouseClicked($this) && !$keyPressed && ($this.$getObjectsInRange0(50, $rt_cls(TroopAllyGhost))).$isEmpty()) {
        $this.$troop = $this.$cardTroop;
        $this.$hasBeenUsed = 1;
        ($this.$getWorld()).$addObject0($this.$troop, $this.$getX(), $this.$getY());
    } else if (g_Greenfoot_mouseClicked($this) && $this.$troop !== null && $this.$intersects0($this.$troop)) {
        ($this.$getWorld()).$removeObject($this.$troop);
        $this.$troop = null;
    } else if (g_Greenfoot_mouseClicked($this) && !$keyPressed && $this.$isTouching($rt_cls(TroopAllyGhost))) {
        $ghost = $this.$getOneIntersectingObject0($rt_cls(TroopAllyGhost));
        $this.$checkCard($ghost);
        $this.$removeTouching($rt_cls(TroopAllyGhost));
        $this.$troop = $this.$cardTroop;
        $this.$hasBeenUsed = 1;
        ($this.$getWorld()).$addObject0($this.$troop, $this.$getX(), $this.$getY());
    }
    if ($this.$troop !== null && $this.$troop.$getWorld() === null && $this.$hasBeenUsed) {
        $this.$troop = null;
        $world = $this.$getWorld();
        $world.$changeCard($this.$getX(), $this.$getY());
        $world.$removeObject($this);
    }
},
Card_checkCard = ($this, $ghost) => {
    let var$2, var$3;
    a: {
        var$2 = $ghost.$name0;
        var$3 = (-1);
        switch (var$2.$hashCode1()) {
            case -2042963283:
                if (!var$2.$equals($rt_s(39)))
                    break a;
                var$3 = 1;
                break a;
            case -1898882264:
                if (!var$2.$equals($rt_s(40)))
                    break a;
                var$3 = 10;
                break a;
            case -498707115:
                if (!var$2.$equals($rt_s(19)))
                    break a;
                var$3 = 8;
                break a;
            case 68794789:
                if (!var$2.$equals($rt_s(34)))
                    break a;
                var$3 = 2;
                break a;
            case 68983820:
                if (!var$2.$equals($rt_s(41)))
                    break a;
                var$3 = 5;
                break a;
            case 696660803:
                if (!var$2.$equals($rt_s(15)))
                    break a;
                var$3 = 9;
                break a;
            case 1063288354:
                if (!var$2.$equals($rt_s(42)))
                    break a;
                var$3 = 3;
                break a;
            case 1384567209:
                if (!var$2.$equals($rt_s(32)))
                    break a;
                var$3 = 4;
                break a;
            case 1969228707:
                if (!var$2.$equals($rt_s(30)))
                    break a;
                var$3 = 0;
                break a;
            case 2011120925:
                if (!var$2.$equals($rt_s(43)))
                    break a;
                var$3 = 7;
                break a;
            case 2092391533:
                if (!var$2.$equals($rt_s(38)))
                    break a;
                var$3 = 6;
                break a;
            default:
        }
    }
    b: {
        switch (var$3) {
            case 0:
                break;
            case 1:
                ((($this.$getWorld()).$getObjects($rt_cls(CardKnight))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 2:
                ((($this.$getWorld()).$getObjects($rt_cls(CardGiant))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 3:
                ((($this.$getWorld()).$getObjects($rt_cls(CardGoblinSpear))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 4:
                ((($this.$getWorld()).$getObjects($rt_cls(CardDragonBaby))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 5:
                ((($this.$getWorld()).$getObjects($rt_cls(CardGolem))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 6:
                ((($this.$getWorld()).$getObjects($rt_cls(CardSkeleton))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 7:
                ((($this.$getWorld()).$getObjects($rt_cls(CardCannon))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 8:
                ((($this.$getWorld()).$getObjects($rt_cls(CardFireball))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 9:
                ((($this.$getWorld()).$getObjects($rt_cls(CardPekkaMini))).$get(0)).$hasBeenUsed = 0;
                break b;
            case 10:
                ((($this.$getWorld()).$getObjects($rt_cls(CardPoison))).$get(0)).$hasBeenUsed = 0;
                break b;
            default:
                break b;
        }
        ((($this.$getWorld()).$getObjects($rt_cls(CardArcher))).$get(0)).$hasBeenUsed = 0;
    }
},
CardKnight = $rt_classWithoutFields(Card),
CardKnight__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostKnight;
        $ptr = 1;
    case 1:
        TroopAllyGhostKnight__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardKnight__init_0 = () => {
    let var_0 = new CardKnight();
    CardKnight__init_(var_0);
    return var_0;
},
CardKnight_act = $this => {
    Card_act($this);
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
jl_ClassCastException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_ClassCastException__init_0 = () => {
    let var_0 = new jl_ClassCastException();
    jl_ClassCastException__init_(var_0);
    return var_0;
},
gc_CollisionQuery = $rt_classWithoutFields(0);
function gc_GOCollisionQuery() {
    let a = this; jl_Object.call(a);
    a.$cls = null;
    a.$compareObject = null;
}
let gc_GOCollisionQuery__init_ = $this => {
    jl_Object__init_($this);
},
gc_GOCollisionQuery__init_0 = () => {
    let var_0 = new gc_GOCollisionQuery();
    gc_GOCollisionQuery__init_(var_0);
    return var_0;
},
gc_GOCollisionQuery_init = ($this, $cls, $actor) => {
    $this.$cls = $cls;
    $this.$compareObject = $actor;
},
gc_GOCollisionQuery_checkCollision = ($this, $other) => {
    if ($this.$cls !== null && !jl_Class_isInstance($this.$cls, $other))
        return 0;
    if ($this.$compareObject === null)
        return 1;
    if (!g_ActorVisitor_intersects($this.$compareObject, $other))
        return 0;
    return 1;
},
TowerBaseCannon = $rt_classWithoutFields(Tower),
TowerBaseCannon__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Tower__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TowerBaseCannon__init_0 = () => {
    let var_0 = new TowerBaseCannon();
    TowerBaseCannon__init_(var_0);
    return var_0;
},
TowerBaseCannon_act = $this => {
    return;
};
function gj_Client$_init_$lambda$_1_3() {
    jl_Object.call(this);
    this.$_03 = null;
}
let gj_Client$_init_$lambda$_1_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_03 = var$1;
},
gj_Client$_init_$lambda$_1_3__init_0 = var_0 => {
    let var_1 = new gj_Client$_init_$lambda$_1_3();
    gj_Client$_init_$lambda$_1_3__init_(var_1, var_0);
    return var_1;
},
gj_Client$_init_$lambda$_1_3_handleEvent0 = (var$0, var$1) => {
    gj_Client$_init_$lambda$_1_3_handleEvent(var$0, var$1);
},
gj_Client$_init_$lambda$_1_3_handleEvent = (var$0, var$1) => {
    gj_Client_lambda$new$4(var$0.$_03, var$1);
},
gj_Client$_init_$lambda$_1_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function gj_Client$_init_$lambda$_1_2() {
    jl_Object.call(this);
    this.$_09 = null;
}
let gj_Client$_init_$lambda$_1_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_09 = var$1;
},
gj_Client$_init_$lambda$_1_2__init_0 = var_0 => {
    let var_1 = new gj_Client$_init_$lambda$_1_2();
    gj_Client$_init_$lambda$_1_2__init_(var_1, var_0);
    return var_1;
},
gj_Client$_init_$lambda$_1_2_handleEvent = (var$0, var$1) => {
    gj_Client_lambda$new$3(var$0.$_09, var$1);
},
gj_Client$_init_$lambda$_1_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function gj_Client$_init_$lambda$_1_1() {
    jl_Object.call(this);
    this.$_013 = null;
}
let gj_Client$_init_$lambda$_1_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_013 = var$1;
},
gj_Client$_init_$lambda$_1_1__init_0 = var_0 => {
    let var_1 = new gj_Client$_init_$lambda$_1_1();
    gj_Client$_init_$lambda$_1_1__init_(var_1, var_0);
    return var_1;
},
gj_Client$_init_$lambda$_1_1_handleEvent = (var$0, var$1) => {
    gj_Client_lambda$new$2(var$0.$_013, var$1);
},
gj_Client$_init_$lambda$_1_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function gci_ActorNode() {
    let a = this; jl_Object.call(a);
    a.$actor0 = null;
    a.$node = null;
    a.$next5 = null;
    a.$prev0 = null;
    a.$mark0 = 0;
}
let gci_ActorNode__init_ = ($this, $actor, $node) => {
    let $first;
    jl_Object__init_($this);
    $this.$actor0 = $actor;
    $this.$node = $node;
    $first = gci_IBSPColChecker_getNodeForActor($actor);
    $this.$next5 = $first;
    gci_IBSPColChecker_setNodeForActor($actor, $this);
    if ($this.$next5 !== null)
        $this.$next5.$prev0 = $this;
    $this.$mark0 = 1;
},
gci_ActorNode__init_0 = (var_0, var_1) => {
    let var_2 = new gci_ActorNode();
    gci_ActorNode__init_(var_2, var_0, var_1);
    return var_2;
},
gci_ActorNode_clearMark = $this => {
    $this.$mark0 = 0;
},
gci_ActorNode_mark = $this => {
    $this.$mark0 = 1;
},
gci_ActorNode_checkMark = $this => {
    let $markVal;
    $markVal = $this.$mark0;
    $this.$mark0 = 0;
    return $markVal;
},
gci_ActorNode_getBSPNode = $this => {
    return $this.$node;
},
gci_ActorNode_getNext = $this => {
    return $this.$next5;
},
gci_ActorNode_remove = $this => {
    gci_ActorNode_removed($this);
    gci_BSPNode_actorRemoved($this.$node, $this.$actor0);
},
gci_ActorNode_removed = $this => {
    if ($this.$prev0 !== null)
        $this.$prev0.$next5 = $this.$next5;
    else
        gci_IBSPColChecker_setNodeForActor($this.$actor0, $this.$next5);
    if ($this.$next5 !== null)
        $this.$next5.$prev0 = $this.$prev0;
};
function g_Color() {
    let a = this; jl_Object.call(a);
    a.$r = 0;
    a.$g = 0;
    a.$b = 0;
    a.$a = 0;
}
let g_Color_WHITE = null,
g_Color_LIGHT_GRAY = null,
g_Color_GRAY = null,
g_Color_DARK_GRAY = null,
g_Color_BLACK = null,
g_Color_RED = null,
g_Color_PINK = null,
g_Color_ORANGE = null,
g_Color_YELLOW = null,
g_Color_GREEN = null,
g_Color_MAGENTA = null,
g_Color_CYAN = null,
g_Color_BLUE = null,
g_Color_$callClinit = () => {
    g_Color_$callClinit = $rt_eraseClinit(g_Color);
    g_Color__clinit_();
},
g_Color__init_0 = ($this, $r, $g, $b) => {
    g_Color_$callClinit();
    jl_Object__init_($this);
    $this.$r = $r;
    $this.$g = $g;
    $this.$b = $b;
    $this.$a = 255;
},
g_Color__init_ = (var_0, var_1, var_2) => {
    let var_3 = new g_Color();
    g_Color__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
g_Color_getRed = $this => {
    return $this.$r;
},
g_Color_getGreen = $this => {
    return $this.$g;
},
g_Color_getAlpha = $this => {
    return $this.$a;
},
g_Color_getBlue = $this => {
    return $this.$b;
},
g_Color__clinit_ = () => {
    g_Color_WHITE = g_Color__init_(255, 255, 255);
    g_Color_LIGHT_GRAY = g_Color__init_(192, 192, 192);
    g_Color_GRAY = g_Color__init_(128, 128, 128);
    g_Color_DARK_GRAY = g_Color__init_(64, 64, 64);
    g_Color_BLACK = g_Color__init_(0, 0, 0);
    g_Color_RED = g_Color__init_(255, 0, 0);
    g_Color_PINK = g_Color__init_(255, 175, 175);
    g_Color_ORANGE = g_Color__init_(255, 200, 0);
    g_Color_YELLOW = g_Color__init_(255, 255, 0);
    g_Color_GREEN = g_Color__init_(0, 255, 0);
    g_Color_MAGENTA = g_Color__init_(255, 0, 255);
    g_Color_CYAN = g_Color__init_(0, 255, 255);
    g_Color_BLUE = g_Color__init_(0, 0, 255);
};
function gj_Client$getResourceURL$lambda$_11_0() {
    let a = this; jl_Object.call(a);
    a.$_01 = null;
    a.$_11 = null;
}
let gj_Client$getResourceURL$lambda$_11_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_01 = var$1;
    var$0.$_11 = var$2;
},
gj_Client$getResourceURL$lambda$_11_0__init_0 = (var_0, var_1) => {
    let var_2 = new gj_Client$getResourceURL$lambda$_11_0();
    gj_Client$getResourceURL$lambda$_11_0__init_(var_2, var_0, var_1);
    return var_2;
},
gj_Client$getResourceURL$lambda$_11_0_gotContent = (var$0, var$1) => {
    gj_Client_lambda$getResourceURL$6(var$0.$_01, var$0.$_11, var$1);
},
gj_Client$getResourceURL$lambda$_11_0_gotContent$exported$0 = (var$1, var$2) => {
    var$1.$gotContent(var$2);
};
function gj_Client$_init_$lambda$_1_0() {
    jl_Object.call(this);
    this.$_016 = null;
}
let gj_Client$_init_$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_016 = var$1;
},
gj_Client$_init_$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new gj_Client$_init_$lambda$_1_0();
    gj_Client$_init_$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
gj_Client$_init_$lambda$_1_0_handleEvent0 = (var$0, var$1) => {
    gj_Client$_init_$lambda$_1_0_handleEvent(var$0, var$1);
},
gj_Client$_init_$lambda$_1_0_handleEvent = (var$0, var$1) => {
    gj_Client_lambda$new$1(var$0.$_016, var$1);
},
gj_Client$_init_$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function gj_Client$getResourceURL$lambda$_11_1() {
    let a = this; jl_Object.call(a);
    a.$_018 = null;
    a.$_17 = null;
}
let gj_Client$getResourceURL$lambda$_11_1__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_018 = var$1;
    var$0.$_17 = var$2;
},
gj_Client$getResourceURL$lambda$_11_1__init_0 = (var_0, var_1) => {
    let var_2 = new gj_Client$getResourceURL$lambda$_11_1();
    gj_Client$getResourceURL$lambda$_11_1__init_(var_2, var_0, var_1);
    return var_2;
},
gj_Client$getResourceURL$lambda$_11_1_gotError = var$0 => {
    gj_Client_lambda$getResourceURL$7(var$0.$_018, var$0.$_17);
},
gj_Client$getResourceURL$lambda$_11_1_gotError$exported$0 = var$1 => {
    var$1.$gotError();
},
ji_Flushable = $rt_classWithoutFields(0),
SpellEnemy = $rt_classWithoutFields(Spell),
SpellEnemy__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Spell__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
SpellEnemy__init_0 = () => {
    let var_0 = new SpellEnemy();
    SpellEnemy__init_(var_0);
    return var_0;
},
SpellEnemy_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!$this.$type.$equals($rt_s(16))) {
            if (!$this.$type.$equals($rt_s(17)))
                return;
            $this.$time1 = $this.$time1 - 1 | 0;
            $ptr = 1;
            continue main;
        }
        $this.$turnTowards($this.$directionX, $this.$directionY);
        $this.$move(5);
        if (jl_Math_abs($this.$getY() - $this.$directionY | 0) < 5 && jl_Math_abs($this.$getX() - $this.$directionX | 0) < 5 && !$this.$isUsed) {
            $this.$spriteTime = 0;
            $this.$isBattling = 1;
            $this.$isUsed = 1;
        }
        $ptr = 2;
        continue main;
    case 1:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        if (!($this.$time1 % 20 | 0))
            $this.$doZoneDamage();
        if (!$this.$time1)
            ($this.$getWorld()).$removeObject($this);
        return;
    case 2:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        $this.$setRotation((-180));
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
SpellEnemy_findEnemy = $this => {
    let var$1, $ally, $tower;
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TroopAlly))).$iterator();
    while (var$1.$hasNext()) {
        $ally = var$1.$next();
        $ally.$hp0 = $ally.$hp0 - $this.$damage0 | 0;
    }
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TowerAlly))).$iterator();
    while (var$1.$hasNext()) {
        $tower = var$1.$next();
        $tower.$hp = $tower.$hp - (($this.$damage0 * 2 | 0) / 3 | 0) | 0;
    }
},
SpellEnemy_doZoneDamage = $this => {
    let var$1, $ally, $tower;
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TroopAlly))).$iterator();
    while (var$1.$hasNext()) {
        $ally = var$1.$next();
        $ally.$hp0 = $ally.$hp0 - ($this.$damage0 * 2 | 0) | 0;
    }
    var$1 = ($this.$getObjectsInRange0($this.$radius, $rt_cls(TowerAlly))).$iterator();
    while (var$1.$hasNext()) {
        $tower = var$1.$next();
        $tower.$hp = $tower.$hp - $this.$damage0 | 0;
    }
},
SpellEnemy_changeSprite = $this => {
    let $sprite, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$sprite = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$type.$equals($rt_s(16))) {
            $sprite = ($this.$spriteTime - 2 | 0) / 3 | 0;
            $this.$spriteTime = $this.$spriteTime + 1 | 0;
            if ($this.$isBattling) {
                $ptr = 2;
                continue main;
            }
            $ptr = 3;
            continue main;
        }
        if (!$this.$type.$equals($rt_s(17)))
            return;
        $sprite = ($this.$spriteTime - 2 | 0) / 3 | 0;
        $this.$spriteTime = $this.$spriteTime + 1 | 0;
        $ptr = 1;
    case 1:
        $tmp = $this.$attackImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        return;
    case 2:
        $tmp = $this.$attackImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        if ($this.$isBattling && $this.$spriteTime == 1)
            $this.$findEnemy();
        if ($this.$isBattling && $sprite == ($this.$attackImageNumber - 1 | 0))
            ($this.$getWorld()).$removeObject($this);
        return;
    case 3:
        $tmp = $this.$moveImages();
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$setImage(var$2.data[$sprite]);
        if ($this.$spriteTime == ($this.$spriteSpeed + 1 | 0))
            $this.$spriteTime = 0;
        if ($this.$isBattling && $this.$spriteTime == 1)
            $this.$findEnemy();
        if ($this.$isBattling && $sprite == ($this.$attackImageNumber - 1 | 0))
            ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $sprite, var$2, $ptr);
},
SpellEnemy_moveImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$moveImageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(10)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
SpellEnemy_attackImages = $this => {
    let $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$images = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $images = $rt_createArray(g_GreenfootImage, $this.$attackImageNumber);
        $i = 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_(var$4, var$8);
        if ($rt_suspending()) {
            break main;
        }
        var$3[$i] = var$4;
        $i = $i + 1 | 0;
        var$3 = $images.data;
        if ($i >= var$3.length)
            return $images;
        var$4 = new g_GreenfootImage;
        var$5 = $this.$spellName;
        var$6 = $this.$spellName;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(18)), var$5), 47), var$6), $rt_s(12)), $i), $rt_s(11));
        var$8 = jl_StringBuilder_toString(var$7);
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $images, $i, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
};
function gci_Rect() {
    let a = this; jl_Object.call(a);
    a.$x0 = 0;
    a.$y0 = 0;
    a.$width = 0;
    a.$height = 0;
}
let gci_Rect__init_0 = ($this, $x, $y, $width, $height) => {
    jl_Object__init_($this);
    $this.$x0 = $x;
    $this.$y0 = $y;
    $this.$width = $width;
    $this.$height = $height;
},
gci_Rect__init_ = (var_0, var_1, var_2, var_3) => {
    let var_4 = new gci_Rect();
    gci_Rect__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
gci_Rect_copyFrom = ($this, $other) => {
    $this.$x0 = $other.$x0;
    $this.$y0 = $other.$y0;
    $this.$width = $other.$width;
    $this.$height = $other.$height;
},
gci_Rect_getX = $this => {
    return $this.$x0;
},
gci_Rect_getMiddleX = $this => {
    return $this.$x0 + ($this.$width / 2 | 0) | 0;
},
gci_Rect_getRight = $this => {
    return $this.$x0 + $this.$width | 0;
},
gci_Rect_getY = $this => {
    return $this.$y0;
},
gci_Rect_getMiddleY = $this => {
    return $this.$y0 + ($this.$height / 2 | 0) | 0;
},
gci_Rect_getTop = $this => {
    return $this.$y0 + $this.$height | 0;
},
gci_Rect_getWidth = $this => {
    return $this.$width;
},
gci_Rect_getHeight = $this => {
    return $this.$height;
},
gci_Rect_contains = ($this, $other) => {
    return $this.$x0 <= $other.$x0 && $this.$y0 <= $other.$y0 && gci_Rect_getTop($this) >= gci_Rect_getTop($other) && gci_Rect_getRight($this) >= gci_Rect_getRight($other) ? 1 : 0;
},
gci_Rect_getIntersection = ($a, $b) => {
    let $a_x, $a_r, $a_y, $a_t, $b_x, $b_r, $b_y, $b_t, $i_x, $i_r, $i_y, $i_t;
    $a_x = gci_Rect_getX($a);
    $a_r = gci_Rect_getRight($a);
    $a_y = gci_Rect_getY($a);
    $a_t = gci_Rect_getTop($a);
    $b_x = gci_Rect_getX($b);
    $b_r = gci_Rect_getRight($b);
    $b_y = gci_Rect_getY($b);
    $b_t = gci_Rect_getTop($b);
    $i_x = jl_Math_max($a_x, $b_x);
    $i_r = jl_Math_min($a_r, $b_r);
    $i_y = jl_Math_max($a_y, $b_y);
    $i_t = jl_Math_min($a_t, $b_t);
    if ($i_x < $i_r && $i_y < $i_t)
        return gci_Rect__init_($i_x, $i_y, $i_r - $i_x | 0, $i_t - $i_y | 0);
    return null;
},
gci_Rect_setX = ($this, $x) => {
    $this.$x0 = $x;
},
gci_Rect_setY = ($this, $y) => {
    $this.$y0 = $y;
},
gci_Rect_intersects = ($this, $otherBounds) => {
    if ($otherBounds.$x0 >= gci_Rect_getRight($this))
        return 0;
    if ($this.$x0 >= gci_Rect_getRight($otherBounds))
        return 0;
    if ($otherBounds.$y0 >= gci_Rect_getTop($this))
        return 0;
    if ($this.$y0 < gci_Rect_getTop($otherBounds))
        return 1;
    return 0;
},
gs_SoundFactory = $rt_classWithoutFields(),
gs_SoundFactory_instance = null,
gs_SoundFactory_$callClinit = () => {
    gs_SoundFactory_$callClinit = $rt_eraseClinit(gs_SoundFactory);
    gs_SoundFactory__clinit_();
},
gs_SoundFactory_getInstance = () => {
    gs_SoundFactory_$callClinit();
    return gs_SoundFactory_instance;
},
gs_SoundFactory__init_ = $this => {
    gs_SoundFactory_$callClinit();
    jl_Object__init_($this);
},
gs_SoundFactory__init_0 = () => {
    let var_0 = new gs_SoundFactory();
    gs_SoundFactory__init_(var_0);
    return var_0;
},
gs_SoundFactory_createSound = ($this, $fileName, $quiet) => {
    let $doc, var$4, var$5, $url, $isOk, $syncObject, $errListener, $canplayListener, var$11, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$11 = $thread.pop();$canplayListener = $thread.pop();$errListener = $thread.pop();$syncObject = $thread.pop();$isOk = $thread.pop();$url = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();$doc = $thread.pop();$quiet = $thread.pop();$fileName = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $doc = otjdh_HTMLDocument_current();
        var$4 = $doc.createElement("audio");
        var$5 = (((jl_StringBuilder__init_()).$append8($rt_s(44))).$append8($fileName)).$toString();
        $ptr = 1;
    case 1:
        $tmp = gj_Client_getCachedResourceURL(var$5);
        if ($rt_suspending()) {
            break main;
        }
        $url = $tmp;
        if ($url === null) {
            var$5 = $rt_s(45);
            $ptr = 2;
            continue main;
        }
        if ($url !== null)
            $fileName = $url;
        var$5 = $rt_ustr($fileName);
        var$4.src = var$5;
        var$5 = "auto";
        var$4.preload = var$5;
        $isOk = $rt_createBooleanArray(1);
        $syncObject = jl_Object__init_0();
        $errListener = gs_SoundFactory$1__init_($this, $syncObject);
        $canplayListener = gs_SoundFactory$2__init_0($this, $isOk, $syncObject);
        var$4.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap($errListener), "handleEvent"));
        var$4.addEventListener("canplay", otji_JS_function(otji_JSWrapper_unwrap($canplayListener), "handleEvent"));
        $ptr = 3;
        continue main;
    case 2:
        $tmp = gj_Client_getResourceURL($fileName, var$5);
        if ($rt_suspending()) {
            break main;
        }
        $url = $tmp;
        if ($url !== null)
            $fileName = $url;
        var$5 = $rt_ustr($fileName);
        var$4.src = var$5;
        var$5 = "auto";
        var$4.preload = var$5;
        $isOk = $rt_createBooleanArray(1);
        $syncObject = jl_Object__init_0();
        $errListener = gs_SoundFactory$1__init_($this, $syncObject);
        $canplayListener = gs_SoundFactory$2__init_0($this, $isOk, $syncObject);
        var$4.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap($errListener), "handleEvent"));
        var$4.addEventListener("canplay", otji_JS_function(otji_JSWrapper_unwrap($canplayListener), "handleEvent"));
        $ptr = 3;
    case 3:
        jl_Object_monitorEnter($syncObject);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                try {
                    $ptr = 4;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_InterruptedException) {
                    } else {
                        throw $$e;
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$5);
        }
        var$11 = $isOk.data;
        var$4.removeEventListener("error", otji_JS_function(otji_JSWrapper_unwrap($errListener), "handleEvent"));
        var$4.removeEventListener("canplay", otji_JS_function(otji_JSWrapper_unwrap($canplayListener), "handleEvent"));
        if (!var$11[0] && $quiet)
            return null;
        return gs_Sound__init_(var$4);
    case 4:
        a: {
            try {
                b: {
                    try {
                        jl_Object_wait($syncObject);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$5);
        }
        var$11 = $isOk.data;
        var$4.removeEventListener("error", otji_JS_function(otji_JSWrapper_unwrap($errListener), "handleEvent"));
        var$4.removeEventListener("canplay", otji_JS_function(otji_JSWrapper_unwrap($canplayListener), "handleEvent"));
        if (!var$11[0] && $quiet)
            return null;
        return gs_Sound__init_(var$4);
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $fileName, $quiet, $doc, var$4, var$5, $url, $isOk, $syncObject, $errListener, $canplayListener, var$11, $ptr);
},
gs_SoundFactory__clinit_ = () => {
    gs_SoundFactory_instance = gs_SoundFactory__init_0();
},
CardGoblinSpear = $rt_classWithoutFields(Card),
CardGoblinSpear__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostGoblinSpear;
        $ptr = 1;
    case 1:
        TroopAllyGhostGoblinSpear__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardGoblinSpear__init_0 = () => {
    let var_0 = new CardGoblinSpear();
    CardGoblinSpear__init_(var_0);
    return var_0;
},
CardGoblinSpear_act = $this => {
    Card_act($this);
},
CardArcher = $rt_classWithoutFields(Card),
CardArcher__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostArcher;
        $ptr = 1;
    case 1:
        TroopAllyGhostArcher__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardArcher__init_0 = () => {
    let var_0 = new CardArcher();
    CardArcher__init_(var_0);
    return var_0;
},
CardArcher_act = $this => {
    Card_act($this);
},
ji_IOException = $rt_classWithoutFields(jl_Exception),
ji_IOException__init_0 = $this => {
    jl_Exception__init_($this);
},
ji_IOException__init_2 = () => {
    let var_0 = new ji_IOException();
    ji_IOException__init_0(var_0);
    return var_0;
},
ji_IOException__init_1 = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
ji_IOException__init_ = var_0 => {
    let var_1 = new ji_IOException();
    ji_IOException__init_1(var_1, var_0);
    return var_1;
};
function ScoreOverlayUp() {
    let a = this; Overlay.call(a);
    a.$one = null;
    a.$two = null;
    a.$three0 = null;
}
let ScoreOverlayUp__init_ = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(46);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$one = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(47);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$two = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(48);
        $ptr = 4;
    case 4:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$three0 = var$1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
ScoreOverlayUp__init_0 = () => {
    let var_0 = new ScoreOverlayUp();
    ScoreOverlayUp__init_(var_0);
    return var_0;
},
ScoreOverlayUp_act = $this => {
    let $score;
    $score = ($this.$getWorld()).$enemyCrowns;
    if ($score == 1)
        $this.$setImage($this.$one);
    if ($score == 2)
        $this.$setImage($this.$two);
    if ($score == 3)
        $this.$setImage($this.$three0);
};
function gc_PointCollisionQuery() {
    let a = this; jl_Object.call(a);
    a.$x1 = 0;
    a.$y1 = 0;
    a.$cls0 = null;
}
let gc_PointCollisionQuery__init_ = $this => {
    jl_Object__init_($this);
},
gc_PointCollisionQuery__init_0 = () => {
    let var_0 = new gc_PointCollisionQuery();
    gc_PointCollisionQuery__init_(var_0);
    return var_0;
},
gc_PointCollisionQuery_init = ($this, $x, $y, $cls) => {
    $this.$x1 = $x;
    $this.$y1 = $y;
    $this.$cls0 = $cls;
},
gc_PointCollisionQuery_checkCollision = ($this, $actor) => {
    if ($this.$cls0 !== null && !jl_Class_isInstance($this.$cls0, $actor))
        return 0;
    return g_ActorVisitor_containsPoint($actor, $this.$x1, $this.$y1);
},
gc_CollisionChecker = $rt_classWithoutFields(0);
function gci_IBSPColChecker() {
    let a = this; jl_Object.call(a);
    a.$actorQuery = null;
    a.$neighbourQuery = null;
    a.$pointQuery = null;
    a.$inRangeQuery = null;
    a.$cellSize = 0;
    a.$bspTree = null;
}
let gci_IBSPColChecker_debugging = 0,
gci_IBSPColChecker_dbgCounter = 0,
gci_IBSPColChecker_$callClinit = () => {
    gci_IBSPColChecker_$callClinit = $rt_eraseClinit(gci_IBSPColChecker);
    gci_IBSPColChecker__clinit_();
},
gci_IBSPColChecker__init_ = $this => {
    gci_IBSPColChecker_$callClinit();
    jl_Object__init_($this);
    $this.$actorQuery = gc_GOCollisionQuery__init_0();
    $this.$neighbourQuery = gc_NeighbourCollisionQuery__init_0();
    $this.$pointQuery = gc_PointCollisionQuery__init_0();
    $this.$inRangeQuery = gc_InRangeQuery__init_0();
},
gci_IBSPColChecker__init_0 = () => {
    let var_0 = new gci_IBSPColChecker();
    gci_IBSPColChecker__init_(var_0);
    return var_0;
},
gci_IBSPColChecker_initialize = ($this, $width, $height, $cellSize, $wrap) => {
    $this.$cellSize = $cellSize;
},
gci_IBSPColChecker_addObject = ($this, $actor) => {
    let $bounds, $splitAxis, $splitPos, $treeArea, $newArea, $bx, var$8, $newTop, $newArea_0, var$11, $treeArea_0, $by;
    $bounds = gci_IBSPColChecker_getActorBounds($this, $actor);
    if ($this.$bspTree === null) {
        if (gci_Rect_getWidth($bounds) <= gci_Rect_getHeight($bounds)) {
            $splitAxis = 1;
            $splitPos = gci_Rect_getMiddleY($bounds);
        } else {
            $splitAxis = 0;
            $splitPos = gci_Rect_getMiddleX($bounds);
        }
        $this.$bspTree = gci_BSPNodeCache_getBSPNode();
        gci_Rect_copyFrom(gci_BSPNode_getArea($this.$bspTree), $bounds);
        gci_BSPNode_setSplitAxis($this.$bspTree, $splitAxis);
        gci_BSPNode_setSplitPos($this.$bspTree, $splitPos);
        gci_BSPNode_addActor($this.$bspTree, $actor);
    } else {
        $treeArea = gci_BSPNode_getArea($this.$bspTree);
        while (!gci_Rect_contains($treeArea, $bounds)) {
            if (gci_Rect_getX($bounds) >= gci_Rect_getX($treeArea))
                $newArea = $treeArea;
            else {
                $bx = gci_Rect_getX($treeArea) - gci_Rect_getWidth($treeArea) | 0;
                $newArea = new gci_Rect;
                var$8 = gci_Rect_getY($treeArea);
                gci_Rect__init_0($newArea, $bx, var$8, gci_Rect_getRight($treeArea) - $bx | 0, gci_Rect_getHeight($treeArea));
                $newTop = gci_BSPNodeCache_getBSPNode();
                gci_Rect_copyFrom(gci_BSPNode_getArea($newTop), $newArea);
                gci_BSPNode_setSplitAxis($newTop, 0);
                gci_BSPNode_setSplitPos($newTop, gci_Rect_getX($treeArea));
                gci_BSPNode_setChild($newTop, 1, $this.$bspTree);
                $this.$bspTree = $newTop;
            }
            if (gci_Rect_getRight($bounds) <= gci_Rect_getRight($newArea))
                $newArea_0 = $newArea;
            else {
                $bx = gci_Rect_getRight($newArea) + gci_Rect_getWidth($newArea) | 0;
                $newArea_0 = new gci_Rect;
                var$8 = gci_Rect_getX($newArea);
                var$11 = gci_Rect_getY($newArea);
                gci_Rect__init_0($newArea_0, var$8, var$11, $bx - gci_Rect_getX($newArea) | 0, gci_Rect_getHeight($newArea));
                $newTop = gci_BSPNodeCache_getBSPNode();
                gci_Rect_copyFrom(gci_BSPNode_getArea($newTop), $newArea_0);
                gci_BSPNode_setSplitAxis($newTop, 0);
                gci_BSPNode_setSplitPos($newTop, gci_Rect_getRight($newArea));
                gci_BSPNode_setChild($newTop, 0, $this.$bspTree);
                $this.$bspTree = $newTop;
            }
            if (gci_Rect_getY($bounds) >= gci_Rect_getY($newArea_0))
                $treeArea_0 = $newArea_0;
            else {
                $by = gci_Rect_getY($newArea_0) - gci_Rect_getHeight($newArea_0) | 0;
                $treeArea_0 = new gci_Rect;
                var$8 = gci_Rect_getX($newArea_0);
                gci_Rect__init_0($treeArea_0, var$8, $by, gci_Rect_getWidth($newArea_0), gci_Rect_getTop($newArea_0) - $by | 0);
                $newTop = gci_BSPNodeCache_getBSPNode();
                gci_Rect_copyFrom(gci_BSPNode_getArea($newTop), $treeArea_0);
                gci_BSPNode_setSplitAxis($newTop, 1);
                gci_BSPNode_setSplitPos($newTop, gci_Rect_getY($newArea_0));
                gci_BSPNode_setChild($newTop, 1, $this.$bspTree);
                $this.$bspTree = $newTop;
            }
            if (gci_Rect_getTop($bounds) <= gci_Rect_getTop($treeArea_0)) {
                $treeArea = $treeArea_0;
                continue;
            }
            $by = gci_Rect_getTop($treeArea_0) + gci_Rect_getHeight($treeArea_0) | 0;
            $treeArea = new gci_Rect;
            var$8 = gci_Rect_getX($treeArea_0);
            var$11 = gci_Rect_getY($treeArea_0);
            gci_Rect__init_0($treeArea, var$8, var$11, gci_Rect_getWidth($treeArea_0), $by - gci_Rect_getY($treeArea_0) | 0);
            $newTop = gci_BSPNodeCache_getBSPNode();
            gci_Rect_copyFrom(gci_BSPNode_getArea($newTop), $treeArea);
            gci_BSPNode_setSplitAxis($newTop, 1);
            gci_BSPNode_setSplitPos($newTop, gci_Rect_getTop($treeArea_0));
            gci_BSPNode_setChild($newTop, 0, $this.$bspTree);
            $this.$bspTree = $newTop;
        }
        gci_IBSPColChecker_insertObject($this, $actor, $bounds, $bounds, $treeArea, $this.$bspTree);
    }
},
gci_IBSPColChecker_insertObject = ($this, $actor, $actorBounds, $bounds, $area, $node) => {
    let $leftArea, $rightArea, $leftIntersects, $rightIntersects, $newLeft, $newRight;
    if (gci_BSPNode_containsActor($node, $actor))
        return;
    a: {
        if (!gci_BSPNode_isEmpty($node)) {
            if (gci_Rect_getWidth($area) > gci_Rect_getWidth($actorBounds))
                break a;
            if (gci_Rect_getHeight($area) > gci_Rect_getHeight($actorBounds))
                break a;
        }
        gci_BSPNode_addActor($node, $actor);
        return;
    }
    $leftArea = gci_BSPNode_getLeftArea($node);
    $rightArea = gci_BSPNode_getRightArea($node);
    $leftIntersects = gci_Rect_getIntersection($leftArea, $bounds);
    $rightIntersects = gci_Rect_getIntersection($rightArea, $bounds);
    if ($leftIntersects !== null) {
        if (gci_BSPNode_getLeft($node) !== null)
            gci_IBSPColChecker_insertObject($this, $actor, $actorBounds, $leftIntersects, $leftArea, gci_BSPNode_getLeft($node));
        else {
            $newLeft = gci_IBSPColChecker_createNewNode($this, $leftArea);
            gci_BSPNode_addActor($newLeft, $actor);
            gci_BSPNode_setChild($node, 0, $newLeft);
        }
    }
    if ($rightIntersects !== null) {
        if (gci_BSPNode_getRight($node) !== null)
            gci_IBSPColChecker_insertObject($this, $actor, $actorBounds, $rightIntersects, $rightArea, gci_BSPNode_getRight($node));
        else {
            $newRight = gci_IBSPColChecker_createNewNode($this, $rightArea);
            gci_BSPNode_addActor($newRight, $actor);
            gci_BSPNode_setChild($node, 1, $newRight);
        }
    }
},
gci_IBSPColChecker_createNewNode = ($this, $area) => {
    let $splitAxis, $splitPos, $newNode;
    if (gci_Rect_getWidth($area) <= gci_Rect_getHeight($area)) {
        $splitAxis = 1;
        $splitPos = gci_Rect_getMiddleY($area);
    } else {
        $splitAxis = 0;
        $splitPos = gci_Rect_getMiddleX($area);
    }
    $newNode = gci_BSPNodeCache_getBSPNode();
    gci_BSPNode_setArea($newNode, $area);
    gci_BSPNode_setSplitAxis($newNode, $splitAxis);
    gci_BSPNode_setSplitPos($newNode, $splitPos);
    return $newNode;
},
gci_IBSPColChecker_getActorBounds = ($this, $actor) => {
    let $r;
    $r = g_ActorVisitor_getBoundingRect($actor);
    return $r;
},
gci_IBSPColChecker_removeObject = ($this, $object) => {
    let $node, $bspNode;
    $node = gci_IBSPColChecker_getNodeForActor($object);
    while ($node !== null) {
        $bspNode = gci_ActorNode_getBSPNode($node);
        gci_ActorNode_remove($node);
        gci_IBSPColChecker_checkRemoveNode($this, $bspNode);
        $node = gci_IBSPColChecker_getNodeForActor($object);
    }
},
gci_IBSPColChecker_checkRemoveNode = ($this, $node) => {
    let $node_0, $side, $left, $right;
    while ($node !== null && gci_BSPNode_isEmpty($node)) {
        $node_0 = gci_BSPNode_getParent($node);
        $side = $node_0 === null ? 3 : gci_BSPNode_getChildSide($node_0, $node);
        $left = gci_BSPNode_getLeft($node);
        $right = gci_BSPNode_getRight($node);
        if ($left === null) {
            if ($node_0 === null) {
                $this.$bspTree = $right;
                if ($right !== null)
                    gci_BSPNode_setParent($right, null);
            } else {
                if ($right !== null) {
                    gci_Rect_copyFrom(gci_BSPNode_getArea($right), gci_BSPNode_getArea($node));
                    gci_BSPNode_areaChanged($right);
                }
                gci_BSPNode_setChild($node_0, $side, $right);
            }
            gci_BSPNode_setChild($node, 1, null);
            gci_BSPNodeCache_returnNode($node);
        } else {
            if ($right !== null)
                break;
            if ($node_0 === null) {
                $this.$bspTree = $left;
                if ($left !== null)
                    gci_BSPNode_setParent($left, null);
            } else {
                if ($left !== null) {
                    gci_Rect_copyFrom(gci_BSPNode_getArea($left), gci_BSPNode_getArea($node));
                    gci_BSPNode_areaChanged($left);
                }
                gci_BSPNode_setChild($node_0, $side, $left);
            }
            gci_BSPNode_setChild($node, 0, null);
            gci_BSPNodeCache_returnNode($node);
        }
        $node = $node_0;
    }
    return $node;
},
gci_IBSPColChecker_getNodeForActor = $object => {
    gci_IBSPColChecker_$callClinit();
    return g_ActorVisitor_getData($object);
},
gci_IBSPColChecker_setNodeForActor = ($object, $node) => {
    gci_IBSPColChecker_$callClinit();
    g_ActorVisitor_setData($object, $node);
},
gci_IBSPColChecker_updateObject = ($this, $object) => {
    let $node, $newBounds, $rNode, var$5, $bspNode, var$7, $bspArea, $iter;
    $node = gci_IBSPColChecker_getNodeForActor($object);
    if ($node === null)
        return;
    $newBounds = gci_IBSPColChecker_getActorBounds($this, $object);
    if (!gci_Rect_contains(gci_BSPNode_getArea($this.$bspTree), $newBounds)) {
        while ($node !== null) {
            $rNode = gci_ActorNode_getBSPNode($node);
            gci_ActorNode_remove($node);
            gci_IBSPColChecker_checkRemoveNode($this, $rNode);
            $node = gci_ActorNode_getNext($node);
        }
        $this.$addObject($object);
        return;
    }
    while (true) {
        if ($node === null) {
            var$5 = gci_IBSPColChecker_getNodeForActor($object);
            if (var$5 === null)
                $bspNode = $this.$bspTree;
            else {
                $bspNode = gci_ActorNode_getBSPNode(var$5);
                while ($bspNode !== null && !gci_Rect_contains(gci_BSPNode_getArea($bspNode), $newBounds)) {
                    $bspNode = gci_BSPNode_getParent($bspNode);
                }
                if ($bspNode === null) {
                    while (var$5 !== null) {
                        var$7 = gci_ActorNode_getBSPNode(var$5);
                        gci_ActorNode_remove(var$5);
                        gci_IBSPColChecker_checkRemoveNode($this, var$7);
                        var$5 = gci_ActorNode_getNext(var$5);
                    }
                    $this.$addObject($object);
                    return;
                }
            }
            $bspArea = gci_BSPNode_getArea($bspNode);
            gci_IBSPColChecker_insertObject($this, $object, $newBounds, $newBounds, $bspArea, $bspNode);
            var$5 = gci_IBSPColChecker_getNodeForActor($object);
            while (var$5 !== null) {
                if (!gci_ActorNode_checkMark(var$5)) {
                    var$7 = gci_ActorNode_getBSPNode(var$5);
                    gci_ActorNode_remove(var$5);
                    gci_IBSPColChecker_checkRemoveNode($this, var$7);
                }
                var$5 = gci_ActorNode_getNext(var$5);
            }
            return;
        }
        $bspNode = gci_ActorNode_getBSPNode($node);
        $bspArea = gci_BSPNode_getArea($bspNode);
        if (gci_Rect_contains($bspArea, $newBounds)) {
            $iter = gci_IBSPColChecker_getNodeForActor($object);
            while ($iter !== null) {
                if ($iter !== $node) {
                    $rNode = gci_ActorNode_getBSPNode($iter);
                    gci_ActorNode_remove($iter);
                    gci_IBSPColChecker_checkRemoveNode($this, $rNode);
                }
                $iter = gci_ActorNode_getNext($iter);
            }
            return;
        }
        if (!gci_Rect_intersects($bspArea, $newBounds)) {
            $rNode = gci_ActorNode_getBSPNode($node);
            gci_ActorNode_remove($node);
            gci_IBSPColChecker_checkRemoveNode($this, $rNode);
            if ($this.$bspTree === null)
                break;
        }
        gci_ActorNode_clearMark($node);
        $node = gci_ActorNode_getNext($node);
    }
    $this.$addObject($object);
},
gci_IBSPColChecker_updateObjectLocation = ($this, $object, $oldX, $oldY) => {
    gci_IBSPColChecker_updateObject($this, $object);
},
gci_IBSPColChecker_updateObjectSize = ($this, $object) => {
    gci_IBSPColChecker_updateObject($this, $object);
},
gci_IBSPColChecker_getIntersectingObjects = ($this, $r, $query) => {
    let $set, $l;
    $set = ju_HashSet__init_1();
    gci_IBSPColChecker_getIntersectingObjects0($this, $r, $query, $set, $this.$bspTree);
    $l = ju_ArrayList__init_4($set);
    return $l;
},
gci_IBSPColChecker_getIntersectingObjects0 = ($this, $r, $query, $resultSet, $startNode) => {
    let $nodeStack, $node, $i, $actor, $left, $right;
    $nodeStack = ju_LinkedList__init_();
    if ($startNode !== null)
        $nodeStack.$add0($startNode);
    while (!$nodeStack.$isEmpty()) {
        $node = $nodeStack.$removeLast();
        if (gci_Rect_intersects(gci_BSPNode_getArea($node), $r)) {
            $i = gci_BSPNode_getActorsIterator($node);
            while ($i.$hasNext()) {
                $actor = $i.$next();
                if ($query.$checkCollision($actor) && !$resultSet.$contains0($actor))
                    $resultSet.$add0($actor);
            }
            $left = gci_BSPNode_getLeft($node);
            $right = gci_BSPNode_getRight($node);
            if ($left !== null)
                $nodeStack.$add0($left);
            if ($right !== null)
                $nodeStack.$add0($right);
        }
    }
},
gci_IBSPColChecker_checkForOneCollision = ($this, $ignore, $node, $query) => {
    let $i, $candidate;
    $i = gci_BSPNode_getActorsIterator($node);
    while (true) {
        if (!$i.$hasNext())
            return null;
        $candidate = $i.$next();
        if ($ignore !== $candidate && $query.$checkCollision($candidate))
            break;
    }
    return $candidate;
},
gci_IBSPColChecker_getOneObjectDownTree = ($this, $ignore, $r, $query, $startNode) => {
    let $nodeStack, $node, $res, $left, $right;
    if ($startNode === null)
        return null;
    $nodeStack = ju_LinkedList__init_();
    $nodeStack.$add0($startNode);
    while (true) {
        if ($nodeStack.$isEmpty())
            return null;
        $node = $nodeStack.$removeLast();
        if (gci_Rect_intersects(gci_BSPNode_getArea($node), $r)) {
            $res = gci_IBSPColChecker_checkForOneCollision($this, $ignore, $node, $query);
            if ($res !== null)
                break;
            $left = gci_BSPNode_getLeft($node);
            $right = gci_BSPNode_getRight($node);
            if ($left !== null)
                $nodeStack.$add0($left);
            if ($right !== null)
                $nodeStack.$add0($right);
        }
    }
    return $res;
},
gci_IBSPColChecker_getOneIntersectingDown = ($this, $r, $query, $actor) => {
    let $nodeStack, $node, $res, $left, $right;
    if ($this.$bspTree === null)
        return null;
    $nodeStack = ju_LinkedList__init_();
    $nodeStack.$add0($this.$bspTree);
    while (true) {
        if ($nodeStack.$isEmpty())
            return null;
        $node = $nodeStack.$removeLast();
        if (gci_Rect_contains(gci_BSPNode_getArea($node), $r)) {
            $res = gci_IBSPColChecker_checkForOneCollision($this, $actor, $node, $query);
            if ($res !== null)
                break;
            $left = gci_BSPNode_getLeft($node);
            $right = gci_BSPNode_getRight($node);
            if ($left !== null)
                $nodeStack.$add0($left);
            if ($right !== null)
                $nodeStack.$add0($right);
        }
    }
    return $res;
},
gci_IBSPColChecker_getOneIntersectingUp = ($this, $r, $query, $actor, $start) => {
    let $res;
    a: {
        while (true) {
            if ($start === null)
                break a;
            if (gci_Rect_contains(gci_BSPNode_getArea($start), $r))
                break a;
            $res = gci_IBSPColChecker_checkForOneCollision($this, $actor, $start, $query);
            if ($res !== null)
                break;
            $start = gci_BSPNode_getParent($start);
        }
        return $res;
    }
    return null;
},
gci_IBSPColChecker_getObjectsAt = ($this, $x, $y, $cls) => {
    let var$4, $px, $py, var$7, $$je;
    var$4 = $this.$pointQuery;
    jl_Object_monitorEnterSync(var$4);
    a: {
        try {
            $px = $rt_imul($x, $this.$cellSize) + ($this.$cellSize / 2 | 0) | 0;
            $py = $rt_imul($y, $this.$cellSize) + ($this.$cellSize / 2 | 0) | 0;
            $this.$pointQuery.$init($px, $py, $cls);
            var$7 = gci_IBSPColChecker_getIntersectingObjects($this, gci_Rect__init_($px, $py, 1, 1), $this.$pointQuery);
            jl_Object_monitorExitSync(var$4);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$7 = $$je;
            break a;

        }
        return var$7;
    }
    jl_Object_monitorExitSync(var$4);
    $rt_throw(var$7);
},
gci_IBSPColChecker_getObjectsInRange = ($this, $x, $y, $r, $cls) => {
    let $halfCell, $size, $rect, var$8, $result, var$10, $i, $$je;
    $halfCell = $this.$cellSize / 2 | 0;
    $size = $rt_imul(2 * $r | 0, $this.$cellSize);
    $rect = gci_Rect__init_($rt_imul($x - $r | 0, $this.$cellSize) + $halfCell | 0, $rt_imul($y - $r | 0, $this.$cellSize) + $halfCell | 0, $size, $size);
    var$8 = $this.$actorQuery;
    jl_Object_monitorEnterSync(var$8);
    a: {
        try {
            $this.$actorQuery.$init0($cls, null);
            $result = gci_IBSPColChecker_getIntersectingObjects($this, $rect, $this.$actorQuery);
            jl_Object_monitorExitSync(var$8);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$10 = $$je;

        }
        jl_Object_monitorExitSync(var$8);
        $rt_throw(var$10);
    }
    $i = $result.$iterator();
    var$10 = $this.$inRangeQuery;
    jl_Object_monitorEnterSync(var$10);
    b: {
        try {
            $this.$inRangeQuery.$init1($rt_imul($x, $this.$cellSize) + $halfCell | 0, $rt_imul($y, $this.$cellSize) + $halfCell | 0, $rt_imul($r, $this.$cellSize));
            while ($i.$hasNext()) {
                if ($this.$inRangeQuery.$checkCollision($i.$next()))
                    continue;
                $i.$remove1();
            }
            jl_Object_monitorExitSync(var$10);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$8 = $$je;
            break b;

        }
        return $result;
    }
    jl_Object_monitorExitSync(var$10);
    $rt_throw(var$8);
},
gci_IBSPColChecker_startSequence = $this => {
    return;
},
gci_IBSPColChecker_getOneIntersectingObject = ($this, $actor, $cls) => {
    let $r, var$4, $node, var$6, $bspNode, $ret, $$je;
    $r = gci_IBSPColChecker_getActorBounds($this, $actor);
    var$4 = $this.$actorQuery;
    jl_Object_monitorEnterSync(var$4);
    a: {
        try {
            $this.$actorQuery.$init0($cls, $actor);
            $node = gci_IBSPColChecker_getNodeForActor($actor);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$6 = $$je;
            break a;

        }
        b: {
            c: {
                try {
                    while (true) {
                        $bspNode = gci_ActorNode_getBSPNode($node);
                        $ret = gci_IBSPColChecker_getOneObjectDownTree($this, $actor, $r, $this.$actorQuery, $bspNode);
                        if ($ret !== null)
                            break;
                        var$6 = $this.$getOneIntersectingUp($r, $this.$actorQuery, $actor, gci_BSPNode_getParent($bspNode));
                        if (var$6 !== null)
                            break c;
                        $node = gci_ActorNode_getNext($node);
                        if ($node === null)
                            break b;
                    }
                    jl_Object_monitorExitSync(var$4);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$6 = $$je;
                    break a;

                }
                return $ret;
            }
            try {
                jl_Object_monitorExitSync(var$4);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$6 = $$je;
                break a;

            }
            return var$6;
        }
        try {
            var$6 = gci_IBSPColChecker_getOneIntersectingDown($this, $r, $this.$actorQuery, $actor);
            jl_Object_monitorExitSync(var$4);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$6 = $$je;
            break a;

        }
        return var$6;
    }
    jl_Object_monitorExitSync(var$4);
    $rt_throw(var$6);
},
gci_IBSPColChecker__clinit_ = () => {
    gci_IBSPColChecker_debugging = 0;
    gci_IBSPColChecker_dbgCounter = 0;
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index = 0;
    a.$modCount1 = 0;
    a.$size3 = 0;
    a.$removeIndex = 0;
    a.$this$00 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    jl_Object__init_($this);
    $this.$modCount1 = $this.$this$00.$modCount;
    $this.$size3 = $this.$this$00.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index >= $this.$size3 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index;
    var$1 = $this.$this$00;
    var$2 = $this.$index;
    $this.$index = var$2 + 1 | 0;
    return var$1.$get(var$2);
},
ju_AbstractList$1_remove = $this => {
    if ($this.$removeIndex < 0)
        $rt_throw(jl_IllegalStateException__init_2());
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$this$00.$remove2($this.$removeIndex);
    $this.$modCount1 = $this.$this$00.$modCount;
    if ($this.$removeIndex < $this.$index)
        $this.$index = $this.$index - 1 | 0;
    $this.$size3 = $this.$size3 - 1 | 0;
    $this.$removeIndex = (-1);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount1 >= $this.$this$00.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
CardPoison = $rt_classWithoutFields(Card),
CardPoison__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostPoison;
        $ptr = 1;
    case 1:
        TroopAllyGhostPoison__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardPoison__init_0 = () => {
    let var_0 = new CardPoison();
    CardPoison__init_(var_0);
    return var_0;
},
CardPoison_act = $this => {
    Card_act($this);
},
Music = $rt_classWithoutFields(g_Actor),
Music_screenMusic = null,
Music_battleMusic = null,
Music_$_teavm_clinitCalled_$ = false,
Music_$callClinit = () => {
    let $ptr = 0;
    if ($rt_resuming()) {
        $ptr = $rt_nativeThread().pop();
    } else if (Music_$_teavm_clinitCalled_$) {
        return;
    }
    main: while (true) { switch ($ptr) {
    case 0:
        Music_$_teavm_clinitCalled_$ = true;
        $ptr = 1;
    case 1:
        Music__clinit_();
        if ($rt_suspending()) {
            break main;
        }
        Music_$callClinit = $rt_eraseClinit(Music);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($ptr);
},
Music__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Music_$callClinit();
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$setImage(null);
        Music_screenMusic.$setVolume(45);
        Music_battleMusic.$setVolume(55);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Music__init_0 = () => {
    let var_0 = new Music();
    Music__init_(var_0);
    return var_0;
},
Music_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (jl_Object_getClass($this.$getWorld()) === $rt_cls(ClashWorld) && !Music_battleMusic.$isPlaying()) {
            Music_screenMusic.$stop();
            Music_battleMusic.$play();
        }
        a: {
            if (!(jl_Object_getClass($this.$getWorld()) === $rt_cls(DifficultyMenuWorld) && !Music_screenMusic.$isPlaying()) && !(jl_Object_getClass($this.$getWorld()) === $rt_cls(DeckMenuWorld) && !Music_screenMusic.$isPlaying())) {
                if (jl_Object_getClass($this.$getWorld()) !== $rt_cls(ScreenMainWorld))
                    break a;
                if (Music_screenMusic.$isPlaying())
                    break a;
            }
            Music_battleMusic.$stop();
            Music_screenMusic.$play();
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
Music__clinit_ = () => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new g_GreenfootSound;
        var$2 = $rt_s(49);
        $ptr = 1;
    case 1:
        g_GreenfootSound__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        Music_screenMusic = var$1;
        var$1 = new g_GreenfootSound;
        var$2 = $rt_s(50);
        $ptr = 2;
    case 2:
        g_GreenfootSound__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        Music_battleMusic = var$1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, var$2, $ptr);
},
ZoneTroopsPlaceLeft = $rt_classWithoutFields(ZoneTroopsPlace),
ZoneTroopsPlaceLeft__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        ZoneTroopsPlace__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ZoneTroopsPlaceLeft__init_0 = () => {
    let var_0 = new ZoneTroopsPlaceLeft();
    ZoneTroopsPlaceLeft__init_(var_0);
    return var_0;
},
ProjectileCannonEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileCannonEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 8;
        var$3 = 4;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileCannonEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileCannonEnemy();
    ProjectileCannonEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileCannonEnemy_act = $this => {
    ProjectileEnemy_act($this);
},
gc_ActInterruptedException = $rt_classWithoutFields(jl_RuntimeException),
gc_ActInterruptedException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
gc_ActInterruptedException__init_0 = () => {
    let var_0 = new gc_ActInterruptedException();
    gc_ActInterruptedException__init_(var_0);
    return var_0;
};
function gc_ImageCache() {
    jl_Object.call(this);
    this.$imageCache = null;
}
let gc_ImageCache_instance = null,
gc_ImageCache_$callClinit = () => {
    gc_ImageCache_$callClinit = $rt_eraseClinit(gc_ImageCache);
    gc_ImageCache__clinit_();
},
gc_ImageCache__init_ = $this => {
    gc_ImageCache_$callClinit();
    jl_Object__init_($this);
    $this.$imageCache = ju_HashMap__init_();
},
gc_ImageCache__init_0 = () => {
    let var_0 = new gc_ImageCache();
    gc_ImageCache__init_(var_0);
    return var_0;
},
gc_ImageCache_getInstance = () => {
    gc_ImageCache_$callClinit();
    return gc_ImageCache_instance;
},
gc_ImageCache_addCachedImage = ($this, $fileName, $image) => {
    let var$3, $cr, var$5, $$je;
    var$3 = $this.$imageCache;
    jl_Object_monitorEnterSync(var$3);
    a: {
        try {
            if ($image === null)
                $this.$imageCache.$put($fileName, null);
            else {
                $cr = gc_ImageCache$CachedImageRef__init_0($this, $fileName, $image);
                $this.$imageCache.$put($fileName, $cr);
            }
            jl_Object_monitorExitSync(var$3);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$5 = $$je;
            break a;

        }
        return 1;
    }
    jl_Object_monitorExitSync(var$3);
    $rt_throw(var$5);
},
gc_ImageCache_getCachedImage = ($this, $fileName) => {
    let var$2, $sr, var$4, $$je;
    var$2 = $this.$imageCache;
    jl_Object_monitorEnterSync(var$2);
    a: {
        b: {
            try {
                $sr = $this.$imageCache.$get0($fileName);
                if ($sr !== null)
                    break b;
                var$4 = null;
                jl_Object_monitorExitSync(var$2);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;
                break a;

            }
            return var$4;
        }
        try {
            var$4 = $sr.$get1();
            jl_Object_monitorExitSync(var$2);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        return var$4;
    }
    jl_Object_monitorExitSync(var$2);
    $rt_throw(var$4);
},
gc_ImageCache__clinit_ = () => {
    gc_ImageCache_instance = gc_ImageCache__init_0();
};
function DoubleElixirText() {
    let a = this; Overlay.call(a);
    a.$time2 = 0;
    a.$speed1 = 0;
    a.$speedTime = 0;
    a.$image5 = null;
}
let DoubleElixirText__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$time2 = 10;
        $this.$speed1 = 14;
        $this.$speedTime = 3;
        $this.$image5 = $this.$getImage1();
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
DoubleElixirText__init_0 = () => {
    let var_0 = new DoubleElixirText();
    DoubleElixirText__init_(var_0);
    return var_0;
},
DoubleElixirText_act = $this => {
    let $image1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$image1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time2 = $this.$time2 + $this.$speed1 | 0;
        if ($this.$speed1 > 1) {
            $this.$speedTime = $this.$speedTime - 1 | 0;
            if (!$this.$speedTime) {
                $this.$speed1 = $this.$speed1 - 1 | 0;
                $this.$speedTime = 3;
            }
        }
        if ($this.$time2 >= 300) {
            if ($this.$time2 == 400)
                ($this.$getWorld()).$removeObject($this);
            return;
        }
        $this.$image5.$scale($this.$time2, $this.$time2);
        $image1 = new g_GreenfootImage;
        var$2 = $rt_s(51);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_($image1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image5.$getHeight() + $this.$speed1 | 0, $this.$image5.$getWidth() + $this.$speed1 | 0);
        $this.$setImage($image1);
        if ($this.$time2 == 400)
            ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $image1, var$2, $ptr);
},
ge_WorldListener = $rt_classWithoutFields(0);
function gc_Simulation() {
    let a = this; jl_Thread.call(a);
    a.$worldHandler = null;
    a.$paused = 0;
    a.$enabled = 0;
    a.$runOnce = 0;
    a.$queuedTasks = null;
    a.$listenerList = null;
    a.$startedEvent = null;
    a.$stoppedEvent = null;
    a.$disabledEvent = null;
    a.$speedChangeEvent = null;
    a.$debuggerPausedEvent = null;
    a.$debuggerResumedEvent = null;
    a.$newActRoundEvent = null;
    a.$taskBeginEvent = null;
    a.$taskEndEvent = null;
    a.$speed5 = 0;
    a.$lastDelayTime = Long_ZERO;
    a.$delay0 = Long_ZERO;
    a.$repaintLock = null;
    a.$delegate = null;
    a.$interruptLock = null;
    a.$delaying = 0;
    a.$interruptDelay0 = 0;
    a.$asking = 0;
    a.$isRunning = 0;
    a.$abort = 0;
}
let gc_Simulation_instance = null,
gc_Simulation_RUN_QUEUED_TASKS = null,
gc_Simulation_$callClinit = () => {
    gc_Simulation_$callClinit = $rt_eraseClinit(gc_Simulation);
    gc_Simulation__clinit_();
},
gc_Simulation__init_ = ($this, $simulationDelegate) => {
    gc_Simulation_$callClinit();
    jl_Thread__init_1($this);
    $this.$queuedTasks = ju_LinkedList__init_();
    $this.$listenerList = ju_ArrayList__init_0();
    $this.$repaintLock = jl_Object__init_0();
    $this.$interruptLock = jl_Object__init_0();
    $this.$isRunning = 0;
    $this.$delegate = $simulationDelegate;
    $this.$startedEvent = ge_SimulationEvent__init_($this, 0);
    $this.$stoppedEvent = ge_SimulationEvent__init_($this, 1);
    $this.$speedChangeEvent = ge_SimulationEvent__init_($this, 2);
    $this.$disabledEvent = ge_SimulationEvent__init_($this, 3);
    $this.$debuggerPausedEvent = ge_SimulationEvent__init_($this, 5);
    $this.$debuggerResumedEvent = ge_SimulationEvent__init_($this, 6);
    $this.$newActRoundEvent = ge_SimulationEvent__init_($this, 7);
    $this.$taskBeginEvent = ge_SimulationEvent__init_($this, 8);
    $this.$taskEndEvent = ge_SimulationEvent__init_($this, 9);
    jl_Thread_setPriority($this, 1);
    $this.$paused = 1;
    $this.$speed5 = 50;
    $this.$delay0 = gc_Simulation_calculateDelay($this, $this.$speed5);
},
gc_Simulation__init_0 = var_0 => {
    let var_1 = new gc_Simulation();
    gc_Simulation__init_(var_1, var_0);
    return var_1;
},
gc_Simulation_initialize = $simulationDelegate => {
    gc_Simulation_$callClinit();
    gc_Simulation_instance = gc_Simulation__init_0($simulationDelegate);
},
gc_Simulation_getInstance = () => {
    gc_Simulation_$callClinit();
    return gc_Simulation_instance;
},
gc_Simulation_attachWorldHandler = ($this, $worldHandler) => {
    $this.$worldHandler = $worldHandler;
    $worldHandler.$addWorldListener($this);
    $this.$addSimulationListener($worldHandler);
    $this.$start();
},
gc_Simulation_run = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        gc_Simulation_runContent($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
gc_Simulation_runContent = $this => {
    let $t, $world, var$3, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$world = $thread.pop();$t = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        while (!$this.$abort) {
            a: {
                b: {
                    try {
                        $ptr = 2;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break b;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            $ptr = 3;
                            continue main;
                        } else {
                            throw $$e;
                        }
                    }
                    break a;
                }
            }
            ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
        }
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        c: {
            try {
                if ($this.$isRunning) {
                    $world = $this.$worldHandler.$getWorld();
                    if ($world !== null)
                        gc_Simulation_worldStopped($world);
                    $this.$isRunning = 0;
                }
                jl_Object_monitorExit($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;
                break c;

            }
            return;
        }
        jl_Object_monitorExit($this);
        $rt_throw(var$3);
    case 2:
        c: {
            d: {
                a: {
                    try {
                        gc_Simulation_maybePause($this);
                        if ($rt_suspending()) {
                            break main;
                        }
                        if (!$this.$worldHandler.$hasWorld()) {
                            $ptr = 4;
                            continue main;
                        }
                        var$3 = $this.$worldHandler.$getWorld();
                        $ptr = 5;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break a;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    break d;
                }
            }
            e: while (true) {
                ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
                if ($this.$abort)
                    break;
                f: {
                    try {
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break f;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    continue e;
                }
            }
            $ptr = 1;
            continue main;
        }
        $ptr = 3;
    case 3:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        c: {
            try {
                $this.$paused = 1;
                jl_Object_monitorExit($this);
                break c;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        $t.$printStackTrace();
        a: while (true) {
            ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
            if ($this.$abort)
                break;
            g: {
                try {
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof gc_ActInterruptedException) {
                    } else if ($$je instanceof jl_InterruptedException) {
                        break g;
                    } else if ($$je instanceof jl_Throwable) {
                        $t = $$je;
                        continue main;
                    } else {
                        throw $$e;
                    }
                }
                continue a;
            }
        }
        $ptr = 1;
        continue main;
    case 4:
        c: {
            d: {
                a: {
                    try {
                        gc_Simulation_delay($this);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break d;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break a;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    break d;
                }
            }
            g: while (true) {
                ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
                if ($this.$abort)
                    break;
                h: {
                    try {
                        $ptr = 2;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break h;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    continue g;
                }
            }
            $ptr = 1;
            continue main;
        }
        $ptr = 3;
        continue main;
    case 5:
        c: {
            d: {
                a: {
                    try {
                        gc_Simulation_runOneLoop($this, var$3);
                        if ($rt_suspending()) {
                            break main;
                        }
                        $ptr = 4;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break a;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    break d;
                }
            }
            g: while (true) {
                ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
                if ($this.$abort)
                    break;
                h: {
                    try {
                        $ptr = 2;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof gc_ActInterruptedException) {
                        } else if ($$je instanceof jl_InterruptedException) {
                            break h;
                        } else if ($$je instanceof jl_Throwable) {
                            $t = $$je;
                            break c;
                        } else {
                            throw $$e;
                        }
                    }
                    continue g;
                }
            }
            $ptr = 1;
            continue main;
        }
        $ptr = 3;
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $t, $world, var$3, $ptr);
},
gc_Simulation_simulationWait = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        jl_Object_wait($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
gc_Simulation_worldStarted = $world => {
    gc_Simulation_$callClinit();
    $world.$started();
},
gc_Simulation_worldStopped = $world => {
    gc_Simulation_$callClinit();
    $world.$stopped();
},
gc_Simulation_maybePause = $this => {
    let $checkStop, $world, var$3, var$4, $doResumeRunning, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$doResumeRunning = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$world = $thread.pop();$checkStop = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            b: {
                try {
                    $checkStop = !(!$this.$paused && $this.$enabled) && $this.$isRunning ? 1 : 0;
                    $world = $this.$worldHandler.$getWorld();
                    if ($checkStop) {
                        $this.$isRunning = 0;
                        var$3 = $this.$interruptLock;
                        $ptr = 2;
                        continue main;
                    }
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$3 = $$je;
                    break b;

                }
                c: {
                    try {
                        if (!$this.$isRunning)
                            break c;
                        jl_Object_monitorExit($this);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$3 = $$je;
                        break b;

                    }
                    return;
                }
                try {
                    jl_Object_monitorExit($this);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$3 = $$je;

                }
            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        if (!$checkStop) {
            $ptr = 3;
            continue main;
        }
        d: {
            try {
                gc_Simulation_signalStopping($this, $world);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                    break d;
                } else {
                    throw $$e;
                }
            }
            $ptr = 4;
            continue main;
        }
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        continue main;
    case 2:
        a: {
            try {
                jl_Object_monitorEnter(var$3);
                if ($rt_suspending()) {
                    break main;
                }
                e: {
                    try {
                        $this.$interruptDelay0 = 0;
                        jl_Object_monitorExit(var$3);
                        break e;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$4 = $$je;

                    }
                    jl_Object_monitorExit(var$3);
                    $rt_throw(var$4);
                }
                jl_Object_monitorExit($this);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        if (!$checkStop) {
            $ptr = 3;
            continue main;
        }
        f: {
            try {
                gc_Simulation_signalStopping($this, $world);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                    break f;
                } else {
                    throw $$e;
                }
            }
            $ptr = 4;
            continue main;
        }
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        $ptr = 1;
        continue main;
    case 3:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            b: {
                e: {
                    try {
                        $doResumeRunning = !$this.$paused && $this.$enabled && !$this.$abort && !$this.$isRunning ? 1 : 0;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$3 = $$je;
                        break e;

                    }
                    g: {
                        try {
                            if (!$this.$isRunning && !$doResumeRunning && !$this.$runOnce)
                                break g;
                            jl_Object_monitorExit($this);
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$3 = $$je;
                            break e;

                        }
                        if ($doResumeRunning)
                            gc_Simulation_resumeRunning($this);
                        $ptr = 5;
                        continue main;
                    }
                    d: {
                        try {
                            if (!$this.$enabled)
                                break d;
                            gc_Simulation_fireSimulationEvent($this, $this.$stoppedEvent);
                            break d;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$3 = $$je;
                            break e;

                        }
                    }
                    h: {
                        try {
                            if ($this.$worldHandler === null)
                                break h;
                            $this.$worldHandler.$repaint();
                            break h;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$3 = $$je;
                            break e;

                        }
                    }
                    i: {
                        try {
                            if ($this.$queuedTasks.$isEmpty())
                                break i;
                            jl_Object_monitorExit($this);
                            break a;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$3 = $$je;
                            break e;

                        }
                    }
                    try {
                        jl_System_gc();
                        try {
                            $ptr = 6;
                            continue main;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_InterruptedException) {
                            } else {
                                throw $$e;
                            }
                        }
                        jl_Object_monitorExit($this);
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$3 = $$je;

                    }
                }
                jl_Object_monitorExit($this);
                $rt_throw(var$3);
            }
        }
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        $ptr = 1;
        continue main;
    case 4:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                $this.$runOnce = 0;
                if (!$this.$paused)
                    $this.$isRunning = $this.$enabled;
                jl_Object_monitorExit($this);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        $ptr = 3;
        continue main;
    case 5:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            b: {
                e: {
                    try {
                        if (!$this.$runOnce && !$this.$isRunning)
                            break e;
                        $this.$runOnce = 0;
                        jl_Object_monitorExit($this);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$3 = $$je;
                        break b;

                    }
                    return;
                }
                try {
                    jl_Object_monitorExit($this);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$3 = $$je;

                }
            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        $ptr = 1;
        continue main;
    case 6:
        a: {
            try {
                e: {
                    try {
                        gc_Simulation_simulationWait($this);
                        if ($rt_suspending()) {
                            break main;
                        }
                        $this.$lastDelayTime = jl_System_nanoTime();
                        break e;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                jl_Object_monitorExit($this);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            jl_Object_monitorExit($this);
            $rt_throw(var$3);
        }
        if ($this.$abort) {
            gc_Simulation_runQueuedTasks($this);
            return;
        }
        gc_Simulation_runQueuedTasks($this);
        $ptr = 1;
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $checkStop, $world, var$3, var$4, $doResumeRunning, $ptr);
},
gc_Simulation_resumeRunning = $this => {
    let $world, $t, var$3, var$4, $$je;
    a: {
        b: {
            c: {
                d: {
                    $this.$isRunning = 1;
                    $this.$lastDelayTime = jl_System_nanoTime();
                    gc_Simulation_fireSimulationEvent($this, $this.$startedEvent);
                    $world = $this.$worldHandler.$getWorld();
                    if ($world !== null)
                        try {
                            gc_Simulation_worldStarted($world);
                            break d;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_Throwable) {
                                $t = $$je;
                                break c;
                            } else{
                                var$3 = $$je;
                                break b;
                            }
                        }
                }
                return;
            }
            try {
                $this.$isRunning = 0;
                var$3 = $this.$interruptLock;
                jl_Object_monitorEnterSync(var$3);
                e: {
                    try {
                        jl_Thread_interrupted();
                        $this.$interruptDelay0 = 0;
                        jl_Object_monitorExitSync(var$3);
                        break e;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$4 = $$je;

                    }
                    jl_Object_monitorExitSync(var$3);
                    $rt_throw(var$4);
                }
                $this.$setPaused(1);
                $t.$printStackTrace();
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
        }
        $rt_throw(var$3);
    }
},
gc_Simulation_signalStopping = ($this, $world) => {
    let $aie, $t, var$4, $$je;
    a: {
        if ($world !== null)
            b: {
                try {
                    c: {
                        try {
                            gc_Simulation_worldStopped($world);
                            break a;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof gc_ActInterruptedException) {
                                $aie = $$je;
                            } else if ($$je instanceof jl_Throwable) {
                                $t = $$je;
                                break c;
                            } else {
                                throw $$e;
                            }
                        }
                        jl_Object_monitorEnterSync($this);
                        d: {
                            try {
                                $this.$paused = 1;
                                jl_Object_monitorExitSync($this);
                                break d;
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                var$4 = $$je;

                            }
                            jl_Object_monitorExitSync($this);
                            $rt_throw(var$4);
                        }
                        $rt_throw($aie);
                    }
                    jl_Object_monitorEnterSync($this);
                    e: {
                        try {
                            $this.$paused = 1;
                            jl_Object_monitorExitSync($this);
                            break e;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$4 = $$je;

                        }
                        jl_Object_monitorExitSync($this);
                        $rt_throw(var$4);
                    }
                    $t.$printStackTrace();
                    break b;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$4 = $$je;

                }
                $rt_throw(var$4);
            }
    }
},
gc_Simulation_runQueuedTasks = $this => {
    let $r, var$2, $world, $t, $$je;
    jl_Object_monitorEnterSync($this);
    a: {
        try {
            $r = $this.$queuedTasks.$poll();
            jl_Object_monitorExitSync($this);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;

        }
        jl_Object_monitorExitSync($this);
        $rt_throw(var$2);
    }
    while ($r !== null) {
        $world = (gc_WorldHandler_getInstance()).$getWorld();
        gc_Simulation_fireSimulationEvent($this, $this.$taskBeginEvent);
        b: {
            try {
                $r.$run();
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Throwable) {
                    $t = $$je;
                } else {
                    throw $$e;
                }
            }
            $t.$printStackTrace();
        }
        gc_Simulation_fireSimulationEvent($this, $this.$taskEndEvent);
        jl_Object_monitorEnterSync($this);
        try {
            $r = $this.$queuedTasks.$poll();
            jl_Object_monitorExitSync($this);
            continue;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;
            jl_Object_monitorExitSync($this);
            $rt_throw(var$2);

        }
    }
},
gc_Simulation_runOneLoop = ($this, $world) => {
    let $e, $allObjects, $awakeObjects, var$5, $possiblySleepingActor, var$7, $actor, $e_0, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$e_0 = $thread.pop();$actor = $thread.pop();var$7 = $thread.pop();$possiblySleepingActor = $thread.pop();var$5 = $thread.pop();$awakeObjects = $thread.pop();$allObjects = $thread.pop();$e = $thread.pop();$world = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gc_Simulation_fireSimulationEvent($this, $this.$newActRoundEvent);
        $e = null;
        try {
            $ptr = 1;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof gc_ActInterruptedException) {
                $e = $$je;
            } else {
                throw $$e;
            }
        }
        $allObjects = g_WorldVisitor_getObjectsListInActOrder($world);
        $awakeObjects = ju_ArrayList__init_3($allObjects.$size());
        var$5 = $allObjects.$iterator();
        while (var$5.$hasNext()) {
            $possiblySleepingActor = var$5.$next();
            if (g_ActorVisitor_decrementSleepForIfPositive($possiblySleepingActor))
                $awakeObjects.$add0($possiblySleepingActor);
        }
        var$7 = $awakeObjects.$iterator();
        while (true) {
            if (!var$7.$hasNext()) {
                if ($e !== null)
                    $rt_throw($e);
                gc_Simulation_repaintIfNeeded($this);
                return;
            }
            $actor = var$7.$next();
            if (!$this.$enabled)
                break;
            if (g_ActorVisitor_getWorld($actor) !== null) {
                try {
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof gc_ActInterruptedException) {
                        $e_0 = $$je;
                    } else {
                        throw $$e;
                    }
                }
                if ($e === null)
                    $e = $e_0;
            }
        }
        return;
    case 1:
        a: {
            b: {
                try {
                    gc_Simulation_actWorld($world);
                    if ($rt_suspending()) {
                        break main;
                    }
                    if ($world === $this.$worldHandler.$getWorld())
                        break b;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof gc_ActInterruptedException) {
                        $e = $$je;
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                return;
            }
        }
        $allObjects = g_WorldVisitor_getObjectsListInActOrder($world);
        $awakeObjects = ju_ArrayList__init_3($allObjects.$size());
        var$5 = $allObjects.$iterator();
        while (var$5.$hasNext()) {
            $possiblySleepingActor = var$5.$next();
            if (g_ActorVisitor_decrementSleepForIfPositive($possiblySleepingActor))
                $awakeObjects.$add0($possiblySleepingActor);
        }
        var$7 = $awakeObjects.$iterator();
        while (true) {
            if (!var$7.$hasNext()) {
                if ($e !== null)
                    $rt_throw($e);
                gc_Simulation_repaintIfNeeded($this);
                return;
            }
            $actor = var$7.$next();
            if (!$this.$enabled)
                break;
            if (g_ActorVisitor_getWorld($actor) !== null) {
                try {
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof gc_ActInterruptedException) {
                        $e_0 = $$je;
                    } else {
                        throw $$e;
                    }
                }
                if ($e === null)
                    $e = $e_0;
            }
        }
        return;
    case 2:
        a: {
            b: {
                try {
                    gc_Simulation_actActor($actor);
                    if ($rt_suspending()) {
                        break main;
                    }
                    if ($world === $this.$worldHandler.$getWorld())
                        break b;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof gc_ActInterruptedException) {
                        $e_0 = $$je;
                        if ($e !== null)
                            break a;
                        $e = $e_0;
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                return;
            }
        }
        while (true) {
            if (!var$7.$hasNext()) {
                if ($e !== null)
                    $rt_throw($e);
                gc_Simulation_repaintIfNeeded($this);
                return;
            }
            $actor = var$7.$next();
            if (!$this.$enabled)
                break;
            if (g_ActorVisitor_getWorld($actor) === null)
                continue;
            try {
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof gc_ActInterruptedException) {
                    $e_0 = $$je;
                } else {
                    throw $$e;
                }
            }
            if ($e !== null)
                continue;
            $e = $e_0;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $world, $e, $allObjects, $awakeObjects, var$5, $possiblySleepingActor, var$7, $actor, $e_0, $ptr);
},
gc_Simulation_actActor = $actor => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$actor = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gc_Simulation_$callClinit();
        $ptr = 1;
    case 1:
        $actor.$act();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($actor, $ptr);
},
gc_Simulation_actWorld = $world => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$world = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gc_Simulation_$callClinit();
        $ptr = 1;
    case 1:
        $world.$act();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($world, $ptr);
},
gc_Simulation_repaintIfNeeded = $this => {
    $this.$worldHandler.$repaint();
},
gc_Simulation_setPaused = ($this, $b) => {
    let var$2, var$3, $$je;
    jl_Object_monitorEnterSync($this);
    try {
        jl_Object_monitorEnterSync($this);
        a: {
            b: {
                try {
                    if ($this.$paused != $b)
                        break b;
                    jl_Object_monitorExitSync($this);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$2 = $$je;
                    break a;

                }
                return;
            }
            c: {
                try {
                    $this.$paused = $b;
                    if (!$this.$enabled)
                        break c;
                    if (!$this.$paused) {
                        var$2 = $this.$interruptLock;
                        jl_Object_monitorEnterSync(var$2);
                        d: {
                            try {
                                $this.$interruptDelay0 = 0;
                                jl_Object_monitorExitSync(var$2);
                                break d;
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                var$3 = $$je;

                            }
                            jl_Object_monitorExitSync(var$2);
                            $rt_throw(var$3);
                        }
                    }
                    jl_Object_notifyAll($this);
                    if (!$this.$paused)
                        break c;
                    gc_Simulation_interruptDelay($this);
                    break c;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$2 = $$je;
                    break a;

                }
            }
            try {
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;
                break a;

            }
            return;
        }
        jl_Object_monitorExitSync($this);
        $rt_throw(var$2);
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
gc_Simulation_interruptDelay = $this => {
    let var$1, var$2, $$je;
    var$1 = $this.$interruptLock;
    jl_Object_monitorEnterSync(var$1);
    a: {
        try {
            if ($this.$delaying)
                $this.$interrupt();
            else
                $this.$interruptDelay0 = 1;
            jl_Object_monitorExitSync(var$1);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync(var$1);
    $rt_throw(var$2);
},
gc_Simulation_setEnabled = ($this, $b) => {
    let var$2, var$3, $$je;
    jl_Object_monitorEnterSync($this);
    try {
        jl_Object_monitorEnterSync($this);
        a: {
            b: {
                try {
                    if ($b != $this.$enabled)
                        break b;
                    jl_Object_monitorExitSync($this);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$2 = $$je;
                    break a;

                }
                return;
            }
            c: {
                try {
                    $this.$enabled = $b;
                    if ($b) {
                        ($this.$worldHandler.$getKeyboardManager()).$getKey0();
                        ($this.$worldHandler.$getKeyboardManager()).$clearLatches();
                        jl_Object_notifyAll($this);
                        if (!$this.$paused)
                            break c;
                        gc_Simulation_fireSimulationEvent($this, $this.$stoppedEvent);
                        break c;
                    }
                    gc_Simulation_interruptDelay($this);
                    if (!$this.$paused) {
                        $this.$paused = 1;
                        $this.$isRunning = 0;
                    } else {
                        var$2 = $this.$interruptLock;
                        jl_Object_monitorEnterSync(var$2);
                        d: {
                            try {
                                $this.$interruptDelay0 = 0;
                                jl_Object_monitorExitSync(var$2);
                                break d;
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                var$3 = $$je;

                            }
                            jl_Object_monitorExitSync(var$2);
                            $rt_throw(var$3);
                        }
                    }
                    gc_Simulation_fireSimulationEvent($this, $this.$disabledEvent);
                    break c;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$2 = $$je;
                    break a;

                }
            }
            try {
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;
                break a;

            }
            return;
        }
        jl_Object_monitorExitSync($this);
        $rt_throw(var$2);
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
gc_Simulation_fireSimulationEvent = ($this, $event) => {
    let var$2, $listeners, var$4, var$5, $i, $$je;
    var$2 = $this.$listenerList;
    jl_Object_monitorEnterSync(var$2);
    a: {
        try {
            $listeners = $this.$listenerList.$toArray($rt_createArray(ge_SimulationListener, $this.$listenerList.$size()));
            jl_Object_monitorExitSync(var$2);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;

        }
        jl_Object_monitorExitSync(var$2);
        $rt_throw(var$4);
    }
    var$5 = $listeners.data;
    $i = var$5.length - 1 | 0;
    while ($i >= 0) {
        var$5[$i].$simulationChanged($event);
        $i = $i + (-1) | 0;
    }
},
gc_Simulation_addSimulationListener = ($this, $l) => {
    let var$2, var$3, $$je;
    var$2 = $this.$listenerList;
    jl_Object_monitorEnterSync(var$2);
    a: {
        try {
            $this.$listenerList.$add0($l);
            jl_Object_monitorExitSync(var$2);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync(var$2);
    $rt_throw(var$3);
},
gc_Simulation_setSpeed = ($this, $speed) => {
    let $speedChanged, var$3, var$4, $$je;
    if ($speed < 0)
        $speed = 0;
    else if ($speed > 100)
        $speed = 100;
    jl_Object_monitorEnterSync($this);
    a: {
        try {
            $speedChanged = $this.$speed5 == $speed ? 0 : 1;
            if ($speedChanged) {
                $this.$speed5 = $speed;
                $this.$delegate.$setSpeed($speed);
                $this.$delay0 = gc_Simulation_calculateDelay($this, $speed);
                if (!$this.$paused) {
                    var$3 = $this.$interruptLock;
                    jl_Object_monitorEnterSync(var$3);
                    b: {
                        try {
                            if ($this.$delaying)
                                $this.$interrupt();
                            jl_Object_monitorExitSync(var$3);
                            break b;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$4 = $$je;

                        }
                        jl_Object_monitorExitSync(var$3);
                        $rt_throw(var$4);
                    }
                }
            }
            jl_Object_monitorExitSync($this);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;

        }
        jl_Object_monitorExitSync($this);
        $rt_throw(var$3);
    }
    if ($speedChanged)
        gc_Simulation_fireSimulationEvent($this, $this.$speedChangeEvent);
},
gc_Simulation_calculateDelay = ($this, $speed) => {
    let $rawDelay, $a, $delay;
    $rawDelay = Long_fromInt(100 - $speed | 0);
    $a = jl_Math_pow(333333.3333333333, 0.010101010101010102);
    $delay = Long_ZERO;
    if (Long_gt($rawDelay, Long_ZERO))
        $delay = Long_fromNumber(jl_Math_pow($a, Long_toNumber(Long_sub($rawDelay, Long_fromInt(1)))) * 30000.0);
    return $delay;
},
gc_Simulation_getSpeed = $this => {
    jl_Object_monitorEnterSync($this);
    try {
        return $this.$speed5;
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
gc_Simulation_delay = $this => {
    let $currentTime, $timeElapsed, $actualDelay, var$4, var$5, var$6, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();$actualDelay = $thread.pop();$timeElapsed = $thread.pop();$currentTime = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $currentTime = jl_System_nanoTime();
        $timeElapsed = Long_sub($currentTime, $this.$lastDelayTime);
        $actualDelay = jl_Math_max0(Long_sub($this.$delay0, $timeElapsed), Long_ZERO);
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        try {
            var$4 = $this.$interruptLock;
            $ptr = 2;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;

        }
        jl_Object_monitorExit($this);
        $rt_throw(var$4);
    case 2:
        a: {
            b: {
                try {
                    jl_Object_monitorEnter(var$4);
                    if ($rt_suspending()) {
                        break main;
                    }
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$4 = $$je;
                    break b;

                }
                c: {
                    d: {
                        e: {
                            try {
                                try {
                                    if (!$this.$interruptDelay0)
                                        break e;
                                    $this.$interruptDelay0 = 0;
                                    if (!$this.$paused && !$this.$abort)
                                        break e;
                                    $this.$lastDelayTime = $currentTime;
                                    jl_Object_monitorExit(var$4);
                                } catch ($$e) {
                                    $$je = $rt_wrapException($$e);
                                    var$5 = $$je;
                                    break d;

                                }
                                jl_Object_monitorExit($this);
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                var$4 = $$je;
                                break b;

                            }
                            return;
                        }
                        try {
                            $this.$delaying = 1;
                            jl_Object_monitorExit(var$4);
                            break c;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            var$5 = $$je;

                        }
                    }
                    try {
                        jl_Object_monitorExit(var$4);
                        $rt_throw(var$5);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        var$4 = $$je;
                        break b;

                    }
                }
                try {
                    jl_Object_monitorExit($this);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$4 = $$je;

                }
            }
            jl_Object_monitorExit($this);
            $rt_throw(var$4);
        }
        if (Long_eq($actualDelay, Long_ZERO))
            try {
                var$6 = Long_ZERO;
                $ptr = 3;
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                } else {
                    throw $$e;
                }
            }
        if (Long_le($actualDelay, Long_ZERO)) {
            $this.$lastDelayTime = $currentTime;
            var$4 = $this.$interruptLock;
            $ptr = 4;
            continue main;
        }
        try {
            var$6 = Long_div($actualDelay, Long_fromInt(1000000));
            $ptr = 5;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_InterruptedException) {
            } else {
                throw $$e;
            }
        }
        $ptr = 6;
        continue main;
    case 3:
        a: {
            try {
                jl_Thread_sleep(var$6);
                if ($rt_suspending()) {
                    break main;
                }
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                } else {
                    throw $$e;
                }
            }
        }
        if (Long_le($actualDelay, Long_ZERO)) {
            $this.$lastDelayTime = $currentTime;
            var$4 = $this.$interruptLock;
            $ptr = 4;
            continue main;
        }
        try {
            var$6 = Long_div($actualDelay, Long_fromInt(1000000));
            $ptr = 5;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_InterruptedException) {
            } else {
                throw $$e;
            }
        }
        $ptr = 6;
        continue main;
    case 4:
        jl_Object_monitorEnter(var$4);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                jl_Thread_interrupted();
                $this.$interruptDelay0 = 0;
                $this.$delaying = 0;
                jl_Object_monitorExit(var$4);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;
                break a;

            }
            return;
        }
        jl_Object_monitorExit(var$4);
        $rt_throw(var$5);
    case 5:
        a: {
            try {
                jl_Thread_sleep(var$6);
                if ($rt_suspending()) {
                    break main;
                }
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            $currentTime = jl_System_nanoTime();
            var$6 = Long_sub($currentTime, $this.$lastDelayTime);
            $actualDelay = Long_sub($this.$delay0, var$6);
            if (Long_le($actualDelay, Long_ZERO)) {
                $this.$lastDelayTime = $currentTime;
                var$4 = $this.$interruptLock;
                $ptr = 4;
                continue main;
            }
            try {
                var$6 = Long_div($actualDelay, Long_fromInt(1000000));
                continue main;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_InterruptedException) {
                } else {
                    throw $$e;
                }
            }
        }
        $ptr = 6;
    case 6:
        jl_Object_monitorEnter($this);
        if ($rt_suspending()) {
            break main;
        }
        b: {
            c: {
                try {
                    if ($this.$enabled && !$this.$paused && !$this.$abort) {
                        jl_Object_monitorExit($this);
                        break c;
                    }
                    jl_Object_monitorExit($this);
                    break b;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$4 = $$je;

                }
                jl_Object_monitorExit($this);
                $rt_throw(var$4);
            }
            $currentTime = jl_System_nanoTime();
            var$6 = Long_sub($currentTime, $this.$lastDelayTime);
            $actualDelay = Long_sub($this.$delay0, var$6);
            if (Long_gt($actualDelay, Long_ZERO)) {
                try {
                    var$6 = Long_div($actualDelay, Long_fromInt(1000000));
                    $ptr = 5;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_InterruptedException) {
                    } else {
                        throw $$e;
                    }
                }
                continue main;
            }
        }
        $this.$lastDelayTime = $currentTime;
        var$4 = $this.$interruptLock;
        $ptr = 4;
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $currentTime, $timeElapsed, $actualDelay, var$4, var$5, var$6, $ptr);
},
gc_Simulation_worldCreated = ($this, $e) => {
    $this.$setEnabled(1);
},
gc_Simulation_worldRemoved = ($this, $e) => {
    let var$2, var$3, $$je;
    $this.$setEnabled(0);
    var$2 = $this.$interruptLock;
    jl_Object_monitorEnterSync(var$2);
    a: {
        try {
            if (!(!$this.$asking && !$this.$delaying))
                $this.$interrupt();
            jl_Object_monitorExitSync(var$2);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync(var$2);
    $rt_throw(var$3);
},
gc_Simulation__clinit_ = () => {
    gc_Simulation_RUN_QUEUED_TASKS = $rt_s(52);
};
function g_GreenfootSound() {
    let a = this; jl_Object.call(a);
    a.$sound = null;
    a.$filename = null;
}
let g_GreenfootSound__init_ = ($this, $filename) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$filename = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        jl_Object__init_($this);
        $this.$filename = $filename;
        var$2 = gs_SoundFactory_getInstance();
        var$3 = 0;
        $ptr = 1;
    case 1:
        $tmp = var$2.$createSound($filename, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        $this.$sound = var$2;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $filename, var$2, var$3, $ptr);
},
g_GreenfootSound__init_0 = var_0 => {
    let var_1 = new g_GreenfootSound();
    g_GreenfootSound__init_(var_1, var_0);
    return var_1;
},
g_GreenfootSound_play = $this => {
    $this.$sound.$play();
},
g_GreenfootSound_stop = $this => {
    $this.$sound.$stop();
},
g_GreenfootSound_isPlaying = $this => {
    return $this.$sound.$isPlaying();
},
g_GreenfootSound_setVolume = ($this, $level) => {
    $this.$sound.$setVolume($level);
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array__init_ = $this => {
    jl_Object__init_($this);
},
jlr_Array__init_0 = () => {
    let var_0 = new jlr_Array();
    jlr_Array__init_(var_0);
    return var_0;
},
jlr_Array_getLength = var$1 => {
    if (var$1 === null || var$1.constructor.$meta.item === 'undefined') {
        $rt_throw(jl_IllegalArgumentException__init_());
    }
    return var$1.data.length;
},
jlr_Array_newInstance = (var$1, $length) => {
    if (var$1 === null)
        $rt_throw(jl_NullPointerException__init_0());
    if (var$1 === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    return jlr_Array_newInstanceImpl(jl_Class_getPlatformClass(var$1), $length);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
};
function jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0() {
    jl_Object.call(this);
    this.$_019 = null;
}
let jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_019 = var$1;
},
jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0__init_0 = var_0 => {
    let var_1 = new jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0();
    jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0__init_(var_1, var_0);
    return var_1;
},
jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0_run = var$0 => {
    jl_Object$NotifyListenerImpl_lambda$interrupted$3(var$0.$_019);
},
gu_GreenfootUtil = $rt_classWithoutFields(),
gu_GreenfootUtil_delegate = null,
gu_GreenfootUtil_imageCache = null,
gu_GreenfootUtil_mp3available = 0,
gu_GreenfootUtil_$callClinit = () => {
    gu_GreenfootUtil_$callClinit = $rt_eraseClinit(gu_GreenfootUtil);
    gu_GreenfootUtil__clinit_();
},
gu_GreenfootUtil__init_ = $this => {
    gu_GreenfootUtil_$callClinit();
    jl_Object__init_($this);
},
gu_GreenfootUtil__init_0 = () => {
    let var_0 = new gu_GreenfootUtil();
    gu_GreenfootUtil__init_(var_0);
    return var_0;
},
gu_GreenfootUtil_initialise = $newDelegate => {
    gu_GreenfootUtil_$callClinit();
    gu_GreenfootUtil_delegate = $newDelegate;
    gu_GreenfootUtil_imageCache = gc_ImageCache_getInstance();
},
gu_GreenfootUtil_getGreenfootLogoPath = () => {
    gu_GreenfootUtil_$callClinit();
    return gu_GreenfootUtil_delegate.$getGreenfootLogoPath();
},
gu_GreenfootUtil_addCachedImage = ($name, $image) => {
    gu_GreenfootUtil_$callClinit();
    return gu_GreenfootUtil_imageCache.$addCachedImage($name, $image);
},
gu_GreenfootUtil_getCachedImage = $name => {
    gu_GreenfootUtil_$callClinit();
    return gu_GreenfootUtil_imageCache.$getCachedImage($name);
},
gu_GreenfootUtil_getLines = $string => {
    let $lines, $i, $p, var$5;
    gu_GreenfootUtil_$callClinit();
    $lines = ju_ArrayList__init_0();
    $i = $string.$indexOf(10);
    $p = 0;
    while ($i != (-1)) {
        var$5 = $i <= $p ? $i : $string.$charAt($i - 1 | 0) != 13 ? $i : $i + (-1) | 0;
        $lines.$add0($string.$substring($p, var$5));
        $p = $i + 1 | 0;
        $i = $string.$indexOf0(10, $p);
    }
    if ($p < $string.$length())
        $lines.$add0($string.$substring0($p));
    return $lines;
},
gu_GreenfootUtil__clinit_ = () => {
    gu_GreenfootUtil_mp3available = 0;
},
ju_ListIterator = $rt_classWithoutFields(0),
SpellAllyGround = $rt_classWithoutFields(SpellAlly),
SpellAllyGround__init_ = ($this, $damage, $radius, $spriteTime, $time, $attackImageNumber, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$attackImageNumber = $thread.pop();$time = $thread.pop();$spriteTime = $thread.pop();$radius = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage0 = $damage;
        $this.$radius = $radius;
        $this.$spriteTime = $spriteTime;
        $this.$spriteSpeed = $spriteTime;
        $this.$time1 = $time;
        $this.$attackImageNumber = $attackImageNumber;
        $this.$type = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $radius, $spriteTime, $time, $attackImageNumber, $type, $ptr);
},
SpellAllyGround__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new SpellAllyGround();
    SpellAllyGround__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
};
function otcit_DoubleAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent = 0;
    a.$sign0 = 0;
}
let otcit_DoubleAnalyzer$Result__init_ = $this => {
    jl_Object__init_($this);
},
otcit_DoubleAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_DoubleAnalyzer$Result();
    otcit_DoubleAnalyzer$Result__init_(var_0);
    return var_0;
},
ju_Random = $rt_classWithoutFields(),
ju_Random__init_ = $this => {
    jl_Object__init_($this);
},
ju_Random__init_0 = () => {
    let var_0 = new ju_Random();
    ju_Random__init_(var_0);
    return var_0;
},
ju_Random_nextInt = ($this, $n) => {
    if ($n <= 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    return $this.$nextDouble() * $n | 0;
},
ju_Random_nextDouble = $this => {
    return jl_Math_random();
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
otpp_ResourceAccessor__init_ = $this => {
    jl_Object__init_($this);
},
otpp_ResourceAccessor__init_0 = () => {
    let var_0 = new otpp_ResourceAccessor();
    otpp_ResourceAccessor__init_(var_0);
    return var_0;
},
MenuButtonStart = $rt_classWithoutFields(g_Actor),
MenuButtonStart__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        ($this.$getImage1()).$scale(145, 91);
        ($this.$getImage1()).$setTransparency(50);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
MenuButtonStart__init_0 = () => {
    let var_0 = new MenuButtonStart();
    MenuButtonStart__init_(var_0);
    return var_0;
},
MenuButtonStart_act = $this => {
    let $isComplete, $i, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$i = $thread.pop();$isComplete = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $isComplete = 1;
        $i = 0;
        while (true) {
            ClashWorld_$callClinit();
            if ($i >= ClashWorld_cardStart.data.length)
                break;
            if (ClashWorld_cardStart.data[$i] === null)
                $isComplete = 0;
            $i = $i + 1 | 0;
        }
        if (!$isComplete)
            ($this.$getImage1()).$setTransparency(50);
        else
            ($this.$getImage1()).$setTransparency(250);
        if (g_Greenfoot_mouseClicked($this) && $isComplete) {
            var$3 = new ClashWorld;
            $ptr = 1;
            continue main;
        }
        return;
    case 1:
        ClashWorld__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        g_Greenfoot_setWorld(var$3);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $isComplete, $i, var$3, $ptr);
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_isEmpty = $this => {
    return $this.$size() ? 0 : 1;
},
ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, var$4, $iter;
    var$2 = $a.data;
    $i = $this.$size();
    var$4 = var$2.length;
    if (var$4 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < var$4) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        var$2 = $a.data;
        var$4 = $i + 1 | 0;
        var$2[$i] = $iter.$next();
        $i = var$4;
    }
    return $a;
},
ju_AbstractCollection_remove = ($this, $o) => {
    let $iter, $e;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        $e = $iter.$next();
        if (ju_Objects_equals($e, $o)) {
            $iter.$remove1();
            return 1;
        }
    }
    return 0;
},
ju_AbstractCollection_addAll = ($this, $c) => {
    let $changed, $iter;
    $changed = 0;
    $iter = $c.$iterator();
    while ($iter.$hasNext()) {
        if (!$this.$add0($iter.$next()))
            continue;
        $changed = 1;
    }
    return $changed;
},
gu_GraphicsUtilities = $rt_classWithoutFields(),
gu_GraphicsUtilities__init_ = $this => {
    jl_Object__init_($this);
},
gu_GraphicsUtilities__init_0 = () => {
    let var_0 = new gu_GraphicsUtilities();
    gu_GraphicsUtilities__init_(var_0);
    return var_0;
},
gu_GraphicsUtilities_getFontHeightPx = $fontString => {
    let $doc, $tspan, $tdiv, $textHeight;
    $doc = otjdh_HTMLDocument_current();
    $tspan = $doc.createElement("span");
    $tspan.style.setProperty("font", $rt_ustr($fontString));
    $tspan.innerHTML = "MMM";
    $tdiv = $doc.createElement("div");
    $tdiv.style.setProperty("position", "absolute");
    $tdiv.style.setProperty("overflow", "hidden");
    $tdiv.style.setProperty("max-width", "0");
    $tdiv.appendChild($tspan);
    $doc.body.appendChild($tdiv);
    $textHeight = $tspan.scrollHeight;
    if (!$textHeight)
        $textHeight = $tdiv.scrollHeight;
    $doc.body.removeChild($tdiv);
    return $textHeight;
},
gu_GraphicsUtilities_getFontMetricsPx = $fontString => {
    let $doc, $tdiv, $idiv, $tspan, $baselineDiv, $textHeight, $baseLine;
    $doc = otjdh_HTMLDocument_current();
    $tdiv = $doc.createElement("div");
    $tdiv.style.setProperty("position", "absolute");
    $tdiv.style.setProperty("overflow", "hidden");
    $tdiv.style.setProperty("max-width", "0");
    $idiv = $doc.createElement("div");
    $idiv.style.setProperty("min-width", "10em");
    $tspan = $doc.createElement("span");
    $tspan.style.setProperty("font", $rt_ustr($fontString));
    $tspan.innerHTML = "MMM";
    $tdiv.appendChild($idiv);
    $idiv.appendChild($tspan);
    $doc.body.appendChild($tdiv);
    $baselineDiv = $doc.createElement("div");
    $baselineDiv.style.setProperty("display", "inline-block");
    $baselineDiv.style.setProperty("vertical-align", "baseline");
    $baselineDiv.style.setProperty("width", "1px");
    $baselineDiv.style.setProperty("height", "1px");
    $idiv.appendChild($baselineDiv);
    $textHeight = $tspan.scrollHeight;
    if (!$textHeight)
        $textHeight = $tdiv.scrollHeight;
    $baseLine = ($baselineDiv.offsetTop - $idiv.offsetTop | 0) + 1 | 0;
    $doc.body.removeChild($tdiv);
    return $rt_createIntArrayFromData([$textHeight, $baseLine]);
};
function ji_ByteArrayInputStream() {
    let a = this; ji_InputStream.call(a);
    a.$buf0 = null;
    a.$pos0 = 0;
    a.$mark1 = 0;
    a.$count1 = 0;
}
let ji_ByteArrayInputStream__init_ = ($this, $buf, $offset, $length) => {
    ji_InputStream__init_($this);
    $this.$buf0 = $buf;
    $this.$pos0 = $offset;
    $this.$mark1 = $offset;
    $this.$count1 = $offset + $length | 0;
},
ji_ByteArrayInputStream__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new ji_ByteArrayInputStream();
    ji_ByteArrayInputStream__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ji_ByteArrayInputStream__init_0 = ($this, $buf) => {
    ji_ByteArrayInputStream__init_($this, $buf, 0, $buf.data.length);
},
ji_ByteArrayInputStream__init_1 = var_0 => {
    let var_1 = new ji_ByteArrayInputStream();
    ji_ByteArrayInputStream__init_0(var_1, var_0);
    return var_1;
},
ji_ByteArrayInputStream_read = ($this, $b, $off, $len) => {
    let $bytesToRead, $i, var$6, var$7, var$8, var$9;
    $bytesToRead = jl_Math_min($len, $this.$count1 - $this.$pos0 | 0);
    $i = 0;
    while ($i < $bytesToRead) {
        var$6 = $b.data;
        var$7 = $off + 1 | 0;
        var$8 = $this.$buf0.data;
        var$9 = $this.$pos0;
        $this.$pos0 = var$9 + 1 | 0;
        var$6[$off] = var$8[var$9];
        $i = $i + 1 | 0;
        $off = var$7;
    }
    if ($bytesToRead <= 0)
        $bytesToRead = (-1);
    return $bytesToRead;
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil__init_ = $this => {
    jl_Object__init_($this);
},
otci_IntegerUtil__init_0 = () => {
    let var_0 = new otci_IntegerUtil();
    otci_IntegerUtil__init_(var_0);
    return var_0;
},
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(53);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_5($chars);
},
jl_InstantiationException = $rt_classWithoutFields(jl_ReflectiveOperationException),
jl_InstantiationException__init_ = $this => {
    jl_ReflectiveOperationException__init_($this);
},
jl_InstantiationException__init_0 = () => {
    let var_0 = new jl_InstantiationException();
    jl_InstantiationException__init_(var_0);
    return var_0;
},
jl_Thread$UncaughtExceptionHandler = $rt_classWithoutFields(0),
jl_DefaultUncaughtExceptionHandler = $rt_classWithoutFields(),
jl_DefaultUncaughtExceptionHandler__init_ = $this => {
    jl_Object__init_($this);
},
jl_DefaultUncaughtExceptionHandler__init_0 = () => {
    let var_0 = new jl_DefaultUncaughtExceptionHandler();
    jl_DefaultUncaughtExceptionHandler__init_(var_0);
    return var_0;
},
jl_DefaultUncaughtExceptionHandler_uncaughtException = ($this, $t, $e) => {
    $e.$printStackTrace();
},
TroopAllyAir = $rt_classWithoutFields(TroopAlly),
TroopAllyAir__init_ = ($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime) => {
    let var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();$attackTime = $thread.pop();$timeSpeed = $thread.pop();$speed = $thread.pop();$range = $thread.pop();$attack = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp0 = $hp;
        $this.$attack1 = $attack;
        $this.$range = $range;
        $this.$speed = $speed;
        $this.$baseSpeed = $speed;
        $this.$timeSpeed = $timeSpeed;
        $this.$speedSpeed = $timeSpeed;
        $this.$spriteTime0 = $attackTime;
        $this.$attackTime = $attackTime;
        $this.$attackSpeed = $attackTime;
        var$7 = new HealthBar;
        var$8 = 1;
        $ptr = 2;
    case 2:
        HealthBar__init_(var$7, $this, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health = var$7;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime, var$7, var$8, $ptr);
},
TroopAllyAir__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new TroopAllyAir();
    TroopAllyAir__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
TroopAllyDragonBaby = $rt_classWithoutFields(TroopAllyAir),
TroopAllyDragonBaby__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 100;
        var$2 = 10;
        var$3 = 60;
        var$4 = 1;
        var$5 = 1;
        var$6 = 47;
        $ptr = 1;
    case 1:
        TroopAllyAir__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 16;
        $this.$troopName = $rt_s(32);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyDragonBaby__init_0 = () => {
    let var_0 = new TroopAllyDragonBaby();
    TroopAllyDragonBaby__init_(var_0);
    return var_0;
},
TroopAllyDragonBaby_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
otcir_FieldInfo = $rt_classWithoutFields(),
otcir_FieldInfo__init_ = $this => {
    jl_Object__init_($this);
},
otcir_FieldInfo__init_0 = () => {
    let var_0 = new otcir_FieldInfo();
    otcir_FieldInfo__init_(var_0);
    return var_0;
},
otjc_JSObjects = $rt_classWithoutFields(),
otjc_JSObjects__init_ = $this => {
    jl_Object__init_($this);
},
otjc_JSObjects__init_0 = () => {
    let var_0 = new otjc_JSObjects();
    otjc_JSObjects__init_(var_0);
    return var_0;
};
function EndState() {
    let a = this; Overlay.call(a);
    a.$time3 = 0;
    a.$speed4 = 0;
    a.$speedTime0 = 0;
    a.$img = null;
    a.$image4 = null;
}
let EndState__init_ = ($this, $state) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$state = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        a: {
            Overlay__init_($this);
            if ($rt_suspending()) {
                break main;
            }
            $this.$time3 = 10;
            $this.$speed4 = 14;
            $this.$speedTime0 = 3;
            switch ($state) {
                case 0:
                    break;
                case 1:
                    $this.$img = $rt_s(54);
                    break a;
                case 2:
                    $this.$img = $rt_s(55);
                    break a;
                default:
                    break a;
            }
            $this.$img = $rt_s(56);
        }
        var$2 = new g_GreenfootImage;
        var$3 = $this.$img;
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        $this.$image4 = var$2;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $state, var$2, var$3, $ptr);
},
EndState__init_0 = var_0 => {
    let var_1 = new EndState();
    EndState__init_(var_1, var_0);
    return var_1;
},
EndState_act = $this => {
    let var$1, $image1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$image1 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time3 = $this.$time3 + $this.$speed4 | 0;
        if ($this.$speed4 > 1) {
            $this.$speedTime0 = $this.$speedTime0 - 1 | 0;
            if (!$this.$speedTime0) {
                $this.$speed4 = $this.$speed4 - 1 | 0;
                $this.$speedTime0 = 3;
            }
        }
        if ($this.$time3 >= 300) {
            if ($this.$time3 != 450)
                return;
            var$1 = new ScreenMainWorld;
            $ptr = 2;
            continue main;
        }
        $this.$image4.$scale($this.$time3, $this.$time3);
        $image1 = new g_GreenfootImage;
        var$1 = $this.$img;
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_($image1, var$1);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image4.$getHeight() + $this.$speed4 | 0, $this.$image4.$getWidth() + $this.$speed4 | 0);
        $this.$setImage($image1);
        if ($this.$time3 != 450)
            return;
        var$1 = new ScreenMainWorld;
        $ptr = 2;
    case 2:
        ScreenMainWorld__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        g_Greenfoot_setWorld(var$1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $image1, $ptr);
},
g_ImageVisitor = $rt_classWithoutFields(),
g_ImageVisitor__init_ = $this => {
    jl_Object__init_($this);
},
g_ImageVisitor__init_0 = () => {
    let var_0 = new g_ImageVisitor();
    g_ImageVisitor__init_(var_0);
    return var_0;
},
g_ImageVisitor_drawImageToCanvas = ($image, $g2d, $x, $y) => {
    $image.$drawToCanvas($g2d, $x, $y);
};
function ScoreOverlayDown() {
    let a = this; Overlay.call(a);
    a.$one0 = null;
    a.$two0 = null;
    a.$three = null;
}
let ScoreOverlayDown__init_ = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(46);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$one0 = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(47);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$two0 = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(48);
        $ptr = 4;
    case 4:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$three = var$1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
ScoreOverlayDown__init_0 = () => {
    let var_0 = new ScoreOverlayDown();
    ScoreOverlayDown__init_(var_0);
    return var_0;
},
ScoreOverlayDown_act = $this => {
    let $score;
    $score = ($this.$getWorld()).$allyCrowns;
    if ($score == 1)
        $this.$setImage($this.$one0);
    if ($score == 2)
        $this.$setImage($this.$two0);
    if ($score == 3)
        $this.$setImage($this.$three);
},
TroopAllyGhostGoblinSpear = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostGoblinSpear__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 2;
        var$2 = $rt_s(31);
        var$3 = $rt_s(42);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostGoblinSpear__init_0 = () => {
    let var_0 = new TroopAllyGhostGoblinSpear();
    TroopAllyGhostGoblinSpear__init_(var_0);
    return var_0;
},
TroopAllyGhostGoblinSpear_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyGoblinSpear;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyGoblinSpear__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY() - 9 | 0);
        var$3 = $this.$getWorld();
        var$4 = new TroopAllyGoblinSpear;
        $ptr = 2;
    case 2:
        TroopAllyGoblinSpear__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() - 9 | 0, $this.$getY() + 7 | 0);
        var$3 = $this.$getWorld();
        var$4 = new TroopAllyGoblinSpear;
        $ptr = 3;
    case 3:
        TroopAllyGoblinSpear__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() + 9 | 0, $this.$getY() + 7 | 0);
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
},
otji_JS = $rt_classWithoutFields(),
otji_JS__init_ = $this => {
    jl_Object__init_($this);
},
otji_JS__init_0 = () => {
    let var_0 = new otji_JS();
    otji_JS__init_(var_0);
    return var_0;
},
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
TroopEnemyGiant = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyGiant__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 260;
        var$2 = 12;
        var$3 = 30;
        var$4 = 1;
        var$5 = 2;
        var$6 = 43;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 19;
        $this.$troopName = $rt_s(34);
        $this.$target = $rt_s(35);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyGiant__init_0 = () => {
    let var_0 = new TroopEnemyGiant();
    TroopEnemyGiant__init_(var_0);
    return var_0;
},
TroopEnemyGiant_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
};
function TowerEnemy() {
    let a = this; Tower.call(a);
    a.$ally1 = null;
    a.$allyGround = null;
}
let TowerEnemy__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Tower__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TowerEnemy__init_0 = () => {
    let var_0 = new TowerEnemy();
    TowerEnemy__init_(var_0);
    return var_0;
},
TowerEnemy_findEnemy = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$distance0 = 0;
        if (!($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAlly))).$isEmpty()) {
            if (!($this.$ally1 !== null && $this.$ally1.$getWorld() !== null))
                $this.$ally1 = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAlly))).$get(0);
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$ally1.$getY() - $this.$getY() | 0), 2.0) | 0;
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$ally1.$getX() - $this.$getX() | 0), 2.0) | 0;
            $this.$distance0 = jl_Math_sqrt($this.$distance0) | 0;
            if ($this.$distance0 > $this.$range0)
                $this.$ally1 = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAlly))).$get(0);
            else {
                if (jl_Object_getClass($this) === $rt_cls(TowerUpPrincess)) {
                    var$1 = new ProjectileTowerEnemy;
                    var$2 = $this.$ally1;
                    $ptr = 1;
                    continue main;
                }
                if (jl_Object_getClass($this) === $rt_cls(TowerUpKing)) {
                    var$1 = new ProjectileKingEnemy;
                    var$2 = $this.$ally1;
                    $ptr = 2;
                    continue main;
                }
                $this.$createProjectile3($this.$projectile, $this.$ally1);
            }
        }
        return;
    case 1:
        ProjectileTowerEnemy__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile3($this.$projectile, $this.$ally1);
        return;
    case 2:
        ProjectileKingEnemy__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile3($this.$projectile, $this.$ally1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
TowerEnemy_findEnemyGround = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$distance0 = 0;
        if (!($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAllyGround))).$isEmpty()) {
            if (!($this.$allyGround !== null && $this.$allyGround.$getWorld() !== null))
                $this.$allyGround = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAllyGround))).$get(0);
            $this.$turnTowards($this.$allyGround.$getX(), $this.$allyGround.$getY());
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$allyGround.$getY() - $this.$getY() | 0), 2.0) | 0;
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$allyGround.$getX() - $this.$getX() | 0), 2.0) | 0;
            $this.$distance0 = jl_Math_sqrt($this.$distance0) | 0;
            if ($this.$distance0 > $this.$range0)
                $this.$allyGround = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopAllyGround))).$get(0);
            else {
                if (jl_Object_getClass($this) === $rt_cls(TowerUpCannon)) {
                    var$1 = new ProjectileCannonEnemy;
                    var$2 = $this.$allyGround;
                    $ptr = 1;
                    continue main;
                }
                $this.$createProjectile3($this.$projectile, $this.$ally1);
            }
            if (jl_Object_getClass($this) === $rt_cls(TowerUpCannon))
                $this.$turn(90);
        }
        return;
    case 1:
        ProjectileCannonEnemy__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile3($this.$projectile, $this.$ally1);
        if (jl_Object_getClass($this) === $rt_cls(TowerUpCannon))
            $this.$turn(90);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
TowerEnemy_createProjectile = ($this, $Projectile, $ally) => {
    $this.$attackTime0 = $this.$attackTime0 - 1 | 0;
    if (!$this.$attackTime0) {
        ($this.$getWorld()).$addObject0($this.$projectile, $this.$getX(), $this.$getY());
        $this.$attackTime0 = $this.$attackSpeed0;
    }
};
function TowerEnemyBuilding() {
    let a = this; TowerEnemy.call(a);
    a.$decayTime = 0;
    a.$decaySpeed = 0;
    a.$health1 = null;
}
let TowerEnemyBuilding__init_ = ($this, $hp, $attackTime, $range, $decayTime) => {
    let var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();$decayTime = $thread.pop();$range = $thread.pop();$attackTime = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TowerEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp = $hp;
        $this.$basehp = $hp;
        $this.$range0 = $range;
        $this.$attackTime0 = $attackTime;
        $this.$attackSpeed0 = $attackTime;
        $this.$decayTime = $decayTime;
        $this.$decaySpeed = $decayTime;
        var$5 = new HealthBar;
        var$6 = 0;
        $ptr = 2;
    case 2:
        HealthBar__init_0(var$5, $this, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health1 = var$5;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attackTime, $range, $decayTime, var$5, var$6, $ptr);
},
TowerEnemyBuilding__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new TowerEnemyBuilding();
    TowerEnemyBuilding__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
TowerEnemyBuilding_decay = $this => {
    $this.$decayTime = $this.$decayTime - 1 | 0;
    if (!$this.$decayTime) {
        $this.$hp = $this.$hp - 1 | 0;
        $this.$decayTime = $this.$decaySpeed;
    }
};
function TowerUpCannon() {
    TowerEnemyBuilding.call(this);
    this.$base0 = null;
}
let TowerUpCannon__init_ = ($this, $base) => {
    let var$2, var$3, var$4, var$5, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$base = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 50;
        var$3 = 40;
        var$4 = 100;
        var$5 = 50;
        $ptr = 1;
    case 1:
        TowerEnemyBuilding__init_($this, var$2, var$3, var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        $this.$base0 = $base;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $base, var$2, var$3, var$4, var$5, $ptr);
},
TowerUpCannon__init_0 = var_0 => {
    let var_1 = new TowerUpCannon();
    TowerUpCannon__init_(var_1, var_0);
    return var_1;
},
TowerUpCannon_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ($this.$getWorld()).$addObject0($this.$health1, $this.$getX(), $this.$getY() - 20 | 0);
        $this.$decay();
        if ($this.$hp <= 0) {
            ($this.$getWorld()).$removeObject($this.$base0);
            ($this.$getWorld()).$removeObject($this);
            return;
        }
        $ptr = 1;
    case 1:
        $this.$findEnemyGround();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
SpellEnemyAir = $rt_classWithoutFields(SpellEnemy),
SpellEnemyAir__init_ = ($this, $damage, $radius, $spriteTime, $moveImageNumber, $attackImageNumber, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$attackImageNumber = $thread.pop();$moveImageNumber = $thread.pop();$spriteTime = $thread.pop();$radius = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage0 = $damage;
        $this.$radius = $radius;
        $this.$spriteTime = $spriteTime;
        $this.$spriteSpeed = $spriteTime;
        $this.$moveImageNumber = $moveImageNumber;
        $this.$attackImageNumber = $attackImageNumber;
        $this.$type = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $radius, $spriteTime, $moveImageNumber, $attackImageNumber, $type, $ptr);
},
SpellEnemyAir__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new SpellEnemyAir();
    SpellEnemyAir__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
SpellEnemyFireball = $rt_classWithoutFields(SpellEnemyAir),
SpellEnemyFireball__init_ = ($this, $x, $y) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$y = $thread.pop();$x = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$3 = 40;
        var$4 = 60;
        var$5 = 38;
        var$6 = 13;
        var$7 = 9;
        var$8 = $rt_s(16);
        $ptr = 1;
    case 1:
        SpellEnemyAir__init_($this, var$3, var$4, var$5, var$6, var$7, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$spellName = $rt_s(19);
        $this.$directionX = $x;
        $this.$directionY = $y;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $x, $y, var$3, var$4, var$5, var$6, var$7, var$8, $ptr);
},
SpellEnemyFireball__init_0 = (var_0, var_1) => {
    let var_2 = new SpellEnemyFireball();
    SpellEnemyFireball__init_(var_2, var_0, var_1);
    return var_2;
},
SpellEnemyFireball_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
CardNextOverlay = $rt_classWithoutFields(Overlay),
CardNextOverlay__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
CardNextOverlay__init_0 = () => {
    let var_0 = new CardNextOverlay();
    CardNextOverlay__init_(var_0);
    return var_0;
},
jn_URLStreamHandlerFactory = $rt_classWithoutFields(0),
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper__init_ = $this => {
    jl_Object__init_($this);
},
otciu_UnicodeHelper__init_0 = () => {
    let var_0 = new otciu_UnicodeHelper();
    otciu_UnicodeHelper__init_(var_0);
    return var_0;
},
otciu_UnicodeHelper_decodeIntPairsDiff = $text => {
    let $flow, $sz, $data, $j, $lastKey, $lastValue, $i, var$9, var$10;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $j = 0;
    $lastKey = 0;
    $lastValue = 0;
    $i = 0;
    while ($i < $sz) {
        var$9 = $data.data;
        $lastKey = $lastKey + otci_Base46_decode($flow) | 0;
        $lastValue = $lastValue + otci_Base46_decode($flow) | 0;
        var$10 = $j + 1 | 0;
        var$9[$j] = $lastKey;
        $j = var$10 + 1 | 0;
        var$9[var$10] = $lastValue;
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
},
otciu_UnicodeHelper_extractRle = $encoded => {
    let $ranges, $buffer, $index, $rangeIndex, $codePoint, $i, $b, $count, $pos, $j, $digit, var$13, var$14, var$15, var$16, var$17;
    $ranges = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
    $buffer = $rt_createByteArray(16384);
    $index = 0;
    $rangeIndex = 0;
    $codePoint = 0;
    $i = 0;
    while ($i < $encoded.$length()) {
        $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        if ($b == 64) {
            $i = $i + 1 | 0;
            $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
            $count = 0;
            $pos = 1;
            $j = 0;
            while ($j < 3) {
                $i = $i + 1 | 0;
                $digit = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
                $count = $count | $rt_imul($pos, $digit);
                $pos = $pos * 64 | 0;
                $j = $j + 1 | 0;
            }
        } else if ($b < 32)
            $count = 1;
        else {
            $b = ($b - 32 | 0) << 24 >> 24;
            $i = $i + 1 | 0;
            $count = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        }
        if (!$b && $count >= 128) {
            if ($index > 0) {
                var$13 = $ranges.data;
                var$14 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $rangeIndex = var$14;
            }
            $codePoint = $codePoint + ($index + $count | 0) | 0;
            $index = 0;
        } else {
            var$15 = $buffer.data;
            var$14 = $index + $count | 0;
            if (var$14 < var$15.length)
                var$16 = $rangeIndex;
            else {
                var$13 = $ranges.data;
                var$16 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $codePoint = $codePoint + var$14 | 0;
                $index = 0;
            }
            while (true) {
                var$14 = $count + (-1) | 0;
                if ($count <= 0)
                    break;
                var$17 = $index + 1 | 0;
                var$15[$index] = $b;
                $index = var$17;
                $count = var$14;
            }
            $rangeIndex = var$16;
        }
        $i = $i + 1 | 0;
    }
    return ju_Arrays_copyOf0($ranges, $rangeIndex);
};
function CardDeck() {
    let a = this; g_Actor.call(a);
    a.$position = 0;
    a.$isTouchingCardChoice = 0;
    a.$cardChoice = null;
}
let CardDeck__init_ = ($this, $position) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$position = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$position = $position;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $position, $ptr);
},
CardDeck__init_0 = var_0 => {
    let var_1 = new CardDeck();
    CardDeck__init_(var_1, var_0);
    return var_1;
},
CardDeck_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        $this.$checkTouching();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
CardDeck_checkTouching = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            $this.$cardChoice = $this.$getOneIntersectingObject0($rt_cls(CardChoice));
            if ($this.$cardChoice !== null) {
                var$1 = $this.$cardChoice;
                if (var$1.$getX() == $this.$getX()) {
                    var$1 = $this.$cardChoice;
                    if (var$1.$getY() == $this.$getY()) {
                        b: {
                            var$1 = $this.$cardChoice.$card;
                            var$2 = (-1);
                            switch (var$1.$hashCode1()) {
                                case -2042963283:
                                    if (!var$1.$equals($rt_s(39)))
                                        break b;
                                    var$2 = 0;
                                    break b;
                                case -1898882264:
                                    if (!var$1.$equals($rt_s(40)))
                                        break b;
                                    var$2 = 10;
                                    break b;
                                case -498707115:
                                    if (!var$1.$equals($rt_s(19)))
                                        break b;
                                    var$2 = 8;
                                    break b;
                                case 68794789:
                                    if (!var$1.$equals($rt_s(34)))
                                        break b;
                                    var$2 = 2;
                                    break b;
                                case 68983820:
                                    if (!var$1.$equals($rt_s(41)))
                                        break b;
                                    var$2 = 6;
                                    break b;
                                case 696660803:
                                    if (!var$1.$equals($rt_s(15)))
                                        break b;
                                    var$2 = 9;
                                    break b;
                                case 1063288354:
                                    if (!var$1.$equals($rt_s(42)))
                                        break b;
                                    var$2 = 5;
                                    break b;
                                case 1384567209:
                                    if (!var$1.$equals($rt_s(32)))
                                        break b;
                                    var$2 = 4;
                                    break b;
                                case 1969228707:
                                    if (!var$1.$equals($rt_s(30)))
                                        break b;
                                    var$2 = 1;
                                    break b;
                                case 2011120925:
                                    if (!var$1.$equals($rt_s(43)))
                                        break b;
                                    var$2 = 7;
                                    break b;
                                case 2092391533:
                                    if (!var$1.$equals($rt_s(38)))
                                        break b;
                                    var$2 = 3;
                                    break b;
                                default:
                            }
                        }
                        switch (var$2) {
                            case 0:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardKnight;
                                $ptr = 1;
                                continue main;
                            case 1:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardArcher;
                                $ptr = 2;
                                continue main;
                            case 2:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardGiant;
                                $ptr = 3;
                                continue main;
                            case 3:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardSkeleton;
                                $ptr = 4;
                                continue main;
                            case 4:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardDragonBaby;
                                $ptr = 5;
                                continue main;
                            case 5:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardGoblinSpear;
                                $ptr = 6;
                                continue main;
                            case 6:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardGolem;
                                $ptr = 7;
                                continue main;
                            case 7:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardCannon;
                                $ptr = 8;
                                continue main;
                            case 8:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardFireball;
                                $ptr = 9;
                                continue main;
                            case 9:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardPekkaMini;
                                $ptr = 10;
                                continue main;
                            case 10:
                                ClashWorld_$callClinit();
                                var$3 = ClashWorld_cardStart.data;
                                var$2 = $this.$position;
                                var$1 = new CardPoison;
                                $ptr = 11;
                                continue main;
                            default:
                        }
                        break a;
                    }
                }
            }
            ClashWorld_$callClinit();
            ClashWorld_cardStart.data[$this.$position] = null;
        }
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 1:
        CardKnight__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 2:
        CardArcher__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 3:
        CardGiant__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 4:
        CardSkeleton__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 5:
        CardDragonBaby__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 6:
        CardGoblinSpear__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 7:
        CardGolem__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 8:
        CardCannon__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 9:
        CardFireball__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 10:
        CardPekkaMini__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    case 11:
        CardPoison__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        var$3[var$2] = var$1;
        if ($this.$cardChoice === null)
            $this.$isTouchingCardChoice = 0;
        else if ($this.$cardChoice.$getX() == $this.$getX() && $this.$cardChoice.$getY() == $this.$getY())
            $this.$isTouchingCardChoice = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
};
function jl_Object$monitorEnterWait$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_010 = null;
    a.$_14 = null;
    a.$_21 = 0;
    a.$_3 = null;
}
let jl_Object$monitorEnterWait$lambda$_6_0__init_ = (var$0, var$1, var$2, var$3, var$4) => {
    jl_Object__init_(var$0);
    var$0.$_010 = var$1;
    var$0.$_14 = var$2;
    var$0.$_21 = var$3;
    var$0.$_3 = var$4;
},
jl_Object$monitorEnterWait$lambda$_6_0__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jl_Object$monitorEnterWait$lambda$_6_0();
    jl_Object$monitorEnterWait$lambda$_6_0__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jl_Object$monitorEnterWait$lambda$_6_0_run = var$0 => {
    jl_Object_lambda$monitorEnterWait$0(var$0.$_010, var$0.$_14, var$0.$_21, var$0.$_3);
};
function TowerAlly() {
    let a = this; Tower.call(a);
    a.$enemy1 = null;
    a.$enemyGround = null;
}
let TowerAlly__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Tower__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TowerAlly__init_0 = () => {
    let var_0 = new TowerAlly();
    TowerAlly__init_(var_0);
    return var_0;
},
TowerAlly_findEnemy = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$distance0 = 0;
        if (!($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemy))).$isEmpty()) {
            if (!($this.$enemy1 !== null && $this.$enemy1.$getWorld() !== null))
                $this.$enemy1 = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemy))).$get(0);
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$enemy1.$getY() - $this.$getY() | 0), 2.0) | 0;
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$enemy1.$getX() - $this.$getX() | 0), 2.0) | 0;
            $this.$distance0 = jl_Math_sqrt($this.$distance0) | 0;
            if ($this.$distance0 > $this.$range0)
                $this.$enemy1 = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemy))).$get(0);
            else {
                if (jl_Object_getClass($this) === $rt_cls(TowerDownPrincess)) {
                    var$1 = new ProjectileTowerAlly;
                    var$2 = $this.$enemy1;
                    $ptr = 1;
                    continue main;
                }
                if (jl_Object_getClass($this) === $rt_cls(TowerDownKing)) {
                    var$1 = new ProjectileKingAlly;
                    var$2 = $this.$enemy1;
                    $ptr = 2;
                    continue main;
                }
                $this.$createProjectile4($this.$projectile, $this.$enemy1);
            }
        }
        return;
    case 1:
        ProjectileTowerAlly__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile4($this.$projectile, $this.$enemy1);
        return;
    case 2:
        ProjectileKingAlly__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile4($this.$projectile, $this.$enemy1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
TowerAlly_findEnemyGround = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$distance0 = 0;
        if (!($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemyGround))).$isEmpty()) {
            if (!($this.$enemyGround !== null && $this.$enemyGround.$getWorld() !== null))
                $this.$enemyGround = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemyGround))).$get(0);
            $this.$turnTowards($this.$enemyGround.$getX(), $this.$enemyGround.$getY());
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$enemyGround.$getY() - $this.$getY() | 0), 2.0) | 0;
            $this.$distance0 = $this.$distance0 + jl_Math_pow(jl_Math_abs($this.$enemyGround.$getX() - $this.$getX() | 0), 2.0) | 0;
            $this.$distance0 = jl_Math_sqrt($this.$distance0) | 0;
            if ($this.$distance0 > $this.$range0)
                $this.$enemyGround = ($this.$getObjectsInRange0($this.$range0, $rt_cls(TroopEnemyGround))).$get(0);
            else {
                if (jl_Object_getClass($this) === $rt_cls(TowerDownCannon)) {
                    var$1 = new ProjectileCannonAlly;
                    var$2 = $this.$enemyGround;
                    $ptr = 1;
                    continue main;
                }
                $this.$createProjectile4($this.$projectile, $this.$enemy1);
            }
            if (jl_Object_getClass($this) === $rt_cls(TowerDownCannon))
                $this.$turn(90);
        }
        return;
    case 1:
        ProjectileCannonAlly__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$projectile = var$1;
        $this.$createProjectile4($this.$projectile, $this.$enemy1);
        if (jl_Object_getClass($this) === $rt_cls(TowerDownCannon))
            $this.$turn(90);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
TowerAlly_createProjectile = ($this, $Projectile, $enemy) => {
    $this.$attackTime0 = $this.$attackTime0 - 1 | 0;
    if (!$this.$attackTime0) {
        ($this.$getWorld()).$addObject0($this.$projectile, $this.$getX(), $this.$getY());
        $this.$attackTime0 = $this.$attackSpeed0;
    }
};
function TowerAllyBuilding() {
    let a = this; TowerAlly.call(a);
    a.$decayTime0 = 0;
    a.$decaySpeed0 = 0;
    a.$health0 = null;
}
let TowerAllyBuilding__init_ = ($this, $hp, $attackTime, $range, $decayTime) => {
    let var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();$decayTime = $thread.pop();$range = $thread.pop();$attackTime = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TowerAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp = $hp;
        $this.$basehp = $hp;
        $this.$range0 = $range;
        $this.$attackTime0 = $attackTime;
        $this.$attackSpeed0 = $attackTime;
        $this.$decayTime0 = $decayTime;
        $this.$decaySpeed0 = $decayTime;
        var$5 = new HealthBar;
        var$6 = 1;
        $ptr = 2;
    case 2:
        HealthBar__init_0(var$5, $this, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health0 = var$5;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attackTime, $range, $decayTime, var$5, var$6, $ptr);
},
TowerAllyBuilding__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new TowerAllyBuilding();
    TowerAllyBuilding__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
TowerAllyBuilding_decay = $this => {
    $this.$decayTime0 = $this.$decayTime0 - 1 | 0;
    if (!$this.$decayTime0) {
        $this.$hp = $this.$hp - 1 | 0;
        $this.$decayTime0 = $this.$decaySpeed0;
    }
};
function TowerDownCannon() {
    TowerAllyBuilding.call(this);
    this.$base = null;
}
let TowerDownCannon__init_ = ($this, $base) => {
    let var$2, var$3, var$4, var$5, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$base = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 50;
        var$3 = 40;
        var$4 = 100;
        var$5 = 50;
        $ptr = 1;
    case 1:
        TowerAllyBuilding__init_($this, var$2, var$3, var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        $this.$base = $base;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $base, var$2, var$3, var$4, var$5, $ptr);
},
TowerDownCannon__init_0 = var_0 => {
    let var_1 = new TowerDownCannon();
    TowerDownCannon__init_(var_1, var_0);
    return var_1;
},
TowerDownCannon_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ($this.$getWorld()).$addObject0($this.$health0, $this.$getX(), $this.$getY() - 20 | 0);
        $this.$decay();
        if ($this.$hp <= 0) {
            ($this.$getWorld()).$removeObject($this.$base);
            ($this.$getWorld()).$removeObject($this);
            return;
        }
        $ptr = 1;
    case 1:
        $this.$findEnemyGround();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects__init_ = $this => {
    jl_Object__init_($this);
},
ju_Objects__init_0 = () => {
    let var_0 = new ju_Objects();
    ju_Objects__init_(var_0);
    return var_0;
},
ju_Objects_equals = ($a, $b) => {
    if ($a === $b)
        return 1;
    return $a !== null ? $a.$equals($b) : $b !== null ? 0 : 1;
},
ju_Objects_hashCode = $o => {
    return $o !== null ? $o.$hashCode1() : 0;
},
ju_Objects_toString = $o => {
    return ju_Objects_toString0($o, $rt_s(37));
},
ju_Objects_toString0 = ($o, $nullDefault) => {
    if ($o !== null)
        $nullDefault = $o.$toString();
    return $nullDefault;
},
ju_Objects_requireNonNull0 = $obj => {
    return ju_Objects_requireNonNull($obj, $rt_s(57));
},
ju_Objects_requireNonNull = ($obj, $message) => {
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init_($message));
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
otjc_JSUndefined = $rt_classWithoutFields();
function g_GreenfootImage$2() {
    let a = this; jl_Object.call(a);
    a.$val$sync = null;
    a.$val$success = null;
    a.$this$014 = null;
}
let g_GreenfootImage$2__init_0 = ($this, $this$0, var$2, var$3) => {
    $this.$this$014 = $this$0;
    $this.$val$sync = var$2;
    $this.$val$success = var$3;
    jl_Object__init_($this);
},
g_GreenfootImage$2__init_ = (var_0, var_1, var_2) => {
    let var_3 = new g_GreenfootImage$2();
    g_GreenfootImage$2__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
g_GreenfootImage$2_handleEvent = ($this, $arg0) => {
    let var$2;
    var$2 = jl_Thread__init_(g_GreenfootImage$2$handleEvent$lambda$_1_0__init_0($this.$val$sync, $this.$val$success));
    var$2.$start();
},
g_GreenfootImage$2_lambda$handleEvent$0 = ($sync, $success) => {
    let var$3, $$je;
    jl_Object_monitorEnterSync($sync);
    a: {
        try {
            $success.data[0] = 0;
            jl_Object_notify($sync);
            jl_Object_monitorExitSync($sync);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($sync);
    $rt_throw(var$3);
},
g_GreenfootImage$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next4 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
},
ElixirBarOverlay = $rt_classWithoutFields(Overlay),
ElixirBarOverlay__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ElixirBarOverlay__init_0 = () => {
    let var_0 = new ElixirBarOverlay();
    ElixirBarOverlay__init_(var_0);
    return var_0;
};
function g_GreenfootImage$1() {
    let a = this; jl_Object.call(a);
    a.$val$sync0 = null;
    a.$val$success0 = null;
    a.$this$012 = null;
}
let g_GreenfootImage$1__init_0 = ($this, $this$0, var$2, var$3) => {
    $this.$this$012 = $this$0;
    $this.$val$sync0 = var$2;
    $this.$val$success0 = var$3;
    jl_Object__init_($this);
},
g_GreenfootImage$1__init_ = (var_0, var_1, var_2) => {
    let var_3 = new g_GreenfootImage$1();
    g_GreenfootImage$1__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
g_GreenfootImage$1_handleEvent = ($this, $arg0) => {
    let var$2;
    var$2 = jl_Thread__init_(g_GreenfootImage$1$handleEvent$lambda$_1_0__init_0($this.$val$sync0, $this.$val$success0));
    var$2.$start();
},
g_GreenfootImage$1_lambda$handleEvent$0 = ($sync, $success) => {
    let var$3, $$je;
    jl_Object_monitorEnterSync($sync);
    a: {
        try {
            $success.data[0] = 1;
            jl_Object_notify($sync);
            jl_Object_monitorExitSync($sync);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($sync);
    $rt_throw(var$3);
},
g_GreenfootImage$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function gj_Client$lambda$new$1$lambda$_22_0() {
    jl_Object.call(this);
    this.$_06 = null;
}
let gj_Client$lambda$new$1$lambda$_22_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_06 = var$1;
},
gj_Client$lambda$new$1$lambda$_22_0__init_0 = var_0 => {
    let var_1 = new gj_Client$lambda$new$1$lambda$_22_0();
    gj_Client$lambda$new$1$lambda$_22_0__init_(var_1, var_0);
    return var_1;
},
gj_Client$lambda$new$1$lambda$_22_0_run = var$0 => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();var$0 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = var$0.$_06;
        $ptr = 1;
    case 1:
        gj_Client_lambda$new$0(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$0, var$1, $ptr);
},
ju_Queue = $rt_classWithoutFields(0),
CardPekkaMini = $rt_classWithoutFields(Card),
CardPekkaMini__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostPekkaMini;
        $ptr = 1;
    case 1:
        TroopAllyGhostPekkaMini__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardPekkaMini__init_0 = () => {
    let var_0 = new CardPekkaMini();
    CardPekkaMini__init_(var_0);
    return var_0;
},
CardPekkaMini_act = $this => {
    Card_act($this);
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_ArrayStoreException__init_ = () => {
    let var_0 = new jl_ArrayStoreException();
    jl_ArrayStoreException__init_0(var_0);
    return var_0;
},
ju_SequencedCollection = $rt_classWithoutFields(0);
function gs_SoundFactory$2() {
    let a = this; jl_Object.call(a);
    a.$val$isOk = null;
    a.$val$syncObject = null;
    a.$this$011 = null;
}
let gs_SoundFactory$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$011 = $this$0;
    $this.$val$isOk = var$2;
    $this.$val$syncObject = var$3;
    jl_Object__init_($this);
},
gs_SoundFactory$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gs_SoundFactory$2();
    gs_SoundFactory$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gs_SoundFactory$2_handleEvent = ($this, $arg0) => {
    let var$2;
    $this.$val$isOk.data[0] = 1;
    var$2 = jl_Thread__init_(gs_SoundFactory$2$handleEvent$lambda$_1_0__init_0($this.$val$syncObject));
    var$2.$start();
},
gs_SoundFactory$2_lambda$handleEvent$0 = $syncObject => {
    let var$2, $$je;
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$2);
},
gs_SoundFactory$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
TroopAllyGhostPoison = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostPoison__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = $rt_s(58);
        var$3 = $rt_s(40);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostPoison__init_0 = () => {
    let var_0 = new TroopAllyGhostPoison();
    TroopAllyGhostPoison__init_(var_0);
    return var_0;
},
TroopAllyGhostPoison_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new SpellAllyPoison;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        SpellAllyPoison__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
};
function gs_SoundFactory$1() {
    let a = this; jl_Object.call(a);
    a.$val$syncObject0 = null;
    a.$this$015 = null;
}
let gs_SoundFactory$1__init_0 = ($this, $this$0, var$2) => {
    $this.$this$015 = $this$0;
    $this.$val$syncObject0 = var$2;
    jl_Object__init_($this);
},
gs_SoundFactory$1__init_ = (var_0, var_1) => {
    let var_2 = new gs_SoundFactory$1();
    gs_SoundFactory$1__init_0(var_2, var_0, var_1);
    return var_2;
},
gs_SoundFactory$1_handleEvent = ($this, $arg0) => {
    let var$2;
    (jl_System_out()).$println($rt_s(59));
    var$2 = jl_Thread__init_(gs_SoundFactory$1$handleEvent$lambda$_1_0__init_0($this.$val$syncObject0));
    var$2.$start();
},
gs_SoundFactory$1_lambda$handleEvent$0 = $syncObject => {
    let var$2, $$je;
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$2);
},
gs_SoundFactory$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
TroopEnemySkeleton = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemySkeleton__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 5;
        var$2 = 5;
        var$3 = 25;
        var$4 = 1;
        var$5 = 1;
        var$6 = 41;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 14;
        $this.$troopName = $rt_s(38);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemySkeleton__init_0 = () => {
    let var_0 = new TroopEnemySkeleton();
    TroopEnemySkeleton__init_(var_0);
    return var_0;
},
TroopEnemySkeleton_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
};
function ju_HashMap$AbstractMapIterator() {
    let a = this; jl_Object.call(a);
    a.$position0 = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry0 = null;
    a.$prevEntry0 = null;
    a.$associatedMap = null;
}
let ju_HashMap$AbstractMapIterator__init_ = ($this, $hm) => {
    jl_Object__init_($this);
    $this.$associatedMap = $hm;
    $this.$expectedModCount = $hm.$modCount0;
    $this.$futureEntry = null;
},
ju_HashMap$AbstractMapIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$AbstractMapIterator();
    ju_HashMap$AbstractMapIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$AbstractMapIterator_hasNext = $this => {
    if ($this.$futureEntry !== null)
        return 1;
    while ($this.$position0 < $this.$associatedMap.$elementData.data.length) {
        if ($this.$associatedMap.$elementData.data[$this.$position0] !== null)
            return 1;
        $this.$position0 = $this.$position0 + 1 | 0;
    }
    return 0;
},
ju_HashMap$AbstractMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount == $this.$associatedMap.$modCount0)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_HashMap$AbstractMapIterator_makeNext = $this => {
    let var$1, var$2;
    ju_HashMap$AbstractMapIterator_checkConcurrentMod($this);
    if (!$this.$hasNext())
        $rt_throw(ju_NoSuchElementException__init_());
    if ($this.$futureEntry === null) {
        var$1 = $this.$associatedMap.$elementData.data;
        var$2 = $this.$position0;
        $this.$position0 = var$2 + 1 | 0;
        $this.$currentEntry0 = var$1[var$2];
        $this.$futureEntry = $this.$currentEntry0.$next4;
        $this.$prevEntry0 = null;
    } else {
        if ($this.$currentEntry0 !== null)
            $this.$prevEntry0 = $this.$currentEntry0;
        $this.$currentEntry0 = $this.$futureEntry;
        $this.$futureEntry = $this.$futureEntry.$next4;
    }
},
ju_HashMap$KeyIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$KeyIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$KeyIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$KeyIterator();
    ju_HashMap$KeyIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$KeyIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry0.$key;
};
function jl_Thread$SleepHandler() {
    let a = this; jl_Object.call(a);
    a.$thread = null;
    a.$callback = null;
    a.$isInterrupted = 0;
    a.$scheduleId = 0;
}
let jl_Thread$SleepHandler__init_ = ($this, $thread_0, $callback) => {
    jl_Object__init_($this);
    $this.$thread = $thread_0;
    $this.$callback = $callback;
},
jl_Thread$SleepHandler__init_0 = (var_0, var_1) => {
    let var_2 = new jl_Thread$SleepHandler();
    jl_Thread$SleepHandler__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Thread$SleepHandler_interrupted = $this => {
    $this.$thread.$interruptedFlag = 0;
    $this.$isInterrupted = 1;
    otp_Platform_killSchedule($this.$scheduleId);
    otp_Platform_postpone(jl_Thread$SleepHandler$interrupted$lambda$_1_0__init_0($this));
},
jl_Thread$SleepHandler_run = $this => {
    if (!$this.$isInterrupted) {
        $this.$thread.$interruptHandler = null;
        jl_Thread_setCurrentThread($this.$thread);
        $this.$callback.$complete(null);
    }
},
jl_Thread$SleepHandler_lambda$interrupted$1 = $this => {
    $this.$callback.$error(jl_InterruptedException__init_());
},
TowerDestroyed = $rt_classWithoutFields(Tower),
TowerDestroyed__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Tower__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TowerDestroyed__init_0 = () => {
    let var_0 = new TowerDestroyed();
    TowerDestroyed__init_(var_0);
    return var_0;
},
TowerDestroyed_act = $this => {
    return;
},
ji_OutputStream = $rt_classWithoutFields(),
ji_OutputStream__init_ = $this => {
    jl_Object__init_($this);
};
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out0 = null;
}
let ji_FilterOutputStream__init_ = ($this, $out) => {
    ji_OutputStream__init_($this);
    $this.$out0 = $out;
},
ji_FilterOutputStream__init_0 = var_0 => {
    let var_1 = new ji_FilterOutputStream();
    ji_FilterOutputStream__init_(var_1, var_0);
    return var_1;
};
function ji_PrintStream() {
    let a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer0 = null;
    a.$charset = null;
}
let ji_PrintStream__init_ = ($this, $out, $autoFlush, $charset) => {
    ji_FilterOutputStream__init_($this, $out);
    $this.$sb = jl_StringBuilder__init_();
    $this.$buffer0 = $rt_createCharArray(32);
    $this.$autoFlush = $autoFlush;
    $this.$charset = $charset;
},
ji_PrintStream__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ji_PrintStream();
    ji_PrintStream__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
otcic_JsConsolePrintStream = $rt_classWithoutFields(ji_PrintStream),
otcic_JsConsolePrintStream__init_ = $this => {
    ji_PrintStream__init_($this, null, 0, null);
},
otcic_JsConsolePrintStream_println1 = ($this, $s) => {
    $this.$print($s);
    $this.$print($rt_s(60));
},
otcic_JsConsolePrintStream_println0 = $this => {
    $this.$print($rt_s(60));
},
otcic_JsConsolePrintStream_println = ($this, $s) => {
    $this.$println(ju_Objects_toString($s));
},
otcic_JSStdoutPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStdoutPrintStream__init_ = $this => {
    otcic_JsConsolePrintStream__init_($this);
},
otcic_JSStdoutPrintStream__init_0 = () => {
    let var_0 = new otcic_JSStdoutPrintStream();
    otcic_JSStdoutPrintStream__init_(var_0);
    return var_0;
},
otcic_JSStdoutPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(37);
    $rt_putStdout($rt_ustr($s));
};
function HealthBar() {
    let a = this; g_Actor.call(a);
    a.$ally2 = null;
    a.$enemy2 = null;
    a.$troop0 = null;
    a.$tower3 = null;
    a.$isAlly = 0;
    a.$baseHP = 0;
    a.$percentage = 0.0;
}
let HealthBar__init_ = ($this, $troop, $isAlly) => {
    let var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$isAlly = $thread.pop();$troop = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$3 = new g_GreenfootImage;
        var$4 = $rt_s(61);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$ally2 = var$3;
        var$3 = new g_GreenfootImage;
        var$4 = $rt_s(62);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$enemy2 = var$3;
        $this.$troop0 = $troop;
        $this.$isAlly = $isAlly;
        $this.$baseHP = $troop.$hp0;
        if (!$isAlly)
            $this.$setImage($this.$enemy2);
        else
            $this.$setImage($this.$ally2);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $troop, $isAlly, var$3, var$4, $ptr);
},
HealthBar__init_2 = (var_0, var_1) => {
    let var_2 = new HealthBar();
    HealthBar__init_(var_2, var_0, var_1);
    return var_2;
},
HealthBar__init_0 = ($this, $tower, $isAlly) => {
    let var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$isAlly = $thread.pop();$tower = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$3 = new g_GreenfootImage;
        var$4 = $rt_s(61);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$ally2 = var$3;
        var$3 = new g_GreenfootImage;
        var$4 = $rt_s(62);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$enemy2 = var$3;
        $this.$tower3 = $tower;
        $this.$isAlly = $isAlly;
        $this.$baseHP = $tower.$hp;
        if (!$isAlly)
            $this.$setImage($this.$enemy2);
        else
            $this.$setImage($this.$ally2);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $tower, $isAlly, var$3, var$4, $ptr);
},
HealthBar__init_1 = (var_0, var_1) => {
    let var_2 = new HealthBar();
    HealthBar__init_0(var_2, var_0, var_1);
    return var_2;
},
HealthBar_act = $this => {
    if ($this.$troop0 === null) {
        if ($this.$tower3.$hp > 0)
            $this.$checkTowerHP();
        else
            ($this.$getWorld()).$removeObject($this);
    } else if ($this.$troop0.$hp0 > 0 && $this.$baseHP < 100)
        $this.$checkHP();
    else if ($this.$troop0.$hp0 > 0 && $this.$baseHP >= 100)
        $this.$checkBigHP();
    else
        ($this.$getWorld()).$removeObject($this);
},
HealthBar_checkHP = $this => {
    let $hp;
    $hp = $this.$troop0.$hp0;
    if ($hp > 0)
        $this.$percentage = $hp / $this.$baseHP * 100.0;
    if ($this.$percentage >= 10.0 && $this.$isAlly)
        $this.$ally2.$scale(($this.$percentage | 0) / 10 | 0, 3);
    if ($this.$percentage >= 10.0 && !$this.$isAlly)
        $this.$enemy2.$scale(($this.$percentage | 0) / 10 | 0, 3);
    if ($hp > 0)
        $this.$setLocation(($this.$troop0.$getX() + (($this.$percentage | 0) / 20 | 0) | 0) - 5 | 0, $this.$troop0.$getY() - 20 | 0);
},
HealthBar_checkBigHP = $this => {
    let $hp;
    $hp = $this.$troop0.$hp0;
    if ($hp > 0)
        $this.$percentage = $hp / $this.$baseHP * 100.0;
    if ($this.$percentage >= 10.0 && $this.$isAlly)
        $this.$ally2.$scale(($this.$percentage | 0) / 4 | 0, 3);
    if ($this.$percentage >= 10.0 && !$this.$isAlly)
        $this.$enemy2.$scale(($this.$percentage | 0) / 4 | 0, 3);
    if ($hp > 0)
        $this.$setLocation(($this.$troop0.$getX() + (($this.$percentage | 0) / 20 | 0) | 0) - 5 | 0, $this.$troop0.$getY() - 20 | 0);
},
HealthBar_checkTowerHP = $this => {
    let $hp;
    $hp = $this.$tower3.$hp;
    if ($hp > 0)
        $this.$percentage = $hp / $this.$baseHP * 100.0;
    if ($this.$percentage > 10.0 && $this.$isAlly)
        $this.$ally2.$scale(($this.$percentage | 0) / 4 | 0, 3);
    if ($this.$percentage > 10.0 && !$this.$isAlly)
        $this.$enemy2.$scale(($this.$percentage | 0) / 4 | 0, 3);
    if ($hp > 0)
        $this.$setLocation($this.$tower3.$getX() - (10 - (($this.$percentage | 0) / 10 | 0) | 0) | 0, $this.$tower3.$getY() - 20 | 0);
},
TroopEnemyKnight = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyKnight__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 80;
        var$2 = 7;
        var$3 = 30;
        var$4 = 1;
        var$5 = 1;
        var$6 = 35;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 12;
        $this.$troopName = $rt_s(39);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyKnight__init_0 = () => {
    let var_0 = new TroopEnemyKnight();
    TroopEnemyKnight__init_(var_0);
    return var_0;
},
TroopEnemyKnight_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAllyGolemite = $rt_classWithoutFields(TroopAllyGround),
TroopAllyGolemite__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 50;
        var$2 = 4;
        var$3 = 25;
        var$4 = 1;
        var$5 = 2;
        var$6 = 77;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 26;
        $this.$troopName = $rt_s(63);
        $this.$target = $rt_s(35);
        $this.$specialDeath = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyGolemite__init_0 = () => {
    let var_0 = new TroopAllyGolemite();
    TroopAllyGolemite__init_(var_0);
    return var_0;
},
TroopAllyGolemite_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAllyGolemite_checkHealth = $this => {
    let var$1, $enemy, $tower;
    if ($this.$hp0 <= 0) {
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TroopEnemy))).$iterator();
        while (var$1.$hasNext()) {
            $enemy = var$1.$next();
            $enemy.$hp0 = $enemy.$hp0 - 10 | 0;
        }
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TowerEnemy))).$iterator();
        while (var$1.$hasNext()) {
            $tower = var$1.$next();
            $tower.$hp = $tower.$hp - 6 | 0;
        }
        ($this.$getWorld()).$removeObject($this);
    }
};
function gc_ColManager() {
    let a = this; jl_Object.call(a);
    a.$freeObjects = null;
    a.$collisionClasses = null;
    a.$collisionChecker = null;
}
let gc_ColManager__init_ = $this => {
    jl_Object__init_($this);
    $this.$freeObjects = ju_HashMap__init_();
    $this.$collisionClasses = ju_HashSet__init_1();
    $this.$collisionChecker = gci_IBSPColChecker__init_0();
},
gc_ColManager__init_0 = () => {
    let var_0 = new gc_ColManager();
    gc_ColManager__init_(var_0);
    return var_0;
},
gc_ColManager_makeCollisionObjects = ($this, $cls, $includeSubclasses) => {
    let $entries, var$4, $entry, var$6, $actor, $classSet;
    a: {
        if ($cls === null) {
            $entries = $this.$freeObjects.$entrySet();
            var$4 = $entries.$iterator();
            while (var$4.$hasNext()) {
                $entry = var$4.$next();
                var$6 = ($entry.$getValue()).$iterator();
                while (var$6.$hasNext()) {
                    $actor = var$6.$next();
                    $this.$collisionChecker.$addObject($actor);
                }
                $this.$collisionClasses.$add0($entry.$getKey());
            }
            $this.$freeObjects.$clear();
        } else if (!$this.$collisionClasses.$contains0($cls)) {
            $classSet = $this.$freeObjects.$remove3($cls);
            if ($classSet !== null) {
                $this.$collisionClasses.$add0($cls);
                var$4 = $classSet.$iterator();
                while (true) {
                    if (!var$4.$hasNext())
                        break a;
                    $actor = var$4.$next();
                    $this.$collisionChecker.$addObject($actor);
                }
            }
        }
    }
    b: {
        if ($includeSubclasses) {
            $entries = new ju_HashSet;
            var$4 = $this.$freeObjects;
            ju_HashSet__init_2($entries, var$4.$entrySet());
            var$4 = $entries.$iterator();
            while (true) {
                if (!var$4.$hasNext())
                    break b;
                $entry = var$4.$next();
                if (jl_Class_isAssignableFrom($cls, $entry.$getKey()))
                    gc_ColManager_makeCollisionObjects($this, $entry.$getKey(), 0);
            }
        }
    }
},
gc_ColManager_prepareForCollision = ($this, $actor, $cls) => {
    gc_ColManager_makeCollisionObjects($this, jl_Object_getClass($actor), 0);
    gc_ColManager_makeCollisionObjects($this, $cls, 1);
},
gc_ColManager_addObject = ($this, $actor) => {
    let $cls, $classSet;
    $cls = jl_Object_getClass($actor);
    if ($this.$collisionClasses.$contains0($cls))
        $this.$collisionChecker.$addObject($actor);
    else {
        $classSet = $this.$freeObjects.$get0($cls);
        if ($classSet === null) {
            $classSet = ju_LinkedList__init_();
            $this.$freeObjects.$put($cls, $classSet);
        }
        $classSet.$add0($actor);
    }
},
gc_ColManager_getObjectsAt = ($this, $x, $y, $cls) => {
    gc_ColManager_makeCollisionObjects($this, $cls, 1);
    return $this.$collisionChecker.$getObjectsAt($x, $y, $cls);
},
gc_ColManager_getObjectsInRange = ($this, $x, $y, $r, $cls) => {
    gc_ColManager_makeCollisionObjects($this, $cls, 1);
    return $this.$collisionChecker.$getObjectsInRange($x, $y, $r, $cls);
},
gc_ColManager_getOneIntersectingObject = ($this, $object, $cls) => {
    gc_ColManager_prepareForCollision($this, $object, $cls);
    return $this.$collisionChecker.$getOneIntersectingObject($object, $cls);
},
gc_ColManager_initialize = ($this, $width, $height, $cellSize, $wrap) => {
    $this.$collisionChecker.$initialize0($width, $height, $cellSize, $wrap);
},
gc_ColManager_removeObject = ($this, $object) => {
    let $classSet;
    $classSet = $this.$freeObjects.$get0(jl_Object_getClass($object));
    if ($classSet !== null)
        $classSet.$remove($object);
    else
        $this.$collisionChecker.$removeObject($object);
},
gc_ColManager_startSequence = $this => {
    $this.$collisionChecker.$startSequence();
},
gc_ColManager_updateObjectLocation = ($this, $object, $oldX, $oldY) => {
    if (!$this.$freeObjects.$containsKey(jl_Object_getClass($object)))
        $this.$collisionChecker.$updateObjectLocation($object, $oldX, $oldY);
},
gc_ColManager_updateObjectSize = ($this, $object) => {
    if (!$this.$freeObjects.$containsKey(jl_Object_getClass($object)))
        $this.$collisionChecker.$updateObjectSize($object);
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $jsString, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $jsNumber, $numberWrappers, $numberFinalizationRegistry;
    if ($o === null)
        return null;
    $type = $rt_str(typeof $o);
    $isObject = !$type.$equals($rt_s(64)) && !$type.$equals($rt_s(65)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($o);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrappers.set($o, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals($rt_s(66))) {
            $jsString = $o;
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            $stringFinalizationRegistry.register($wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals($rt_s(67))) {
            $jsNumber = $o;
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            $numberFinalizationRegistry.register($wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals($rt_s(68))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($o);
},
otji_JSWrapper_maybeWrap = $o => {
    if ($o !== null && !($o instanceof $rt_objcls()))
        $o = otji_JSWrapper_wrap($o);
    return $o;
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
TowerAllyTower = $rt_classWithoutFields(TowerAlly),
TowerAllyTower__init_ = ($this, $hp, $attackTime, $range) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$range = $thread.pop();$attackTime = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TowerAlly__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp = $hp;
        $this.$basehp = $hp;
        $this.$range0 = $range;
        $this.$attackTime0 = $attackTime;
        $this.$attackSpeed0 = $attackTime;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attackTime, $range, $ptr);
},
TowerAllyTower__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new TowerAllyTower();
    TowerAllyTower__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
TowerDownKing = $rt_classWithoutFields(TowerAllyTower),
TowerDownKing__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 300;
        var$2 = 40;
        var$3 = 120;
        $ptr = 1;
    case 1:
        TowerAllyTower__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TowerDownKing__init_0 = () => {
    let var_0 = new TowerDownKing();
    TowerDownKing__init_(var_0);
    return var_0;
},
TowerDownKing_act = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            var$1 = $this.$getWorld();
            var$2 = $this.$hp;
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(var$3, var$2);
            var$1.$showText(jl_StringBuilder_toString(var$3), $this.$getX(), $this.$getY() + 40 | 0);
            if ($this.$hp > 0) {
                if ($this.$hp < $this.$basehp)
                    break a;
                if (!($this.$getObjectsInRange0(200, $rt_cls(TowerDestroyed))).$isEmpty())
                    break a;
            }
            if ($this.$hp > 0)
                return;
            var$1 = $this.$getWorld();
            var$3 = new TowerDestroyed;
            $ptr = 1;
            continue main;
        }
        $ptr = 2;
        continue main;
    case 1:
        TowerDestroyed__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, $this.$getX(), $this.$getY());
        ($this.$getWorld()).$showText($rt_s(57), $this.$getX(), $this.$getY() + 40 | 0);
        ($this.$getWorld()).$enemyCrowns = 3;
        ($this.$getWorld()).$removeObject($this);
        return;
    case 2:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractSet_equals = ($this, $obj) => {
    let $other, $iter;
    if ($this === $obj)
        return 1;
    if (!$rt_isInstance($obj, ju_Set))
        return 0;
    $other = $obj;
    if ($this.$size() != $other.$size())
        return 0;
    $iter = $other.$iterator();
    while ($iter.$hasNext()) {
        if ($this.$contains0($iter.$next()))
            continue;
        else
            return 0;
    }
    return 1;
},
ju_AbstractSet_hashCode = $this => {
    let $result, $iter, $e;
    $result = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        $e = $iter.$next();
        if ($e !== null)
            $result = $result + $e.$hashCode1() | 0;
    }
    return $result;
};
function ju_HashSet() {
    ju_AbstractSet.call(this);
    this.$backingMap = null;
}
let ju_HashSet__init_0 = $this => {
    ju_HashSet__init_($this, ju_HashMap__init_());
},
ju_HashSet__init_1 = () => {
    let var_0 = new ju_HashSet();
    ju_HashSet__init_0(var_0);
    return var_0;
},
ju_HashSet__init_2 = ($this, $collection) => {
    let $iter;
    ju_HashSet__init_($this, ju_HashMap__init_3($collection.$size() < 6 ? 11 : $collection.$size() * 2 | 0));
    $iter = $collection.$iterator();
    while ($iter.$hasNext()) {
        $this.$add0($iter.$next());
    }
},
ju_HashSet__init_4 = var_0 => {
    let var_1 = new ju_HashSet();
    ju_HashSet__init_2(var_1, var_0);
    return var_1;
},
ju_HashSet__init_ = ($this, $backingMap) => {
    ju_AbstractSet__init_($this);
    $this.$backingMap = $backingMap;
},
ju_HashSet__init_3 = var_0 => {
    let var_1 = new ju_HashSet();
    ju_HashSet__init_(var_1, var_0);
    return var_1;
},
ju_HashSet_add = ($this, $object) => {
    return $this.$backingMap.$put($object, $this) !== null ? 0 : 1;
},
ju_HashSet_contains = ($this, $object) => {
    return $this.$backingMap.$containsKey($object);
},
ju_HashSet_iterator = $this => {
    return ($this.$backingMap.$keySet()).$iterator();
},
ju_HashSet_size = $this => {
    return $this.$backingMap.$size();
};
function g_ActorSet$ActorSetIterator() {
    let a = this; jl_Object.call(a);
    a.$currentNode = null;
    a.$this$03 = null;
}
let g_ActorSet$ActorSetIterator__init_ = ($this, var$1) => {
    $this.$this$03 = var$1;
    jl_Object__init_($this);
    $this.$currentNode = g_ActorSet_access$000(var$1);
},
g_ActorSet$ActorSetIterator__init_0 = var_0 => {
    let var_1 = new g_ActorSet$ActorSetIterator();
    g_ActorSet$ActorSetIterator__init_(var_1, var_0);
    return var_1;
},
g_ActorSet$ActorSetIterator_hasNext = $this => {
    return $this.$currentNode.$next3 === g_ActorSet_access$000($this.$this$03) ? 0 : 1;
},
g_ActorSet$ActorSetIterator_next = $this => {
    $this.$currentNode = $this.$currentNode.$next3;
    return $this.$currentNode.$actor;
},
g_ActorSet$ActorSetIterator_remove = $this => {
    g_ActorSet_access$100($this.$this$03, $this.$currentNode);
},
g_ActorSet$ActorSetIterator_next0 = $this => {
    return $this.$next0();
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_newInstancePrepared = 0,
otp_Platform__init_ = $this => {
    jl_Object__init_($this);
},
otp_Platform__init_0 = () => {
    let var_0 = new otp_Platform();
    otp_Platform__init_(var_0);
    return var_0;
},
otp_Platform_isInstance = ($obj, $cls) => {
    return $obj !== null && !(typeof $obj.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable($obj.constructor, $cls) ? 1 : 0;
},
otp_Platform_isAssignable = ($from, $to) => {
    let $supertypes, $i;
    if ($from === $to)
        return 1;
    $supertypes = $from.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], $to))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_newInstance = $cls => {
    let var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$cls = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!otp_Platform_newInstancePrepared) {
            otp_Platform_prepareNewInstance();
            otp_Platform_newInstancePrepared = 1;
        }
        $ptr = 1;
    case 1:
        $tmp = otp_Platform_newInstanceImpl($cls);
        if ($rt_suspending()) {
            break main;
        }
        var$2 = $tmp;
        return var$2;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($cls, var$2, $ptr);
},
otp_Platform_prepareNewInstance = () => {
    let c = '$$constructor$$';
    jl_String[c] = jl_String__init_;
    jl_Object[c] = jl_Object__init_;
    jl_RuntimeException[c] = jl_RuntimeException__init_;
    jl_ClassCastException[c] = jl_ClassCastException__init_;
    jl_StringBuilder[c] = jl_StringBuilder__init_0;
    ScreenMainWorld[c] = ScreenMainWorld__init_;
    otji_JS[c] = otji_JS__init_;
    otp_Platform[c] = otp_Platform__init_;
    jl_Exception[c] = jl_Exception__init_;
    jl_Throwable[c] = jl_Throwable__init_;
    jl_AbstractStringBuilder[c] = jl_AbstractStringBuilder__init_;
    otcir_FieldInfo[c] = otcir_FieldInfo__init_;
    otcir_MethodInfo[c] = otcir_MethodInfo__init_;
    otcir_ClassList[c] = otcir_ClassList__init_;
    gj_Client[c] = gj_Client__init_;
    jl_String$_clinit_$lambda$_118_0[c] = jl_String$_clinit_$lambda$_118_0__init_;
    otci_IntegerUtil[c] = otci_IntegerUtil__init_;
    ju_HashMap[c] = ju_HashMap__init_1;
    gj_GreenfootUtilJsDelegate[c] = gj_GreenfootUtilJsDelegate__init_;
    ju_Properties[c] = ju_Properties__init_;
    ji_IOException[c] = ji_IOException__init_0;
    gu_GreenfootUtil[c] = gu_GreenfootUtil__init_;
    g_ActorVisitor[c] = g_ActorVisitor__init_;
    ju_Hashtable[c] = ju_Hashtable__init_;
    jl_System[c] = jl_System__init_;
    otcic_JSStdoutPrintStream[c] = otcic_JSStdoutPrintStream__init_;
    jl_Thread[c] = jl_Thread__init_1;
    jl_NumberFormatException[c] = jl_NumberFormatException__init_1;
    jl_IllegalArgumentException[c] = jl_IllegalArgumentException__init_0;
    ju_Objects[c] = ju_Objects__init_;
    jl_IndexOutOfBoundsException[c] = jl_IndexOutOfBoundsException__init_0;
    gc_ImageCache[c] = gc_ImageCache__init_;
    gj_KeyboardManager[c] = gj_KeyboardManager__init_;
    g_GreenfootImage[c] = g_GreenfootImage__init_2;
    jl_IllegalStateException[c] = jl_IllegalStateException__init_;
    jl_IllegalMonitorStateException[c] = jl_IllegalMonitorStateException__init_0;
    jl_InterruptedException[c] = jl_InterruptedException__init_0;
    ju_LinkedList[c] = ju_LinkedList__init_0;
    ju_ArrayList[c] = ju_ArrayList__init_1;
    jl_ClassNotFoundException[c] = jl_ClassNotFoundException__init_;
    jl_InstantiationException[c] = jl_InstantiationException__init_;
    jl_ReflectiveOperationException[c] = jl_ReflectiveOperationException__init_;
    ggim_MouseEventData[c] = ggim_MouseEventData__init_0;
    otcic_JSStderrPrintStream[c] = otcic_JSStderrPrintStream__init_;
    ju_Hashtable$1[c] = ju_Hashtable$1__init_;
    ju_Hashtable$2[c] = ju_Hashtable$2__init_;
    jl_Object$Monitor[c] = jl_Object$Monitor__init_;
    jl_NullPointerException[c] = jl_NullPointerException__init_1;
    jl_DefaultUncaughtExceptionHandler[c] = jl_DefaultUncaughtExceptionHandler__init_;
    jl_Math[c] = jl_Math__init_;
    Music[c] = Music__init_;
    MenuScreenMainText[c] = MenuScreenMainText__init_;
    MenuScreenMainLogo[c] = MenuScreenMainLogo__init_;
    ju_Arrays[c] = ju_Arrays__init_;
    jl_ArrayStoreException[c] = jl_ArrayStoreException__init_0;
    g_WorldVisitor[c] = g_WorldVisitor__init_;
    g_Greenfoot[c] = g_Greenfoot__init_;
    jlr_Array[c] = jlr_Array__init_;
    g_ImageVisitor[c] = g_ImageVisitor__init_;
    gc_ColManager[c] = gc_ColManager__init_;
    g_TreeActorSet[c] = g_TreeActorSet__init_;
    ju_Random[c] = ju_Random__init_;
    otjc_JSObjects[c] = otjc_JSObjects__init_;
    otji_JSWrapper$Helper[c] = otji_JSWrapper$Helper__init_;
    gu_GraphicsUtilities[c] = gu_GraphicsUtilities__init_;
    ju_HashSet[c] = ju_HashSet__init_0;
    gci_IBSPColChecker[c] = gci_IBSPColChecker__init_;
    g_ActorSet[c] = g_ActorSet__init_;
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0[c] = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_;
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1[c] = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_;
    gc_GOCollisionQuery[c] = gc_GOCollisionQuery__init_;
    gc_NeighbourCollisionQuery[c] = gc_NeighbourCollisionQuery__init_;
    gc_PointCollisionQuery[c] = gc_PointCollisionQuery__init_;
    gc_InRangeQuery[c] = gc_InRangeQuery__init_;
    gs_SoundFactory[c] = gs_SoundFactory__init_;
    otpp_ResourceAccessor[c] = otpp_ResourceAccessor__init_;
    otciu_UnicodeHelper[c] = otciu_UnicodeHelper__init_;
    otci_Base46[c] = otci_Base46__init_;
    jl_NegativeArraySizeException[c] = jl_NegativeArraySizeException__init_;
    jl_StringIndexOutOfBoundsException[c] = jl_StringIndexOutOfBoundsException__init_0;
    jl_UnsupportedOperationException[c] = jl_UnsupportedOperationException__init_;
    ju_NoSuchElementException[c] = ju_NoSuchElementException__init_0;
    ju_ConcurrentModificationException[c] = ju_ConcurrentModificationException__init_0;
    gci_BSPNodeCache[c] = gci_BSPNodeCache__init_;
    ju_LinkedList$Entry[c] = ju_LinkedList$Entry__init_;
    gc_ActInterruptedException[c] = gc_ActInterruptedException__init_;
    ggim_PriorityManager[c] = ggim_PriorityManager__init_;
    DifficultyMenuWorld[c] = DifficultyMenuWorld__init_;
    g_MouseInfoVisitor[c] = g_MouseInfoVisitor__init_;
    g_MouseInfo[c] = g_MouseInfo__init_;
    jl_AbstractStringBuilder$Constants[c] = jl_AbstractStringBuilder$Constants__init_;
    otcit_DoubleAnalyzer[c] = otcit_DoubleAnalyzer__init_;
    otcit_DoubleAnalyzer$Result[c] = otcit_DoubleAnalyzer$Result__init_;
    otcit_FloatAnalyzer$Result[c] = otcit_FloatAnalyzer$Result__init_;
    ClashWorld[c] = ClashWorld__init_;
    DeckMenuWorld[c] = DeckMenuWorld__init_;
    DoubleElixirText[c] = DoubleElixirText__init_;
    ElixirBar[c] = ElixirBar__init_;
    Troop[c] = Troop__init_;
    TowerUpPrincess[c] = TowerUpPrincess__init_;
    TowerDownPrincess[c] = TowerDownPrincess__init_;
    Overlay[c] = Overlay__init_;
    Projectile[c] = Projectile__init_;
    TowerAlly[c] = TowerAlly__init_;
    TowerEnemy[c] = TowerEnemy__init_;
    ZoneTroopsOverlay[c] = ZoneTroopsOverlay__init_;
    ZoneTroopsPlace[c] = ZoneTroopsPlace__init_;
    MenuDeckText[c] = MenuDeckText__init_;
    MenuButtonStart[c] = MenuButtonStart__init_;
    Tower[c] = Tower__init_;
    SpellEnemy[c] = SpellEnemy__init_;
    Spell[c] = Spell__init_;
    SpellAlly[c] = SpellAlly__init_;
    TroopEnemyKnight[c] = TroopEnemyKnight__init_;
    TroopEnemyArcher[c] = TroopEnemyArcher__init_;
    TroopEnemyGiant[c] = TroopEnemyGiant__init_;
    TroopEnemyPekkaMini[c] = TroopEnemyPekkaMini__init_;
    TroopEnemyDragonBaby[c] = TroopEnemyDragonBaby__init_;
    TroopEnemyGoblinSpear[c] = TroopEnemyGoblinSpear__init_;
    TroopEnemySkeleton[c] = TroopEnemySkeleton__init_;
    TroopEnemyGolem[c] = TroopEnemyGolem__init_;
    TowerBaseCannon[c] = TowerBaseCannon__init_;
    SpellEnemyPoison[c] = SpellEnemyPoison__init_;
    ElixirBarOverlay[c] = ElixirBarOverlay__init_;
    ScoreOverlayUp[c] = ScoreOverlayUp__init_;
    ScoreOverlayDown[c] = ScoreOverlayDown__init_;
    CardNextOverlay[c] = CardNextOverlay__init_;
    CardNext[c] = CardNext__init_;
    ZoneTroopsPlaceStart[c] = ZoneTroopsPlaceStart__init_;
    TowerDownKing[c] = TowerDownKing__init_;
    TowerUpKing[c] = TowerUpKing__init_;
    TroopEnemy[c] = TroopEnemy__init_;
    CardKnight[c] = CardKnight__init_;
    CardArcher[c] = CardArcher__init_;
    CardGiant[c] = CardGiant__init_;
    CardSkeleton[c] = CardSkeleton__init_;
    CardDragonBaby[c] = CardDragonBaby__init_;
    CardGoblinSpear[c] = CardGoblinSpear__init_;
    CardGolem[c] = CardGolem__init_;
    CardCannon[c] = CardCannon__init_;
    CardFireball[c] = CardFireball__init_;
    CardPekkaMini[c] = CardPekkaMini__init_;
    CardPoison[c] = CardPoison__init_;
    TowerDestroyed[c] = TowerDestroyed__init_;
    ZoneTroopsPlaceRight[c] = ZoneTroopsPlaceRight__init_;
    ZoneTroopsPlaceLeft[c] = ZoneTroopsPlaceLeft__init_;
    TroopAllyGhostKnight[c] = TroopAllyGhostKnight__init_;
    TroopAllyGhostArcher[c] = TroopAllyGhostArcher__init_;
    TroopAllyGhostGiant[c] = TroopAllyGhostGiant__init_;
    TroopAllyGhostSkeleton[c] = TroopAllyGhostSkeleton__init_;
    TroopAllyGhostDragonBaby[c] = TroopAllyGhostDragonBaby__init_;
    TroopAllyGhostGoblinSpear[c] = TroopAllyGhostGoblinSpear__init_;
    TroopAllyGhostGolem[c] = TroopAllyGhostGolem__init_;
    TroopAllyGhostCannon[c] = TroopAllyGhostCannon__init_;
    TroopAllyGhostFireball[c] = TroopAllyGhostFireball__init_;
    TroopAllyGhostPekkaMini[c] = TroopAllyGhostPekkaMini__init_;
    TroopAllyGhostPoison[c] = TroopAllyGhostPoison__init_;
    TroopAlly[c] = TroopAlly__init_;
    TroopEnemyGolemite[c] = TroopEnemyGolemite__init_;
    TroopAllyKnight[c] = TroopAllyKnight__init_;
    SpellAllyPoison[c] = SpellAllyPoison__init_;
    TroopAllyPekkaMini[c] = TroopAllyPekkaMini__init_;
    TroopAllyGiant[c] = TroopAllyGiant__init_;
    TroopAllySkeleton[c] = TroopAllySkeleton__init_;
    TroopAllyGolem[c] = TroopAllyGolem__init_;
    TroopAllyGoblinSpear[c] = TroopAllyGoblinSpear__init_;
    TroopAllyDragonBaby[c] = TroopAllyDragonBaby__init_;
    TroopAllyArcher[c] = TroopAllyArcher__init_;
    TroopAllyGolemite[c] = TroopAllyGolemite__init_;
},
otp_Platform_newInstanceImpl = var$1 => {
    let thread = $rt_nativeThread();
    if ($rt_resuming()) {
        let r = thread.pop();
        var$1.$$constructor$$(r);
        if ($rt_suspending()) {
            return thread.push(r);
        }
        return r;
    }
    if (!var$1.hasOwnProperty("$$constructor$$")) {
        return null;
    }
    let r = new var$1();
    var$1.$$constructor$$(r);
    if ($rt_suspending()) {
        thread.push(r);
    }
    return r;
},
otp_Platform_lookupClass = var$1 => {
    switch ($rt_ustr(var$1)) {
        case "ZoneTroopsPlaceStart": ZoneTroopsPlaceStart.$clinit(); return ZoneTroopsPlaceStart;
        case "java.lang.IndexOutOfBoundsException": jl_IndexOutOfBoundsException.$clinit(); return jl_IndexOutOfBoundsException;
        case "greenfoot.j2js.GreenfootUtilJsDelegate": gj_GreenfootUtilJsDelegate.$clinit(); return gj_GreenfootUtilJsDelegate;
        case "java.io.BufferedInputStream": ji_BufferedInputStream.$clinit(); return ji_BufferedInputStream;
        case "ScreenMainWorld": ScreenMainWorld.$clinit(); return ScreenMainWorld;
        case "java.util.Enumeration": ju_Enumeration.$clinit(); return ju_Enumeration;
        case "TroopEnemyPekkaMini": TroopEnemyPekkaMini.$clinit(); return TroopEnemyPekkaMini;
        case "SpellAllyFireball": SpellAllyFireball.$clinit(); return SpellAllyFireball;
        case "greenfoot.j2js.MouseManager$handleTouchEvent$lambda$_11_0": gj_MouseManager$handleTouchEvent$lambda$_11_0.$clinit(); return gj_MouseManager$handleTouchEvent$lambda$_11_0;
        case "ClashWorld": ClashWorld.$clinit(); return ClashWorld;
        case "DifficultyMenuWorld": DifficultyMenuWorld.$clinit(); return DifficultyMenuWorld;
        case "java.lang.Integer": jl_Integer.$clinit(); return jl_Integer;
        case "greenfoot.sound.SoundFactory$2$handleEvent$lambda$_1_0": gs_SoundFactory$2$handleEvent$lambda$_1_0.$clinit(); return gs_SoundFactory$2$handleEvent$lambda$_1_0;
        case "java.lang.AbstractStringBuilder$Constants": jl_AbstractStringBuilder$Constants.$clinit(); return jl_AbstractStringBuilder$Constants;
        case "TroopEnemyArcher": TroopEnemyArcher.$clinit(); return TroopEnemyArcher;
        case "java.lang.Object$NotifyListenerImpl": jl_Object$NotifyListenerImpl.$clinit(); return jl_Object$NotifyListenerImpl;
        case "org.teavm.jso.dom.html.HTMLDocument": otjdh_HTMLDocument.$clinit(); return otjdh_HTMLDocument;
        case "java.lang.Long": jl_Long.$clinit(); return jl_Long;
        case "TroopAllyGhostDragonBaby": TroopAllyGhostDragonBaby.$clinit(); return TroopAllyGhostDragonBaby;
        case "java.util.Map": ju_Map.$clinit(); return ju_Map;
        case "java.lang.Thread": jl_Thread.$clinit(); return jl_Thread;
        case "greenfoot.j2js.Client$getResourceBytes$lambda$_12_0": gj_Client$getResourceBytes$lambda$_12_0.$clinit(); return gj_Client$getResourceBytes$lambda$_12_0;
        case "Overlay": Overlay.$clinit(); return Overlay;
        case "greenfoot.j2js.Client$getResourceBytes$lambda$_12_1": gj_Client$getResourceBytes$lambda$_12_1.$clinit(); return gj_Client$getResourceBytes$lambda$_12_1;
        case "org.teavm.platform.PlatformQueue": otp_PlatformQueue.$clinit(); return otp_PlatformQueue;
        case "TroopAllyGiant": TroopAllyGiant.$clinit(); return TroopAllyGiant;
        case "java.lang.CharSequence": jl_CharSequence.$clinit(); return jl_CharSequence;
        case "org.teavm.jso.dom.events.LoadEventTarget": otjde_LoadEventTarget.$clinit(); return otjde_LoadEventTarget;
        case "java.lang.StringIndexOutOfBoundsException": jl_StringIndexOutOfBoundsException.$clinit(); return jl_StringIndexOutOfBoundsException;
        case "greenfoot.j2js.TouchManager": gj_TouchManager.$clinit(); return gj_TouchManager;
        case "java.io.Serializable": ji_Serializable.$clinit(); return ji_Serializable;
        case "org.teavm.classlib.impl.Base46": otci_Base46.$clinit(); return otci_Base46;
        case "greenfoot.sound.Sound": gs_Sound.$clinit(); return gs_Sound;
        case "org.teavm.jso.impl.JSWrapper$Helper": otji_JSWrapper$Helper.$clinit(); return otji_JSWrapper$Helper;
        case "ZoneTroopsPlaceRight": ZoneTroopsPlaceRight.$clinit(); return ZoneTroopsPlaceRight;
        case "org.teavm.jso.browser.TimerHandler": otjb_TimerHandler.$clinit(); return otjb_TimerHandler;
        case "ProjectileCannonAlly": ProjectileCannonAlly.$clinit(); return ProjectileCannonAlly;
        case "java.lang.String$<clinit>$lambda$_118_0": jl_String$_clinit_$lambda$_118_0.$clinit(); return jl_String$_clinit_$lambda$_118_0;
        case "java.lang.StringBuilder": jl_StringBuilder.$clinit(); return jl_StringBuilder;
        case "Tower": Tower.$clinit(); return Tower;
        case "java.util.ConcurrentModificationException": ju_ConcurrentModificationException.$clinit(); return ju_ConcurrentModificationException;
        case "java.util.random.RandomGenerator": jur_RandomGenerator.$clinit(); return jur_RandomGenerator;
        case "ProjectileTowerEnemy": ProjectileTowerEnemy.$clinit(); return ProjectileTowerEnemy;
        case "java.util.Hashtable$1": ju_Hashtable$1.$clinit(); return ju_Hashtable$1;
        case "java.util.Hashtable$2": ju_Hashtable$2.$clinit(); return ju_Hashtable$2;
        case "java.util.Hashtable$Entry": ju_Hashtable$Entry.$clinit(); return ju_Hashtable$Entry;
        case "TroopAllySkeleton": TroopAllySkeleton.$clinit(); return TroopAllySkeleton;
        case "greenfoot.MouseInfoVisitor": g_MouseInfoVisitor.$clinit(); return g_MouseInfoVisitor;
        case "TroopAllyGhostArcher": TroopAllyGhostArcher.$clinit(); return TroopAllyGhostArcher;
        case "java.lang.ReflectiveOperationException": jl_ReflectiveOperationException.$clinit(); return jl_ReflectiveOperationException;
        case "CardKnight": CardKnight.$clinit(); return CardKnight;
        case "java.lang.ClassCastException": jl_ClassCastException.$clinit(); return jl_ClassCastException;
        case "greenfoot.platforms.GreenfootUtilDelegate": gp_GreenfootUtilDelegate.$clinit(); return gp_GreenfootUtilDelegate;
        case "greenfoot.collision.GOCollisionQuery": gc_GOCollisionQuery.$clinit(); return gc_GOCollisionQuery;
        case "TowerBaseCannon": TowerBaseCannon.$clinit(); return TowerBaseCannon;
        case "greenfoot.j2js.Client$<init>$lambda$_1_3": gj_Client$_init_$lambda$_1_3.$clinit(); return gj_Client$_init_$lambda$_1_3;
        case "TroopEnemyGround": TroopEnemyGround.$clinit(); return TroopEnemyGround;
        case "greenfoot.j2js.Client$<init>$lambda$_1_2": gj_Client$_init_$lambda$_1_2.$clinit(); return gj_Client$_init_$lambda$_1_2;
        case "greenfoot.j2js.Client$<init>$lambda$_1_1": gj_Client$_init_$lambda$_1_1.$clinit(); return gj_Client$_init_$lambda$_1_1;
        case "greenfoot.collision.ibsp.ActorNode": gci_ActorNode.$clinit(); return gci_ActorNode;
        case "greenfoot.Color": g_Color.$clinit(); return g_Color;
        case "greenfoot.j2js.Client$getResourceURL$lambda$_11_0": gj_Client$getResourceURL$lambda$_11_0.$clinit(); return gj_Client$getResourceURL$lambda$_11_0;
        case "greenfoot.j2js.Client$<init>$lambda$_1_0": gj_Client$_init_$lambda$_1_0.$clinit(); return gj_Client$_init_$lambda$_1_0;
        case "greenfoot.j2js.Client$getResourceURL$lambda$_11_1": gj_Client$getResourceURL$lambda$_11_1.$clinit(); return gj_Client$getResourceURL$lambda$_11_1;
        case "java.io.Flushable": ji_Flushable.$clinit(); return ji_Flushable;
        case "SpellEnemy": SpellEnemy.$clinit(); return SpellEnemy;
        case "greenfoot.collision.ibsp.Rect": gci_Rect.$clinit(); return gci_Rect;
        case "greenfoot.sound.SoundFactory": gs_SoundFactory.$clinit(); return gs_SoundFactory;
        case "CardGoblinSpear": CardGoblinSpear.$clinit(); return CardGoblinSpear;
        case "CardArcher": CardArcher.$clinit(); return CardArcher;
        case "java.io.IOException": ji_IOException.$clinit(); return ji_IOException;
        case "ScoreOverlayUp": ScoreOverlayUp.$clinit(); return ScoreOverlayUp;
        case "greenfoot.collision.PointCollisionQuery": gc_PointCollisionQuery.$clinit(); return gc_PointCollisionQuery;
        case "greenfoot.collision.ibsp.IBSPColChecker": gci_IBSPColChecker.$clinit(); return gci_IBSPColChecker;
        case "java.util.AbstractList$1": ju_AbstractList$1.$clinit(); return ju_AbstractList$1;
        case "CardPoison": CardPoison.$clinit(); return CardPoison;
        case "Music": Music.$clinit(); return Music;
        case "ZoneTroopsPlaceLeft": ZoneTroopsPlaceLeft.$clinit(); return ZoneTroopsPlaceLeft;
        case "ProjectileCannonEnemy": ProjectileCannonEnemy.$clinit(); return ProjectileCannonEnemy;
        case "greenfoot.core.ActInterruptedException": gc_ActInterruptedException.$clinit(); return gc_ActInterruptedException;
        case "greenfoot.core.ImageCache": gc_ImageCache.$clinit(); return gc_ImageCache;
        case "DoubleElixirText": DoubleElixirText.$clinit(); return DoubleElixirText;
        case "greenfoot.core.Simulation": gc_Simulation.$clinit(); return gc_Simulation;
        case "greenfoot.GreenfootSound": g_GreenfootSound.$clinit(); return g_GreenfootSound;
        case "java.lang.reflect.Array": jlr_Array.$clinit(); return jlr_Array;
        case "java.lang.Object$NotifyListenerImpl$interrupted$lambda$_4_0": jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0.$clinit(); return jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0;
        case "greenfoot.util.GreenfootUtil": gu_GreenfootUtil.$clinit(); return gu_GreenfootUtil;
        case "java.util.ListIterator": ju_ListIterator.$clinit(); return ju_ListIterator;
        case "SpellAllyGround": SpellAllyGround.$clinit(); return SpellAllyGround;
        case "org.teavm.classlib.impl.text.DoubleAnalyzer$Result": otcit_DoubleAnalyzer$Result.$clinit(); return otcit_DoubleAnalyzer$Result;
        case "java.util.Random": ju_Random.$clinit(); return ju_Random;
        case "java.lang.Runnable": jl_Runnable.$clinit(); return jl_Runnable;
        case "org.teavm.platform.plugin.ResourceAccessor": otpp_ResourceAccessor.$clinit(); return otpp_ResourceAccessor;
        case "MenuButtonStart": MenuButtonStart.$clinit(); return MenuButtonStart;
        case "java.util.AbstractCollection": ju_AbstractCollection.$clinit(); return ju_AbstractCollection;
        case "greenfoot.util.GraphicsUtilities": gu_GraphicsUtilities.$clinit(); return gu_GraphicsUtilities;
        case "java.io.ByteArrayInputStream": ji_ByteArrayInputStream.$clinit(); return ji_ByteArrayInputStream;
        case "org.teavm.classlib.impl.IntegerUtil": otci_IntegerUtil.$clinit(); return otci_IntegerUtil;
        case "java.lang.InstantiationException": jl_InstantiationException.$clinit(); return jl_InstantiationException;
        case "java.lang.DefaultUncaughtExceptionHandler": jl_DefaultUncaughtExceptionHandler.$clinit(); return jl_DefaultUncaughtExceptionHandler;
        case "TroopAllyDragonBaby": TroopAllyDragonBaby.$clinit(); return TroopAllyDragonBaby;
        case "org.teavm.classlib.impl.reflection.FieldInfo": otcir_FieldInfo.$clinit(); return otcir_FieldInfo;
        case "org.teavm.jso.core.JSObjects": otjc_JSObjects.$clinit(); return otjc_JSObjects;
        case "EndState": EndState.$clinit(); return EndState;
        case "greenfoot.ImageVisitor": g_ImageVisitor.$clinit(); return g_ImageVisitor;
        case "ScoreOverlayDown": ScoreOverlayDown.$clinit(); return ScoreOverlayDown;
        case "TroopAllyGhostGoblinSpear": TroopAllyGhostGoblinSpear.$clinit(); return TroopAllyGhostGoblinSpear;
        case "org.teavm.jso.impl.JS": otji_JS.$clinit(); return otji_JS;
        case "TroopEnemyGiant": TroopEnemyGiant.$clinit(); return TroopEnemyGiant;
        case "TowerUpCannon": TowerUpCannon.$clinit(); return TowerUpCannon;
        case "SpellEnemyFireball": SpellEnemyFireball.$clinit(); return SpellEnemyFireball;
        case "greenfoot.Actor": g_Actor.$clinit(); return g_Actor;
        case "java.util.Collection": ju_Collection.$clinit(); return ju_Collection;
        case "org.teavm.platform.PlatformRunnable": otp_PlatformRunnable.$clinit(); return otp_PlatformRunnable;
        case "CardNextOverlay": CardNextOverlay.$clinit(); return CardNextOverlay;
        case "java.net.URLStreamHandlerFactory": jn_URLStreamHandlerFactory.$clinit(); return jn_URLStreamHandlerFactory;
        case "org.teavm.classlib.impl.unicode.UnicodeHelper": otciu_UnicodeHelper.$clinit(); return otciu_UnicodeHelper;
        case "CardDeck": CardDeck.$clinit(); return CardDeck;
        case "java.lang.Object$monitorEnterWait$lambda$_6_0": jl_Object$monitorEnterWait$lambda$_6_0.$clinit(); return jl_Object$monitorEnterWait$lambda$_6_0;
        case "TowerDownCannon": TowerDownCannon.$clinit(); return TowerDownCannon;
        case "java.util.Objects": ju_Objects.$clinit(); return ju_Objects;
        case "SpellEnemyAir": SpellEnemyAir.$clinit(); return SpellEnemyAir;
        case "org.teavm.jso.core.JSUndefined": otjc_JSUndefined.$clinit(); return otjc_JSUndefined;
        case "greenfoot.GreenfootImage$2": g_GreenfootImage$2.$clinit(); return g_GreenfootImage$2;
        case "java.util.HashMap$HashEntry": ju_HashMap$HashEntry.$clinit(); return ju_HashMap$HashEntry;
        case "ElixirBarOverlay": ElixirBarOverlay.$clinit(); return ElixirBarOverlay;
        case "TroopAllyAir": TroopAllyAir.$clinit(); return TroopAllyAir;
        case "greenfoot.GreenfootImage$1": g_GreenfootImage$1.$clinit(); return g_GreenfootImage$1;
        case "greenfoot.j2js.Client$lambda$new$1$lambda$_22_0": gj_Client$lambda$new$1$lambda$_22_0.$clinit(); return gj_Client$lambda$new$1$lambda$_22_0;
        case "java.util.Queue": ju_Queue.$clinit(); return ju_Queue;
        case "CardPekkaMini": CardPekkaMini.$clinit(); return CardPekkaMini;
        case "java.util.MapEntry": ju_MapEntry.$clinit(); return ju_MapEntry;
        case "java.lang.ArrayStoreException": jl_ArrayStoreException.$clinit(); return jl_ArrayStoreException;
        case "java.util.SequencedCollection": ju_SequencedCollection.$clinit(); return ju_SequencedCollection;
        case "greenfoot.sound.SoundFactory$2": gs_SoundFactory$2.$clinit(); return gs_SoundFactory$2;
        case "TroopAllyGhostPoison": TroopAllyGhostPoison.$clinit(); return TroopAllyGhostPoison;
        case "greenfoot.sound.SoundFactory$1": gs_SoundFactory$1.$clinit(); return gs_SoundFactory$1;
        case "TroopEnemySkeleton": TroopEnemySkeleton.$clinit(); return TroopEnemySkeleton;
        case "java.util.HashMap$KeyIterator": ju_HashMap$KeyIterator.$clinit(); return ju_HashMap$KeyIterator;
        case "java.lang.Thread$SleepHandler": jl_Thread$SleepHandler.$clinit(); return jl_Thread$SleepHandler;
        case "greenfoot.j2js.ContentReceiver": gj_ContentReceiver.$clinit(); return gj_ContentReceiver;
        case "TowerDestroyed": TowerDestroyed.$clinit(); return TowerDestroyed;
        case "org.teavm.classlib.impl.console.JSStdoutPrintStream": otcic_JSStdoutPrintStream.$clinit(); return otcic_JSStdoutPrintStream;
        case "HealthBar": HealthBar.$clinit(); return HealthBar;
        case "TroopEnemyKnight": TroopEnemyKnight.$clinit(); return TroopEnemyKnight;
        case "TroopAllyGolemite": TroopAllyGolemite.$clinit(); return TroopAllyGolemite;
        case "greenfoot.collision.ColManager": gc_ColManager.$clinit(); return gc_ColManager;
        case "org.teavm.jso.impl.JSWrapper": otji_JSWrapper.$clinit(); return otji_JSWrapper;
        case "greenfoot.j2js.ErrorCallback": gj_ErrorCallback.$clinit(); return gj_ErrorCallback;
        case "TowerDownKing": TowerDownKing.$clinit(); return TowerDownKing;
        case "org.teavm.classlib.impl.console.JsConsolePrintStream": otcic_JsConsolePrintStream.$clinit(); return otcic_JsConsolePrintStream;
        case "java.util.HashSet": ju_HashSet.$clinit(); return ju_HashSet;
        case "TowerEnemy": TowerEnemy.$clinit(); return TowerEnemy;
        case "java.io.FilterInputStream": ji_FilterInputStream.$clinit(); return ji_FilterInputStream;
        case "greenfoot.ActorSet$ActorSetIterator": g_ActorSet$ActorSetIterator.$clinit(); return g_ActorSet$ActorSetIterator;
        case "ProjectileEnemy": ProjectileEnemy.$clinit(); return ProjectileEnemy;
        case "org.teavm.platform.Platform": otp_Platform.$clinit(); return otp_Platform;
        case "java.nio.charset.Charset": jnc_Charset.$clinit(); return jnc_Charset;
        case "java.lang.Thread$UncaughtExceptionHandler": jl_Thread$UncaughtExceptionHandler.$clinit(); return jl_Thread$UncaughtExceptionHandler;
        case "greenfoot.platforms.ActorDelegate": gp_ActorDelegate.$clinit(); return gp_ActorDelegate;
        case "ProjectileSpearAlly": ProjectileSpearAlly.$clinit(); return ProjectileSpearAlly;
        case "java.lang.AbstractStringBuilder": jl_AbstractStringBuilder.$clinit(); return jl_AbstractStringBuilder;
        case "java.util.LinkedList": ju_LinkedList.$clinit(); return ju_LinkedList;
        case "greenfoot.sound.SoundFactory$1$handleEvent$lambda$_1_0": gs_SoundFactory$1$handleEvent$lambda$_1_0.$clinit(); return gs_SoundFactory$1$handleEvent$lambda$_1_0;
        case "java.util.NoSuchElementException": ju_NoSuchElementException.$clinit(); return ju_NoSuchElementException;
        case "java.io.PrintStream": ji_PrintStream.$clinit(); return ji_PrintStream;
        case "org.teavm.classlib.impl.console.JSStderrPrintStream": otcic_JSStderrPrintStream.$clinit(); return otcic_JSStderrPrintStream;
        case "ProjectileAlly": ProjectileAlly.$clinit(); return ProjectileAlly;
        case "TroopAllyPekkaMini": TroopAllyPekkaMini.$clinit(); return TroopAllyPekkaMini;
        case "java.lang.Appendable": jl_Appendable.$clinit(); return jl_Appendable;
        case "org.teavm.interop.AsyncCallback": oti_AsyncCallback.$clinit(); return oti_AsyncCallback;
        case "greenfoot.GreenfootImage": g_GreenfootImage.$clinit(); return g_GreenfootImage;
        case "TowerAllyTower": TowerAllyTower.$clinit(); return TowerAllyTower;
        case "java.util.AbstractMap": ju_AbstractMap.$clinit(); return ju_AbstractMap;
        case "ProjectileKingAlly": ProjectileKingAlly.$clinit(); return ProjectileKingAlly;
        case "org.teavm.classlib.impl.reflection.MethodInfo": otcir_MethodInfo.$clinit(); return otcir_MethodInfo;
        case "java.lang.Object": jl_Object.$clinit(); return jl_Object;
        case "java.lang.Class": jl_Class.$clinit(); return jl_Class;
        case "java.util.Comparator": ju_Comparator.$clinit(); return ju_Comparator;
        case "greenfoot.core.ImageCache$CachedImageRef": gc_ImageCache$CachedImageRef.$clinit(); return gc_ImageCache$CachedImageRef;
        case "TroopAllyGoblinSpear": TroopAllyGoblinSpear.$clinit(); return TroopAllyGoblinSpear;
        case "org.teavm.jso.dom.xml.Document": otjdx_Document.$clinit(); return otjdx_Document;
        case "java.util.Arrays": ju_Arrays.$clinit(); return ju_Arrays;
        case "greenfoot.collision.ibsp.BSPNodeCache": gci_BSPNodeCache.$clinit(); return gci_BSPNodeCache;
        case "greenfoot.j2js.MouseManager": gj_MouseManager.$clinit(); return gj_MouseManager;
        case "TroopEnemyGoblinSpear": TroopEnemyGoblinSpear.$clinit(); return TroopEnemyGoblinSpear;
        case "greenfoot.gui.input.mouse.WorldLocator": ggim_WorldLocator.$clinit(); return ggim_WorldLocator;
        case "greenfoot.core.WorldHandler$1": gc_WorldHandler$1.$clinit(); return gc_WorldHandler$1;
        case "java.lang.System": jl_System.$clinit(); return jl_System;
        case "greenfoot.Greenfoot": g_Greenfoot.$clinit(); return g_Greenfoot;
        case "greenfoot.collision.InRangeQuery": gc_InRangeQuery.$clinit(); return gc_InRangeQuery;
        case "TowerAllyBuilding": TowerAllyBuilding.$clinit(); return TowerAllyBuilding;
        case "MenuDeckText": MenuDeckText.$clinit(); return MenuDeckText;
        case "CardGiant": CardGiant.$clinit(); return CardGiant;
        case "greenfoot.core.WorldHandler$2": gc_WorldHandler$2.$clinit(); return gc_WorldHandler$2;
        case "TroopAlly": TroopAlly.$clinit(); return TroopAlly;
        case "MenuScreenMainText": MenuScreenMainText.$clinit(); return MenuScreenMainText;
        case "MenuButtonDifficulty": MenuButtonDifficulty.$clinit(); return MenuButtonDifficulty;
        case "java.util.LinkedList$Entry": ju_LinkedList$Entry.$clinit(); return ju_LinkedList$Entry;
        case "ProjectileArrowAlly": ProjectileArrowAlly.$clinit(); return ProjectileArrowAlly;
        case "java.lang.Character": jl_Character.$clinit(); return jl_Character;
        case "ElixirBar": ElixirBar.$clinit(); return ElixirBar;
        case "TroopEnemyGolem": TroopEnemyGolem.$clinit(); return TroopEnemyGolem;
        case "java.lang.Object$monitorExit$lambda$_8_0": jl_Object$monitorExit$lambda$_8_0.$clinit(); return jl_Object$monitorExit$lambda$_8_0;
        case "CardNext": CardNext.$clinit(); return CardNext;
        case "greenfoot.GreenfootImage$2$handleEvent$lambda$_1_0": g_GreenfootImage$2$handleEvent$lambda$_1_0.$clinit(); return g_GreenfootImage$2$handleEvent$lambda$_1_0;
        case "greenfoot.gui.input.mouse.PriorityManager": ggim_PriorityManager.$clinit(); return ggim_PriorityManager;
        case "java.util.Set": ju_Set.$clinit(); return ju_Set;
        case "java.lang.Thread$SleepHandler$interrupted$lambda$_1_0": jl_Thread$SleepHandler$interrupted$lambda$_1_0.$clinit(); return jl_Thread$SleepHandler$interrupted$lambda$_1_0;
        case "java.io.FilterOutputStream": ji_FilterOutputStream.$clinit(); return ji_FilterOutputStream;
        case "ProjectileSpearEnemy": ProjectileSpearEnemy.$clinit(); return ProjectileSpearEnemy;
        case "java.lang.Exception": jl_Exception.$clinit(); return jl_Exception;
        case "greenfoot.ActorVisitor": g_ActorVisitor.$clinit(); return g_ActorVisitor;
        case "org.teavm.classlib.impl.reflection.ClassList": otcir_ClassList.$clinit(); return otcir_ClassList;
        case "Card": Card.$clinit(); return Card;
        case "SpellEnemyPoison": SpellEnemyPoison.$clinit(); return SpellEnemyPoison;
        case "TroopAllyArcher": TroopAllyArcher.$clinit(); return TroopAllyArcher;
        case "org.teavm.classlib.ResourceSource": otc_ResourceSource.$clinit(); return otc_ResourceSource;
        case "SpellAllyPoison": SpellAllyPoison.$clinit(); return SpellAllyPoison;
        case "java.lang.Object$NotifyListener": jl_Object$NotifyListener.$clinit(); return jl_Object$NotifyListener;
        case "java.util.Dictionary": ju_Dictionary.$clinit(); return ju_Dictionary;
        case "java.lang.reflect.AnnotatedElement": jlr_AnnotatedElement.$clinit(); return jlr_AnnotatedElement;
        case "java.lang.Throwable": jl_Throwable.$clinit(); return jl_Throwable;
        case "TroopAllyKnight": TroopAllyKnight.$clinit(); return TroopAllyKnight;
        case "greenfoot.gui.input.mouse.MouseEventData": ggim_MouseEventData.$clinit(); return ggim_MouseEventData;
        case "java.util.HashMap$1": ju_HashMap$1.$clinit(); return ju_HashMap$1;
        case "TroopAllyGhostCannon": TroopAllyGhostCannon.$clinit(); return TroopAllyGhostCannon;
        case "org.teavm.jso.JSObject": otj_JSObject.$clinit(); return otj_JSObject;
        case "TroopEnemyGolemite": TroopEnemyGolemite.$clinit(); return TroopEnemyGolemite;
        case "java.lang.Double": jl_Double.$clinit(); return jl_Double;
        case "greenfoot.ActorSet$ListNode": g_ActorSet$ListNode.$clinit(); return g_ActorSet$ListNode;
        case "TowerEnemyBuilding": TowerEnemyBuilding.$clinit(); return TowerEnemyBuilding;
        case "ProjectileKingEnemy": ProjectileKingEnemy.$clinit(); return ProjectileKingEnemy;
        case "greenfoot.World": g_World.$clinit(); return g_World;
        case "TowerUpPrincess": TowerUpPrincess.$clinit(); return TowerUpPrincess;
        case "greenfoot.event.SimulationEvent": ge_SimulationEvent.$clinit(); return ge_SimulationEvent;
        case "java.util.ArrayList": ju_ArrayList.$clinit(); return ju_ArrayList;
        case "java.util.RandomAccess": ju_RandomAccess.$clinit(); return ju_RandomAccess;
        case "java.lang.IllegalMonitorStateException": jl_IllegalMonitorStateException.$clinit(); return jl_IllegalMonitorStateException;
        case "TroopEnemy": TroopEnemy.$clinit(); return TroopEnemy;
        case "java.util.LinkedList$SequentialListIterator": ju_LinkedList$SequentialListIterator.$clinit(); return ju_LinkedList$SequentialListIterator;
        case "greenfoot.j2js.KeyboardManager": gj_KeyboardManager.$clinit(); return gj_KeyboardManager;
        case "CardFireball": CardFireball.$clinit(); return CardFireball;
        case "TowerAlly": TowerAlly.$clinit(); return TowerAlly;
        case "java.lang.String": jl_String.$clinit(); return jl_String;
        case "java.lang.Number": jl_Number.$clinit(); return jl_Number;
        case "greenfoot.j2js.Client$2": gj_Client$2.$clinit(); return gj_Client$2;
        case "ZoneTroopsOverlay": ZoneTroopsOverlay.$clinit(); return ZoneTroopsOverlay;
        case "greenfoot.j2js.Client$1": gj_Client$1.$clinit(); return gj_Client$1;
        case "greenfoot.j2js.Client$4": gj_Client$4.$clinit(); return gj_Client$4;
        case "CardGolem": CardGolem.$clinit(); return CardGolem;
        case "greenfoot.j2js.Client$3": gj_Client$3.$clinit(); return gj_Client$3;
        case "java.lang.NegativeArraySizeException": jl_NegativeArraySizeException.$clinit(); return jl_NegativeArraySizeException;
        case "greenfoot.TreeActorSet$TasIterator": g_TreeActorSet$TasIterator.$clinit(); return g_TreeActorSet$TasIterator;
        case "java.lang.UnsupportedOperationException": jl_UnsupportedOperationException.$clinit(); return jl_UnsupportedOperationException;
        case "org.teavm.jso.dom.events.MouseEventTarget": otjde_MouseEventTarget.$clinit(); return otjde_MouseEventTarget;
        case "java.util.Map$Entry": ju_Map$Entry.$clinit(); return ju_Map$Entry;
        case "SpellAllyAir": SpellAllyAir.$clinit(); return SpellAllyAir;
        case "java.util.Properties": ju_Properties.$clinit(); return ju_Properties;
        case "TroopAllyGhostPekkaMini": TroopAllyGhostPekkaMini.$clinit(); return TroopAllyGhostPekkaMini;
        case "TroopAllyGhostFireball": TroopAllyGhostFireball.$clinit(); return TroopAllyGhostFireball;
        case "TroopAllyGhostGolem": TroopAllyGhostGolem.$clinit(); return TroopAllyGhostGolem;
        case "java.lang.NumberFormatException": jl_NumberFormatException.$clinit(); return jl_NumberFormatException;
        case "java.lang.RuntimeException": jl_RuntimeException.$clinit(); return jl_RuntimeException;
        case "greenfoot.collision.NeighbourCollisionQuery": gc_NeighbourCollisionQuery.$clinit(); return gc_NeighbourCollisionQuery;
        case "Projectile": Projectile.$clinit(); return Projectile;
        case "CardChoice": CardChoice.$clinit(); return CardChoice;
        case "ProjectileFireballAlly": ProjectileFireballAlly.$clinit(); return ProjectileFireballAlly;
        case "CardDragonBaby": CardDragonBaby.$clinit(); return CardDragonBaby;
        case "greenfoot.core.WorldHandler": gc_WorldHandler.$clinit(); return gc_WorldHandler;
        case "TowerUpKing": TowerUpKing.$clinit(); return TowerUpKing;
        case "TowerEnemyTower": TowerEnemyTower.$clinit(); return TowerEnemyTower;
        case "org.teavm.jso.dom.events.KeyboardEventTarget": otjde_KeyboardEventTarget.$clinit(); return otjde_KeyboardEventTarget;
        case "CardCannon": CardCannon.$clinit(); return CardCannon;
        case "java.lang.Comparable": jl_Comparable.$clinit(); return jl_Comparable;
        case "java.lang.ClassNotFoundException": jl_ClassNotFoundException.$clinit(); return jl_ClassNotFoundException;
        case "greenfoot.j2js.MouseManager$1$handleEvent$lambda$_1_0": gj_MouseManager$1$handleEvent$lambda$_1_0.$clinit(); return gj_MouseManager$1$handleEvent$lambda$_1_0;
        case "java.lang.IllegalStateException": jl_IllegalStateException.$clinit(); return jl_IllegalStateException;
        case "TroopAllyGhostSkeleton": TroopAllyGhostSkeleton.$clinit(); return TroopAllyGhostSkeleton;
        case "greenfoot.event.WorldEvent": ge_WorldEvent.$clinit(); return ge_WorldEvent;
        case "TroopAllyGolem": TroopAllyGolem.$clinit(); return TroopAllyGolem;
        case "java.net.URL": jn_URL.$clinit(); return jn_URL;
        case "java.util.HashMap$AbstractMapIterator": ju_HashMap$AbstractMapIterator.$clinit(); return ju_HashMap$AbstractMapIterator;
        case "TroopEnemyDragonBaby": TroopEnemyDragonBaby.$clinit(); return TroopEnemyDragonBaby;
        case "java.util.AbstractList": ju_AbstractList.$clinit(); return ju_AbstractList;
        case "java.lang.AutoCloseable": jl_AutoCloseable.$clinit(); return jl_AutoCloseable;
        case "java.lang.NullPointerException": jl_NullPointerException.$clinit(); return jl_NullPointerException;
        case "SpellEnemyGround": SpellEnemyGround.$clinit(); return SpellEnemyGround;
        case "TroopAllyGhostKnight": TroopAllyGhostKnight.$clinit(); return TroopAllyGhostKnight;
        case "org.teavm.platform.plugin.AsyncCallbackWrapper": otpp_AsyncCallbackWrapper.$clinit(); return otpp_AsyncCallbackWrapper;
        case "org.teavm.runtime.EventQueue$Event": otr_EventQueue$Event.$clinit(); return otr_EventQueue$Event;
        case "MenuScreenMainLogo": MenuScreenMainLogo.$clinit(); return MenuScreenMainLogo;
        case "java.lang.Object$Monitor": jl_Object$Monitor.$clinit(); return jl_Object$Monitor;
        case "java.lang.ThreadInterruptHandler": jl_ThreadInterruptHandler.$clinit(); return jl_ThreadInterruptHandler;
        case "greenfoot.collision.CollisionQuery": gc_CollisionQuery.$clinit(); return gc_CollisionQuery;
        case "java.lang.Math": jl_Math.$clinit(); return jl_Math;
        case "java.util.HashMap$HashMapEntrySet": ju_HashMap$HashMapEntrySet.$clinit(); return ju_HashMap$HashMapEntrySet;
        case "greenfoot.ActorSet": g_ActorSet.$clinit(); return g_ActorSet;
        case "greenfoot.WorldVisitor": g_WorldVisitor.$clinit(); return g_WorldVisitor;
        case "greenfoot.j2js.MouseManager$1": gj_MouseManager$1.$clinit(); return gj_MouseManager$1;
        case "org.teavm.jso.impl.JSWrapper$Helper$FinalizationRegistryConsumer": otji_JSWrapper$Helper$FinalizationRegistryConsumer.$clinit(); return otji_JSWrapper$Helper$FinalizationRegistryConsumer;
        case "ProjectileFireballEnemy": ProjectileFireballEnemy.$clinit(); return ProjectileFireballEnemy;
        case "greenfoot.collision.CollisionChecker": gc_CollisionChecker.$clinit(); return gc_CollisionChecker;
        case "java.lang.Cloneable": jl_Cloneable.$clinit(); return jl_Cloneable;
        case "greenfoot.event.WorldListener": ge_WorldListener.$clinit(); return ge_WorldListener;
        case "DeckMenuWorld": DeckMenuWorld.$clinit(); return DeckMenuWorld;
        case "java.util.AbstractSequentialList": ju_AbstractSequentialList.$clinit(); return ju_AbstractSequentialList;
        case "java.util.List": ju_List.$clinit(); return ju_List;
        case "TowerDownPrincess": TowerDownPrincess.$clinit(); return TowerDownPrincess;
        case "greenfoot.j2js.JsActorDelegate": gj_JsActorDelegate.$clinit(); return gj_JsActorDelegate;
        case "java.lang.Object$NotifyListenerImpl$onTimer$lambda$_2_0": jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0.$clinit(); return jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0;
        case "greenfoot.TreeActorSet": g_TreeActorSet.$clinit(); return g_TreeActorSet;
        case "java.lang.reflect.Type": jlr_Type.$clinit(); return jlr_Type;
        case "greenfoot.core.RepaintHandler": gc_RepaintHandler.$clinit(); return gc_RepaintHandler;
        case "greenfoot.platforms.SimulationDelegate": gp_SimulationDelegate.$clinit(); return gp_SimulationDelegate;
        case "ProjectileTowerAlly": ProjectileTowerAlly.$clinit(); return ProjectileTowerAlly;
        case "org.teavm.jso.dom.events.EventTarget": otjde_EventTarget.$clinit(); return otjde_EventTarget;
        case "SpellAlly": SpellAlly.$clinit(); return SpellAlly;
        case "org.teavm.jso.dom.events.EventListener": otjde_EventListener.$clinit(); return otjde_EventListener;
        case "java.util.AbstractSet": ju_AbstractSet.$clinit(); return ju_AbstractSet;
        case "java.util.HashMap": ju_HashMap.$clinit(); return ju_HashMap;
        case "greenfoot.GreenfootImage$1$handleEvent$lambda$_1_0": g_GreenfootImage$1$handleEvent$lambda$_1_0.$clinit(); return g_GreenfootImage$1$handleEvent$lambda$_1_0;
        case "ProjectileArrowEnemy": ProjectileArrowEnemy.$clinit(); return ProjectileArrowEnemy;
        case "TroopAllyGhostGiant": TroopAllyGhostGiant.$clinit(); return TroopAllyGhostGiant;
        case "java.util.Deque": ju_Deque.$clinit(); return ju_Deque;
        case "java.lang.Thread$start$lambda$_4_0": jl_Thread$start$lambda$_4_0.$clinit(); return jl_Thread$start$lambda$_4_0;
        case "java.lang.Iterable": jl_Iterable.$clinit(); return jl_Iterable;
        case "Spell": Spell.$clinit(); return Spell;
        case "TroopEnemyAir": TroopEnemyAir.$clinit(); return TroopEnemyAir;
        case "CardSkeleton": CardSkeleton.$clinit(); return CardSkeleton;
        case "org.teavm.classlib.impl.unicode.UnicodeHelper$Range": otciu_UnicodeHelper$Range.$clinit(); return otciu_UnicodeHelper$Range;
        case "greenfoot.MouseInfo": g_MouseInfo.$clinit(); return g_MouseInfo;
        case "org.teavm.classlib.impl.text.DoubleAnalyzer": otcit_DoubleAnalyzer.$clinit(); return otcit_DoubleAnalyzer;
        case "java.util.Hashtable": ju_Hashtable.$clinit(); return ju_Hashtable;
        case "greenfoot.j2js.Client": gj_Client.$clinit(); return gj_Client;
        case "java.io.OutputStream": ji_OutputStream.$clinit(); return ji_OutputStream;
        case "org.teavm.jso.core.JSWeakRef": otjc_JSWeakRef.$clinit(); return otjc_JSWeakRef;
        case "TroopAllyGhost": TroopAllyGhost.$clinit(); return TroopAllyGhost;
        case "greenfoot.event.SimulationListener": ge_SimulationListener.$clinit(); return ge_SimulationListener;
        case "org.teavm.classlib.impl.CharFlow": otci_CharFlow.$clinit(); return otci_CharFlow;
        case "java.util.Iterator": ju_Iterator.$clinit(); return ju_Iterator;
        case "greenfoot.core.TextLabel": gc_TextLabel.$clinit(); return gc_TextLabel;
        case "Troop": Troop.$clinit(); return Troop;
        case "greenfoot.j2js.MouseManager$handleEvent$lambda$_10_0": gj_MouseManager$handleEvent$lambda$_10_0.$clinit(); return gj_MouseManager$handleEvent$lambda$_10_0;
        case "java.lang.IllegalArgumentException": jl_IllegalArgumentException.$clinit(); return jl_IllegalArgumentException;
        case "TroopAllyGround": TroopAllyGround.$clinit(); return TroopAllyGround;
        case "org.teavm.jso.dom.xml.Node": otjdx_Node.$clinit(); return otjdx_Node;
        case "org.teavm.jso.impl.JSWrapper$Helper$<clinit>$lambda$_3_1": otji_JSWrapper$Helper$_clinit_$lambda$_3_1.$clinit(); return otji_JSWrapper$Helper$_clinit_$lambda$_3_1;
        case "org.teavm.classlib.impl.text.FloatAnalyzer$Result": otcit_FloatAnalyzer$Result.$clinit(); return otcit_FloatAnalyzer$Result;
        case "org.teavm.jso.impl.JSWrapper$Helper$<clinit>$lambda$_3_0": otji_JSWrapper$Helper$_clinit_$lambda$_3_0.$clinit(); return otji_JSWrapper$Helper$_clinit_$lambda$_3_0;
        case "java.lang.InterruptedException": jl_InterruptedException.$clinit(); return jl_InterruptedException;
        case "ZoneTroopsPlace": ZoneTroopsPlace.$clinit(); return ZoneTroopsPlace;
        case "java.io.Closeable": ji_Closeable.$clinit(); return ji_Closeable;
        case "java.util.HashMap$EntryIterator": ju_HashMap$EntryIterator.$clinit(); return ju_HashMap$EntryIterator;
        case "greenfoot.collision.ibsp.BSPNode": gci_BSPNode.$clinit(); return gci_BSPNode;
        case "java.io.InputStream": ji_InputStream.$clinit(); return ji_InputStream;
        default: return null;
    }
},
otp_Platform_startThread = var$1 => {
    setTimeout(() => {
        $rt_threadStarter(otp_Platform_launchThread)(var$1);
    }, 0);
},
otp_Platform_launchThread = var$1 => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        var$1.$run();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, $ptr);
},
otp_Platform_postpone = $runnable => {
    otp_Platform_schedule($runnable, 0);
},
otp_Platform_schedule = (var$1, var$2) => {
    setTimeout(() => {
        otp_Platform_launchThread(var$1);
    }, var$2);
},
otp_Platform_killSchedule = var$1 => {
    clearTimeout(var$1);
},
otp_Platform_createQueue = () => {
    return otp_Platform_createQueueJs$js_body$_29();
},
otp_Platform_isPrimitive = $cls => {
    return $cls.$meta.primitive ? 1 : 0;
},
otp_Platform_getArrayItem = $cls => {
    return $cls.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
},
otp_Platform_createQueueJs$js_body$_29 = () => {
    return [];
},
jnc_Charset = $rt_classWithoutFields(),
gp_ActorDelegate = $rt_classWithoutFields(0),
ProjectileSpearAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileSpearAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 3;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileSpearAlly__init_0 = var_0 => {
    let var_1 = new ProjectileSpearAlly();
    ProjectileSpearAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileSpearAlly_act = $this => {
    ProjectileAlly_act($this);
},
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_add = ($this, $e) => {
    $this.$add1($this.$size(), $e);
    return 1;
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_AbstractList_indexOf = ($this, $o) => {
    let $sz, $i;
    $sz = $this.$size();
    $i = 0;
    while (true) {
        if ($i >= $sz)
            return (-1);
        if (ju_Objects_equals($o, $this.$get($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
ju_AbstractList_hashCode = $this => {
    let $hashCode, $iter, $elem;
    $hashCode = 1;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        $elem = $iter.$next();
        $hashCode = (31 * $hashCode | 0) + ju_Objects_hashCode($elem) | 0;
    }
    return $hashCode;
},
ju_AbstractList_equals = ($this, $other) => {
    let $list, $i;
    if (!$rt_isInstance($other, ju_List))
        return 0;
    $list = $other;
    if ($this.$size() != $list.$size())
        return 0;
    $i = 0;
    while ($i < $list.$size()) {
        if (!ju_Objects_equals($this.$get($i), $list.$get($i)))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
},
ju_AbstractSequentialList = $rt_classWithoutFields(ju_AbstractList),
ju_AbstractSequentialList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_AbstractSequentialList_get = ($this, $index) => {
    let $iter;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $iter = $this.$listIterator($index);
    return $iter.$next();
},
ju_AbstractSequentialList_add = ($this, $index, $element) => {
    let $iter;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $iter = $this.$listIterator($index);
    $iter.$add2($element);
},
ju_AbstractSequentialList_iterator = $this => {
    return $this.$listIterator0();
},
ju_Deque = $rt_classWithoutFields(0);
function ju_LinkedList() {
    let a = this; ju_AbstractSequentialList.call(a);
    a.$firstEntry = null;
    a.$lastEntry = null;
    a.$size0 = 0;
}
let ju_LinkedList__init_0 = $this => {
    ju_AbstractSequentialList__init_($this);
},
ju_LinkedList__init_ = () => {
    let var_0 = new ju_LinkedList();
    ju_LinkedList__init_0(var_0);
    return var_0;
},
ju_LinkedList_size = $this => {
    return $this.$size0;
},
ju_LinkedList_clear = $this => {
    $this.$firstEntry = null;
    $this.$lastEntry = null;
    $this.$size0 = 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_LinkedList_listIterator = $this => {
    return ju_LinkedList$SequentialListIterator__init_($this, $this.$firstEntry, null, 0);
},
ju_LinkedList_listIterator0 = ($this, $index) => {
    let $next, $i, $prev;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($index <= ($this.$size0 / 2 | 0)) {
        $next = $this.$firstEntry;
        $i = 0;
        while ($i < $index) {
            $next = $next.$next2;
            $i = $i + 1 | 0;
        }
        return ju_LinkedList$SequentialListIterator__init_($this, $next, $next === null ? null : $next.$previous, $index);
    }
    if ($index > $this.$size0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $prev = $this.$lastEntry;
    $i = $index;
    while ($i < $this.$size0) {
        $prev = $prev.$previous;
        $i = $i + 1 | 0;
    }
    return ju_LinkedList$SequentialListIterator__init_($this, $prev === null ? null : $prev.$next2, $prev, $index);
},
ju_LinkedList_remove = $this => {
    if (!$this.$isEmpty())
        return $this.$poll();
    $rt_throw(ju_NoSuchElementException__init_());
},
ju_LinkedList_poll = $this => {
    let $entry;
    if ($this.$firstEntry === null)
        return null;
    $entry = $this.$firstEntry;
    $this.$firstEntry = $this.$firstEntry.$next2;
    if ($this.$firstEntry === null)
        $this.$lastEntry = null;
    else
        $this.$firstEntry.$previous = null;
    $this.$size0 = $this.$size0 - 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $entry.$item;
},
ju_LinkedList_removeFirst = $this => {
    return $this.$remove4();
},
ju_LinkedList_removeLast = $this => {
    if (!$this.$isEmpty())
        return $this.$pollLast();
    $rt_throw(ju_NoSuchElementException__init_());
},
ju_LinkedList_pollLast = $this => {
    let $entry;
    if ($this.$lastEntry === null)
        return null;
    $entry = $this.$lastEntry;
    $this.$lastEntry = $this.$lastEntry.$previous;
    if ($this.$lastEntry === null)
        $this.$firstEntry = null;
    else
        $this.$lastEntry.$next2 = null;
    $this.$size0 = $this.$size0 - 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $entry.$item;
},
ju_LinkedList_removeEntry = ($this, $entry) => {
    if ($entry.$previous === null)
        $this.$firstEntry = $entry.$next2;
    else
        $entry.$previous.$next2 = $entry.$next2;
    if ($entry.$next2 === null)
        $this.$lastEntry = $entry.$previous;
    else
        $entry.$next2.$previous = $entry.$previous;
    $this.$size0 = $this.$size0 - 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
};
function gs_SoundFactory$1$handleEvent$lambda$_1_0() {
    jl_Object.call(this);
    this.$_011 = null;
}
let gs_SoundFactory$1$handleEvent$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_011 = var$1;
},
gs_SoundFactory$1$handleEvent$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new gs_SoundFactory$1$handleEvent$lambda$_1_0();
    gs_SoundFactory$1$handleEvent$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
gs_SoundFactory$1$handleEvent$lambda$_1_0_run = var$0 => {
    gs_SoundFactory$1_lambda$handleEvent$0(var$0.$_011);
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_ = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_0(var_0);
    return var_0;
},
otcic_JSStderrPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStderrPrintStream__init_ = $this => {
    otcic_JsConsolePrintStream__init_($this);
},
otcic_JSStderrPrintStream__init_0 = () => {
    let var_0 = new otcic_JSStderrPrintStream();
    otcic_JSStderrPrintStream__init_(var_0);
    return var_0;
},
otcic_JSStderrPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(37);
    $rt_putStderr($rt_ustr($s));
},
TroopAllyPekkaMini = $rt_classWithoutFields(TroopAllyGround),
TroopAllyPekkaMini__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 80;
        var$2 = 30;
        var$3 = 30;
        var$4 = 1;
        var$5 = 1;
        var$6 = 58;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 19;
        $this.$troopName = $rt_s(15);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyPekkaMini__init_0 = () => {
    let var_0 = new TroopAllyPekkaMini();
    TroopAllyPekkaMini__init_(var_0);
    return var_0;
},
TroopAllyPekkaMini_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
oti_AsyncCallback = $rt_classWithoutFields(0);
function g_GreenfootImage() {
    let a = this; jl_Object.call(a);
    a.$imageFileName = null;
    a.$image = null;
    a.$g2d = null;
    a.$currentColor = null;
    a.$currentFont = null;
    a.$copyOnWrite = 0;
    a.$transparency = 0;
}
let g_GreenfootImage_DEFAULT_FOREGROUND = null,
g_GreenfootImage_$callClinit = () => {
    g_GreenfootImage_$callClinit = $rt_eraseClinit(g_GreenfootImage);
    g_GreenfootImage__clinit_();
},
g_GreenfootImage__init_ = ($this, $filename) => {
    let $gImage, $ile, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$ile = $thread.pop();$gImage = $thread.pop();$filename = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        g_GreenfootImage_$callClinit();
        jl_Object__init_($this);
        $this.$currentColor = g_GreenfootImage_DEFAULT_FOREGROUND;
        $this.$copyOnWrite = 0;
        $this.$transparency = 255;
        $gImage = gu_GreenfootUtil_getCachedImage($filename);
        if ($gImage !== null) {
            $this.$createClone($gImage);
            if (gu_GreenfootUtil_addCachedImage($filename, g_GreenfootImage__init_1($this)))
                $this.$copyOnWrite = 1;
            return;
        }
        try {
            $ptr = 1;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_IllegalArgumentException) {
                $ile = $$je;
            } else {
                throw $$e;
            }
        }
        gu_GreenfootUtil_addCachedImage($filename, null);
        $rt_throw($ile);
    case 1:
        a: {
            try {
                g_GreenfootImage_loadFile($this, $filename);
                if ($rt_suspending()) {
                    break main;
                }
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_IllegalArgumentException) {
                    $ile = $$je;
                } else {
                    throw $$e;
                }
            }
            gu_GreenfootUtil_addCachedImage($filename, null);
            $rt_throw($ile);
        }
        if (gu_GreenfootUtil_addCachedImage($filename, g_GreenfootImage__init_1($this)))
            $this.$copyOnWrite = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $filename, $gImage, $ile, $ptr);
},
g_GreenfootImage__init_6 = var_0 => {
    let var_1 = new g_GreenfootImage();
    g_GreenfootImage__init_(var_1, var_0);
    return var_1;
},
g_GreenfootImage__init_4 = ($this, $width, $height) => {
    let var$3, var$4, var$5;
    g_GreenfootImage_$callClinit();
    jl_Object__init_($this);
    $this.$currentColor = g_GreenfootImage_DEFAULT_FOREGROUND;
    $this.$copyOnWrite = 0;
    $this.$transparency = 255;
    $this.$image = (otjdh_HTMLDocument_current()).createElement("canvas");
    var$3 = $this.$image;
    var$4 = $width;
    var$3.width = var$4;
    var$5 = $this.$image;
    var$3 = $height;
    var$5.height = var$3;
    g_GreenfootImage_setupRenderContext($this);
},
g_GreenfootImage__init_0 = (var_0, var_1) => {
    let var_2 = new g_GreenfootImage();
    g_GreenfootImage__init_4(var_2, var_0, var_1);
    return var_2;
},
g_GreenfootImage__init_3 = ($this, $image) => {
    let var$2;
    g_GreenfootImage_$callClinit();
    jl_Object__init_($this);
    $this.$currentColor = g_GreenfootImage_DEFAULT_FOREGROUND;
    $this.$copyOnWrite = 0;
    $this.$transparency = 255;
    if ($image.$copyOnWrite) {
        $this.$image = $image.$image;
        $this.$copyOnWrite = 1;
    } else {
        var$2 = (otjdh_HTMLDocument_current()).createElement("canvas");
        var$2.width = $image.$getWidth();
        var$2.height = $image.$getHeight();
        $this.$image = var$2;
        $this.$g2d = var$2.getContext("2d");
        if (var$2.width > 0 && var$2.height > 0)
            $this.$g2d.drawImage($image.$image, 0.0, 0.0);
        $this.$g2d.translate(0.5, 0.5);
    }
    g_GreenfootImage_copyStates($image, $this);
},
g_GreenfootImage__init_1 = var_0 => {
    let var_1 = new g_GreenfootImage();
    g_GreenfootImage__init_3(var_1, var_0);
    return var_1;
},
g_GreenfootImage_setupRenderContext = $this => {
    $this.$g2d = $this.$image.getContext("2d");
    $this.$g2d.translate(0.5, 0.5);
},
g_GreenfootImage_getRenderContext = ($this, $image) => {
    let var$2;
    var$2 = $image.getContext("2d");
    var$2.translate(0.5, 0.5);
    return var$2;
},
g_GreenfootImage_toJsColor = ($this, $c) => {
    return ((((((((((jl_StringBuilder__init_()).$append8($rt_s(69))).$append1($c.$getRed())).$append8($rt_s(70))).$append1($c.$getGreen())).$append8($rt_s(70))).$append1($c.$getBlue())).$append8($rt_s(70))).$append9($c.$getAlpha() / 255.0)).$append8($rt_s(71))).$toString();
},
g_GreenfootImage__init_2 = $this => {
    g_GreenfootImage_$callClinit();
    jl_Object__init_($this);
    $this.$currentColor = g_GreenfootImage_DEFAULT_FOREGROUND;
    $this.$copyOnWrite = 0;
    $this.$transparency = 255;
},
g_GreenfootImage__init_5 = () => {
    let var_0 = new g_GreenfootImage();
    g_GreenfootImage__init_2(var_0);
    return var_0;
},
g_GreenfootImage_getCopyOnWriteClone = $this => {
    let $clone;
    $clone = g_GreenfootImage__init_5();
    $clone.$copyOnWrite = 1;
    $clone.$image = $this.$image;
    $clone.$g2d = $this.$g2d;
    g_GreenfootImage_copyStates($this, $clone);
    return $clone;
},
g_GreenfootImage_createClone = ($this, $cachedImage) => {
    $this.$copyOnWrite = 1;
    $this.$image = $cachedImage.$image;
    $this.$g2d = $cachedImage.$g2d;
    g_GreenfootImage_copyStates($cachedImage, $this);
},
g_GreenfootImage_copyStates = ($src, $dst) => {
    g_GreenfootImage_$callClinit();
    $dst.$imageFileName = $src.$imageFileName;
    $dst.$currentColor = $src.$currentColor;
    $dst.$currentFont = $src.$currentFont;
    $dst.$transparency = $src.$transparency;
},
g_GreenfootImage_loadFile = ($this, $filename) => {
    let $document, $imgElement, var$4, $sync, $success, var$7, $url, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$url = $thread.pop();var$7 = $thread.pop();$success = $thread.pop();$sync = $thread.pop();var$4 = $thread.pop();$imgElement = $thread.pop();$document = $thread.pop();$filename = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($filename === null)
            $rt_throw(jl_NullPointerException__init_($rt_s(72)));
        $this.$imageFileName = $filename;
        $document = otjdh_HTMLDocument_current();
        $imgElement = $document.createElement("img");
        if (!$filename.$startsWith($rt_s(73)) && !$filename.$startsWith($rt_s(74))) {
            var$4 = (((jl_StringBuilder__init_()).$append8($rt_s(75))).$append8($filename)).$toString();
            $ptr = 2;
            continue main;
        }
        $imgElement.setAttribute("src", $rt_ustr($filename));
        $sync = jl_Object__init_0();
        $success = $rt_createBooleanArray(1);
        otjde_LoadEventTarget_listenLoad$static($imgElement, otji_JSWrapper_unwrap(g_GreenfootImage$1__init_($this, $sync, $success)));
        var$7 = g_GreenfootImage$2__init_($this, $sync, $success);
        $imgElement.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$7), "handleEvent"));
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($sync);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                try {
                    $ptr = 3;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_InterruptedException) {
                    } else {
                        throw $$e;
                    }
                }
                jl_Object_monitorExit($sync);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;

            }
            jl_Object_monitorExit($sync);
            $rt_throw(var$4);
        }
        if (!$success.data[0])
            $rt_throw(jl_IllegalArgumentException__init_());
        var$4 = $document.createElement("canvas");
        var$4.width = $imgElement.width;
        var$4.height = $imgElement.height;
        $this.$image = var$4;
        g_GreenfootImage_setupRenderContext($this);
        if ($imgElement.width > 0 && $imgElement.height > 0)
            $this.$g2d.drawImage($imgElement, (-0.5), (-0.5));
        return;
    case 2:
        $tmp = gj_Client_getCachedResourceURL(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $url = $tmp;
        if ($url === null) {
            $ptr = 4;
            continue main;
        }
        if ($url !== null)
            $filename = $url;
        $imgElement.setAttribute("src", $rt_ustr($filename));
        $sync = jl_Object__init_0();
        $success = $rt_createBooleanArray(1);
        otjde_LoadEventTarget_listenLoad$static($imgElement, otji_JSWrapper_unwrap(g_GreenfootImage$1__init_($this, $sync, $success)));
        var$7 = g_GreenfootImage$2__init_($this, $sync, $success);
        $imgElement.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$7), "handleEvent"));
        $ptr = 1;
        continue main;
    case 3:
        a: {
            try {
                b: {
                    try {
                        jl_Object_wait($sync);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                jl_Object_monitorExit($sync);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;

            }
            jl_Object_monitorExit($sync);
            $rt_throw(var$4);
        }
        if (!$success.data[0])
            $rt_throw(jl_IllegalArgumentException__init_());
        var$4 = $document.createElement("canvas");
        var$4.width = $imgElement.width;
        var$4.height = $imgElement.height;
        $this.$image = var$4;
        g_GreenfootImage_setupRenderContext($this);
        if ($imgElement.width > 0 && $imgElement.height > 0)
            $this.$g2d.drawImage($imgElement, (-0.5), (-0.5));
        return;
    case 4:
        $tmp = gj_Client_getCachedResourceURL($filename);
        if ($rt_suspending()) {
            break main;
        }
        $url = $tmp;
        if ($url !== null)
            $filename = $url;
        $imgElement.setAttribute("src", $rt_ustr($filename));
        $sync = jl_Object__init_0();
        $success = $rt_createBooleanArray(1);
        otjde_LoadEventTarget_listenLoad$static($imgElement, otji_JSWrapper_unwrap(g_GreenfootImage$1__init_($this, $sync, $success)));
        var$7 = g_GreenfootImage$2__init_($this, $sync, $success);
        $imgElement.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$7), "handleEvent"));
        $ptr = 1;
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $filename, $document, $imgElement, var$4, $sync, $success, var$7, $url, $ptr);
},
g_GreenfootImage_drawToCanvas = ($this, $g2d, $x, $y) => {
    if ($this.$image.width && $this.$image.height)
        $g2d.drawImage($this.$image, $x, $y);
},
g_GreenfootImage_getWidth = $this => {
    return $this.$image.width;
},
g_GreenfootImage_getHeight = $this => {
    return $this.$image.height;
},
g_GreenfootImage_scale = ($this, $width, $height) => {
    let $doc, var$4, var$5, var$6, var$7, var$8;
    if ($width == $this.$image.width && $height == $this.$image.height)
        return;
    $doc = otjdh_HTMLDocument_current();
    var$4 = $doc.createElement("canvas");
    var$5 = $width;
    var$4.width = var$5;
    var$6 = $height;
    var$4.height = var$6;
    var$6 = var$4.getContext("2d");
    var$5 = $this.$image;
    var$7 = $width;
    var$8 = $height;
    var$6.drawImage(var$5, 0.0, 0.0, var$7, var$8);
    var$6.translate(0.5, 0.5);
    $this.$image = var$4;
    $this.$g2d = var$6;
    $this.$copyOnWrite = 0;
},
g_GreenfootImage_fill = $this => {
    $this.$fillRect(0, 0, $this.$image.width + 1 | 0, $this.$image.height + 1 | 0);
},
g_GreenfootImage_drawImage = ($this, $image, $x, $y) => {
    if ($image.$getHeight() && $image.$getWidth()) {
        g_GreenfootImage_ensureWritableImage($this);
        $image.$drawToCanvas($this.$g2d, $x - 0.5, $y - 0.5);
    }
},
g_GreenfootImage_setColor = ($this, $color) => {
    $this.$currentColor = $color;
},
g_GreenfootImage_setTransparency = ($this, $t) => {
    if ($t >= 0 && $t <= 255) {
        $this.$transparency = $t;
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_1((((jl_StringBuilder__init_()).$append8($rt_s(76))).$append1($t)).$toString()));
},
g_GreenfootImage_getTransparency = $this => {
    return $this.$transparency;
},
g_GreenfootImage_fillRect = ($this, $x, $y, $width, $height) => {
    let var$5, var$6, var$7, var$8, var$9, var$10;
    g_GreenfootImage_ensureWritableImage($this);
    var$5 = $this.$g2d;
    var$6 = $rt_ustr(g_GreenfootImage_toJsColor($this, $this.$currentColor));
    var$5.fillStyle = var$6;
    var$6 = $this.$g2d;
    var$7 = $x - 0.5;
    var$8 = $y - 0.5;
    var$9 = $width;
    var$10 = $height;
    var$6.fillRect(var$7, var$8, var$9, var$10);
},
g_GreenfootImage_ensureWritableImage = $this => {
    let var$1, $g;
    if ($this.$copyOnWrite) {
        var$1 = (otjdh_HTMLDocument_current()).createElement("canvas");
        var$1.width = $this.$image.width;
        var$1.height = $this.$image.height;
        $g = g_GreenfootImage_getRenderContext($this, var$1);
        $g.drawImage($this.$image, 0.0, 0.0);
        $this.$image = var$1;
        $this.$g2d = $g;
        $this.$copyOnWrite = 0;
    }
},
g_GreenfootImage__clinit_ = () => {
    g_Color_$callClinit();
    g_GreenfootImage_DEFAULT_FOREGROUND = g_Color_BLACK;
};
function ju_AbstractMap() {
    jl_Object.call(this);
    this.$cachedKeySet = null;
}
let ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
},
ProjectileKingAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileKingAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 25;
        var$3 = 4;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileKingAlly__init_0 = var_0 => {
    let var_1 = new ProjectileKingAlly();
    ProjectileKingAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileKingAlly_act = $this => {
    ProjectileAlly_act($this);
},
otcir_MethodInfo = $rt_classWithoutFields(),
otcir_MethodInfo__init_ = $this => {
    jl_Object__init_($this);
},
otcir_MethodInfo__init_0 = () => {
    let var_0 = new otcir_MethodInfo();
    otcir_MethodInfo__init_(var_0);
    return var_0;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class__init_0 = ($this, $platformClass) => {
    let var$2;
    jl_Object__init_($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init_ = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_0(var_1, var_0);
    return var_1;
},
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init_($cls);
    return $result;
},
jl_Class_getPlatformClass = $this => {
    return $this.$platformClass;
},
jl_Class_isInstance = ($this, $obj) => {
    return otp_Platform_isInstance($obj, $this.$platformClass);
},
jl_Class_isAssignableFrom = ($this, $obj) => {
    return otp_Platform_isAssignable(jl_Class_getPlatformClass($obj), $this.$platformClass);
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
jl_Class_isPrimitive = $this => {
    return otp_Platform_isPrimitive($this.$platformClass);
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
},
jl_Class_getSuperclass = $this => {
    return jl_Class_getClass($this.$platformClass.$meta.superclass);
},
jl_Class_forName = $name => {
    let $cls, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$cls = $thread.pop();$name = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $cls = otp_Platform_lookupClass($name.$toString());
        if ($cls !== null)
            return jl_Class_getClass($cls);
        $rt_throw(jl_ClassNotFoundException__init_0());
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($name, $cls, $ptr);
},
jl_Class_newInstance = $this => {
    let var$1, $instance, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$instance = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = $this.$platformClass;
        $ptr = 1;
    case 1:
        $tmp = otp_Platform_newInstance(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $instance = $tmp;
        if ($instance !== null)
            return $instance;
        $rt_throw(jl_InstantiationException__init_0());
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $instance, $ptr);
};
function gc_ImageCache$CachedImageRef() {
    let a = this; jl_Object.call(a);
    a.$imgName = null;
    a.$image7 = null;
    a.$this$08 = null;
}
let gc_ImageCache$CachedImageRef__init_ = ($this, var$1, $imgName, $image) => {
    $this.$this$08 = var$1;
    jl_Object__init_($this);
    $this.$imgName = $imgName;
    $this.$image7 = $image;
},
gc_ImageCache$CachedImageRef__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gc_ImageCache$CachedImageRef();
    gc_ImageCache$CachedImageRef__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gc_ImageCache$CachedImageRef_get = $this => {
    return $this.$image7;
},
TroopAllyGoblinSpear = $rt_classWithoutFields(TroopAllyGround),
TroopAllyGoblinSpear__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 20;
        var$2 = 3;
        var$3 = 75;
        var$4 = 2;
        var$5 = 1;
        var$6 = 41;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 14;
        $this.$troopName = $rt_s(42);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyGoblinSpear__init_0 = () => {
    let var_0 = new TroopAllyGoblinSpear();
    TroopAllyGoblinSpear__init_(var_0);
    return var_0;
},
TroopAllyGoblinSpear_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays__init_ = $this => {
    jl_Object__init_($this);
},
ju_Arrays__init_0 = () => {
    let var_0 = new ju_Arrays();
    ju_Arrays__init_(var_0);
    return var_0;
},
ju_Arrays_copyOf1 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createByteArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill0 = ($a, $val) => {
    ju_Arrays_fill($a, 0, $a.data.length, $val);
},
ju_Arrays_binarySearch = ($a, $key) => {
    return ju_Arrays_binarySearch0($a, 0, $a.data.length, $key);
},
ju_Arrays_binarySearch0 = ($a, $fromIndex, $toIndex, $key) => {
    let $u, var$6, $i, $e, var$9;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    $u = $toIndex - 1 | 0;
    while (true) {
        if ($fromIndex > $u)
            return ( -$fromIndex | 0) - 1 | 0;
        var$6 = $a.data;
        $i = ($fromIndex + $u | 0) / 2 | 0;
        $e = var$6[$i];
        var$9 = $rt_compare($e, $key);
        if (!var$9)
            break;
        if (var$9 <= 0)
            $fromIndex = $i + 1 | 0;
        else
            $u = $i - 1 | 0;
    }
    return $i;
},
gci_BSPNodeCache = $rt_classWithoutFields(),
gci_BSPNodeCache_cache = null,
gci_BSPNodeCache_tail = 0,
gci_BSPNodeCache_size = 0,
gci_BSPNodeCache_$callClinit = () => {
    gci_BSPNodeCache_$callClinit = $rt_eraseClinit(gci_BSPNodeCache);
    gci_BSPNodeCache__clinit_();
},
gci_BSPNodeCache__init_ = $this => {
    gci_BSPNodeCache_$callClinit();
    jl_Object__init_($this);
},
gci_BSPNodeCache__init_0 = () => {
    let var_0 = new gci_BSPNodeCache();
    gci_BSPNodeCache__init_(var_0);
    return var_0;
},
gci_BSPNodeCache_getBSPNode = () => {
    let $ppos, $node;
    gci_BSPNodeCache_$callClinit();
    if (!gci_BSPNodeCache_size)
        return gci_BSPNode__init_0(gci_Rect__init_(0, 0, 0, 0), 0, 0);
    $ppos = gci_BSPNodeCache_tail - gci_BSPNodeCache_size | 0;
    if ($ppos < 0)
        $ppos = $ppos + 1000 | 0;
    $node = gci_BSPNodeCache_cache.data[$ppos];
    gci_BSPNode_setParent($node, null);
    gci_BSPNodeCache_size = gci_BSPNodeCache_size - 1 | 0;
    return $node;
},
gci_BSPNodeCache_returnNode = $node => {
    let var$2, var$3;
    gci_BSPNodeCache_$callClinit();
    gci_BSPNode_blankNode($node);
    var$2 = gci_BSPNodeCache_cache.data;
    var$3 = gci_BSPNodeCache_tail;
    gci_BSPNodeCache_tail = var$3 + 1 | 0;
    var$2[var$3] = $node;
    if (gci_BSPNodeCache_tail == 1000)
        gci_BSPNodeCache_tail = 0;
    gci_BSPNodeCache_size = jl_Math_min(gci_BSPNodeCache_size + 1 | 0, 1000);
    if (gci_BSPNode_getLeft($node) === null && gci_BSPNode_getRight($node) === null)
        return;
    $rt_throw(jl_RuntimeException__init_1($rt_s(77)));
},
gci_BSPNodeCache__clinit_ = () => {
    gci_BSPNodeCache_cache = $rt_createArray(gci_BSPNode, 1000);
    gci_BSPNodeCache_tail = 0;
    gci_BSPNodeCache_size = 0;
};
function gj_MouseManager() {
    let a = this; jl_Object.call(a);
    a.$currentData = null;
    a.$futureData = null;
    a.$potentialNewDragData = null;
    a.$locator = null;
    a.$dragStartData = null;
    a.$isDragging = 0;
    a.$gotNewEvent = 0;
    a.$button1state = 0;
    a.$documentListener = null;
    a.$touchId = 0;
    a.$trackingTouch = 0;
}
let gj_MouseManager__init_ = ($this, $locator) => {
    jl_Object__init_($this);
    $this.$currentData = ggim_MouseEventData__init_();
    $this.$futureData = ggim_MouseEventData__init_();
    $this.$potentialNewDragData = ggim_MouseEventData__init_();
    $this.$dragStartData = ggim_MouseEventData__init_();
    $this.$button1state = 0;
    $this.$documentListener = otji_JSWrapper_unwrap(gj_MouseManager$1__init_0($this));
    $this.$trackingTouch = 0;
    $this.$locator = $locator;
},
gj_MouseManager__init_0 = var_0 => {
    let var_1 = new gj_MouseManager();
    gj_MouseManager__init_(var_1, var_0);
    return var_1;
},
gj_MouseManager_newActStarted = $this => {
    let $newData;
    jl_Object_monitorEnterSync($this);
    try {
        if (!$this.$gotNewEvent)
            $this.$currentData.$init2();
        else {
            $newData = ggim_MouseEventData__init_();
            $this.$currentData = $this.$futureData;
            $this.$futureData = $newData;
            $this.$potentialNewDragData = ggim_MouseEventData__init_();
            $this.$gotNewEvent = 0;
        }
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
gj_MouseManager_registerEventRecieved = $this => {
    $this.$gotNewEvent = 1;
},
gj_MouseManager_isMouseClicked = ($this, $obj) => {
    return $this.$currentData.$isMouseClicked($obj);
},
gj_MouseManager_getMouseInfo = $this => {
    return $this.$currentData.$getMouseInfo();
},
gj_MouseManager_handleEvent = ($this, $e) => {
    let $etype, var$3;
    $etype = $rt_str($e.type);
    $e.stopPropagation();
    $e.preventDefault();
    var$3 = jl_Thread__init_(gj_MouseManager$handleEvent$lambda$_10_0__init_0($this, $etype, $e));
    var$3.$start();
},
gj_MouseManager_handleTouchEvent = ($this, $e) => {
    let $etype, var$3;
    $etype = $rt_str($e.type);
    $e.stopPropagation();
    $e.preventDefault();
    var$3 = jl_Thread__init_(gj_MouseManager$handleTouchEvent$lambda$_11_0__init_0($this, $etype, $e));
    var$3.$start();
},
gj_MouseManager_findTouch = ($this, $list, $touchId) => {
    let $i, $touch;
    $i = 0;
    while (true) {
        $touch = $list.item($i);
        if ($touch === null)
            return null;
        if ($touch.identifier == $touchId)
            break;
        $i = $i + 1 | 0;
    }
    return $touch;
},
gj_MouseManager_mouseClicked = ($this, $x, $y, $button, $clickCount) => {
    let $actor, $mouseData, var$7, var$8, var$9, $$je;
    $actor = $this.$locator.$getTopMostActorAt($x, $y);
    jl_Object_monitorEnterSync($this);
    a: {
        try {
            $mouseData = $this.$futureData;
            if ($this.$futureData.$isMouseDragEnded(null))
                $mouseData = $this.$potentialNewDragData;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$7 = $$je;
            break a;

        }
        b: {
            try {
                if (ggim_PriorityManager_isHigherPriority($rt_s(78), $mouseData))
                    break b;
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$7 = $$je;
                break a;

            }
            return;
        }
        try {
            gj_MouseManager_registerEventRecieved($this);
            var$8 = $this.$locator.$getTranslatedX($x);
            var$9 = $this.$locator.$getTranslatedY($y);
            $mouseData.$mouseClicked0(var$8, var$9, $button, $clickCount, $actor);
            $this.$isDragging = 0;
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$7 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$7);
},
gj_MouseManager_mouseExited = $this => {
    let var$1, $$je;
    jl_Object_monitorEnterSync($this);
    a: {
        try {
            $this.$futureData.$mouseExited();
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$1 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$1);
},
gj_MouseManager_mousePressed = ($this, $px, $py, $button) => {
    let $actor, $mouseData, var$6, $x, $y, $$je;
    $actor = $this.$locator.$getTopMostActorAt($px, $py);
    jl_Object_monitorEnterSync($this);
    a: {
        try {
            $mouseData = $this.$futureData;
            if ($this.$futureData.$isMouseDragEnded(null))
                $mouseData = $this.$potentialNewDragData;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$6 = $$je;
            break a;

        }
        b: {
            try {
                $this.$dragStartData = ggim_MouseEventData__init_();
                $x = $this.$locator.$getTranslatedX($px);
                $y = $this.$locator.$getTranslatedY($py);
                $this.$dragStartData.$mousePressed($x, $y, $button, $actor);
                if (ggim_PriorityManager_isHigherPriority($rt_s(79), $mouseData))
                    break b;
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$6 = $$je;
                break a;

            }
            return;
        }
        try {
            gj_MouseManager_registerEventRecieved($this);
            $mouseData.$mousePressed($x, $y, $button, $actor);
            $this.$isDragging = 0;
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$6 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$6);
},
gj_MouseManager_mouseReleased = ($this, $px, $py, $button) => {
    let $clickActor, var$5, $x, $y, $actor, $$je;
    $clickActor = $this.$locator.$getTopMostActorAt($px, $py);
    jl_Object_monitorEnterSync($this);
    a: {
        b: {
            try {
                if (!$this.$isDragging)
                    break b;
                if ($this.$futureData.$isMouseDragEnded(null))
                    $this.$futureData = $this.$potentialNewDragData;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;
                break a;

            }
            c: {
                try {
                    if (ggim_PriorityManager_isHigherPriority($rt_s(80), $this.$futureData))
                        break c;
                    jl_Object_monitorExitSync($this);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$5 = $$je;
                    break a;

                }
                return;
            }
            try {
                gj_MouseManager_registerEventRecieved($this);
                $x = $this.$locator.$getTranslatedX($px);
                $y = $this.$locator.$getTranslatedY($py);
                $this.$futureData.$mouseClicked0($x, $y, $button, 1, $clickActor);
                $actor = $this.$dragStartData.$getActor();
                $this.$futureData.$mouseDragEnded($x, $y, $button, $actor);
                $this.$isDragging = 0;
                $this.$potentialNewDragData = ggim_MouseEventData__init_();
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;
                break a;

            }
        }
        try {
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$5 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$5);
},
gj_MouseManager_mouseDragged = ($this, $px, $py, $buttons) => {
    let var$4, $x, $y, $$je;
    jl_Object_monitorEnterSync($this);
    a: {
        b: {
            try {
                $this.$isDragging = 1;
                if (ggim_PriorityManager_isHigherPriority($rt_s(81), $this.$futureData))
                    break b;
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;
                break a;

            }
            return;
        }
        try {
            gj_MouseManager_registerEventRecieved($this);
            $x = $this.$locator.$getTranslatedX($px);
            $y = $this.$locator.$getTranslatedY($py);
            $this.$futureData.$mouseDragged($x, $y, $this.$dragStartData.$getButton(), $this.$dragStartData.$getActor());
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$4);
},
gj_MouseManager_mouseMoved = ($this, $px, $py) => {
    let $actor, var$4, $x, $y, $$je;
    $actor = $this.$locator.$getTopMostActorAt($px, $py);
    jl_Object_monitorEnterSync($this);
    a: {
        b: {
            try {
                if (ggim_PriorityManager_isHigherPriority($rt_s(82), $this.$futureData))
                    break b;
                jl_Object_monitorExitSync($this);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;
                break a;

            }
            return;
        }
        try {
            gj_MouseManager_registerEventRecieved($this);
            $x = $this.$locator.$getTranslatedX($px);
            $y = $this.$locator.$getTranslatedY($py);
            $this.$futureData.$mouseMoved($x, $y, 0, $actor);
            $this.$isDragging = 0;
            jl_Object_monitorExitSync($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($this);
    $rt_throw(var$4);
},
gj_MouseManager_handleEvent0 = ($this, var$1) => {
    $this.$handleEvent1(var$1);
},
gj_MouseManager_lambda$handleTouchEvent$1 = ($this, $etype, $e) => {
    let var$3, $touch;
    a: {
        var$3 = (-1);
        switch ($etype.$hashCode1()) {
            case -1578593149:
                if (!$etype.$equals($rt_s(83)))
                    break a;
                var$3 = 0;
                break a;
            case -819532484:
                if (!$etype.$equals($rt_s(84)))
                    break a;
                var$3 = 1;
                break a;
            case 364536720:
                if (!$etype.$equals($rt_s(85)))
                    break a;
                var$3 = 3;
                break a;
            case 2127979129:
                if (!$etype.$equals($rt_s(86)))
                    break a;
                var$3 = 2;
                break a;
            default:
        }
    }
    b: {
        c: {
            d: {
                switch (var$3) {
                    case 0:
                        break d;
                    case 1:
                    case 2:
                        break c;
                    case 3:
                        break;
                    default:
                        break b;
                }
                if (!$this.$trackingTouch)
                    break b;
                $touch = gj_MouseManager_findTouch($this, $e.changedTouches, $this.$touchId);
                if ($touch !== null)
                    gj_MouseManager_mouseDragged($this, $touch.clientX, $touch.clientY, 1);
                break b;
            }
            if ($this.$trackingTouch)
                break b;
            $touch = $e.changedTouches.item(0);
            $this.$touchId = $touch.identifier;
            gj_MouseManager_mousePressed($this, $touch.clientX, $touch.clientY, 1);
            $this.$button1state = 1;
            $this.$trackingTouch = 1;
            break b;
        }
        if ($this.$trackingTouch) {
            $touch = gj_MouseManager_findTouch($this, $e.changedTouches, $this.$touchId);
            if ($touch !== null) {
                gj_MouseManager_mouseReleased($this, $touch.clientX, $touch.clientY, 1);
                $this.$button1state = 0;
                if ($etype.$equals($rt_s(84)))
                    gj_MouseManager_mouseClicked($this, $touch.clientX, $touch.clientY, 1, 1);
                $this.$trackingTouch = 0;
            }
        }
    }
},
gj_MouseManager_lambda$handleEvent$0 = ($this, $etype, $e) => {
    let var$3, var$4, var$5;
    a: {
        var$3 = (-1);
        switch ($etype.$hashCode1()) {
            case -1844879718:
                if (!$etype.$equals($rt_s(87)))
                    break a;
                var$3 = 5;
                break a;
            case 94750088:
                if (!$etype.$equals($rt_s(78)))
                    break a;
                var$3 = 4;
                break a;
            case 586843847:
                if (!$etype.$equals($rt_s(79)))
                    break a;
                var$3 = 3;
                break a;
            case 587111926:
                if (!$etype.$equals($rt_s(82)))
                    break a;
                var$3 = 6;
                break a;
            case 1013180755:
                if (!$etype.$equals($rt_s(88)))
                    break a;
                var$3 = 0;
                break a;
            case 1019359538:
                if (!$etype.$equals($rt_s(89)))
                    break a;
                var$3 = 1;
                break a;
            case 1243067904:
                if (!$etype.$equals($rt_s(80)))
                    break a;
                var$3 = 2;
                break a;
            default:
        }
    }
    b: {
        c: {
            d: {
                switch (var$3) {
                    case 0:
                        break;
                    case 1:
                        gj_MouseManager_mouseExited($this);
                        break b;
                    case 2:
                        break c;
                    case 3:
                        break d;
                    case 4:
                        if ($e.button == 2)
                            break b;
                        gj_MouseManager_mouseClicked($this, $e.clientX, $e.clientY, ($e.button + 1 | 0) << 16 >> 16, 1);
                        break b;
                    case 5:
                        gj_MouseManager_mouseClicked($this, $e.clientX, $e.clientY, ($e.button + 1 | 0) << 16 >> 16, 2);
                        break b;
                    case 6:
                        if (!$this.$button1state) {
                            gj_MouseManager_mouseMoved($this, $e.clientX, $e.clientY);
                            break b;
                        }
                        gj_MouseManager_mouseDragged($this, $e.clientX, $e.clientY, 1);
                        break b;
                    default:
                        break b;
                }
                break b;
            }
            gj_MouseManager_mousePressed($this, $e.clientX, $e.clientY, ($e.button + 1 | 0) << 16 >> 16);
            if ($e.button)
                break b;
            var$4 = otjdh_HTMLDocument_current();
            var$5 = $this.$documentListener;
            var$4.addEventListener("mousemove", otji_JS_function(var$5, "handleEvent"));
            var$4 = otjdh_HTMLDocument_current();
            var$5 = $this.$documentListener;
            var$4.addEventListener("mouseup", otji_JS_function(var$5, "handleEvent"));
            $this.$button1state = 1;
            break b;
        }
        gj_MouseManager_mouseReleased($this, $e.clientX, $e.clientY, ($e.button + 1 | 0) << 16 >> 16);
        if (!$e.button) {
            var$4 = otjdh_HTMLDocument_current();
            var$5 = $this.$documentListener;
            var$4.removeEventListener("mousemove", otji_JS_function(var$5, "handleEvent"));
            var$4 = otjdh_HTMLDocument_current();
            var$5 = $this.$documentListener;
            var$4.removeEventListener("mouseup", otji_JS_function(var$5, "handleEvent"));
            $this.$button1state = 0;
        } else if ($e.button == 2)
            gj_MouseManager_mouseClicked($this, $e.clientX, $e.clientY, 3, 1);
    }
},
gj_MouseManager_access$000 = ($x0, $x1, $x2, $x3) => {
    gj_MouseManager_mouseDragged($x0, $x1, $x2, $x3);
},
gj_MouseManager_access$102 = ($x0, $x1) => {
    $x0.$button1state = $x1;
    return $x1;
},
gj_MouseManager_access$200 = ($x0, $x1, $x2, $x3) => {
    gj_MouseManager_mouseReleased($x0, $x1, $x2, $x3);
},
gj_MouseManager_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
TroopEnemyGoblinSpear = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyGoblinSpear__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 20;
        var$2 = 3;
        var$3 = 75;
        var$4 = 2;
        var$5 = 1;
        var$6 = 41;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 14;
        $this.$troopName = $rt_s(42);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyGoblinSpear__init_0 = () => {
    let var_0 = new TroopEnemyGoblinSpear();
    TroopEnemyGoblinSpear__init_(var_0);
    return var_0;
},
TroopEnemyGoblinSpear_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ggim_WorldLocator = $rt_classWithoutFields(0);
function gc_WorldHandler$1() {
    jl_Object.call(this);
    this.$this$09 = null;
}
let gc_WorldHandler$1__init_ = ($this, $this$0) => {
    $this.$this$09 = $this$0;
    jl_Object__init_($this);
},
gc_WorldHandler$1__init_0 = var_0 => {
    let var_1 = new gc_WorldHandler$1();
    gc_WorldHandler$1__init_(var_1, var_0);
    return var_1;
},
gc_WorldHandler$1_handleEvent0 = ($this, $ev) => {
    $ev.preventDefault();
},
gc_WorldHandler$1_handleEvent = ($this, var$1) => {
    $this.$handleEvent1(var$1);
},
gc_WorldHandler$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
jl_System = $rt_classWithoutFields(),
jl_System_outCache = null,
jl_System_errCache = null,
jl_System__init_ = $this => {
    jl_Object__init_($this);
},
jl_System__init_0 = () => {
    let var_0 = new jl_System();
    jl_System__init_(var_0);
    return var_0;
},
jl_System_out = () => {
    if (jl_System_outCache === null)
        jl_System_outCache = otcic_JSStdoutPrintStream__init_0();
    return jl_System_outCache;
},
jl_System_err = () => {
    if (jl_System_errCache === null)
        jl_System_errCache = otcic_JSStderrPrintStream__init_0();
    return jl_System_errCache;
},
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6, $srcType, $targetType, $srcArray, $i, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
            var$6 = $destPos + $length | 0;
            if (var$6 <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$6 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$6 + 1 | 0;
                                        $elem = var$11[var$6];
                                        if (!jl_Class_isInstance($targetType, $elem)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $rt_throw(jl_ArrayStoreException__init_());
                                        }
                                        $i = $i + 1 | 0;
                                        var$6 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $rt_throw(jl_ArrayStoreException__init_());
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $rt_throw(jl_ArrayStoreException__init_());
            }
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(90)));
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6;
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
        var$6 = $destPos + $length | 0;
        if (var$6 <= jlr_Array_getLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
},
jl_System_currentTimeMillis = () => {
    return Long_fromNumber((new Date()).getTime());
},
jl_System_gc = () => {
    return;
},
jl_System_nanoTime = () => {
    return Long_fromNumber(performance.now() * 1000000.0);
},
g_Greenfoot = $rt_classWithoutFields(),
g_Greenfoot_randomGenerator = null,
g_Greenfoot_$callClinit = () => {
    g_Greenfoot_$callClinit = $rt_eraseClinit(g_Greenfoot);
    g_Greenfoot__clinit_();
},
g_Greenfoot__init_ = $this => {
    g_Greenfoot_$callClinit();
    jl_Object__init_($this);
},
g_Greenfoot__init_0 = () => {
    let var_0 = new g_Greenfoot();
    g_Greenfoot__init_(var_0);
    return var_0;
},
g_Greenfoot_setWorld = $world => {
    g_Greenfoot_$callClinit();
    if ($world !== null) {
        (gc_WorldHandler_getInstance()).$setWorld($world);
        return;
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(91)));
},
g_Greenfoot_start = () => {
    g_Greenfoot_$callClinit();
    (gc_Simulation_getInstance()).$setPaused(0);
},
g_Greenfoot_getRandomNumber = $limit => {
    g_Greenfoot_$callClinit();
    return g_Greenfoot_randomGenerator.$nextInt($limit);
},
g_Greenfoot_mouseClicked = $obj => {
    g_Greenfoot_$callClinit();
    return ((gc_WorldHandler_getInstance()).$getMouseManager()).$isMouseClicked($obj);
},
g_Greenfoot_getMouseInfo = () => {
    g_Greenfoot_$callClinit();
    return ((gc_WorldHandler_getInstance()).$getMouseManager()).$getMouseInfo();
},
g_Greenfoot__clinit_ = () => {
    g_Greenfoot_randomGenerator = ju_Random__init_0();
};
function gc_InRangeQuery() {
    let a = this; jl_Object.call(a);
    a.$x3 = 0;
    a.$y3 = 0;
    a.$r0 = 0;
}
let gc_InRangeQuery__init_ = $this => {
    jl_Object__init_($this);
},
gc_InRangeQuery__init_0 = () => {
    let var_0 = new gc_InRangeQuery();
    gc_InRangeQuery__init_(var_0);
    return var_0;
},
gc_InRangeQuery_init = ($this, $x, $y, $r) => {
    $this.$x3 = $x;
    $this.$y3 = $y;
    $this.$r0 = $r;
},
gc_InRangeQuery_checkCollision = ($this, $actor) => {
    let $actorX, $actorY, $dx, $dy, $dist;
    $actorX = g_ActorVisitor_toPixel($actor, g_ActorVisitor_getX($actor));
    $actorY = g_ActorVisitor_toPixel($actor, g_ActorVisitor_getY($actor));
    $dx = $actorX - $this.$x3 | 0;
    $dy = $actorY - $this.$y3 | 0;
    $dist = jl_Math_sqrt($rt_imul($dx, $dx) + $rt_imul($dy, $dy) | 0) | 0;
    return $dist > $this.$r0 ? 0 : 1;
};
function MenuDeckText() {
    let a = this; g_Actor.call(a);
    a.$time6 = 0;
    a.$speed3 = 0;
    a.$speedTime2 = 0;
    a.$image3 = null;
}
let MenuDeckText__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$time6 = 10;
        $this.$speed3 = 20;
        $this.$speedTime2 = 3;
        $this.$image3 = $this.$getImage1();
        $this.$image3.$scale(10, 10);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
MenuDeckText__init_0 = () => {
    let var_0 = new MenuDeckText();
    MenuDeckText__init_(var_0);
    return var_0;
},
MenuDeckText_act = $this => {
    let $image1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$image1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time6 = $this.$time6 + $this.$speed3 | 0;
        if ($this.$speed3 > 1) {
            $this.$speedTime2 = $this.$speedTime2 - 1 | 0;
            if (!$this.$speedTime2) {
                $this.$speed3 = $this.$speed3 - 1 | 0;
                $this.$speedTime2 = 3;
            }
        }
        if ($this.$time6 >= 600)
            return;
        $this.$image3.$scale($this.$time6, $this.$time6);
        $image1 = new g_GreenfootImage;
        var$2 = $rt_s(92);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_($image1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image3.$getHeight() + $this.$speed3 | 0, $this.$image3.$getWidth() + $this.$speed3 | 0);
        $this.$setImage($image1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $image1, var$2, $ptr);
},
CardGiant = $rt_classWithoutFields(Card),
CardGiant__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostGiant;
        $ptr = 1;
    case 1:
        TroopAllyGhostGiant__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardGiant__init_0 = () => {
    let var_0 = new CardGiant();
    CardGiant__init_(var_0);
    return var_0;
},
CardGiant_act = $this => {
    Card_act($this);
},
gc_RepaintHandler = $rt_classWithoutFields(0);
function gc_WorldHandler$2() {
    jl_Object.call(this);
    this.$this$04 = null;
}
let gc_WorldHandler$2__init_ = ($this, $this$0) => {
    $this.$this$04 = $this$0;
    jl_Object__init_($this);
},
gc_WorldHandler$2__init_0 = var_0 => {
    let var_1 = new gc_WorldHandler$2();
    gc_WorldHandler$2__init_(var_1, var_0);
    return var_1;
},
gc_WorldHandler$2_doRepaint = $this => {
    gc_WorldHandler_access$000($this.$this$04);
    gc_WorldHandler_access$102($this.$this$04, 0);
},
gc_WorldHandler$2_doRepaint$exported$0 = var$1 => {
    var$1.$doRepaint();
};
function MenuScreenMainText() {
    let a = this; g_Actor.call(a);
    a.$time0 = 0;
    a.$speed0 = 0;
    a.$speedTime3 = 0;
    a.$entryFinished = 0;
    a.$image1 = null;
}
let MenuScreenMainText__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$time0 = 10;
        $this.$speed0 = 20;
        $this.$speedTime3 = 3;
        $this.$image1 = $this.$getImage1();
        $this.$image1.$scale(10, 10);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
MenuScreenMainText__init_0 = () => {
    let var_0 = new MenuScreenMainText();
    MenuScreenMainText__init_(var_0);
    return var_0;
},
MenuScreenMainText_act = $this => {
    let $image1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$image1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time0 = $this.$time0 + $this.$speed0 | 0;
        if ($this.$entryFinished) {
            $this.$time0 = $this.$time0 + $this.$speed0 | 0;
            if ($this.$time0 == 600)
                $this.$speed0 =  -$this.$speed0 | 0;
            if ($this.$time0 == 396)
                $this.$speed0 =  -$this.$speed0 | 0;
            $this.$image1.$scale($this.$time0, $this.$time0);
            $image1 = new g_GreenfootImage;
            var$2 = $rt_s(93);
            $ptr = 1;
            continue main;
        }
        if ($this.$speed0 > 1) {
            $this.$speedTime3 = $this.$speedTime3 - 1 | 0;
            if (!$this.$speedTime3) {
                $this.$speed0 = $this.$speed0 - 1 | 0;
                $this.$speedTime3 = 3;
            }
        }
        if ($this.$time0 >= 600) {
            $this.$time0 = 594;
            $this.$speed0 = 3;
            $this.$entryFinished = 1;
            return;
        }
        $this.$image1.$scale($this.$time0, $this.$time0);
        $image1 = new g_GreenfootImage;
        var$2 = $rt_s(93);
        $ptr = 2;
        continue main;
    case 1:
        g_GreenfootImage__init_($image1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image1.$getHeight() + $this.$speed0 | 0, $this.$image1.$getWidth() + $this.$speed0 | 0);
        $this.$setImage($image1);
        return;
    case 2:
        g_GreenfootImage__init_($image1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image1.$getHeight() + 10 | 0, $this.$image1.$getWidth() + 10 | 0);
        $this.$setImage($image1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $image1, var$2, $ptr);
};
function MenuButtonDifficulty() {
    let a = this; g_Actor.call(a);
    a.$diffImage = null;
    a.$difficulty = null;
    a.$speed6 = 0;
    a.$time8 = 0;
    a.$endTime = 0;
}
let MenuButtonDifficulty__init_ = ($this, $difficulty) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$difficulty = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$speed6 = 10;
        $this.$time8 = 100;
        $this.$difficulty = $difficulty;
        var$2 = new g_GreenfootImage;
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(94)), $difficulty), $rt_s(11));
        var$3 = jl_StringBuilder_toString(var$3);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        $this.$diffImage = var$2;
        $this.$setImage($this.$diffImage);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $difficulty, var$2, var$3, $ptr);
},
MenuButtonDifficulty__init_0 = var_0 => {
    let var_1 = new MenuButtonDifficulty();
    MenuButtonDifficulty__init_(var_1, var_0);
    return var_1;
},
MenuButtonDifficulty_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$arrival();
        $ptr = 1;
    case 1:
        $this.$checkClick();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
MenuButtonDifficulty_arrival = $this => {
    if ($this.$getY() < 310 && $this.$endTime < 20)
        $this.$setLocation($this.$getX(), $this.$getY() + $this.$speed6 | 0);
    else if ($this.$endTime < 20) {
        $this.$endTime = $this.$endTime + 1 | 0;
        if (!($this.$time8 % 20 | 0)) {
            $this.$speed6 = $this.$speed6 - 1 | 0;
            $this.$setLocation($this.$getX(), $this.$getY() + $this.$speed6 | 0);
        }
    }
},
MenuButtonDifficulty_checkClick = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if (!g_Greenfoot_mouseClicked($this))
            return;
        a: {
            var$1 = $this.$difficulty;
            var$2 = (-1);
            switch (var$1.$hashCode1()) {
                case -1994163307:
                    if (!var$1.$equals($rt_s(21)))
                        break a;
                    var$2 = 1;
                    break a;
                case 2152482:
                    if (!var$1.$equals($rt_s(20)))
                        break a;
                    var$2 = 2;
                    break a;
                case 2241803:
                    if (!var$1.$equals($rt_s(22)))
                        break a;
                    var$2 = 0;
                    break a;
                default:
            }
        }
        b: {
            switch (var$2) {
                case 0:
                    break;
                case 1:
                    ClashWorld_$callClinit();
                    ClashWorld_diff = 1.0;
                    break b;
                case 2:
                    ClashWorld_$callClinit();
                    ClashWorld_diff = 0.5;
                    break b;
                default:
                    break b;
            }
            ClashWorld_$callClinit();
            ClashWorld_diff = 1.5;
        }
        var$3 = new DeckMenuWorld;
        $ptr = 1;
    case 1:
        DeckMenuWorld__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        g_Greenfoot_setWorld(var$3);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
};
function ju_LinkedList$Entry() {
    let a = this; jl_Object.call(a);
    a.$item = null;
    a.$next2 = null;
    a.$previous = null;
}
let ju_LinkedList$Entry__init_ = $this => {
    jl_Object__init_($this);
},
ju_LinkedList$Entry__init_0 = () => {
    let var_0 = new ju_LinkedList$Entry();
    ju_LinkedList$Entry__init_(var_0);
    return var_0;
},
ProjectileArrowAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileArrowAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 5;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileArrowAlly__init_0 = var_0 => {
    let var_1 = new ProjectileArrowAlly();
    ProjectileArrowAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileArrowAlly_act = $this => {
    ProjectileAlly_act($this);
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_isBmpCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint > 0 && $codePoint <= 65535 ? 1 : 0;
},
jl_Character_isHighSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogate = $ch => {
    jl_Character_$callClinit();
    return !jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1;
},
jl_Character_highSurrogate = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    var$2 = $codePoint - 65536 | 0;
    return (55296 | var$2 >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_digit = ($ch, $radix) => {
    jl_Character_$callClinit();
    return jl_Character_digit0($ch, $radix);
},
jl_Character_digit0 = ($codePoint, $radix) => {
    let $d;
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36) {
        $d = jl_Character_getNumericValue($codePoint);
        if ($d >= $radix)
            $d = (-1);
        return $d;
    }
    return (-1);
},
jl_Character_getNumericValue = $codePoint => {
    let $digitMapping, var$3, $l, $u, $idx, var$7, $val, var$9;
    jl_Character_$callClinit();
    $digitMapping = jl_Character_getDigitMapping();
    var$3 = $digitMapping.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while ($u >= $l) {
        $idx = ($l + $u | 0) / 2 | 0;
        var$7 = $idx * 2 | 0;
        $val = var$3[var$7];
        var$9 = $rt_compare($codePoint, $val);
        if (var$9 > 0)
            $l = $idx + 1 | 0;
        else {
            if (var$9 >= 0)
                return var$3[var$7 + 1 | 0];
            $u = $idx - 1 | 0;
        }
    }
    return (-1);
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_getDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_digitMapping === null)
        jl_Character_digitMapping = otciu_UnicodeHelper_decodeIntPairsDiff(((jl_Character_obtainDigitMapping()).value !== null ? $rt_str((jl_Character_obtainDigitMapping()).value) : null));
    return jl_Character_digitMapping;
},
jl_Character_obtainDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$3 === null)
        jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
    return jl_Character_$$metadata$$3;
},
jl_Character_getClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_classMapping === null)
        jl_Character_classMapping = otciu_UnicodeHelper_extractRle(((jl_Character_obtainClasses()).value !== null ? $rt_str((jl_Character_obtainClasses()).value) : null));
    return jl_Character_classMapping;
},
jl_Character_obtainClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$4 === null)
        jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
    return jl_Character_$$metadata$$4;
},
jl_Character_getType = $codePoint => {
    let $classes, var$3, $l, $u, $i, $range;
    jl_Character_$callClinit();
    if (jl_Character_isBmpCodePoint($codePoint) && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    $classes = jl_Character_getClasses();
    var$3 = $classes.data;
    $l = 0;
    $u = var$3.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = var$3[$i];
        if ($codePoint >= $range.$end)
            $l = $i + 1 | 0;
        else {
            if ($codePoint >= $range.$start0)
                return $range.$data0.data[$codePoint - $range.$start0 | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isSpaceChar = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isWhitespace0($ch);
},
jl_Character_isWhitespace0 = $codePoint => {
    jl_Character_$callClinit();
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "kE*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%"
    + "%%%%:OG%%%%%%%%%%%%%%%%%%V*OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
    + "!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
    + " F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
    + "L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
    + "FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0"
    + "G.H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?6767676"
    + "7Y&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##A#!# # #!#!#!#!A6E$!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F"
    + "\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$AXG%F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'"
    + "F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%"
    + "Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W# FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+b \'$ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AJF#A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+A\'b=U\'"
    + " AnGOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b A( F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% "
    + "F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^-A%^#A`b=5& A-^/A#^.A$^+A&^YA(^0A#^,A\'^*A(b=4#  b==! J+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};
};
function ElixirBar() {
    let a = this; Overlay.call(a);
    a.$elixir1 = 0.0;
    a.$elixirSpeed0 = 0.0;
    a.$size2 = 0;
    a.$image6 = null;
}
let ElixirBar__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$elixir1 = 1.0;
        $this.$elixirSpeed0 = 0.012;
        $this.$image6 = $this.$getImage1();
        $this.$image6.$scale(35, 23);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ElixirBar__init_0 = () => {
    let var_0 = new ElixirBar();
    ElixirBar__init_(var_0);
    return var_0;
},
ElixirBar_act = $this => {
    let var$1, var$2, var$3;
    if ($this.$size2 < 350)
        $this.$changeSize();
    $this.$setLocation(46 + ($this.$size2 / 2 | 0) | 0, 570);
    var$1 = $this.$getWorld();
    var$2 = $this.$elixir1 | 0;
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(var$3, var$2);
    var$1.$showText(jl_StringBuilder_toString(var$3), 32, 570);
},
ElixirBar_changeSize = $this => {
    $this.$size2 = ($this.$elixir1 * 34.0 | 0) + 1 | 0;
    if ($this.$elixir1 < 10.0)
        $this.$elixir1 = $this.$elixir1 + $this.$elixirSpeed0;
    $this.$image6.$scale($this.$size2, 23);
},
ElixirBar_useElixir = ($this, $amount) => {
    let var$2, var$3;
    var$2 = $this.$elixir1;
    var$3 = $amount;
    if (var$2 >= var$3)
        $this.$elixir1 = $this.$elixir1 - var$3;
},
TroopEnemyGolem = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyGolem__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 420;
        var$2 = 18;
        var$3 = 30;
        var$4 = 1;
        var$5 = 2;
        var$6 = 77;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 26;
        $this.$troopName = $rt_s(41);
        $this.$target = $rt_s(35);
        $this.$specialDeath = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyGolem__init_0 = () => {
    let var_0 = new TroopEnemyGolem();
    TroopEnemyGolem__init_(var_0);
    return var_0;
},
TroopEnemyGolem_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemyGolem_checkHealth = $this => {
    let var$1, $ally, $tower, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();$tower = $thread.pop();$ally = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$hp0 > 0)
            return;
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TroopAlly))).$iterator();
        while (var$1.$hasNext()) {
            $ally = var$1.$next();
            $ally.$hp0 = $ally.$hp0 - 20 | 0;
        }
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TowerAlly))).$iterator();
        while (var$1.$hasNext()) {
            $tower = var$1.$next();
            $tower.$hp = $tower.$hp - 13 | 0;
        }
        var$1 = $this.$getWorld();
        var$4 = new TroopEnemyGolemite;
        $ptr = 1;
    case 1:
        TroopEnemyGolemite__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$4, $this.$getX() - 5 | 0, $this.$getY());
        var$1 = $this.$getWorld();
        var$4 = new TroopEnemyGolemite;
        $ptr = 2;
    case 2:
        TroopEnemyGolemite__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$4, $this.$getX() + 5 | 0, $this.$getY());
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ally, $tower, var$4, $ptr);
};
function jl_Object$monitorExit$lambda$_8_0() {
    jl_Object.call(this);
    this.$_015 = null;
}
let jl_Object$monitorExit$lambda$_8_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_015 = var$1;
},
jl_Object$monitorExit$lambda$_8_0__init_0 = var_0 => {
    let var_1 = new jl_Object$monitorExit$lambda$_8_0();
    jl_Object$monitorExit$lambda$_8_0__init_(var_1, var_0);
    return var_1;
},
jl_Object$monitorExit$lambda$_8_0_run = var$0 => {
    jl_Object_lambda$monitorExit$2(var$0.$_015);
};
function CardNext() {
    let a = this; Overlay.call(a);
    a.$cardNext = null;
    a.$cards = null;
}
let CardNext__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, $i, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$i = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = $rt_createArray(g_GreenfootImage, 11);
        var$2 = var$1.data;
        var$3 = 0;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(95);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 1;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(96);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 2;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(97);
        $ptr = 4;
    case 4:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 3;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(98);
        $ptr = 5;
    case 5:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 4;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(99);
        $ptr = 6;
    case 6:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 5;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(100);
        $ptr = 7;
    case 7:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 6;
        var$5 = new g_GreenfootImage;
        var$4 = $rt_s(101);
        $ptr = 8;
    case 8:
        g_GreenfootImage__init_(var$5, var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$5;
        var$3 = 7;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(102);
        $ptr = 9;
    case 9:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 8;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(103);
        $ptr = 10;
    case 10:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 9;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(104);
        $ptr = 11;
    case 11:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        var$3 = 10;
        var$4 = new g_GreenfootImage;
        var$5 = $rt_s(105);
        $ptr = 12;
    case 12:
        g_GreenfootImage__init_(var$4, var$5);
        if ($rt_suspending()) {
            break main;
        }
        var$2[var$3] = var$4;
        $this.$cards = var$1;
        $this.$setImage(null);
        $i = 0;
        while ($i < $this.$cards.data.length) {
            $this.$cards.data[$i].$scale(42, 50);
            $i = $i + 1 | 0;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, $i, $ptr);
},
CardNext__init_0 = () => {
    let var_0 = new CardNext();
    CardNext__init_(var_0);
    return var_0;
},
CardNext_act = $this => {
    $this.$checkCard0();
},
CardNext_checkCard = $this => {
    let $world;
    a: {
        $world = $this.$getWorld();
        $this.$cardNext = $world.$cardNext0;
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardKnight)) {
            $this.$setImage($this.$cards.data[0]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardArcher)) {
            $this.$setImage($this.$cards.data[1]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardGiant)) {
            $this.$setImage($this.$cards.data[2]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardFireball)) {
            $this.$setImage($this.$cards.data[3]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardGoblinSpear)) {
            $this.$setImage($this.$cards.data[4]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardDragonBaby)) {
            $this.$setImage($this.$cards.data[5]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardSkeleton)) {
            $this.$setImage($this.$cards.data[6]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardCannon)) {
            $this.$setImage($this.$cards.data[7]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardGolem)) {
            $this.$setImage($this.$cards.data[8]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) === $rt_cls(CardPekkaMini)) {
            $this.$setImage($this.$cards.data[9]);
            break a;
        }
        if (jl_Object_getClass($this.$cardNext) !== $rt_cls(CardPoison))
            break a;
        $this.$setImage($this.$cards.data[10]);
    }
};
function g_GreenfootImage$2$handleEvent$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_02 = null;
    a.$_12 = null;
}
let g_GreenfootImage$2$handleEvent$lambda$_1_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_02 = var$1;
    var$0.$_12 = var$2;
},
g_GreenfootImage$2$handleEvent$lambda$_1_0__init_0 = (var_0, var_1) => {
    let var_2 = new g_GreenfootImage$2$handleEvent$lambda$_1_0();
    g_GreenfootImage$2$handleEvent$lambda$_1_0__init_(var_2, var_0, var_1);
    return var_2;
},
g_GreenfootImage$2$handleEvent$lambda$_1_0_run = var$0 => {
    g_GreenfootImage$2_lambda$handleEvent$0(var$0.$_02, var$0.$_12);
},
ggim_PriorityManager = $rt_classWithoutFields(),
ggim_PriorityManager__init_ = $this => {
    jl_Object__init_($this);
},
ggim_PriorityManager__init_0 = () => {
    let var_0 = new ggim_PriorityManager();
    ggim_PriorityManager__init_(var_0);
    return var_0;
},
ggim_PriorityManager_isHigherPriority = ($newEvent, $currentData) => {
    let $currentPriority, $newPriority;
    $currentPriority = ggim_PriorityManager_getPriority0($currentData);
    $newPriority = ggim_PriorityManager_getPriority($newEvent);
    return $newPriority > $currentPriority ? 0 : 1;
},
ggim_PriorityManager_getPriority = $event => {
    let var$2;
    a: {
        var$2 = (-1);
        switch ($event.$hashCode1()) {
            case -1844879718:
                if (!$event.$equals($rt_s(87)))
                    break a;
                var$2 = 2;
                break a;
            case 94750088:
                if (!$event.$equals($rt_s(78)))
                    break a;
                var$2 = 1;
                break a;
            case 586843847:
                if (!$event.$equals($rt_s(79)))
                    break a;
                var$2 = 3;
                break a;
            case 586846041:
                if (!$event.$equals($rt_s(81)))
                    break a;
                var$2 = 4;
                break a;
            case 587111926:
                if (!$event.$equals($rt_s(82)))
                    break a;
                var$2 = 5;
                break a;
            case 1243067904:
                if (!$event.$equals($rt_s(80)))
                    break a;
                var$2 = 0;
                break a;
            default:
        }
    }
    switch (var$2) {
        case 0:
            break;
        case 1:
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 3;
        case 5:
            return 4;
        default:
            return 2147483647;
    }
    return 0;
},
ggim_PriorityManager_getPriority0 = $data => {
    if ($data.$isMouseDragEnded(null))
        return 0;
    if ($data.$isMouseClicked(null))
        return 1;
    if ($data.$isMousePressed(null))
        return 2;
    if ($data.$isMouseDragged(null))
        return 3;
    if (!$data.$isMouseMoved(null))
        return 2147483647;
    return 4;
};
function jl_Thread$SleepHandler$interrupted$lambda$_1_0() {
    jl_Object.call(this);
    this.$_08 = null;
}
let jl_Thread$SleepHandler$interrupted$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_08 = var$1;
},
jl_Thread$SleepHandler$interrupted$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new jl_Thread$SleepHandler$interrupted$lambda$_1_0();
    jl_Thread$SleepHandler$interrupted$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
jl_Thread$SleepHandler$interrupted$lambda$_1_0_run = var$0 => {
    jl_Thread$SleepHandler_lambda$interrupted$1(var$0.$_08);
},
ProjectileSpearEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileSpearEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 3;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileSpearEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileSpearEnemy();
    ProjectileSpearEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileSpearEnemy_act = $this => {
    ProjectileEnemy_act($this);
},
g_ActorVisitor = $rt_classWithoutFields(),
g_ActorVisitor__init_ = $this => {
    jl_Object__init_($this);
},
g_ActorVisitor__init_0 = () => {
    let var_0 = new g_ActorVisitor();
    g_ActorVisitor__init_(var_0);
    return var_0;
},
g_ActorVisitor_initialise = () => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor_initialise();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($ptr);
},
g_ActorVisitor_getX = $actor => {
    return $actor.$x;
},
g_ActorVisitor_getY = $actor => {
    return $actor.$y;
},
g_ActorVisitor_getRotation = $actor => {
    return $actor.$rotation;
},
g_ActorVisitor_getWorld = $actor => {
    return $actor.$world;
},
g_ActorVisitor_containsPoint = ($actor, $px, $py) => {
    return $actor.$containsPoint($px, $py);
},
g_ActorVisitor_intersects = ($actor, $other) => {
    return $actor.$intersects0($other);
},
g_ActorVisitor_toPixel = ($actor, $x) => {
    return $actor.$toPixel0($x);
},
g_ActorVisitor_getBoundingRect = $actor => {
    return $actor.$getBoundingRect();
},
g_ActorVisitor_setData = ($actor, $n) => {
    $actor.$setData0($n);
},
g_ActorVisitor_getData = $actor => {
    return $actor.$getData0();
},
g_ActorVisitor_getDisplayImage = $actor => {
    return $actor.$getImage1();
},
g_ActorVisitor_setDelegate = $instance => {
    g_Actor_setDelegate($instance);
},
g_ActorVisitor_getSequenceNumber = $actor => {
    return g_Actor_getSequenceNumber($actor);
},
g_ActorVisitor_getLastPaintSeqNum = $actor => {
    return g_Actor_getLastPaintSeqNum($actor);
},
g_ActorVisitor_setLastPaintSeqNum = ($actor, $num) => {
    g_Actor_setLastPaintSeqNum($actor, $num);
},
g_ActorVisitor_decrementSleepForIfPositive = $actor => {
    let $s;
    $s = g_Actor_getSleepingFor($actor);
    if ($s > 0)
        g_Actor_setSleepingFor($actor, $s - 1 | 0);
    return $s ? 0 : 1;
},
otcir_ClassList = $rt_classWithoutFields(),
otcir_ClassList__init_ = $this => {
    jl_Object__init_($this);
},
otcir_ClassList__init_0 = () => {
    let var_0 = new otcir_ClassList();
    otcir_ClassList__init_(var_0);
    return var_0;
},
SpellEnemyGround = $rt_classWithoutFields(SpellEnemy),
SpellEnemyGround__init_ = ($this, $damage, $radius, $spriteTime, $time, $attackImageNumber, $type) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$type = $thread.pop();$attackImageNumber = $thread.pop();$time = $thread.pop();$spriteTime = $thread.pop();$radius = $thread.pop();$damage = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$damage0 = $damage;
        $this.$radius = $radius;
        $this.$spriteTime = $spriteTime;
        $this.$spriteSpeed = $spriteTime;
        $this.$time1 = $time;
        $this.$attackImageNumber = $attackImageNumber;
        $this.$type = $type;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $damage, $radius, $spriteTime, $time, $attackImageNumber, $type, $ptr);
},
SpellEnemyGround__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new SpellEnemyGround();
    SpellEnemyGround__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
SpellEnemyPoison = $rt_classWithoutFields(SpellEnemyGround),
SpellEnemyPoison__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = 60;
        var$3 = 152;
        var$4 = 200;
        var$5 = 51;
        var$6 = $rt_s(17);
        $ptr = 1;
    case 1:
        SpellEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$spellName = $rt_s(40);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
SpellEnemyPoison__init_0 = () => {
    let var_0 = new SpellEnemyPoison();
    SpellEnemyPoison__init_(var_0);
    return var_0;
},
SpellEnemyPoison_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAllyArcher = $rt_classWithoutFields(TroopAllyGround),
TroopAllyArcher__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 40;
        var$2 = 5;
        var$3 = 85;
        var$4 = 1;
        var$5 = 1;
        var$6 = 35;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 12;
        $this.$troopName = $rt_s(30);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyArcher__init_0 = () => {
    let var_0 = new TroopAllyArcher();
    TroopAllyArcher__init_(var_0);
    return var_0;
},
TroopAllyArcher_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
otc_ResourceSource = $rt_classWithoutFields(),
otc_ResourceSource_resourceSource = null,
otc_ResourceSource__init_ = $this => {
    jl_Object__init_($this);
},
otc_ResourceSource_setSource = $source => {
    otc_ResourceSource_resourceSource = $source;
},
SpellAllyPoison = $rt_classWithoutFields(SpellAllyGround),
SpellAllyPoison__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = 60;
        var$3 = 152;
        var$4 = 200;
        var$5 = 51;
        var$6 = $rt_s(17);
        $ptr = 1;
    case 1:
        SpellAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$spellName = $rt_s(40);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
SpellAllyPoison__init_0 = () => {
    let var_0 = new SpellAllyPoison();
    SpellAllyPoison__init_(var_0);
    return var_0;
},
SpellAllyPoison_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        SpellAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
ju_Dictionary = $rt_classWithoutFields();
let ju_Dictionary__init_ = $this => {
    jl_Object__init_($this);
},
TroopAllyKnight = $rt_classWithoutFields(TroopAllyGround),
TroopAllyKnight__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 80;
        var$2 = 7;
        var$3 = 30;
        var$4 = 1;
        var$5 = 1;
        var$6 = 35;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 12;
        $this.$troopName = $rt_s(39);
        $this.$target = $rt_s(14);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyKnight__init_0 = () => {
    let var_0 = new TroopAllyKnight();
    TroopAllyKnight__init_(var_0);
    return var_0;
},
TroopAllyKnight_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
};
function ggim_MouseEventData() {
    let a = this; jl_Object.call(a);
    a.$mouseInfo = null;
    a.$mouseDragEndedInfo = null;
    a.$mouseClickedInfo = null;
    a.$mousePressedInfo = null;
    a.$mouseDraggedInfo = null;
    a.$mouseMovedInfo = null;
}
let ggim_MouseEventData__init_0 = $this => {
    jl_Object__init_($this);
},
ggim_MouseEventData__init_ = () => {
    let var_0 = new ggim_MouseEventData();
    ggim_MouseEventData__init_0(var_0);
    return var_0;
},
ggim_MouseEventData_init = $this => {
    let $blankedMouseInfo;
    $this.$mousePressedInfo = null;
    $this.$mouseClickedInfo = null;
    $this.$mouseDraggedInfo = null;
    $this.$mouseDragEndedInfo = null;
    $this.$mouseMovedInfo = null;
    if ($this.$mouseInfo !== null) {
        $blankedMouseInfo = g_MouseInfoVisitor_newMouseInfo();
        g_MouseInfoVisitor_setLoc($blankedMouseInfo, $this.$mouseInfo.$getX(), $this.$mouseInfo.$getY());
        $this.$mouseInfo = $blankedMouseInfo;
    }
},
ggim_MouseEventData_getMouseInfo = $this => {
    return $this.$mouseInfo;
},
ggim_MouseEventData_isMousePressed = ($this, $obj) => {
    return ggim_MouseEventData_checkObject($this, $obj, $this.$mousePressedInfo);
},
ggim_MouseEventData_mousePressed = ($this, $x, $y, $button, $actor) => {
    $this.$init2();
    $this.$mousePressedInfo = g_MouseInfoVisitor_newMouseInfo();
    $this.$mouseInfo = $this.$mousePressedInfo;
    g_MouseInfoVisitor_setButton($this.$mouseInfo, $button);
    g_MouseInfoVisitor_setLoc($this.$mouseInfo, $x, $y);
    g_MouseInfoVisitor_setActor($this.$mouseInfo, $actor);
},
ggim_MouseEventData_isMouseClicked = ($this, $obj) => {
    if ($obj !== null && $this.$isMousePressed(null) && !$this.$isMousePressed($obj))
        return 0;
    return ggim_MouseEventData_checkObject($this, $obj, $this.$mouseClickedInfo);
},
ggim_MouseEventData_mouseClicked = ($this, $x, $y, $button, $clickCount, $actor) => {
    let $tempPressedInfo;
    $tempPressedInfo = $this.$mousePressedInfo;
    $this.$init2();
    $this.$mousePressedInfo = $tempPressedInfo;
    $this.$mouseClickedInfo = g_MouseInfoVisitor_newMouseInfo();
    $this.$mouseInfo = $this.$mouseClickedInfo;
    g_MouseInfoVisitor_setButton($this.$mouseInfo, $button);
    g_MouseInfoVisitor_setLoc($this.$mouseInfo, $x, $y);
    g_MouseInfoVisitor_setActor($this.$mouseInfo, $actor);
    g_MouseInfoVisitor_setClickCount($this.$mouseInfo, $clickCount);
},
ggim_MouseEventData_isMouseDragged = ($this, $obj) => {
    return ggim_MouseEventData_checkObject($this, $obj, $this.$mouseDraggedInfo);
},
ggim_MouseEventData_mouseDragged = ($this, $x, $y, $button, $actor) => {
    $this.$init2();
    $this.$mouseDraggedInfo = g_MouseInfoVisitor_newMouseInfo();
    $this.$mouseInfo = $this.$mouseDraggedInfo;
    g_MouseInfoVisitor_setButton($this.$mouseInfo, $button);
    g_MouseInfoVisitor_setLoc($this.$mouseInfo, $x, $y);
    g_MouseInfoVisitor_setActor($this.$mouseInfo, $actor);
},
ggim_MouseEventData_isMouseDragEnded = ($this, $obj) => {
    return ggim_MouseEventData_checkObject($this, $obj, $this.$mouseDragEndedInfo);
},
ggim_MouseEventData_mouseDragEnded = ($this, $x, $y, $button, $actor) => {
    let $tempPressedInfo, $tempClickedInfo;
    $tempPressedInfo = $this.$mousePressedInfo;
    $tempClickedInfo = $this.$mouseClickedInfo;
    $this.$init2();
    $this.$mousePressedInfo = $tempPressedInfo;
    $this.$mouseClickedInfo = $tempClickedInfo;
    $this.$mouseDragEndedInfo = g_MouseInfoVisitor_newMouseInfo();
    $this.$mouseInfo = $this.$mouseDragEndedInfo;
    g_MouseInfoVisitor_setButton($this.$mouseInfo, $button);
    g_MouseInfoVisitor_setLoc($this.$mouseInfo, $x, $y);
    g_MouseInfoVisitor_setActor($this.$mouseInfo, $actor);
},
ggim_MouseEventData_mouseExited = $this => {
    $this.$mouseInfo = $this.$mouseDraggedInfo;
    $this.$mouseMovedInfo = null;
},
ggim_MouseEventData_isMouseMoved = ($this, $obj) => {
    return ggim_MouseEventData_checkObject($this, $obj, $this.$mouseMovedInfo);
},
ggim_MouseEventData_mouseMoved = ($this, $x, $y, $button, $actor) => {
    $this.$init2();
    $this.$mouseMovedInfo = g_MouseInfoVisitor_newMouseInfo();
    $this.$mouseInfo = $this.$mouseMovedInfo;
    g_MouseInfoVisitor_setButton($this.$mouseInfo, $button);
    g_MouseInfoVisitor_setLoc($this.$mouseInfo, $x, $y);
    g_MouseInfoVisitor_setActor($this.$mouseInfo, $actor);
},
ggim_MouseEventData_getActor = $this => {
    if ($this.$mouseInfo === null)
        return null;
    return $this.$mouseInfo.$getActor();
},
ggim_MouseEventData_getButton = $this => {
    if ($this.$mouseInfo === null)
        return 0;
    return $this.$mouseInfo.$getButton();
},
ggim_MouseEventData_checkObject = ($this, $obj, $info) => {
    let $actor;
    if ($info === null)
        return 0;
    $actor = $info.$getActor();
    return $obj !== null && !($obj instanceof g_World && $actor === null) && $actor !== $obj ? 0 : 1;
};
function ju_HashMap$1() {
    ju_AbstractSet.call(this);
    this.$this$05 = null;
}
let ju_HashMap$1__init_ = ($this, $this$0) => {
    $this.$this$05 = $this$0;
    ju_AbstractSet__init_($this);
},
ju_HashMap$1__init_0 = var_0 => {
    let var_1 = new ju_HashMap$1();
    ju_HashMap$1__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$1_iterator = $this => {
    return ju_HashMap$KeyIterator__init_0($this.$this$05);
},
TroopAllyGhostCannon = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostCannon__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 3;
        var$2 = $rt_s(35);
        var$3 = $rt_s(43);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostCannon__init_0 = () => {
    let var_0 = new TroopAllyGhostCannon();
    TroopAllyGhostCannon__init_(var_0);
    return var_0;
},
TroopAllyGhostCannon_act = $this => {
    let $bar, $mouse, $base, var$4, var$5, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();$base = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0 && !$this.$isTouching($rt_cls(TowerAlly))) {
                $base = new TowerBaseCannon;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TowerBaseCannon__init_($base);
        if ($rt_suspending()) {
            break main;
        }
        ($this.$getWorld()).$addObject0($base, $this.$getX(), $this.$getY() + 4 | 0);
        var$4 = $this.$getWorld();
        var$5 = new TowerDownCannon;
        $ptr = 2;
    case 2:
        TowerDownCannon__init_(var$5, $base);
        if ($rt_suspending()) {
            break main;
        }
        var$4.$addObject0(var$5, $this.$getX(), $this.$getY() - 5 | 0);
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, $base, var$4, var$5, $ptr);
},
TroopEnemyGolemite = $rt_classWithoutFields(TroopEnemyGround),
TroopEnemyGolemite__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 50;
        var$2 = 4;
        var$3 = 25;
        var$4 = 1;
        var$5 = 2;
        var$6 = 77;
        $ptr = 1;
    case 1:
        TroopEnemyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 26;
        $this.$troopName = $rt_s(63);
        $this.$target = $rt_s(13);
        $this.$specialDeath = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyGolemite__init_0 = () => {
    let var_0 = new TroopEnemyGolemite();
    TroopEnemyGolemite__init_(var_0);
    return var_0;
},
TroopEnemyGolemite_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy_act($this);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemyGolemite_checkHealth = $this => {
    let var$1, $ally, $tower;
    if ($this.$hp0 <= 0) {
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TroopAlly))).$iterator();
        while (var$1.$hasNext()) {
            $ally = var$1.$next();
            $ally.$hp0 = $ally.$hp0 - 10 | 0;
        }
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TowerAlly))).$iterator();
        while (var$1.$hasNext()) {
            $tower = var$1.$next();
            $tower.$hp = $tower.$hp - 6 | 0;
        }
        ($this.$getWorld()).$removeObject($this);
    }
},
jl_Double = $rt_classWithoutFields(jl_Number),
jl_Double_TYPE = null,
jl_Double_$callClinit = () => {
    jl_Double_$callClinit = $rt_eraseClinit(jl_Double);
    jl_Double__clinit_();
},
jl_Double_doubleToLongBits = $value => {
    jl_Double_$callClinit();
    if (!(isNaN($value) ? 1 : 0))
        return $rt_doubleToRawLongBits($value);
    return Long_create(0, 2146959360);
},
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
};
function g_ActorSet$ListNode() {
    let a = this; jl_Object.call(a);
    a.$actor = null;
    a.$next3 = null;
    a.$prev = null;
    a.$nextHash = null;
    a.$prevHash = null;
    a.$this$06 = null;
}
let g_ActorSet$ListNode__init_0 = ($this, var$1) => {
    $this.$this$06 = var$1;
    jl_Object__init_($this);
    $this.$next3 = $this;
    $this.$prev = $this;
},
g_ActorSet$ListNode__init_1 = var_0 => {
    let var_1 = new g_ActorSet$ListNode();
    g_ActorSet$ListNode__init_0(var_1, var_0);
    return var_1;
},
g_ActorSet$ListNode__init_ = ($this, var$1, $actor, $listTail) => {
    $this.$this$06 = var$1;
    jl_Object__init_($this);
    $this.$actor = $actor;
    $this.$next3 = $listTail.$next3;
    $this.$prev = $listTail;
    $listTail.$next3 = $this;
    $this.$next3.$prev = $this;
},
g_ActorSet$ListNode__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new g_ActorSet$ListNode();
    g_ActorSet$ListNode__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
g_ActorSet$ListNode_setHashListHead = ($this, $oldHead) => {
    if ($oldHead === null) {
        $this.$nextHash = $this;
        $this.$prevHash = $this;
    } else {
        $this.$nextHash = $oldHead;
        $this.$prevHash = $oldHead.$prevHash;
        $oldHead.$prevHash = $this;
        $this.$prevHash.$nextHash = $this;
    }
},
g_ActorSet$ListNode_remove = $this => {
    $this.$next3.$prev = $this.$prev;
    $this.$prev.$next3 = $this.$next3;
    $this.$nextHash.$prevHash = $this.$prevHash;
    $this.$prevHash.$nextHash = $this.$nextHash;
},
ProjectileKingEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileKingEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 25;
        var$3 = 4;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileKingEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileKingEnemy();
    ProjectileKingEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileKingEnemy_act = $this => {
    ProjectileEnemy_act($this);
},
TowerEnemyTower = $rt_classWithoutFields(TowerEnemy),
TowerEnemyTower__init_ = ($this, $hp, $attackTime, $range) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$range = $thread.pop();$attackTime = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TowerEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp = $hp;
        $this.$basehp = $hp;
        $this.$range0 = $range;
        $this.$attackTime0 = $attackTime;
        $this.$attackSpeed0 = $attackTime;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attackTime, $range, $ptr);
},
TowerEnemyTower__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new TowerEnemyTower();
    TowerEnemyTower__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
TowerUpPrincess = $rt_classWithoutFields(TowerEnemyTower),
TowerUpPrincess__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 200;
        var$2 = 45;
        var$3 = 110;
        $ptr = 1;
    case 1:
        TowerEnemyTower__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TowerUpPrincess__init_0 = () => {
    let var_0 = new TowerUpPrincess();
    TowerUpPrincess__init_(var_0);
    return var_0;
},
TowerUpPrincess_act = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = $this.$getWorld();
        var$2 = $this.$hp;
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(var$3, var$2);
        var$1.$showText(jl_StringBuilder_toString(var$3), $this.$getX(), $this.$getY() - 35 | 0);
        if ($this.$hp > 0) {
            $ptr = 2;
            continue main;
        }
        var$1 = $this.$getWorld();
        var$3 = new TowerDestroyed;
        $ptr = 1;
    case 1:
        TowerDestroyed__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, $this.$getX(), $this.$getY());
        ($this.$getWorld()).$showText($rt_s(57), $this.$getX(), $this.$getY() - 35 | 0);
        var$1 = $this.$getWorld();
        var$1.$allyCrowns = var$1.$allyCrowns + 1 | 0;
        if ($this.$getX() != 95) {
            var$1 = $this.$getWorld();
            var$3 = new ZoneTroopsPlaceRight;
            $ptr = 3;
            continue main;
        }
        var$1 = $this.$getWorld();
        var$3 = new ZoneTroopsPlaceLeft;
        $ptr = 4;
        continue main;
    case 2:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        return;
    case 3:
        ZoneTroopsPlaceRight__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, 290, 220);
        ($this.$getWorld()).$removeObject($this);
        return;
    case 4:
        ZoneTroopsPlaceLeft__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, 115, 220);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
};
function ge_SimulationEvent() {
    jl_Object.call(this);
    this.$type2 = 0;
}
let ge_SimulationEvent__init_0 = ($this, $source, $type) => {
    jl_Object__init_($this);
    $this.$type2 = $type;
},
ge_SimulationEvent__init_ = (var_0, var_1) => {
    let var_2 = new ge_SimulationEvent();
    ge_SimulationEvent__init_0(var_2, var_0, var_1);
    return var_2;
},
ge_SimulationEvent_getType = $this => {
    return $this.$type2;
},
ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size1 = 0;
}
let ju_ArrayList__init_1 = $this => {
    ju_ArrayList__init_($this, 10);
},
ju_ArrayList__init_0 = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_1(var_0);
    return var_0;
},
ju_ArrayList__init_ = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_ArrayList__init_3 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_(var_1, var_0);
    return var_1;
},
ju_ArrayList__init_2 = ($this, $c) => {
    let $iter, $i;
    ju_ArrayList__init_($this, $c.$size());
    $iter = $c.$iterator();
    $i = 0;
    while ($i < $this.$array.data.length) {
        $this.$array.data[$i] = $iter.$next();
        $i = $i + 1 | 0;
    }
    $this.$size1 = $this.$array.data.length;
},
ju_ArrayList__init_4 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_2(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size1;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size1 + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size1;
    $this.$size1 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_remove = ($this, $i) => {
    let $old, var$3, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    $old = $this.$array.data[$i];
    $this.$size1 = $this.$size1 - 1 | 0;
    while ($i < $this.$size1) {
        var$3 = $this.$array.data;
        var$4 = $this.$array.data;
        $i_0 = $i + 1 | 0;
        var$3[$i] = var$4[$i_0];
        $i = $i_0;
    }
    $this.$array.data[$this.$size1] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_remove0 = ($this, $o) => {
    let $index;
    $index = $this.$indexOf1($o);
    if ($index < 0)
        return 0;
    $this.$remove2($index);
    return 1;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size1)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_IllegalMonitorStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalMonitorStateException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalMonitorStateException__init_ = () => {
    let var_0 = new jl_IllegalMonitorStateException();
    jl_IllegalMonitorStateException__init_0(var_0);
    return var_0;
};
function ju_LinkedList$SequentialListIterator() {
    let a = this; jl_Object.call(a);
    a.$nextEntry = null;
    a.$prevEntry = null;
    a.$currentEntry = null;
    a.$index0 = 0;
    a.$version = 0;
    a.$this$0 = null;
}
let ju_LinkedList$SequentialListIterator__init_0 = ($this, var$1, $nextEntry, $prevEntry, $index) => {
    $this.$this$0 = var$1;
    jl_Object__init_($this);
    $this.$version = $this.$this$0.$modCount;
    $this.$nextEntry = $nextEntry;
    $this.$prevEntry = $prevEntry;
    $this.$index0 = $index;
},
ju_LinkedList$SequentialListIterator__init_ = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_LinkedList$SequentialListIterator();
    ju_LinkedList$SequentialListIterator__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_LinkedList$SequentialListIterator_hasNext = $this => {
    return $this.$nextEntry === null ? 0 : 1;
},
ju_LinkedList$SequentialListIterator_next = $this => {
    let $result;
    ju_LinkedList$SequentialListIterator_checkConcurrentModification($this);
    if ($this.$nextEntry === null)
        $rt_throw(ju_NoSuchElementException__init_());
    $result = $this.$nextEntry.$item;
    $this.$currentEntry = $this.$nextEntry;
    $this.$prevEntry = $this.$nextEntry;
    $this.$nextEntry = $this.$nextEntry.$next2;
    $this.$index0 = $this.$index0 + 1 | 0;
    return $result;
},
ju_LinkedList$SequentialListIterator_remove = $this => {
    if ($this.$currentEntry === null)
        $rt_throw(jl_IllegalStateException__init_2());
    ju_LinkedList_removeEntry($this.$this$0, $this.$currentEntry);
    if ($this.$currentEntry === $this.$prevEntry) {
        $this.$prevEntry = !$this.$hasNext() ? null : $this.$nextEntry.$previous;
        $this.$index0 = $this.$index0 - 1 | 0;
    } else if ($this.$currentEntry === $this.$nextEntry)
        $this.$nextEntry = !$this.$hasPrevious() ? null : $this.$prevEntry.$next2;
    $this.$version = $this.$this$0.$modCount;
    $this.$currentEntry = null;
},
ju_LinkedList$SequentialListIterator_hasPrevious = $this => {
    return $this.$prevEntry === null ? 0 : 1;
},
ju_LinkedList$SequentialListIterator_add = ($this, $e) => {
    let $newEntry, var$3;
    ju_LinkedList$SequentialListIterator_checkConcurrentModification($this);
    $newEntry = ju_LinkedList$Entry__init_0();
    $newEntry.$item = $e;
    $newEntry.$previous = $this.$prevEntry;
    $newEntry.$next2 = $this.$nextEntry;
    if ($this.$prevEntry === null)
        $this.$this$0.$firstEntry = $newEntry;
    else
        $this.$prevEntry.$next2 = $newEntry;
    if ($this.$nextEntry === null)
        $this.$this$0.$lastEntry = $newEntry;
    else
        $this.$nextEntry.$previous = $newEntry;
    $this.$prevEntry = $newEntry;
    var$3 = $this.$this$0;
    var$3.$size0 = var$3.$size0 + 1 | 0;
    var$3 = $this.$this$0;
    var$3.$modCount = var$3.$modCount + 1 | 0;
    $this.$version = $this.$this$0.$modCount;
    $this.$currentEntry = null;
},
ju_LinkedList$SequentialListIterator_checkConcurrentModification = $this => {
    if ($this.$version >= $this.$this$0.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
};
function gj_KeyboardManager() {
    let a = this; jl_Object.call(a);
    a.$lastKeyTyped = null;
    a.$numKeys = 0;
    a.$keyLatched = null;
    a.$keyDown = null;
    a.$preventDefault = null;
    a.$maxNamedKey = 0;
    a.$keyNames = null;
    a.$jsKeyMap = null;
    a.$keyCodeMap = null;
    a.$gfKeyMap = null;
}
let gj_KeyboardManager__init_ = $this => {
    jl_Object__init_($this);
    $this.$numKeys = 100;
    $this.$keyLatched = $rt_createBooleanArray($this.$numKeys);
    $this.$keyDown = $rt_createBooleanArray($this.$numKeys);
    $this.$preventDefault = $rt_createBooleanArray($this.$numKeys);
    $this.$maxNamedKey = 0;
    $this.$jsKeyMap = ju_HashMap__init_();
    $this.$keyCodeMap = ju_HashMap__init_();
    $this.$gfKeyMap = ju_HashMap__init_();
    gj_KeyboardManager_addAllKeys($this);
    gj_KeyboardManager_buildKeyNameArray($this);
},
gj_KeyboardManager__init_0 = () => {
    let var_0 = new gj_KeyboardManager();
    gj_KeyboardManager__init_(var_0);
    return var_0;
},
gj_KeyboardManager_addAllKeys = $this => {
    gj_KeyboardManager_addKey($this, $rt_s(106), 37, $rt_s(107), 1);
    gj_KeyboardManager_addKey($this, $rt_s(108), 38, $rt_s(109), 1);
    gj_KeyboardManager_addKey($this, $rt_s(110), 39, $rt_s(111), 1);
    gj_KeyboardManager_addKey($this, $rt_s(112), 40, $rt_s(113), 1);
    gj_KeyboardManager_addKey($this, $rt_s(114), 32, $rt_s(115), 1);
    gj_KeyboardManager_addKey($this, $rt_s(116), 13, $rt_s(117), 1);
    gj_KeyboardManager_addKey($this, $rt_s(118), 27, $rt_s(119), 1);
    gj_KeyboardManager_addKey($this, $rt_s(120), 112, $rt_s(121), 0);
    gj_KeyboardManager_addKey($this, $rt_s(122), 113, $rt_s(123), 0);
    gj_KeyboardManager_addKey($this, $rt_s(124), 114, $rt_s(125), 0);
    gj_KeyboardManager_addKey($this, $rt_s(126), 115, $rt_s(127), 0);
    gj_KeyboardManager_addKey($this, $rt_s(128), 116, $rt_s(129), 0);
    gj_KeyboardManager_addKey($this, $rt_s(130), 117, $rt_s(131), 0);
    gj_KeyboardManager_addKey($this, $rt_s(132), 118, $rt_s(133), 0);
    gj_KeyboardManager_addKey($this, $rt_s(134), 119, $rt_s(135), 0);
    gj_KeyboardManager_addKey($this, $rt_s(136), 120, $rt_s(137), 0);
    gj_KeyboardManager_addKey($this, $rt_s(138), 121, $rt_s(139), 0);
    gj_KeyboardManager_addKey($this, $rt_s(140), 122, $rt_s(141), 0);
    gj_KeyboardManager_addKey($this, $rt_s(142), 123, $rt_s(143), 0);
    gj_KeyboardManager_addKey($this, $rt_s(144), 8, $rt_s(145), 0);
    gj_KeyboardManager_addKey($this, $rt_s(146), 16, $rt_s(147), 0);
    gj_KeyboardManager_addKey($this, $rt_s(148), 17, $rt_s(149), 0);
    gj_KeyboardManager_addKey($this, $rt_s(150), 222, $rt_s(150), 0);
    $this.$jsKeyMap.$put($rt_s(151), $this.$gfKeyMap.$get0($rt_s(107)));
    $this.$jsKeyMap.$put($rt_s(152), $this.$gfKeyMap.$get0($rt_s(109)));
    $this.$jsKeyMap.$put($rt_s(153), $this.$gfKeyMap.$get0($rt_s(111)));
    $this.$jsKeyMap.$put($rt_s(154), $this.$gfKeyMap.$get0($rt_s(113)));
    $this.$jsKeyMap.$put($rt_s(155), $this.$gfKeyMap.$get0($rt_s(115)));
},
gj_KeyboardManager_addKey = ($this, $jsName, $keyCode, $gfName, $inhibitDefault) => {
    if ($jsName !== null)
        $this.$jsKeyMap.$put($jsName, jl_Integer_valueOf($this.$maxNamedKey));
    if ($keyCode)
        $this.$keyCodeMap.$put(jl_Integer_valueOf($keyCode), jl_Integer_valueOf($this.$maxNamedKey));
    $this.$gfKeyMap.$put($gfName, jl_Integer_valueOf($this.$maxNamedKey));
    $this.$preventDefault.data[$this.$maxNamedKey] = $inhibitDefault;
    $this.$maxNamedKey = $this.$maxNamedKey + 1 | 0;
},
gj_KeyboardManager_buildKeyNameArray = $this => {
    let var$1, $gfKey, $latchIdx;
    $this.$keyNames = $rt_createArray(jl_String, $this.$maxNamedKey);
    var$1 = ($this.$gfKeyMap.$keySet()).$iterator();
    while (var$1.$hasNext()) {
        $gfKey = var$1.$next();
        $latchIdx = ($this.$gfKeyMap.$get0($gfKey)).$intValue();
        $this.$keyNames.data[$latchIdx] = $gfKey;
    }
},
gj_KeyboardManager_handleEvent = ($this, $event) => {
    let $key, $type, $keydown, $keyup, $keyname, $keyCode, $i, $keyLower, $idx;
    $key = $rt_str($event.key);
    $type = $rt_str($event.type);
    $keydown = $type.$equals($rt_s(156));
    $keyup = $type.$equals($rt_s(157));
    $keyname = null;
    if (!(!$keydown && !$keyup)) {
        if ($key === null) {
            $keyCode = $event.keyCode;
            $i = $this.$keyCodeMap.$get0(jl_Integer_valueOf($keyCode));
            if ($i !== null)
                $key = $keyname;
            else if ($keyCode >= 48 && $keyCode <= 57) {
                $i = jl_Integer_valueOf($this.$maxNamedKey);
                $key = (((jl_StringBuilder__init_()).$append8($rt_s(57))).$append0($keyCode & 65535)).$toString();
                gj_KeyboardManager_addKey($this, null, $keyCode, $key, 0);
            } else if ($keyCode < 65)
                $key = $keyname;
            else if ($keyCode > 90)
                $key = $keyname;
            else {
                $i = jl_Integer_valueOf($this.$maxNamedKey);
                $key = (((jl_StringBuilder__init_()).$append8($rt_s(57))).$append1(($keyCode & 65535) + 32 | 0)).$toString();
                gj_KeyboardManager_addKey($this, null, $keyCode, $key, 0);
            }
        } else {
            $keyLower = $key.$toLowerCase();
            $i = $this.$jsKeyMap.$get0($key);
            if ($i === null) {
                $i = $this.$jsKeyMap.$get0($keyLower);
                if ($i !== null)
                    $this.$jsKeyMap.$put($key, $i);
            }
            if ($key.$length() > 2)
                $key = $keyname;
            else if ($i === null && $key.$length() <= 2) {
                $i = jl_Integer_valueOf($this.$maxNamedKey);
                gj_KeyboardManager_addKey($this, $keyLower, 0, $keyLower, 0);
            }
        }
        if ($i !== null) {
            $idx = $i.$intValue();
            if ($idx < $this.$preventDefault.data.length && $this.$preventDefault.data[$idx])
                $event.preventDefault();
            gj_KeyboardManager_checkKeyArrays($this, $i.$intValue());
            $this.$keyDown.data[$idx] = $keydown;
            if ($keydown) {
                $this.$keyLatched.data[$idx] = 1;
                $this.$lastKeyTyped = $idx >= $this.$keyNames.data.length ? null : $this.$keyNames.data[$idx];
                if ($this.$lastKeyTyped === null)
                    $this.$lastKeyTyped = $key;
            }
        }
    }
},
gj_KeyboardManager_checkKeyArrays = ($this, $keycode) => {
    let $nsize, $newKeyLatched, $newKeyDown, $i, var$6;
    $nsize = $keycode + 1 | 0;
    if ($nsize > $this.$numKeys) {
        $newKeyLatched = $rt_createBooleanArray($nsize);
        $newKeyDown = $rt_createBooleanArray($nsize);
        $i = 0;
        while ($i < $this.$numKeys) {
            var$6 = $newKeyDown.data;
            $newKeyLatched.data[$i] = $this.$keyLatched.data[$i];
            var$6[$i] = $this.$keyDown.data[$i];
            $i = $i + 1 | 0;
        }
        $this.$keyLatched = $newKeyLatched;
        $this.$keyDown = $newKeyDown;
        $this.$numKeys = $nsize;
    }
},
gj_KeyboardManager_getKey = $this => {
    let $r;
    $r = $this.$lastKeyTyped;
    $this.$lastKeyTyped = null;
    return $r;
},
gj_KeyboardManager_clearLatches = $this => {
    let $i;
    $i = 0;
    while ($i < $this.$keyLatched.data.length) {
        $this.$keyLatched.data[$i] = 0;
        $i = $i + 1 | 0;
    }
},
gj_KeyboardManager_handleEvent0 = ($this, var$1) => {
    $this.$handleEvent2(var$1);
},
gj_KeyboardManager_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
CardFireball = $rt_classWithoutFields(Card),
CardFireball__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostFireball;
        $ptr = 1;
    case 1:
        TroopAllyGhostFireball__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardFireball__init_0 = () => {
    let var_0 = new CardFireball();
    CardFireball__init_(var_0);
    return var_0;
},
CardFireball_act = $this => {
    Card_act($this);
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode2 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_ = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_6 = () => {
    let var_0 = new jl_String();
    jl_String__init_(var_0);
    return var_0;
},
jl_String__init_2 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_5 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_2(var_1, var_0);
    return var_1;
},
jl_String__init_3 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_0 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_3(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_1 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_4(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + $prefix.$length() | 0) > $this.$length())
        return 0;
    $i = 0;
    while ($i < $prefix.$length()) {
        var$4 = $prefix.$charAt($i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != $this.$charAt($toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
},
jl_String_startsWith0 = ($this, $prefix) => {
    if ($this === $prefix)
        return 1;
    return $this.$startsWith0($prefix, 0);
},
jl_String_endsWith = ($this, $suffix) => {
    let $j, $i, var$4, var$5;
    if ($this === $suffix)
        return 1;
    if ($suffix.$length() > $this.$length())
        return 0;
    $j = 0;
    $i = $this.$length() - $suffix.$length() | 0;
    while ($i < $this.$length()) {
        var$4 = $this.$charAt($i);
        var$5 = $j + 1 | 0;
        if (var$4 != $suffix.$charAt($j))
            return 0;
        $i = $i + 1 | 0;
        $j = var$5;
    }
    return 1;
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_indexOf0 = ($this, $ch) => {
    return $this.$indexOf0($ch, 0);
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_0($this.$nativeString.substring($beginIndex, $endIndex));
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_substring0 = ($this, $beginIndex) => {
    return $this.$substring($beginIndex, $this.$length());
},
jl_String_subSequence = ($this, $beginIndex, $endIndex) => {
    return $this.$substring($beginIndex, $endIndex);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$charAt($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(37) : $obj.$toString();
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode2) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode2 = (31 * $this.$hashCode2 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode2;
},
jl_String_toLowerCase = $this => {
    let $lowerCase;
    $lowerCase = $this.$nativeString.toLowerCase();
    if ($lowerCase !== $this.$nativeString)
        $this = jl_String__init_0($lowerCase);
    return $this;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_6();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_118_0__init_0();
},
gp_SimulationDelegate = $rt_classWithoutFields(0);
function gj_Client$2() {
    jl_Object.call(this);
    this.$this$016 = null;
}
let gj_Client$2__init_ = ($this, $this$0) => {
    $this.$this$016 = $this$0;
    jl_Object__init_($this);
},
gj_Client$2__init_0 = var_0 => {
    let var_1 = new gj_Client$2();
    gj_Client$2__init_(var_1, var_0);
    return var_1;
},
gj_Client$2_setSpeed = ($this, $speed) => {
    return;
};
function ZoneTroopsOverlay() {
    let a = this; Overlay.call(a);
    a.$start1 = null;
    a.$left0 = null;
    a.$right0 = null;
    a.$full = null;
}
let ZoneTroopsOverlay__init_ = $this => {
    let var$1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        Overlay__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(158);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$start1 = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(159);
        $ptr = 3;
    case 3:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$left0 = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(160);
        $ptr = 4;
    case 4:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$right0 = var$1;
        var$1 = new g_GreenfootImage;
        var$2 = $rt_s(161);
        $ptr = 5;
    case 5:
        g_GreenfootImage__init_(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $this.$full = var$1;
        $this.$setImage(null);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, $ptr);
},
ZoneTroopsOverlay__init_0 = () => {
    let var_0 = new ZoneTroopsOverlay();
    ZoneTroopsOverlay__init_(var_0);
    return var_0;
},
ZoneTroopsOverlay_act = $this => {
    $this.$checkTowers();
},
ZoneTroopsOverlay_checkTowers = $this => {
    a: {
        if (($this.$getObjectsInRange0(600, $rt_cls(TroopAllyGhost))).$isEmpty())
            $this.$setImage(null);
        else {
            b: {
                if (!($this.$getObjectsInRange0(600, $rt_cls(TroopAllyGhost))).$isEmpty()) {
                    if ((($this.$getObjectsInRange0(600, $rt_cls(TroopAllyGhost))).$get(0)).$type1.$equals($rt_s(31)))
                        break b;
                    if ((($this.$getObjectsInRange0(600, $rt_cls(TroopAllyGhost))).$get(0)).$type1.$equals($rt_s(35)))
                        break b;
                }
                $this.$setImage(null);
                break a;
            }
            if (!(($this.$getWorld()).$getObjectsAt(95, 130, $rt_cls(TowerDestroyed))).$isEmpty() && !(($this.$getWorld()).$getObjectsAt(305, 130, $rt_cls(TowerDestroyed))).$isEmpty())
                $this.$setImage($this.$full);
            else if (!(($this.$getWorld()).$getObjectsAt(95, 130, $rt_cls(TowerDestroyed))).$isEmpty())
                $this.$setImage($this.$left0);
            else if ((($this.$getWorld()).$getObjectsAt(305, 130, $rt_cls(TowerDestroyed))).$isEmpty())
                $this.$setImage($this.$start1);
            else
                $this.$setImage($this.$right0);
        }
    }
};
function gj_Client$1() {
    otc_ResourceSource.call(this);
    this.$this$010 = null;
}
let gj_Client$1__init_ = ($this, $this$0) => {
    $this.$this$010 = $this$0;
    otc_ResourceSource__init_($this);
},
gj_Client$1__init_0 = var_0 => {
    let var_1 = new gj_Client$1();
    gj_Client$1__init_(var_1, var_0);
    return var_1;
};
function gj_Client$4() {
    jl_Object.call(this);
    this.$this$07 = null;
}
let gj_Client$4__init_ = ($this, $this$0) => {
    $this.$this$07 = $this$0;
    jl_Object__init_($this);
},
gj_Client$4__init_0 = var_0 => {
    let var_1 = new gj_Client$4();
    gj_Client$4__init_(var_1, var_0);
    return var_1;
},
CardGolem = $rt_classWithoutFields(Card),
CardGolem__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostGolem;
        $ptr = 1;
    case 1:
        TroopAllyGhostGolem__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardGolem__init_0 = () => {
    let var_0 = new CardGolem();
    CardGolem__init_(var_0);
    return var_0;
},
CardGolem_act = $this => {
    Card_act($this);
},
ge_SimulationListener = $rt_classWithoutFields(0);
function gj_Client$3() {
    let a = this; jl_Object.call(a);
    a.$val$speedSlider = null;
    a.$val$simulation = null;
    a.$val$resetButton = null;
    a.$val$playButton = null;
    a.$this$02 = null;
}
let gj_Client$3__init_ = ($this, $this$0, var$2, var$3, var$4, var$5) => {
    $this.$this$02 = $this$0;
    $this.$val$speedSlider = var$2;
    $this.$val$simulation = var$3;
    $this.$val$resetButton = var$4;
    $this.$val$playButton = var$5;
    jl_Object__init_($this);
},
gj_Client$3__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new gj_Client$3();
    gj_Client$3__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
gj_Client$3_simulationChanged = ($this, $e) => {
    if ($e.$getType0() == 2)
        $this.$val$speedSlider.value = $rt_ustr((((jl_StringBuilder__init_()).$append8($rt_s(57))).$append1($this.$val$simulation.$getSpeed())).$toString());
    else if (!$e.$getType0()) {
        $this.$val$speedSlider.disabled = !!0;
        $this.$val$resetButton.disabled = !!0;
        $this.$val$playButton.disabled = !!0;
        $this.$val$playButton.innerHTML = "Pause";
        (gj_Client_access$000($this.$this$02)).focus();
        gj_Client_access$102($this.$this$02, 0);
    } else if ($e.$getType0() == 1) {
        $this.$val$speedSlider.disabled = !!0;
        $this.$val$resetButton.disabled = !!0;
        $this.$val$playButton.disabled = !!0;
        $this.$val$playButton.innerHTML = "Run";
        gj_Client_access$102($this.$this$02, 1);
    } else if ($e.$getType0() == 3) {
        $this.$val$speedSlider.disabled = !!1;
        $this.$val$resetButton.disabled = !!0;
        $this.$val$playButton.disabled = !!1;
    }
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
};
function g_TreeActorSet$TasIterator() {
    let a = this; jl_Object.call(a);
    a.$setIterator = null;
    a.$currentSet = null;
    a.$actorIterator = null;
    a.$this$013 = null;
}
let g_TreeActorSet$TasIterator__init_ = ($this, $this$0) => {
    $this.$this$013 = $this$0;
    jl_Object__init_($this);
    $this.$setIterator = (g_TreeActorSet_access$000($this$0)).$iterator();
    $this.$currentSet = $this.$setIterator.$next();
    while ($this.$currentSet.$isEmpty() && $this.$setIterator.$hasNext()) {
        $this.$currentSet = $this.$setIterator.$next();
    }
    $this.$actorIterator = $this.$currentSet.$iterator();
},
g_TreeActorSet$TasIterator__init_0 = var_0 => {
    let var_1 = new g_TreeActorSet$TasIterator();
    g_TreeActorSet$TasIterator__init_(var_1, var_0);
    return var_1;
},
g_TreeActorSet$TasIterator_next0 = $this => {
    $this.$hasNext();
    return $this.$actorIterator.$next();
},
g_TreeActorSet$TasIterator_hasNext = $this => {
    if ($this.$actorIterator.$hasNext())
        return 1;
    if (!$this.$setIterator.$hasNext())
        return 0;
    a: {
        while (true) {
            if (!$this.$setIterator.$hasNext())
                break a;
            $this.$currentSet = $this.$setIterator.$next();
            if ($this.$currentSet.$isEmpty())
                continue;
            else
                break;
        }
    }
    $this.$actorIterator = $this.$currentSet.$iterator();
    return $this.$actorIterator.$hasNext();
},
g_TreeActorSet$TasIterator_next = $this => {
    return $this.$next0();
},
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException),
jl_UnsupportedOperationException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_UnsupportedOperationException__init_2 = () => {
    let var_0 = new jl_UnsupportedOperationException();
    jl_UnsupportedOperationException__init_(var_0);
    return var_0;
},
jl_UnsupportedOperationException__init_0 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_UnsupportedOperationException__init_1 = var_0 => {
    let var_1 = new jl_UnsupportedOperationException();
    jl_UnsupportedOperationException__init_0(var_1, var_0);
    return var_1;
},
otjde_MouseEventTarget = $rt_classWithoutFields(0),
otjde_MouseEventTarget_listenClick$static = ($this, $listener) => {
    $this.addEventListener("click", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectClick$static = ($this, $listener) => {
    $this.removeEventListener("click", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_listenDoubleClick$static = ($this, $listener) => {
    $this.addEventListener("dblclick", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectDoubleClick$static = ($this, $listener) => {
    $this.removeEventListener("dblclick", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_listenMouseDown$static = ($this, $listener) => {
    $this.addEventListener("mousedown", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectMouseDown$static = ($this, $listener) => {
    $this.removeEventListener("mousedown", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_listenMouseUp$static = ($this, $listener) => {
    $this.addEventListener("mouseup", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectMouseUp$static = ($this, $listener) => {
    $this.removeEventListener("mouseup", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_listenMouseEnter$static = ($this, $listener) => {
    $this.addEventListener("mouseenter", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectMouseEnter$static = ($this, $listener) => {
    $this.removeEventListener("mouseenter", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_listenMouseLeave$static = ($this, $listener) => {
    $this.addEventListener("mouseleave", otji_JS_function($listener, "handleEvent"));
},
otjde_MouseEventTarget_neglectMouseLeave$static = ($this, $listener) => {
    $this.removeEventListener("mouseleave", otji_JS_function($listener, "handleEvent"));
};
function ju_Hashtable() {
    let a = this; ju_Dictionary.call(a);
    a.$elementCount0 = 0;
    a.$elementData0 = null;
    a.$loadFactor = 0.0;
    a.$threshold0 = 0;
    a.$firstSlot = 0;
    a.$lastSlot = 0;
    a.$modCount2 = 0;
}
let ju_Hashtable_EMPTY_ENUMERATION = null,
ju_Hashtable_EMPTY_ITERATOR = null,
ju_Hashtable_$callClinit = () => {
    ju_Hashtable_$callClinit = $rt_eraseClinit(ju_Hashtable);
    ju_Hashtable__clinit_();
},
ju_Hashtable_newEntry = ($key, $value, $hash) => {
    ju_Hashtable_$callClinit();
    return ju_Hashtable$Entry__init_0($key, $value);
},
ju_Hashtable__init_ = $this => {
    ju_Hashtable_$callClinit();
    ju_Hashtable__init_0($this, 11);
},
ju_Hashtable__init_1 = () => {
    let var_0 = new ju_Hashtable();
    ju_Hashtable__init_(var_0);
    return var_0;
},
ju_Hashtable__init_0 = ($this, $capacity) => {
    ju_Hashtable_$callClinit();
    ju_Dictionary__init_($this);
    $this.$lastSlot = (-1);
    if ($capacity < 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    $this.$elementCount0 = 0;
    if (!$capacity)
        $capacity = 1;
    $this.$elementData0 = ju_Hashtable_newElementArray($this, $capacity);
    $this.$firstSlot = $this.$elementData0.data.length;
    $this.$loadFactor = 0.75;
    ju_Hashtable_computeMaxSize($this);
},
ju_Hashtable__init_2 = var_0 => {
    let var_1 = new ju_Hashtable();
    ju_Hashtable__init_0(var_1, var_0);
    return var_1;
},
ju_Hashtable_newElementArray = ($this, $size) => {
    return $rt_createArray(ju_Hashtable$Entry, $size);
},
ju_Hashtable_computeMaxSize = $this => {
    $this.$threshold0 = $this.$elementData0.data.length * $this.$loadFactor | 0;
},
ju_Hashtable_get = ($this, $key) => {
    let $hash, $index, $entry;
    jl_Object_monitorEnterSync($this);
    try {
        $hash = $key.$hashCode1();
        $index = ($hash & 2147483647) % $this.$elementData0.data.length | 0;
        $entry = $this.$elementData0.data[$index];
        while ($entry !== null) {
            if ($entry.$equalsKey($key, $hash))
                return $entry.$value;
            $entry = $entry.$next6;
        }
        return null;
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
ju_Hashtable_put = ($this, $key, $value) => {
    let $hash, var$4, $index, $entry, $result, var$8, var$9;
    jl_Object_monitorEnterSync($this);
    try {
        if ($key !== null && $value !== null) {
            $hash = $key.$hashCode1();
            var$4 = $hash & 2147483647;
            $index = var$4 % $this.$elementData0.data.length | 0;
            $entry = $this.$elementData0.data[$index];
            while ($entry !== null && !$entry.$equalsKey($key, $hash)) {
                $entry = $entry.$next6;
            }
            if ($entry !== null) {
                $result = $entry.$value;
                $entry.$value = $value;
                return $result;
            }
            $this.$modCount2 = $this.$modCount2 + 1 | 0;
            var$8 = $this.$elementCount0 + 1 | 0;
            $this.$elementCount0 = var$8;
            if (var$8 > $this.$threshold0) {
                $this.$rehash();
                $index = var$4 % $this.$elementData0.data.length | 0;
            }
            if ($index < $this.$firstSlot)
                $this.$firstSlot = $index;
            if ($index > $this.$lastSlot)
                $this.$lastSlot = $index;
            var$9 = ju_Hashtable_newEntry($key, $value, $hash);
            var$9.$next6 = $this.$elementData0.data[$index];
            $this.$elementData0.data[$index] = var$9;
            return null;
        }
        $rt_throw(jl_NullPointerException__init_0());
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
ju_Hashtable_rehash = $this => {
    let $length, $newLast, $newData, $i, var$5, $entry, $index, var$8, $entry_0;
    $length = ($this.$elementData0.data.length << 1) + 1 | 0;
    if (!$length)
        $length = 1;
    $newLast = (-1);
    $newData = ju_Hashtable_newElementArray($this, $length);
    $i = $this.$lastSlot + 1 | 0;
    var$5 = $length;
    while (true) {
        $i = $i + (-1) | 0;
        if ($i < $this.$firstSlot)
            break;
        $entry = $this.$elementData0.data[$i];
        while ($entry !== null) {
            $index = ($entry.$getKeyHash() & 2147483647) % $length | 0;
            if ($index < var$5)
                var$5 = $index;
            if ($index > $newLast)
                $newLast = $index;
            var$8 = $newData.data;
            $entry_0 = $entry.$next6;
            $entry.$next6 = var$8[$index];
            var$8[$index] = $entry;
            $entry = $entry_0;
        }
    }
    $this.$firstSlot = var$5;
    $this.$lastSlot = $newLast;
    $this.$elementData0 = $newData;
    ju_Hashtable_computeMaxSize($this);
},
ju_Hashtable__clinit_ = () => {
    ju_Hashtable_EMPTY_ENUMERATION = ju_Hashtable$1__init_0();
    ju_Hashtable_EMPTY_ITERATOR = ju_Hashtable$2__init_0();
};
function ju_Properties() {
    ju_Hashtable.call(this);
    this.$defaults = null;
}
let ju_Properties__init_ = $this => {
    ju_Hashtable__init_($this);
},
ju_Properties__init_0 = () => {
    let var_0 = new ju_Properties();
    ju_Properties__init_(var_0);
    return var_0;
},
ju_Properties_getProperty = ($this, $name) => {
    let $result, $property;
    $result = ju_Hashtable_get($this, $name);
    $property = !($result instanceof jl_String) ? null : $result;
    if ($property === null && $this.$defaults !== null)
        $property = $this.$defaults.$getProperty($name);
    return $property;
},
ju_Properties_load = ($this, $in) => {
    let $mode, $unicode, $count, $buf, $offset, $keyLength, $firstChar, $bis, $intVal, var$11, var$12, $temp, $nextChar, var$15, $newBuf, $digit, var$18, var$19;
    jl_Object_monitorEnterSync($this);
    try {
        if ($in === null)
            $rt_throw(jl_NullPointerException__init_0());
        $mode = 0;
        $unicode = 0;
        $count = 0;
        $buf = $rt_createCharArray(40);
        $offset = 0;
        $keyLength = (-1);
        $firstChar = 1;
        $bis = ji_BufferedInputStream__init_0($in);
        a: while (true) {
            $intVal = $bis.$read1();
            if ($intVal == (-1)) {
                if ($mode == 2 && $count < 4)
                    $rt_throw(jl_IllegalArgumentException__init_1($rt_s(162)));
                if ($mode != 1)
                    var$11 = $offset;
                else {
                    var$12 = $buf.data;
                    var$11 = $offset + 1 | 0;
                    var$12[$offset] = 0;
                }
                if ($keyLength == (-1) && var$11 > 0)
                    $keyLength = var$11;
                if ($keyLength >= 0) {
                    $temp = jl_String__init_1($buf, 0, var$11);
                    $this.$put($temp.$substring(0, $keyLength), $temp.$substring0($keyLength));
                }
                return;
            }
            var$12 = $buf.data;
            $nextChar = $intVal & 255 & 65535;
            var$15 = var$12.length;
            if ($offset != var$15)
                $newBuf = $buf;
            else {
                $newBuf = $rt_createCharArray(var$15 * 2 | 0);
                jl_System_fastArraycopy($buf, 0, $newBuf, 0, $offset);
            }
            if ($mode == 2) {
                $digit = jl_Character_digit($nextChar, 16);
                if ($digit >= 0) {
                    $unicode = ($unicode << 4) + $digit | 0;
                    $count = $count + 1 | 0;
                    if ($count < 4) {
                        $buf = $newBuf;
                        continue;
                    }
                } else if ($count <= 4)
                    break;
                var$12 = $newBuf.data;
                $mode = 0;
                var$11 = $offset + 1 | 0;
                var$12[$offset] = $unicode & 65535;
                if ($nextChar != 10) {
                    $buf = $newBuf;
                    $offset = var$11;
                    continue;
                }
                $offset = var$11;
            }
            if ($mode == 1)
                b: {
                    $mode = 0;
                    switch ($nextChar) {
                        case 10:
                            break;
                        case 13:
                            $mode = 3;
                            $buf = $newBuf;
                            continue a;
                        case 98:
                            $nextChar = 8;
                            break b;
                        case 102:
                            $nextChar = 12;
                            break b;
                        case 110:
                            $nextChar = 10;
                            break b;
                        case 114:
                            $nextChar = 13;
                            break b;
                        case 116:
                            $nextChar = 9;
                            break b;
                        case 117:
                            $mode = 2;
                            $unicode = 0;
                            $count = 0;
                            $buf = $newBuf;
                            continue a;
                        default:
                            break b;
                    }
                    $mode = 5;
                    $buf = $newBuf;
                    continue a;
                }
            else {
                c: {
                    d: {
                        e: {
                            switch ($nextChar) {
                                case 10:
                                    if ($mode != 3)
                                        break e;
                                    $mode = 5;
                                    $buf = $newBuf;
                                    continue a;
                                case 13:
                                    break e;
                                case 33:
                                case 35:
                                    break d;
                                case 58:
                                case 61:
                                    if ($keyLength != (-1))
                                        break c;
                                    $mode = 0;
                                    var$11 = $offset;
                                    $keyLength = $offset;
                                    $buf = $newBuf;
                                    $offset = var$11;
                                    continue a;
                                case 92:
                                    break;
                                default:
                                    break c;
                            }
                            if ($mode == 4)
                                $keyLength = $offset;
                            $mode = 1;
                            $buf = $newBuf;
                            continue a;
                        }
                        if ($mode == 3) {
                            $mode = 5;
                            $buf = $newBuf;
                            continue a;
                        }
                        f: {
                            $mode = 0;
                            $firstChar = 1;
                            if ($offset <= 0) {
                                if ($offset)
                                    break f;
                                if ($keyLength)
                                    break f;
                            }
                            if ($keyLength == (-1))
                                $keyLength = $offset;
                            $temp = jl_String__init_1($newBuf, 0, $offset);
                            var$18 = $temp.$substring(0, $keyLength);
                            var$19 = $temp.$substring0($keyLength);
                            $this.$put(var$18, var$19);
                        }
                        $keyLength = (-1);
                        $offset = 0;
                        $buf = $newBuf;
                        continue a;
                    }
                    if ($firstChar) {
                        while (true) {
                            var$11 = $bis.$read1();
                            if (var$11 == (-1))
                                break;
                            var$11 = var$11 & 65535;
                            if (var$11 == 13) {
                                $buf = $newBuf;
                                continue a;
                            }
                            if (var$11 != 10)
                                continue;
                            else {
                                $buf = $newBuf;
                                continue a;
                            }
                        }
                        $buf = $newBuf;
                        continue a;
                    }
                }
                if (jl_Character_isWhitespace($nextChar)) {
                    if ($mode == 3)
                        $mode = 5;
                    if (!$offset) {
                        $buf = $newBuf;
                        continue;
                    }
                    if ($offset == $keyLength) {
                        $buf = $newBuf;
                        continue;
                    }
                    if ($mode == 5) {
                        $buf = $newBuf;
                        continue;
                    }
                    if ($keyLength == (-1)) {
                        $mode = 4;
                        $buf = $newBuf;
                        continue;
                    }
                }
                if (!($mode != 5 && $mode != 3))
                    $mode = 0;
            }
            $firstChar = 0;
            if ($mode == 4) {
                $mode = 0;
                $keyLength = $offset;
            }
            var$12 = $newBuf.data;
            var$11 = $offset + 1 | 0;
            var$12[$offset] = $nextChar;
            $buf = $newBuf;
            $offset = var$11;
        }
        $rt_throw(jl_IllegalArgumentException__init_1($rt_s(163)));
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
TroopAllyGhostPekkaMini = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostPekkaMini__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = $rt_s(31);
        var$3 = $rt_s(15);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostPekkaMini__init_0 = () => {
    let var_0 = new TroopAllyGhostPekkaMini();
    TroopAllyGhostPekkaMini__init_(var_0);
    return var_0;
},
TroopAllyGhostPekkaMini_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyPekkaMini;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyPekkaMini__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
},
TroopAllyGhostFireball = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostFireball__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 4;
        var$2 = $rt_s(58);
        var$3 = $rt_s(19);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostFireball__init_0 = () => {
    let var_0 = new TroopAllyGhostFireball();
    TroopAllyGhostFireball__init_(var_0);
    return var_0;
},
TroopAllyGhostFireball_act = $this => {
    let $bar, $mouse, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new SpellAllyFireball;
                var$5 = $this.$getX();
                var$6 = $this.$getY();
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        SpellAllyFireball__init_(var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, 200, 550);
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyGhostGolem = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostGolem__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 8;
        var$2 = $rt_s(31);
        var$3 = $rt_s(41);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostGolem__init_0 = () => {
    let var_0 = new TroopAllyGhostGolem();
    TroopAllyGhostGolem__init_(var_0);
    return var_0;
},
TroopAllyGhostGolem_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyGolem;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyGolem__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_0(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_1 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_2(var_1, var_0);
    return var_1;
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NumberFormatException__init_1 = $this => {
    jl_IllegalArgumentException__init_0($this);
},
jl_NumberFormatException__init_2 = () => {
    let var_0 = new jl_NumberFormatException();
    jl_NumberFormatException__init_1(var_0);
    return var_0;
},
jl_NumberFormatException__init_ = ($this, $message) => {
    jl_IllegalArgumentException__init_2($this, $message);
},
jl_NumberFormatException__init_0 = var_0 => {
    let var_1 = new jl_NumberFormatException();
    jl_NumberFormatException__init_(var_1, var_0);
    return var_1;
},
gc_NeighbourCollisionQuery = $rt_classWithoutFields(),
gc_NeighbourCollisionQuery__init_ = $this => {
    jl_Object__init_($this);
},
gc_NeighbourCollisionQuery__init_0 = () => {
    let var_0 = new gc_NeighbourCollisionQuery();
    gc_NeighbourCollisionQuery__init_(var_0);
    return var_0;
};
function CardChoice() {
    let a = this; g_Actor.call(a);
    a.$card = null;
    a.$isFixed = 0;
}
let CardChoice__init_ = ($this, $card) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$card = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$isFixed = 1;
        $this.$card = $card;
        $this.$getImage1();
        var$2 = new g_GreenfootImage;
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(164)), $card), $rt_s(11));
        var$3 = jl_StringBuilder_toString(var$3);
        $ptr = 2;
    case 2:
        g_GreenfootImage__init_(var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$scale(66, 79);
        $this.$setImage(var$2);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $card, var$2, var$3, $ptr);
},
CardChoice__init_0 = var_0 => {
    let var_1 = new CardChoice();
    CardChoice__init_(var_1, var_0);
    return var_1;
},
CardChoice_act = $this => {
    let $cardDeck, $mouse;
    $cardDeck = $this.$getOneIntersectingObject0($rt_cls(CardDeck));
    $mouse = g_Greenfoot_getMouseInfo();
    if (g_Greenfoot_mouseClicked($this) && $cardDeck !== null && !$this.$isFixed && !$cardDeck.$isTouchingCardChoice) {
        $this.$setLocation($cardDeck.$getX(), $cardDeck.$getY());
        $this.$isFixed = 1;
    } else if (g_Greenfoot_mouseClicked($this) && !$this.$isFixed && !$this.$isTouching($rt_cls(CardChoice)))
        $this.$isFixed = 1;
    else if (g_Greenfoot_mouseClicked($this) && !$this.$isTouching($rt_cls(CardChoice)))
        $this.$isFixed = 0;
    else if (!$this.$isFixed && $mouse !== null)
        $this.$setLocation($mouse.$getX(), $mouse.$getY());
},
ProjectileFireballAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileFireballAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 10;
        var$3 = 2;
        var$4 = $rt_s(165);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileFireballAlly__init_0 = var_0 => {
    let var_1 = new ProjectileFireballAlly();
    ProjectileFireballAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileFireballAlly_act = $this => {
    ProjectileAlly_act($this);
},
CardDragonBaby = $rt_classWithoutFields(Card),
CardDragonBaby__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostDragonBaby;
        $ptr = 1;
    case 1:
        TroopAllyGhostDragonBaby__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardDragonBaby__init_0 = () => {
    let var_0 = new CardDragonBaby();
    CardDragonBaby__init_(var_0);
    return var_0;
},
CardDragonBaby_act = $this => {
    Card_act($this);
};
function gc_WorldHandler() {
    let a = this; jl_Object.call(a);
    a.$canvas = null;
    a.$theWorld = null;
    a.$simulation = null;
    a.$keyboardManager = null;
    a.$mouseManager = null;
    a.$touchManager = null;
    a.$onMenuHandler = null;
    a.$fontMetrics = null;
    a.$fontSize = 0;
    a.$repaintScheduled = 0;
}
let gc_WorldHandler_instance = null,
gc_WorldHandler__init_ = ($this, $canvas) => {
    let var$2, var$3;
    jl_Object__init_($this);
    $this.$repaintScheduled = 0;
    $this.$canvas = $canvas;
    $this.$keyboardManager = gj_KeyboardManager__init_0();
    otjde_KeyboardEventTarget_listenKeyDown$static($canvas, otji_JSWrapper_unwrap($this.$keyboardManager));
    otjde_KeyboardEventTarget_listenKeyUp$static($canvas, otji_JSWrapper_unwrap($this.$keyboardManager));
    otjde_KeyboardEventTarget_listenKeyPress$static($canvas, otji_JSWrapper_unwrap($this.$keyboardManager));
    $this.$mouseManager = gj_MouseManager__init_0($this);
    $this.$touchManager = gj_TouchManager__init_0($this.$mouseManager);
    $this.$onMenuHandler = otji_JSWrapper_unwrap(gc_WorldHandler$1__init_0($this));
    var$2 = $this.$onMenuHandler;
    $canvas.addEventListener("contextmenu", otji_JS_function(var$2, "handleEvent"));
    var$3 = 0;
    $canvas.tabIndex = var$3;
    $canvas.focus();
},
gc_WorldHandler__init_0 = var_0 => {
    let var_1 = new gc_WorldHandler();
    gc_WorldHandler__init_(var_1, var_0);
    return var_1;
},
gc_WorldHandler_initialise = $canvas => {
    gc_WorldHandler_instance = gc_WorldHandler__init_0($canvas);
},
gc_WorldHandler_enableMouseListening = $this => {
    let var$1, var$2;
    otjde_MouseEventTarget_listenClick$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_listenDoubleClick$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_listenMouseDown$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_listenMouseUp$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_listenMouseEnter$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_listenMouseLeave$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    var$1 = $this.$canvas;
    var$2 = $this.$mouseManager;
    var$1.addEventListener("mousemove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.addEventListener("touchstart", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.addEventListener("touchend", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.addEventListener("touchcancel", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.addEventListener("touchmove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
},
gc_WorldHandler_disableMouseListening = $this => {
    let var$1, var$2;
    otjde_MouseEventTarget_neglectClick$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_neglectDoubleClick$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_neglectMouseDown$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_neglectMouseUp$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_neglectMouseEnter$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    otjde_MouseEventTarget_neglectMouseLeave$static($this.$canvas, otji_JSWrapper_unwrap($this.$mouseManager));
    var$1 = $this.$canvas;
    var$2 = $this.$mouseManager;
    var$1.removeEventListener("mousemove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.removeEventListener("touchstart", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.removeEventListener("touchend", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.removeEventListener("touchcancel", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = $this.$canvas;
    var$2 = $this.$touchManager;
    var$1.removeEventListener("touchmove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
},
gc_WorldHandler_getInstance = () => {
    return gc_WorldHandler_instance;
},
gc_WorldHandler_getKeyboardManager = $this => {
    return $this.$keyboardManager;
},
gc_WorldHandler_getMouseManager = $this => {
    return $this.$mouseManager;
},
gc_WorldHandler_setInitialisingWorld = ($this, $world) => {
    return;
},
gc_WorldHandler_objectAddedToWorld = ($this, $object) => {
    return;
},
gc_WorldHandler_doRepaint = $this => {
    let var$1, $curWorld, $bgImage;
    var$1 = $this.$canvas.getContext("2d");
    $curWorld = $this.$theWorld;
    if ($curWorld !== null) {
        $bgImage = $curWorld.$getBackground();
        if ($bgImage !== null)
            g_ImageVisitor_drawImageToCanvas($bgImage, var$1, 0.0, 0.0);
        gc_WorldHandler_paintObjects($this, var$1);
        gc_WorldHandler_paintWorldText($this, $curWorld, var$1);
    }
},
gc_WorldHandler_getWorld = $this => {
    return $this.$theWorld;
},
gc_WorldHandler_setWorld = ($this, $world) => {
    let var$2, var$3, var$4;
    $this.$theWorld = $world;
    var$2 = $this.$canvas;
    var$3 = g_WorldVisitor_getWidthInPixels($world);
    var$2.width = var$3;
    var$2 = $this.$canvas;
    var$4 = g_WorldVisitor_getHeightInPixels($world);
    var$2.height = var$4;
    gc_WorldHandler_doRepaint($this);
    $this.$simulation.$worldCreated(ge_WorldEvent__init_($world));
    $this.$enableMouseListening();
},
gc_WorldHandler_repaint = $this => {
    if (!$this.$repaintScheduled) {
        $this.$repaintScheduled = 1;
        requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(gc_WorldHandler$2__init_0($this)), "doRepaint"));
    }
},
gc_WorldHandler_paintObjects = ($this, $g) => {
    let $world, $objects, $paintSeq, $iter, $thing, $cellSize, $image, var$9, $halfWidth, $halfHeight, $ax, $ay, var$14, var$15, $xCenter, $paintX, $yCenter, $paintY, $rotation, $$je;
    $world = $this.$theWorld;
    $objects = g_WorldVisitor_getObjectsListInPaintOrder($world);
    $paintSeq = 0;
    $iter = $objects.$iterator();
    while ($iter.$hasNext()) {
        $thing = $iter.$next();
        $cellSize = g_WorldVisitor_getCellSize($world);
        $image = g_ActorVisitor_getDisplayImage($thing);
        if ($image !== null) {
            var$9 = $paintSeq + 1 | 0;
            g_ActorVisitor_setLastPaintSeqNum($thing, $paintSeq);
            $halfWidth = $image.$getWidth() / 2.0;
            $halfHeight = $image.$getHeight() / 2.0;
            a: {
                try {
                    $ax = g_ActorVisitor_getX($thing);
                    $ay = g_ActorVisitor_getY($thing);
                    var$14 = $rt_imul($ax, $cellSize);
                    var$15 = $cellSize / 2.0;
                    $xCenter = var$14 + var$15;
                    $paintX = jl_Math_floor($xCenter - $halfWidth) | 0;
                    $yCenter = $rt_imul($ay, $cellSize) + var$15;
                    $paintY = jl_Math_floor($yCenter - $halfHeight) | 0;
                    $rotation = g_ActorVisitor_getRotation($thing);
                    if (!$rotation) {
                        $g.globalAlpha = $image.$getTransparency() / 255.0;
                        g_ImageVisitor_drawImageToCanvas($image, $g, $paintX, $paintY);
                    } else {
                        $g.save();
                        $g.translate($xCenter, $yCenter);
                        $g.rotate(jl_Math_toRadians($rotation));
                        $g.translate( -$xCenter,  -$yCenter);
                        $g.globalAlpha = $image.$getTransparency() / 255.0;
                        g_ImageVisitor_drawImageToCanvas($image, $g, $paintX, $paintY);
                        $g.restore();
                    }
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_IllegalStateException) {
                    } else {
                        throw $$e;
                    }
                }
            }
            $g.globalAlpha = 1.0;
            $paintSeq = var$9;
        }
    }
},
gc_WorldHandler_paintWorldText = ($this, $world, $g) => {
    let $labels, $textHeight, $scaleFactor, var$6, $cellsize, $label;
    $labels = g_WorldVisitor_getTextLabels($world);
    if ($labels.$isEmpty())
        return;
    if ($this.$fontMetrics === null) {
        $textHeight = gu_GraphicsUtilities_getFontHeightPx($rt_s(166));
        $scaleFactor = 25.0 / $textHeight;
        $this.$fontSize = 25.0 * $scaleFactor | 0;
        $this.$fontMetrics = gu_GraphicsUtilities_getFontMetricsPx(((((jl_StringBuilder__init_()).$append8($rt_s(167))).$append1($this.$fontSize)).$append8($rt_s(168))).$toString());
    }
    var$6 = $rt_ustr(((((jl_StringBuilder__init_()).$append8($rt_s(167))).$append1($this.$fontSize)).$append8($rt_s(168))).$toString());
    $g.font = var$6;
    var$6 = "#FFFFFF";
    $g.fillStyle = var$6;
    var$6 = "#000000";
    $g.strokeStyle = var$6;
    $cellsize = g_WorldVisitor_getCellSize($world);
    var$6 = $labels.$iterator();
    while (var$6.$hasNext()) {
        $label = var$6.$next();
        $label.$draw($g, $this.$fontMetrics, $cellsize);
    }
},
gc_WorldHandler_getObject = ($world, $x, $y) => {
    let $objectsThere, $iter, $topmostActor, $seq, $actor, $actorSeq;
    if ($world === null)
        return null;
    $objectsThere = g_WorldVisitor_getObjectsAtPixel($world, $x, $y);
    if ($objectsThere.$isEmpty())
        return null;
    $iter = $objectsThere.$iterator();
    $topmostActor = $iter.$next();
    $seq = g_ActorVisitor_getLastPaintSeqNum($topmostActor);
    while ($iter.$hasNext()) {
        $actor = $iter.$next();
        $actorSeq = g_ActorVisitor_getLastPaintSeqNum($actor);
        if ($actorSeq > $seq) {
            $topmostActor = $actor;
            $seq = $actorSeq;
        }
    }
    return $topmostActor;
},
gc_WorldHandler_addWorldListener = ($this, $simulation) => {
    $this.$simulation = $simulation;
},
gc_WorldHandler_simulationChanged = ($this, $e) => {
    let $world;
    if ($e.$getType0() == 7) {
        $world = $this.$theWorld;
        if ($world !== null) {
            g_WorldVisitor_startSequence($world);
            $this.$mouseManager.$newActStarted();
        }
    }
},
gc_WorldHandler_hasWorld = $this => {
    return $this.$theWorld === null ? 0 : 1;
},
gc_WorldHandler_discardWorld = $this => {
    $this.$simulation.$worldRemoved(ge_WorldEvent__init_(null));
    $this.$disableMouseListening();
},
gc_WorldHandler_getTopMostActorAt = ($this, $x, $y) => {
    let $tr;
    $tr = $this.$canvas.getBoundingClientRect();
    return gc_WorldHandler_getObject($this.$theWorld, $x - $tr.left | 0, $y - $tr.top | 0);
},
gc_WorldHandler_getTranslatedX = ($this, $x) => {
    let $tr;
    $tr = $this.$canvas.getBoundingClientRect();
    return g_WorldVisitor_toCellFloor($this.$theWorld, $x - $tr.left | 0);
},
gc_WorldHandler_getTranslatedY = ($this, $y) => {
    let $tr;
    $tr = $this.$canvas.getBoundingClientRect();
    return g_WorldVisitor_toCellFloor($this.$theWorld, $y - $tr.top | 0);
},
gc_WorldHandler_access$000 = $x0 => {
    gc_WorldHandler_doRepaint($x0);
},
gc_WorldHandler_access$102 = ($x0, $x1) => {
    $x0.$repaintScheduled = $x1;
    return $x1;
},
TowerUpKing = $rt_classWithoutFields(TowerEnemyTower),
TowerUpKing__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 300;
        var$2 = 40;
        var$3 = 120;
        $ptr = 1;
    case 1:
        TowerEnemyTower__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TowerUpKing__init_0 = () => {
    let var_0 = new TowerUpKing();
    TowerUpKing__init_(var_0);
    return var_0;
},
TowerUpKing_act = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            var$1 = $this.$getWorld();
            var$2 = $this.$hp;
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(var$3, var$2);
            var$1.$showText(jl_StringBuilder_toString(var$3), $this.$getX(), $this.$getY() - 35 | 0);
            if ($this.$hp > 0) {
                if ($this.$hp < $this.$basehp)
                    break a;
                if (!($this.$getObjectsInRange0(200, $rt_cls(TowerDestroyed))).$isEmpty())
                    break a;
            }
            if ($this.$hp > 0)
                return;
            var$1 = $this.$getWorld();
            var$3 = new TowerDestroyed;
            $ptr = 1;
            continue main;
        }
        $ptr = 2;
        continue main;
    case 1:
        TowerDestroyed__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, $this.$getX(), $this.$getY());
        ($this.$getWorld()).$showText($rt_s(57), $this.$getX(), $this.$getY() - 35 | 0);
        ($this.$getWorld()).$allyCrowns = 3;
        ($this.$getWorld()).$removeObject($this);
        return;
    case 2:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
otjde_KeyboardEventTarget = $rt_classWithoutFields(0),
otjde_KeyboardEventTarget_listenKeyDown$static = ($this, $listener) => {
    $this.addEventListener("keydown", otji_JS_function($listener, "handleEvent"));
},
otjde_KeyboardEventTarget_listenKeyUp$static = ($this, $listener) => {
    $this.addEventListener("keyup", otji_JS_function($listener, "handleEvent"));
},
otjde_KeyboardEventTarget_listenKeyPress$static = ($this, $listener) => {
    $this.addEventListener("keypress", otji_JS_function($listener, "handleEvent"));
},
CardCannon = $rt_classWithoutFields(Card),
CardCannon__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostCannon;
        $ptr = 1;
    case 1:
        TroopAllyGhostCannon__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardCannon__init_0 = () => {
    let var_0 = new CardCannon();
    CardCannon__init_(var_0);
    return var_0;
},
CardCannon_act = $this => {
    Card_act($this);
},
jl_ClassNotFoundException = $rt_classWithoutFields(jl_ReflectiveOperationException),
jl_ClassNotFoundException__init_ = $this => {
    jl_ReflectiveOperationException__init_($this);
},
jl_ClassNotFoundException__init_0 = () => {
    let var_0 = new jl_ClassNotFoundException();
    jl_ClassNotFoundException__init_(var_0);
    return var_0;
};
function gj_MouseManager$1$handleEvent$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_00 = null;
    a.$_10 = null;
    a.$_20 = null;
}
let gj_MouseManager$1$handleEvent$lambda$_1_0__init_ = (var$0, var$1, var$2, var$3) => {
    jl_Object__init_(var$0);
    var$0.$_00 = var$1;
    var$0.$_10 = var$2;
    var$0.$_20 = var$3;
},
gj_MouseManager$1$handleEvent$lambda$_1_0__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gj_MouseManager$1$handleEvent$lambda$_1_0();
    gj_MouseManager$1$handleEvent$lambda$_1_0__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gj_MouseManager$1$handleEvent$lambda$_1_0_run = var$0 => {
    gj_MouseManager$1_lambda$handleEvent$0(var$0.$_00, var$0.$_10, var$0.$_20);
},
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalStateException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalStateException__init_2 = () => {
    let var_0 = new jl_IllegalStateException();
    jl_IllegalStateException__init_(var_0);
    return var_0;
},
jl_IllegalStateException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalStateException__init_0 = var_0 => {
    let var_1 = new jl_IllegalStateException();
    jl_IllegalStateException__init_1(var_1, var_0);
    return var_1;
},
TroopAllyGhostSkeleton = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostSkeleton__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 1;
        var$2 = $rt_s(31);
        var$3 = $rt_s(38);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostSkeleton__init_0 = () => {
    let var_0 = new TroopAllyGhostSkeleton();
    TroopAllyGhostSkeleton__init_(var_0);
    return var_0;
},
TroopAllyGhostSkeleton_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllySkeleton;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllySkeleton__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY() - 9 | 0);
        var$3 = $this.$getWorld();
        var$4 = new TroopAllySkeleton;
        $ptr = 2;
    case 2:
        TroopAllySkeleton__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() - 9 | 0, $this.$getY() + 7 | 0);
        var$3 = $this.$getWorld();
        var$4 = new TroopAllySkeleton;
        $ptr = 3;
    case 3:
        TroopAllySkeleton__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX() + 9 | 0, $this.$getY() + 7 | 0);
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
};
function ge_WorldEvent() {
    jl_Object.call(this);
    this.$world0 = null;
}
let ge_WorldEvent__init_0 = ($this, $world) => {
    jl_Object__init_($this);
    $this.$world0 = $world;
},
ge_WorldEvent__init_ = var_0 => {
    let var_1 = new ge_WorldEvent();
    ge_WorldEvent__init_0(var_1, var_0);
    return var_1;
},
TroopAllyGolem = $rt_classWithoutFields(TroopAllyGround),
TroopAllyGolem__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 420;
        var$2 = 18;
        var$3 = 30;
        var$4 = 1;
        var$5 = 2;
        var$6 = 77;
        $ptr = 1;
    case 1:
        TroopAllyGround__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 26;
        $this.$troopName = $rt_s(41);
        $this.$target = $rt_s(35);
        $this.$specialDeath = 1;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopAllyGolem__init_0 = () => {
    let var_0 = new TroopAllyGolem();
    TroopAllyGolem__init_(var_0);
    return var_0;
},
TroopAllyGolem_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopAlly_act($this);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopAllyGolem_checkHealth = $this => {
    let var$1, $enemy, $tower, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();$tower = $thread.pop();$enemy = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($this.$hp0 > 0)
            return;
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TroopEnemy))).$iterator();
        while (var$1.$hasNext()) {
            $enemy = var$1.$next();
            $enemy.$hp0 = $enemy.$hp0 - 20 | 0;
        }
        var$1 = ($this.$getObjectsInRange0(35, $rt_cls(TowerEnemy))).$iterator();
        while (var$1.$hasNext()) {
            $tower = var$1.$next();
            $tower.$hp = $tower.$hp - 13 | 0;
        }
        var$1 = $this.$getWorld();
        var$4 = new TroopAllyGolemite;
        $ptr = 1;
    case 1:
        TroopAllyGolemite__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$4, $this.$getX() - 5 | 0, $this.$getY());
        var$1 = $this.$getWorld();
        var$4 = new TroopAllyGolemite;
        $ptr = 2;
    case 2:
        TroopAllyGolemite__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$4, $this.$getX() + 5 | 0, $this.$getY());
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $enemy, $tower, var$4, $ptr);
},
jn_URL = $rt_classWithoutFields(),
jn_URL_streamHandlers = null,
jn_URL_streamHandlerFactory = null,
jn_URL_$callClinit = () => {
    jn_URL_$callClinit = $rt_eraseClinit(jn_URL);
    jn_URL__clinit_();
},
jn_URL_setURLStreamHandlerFactory = $streamFactory => {
    jn_URL_$callClinit();
    ju_Objects_requireNonNull0($streamFactory);
    jn_URL_streamHandlers.$clear();
    jn_URL_streamHandlerFactory = $streamFactory;
},
jn_URL__clinit_ = () => {
    jn_URL_streamHandlers = ju_HashMap__init_();
},
TroopEnemyAir = $rt_classWithoutFields(TroopEnemy),
TroopEnemyAir__init_ = ($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime) => {
    let var$7, var$8, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();$attackTime = $thread.pop();$timeSpeed = $thread.pop();$speed = $thread.pop();$range = $thread.pop();$attack = $thread.pop();$hp = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        TroopEnemy__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$hp0 = $hp;
        $this.$attack1 = $attack;
        $this.$range = $range;
        $this.$speed = $speed;
        $this.$baseSpeed = $speed;
        $this.$timeSpeed = $timeSpeed;
        $this.$speedSpeed = $timeSpeed;
        $this.$spriteTime0 = $attackTime;
        $this.$attackTime = $attackTime;
        $this.$attackSpeed = $attackTime;
        var$7 = new HealthBar;
        var$8 = 0;
        $ptr = 2;
    case 2:
        HealthBar__init_(var$7, $this, var$8);
        if ($rt_suspending()) {
            break main;
        }
        $this.$health = var$7;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $hp, $attack, $range, $speed, $timeSpeed, $attackTime, var$7, var$8, $ptr);
},
TroopEnemyAir__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new TroopEnemyAir();
    TroopEnemyAir__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
TroopEnemyDragonBaby = $rt_classWithoutFields(TroopEnemyAir),
TroopEnemyDragonBaby__init_ = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 100;
        var$2 = 10;
        var$3 = 60;
        var$4 = 1;
        var$5 = 1;
        var$6 = 47;
        $ptr = 1;
    case 1:
        TroopEnemyAir__init_($this, var$1, var$2, var$3, var$4, var$5, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageNumber = 16;
        $this.$troopName = $rt_s(32);
        $this.$target = $rt_s(13);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, var$5, var$6, $ptr);
},
TroopEnemyDragonBaby__init_0 = () => {
    let var_0 = new TroopEnemyDragonBaby();
    TroopEnemyDragonBaby__init_(var_0);
    return var_0;
},
TroopEnemyDragonBaby_act = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        ($this.$getWorld()).$addObject0($this.$health, $this.$getX(), $this.$getY() - 20 | 0);
        $ptr = 1;
    case 1:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        $this.$movement();
        $ptr = 2;
    case 2:
        $this.$changeSprite();
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 3;
    case 3:
        $this.$checkHealth();
        if ($rt_suspending()) {
            break main;
        }
        $this.$setRotation(180);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
TroopEnemyDragonBaby_findEnemy = $this => {
    let var$1, $king, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$king = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$speed = 1;
        $this.$distance = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TroopAlly))).$isEmpty())
            $this.$isBattlingTroop = 0;
        if (($this.$getObjectsInRange0($this.$range, $rt_cls(TowerAlly))).$isEmpty())
            $this.$isBattlingTower = 0;
        a: {
            if (!($this.$getObjectsInRange0(120, $rt_cls(TroopAlly))).$isEmpty() && !$this.$isBattlingTower) {
                if (!($this.$ally !== null && $this.$ally.$getWorld() !== null))
                    $this.$ally = ($this.$getObjectsInRange0(120, $rt_cls(TroopAlly))).$get(0);
                $this.$turnTowards($this.$ally.$getX(), $this.$ally.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$ally.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance > $this.$range)
                    break a;
                $this.$isBattlingTroop = 1;
                $this.$speed = 0;
                $this.$attackTime = $this.$attackTime - 1 | 0;
                if ($this.$attackTime)
                    break a;
                var$1 = $this.$ally;
                $ptr = 1;
                continue main;
            }
            if (!($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$isEmpty() && !$this.$isBattlingTroop) {
                if (!($this.$tower !== null && $this.$tower.$getWorld() !== null))
                    $this.$tower = ($this.$getObjectsInRange0(100, $rt_cls(TowerAlly))).$get(0);
                $this.$turnTowards($this.$tower.$getX(), $this.$tower.$getY());
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getY() - $this.$getY() | 0), 2.0) | 0;
                $this.$distance = $this.$distance + jl_Math_pow(jl_Math_abs($this.$tower.$getX() - $this.$getX() | 0), 2.0) | 0;
                $this.$distance = jl_Math_sqrt($this.$distance) | 0;
                if ($this.$distance > $this.$range)
                    break a;
                $this.$isBattlingTower = 1;
                $this.$speed = 0;
                $this.$attackTime = $this.$attackTime - 1 | 0;
                if ($this.$attackTime)
                    break a;
                else {
                    var$1 = $this.$tower;
                    $ptr = 2;
                    continue main;
                }
            }
            if (!($this.$getObjectsInRange0(50, $rt_cls(TowerDestroyed))).$isEmpty() && !($this.$getObjectsInRange0(500, $rt_cls(TowerDownKing))).$isEmpty()) {
                $king = (($this.$getWorld()).$getObjects($rt_cls(TowerDownKing))).$get(0);
                $this.$turnTowards($king.$getX(), $king.$getY());
            } else
                $this.$setRotation(90);
        }
        return;
    case 1:
        $this.$createArrow(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    case 2:
        $this.$createArrow0(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $king, $ptr);
},
TroopEnemyDragonBaby_createArrow = ($this, $ally) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$ally = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballEnemy;
        $ptr = 1;
    case 1:
        ProjectileFireballEnemy__init_(var$3, $ally);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ally, var$2, var$3, $ptr);
},
TroopEnemyDragonBaby_createArrow0 = ($this, $tower) => {
    let var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$tower = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = $this.$getWorld();
        var$3 = new ProjectileFireballEnemy;
        $ptr = 1;
    case 1:
        ProjectileFireballEnemy__init_(var$3, $tower);
        if ($rt_suspending()) {
            break main;
        }
        var$2.$addObject0(var$3, $this.$getX(), $this.$getY());
        $this.$attackTime = $this.$attackSpeed;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $tower, var$2, var$3, $ptr);
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_ = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_2(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_1 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_0 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_1(var_0);
    return var_0;
},
TroopAllyGhostKnight = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostKnight__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 3;
        var$2 = $rt_s(31);
        var$3 = $rt_s(39);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostKnight__init_0 = () => {
    let var_0 = new TroopAllyGhostKnight();
    TroopAllyGhostKnight__init_(var_0);
    return var_0;
},
TroopAllyGhostKnight_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyKnight;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyKnight__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
};
function otpp_AsyncCallbackWrapper() {
    jl_Object.call(this);
    this.$realAsyncCallback = null;
}
let otpp_AsyncCallbackWrapper__init_ = ($this, $realAsyncCallback) => {
    jl_Object__init_($this);
    $this.$realAsyncCallback = $realAsyncCallback;
},
otpp_AsyncCallbackWrapper__init_0 = var_0 => {
    let var_1 = new otpp_AsyncCallbackWrapper();
    otpp_AsyncCallbackWrapper__init_(var_1, var_0);
    return var_1;
},
otpp_AsyncCallbackWrapper_create = $realAsyncCallback => {
    return otpp_AsyncCallbackWrapper__init_0($realAsyncCallback);
},
otpp_AsyncCallbackWrapper_complete = ($this, $result) => {
    $this.$realAsyncCallback.$complete($result);
},
otpp_AsyncCallbackWrapper_error = ($this, $e) => {
    $this.$realAsyncCallback.$error($e);
};
function MenuScreenMainLogo() {
    let a = this; g_Actor.call(a);
    a.$time5 = 0;
    a.$speed2 = 0;
    a.$speedTime1 = 0;
    a.$image2 = null;
}
let MenuScreenMainLogo__init_ = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        g_Actor__init_($this);
        if ($rt_suspending()) {
            break main;
        }
        $this.$time5 = 10;
        $this.$speed2 = 20;
        $this.$speedTime1 = 3;
        $this.$image2 = $this.$getImage1();
        $this.$image2.$scale(10, 10);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
MenuScreenMainLogo__init_0 = () => {
    let var_0 = new MenuScreenMainLogo();
    MenuScreenMainLogo__init_(var_0);
    return var_0;
},
MenuScreenMainLogo_act = $this => {
    let $image1, var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$image1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $this.$time5 = $this.$time5 + $this.$speed2 | 0;
        if ($this.$speed2 > 1) {
            $this.$speedTime1 = $this.$speedTime1 - 1 | 0;
            if (!$this.$speedTime1) {
                $this.$speed2 = $this.$speed2 - 1 | 0;
                $this.$speedTime1 = 3;
            }
        }
        if ($this.$time5 >= 600)
            return;
        $this.$image2.$scale($this.$time5, $this.$time5);
        $image1 = new g_GreenfootImage;
        var$2 = $rt_s(169);
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_($image1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        $image1.$scale($this.$image2.$getHeight() + $this.$speed2 | 0, $this.$image2.$getWidth() + $this.$speed2 | 0);
        $this.$setImage($image1);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $image1, var$2, $ptr);
};
function jl_Object$Monitor() {
    let a = this; jl_Object.call(a);
    a.$enteringThreads = null;
    a.$notifyListeners = null;
    a.$owner = null;
    a.$count = 0;
}
let jl_Object$Monitor__init_ = $this => {
    jl_Object__init_($this);
    $this.$owner = jl_Thread_currentThread();
},
jl_Object$Monitor__init_0 = () => {
    let var_0 = new jl_Object$Monitor();
    jl_Object$Monitor__init_(var_0);
    return var_0;
},
jl_Math = $rt_classWithoutFields(),
jl_Math__init_ = $this => {
    jl_Object__init_($this);
},
jl_Math__init_0 = () => {
    let var_0 = new jl_Math();
    jl_Math__init_(var_0);
    return var_0;
},
jl_Math_sin = var$1 => {
    return Math.sin(var$1);
},
jl_Math_cos = var$1 => {
    return Math.cos(var$1);
},
jl_Math_toRadians = var$1 => {
    return var$1 * 3.141592653589793 / 180.0;
},
jl_Math_toDegrees = $angrad => {
    return $angrad * 180.0 / 3.141592653589793;
},
jl_Math_sqrt = var$1 => {
    return Math.sqrt(var$1);
},
jl_Math_floor = var$1 => {
    return Math.floor(var$1);
},
jl_Math_pow = (var$1, $y) => {
    return jl_Math_powImpl(var$1, $y);
},
jl_Math_powImpl = (var$1, var$2) => {
    return Math.pow(var$1, var$2);
},
jl_Math_atan2 = (var$1, var$2) => {
    return Math.atan2(var$1, var$2);
},
jl_Math_round = var$1 => {
    return Long_fromNumber(var$1 + jl_Math_signum(var$1) * 0.5);
},
jl_Math_random = () => {
    return jl_Math_randomImpl();
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_max0 = ($a, $b) => {
    if (Long_gt($a, $b))
        $b = $a;
    return $b;
},
jl_Math_abs = $n => {
    if ($n < 0)
        $n =  -$n | 0;
    return $n;
},
jl_Math_sign = var$1 => {
    return Math.sign(var$1);
},
jl_Math_signum = var$1 => {
    return jl_Math_sign(var$1);
};
function ju_HashMap$HashMapEntrySet() {
    ju_AbstractSet.call(this);
    this.$associatedMap0 = null;
}
let ju_HashMap$HashMapEntrySet__init_ = ($this, $hm) => {
    ju_AbstractSet__init_($this);
    $this.$associatedMap0 = $hm;
},
ju_HashMap$HashMapEntrySet__init_0 = var_0 => {
    let var_1 = new ju_HashMap$HashMapEntrySet();
    ju_HashMap$HashMapEntrySet__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$HashMapEntrySet_size = $this => {
    return $this.$associatedMap0.$elementCount;
},
ju_HashMap$HashMapEntrySet_iterator = $this => {
    return ju_HashMap$EntryIterator__init_0($this.$associatedMap0);
};
function g_ActorSet() {
    let a = this; ju_AbstractSet.call(a);
    a.$listHeadTail = null;
    a.$hashMap = null;
    a.$numActors = 0;
    a.$myHashCode = 0;
}
let g_ActorSet__init_ = $this => {
    ju_AbstractSet__init_($this);
    $this.$listHeadTail = g_ActorSet$ListNode__init_1($this);
    $this.$hashMap = $rt_createArray(g_ActorSet$ListNode, 0);
    $this.$numActors = 0;
    $this.$myHashCode = 0;
},
g_ActorSet__init_0 = () => {
    let var_0 = new g_ActorSet();
    g_ActorSet__init_(var_0);
    return var_0;
},
g_ActorSet_hashCode = $this => {
    return $this.$myHashCode;
},
g_ActorSet_add = ($this, $actor) => {
    let $newNode, $seq, $hash, $hashHead;
    if ($this.$contains1($actor))
        return 0;
    $this.$numActors = $this.$numActors + 1 | 0;
    $newNode = g_ActorSet$ListNode__init_2($this, $actor, $this.$listHeadTail.$prev);
    $seq = g_ActorVisitor_getSequenceNumber($actor);
    if ($this.$numActors >= (2 * $this.$hashMap.data.length | 0))
        g_ActorSet_resizeHashmap($this);
    else {
        $hash = $seq % $this.$hashMap.data.length | 0;
        $hashHead = $this.$hashMap.data[$hash];
        $this.$hashMap.data[$hash] = $newNode;
        $newNode.$setHashListHead($hashHead);
    }
    $this.$myHashCode = $this.$myHashCode + $seq | 0;
    return 1;
},
g_ActorSet_resizeHashmap = $this => {
    let $currentActor, $seq, $hash, $hashHead;
    $this.$hashMap = $rt_createArray(g_ActorSet$ListNode, $this.$numActors);
    $currentActor = $this.$listHeadTail.$next3;
    while ($currentActor !== $this.$listHeadTail) {
        $seq = g_ActorVisitor_getSequenceNumber($currentActor.$actor);
        $hash = $seq % $this.$numActors | 0;
        $hashHead = $this.$hashMap.data[$hash];
        $this.$hashMap.data[$hash] = $currentActor;
        $currentActor.$setHashListHead($hashHead);
        $currentActor = $currentActor.$next3;
    }
},
g_ActorSet_contains0 = ($this, $actor) => {
    return g_ActorSet_getActorNode($this, $actor) === null ? 0 : 1;
},
g_ActorSet_contains = ($this, $o) => {
    let $a;
    if (!($o instanceof g_Actor))
        return 0;
    $a = $o;
    return $this.$contains1($a);
},
g_ActorSet_getActorNode = ($this, $actor) => {
    let $seq, $hash, $hashHead, $curNode;
    if (!$this.$hashMap.data.length)
        return null;
    $seq = g_ActorVisitor_getSequenceNumber($actor);
    $hash = $seq % $this.$hashMap.data.length | 0;
    $hashHead = $this.$hashMap.data[$hash];
    if ($hashHead === null)
        return null;
    if ($hashHead.$actor === $actor)
        return $hashHead;
    $curNode = $hashHead.$nextHash;
    while (true) {
        if ($curNode === $hashHead)
            return null;
        if ($curNode.$actor === $actor)
            break;
        $curNode = $curNode.$nextHash;
    }
    return $curNode;
},
g_ActorSet_remove0 = ($this, $actor) => {
    let $actorNode;
    $actorNode = g_ActorSet_getActorNode($this, $actor);
    if ($actorNode === null)
        return 0;
    g_ActorSet_remove($this, $actorNode);
    $this.$myHashCode = $this.$myHashCode - g_ActorVisitor_getSequenceNumber($actor) | 0;
    return 1;
},
g_ActorSet_remove = ($this, $actorNode) => {
    let $seq, $hash;
    $seq = g_ActorVisitor_getSequenceNumber($actorNode.$actor);
    $hash = $seq % $this.$hashMap.data.length | 0;
    if ($this.$hashMap.data[$hash] === $actorNode) {
        $this.$hashMap.data[$hash] = $actorNode.$nextHash;
        if ($this.$hashMap.data[$hash] === $actorNode)
            $this.$hashMap.data[$hash] = null;
    }
    $actorNode.$remove1();
    $this.$numActors = $this.$numActors - 1 | 0;
    if ($this.$numActors <= ($this.$hashMap.data.length / 2 | 0))
        g_ActorSet_resizeHashmap($this);
},
g_ActorSet_size = $this => {
    return $this.$numActors;
},
g_ActorSet_iterator = $this => {
    return g_ActorSet$ActorSetIterator__init_0($this);
},
g_ActorSet_add0 = ($this, var$1) => {
    return $this.$add(var$1);
},
g_ActorSet_access$000 = $x0 => {
    return $x0.$listHeadTail;
},
g_ActorSet_access$100 = ($x0, $x1) => {
    g_ActorSet_remove($x0, $x1);
},
g_WorldVisitor = $rt_classWithoutFields(),
g_WorldVisitor__init_ = $this => {
    jl_Object__init_($this);
},
g_WorldVisitor__init_0 = () => {
    let var_0 = new g_WorldVisitor();
    g_WorldVisitor__init_(var_0);
    return var_0;
},
g_WorldVisitor_getWidthInPixels = $w => {
    return $w.$getWidthInPixels();
},
g_WorldVisitor_getHeightInPixels = $w => {
    return $w.$getHeightInPixels();
},
g_WorldVisitor_getCellSize = $w => {
    return $w.$cellSize0;
},
g_WorldVisitor_getObjectsAtPixel = ($w, $x, $y) => {
    return $w.$getObjectsAtPixel0($x, $y);
},
g_WorldVisitor_startSequence = $w => {
    $w.$startSequence();
},
g_WorldVisitor_toCellFloor = ($world, $x) => {
    return $world.$toCellFloor0($x);
},
g_WorldVisitor_getObjectsListInPaintOrder = $world => {
    return $world.$getObjectsListInPaintOrder();
},
g_WorldVisitor_getObjectsListInActOrder = $world => {
    return $world.$getObjectsListInActOrder0();
},
g_WorldVisitor_getTextLabels = $world => {
    return $world.$textLabels;
};
function gj_MouseManager$1() {
    jl_Object.call(this);
    this.$this$01 = null;
}
let gj_MouseManager$1__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
    jl_Object__init_($this);
},
gj_MouseManager$1__init_0 = var_0 => {
    let var_1 = new gj_MouseManager$1();
    gj_MouseManager$1__init_(var_1, var_0);
    return var_1;
},
gj_MouseManager$1_handleEvent = ($this, $e) => {
    let $etype, var$3;
    $etype = $rt_str($e.type);
    $e.stopPropagation();
    $e.preventDefault();
    var$3 = jl_Thread__init_(gj_MouseManager$1$handleEvent$lambda$_1_0__init_0($this, $etype, $e));
    var$3.$start();
},
gj_MouseManager$1_handleEvent0 = ($this, var$1) => {
    $this.$handleEvent1(var$1);
},
gj_MouseManager$1_lambda$handleEvent$0 = ($this, $etype, $e) => {
    let var$3;
    a: {
        var$3 = (-1);
        switch ($etype.$hashCode1()) {
            case 587111926:
                if (!$etype.$equals($rt_s(82)))
                    break a;
                var$3 = 0;
                break a;
            case 1243067904:
                if (!$etype.$equals($rt_s(80)))
                    break a;
                var$3 = 1;
                break a;
            default:
        }
    }
    b: {
        switch (var$3) {
            case 0:
                break;
            case 1:
                if ($e.button)
                    break b;
                gj_MouseManager_access$102($this.$this$01, 0);
                gj_MouseManager_access$200($this.$this$01, $e.clientX, $e.clientY, ($e.button + 1 | 0) << 16 >> 16);
                (otjdh_HTMLDocument_current()).removeEventListener("mousemove", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"));
                (otjdh_HTMLDocument_current()).removeEventListener("mouseup", otji_JS_function(otji_JSWrapper_unwrap($this), "handleEvent"));
                break b;
            default:
                break b;
        }
        gj_MouseManager_access$000($this.$this$01, $e.clientX, $e.clientY, 1);
    }
},
gj_MouseManager$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
otji_JSWrapper$Helper$FinalizationRegistryConsumer = $rt_classWithoutFields(0),
ProjectileFireballEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileFireballEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 10;
        var$3 = 2;
        var$4 = $rt_s(165);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileFireballEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileFireballEnemy();
    ProjectileFireballEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileFireballEnemy_act = $this => {
    ProjectileEnemy_act($this);
};
function DeckMenuWorld() {
    g_World.call(this);
    this.$cards0 = null;
}
let DeckMenuWorld__init_ = $this => {
    let var$1, var$2, var$3, var$4, $i, var$6, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();$i = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 1000;
        var$2 = 600;
        var$3 = 1;
        $ptr = 1;
    case 1:
        g_World__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        $this.$cards0 = $rt_wrapArray(jl_String, [$rt_s(39), $rt_s(30), $rt_s(34), $rt_s(38), $rt_s(32), $rt_s(42), $rt_s(41), $rt_s(43), $rt_s(19), $rt_s(15), $rt_s(40)]);
        var$4 = new Music;
        $ptr = 2;
    case 2:
        Music__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 0, 0);
        var$4 = new MenuDeckText;
        $ptr = 3;
    case 3:
        MenuDeckText__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 500, 50);
        var$4 = new MenuButtonStart;
        $ptr = 4;
    case 4:
        MenuButtonStart__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, 500, 520);
        $i = 0;
        if ($i < 8) {
            var$4 = new CardDeck;
            $ptr = 5;
            continue main;
        }
        $i = 0;
        if ($i >= $this.$cards0.data.length)
            return;
        var$4 = new CardChoice;
        var$6 = $this.$cards0.data[$i];
        $ptr = 6;
        continue main;
    case 5:
        CardDeck__init_(var$4, $i);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, ($i * 115 | 0) + 100 | 0, 350);
        $i = $i + 1 | 0;
        if ($i < 8) {
            var$4 = new CardDeck;
            continue main;
        }
        $i = 0;
        if ($i >= $this.$cards0.data.length)
            return;
        var$4 = new CardChoice;
        var$6 = $this.$cards0.data[$i];
        $ptr = 6;
    case 6:
        CardChoice__init_(var$4, var$6);
        if ($rt_suspending()) {
            break main;
        }
        $this.$addObject0(var$4, ($i * 85 | 0) + 75 | 0, 150);
        $i = $i + 1 | 0;
        if ($i >= $this.$cards0.data.length)
            return;
        var$4 = new CardChoice;
        var$6 = $this.$cards0.data[$i];
        continue main;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, var$4, $i, var$6, $ptr);
},
DeckMenuWorld__init_0 = () => {
    let var_0 = new DeckMenuWorld();
    DeckMenuWorld__init_(var_0);
    return var_0;
},
TowerDownPrincess = $rt_classWithoutFields(TowerAllyTower),
TowerDownPrincess__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 200;
        var$2 = 45;
        var$3 = 110;
        $ptr = 1;
    case 1:
        TowerAllyTower__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TowerDownPrincess__init_0 = () => {
    let var_0 = new TowerDownPrincess();
    TowerDownPrincess__init_(var_0);
    return var_0;
},
TowerDownPrincess_act = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = $this.$getWorld();
        var$2 = $this.$hp;
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(var$3, var$2);
        var$1.$showText(jl_StringBuilder_toString(var$3), $this.$getX(), $this.$getY() + 35 | 0);
        if ($this.$hp > 0) {
            $ptr = 2;
            continue main;
        }
        var$1 = $this.$getWorld();
        var$3 = new TowerDestroyed;
        $ptr = 1;
    case 1:
        TowerDestroyed__init_(var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$1.$addObject0(var$3, $this.$getX(), $this.$getY());
        ($this.$getWorld()).$showText($rt_s(57), $this.$getX(), $this.$getY() + 35 | 0);
        var$1 = $this.$getWorld();
        var$1.$enemyCrowns = var$1.$enemyCrowns + 1 | 0;
        ($this.$getWorld()).$removeObject($this);
        return;
    case 2:
        $this.$findEnemy();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
};
function gj_JsActorDelegate() {
    let a = this; jl_Object.call(a);
    a.$props = null;
    a.$imageCache0 = null;
}
let gj_JsActorDelegate__init_ = ($this, $props) => {
    jl_Object__init_($this);
    $this.$imageCache0 = ju_HashMap__init_();
    $this.$props = $props;
},
gj_JsActorDelegate__init_0 = var_0 => {
    let var_1 = new gj_JsActorDelegate();
    gj_JsActorDelegate__init_(var_1, var_0);
    return var_1;
},
gj_JsActorDelegate_getImage = ($this, $name) => {
    let $propName, $imgName, $r, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$r = $thread.pop();$imgName = $thread.pop();$propName = $thread.pop();$name = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $propName = ((((jl_StringBuilder__init_()).$append8($rt_s(170))).$append8($name)).$append8($rt_s(171))).$toString();
        $imgName = $this.$props.$getProperty($propName);
        if ($imgName === null)
            return g_GreenfootImage__init_0(10, 10);
        $r = $this.$imageCache0.$get0($imgName);
        if ($r !== null)
            return $r;
        $r = new g_GreenfootImage;
        $ptr = 1;
    case 1:
        g_GreenfootImage__init_($r, $imgName);
        if ($rt_suspending()) {
            break main;
        }
        $this.$imageCache0.$put($imgName, $r);
        return $r;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $name, $propName, $imgName, $r, $ptr);
};
function jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0() {
    jl_Object.call(this);
    this.$_07 = null;
}
let jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_07 = var$1;
},
jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0__init_0 = var_0 => {
    let var_1 = new jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0();
    jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0__init_(var_1, var_0);
    return var_1;
},
jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0_run = var$0 => {
    jl_Object$NotifyListenerImpl_lambda$onTimer$1(var$0.$_07);
};
function g_TreeActorSet() {
    let a = this; ju_AbstractSet.call(a);
    a.$subSets = null;
    a.$generalSet = null;
    a.$classSets = null;
}
let g_TreeActorSet__init_ = $this => {
    ju_AbstractSet__init_($this);
    $this.$subSets = ju_LinkedList__init_();
    $this.$generalSet = g_ActorSet__init_0();
    $this.$subSets.$add0($this.$generalSet);
    $this.$classSets = ju_HashMap__init_();
},
g_TreeActorSet__init_0 = () => {
    let var_0 = new g_TreeActorSet();
    g_TreeActorSet__init_(var_0);
    return var_0;
},
g_TreeActorSet_setClassOrder = ($this, $reverse, $classes) => {
    let $oldClassSets, $sweepClasses, $i, var$6, $i_0, $oldSet, $sweptClasses, $sweepClass, $sweepSet, $i_1, $actor, $set, $ei, $entry, $destinationSet, var$18, var$19;
    $oldClassSets = $this.$classSets;
    $this.$classSets = ju_HashMap__init_();
    $sweepClasses = ju_LinkedList__init_();
    $i = 0;
    while (true) {
        var$6 = $classes.data;
        $i_0 = var$6.length;
        if ($i >= $i_0)
            break;
        $oldSet = $oldClassSets.$remove3(var$6[$i]);
        if ($oldSet === null) {
            $sweepClasses.$add0(var$6[$i]);
            $oldSet = g_ActorSet__init_0();
        }
        $this.$classSets.$put(var$6[$i], $oldSet);
        $i = $i + 1 | 0;
    }
    $sweptClasses = ju_HashSet__init_1();
    while (!$sweepClasses.$isEmpty()) {
        $sweepClass = jl_Class_getSuperclass($sweepClasses.$removeFirst());
        $sweepSet = $this.$classSets.$get0($sweepClass);
        while ($sweepSet === null) {
            $sweepClass = jl_Class_getSuperclass($sweepClass);
            if ($sweepClass === null) {
                $sweepSet = $this.$generalSet;
                continue;
            }
            $sweepSet = $this.$classSets.$get0($sweepClass);
        }
        a: {
            if (!$sweptClasses.$contains0($sweepClass)) {
                $sweptClasses.$add0($sweepClass);
                $i_1 = $sweepSet.$iterator();
                while (true) {
                    if (!$i_1.$hasNext())
                        break a;
                    $actor = $i_1.$next();
                    $set = g_TreeActorSet_setForActor($this, $actor);
                    if ($set !== $sweepSet) {
                        $set.$add($actor);
                        $i_1.$remove1();
                    }
                }
            }
        }
    }
    $ei = ($oldClassSets.$entrySet()).$iterator();
    while ($ei.$hasNext()) {
        $entry = $ei.$next();
        $destinationSet = g_TreeActorSet_setForClass($this, $entry.$getKey());
        $destinationSet.$addAll($entry.$getValue());
    }
    $this.$subSets.$clear();
    if ($reverse) {
        $this.$subSets.$add0($this.$generalSet);
        while ($i_0 > 0) {
            var$18 = $this.$subSets;
            var$19 = $this.$classSets;
            $i_0 = $i_0 + (-1) | 0;
            var$18.$add0(var$19.$get0(var$6[$i_0]));
        }
    } else {
        $i = 0;
        while ($i < $i_0) {
            $this.$subSets.$add0($this.$classSets.$get0(var$6[$i]));
            $i = $i + 1 | 0;
        }
        $this.$subSets.$add0($this.$generalSet);
    }
},
g_TreeActorSet_iterator = $this => {
    return g_TreeActorSet$TasIterator__init_0($this);
},
g_TreeActorSet_size = $this => {
    let $size, $i;
    $size = 0;
    $i = $this.$subSets.$iterator();
    while ($i.$hasNext()) {
        $size = $size + ($i.$next()).$size() | 0;
    }
    return $size;
},
g_TreeActorSet_add0 = ($this, $o) => {
    if ($o !== null)
        return (g_TreeActorSet_setForActor($this, $o)).$add($o);
    $rt_throw(jl_UnsupportedOperationException__init_1($rt_s(172)));
},
g_TreeActorSet_remove = ($this, $o) => {
    return (g_TreeActorSet_setForActor($this, $o)).$remove0($o);
},
g_TreeActorSet_setForActor = ($this, $o) => {
    let $oClass;
    $oClass = jl_Object_getClass($o);
    return g_TreeActorSet_setForClass($this, $oClass);
},
g_TreeActorSet_setForClass = ($this, $oClass) => {
    let $set;
    $set = $this.$classSets.$get0($oClass);
    while ($set === null && $oClass !== $rt_cls(jl_Object)) {
        $oClass = jl_Class_getSuperclass($oClass);
        $set = $this.$classSets.$get0($oClass);
    }
    if ($set === null)
        $set = $this.$generalSet;
    return $set;
},
g_TreeActorSet_add = ($this, var$1) => {
    return $this.$add(var$1);
},
g_TreeActorSet_access$000 = $x0 => {
    return $x0.$subSets;
},
ProjectileTowerAlly = $rt_classWithoutFields(ProjectileAlly),
ProjectileTowerAlly__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 18;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileAlly__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$enemy = $target;
        else
            $this.$tower0 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileTowerAlly__init_0 = var_0 => {
    let var_1 = new ProjectileTowerAlly();
    ProjectileTowerAlly__init_(var_1, var_0);
    return var_1;
},
ProjectileTowerAlly_act = $this => {
    ProjectileAlly_act($this);
};
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor0 = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_1 = $this => {
    ju_HashMap__init_0($this, 16);
},
ju_HashMap__init_ = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_1(var_0);
    return var_0;
},
ju_HashMap__init_0 = ($this, $capacity) => {
    ju_HashMap__init_2($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_0(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
ju_HashMap__init_2 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray0(var$3);
        $this.$loadFactor0 = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_2(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_clear = $this => {
    if ($this.$elementCount > 0) {
        $this.$elementCount = 0;
        ju_Arrays_fill0($this.$elementData, null);
        $this.$modCount0 = $this.$modCount0 + 1 | 0;
    }
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor0 | 0;
},
ju_HashMap_containsKey = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    return $m === null ? 0 : 1;
},
ju_HashMap_entrySet = $this => {
    return ju_HashMap$HashMapEntrySet__init_0($this);
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode1();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next4;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next4;
    }
    return $m;
},
ju_HashMap_isEmpty = $this => {
    return $this.$elementCount ? 0 : 1;
},
ju_HashMap_keySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_HashMap$1__init_0($this);
    return $this.$cachedKeySet;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode1();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next4 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash0 = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray0($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next4;
            $entry.$next4 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_remove = ($this, $key) => {
    let $entry;
    $entry = ju_HashMap_removeByKey($this, $key);
    if ($entry === null)
        return null;
    return $entry.$value;
},
ju_HashMap_removeByKey = ($this, $key) => {
    let $index, $last, $entry, $entry_0, $hash;
    a: {
        $index = 0;
        $last = null;
        if ($key === null) {
            $entry = $this.$elementData.data[0];
            while ($entry !== null) {
                if ($entry.$key === null)
                    break a;
                $entry_0 = $entry.$next4;
                $last = $entry;
                $entry = $entry_0;
            }
        } else {
            $hash = $key.$hashCode1();
            $index = $hash & ($this.$elementData.data.length - 1 | 0);
            $entry = $this.$elementData.data[$index];
            while ($entry !== null && !($entry.$origKeyHash == $hash && ju_HashMap_areEqualKeys($key, $entry.$key))) {
                $entry_0 = $entry.$next4;
                $last = $entry;
                $entry = $entry_0;
            }
        }
    }
    if ($entry === null)
        return null;
    if ($last !== null)
        $last.$next4 = $entry.$next4;
    else
        $this.$elementData.data[$index] = $entry.$next4;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
    return $entry;
},
ju_HashMap_size = $this => {
    return $this.$elementCount;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals($key2) ? 0 : 1;
};
function g_GreenfootImage$1$handleEvent$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_017 = null;
    a.$_16 = null;
}
let g_GreenfootImage$1$handleEvent$lambda$_1_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_017 = var$1;
    var$0.$_16 = var$2;
},
g_GreenfootImage$1$handleEvent$lambda$_1_0__init_0 = (var_0, var_1) => {
    let var_2 = new g_GreenfootImage$1$handleEvent$lambda$_1_0();
    g_GreenfootImage$1$handleEvent$lambda$_1_0__init_(var_2, var_0, var_1);
    return var_2;
},
g_GreenfootImage$1$handleEvent$lambda$_1_0_run = var$0 => {
    g_GreenfootImage$1_lambda$handleEvent$0(var$0.$_017, var$0.$_16);
},
ProjectileArrowEnemy = $rt_classWithoutFields(ProjectileEnemy),
ProjectileArrowEnemy__init_ = ($this, $target) => {
    let var$2, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$target = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 5;
        var$3 = 2;
        var$4 = $rt_s(36);
        $ptr = 1;
    case 1:
        ProjectileEnemy__init_($this, var$2, var$3, var$4);
        if ($rt_suspending()) {
            break main;
        }
        if (!($target instanceof Tower))
            $this.$ally0 = $target;
        else
            $this.$tower1 = $target;
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $target, var$2, var$3, var$4, $ptr);
},
ProjectileArrowEnemy__init_0 = var_0 => {
    let var_1 = new ProjectileArrowEnemy();
    ProjectileArrowEnemy__init_(var_1, var_0);
    return var_1;
},
ProjectileArrowEnemy_act = $this => {
    ProjectileEnemy_act($this);
},
TroopAllyGhostGiant = $rt_classWithoutFields(TroopAllyGhost),
TroopAllyGhostGiant__init_ = $this => {
    let var$1, var$2, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = 5;
        var$2 = $rt_s(31);
        var$3 = $rt_s(34);
        $ptr = 1;
    case 1:
        TroopAllyGhost__init_($this, var$1, var$2, var$3);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, var$2, var$3, $ptr);
},
TroopAllyGhostGiant__init_0 = () => {
    let var_0 = new TroopAllyGhostGiant();
    TroopAllyGhostGiant__init_(var_0);
    return var_0;
},
TroopAllyGhostGiant_act = $this => {
    let $bar, $mouse, var$3, var$4, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$mouse = $thread.pop();$bar = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $bar = (($this.$getWorld()).$getObjects($rt_cls(ElixirBar))).$get(0);
        $mouse = g_Greenfoot_getMouseInfo();
        if (null !== $mouse) {
            $this.$setLocation($mouse.$getX(), $mouse.$getY());
            if (g_Greenfoot_mouseClicked($this) && $this.$isTouching($rt_cls(ZoneTroopsPlace)) && $bar.$elixir1 >= $this.$elixir0) {
                var$3 = $this.$getWorld();
                var$4 = new TroopAllyGiant;
                $ptr = 1;
                continue main;
            }
        }
        return;
    case 1:
        TroopAllyGiant__init_(var$4);
        if ($rt_suspending()) {
            break main;
        }
        var$3.$addObject0(var$4, $this.$getX(), $this.$getY());
        $bar.$useElixir($this.$elixir0);
        ($this.$getWorld()).$removeObject($this);
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $bar, $mouse, var$3, var$4, $ptr);
};
function jl_Thread$start$lambda$_4_0() {
    jl_Object.call(this);
    this.$_012 = null;
}
let jl_Thread$start$lambda$_4_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_012 = var$1;
},
jl_Thread$start$lambda$_4_0__init_0 = var_0 => {
    let var_1 = new jl_Thread$start$lambda$_4_0();
    jl_Thread$start$lambda$_4_0__init_(var_1, var_0);
    return var_1;
},
jl_Thread$start$lambda$_4_0_run = var$0 => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();var$0 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = var$0.$_012;
        $ptr = 1;
    case 1:
        jl_Thread_runThread(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$0, var$1, $ptr);
},
CardSkeleton = $rt_classWithoutFields(Card),
CardSkeleton__init_ = $this => {
    let var$1, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$1 = new TroopAllyGhostSkeleton;
        $ptr = 1;
    case 1:
        TroopAllyGhostSkeleton__init_(var$1);
        if ($rt_suspending()) {
            break main;
        }
        $ptr = 2;
    case 2:
        Card__init_($this, var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $ptr);
},
CardSkeleton__init_0 = () => {
    let var_0 = new CardSkeleton();
    CardSkeleton__init_(var_0);
    return var_0;
},
CardSkeleton_act = $this => {
    Card_act($this);
};
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start0 = 0;
    a.$end = 0;
    a.$data0 = null;
}
let otciu_UnicodeHelper$Range__init_ = ($this, $start, $end, $data) => {
    jl_Object__init_($this);
    $this.$start0 = $start;
    $this.$end = $end;
    $this.$data0 = $data;
},
otciu_UnicodeHelper$Range__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function g_MouseInfo() {
    let a = this; jl_Object.call(a);
    a.$actor1 = null;
    a.$button = 0;
    a.$x2 = 0;
    a.$y2 = 0;
    a.$clickCount = 0;
}
let g_MouseInfo__init_ = $this => {
    jl_Object__init_($this);
},
g_MouseInfo__init_0 = () => {
    let var_0 = new g_MouseInfo();
    g_MouseInfo__init_(var_0);
    return var_0;
},
g_MouseInfo_getX = $this => {
    return $this.$x2;
},
g_MouseInfo_getY = $this => {
    return $this.$y2;
},
g_MouseInfo_getActor = $this => {
    return $this.$actor1;
},
g_MouseInfo_getButton = $this => {
    return $this.$button;
},
g_MouseInfo_setButton = ($this, $button) => {
    $this.$button = $button;
},
g_MouseInfo_setLoc = ($this, $x, $y) => {
    $this.$x2 = $x;
    $this.$y2 = $y;
},
g_MouseInfo_setActor = ($this, $actor) => {
    $this.$actor1 = $actor;
},
g_MouseInfo_setClickCount = ($this, $clickCount) => {
    $this.$clickCount = $clickCount;
},
otcit_DoubleAnalyzer = $rt_classWithoutFields(),
otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO,
otcit_DoubleAnalyzer_resultForLog10 = null,
otcit_DoubleAnalyzer_mantissa10Table = null,
otcit_DoubleAnalyzer_exp10Table = null,
otcit_DoubleAnalyzer_$callClinit = () => {
    otcit_DoubleAnalyzer_$callClinit = $rt_eraseClinit(otcit_DoubleAnalyzer);
    otcit_DoubleAnalyzer__clinit_();
},
otcit_DoubleAnalyzer__init_ = $this => {
    otcit_DoubleAnalyzer_$callClinit();
    jl_Object__init_($this);
},
otcit_DoubleAnalyzer__init_0 = () => {
    let var_0 = new otcit_DoubleAnalyzer();
    otcit_DoubleAnalyzer__init_(var_0);
    return var_0;
},
otcit_DoubleAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $decExponent, var$8, var$9, $binExponentCorrection, $mantissaShift, $decMantissa, var$13, var$14, var$15, $decMantissaHi, $decMantissaLow, $lowerPos, $upperPos, $posCmp;
    otcit_DoubleAnalyzer_$callClinit();
    $bits = jl_Double_doubleToLongBits($d);
    $result.$sign0 = Long_eq(Long_and($bits, Long_create(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, Long_create(4294967295, 1048575));
    $exponent = Long_lo(Long_shr($bits, 52)) & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent = 0;
        return;
    }
    if ($exponent)
        var$6 = Long_or($mantissa, Long_create(0, 1048576));
    else {
        var$6 = Long_shl($mantissa, 1);
        while (Long_eq(Long_and(var$6, Long_create(0, 1048576)), Long_ZERO)) {
            var$6 = Long_shl(var$6, 1);
            $exponent = $exponent + (-1) | 0;
        }
    }
    $decExponent = ju_Arrays_binarySearch(otcit_DoubleAnalyzer_exp10Table, $exponent << 16 >> 16);
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    var$8 = otcit_DoubleAnalyzer_exp10Table.data;
    var$9 = $decExponent + 1 | 0;
    $binExponentCorrection = $exponent - var$8[var$9] | 0;
    $mantissaShift = 12 + $binExponentCorrection | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    if (Long_le($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA)) {
        while (jl_Long_compareUnsigned($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = Long_add(Long_mul($decMantissa, Long_fromInt(10)), Long_fromInt(9));
        }
        var$8 = otcit_DoubleAnalyzer_exp10Table.data;
        var$9 = $decExponent + 1 | 0;
        var$13 = $exponent - var$8[var$9] | 0;
        $mantissaShift = 12 + var$13 | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    }
    var$14 = Long_shl(var$6, 1);
    var$6 = Long_add(var$14, Long_fromInt(1));
    var$8 = otcit_DoubleAnalyzer_mantissa10Table.data;
    var$13 = $decExponent + 1 | 0;
    var$15 = var$8[var$13];
    var$9 = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, var$15, var$9);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub(var$14, Long_fromInt(1)), otcit_DoubleAnalyzer_mantissa10Table.data[var$13], var$9);
    $lowerPos = otcit_DoubleAnalyzer_findLowerDistance($decMantissa, $decMantissaLow);
    $upperPos = otcit_DoubleAnalyzer_findUpperDistance($decMantissa, $decMantissaHi);
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    var$6 = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            var$6 = jl_Long_divideUnsigned(var$6, Long_fromInt(10));
            if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) < 0)
                break;
        }
    else if (jl_Long_compareUnsigned(var$6, Long_create(1569325056, 23283064)) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        var$6 = Long_mul(var$6, Long_fromInt(10));
    }
    $result.$mantissa = var$6;
    $result.$exponent = $decExponent - 330 | 0;
},
otcit_DoubleAnalyzer_findLowerDistance = ($mantissa, $lower) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($lower, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) <= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_findUpperDistance = ($mantissa, $upper) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($upper, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) >= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4, $cm, $c0, $c1, $c2, $c3, $c, var$18;
    otcit_DoubleAnalyzer_$callClinit();
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    $cm = Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3));
    $c0 = Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4));
    $c1 = Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4));
    $c2 = Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4));
    $c3 = Long_mul($b4, $a4);
    $c = Long_add(Long_add(Long_shl($c3, 32 + $shift | 0), Long_shl($c2, 16 + $shift | 0)), Long_shl($c1, $shift));
    var$18 = Long_add($cm, Long_shl($c0, 16));
    var$18 = Long_add($c, Long_shru(var$18, 32 - $shift | 0));
    return var$18;
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_resultForLog10 = otcit_DoubleAnalyzer$Result__init_0();
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
};
function gj_Client() {
    let a = this; jl_Object.call(a);
    a.$mainClassName = null;
    a.$isPaused = 0;
    a.$scenarioCanvas = null;
}
let gj_Client_blobCache = null,
gj_Client_$callClinit = () => {
    gj_Client_$callClinit = $rt_eraseClinit(gj_Client);
    gj_Client__clinit_();
},
gj_Client_main = $args => {
    let var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$args = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gj_Client_$callClinit();
        var$2 = new gj_Client;
        $ptr = 1;
    case 1:
        gj_Client__init_(var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($args, var$2, $ptr);
},
gj_Client__init_ = $this => {
    let $document, var$2, var$3, var$4, var$5, var$6, $standalonePropBytes, $standaloneProps, $doLockStr, $projectPropBytes, $projectProps, $simulation, $simSpeedStr, $simSpeed, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$simSpeed = $thread.pop();$simSpeedStr = $thread.pop();$simulation = $thread.pop();$projectProps = $thread.pop();$projectPropBytes = $thread.pop();$doLockStr = $thread.pop();$standaloneProps = $thread.pop();$standalonePropBytes = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();var$2 = $thread.pop();$document = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gj_Client_$callClinit();
        jl_Object__init_($this);
        $this.$isPaused = 1;
        gj_Client_setupURLFactory($this);
        $document = otjdh_HTMLDocument_current();
        gu_GreenfootUtil_initialise(gj_GreenfootUtilJsDelegate__init_0());
        $this.$scenarioCanvas = $document.getElementById("scenarioCanvas");
        gc_WorldHandler_initialise($this.$scenarioCanvas);
        $ptr = 1;
    case 1:
        g_ActorVisitor_initialise();
        if ($rt_suspending()) {
            break main;
        }
        gj_Client_canvasMessage($rt_s(173));
        var$2 = $document.getElementById("resetButton");
        var$3 = $document.getElementById("playButton");
        var$4 = $document.getElementById("speedSlider");
        otjde_MouseEventTarget_listenClick$static(var$2, otji_JSWrapper_unwrap(gj_Client$_init_$lambda$_1_0__init_0($this)));
        var$5 = gj_Client$_init_$lambda$_1_1__init_0(var$4);
        var$4.addEventListener("input", otji_JS_function(otji_JSWrapper_unwrap(var$5), "handleEvent"));
        var$5 = gj_Client$_init_$lambda$_1_2__init_0(var$4);
        var$4.addEventListener("change", otji_JS_function(otji_JSWrapper_unwrap(var$5), "handleEvent"));
        otjde_MouseEventTarget_listenClick$static(var$3, otji_JSWrapper_unwrap(gj_Client$_init_$lambda$_1_3__init_0($this)));
        otc_ResourceSource_setSource(gj_Client$1__init_0($this));
        try {
            var$6 = $rt_s(174);
            $ptr = 2;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
            } else {
                throw $$e;
            }
        }
        gj_Client_canvasMessage($rt_s(175));
        return;
    case 2:
        try {
            $tmp = gj_Client_getResourceBytes(var$6);
            if ($rt_suspending()) {
                break main;
            }
            $standalonePropBytes = $tmp;
            if ($standalonePropBytes === null)
                $rt_throw(ji_IOException__init_($rt_s(176)));
            $standaloneProps = ju_Properties__init_0();
            $standaloneProps.$load(ji_ByteArrayInputStream__init_1($standalonePropBytes));
            $this.$mainClassName = $standaloneProps.$getProperty($rt_s(177));
            (jl_System_out()).$println((((jl_StringBuilder__init_()).$append8($rt_s(178))).$append8($this.$mainClassName)).$toString());
            $doLockStr = $standaloneProps.$getProperty($rt_s(179));
            if ($rt_s(180).$equals($doLockStr))
                var$4.style.setProperty("display", "none");
            var$6 = $rt_s(181);
            $ptr = 3;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
            } else {
                throw $$e;
            }
        }
        gj_Client_canvasMessage($rt_s(175));
        return;
    case 3:
        try {
            $tmp = gj_Client_getResourceBytes(var$6);
            if ($rt_suspending()) {
                break main;
            }
            $projectPropBytes = $tmp;
            if ($projectPropBytes === null)
                $rt_throw(ji_IOException__init_($rt_s(182)));
            a: {
                $projectProps = ju_Properties__init_0();
                $projectProps.$load(ji_ByteArrayInputStream__init_1($projectPropBytes));
                g_ActorVisitor_setDelegate(gj_JsActorDelegate__init_0($projectProps));
                gc_Simulation_initialize(gj_Client$2__init_0($this));
                $simulation = gc_Simulation_getInstance();
                $simulation.$attachWorldHandler(gc_WorldHandler_getInstance());
                $simulation.$addSimulationListener(gj_Client$3__init_0($this, var$4, $simulation, var$2, var$3));
                $simSpeedStr = $projectProps.$getProperty($rt_s(183));
                if ($simSpeedStr !== null)
                    try {
                        $simSpeed = jl_Integer_parseInt($simSpeedStr);
                        $simulation.$setSpeed($simSpeed);
                        break a;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_NumberFormatException) {
                        } else {
                            throw $$e;
                        }
                    }
            }
            $ptr = 4;
            continue main;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
            } else {
                throw $$e;
            }
        }
        gj_Client_canvasMessage($rt_s(175));
        return;
    case 4:
        b: {
            try {
                gj_Client_doReset($this);
                if ($rt_suspending()) {
                    break main;
                }
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof ji_IOException) {
                } else {
                    throw $$e;
                }
            }
            gj_Client_canvasMessage($rt_s(175));
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $document, var$2, var$3, var$4, var$5, var$6, $standalonePropBytes, $standaloneProps, $doLockStr, $projectPropBytes, $projectProps, $simulation, $simSpeedStr, $simSpeed, $ptr);
},
gj_Client__init_0 = () => {
    let var_0 = new gj_Client();
    gj_Client__init_(var_0);
    return var_0;
},
gj_Client_doReset = $this => {
    let var$1, $t, $wc, $w, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$w = $thread.pop();$wc = $thread.pop();$t = $thread.pop();var$1 = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            b: {
                try {
                    (gc_WorldHandler_getInstance()).$discardWorld();
                    var$1 = $this.$mainClassName;
                    $ptr = 1;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_ClassNotFoundException) {
                        break b;
                    } else if ($$je instanceof jl_InstantiationException) {
                    } else if ($$je instanceof jl_Throwable) {
                        $t = $$je;
                        var$1 = (((jl_StringBuilder__init_()).$append8($rt_s(184))).$append8(jl_Class_getName(jl_Object_getClass($t)))).$append8($rt_s(185));
                        var$1 = (var$1.$append8($t.$getMessage())).$toString();
                        gj_Client_canvasMessage(var$1);
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                gj_Client_canvasMessage($rt_s(186));
                break a;
            }
            gj_Client_canvasMessage(((((jl_StringBuilder__init_()).$append8($rt_s(187))).$append8($this.$mainClassName)).$append8($rt_s(188))).$toString());
        }
        return;
    case 1:
        a: {
            b: {
                try {
                    $tmp = jl_Class_forName(var$1);
                    if ($rt_suspending()) {
                        break main;
                    }
                    $wc = $tmp;
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_ClassNotFoundException) {
                        break b;
                    } else if ($$je instanceof jl_InstantiationException) {
                    } else if ($$je instanceof jl_Throwable) {
                        $t = $$je;
                        var$1 = (((jl_StringBuilder__init_()).$append8($rt_s(184))).$append8(jl_Class_getName(jl_Object_getClass($t)))).$append8($rt_s(185));
                        var$1 = (var$1.$append8($t.$getMessage())).$toString();
                        gj_Client_canvasMessage(var$1);
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                gj_Client_canvasMessage($rt_s(186));
                break a;
            }
            gj_Client_canvasMessage(((((jl_StringBuilder__init_()).$append8($rt_s(187))).$append8($this.$mainClassName)).$append8($rt_s(188))).$toString());
        }
        return;
    case 2:
        a: {
            b: {
                try {
                    $tmp = jl_Class_newInstance($wc);
                    if ($rt_suspending()) {
                        break main;
                    }
                    var$1 = $tmp;
                    $w = var$1;
                    (gc_WorldHandler_getInstance()).$setWorld($w);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_ClassNotFoundException) {
                        break b;
                    } else if ($$je instanceof jl_InstantiationException) {
                    } else if ($$je instanceof jl_Throwable) {
                        $t = $$je;
                        var$1 = (((jl_StringBuilder__init_()).$append8($rt_s(184))).$append8(jl_Class_getName(jl_Object_getClass($t)))).$append8($rt_s(185));
                        var$1 = (var$1.$append8($t.$getMessage())).$toString();
                        gj_Client_canvasMessage(var$1);
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                gj_Client_canvasMessage($rt_s(186));
                break a;
            }
            gj_Client_canvasMessage(((((jl_StringBuilder__init_()).$append8($rt_s(187))).$append8($this.$mainClassName)).$append8($rt_s(188))).$toString());
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, var$1, $t, $wc, $w, $ptr);
},
gj_Client_canvasMessage = $s => {
    let $document, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    gj_Client_$callClinit();
    $document = otjdh_HTMLDocument_current();
    var$3 = $document.getElementById("scenarioCanvas");
    var$4 = var$3.getContext("2d");
    var$5 = "#000000";
    var$4.fillStyle = var$5;
    var$6 = var$3.width;
    var$7 = var$3.height;
    var$4.fillRect(0.0, 0.0, var$6, var$7);
    var$5 = "2em Sans";
    var$4.font = var$5;
    var$5 = "center";
    var$4.textAlign = var$5;
    var$5 = "#D0D0D0";
    var$4.fillStyle = var$5;
    var$8 = var$3.width / 2 | 0;
    var$9 = var$3.height / 2 | 0;
    var$4.fillText($rt_ustr($s), var$8, var$9);
},
gj_Client_getCachedResourceURL = $resource => {
    let $url, var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$url = $thread.pop();$resource = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gj_Client_$callClinit();
        $url = gj_Client_blobCache.$get0($resource);
        if ($url !== null)
            return $url;
        var$3 = gj_Client_guessMimeType($resource);
        $ptr = 1;
    case 1:
        $tmp = gj_Client_getResourceURL($resource, var$3);
        if ($rt_suspending()) {
            break main;
        }
        var$3 = $tmp;
        if (var$3 !== null)
            gj_Client_blobCache.$put($resource, var$3);
        return var$3;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($resource, $url, var$3, $ptr);
},
gj_Client_guessMimeType = $resource => {
    let var$2;
    gj_Client_$callClinit();
    var$2 = $resource.$toLowerCase();
    if (var$2.$endsWith($rt_s(189)))
        return $rt_s(45);
    if (!var$2.$endsWith($rt_s(190)))
        return null;
    return $rt_s(191);
},
gj_Client_getResourceURL = ($resource, $mediaType) => {
    let $zfile, $content, $syncObject, var$6, var$7, var$8, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$8 = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();$syncObject = $thread.pop();$content = $thread.pop();$zfile = $thread.pop();$mediaType = $thread.pop();$resource = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gj_Client_$callClinit();
        $zfile = zip.file($rt_ustr($resource));
        if ($zfile === null)
            return null;
        $content = $rt_createArray(jl_Object, 1);
        $syncObject = jl_Object__init_0();
        var$6 = gj_Client$getResourceURL$lambda$_11_0__init_0($content, $syncObject);
        var$7 = gj_Client$getResourceURL$lambda$_11_1__init_0($resource, $syncObject);
        ($zfile.async('uint8array')).then(otji_JS_function(otji_JSWrapper_unwrap(var$6), "gotContent"), otji_JS_function(otji_JSWrapper_unwrap(var$7), "gotError"));
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($syncObject);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                try {
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_InterruptedException) {
                    } else {
                        throw $$e;
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$6 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$6);
        }
        var$8 = $content.data;
        if (otji_JSWrapper_unwrap(var$8[0]) === null)
            return null;
        if ($mediaType === null)
            return $rt_str(gj_Client_toBlobUrl$js_body$_8(otji_JSWrapper_unwrap(var$8[0])));
        return $rt_str(gj_Client_toBlobUrl$js_body$_7(otji_JSWrapper_unwrap(var$8[0]), $rt_ustr($mediaType)));
    case 2:
        a: {
            try {
                b: {
                    try {
                        jl_Object_wait($syncObject);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$6 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$6);
        }
        var$8 = $content.data;
        if (otji_JSWrapper_unwrap(var$8[0]) === null)
            return null;
        if ($mediaType === null)
            return $rt_str(gj_Client_toBlobUrl$js_body$_8(otji_JSWrapper_unwrap(var$8[0])));
        return $rt_str(gj_Client_toBlobUrl$js_body$_7(otji_JSWrapper_unwrap(var$8[0]), $rt_ustr($mediaType)));
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($resource, $mediaType, $zfile, $content, $syncObject, var$6, var$7, var$8, $ptr);
},
gj_Client_getResourceBytes = $resource => {
    let $zfile, $content, $syncObject, var$5, var$6, var$7, $len, $r, $i, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$i = $thread.pop();$r = $thread.pop();$len = $thread.pop();var$7 = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();$syncObject = $thread.pop();$content = $thread.pop();$zfile = $thread.pop();$resource = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        gj_Client_$callClinit();
        $zfile = zip.file($rt_ustr($resource));
        if ($zfile === null)
            return null;
        $content = $rt_createArray(jl_Object, 1);
        $syncObject = jl_Object__init_0();
        var$5 = gj_Client$getResourceBytes$lambda$_12_0__init_0($content, $syncObject);
        var$6 = gj_Client$getResourceBytes$lambda$_12_1__init_0($resource, $syncObject);
        ($zfile.async('uint8array')).then(otji_JS_function(otji_JSWrapper_unwrap(var$5), "gotContent"), otji_JS_function(otji_JSWrapper_unwrap(var$6), "gotError"));
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($syncObject);
        if ($rt_suspending()) {
            break main;
        }
        a: {
            try {
                try {
                    $ptr = 2;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_InterruptedException) {
                    } else {
                        throw $$e;
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$5);
        }
        var$7 = $content.data;
        if (otji_JSWrapper_unwrap(var$7[0]) === null)
            return null;
        $len = (otji_JSWrapper_unwrap(var$7[0])).length;
        $r = $rt_createByteArray($len);
        $i = 0;
        while ($i < $len) {
            $r.data[$i] = (otji_JSWrapper_unwrap(var$7[0]))[$i] << 24 >> 24;
            $i = $i + 1 | 0;
        }
        return $r;
    case 2:
        a: {
            try {
                b: {
                    try {
                        jl_Object_wait($syncObject);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                jl_Object_monitorExit($syncObject);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$5 = $$je;

            }
            jl_Object_monitorExit($syncObject);
            $rt_throw(var$5);
        }
        var$7 = $content.data;
        if (otji_JSWrapper_unwrap(var$7[0]) === null)
            return null;
        $len = (otji_JSWrapper_unwrap(var$7[0])).length;
        $r = $rt_createByteArray($len);
        $i = 0;
        while ($i < $len) {
            $r.data[$i] = (otji_JSWrapper_unwrap(var$7[0]))[$i] << 24 >> 24;
            $i = $i + 1 | 0;
        }
        return $r;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($resource, $zfile, $content, $syncObject, var$5, var$6, var$7, $len, $r, $i, $ptr);
},
gj_Client_setupURLFactory = $this => {
    jn_URL_setURLStreamHandlerFactory(gj_Client$4__init_0($this));
},
gj_Client_lambda$getResourceBytes$9 = ($resource, $syncObject) => {
    let var$3, $$je;
    gj_Client_$callClinit();
    (jl_System_out()).$println((((jl_StringBuilder__init_()).$append8($rt_s(192))).$append8($resource)).$toString());
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$3);
},
gj_Client_lambda$getResourceBytes$8 = ($content, $syncObject, $c) => {
    let var$4, $$je;
    gj_Client_$callClinit();
    $content.data[0] = otji_JSWrapper_wrap($c);
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$4);
},
gj_Client_lambda$getResourceURL$7 = ($resource, $syncObject) => {
    let var$3, $$je;
    gj_Client_$callClinit();
    (jl_System_out()).$println((((jl_StringBuilder__init_()).$append8($rt_s(192))).$append8($resource)).$toString());
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$3 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$3);
},
gj_Client_lambda$getResourceURL$6 = ($content, $syncObject, $c) => {
    let var$4, $$je;
    gj_Client_$callClinit();
    $content.data[0] = otji_JSWrapper_wrap($c);
    jl_Object_monitorEnterSync($syncObject);
    a: {
        try {
            jl_Object_notify($syncObject);
            jl_Object_monitorExitSync($syncObject);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        return;
    }
    jl_Object_monitorExitSync($syncObject);
    $rt_throw(var$4);
},
gj_Client_lambda$new$4 = ($this, $e) => {
    (gc_Simulation_getInstance()).$setPaused($this.$isPaused ? 0 : 1);
},
gj_Client_lambda$new$3 = ($speedSlider, $e) => {
    gj_Client_$callClinit();
    (gc_Simulation_getInstance()).$setSpeed(jl_Integer_parseInt($rt_str($speedSlider.value)));
},
gj_Client_lambda$new$2 = ($speedSlider, $e) => {
    gj_Client_$callClinit();
    (gc_Simulation_getInstance()).$setSpeed(jl_Integer_parseInt($rt_str($speedSlider.value)));
},
gj_Client_lambda$new$1 = ($this, $e) => {
    (jl_Thread__init_(gj_Client$lambda$new$1$lambda$_22_0__init_0($this))).$start();
},
gj_Client_lambda$new$0 = $this => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        gj_Client_doReset($this);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $ptr);
},
gj_Client_access$000 = $x0 => {
    gj_Client_$callClinit();
    return $x0.$scenarioCanvas;
},
gj_Client_access$102 = ($x0, $x1) => {
    gj_Client_$callClinit();
    $x0.$isPaused = $x1;
    return $x1;
},
gj_Client__clinit_ = () => {
    gj_Client_blobCache = ju_HashMap__init_();
},
gj_Client_toBlobUrl$js_body$_7 = (var$1, var$2) => {
    var blob = new Blob([var$1], { type : var$2 });
    return URL.createObjectURL(blob);
},
gj_Client_toBlobUrl$js_body$_8 = var$1 => {
    var blob = new Blob([var$1]);
    return URL.createObjectURL(blob);
},
otjc_JSWeakRef = $rt_classWithoutFields();
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_ = ($this, var$1) => {
    jl_Object__init_($this);
    $this.$characters = var$1;
},
otci_CharFlow__init_0 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_(var_1, var_0);
    return var_1;
};
function gc_TextLabel() {
    let a = this; jl_Object.call(a);
    a.$xpos = 0;
    a.$ypos = 0;
    a.$text = null;
    a.$lines = null;
    a.$dimensions = null;
    a.$lineWidths = null;
}
let gc_TextLabel__init_ = ($this, $s, $xpos, $ypos) => {
    jl_Object__init_($this);
    $this.$text = $s;
    $this.$lines = gu_GreenfootUtil_getLines($this.$text);
    $this.$xpos = $xpos;
    $this.$ypos = $ypos;
},
gc_TextLabel__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gc_TextLabel();
    gc_TextLabel__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gc_TextLabel_draw = ($this, $g2d, $fontMetrics, $cellsize) => {
    let var$4, $numLines, $textHeight, $baseline, $maxWidth, $i, $tm, $halfcell, $xdraw, $ydraw, var$14, var$15, var$16, var$17;
    var$4 = $fontMetrics.data;
    $numLines = $this.$lines.$size();
    $textHeight = var$4[0];
    $baseline = var$4[1];
    if ($this.$dimensions === null) {
        $maxWidth = 0;
        $this.$lineWidths = $rt_createIntArray($numLines);
        $i = 0;
        while ($i < $numLines) {
            $tm = $g2d.measureText($rt_ustr($this.$lines.$get($i)));
            $this.$lineWidths.data[$i] = $tm.width | 0;
            $maxWidth = jl_Math_max($maxWidth, $this.$lineWidths.data[$i]);
            $i = $i + 1 | 0;
        }
        $this.$dimensions = $rt_createIntArray(2);
        $this.$dimensions.data[0] = $maxWidth;
        $this.$dimensions.data[1] = $rt_imul(var$4[0], $numLines);
    }
    $halfcell = $cellsize / 2 | 0;
    $xdraw = ($rt_imul($this.$xpos, $cellsize) - ($this.$dimensions.data[0] / 2 | 0) | 0) + $halfcell | 0;
    $ydraw = ($rt_imul($this.$ypos, $cellsize) - ($this.$dimensions.data[1] / 2 | 0) | 0) + $halfcell | 0;
    $maxWidth = $this.$dimensions.data[0];
    var$14 = $xdraw;
    var$15 = $ydraw;
    $g2d.translate(var$14, var$15);
    $i = 0;
    while ($i < $numLines) {
        var$16 = $this.$lines.$get($i);
        var$14 = ($maxWidth - $this.$lineWidths.data[$i] | 0) / 2 | 0;
        var$15 = $rt_imul($i, $textHeight) + $baseline | 0;
        $g2d.fillText($rt_ustr(var$16), var$14, var$15);
        var$17 = $this.$lines.$get($i);
        var$14 = ($maxWidth - $this.$lineWidths.data[$i] | 0) / 2 | 0;
        $g2d.strokeText($rt_ustr(var$17), var$14, var$15);
        $i = $i + 1 | 0;
    }
    var$14 =  -$xdraw | 0;
    var$15 =  -$ydraw | 0;
    $g2d.translate(var$14, var$15);
},
gc_TextLabel_getX = $this => {
    return $this.$xpos;
},
gc_TextLabel_getY = $this => {
    return $this.$ypos;
},
gc_TextLabel_getText = $this => {
    return $this.$text;
};
function gj_MouseManager$handleEvent$lambda$_10_0() {
    let a = this; jl_Object.call(a);
    a.$_014 = null;
    a.$_15 = null;
    a.$_22 = null;
}
let gj_MouseManager$handleEvent$lambda$_10_0__init_ = (var$0, var$1, var$2, var$3) => {
    jl_Object__init_(var$0);
    var$0.$_014 = var$1;
    var$0.$_15 = var$2;
    var$0.$_22 = var$3;
},
gj_MouseManager$handleEvent$lambda$_10_0__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gj_MouseManager$handleEvent$lambda$_10_0();
    gj_MouseManager$handleEvent$lambda$_10_0__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gj_MouseManager$handleEvent$lambda$_10_0_run = var$0 => {
    gj_MouseManager_lambda$handleEvent$0(var$0.$_014, var$0.$_15, var$0.$_22);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$1(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
otcit_FloatAnalyzer$Result = $rt_classWithoutFields(),
otcit_FloatAnalyzer$Result__init_ = $this => {
    jl_Object__init_($this);
},
otcit_FloatAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_FloatAnalyzer$Result();
    otcit_FloatAnalyzer$Result__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$0(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
jl_InterruptedException = $rt_classWithoutFields(jl_Exception),
jl_InterruptedException__init_0 = $this => {
    jl_Exception__init_($this);
},
jl_InterruptedException__init_ = () => {
    let var_0 = new jl_InterruptedException();
    jl_InterruptedException__init_0(var_0);
    return var_0;
},
ju_HashMap$EntryIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$EntryIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$EntryIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$EntryIterator();
    ju_HashMap$EntryIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$EntryIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry0;
},
ju_HashMap$EntryIterator_next0 = $this => {
    return $this.$next1();
};
function gci_BSPNode() {
    let a = this; jl_Object.call(a);
    a.$actors = null;
    a.$parent = null;
    a.$area = null;
    a.$splitAxis = 0;
    a.$splitPos = 0;
    a.$left = null;
    a.$right = null;
    a.$areaRipple = 0;
}
let gci_BSPNode__init_ = ($this, $area, $splitAxis, $splitPos) => {
    jl_Object__init_($this);
    $this.$area = $area;
    $this.$splitAxis = $splitAxis;
    $this.$splitPos = $splitPos;
    $this.$actors = ju_HashMap__init_();
},
gci_BSPNode__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new gci_BSPNode();
    gci_BSPNode__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
gci_BSPNode_setChild = ($this, $side, $child) => {
    if ($side) {
        $this.$right = $child;
        if ($child !== null)
            $child.$parent = $this;
    } else {
        $this.$left = $child;
        if ($child !== null)
            $child.$parent = $this;
    }
},
gci_BSPNode_setArea = ($this, $area) => {
    $this.$area = $area;
    $this.$areaRipple = 1;
},
gci_BSPNode_setSplitAxis = ($this, $axis) => {
    if ($axis != $this.$splitAxis) {
        $this.$splitAxis = $axis;
        $this.$areaRipple = 1;
    }
},
gci_BSPNode_setSplitPos = ($this, $pos) => {
    if ($pos != $this.$splitPos) {
        $this.$splitPos = $pos;
        $this.$areaRipple = 1;
    }
},
gci_BSPNode_getLeftArea = $this => {
    if ($this.$splitAxis)
        return gci_Rect__init_(gci_Rect_getX($this.$area), gci_Rect_getY($this.$area), gci_Rect_getWidth($this.$area), $this.$splitPos - gci_Rect_getY($this.$area) | 0);
    return gci_Rect__init_(gci_Rect_getX($this.$area), gci_Rect_getY($this.$area), $this.$splitPos - gci_Rect_getX($this.$area) | 0, gci_Rect_getHeight($this.$area));
},
gci_BSPNode_getRightArea = $this => {
    if ($this.$splitAxis)
        return gci_Rect__init_(gci_Rect_getX($this.$area), $this.$splitPos, gci_Rect_getWidth($this.$area), gci_Rect_getTop($this.$area) - $this.$splitPos | 0);
    return gci_Rect__init_($this.$splitPos, gci_Rect_getY($this.$area), gci_Rect_getRight($this.$area) - $this.$splitPos | 0, gci_Rect_getHeight($this.$area));
},
gci_BSPNode_getArea = $this => {
    return $this.$area;
},
gci_BSPNode_resizeChildren = $this => {
    if ($this.$left !== null)
        gci_BSPNode_setArea($this.$left, gci_BSPNode_getLeftArea($this));
    if ($this.$right !== null)
        gci_BSPNode_setArea($this.$right, gci_BSPNode_getRightArea($this));
},
gci_BSPNode_getLeft = $this => {
    if ($this.$areaRipple) {
        gci_BSPNode_resizeChildren($this);
        $this.$areaRipple = 0;
    }
    return $this.$left;
},
gci_BSPNode_getRight = $this => {
    if ($this.$areaRipple) {
        gci_BSPNode_resizeChildren($this);
        $this.$areaRipple = 0;
    }
    return $this.$right;
},
gci_BSPNode_getParent = $this => {
    return $this.$parent;
},
gci_BSPNode_setParent = ($this, $parent) => {
    $this.$parent = $parent;
},
gci_BSPNode_getChildSide = ($this, $child) => {
    if ($this.$left !== $child)
        return 1;
    return 0;
},
gci_BSPNode_addActor = ($this, $actor) => {
    $this.$actors.$put($actor, gci_ActorNode__init_0($actor, $this));
},
gci_BSPNode_containsActor = ($this, $actor) => {
    let $anode;
    $anode = $this.$actors.$get0($actor);
    if ($anode === null)
        return 0;
    gci_ActorNode_mark($anode);
    return 1;
},
gci_BSPNode_actorRemoved = ($this, $actor) => {
    $this.$actors.$remove3($actor);
},
gci_BSPNode_isEmpty = $this => {
    return $this.$actors.$isEmpty();
},
gci_BSPNode_getActorsIterator = $this => {
    return ($this.$actors.$keySet()).$iterator();
},
gci_BSPNode_blankNode = $this => {
    $this.$actors.$clear();
},
gci_BSPNode_areaChanged = $this => {
    $this.$areaRipple = 1;
};
$rt_packages([-1, "java", 0, "util", 0, "io", 0, "lang", -1, "greenfoot"
]);
$rt_metadata([jl_Object, "Object", 3, 0, [], 0, 3, 0, 0, ["$isEmptyMonitor", $rt_wrapFunction0(jl_Object_isEmptyMonitor), "$getClass0", $rt_wrapFunction0(jl_Object_getClass), "$hashCode1", $rt_wrapFunction0(jl_Object_hashCode), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity), "$notify", $rt_wrapFunction0(jl_Object_notify), "$notifyAll", $rt_wrapFunction0(jl_Object_notifyAll), "$wait0", $rt_wrapFunction1(jl_Object_wait0),
"$waitImpl0", $rt_wrapFunction3(jl_Object_waitImpl), "$wait1", $rt_wrapFunction0(jl_Object_wait), "$waitImpl$_asyncCall_$", $rt_wrapFunction2(jl_Object_waitImpl$_asyncCall_$)],
g_Actor, "Actor", 4, jl_Object, [], 1, 3, 0, g_Actor_$callClinit, ["$_init_0", $rt_wrapFunction0(g_Actor__init_), "$act", $rt_wrapFunction0(g_Actor_act), "$getX", $rt_wrapFunction0(g_Actor_getX), "$getY", $rt_wrapFunction0(g_Actor_getY), "$setRotation", $rt_wrapFunction1(g_Actor_setRotation), "$turnTowards", $rt_wrapFunction2(g_Actor_turnTowards), "$isAtEdge", $rt_wrapFunction0(g_Actor_isAtEdge), "$setLocation", $rt_wrapFunction2(g_Actor_setLocation), "$move", $rt_wrapFunction1(g_Actor_move), "$turn", $rt_wrapFunction1(g_Actor_turn),
"$getWorld", $rt_wrapFunction0(g_Actor_getWorld), "$addedToWorld", $rt_wrapFunction1(g_Actor_addedToWorld), "$getImage1", $rt_wrapFunction0(g_Actor_getImage0), "$setImage", $rt_wrapFunction1(g_Actor_setImage), "$setWorld", $rt_wrapFunction1(g_Actor_setWorld), "$addToWorld", $rt_wrapFunction3(g_Actor_addToWorld), "$getBoundingRect", $rt_wrapFunction0(g_Actor_getBoundingRect), "$setData0", $rt_wrapFunction1(g_Actor_setData), "$getData0", $rt_wrapFunction0(g_Actor_getData), "$toPixel0", $rt_wrapFunction1(g_Actor_toPixel),
"$intersects0", $rt_wrapFunction1(g_Actor_intersects), "$getObjectsInRange0", $rt_wrapFunction2(g_Actor_getObjectsInRange), "$getOneIntersectingObject0", $rt_wrapFunction1(g_Actor_getOneIntersectingObject), "$isTouching", $rt_wrapFunction1(g_Actor_isTouching), "$removeTouching", $rt_wrapFunction1(g_Actor_removeTouching), "$containsPoint", $rt_wrapFunction2(g_Actor_containsPoint), "$getSequenceNumber", $rt_wrapFunction0(g_Actor_getSequenceNumber), "$getSleepingFor", $rt_wrapFunction0(g_Actor_getSleepingFor),
"$setSleepingFor", $rt_wrapFunction1(g_Actor_setSleepingFor), "$getLastPaintSeqNum", $rt_wrapFunction0(g_Actor_getLastPaintSeqNum), "$setLastPaintSeqNum", $rt_wrapFunction1(g_Actor_setLastPaintSeqNum), "$getImage", $rt_wrapFunction1(g_Actor_getImage), "$getActiveWorld", $rt_wrapFunction0(g_Actor_getActiveWorld)],
Overlay, "Overlay", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(Overlay__init_)],
ZoneTroopsPlace, "ZoneTroopsPlace", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ZoneTroopsPlace__init_)],
ZoneTroopsPlaceStart, "ZoneTroopsPlaceStart", -1, ZoneTroopsPlace, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ZoneTroopsPlaceStart__init_)],
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getLocalizedMessage", $rt_wrapFunction0(jl_Throwable_getLocalizedMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause), "$printStackTrace", $rt_wrapFunction0(jl_Throwable_printStackTrace), "$printStackTrace0", $rt_wrapFunction1(jl_Throwable_printStackTrace0)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Exception__init_), "$_init_", $rt_wrapFunction1(jl_Exception__init_0)],
jl_RuntimeException, "RuntimeException", 3, jl_Exception, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, "IndexOutOfBoundsException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_0)],
gp_GreenfootUtilDelegate, 0, jl_Object, [], 3, 3, 0, 0, 0,
gj_GreenfootUtilJsDelegate, 0, jl_Object, [gp_GreenfootUtilDelegate], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gj_GreenfootUtilJsDelegate__init_), "$getGreenfootLogoPath", $rt_wrapFunction0(gj_GreenfootUtilJsDelegate_getGreenfootLogoPath)],
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_InputStream, 0, jl_Object, [ji_Closeable], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ji_InputStream__init_), "$read0", $rt_wrapFunction1(ji_InputStream_read)],
ji_FilterInputStream, 0, ji_InputStream, [], 0, 3, 0, 0, ["$_init_5", $rt_wrapFunction1(ji_FilterInputStream__init_)],
ji_BufferedInputStream, 0, ji_FilterInputStream, [], 0, 3, 0, 0, ["$_init_5", $rt_wrapFunction1(ji_BufferedInputStream__init_), "$read1", $rt_wrapFunction0(ji_BufferedInputStream_read)],
g_World, "World", 4, jl_Object, [], 1, 3, 0, g_World_$callClinit, ["$_init_9", $rt_wrapFunction3(g_World__init_), "$_init_6", $rt_wrapFunction4(g_World__init_0), "$setBackground", $rt_wrapFunction1(g_World_setBackground), "$getBackground", $rt_wrapFunction0(g_World_getBackground), "$getWidth", $rt_wrapFunction0(g_World_getWidth), "$getHeight", $rt_wrapFunction0(g_World_getHeight), "$getCellSize", $rt_wrapFunction0(g_World_getCellSize), "$setPaintOrder", $rt_wrapFunction1(g_World_setPaintOrder), "$addObject0",
$rt_wrapFunction3(g_World_addObject), "$removeObject", $rt_wrapFunction1(g_World_removeObject), "$removeObjects", $rt_wrapFunction1(g_World_removeObjects), "$getObjects", $rt_wrapFunction1(g_World_getObjects), "$act", $rt_wrapFunction0(g_World_act), "$started", $rt_wrapFunction0(g_World_started), "$stopped", $rt_wrapFunction0(g_World_stopped), "$getObjectsAt", $rt_wrapFunction3(g_World_getObjectsAt), "$showText", $rt_wrapFunction3(g_World_showText), "$isBounded", $rt_wrapFunction0(g_World_isBounded), "$getObjectsInRange",
$rt_wrapFunction4(g_World_getObjectsInRange), "$getHeightInPixels", $rt_wrapFunction0(g_World_getHeightInPixels), "$getWidthInPixels", $rt_wrapFunction0(g_World_getWidthInPixels), "$toCellFloor0", $rt_wrapFunction1(g_World_toCellFloor), "$getObjectsAtPixel0", $rt_wrapFunction2(g_World_getObjectsAtPixel), "$updateObjectLocation", $rt_wrapFunction3(g_World_updateObjectLocation), "$updateObjectSize", $rt_wrapFunction1(g_World_updateObjectSize), "$startSequence", $rt_wrapFunction0(g_World_startSequence), "$getOneIntersectingObject",
$rt_wrapFunction2(g_World_getOneIntersectingObject), "$getObjectsListInPaintOrder", $rt_wrapFunction0(g_World_getObjectsListInPaintOrder), "$getObjectsListInActOrder0", $rt_wrapFunction0(g_World_getObjectsListInActOrder)],
ScreenMainWorld, "ScreenMainWorld", -1, g_World, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ScreenMainWorld__init_), "$act", $rt_wrapFunction0(ScreenMainWorld_act)],
ju_Enumeration, 0, jl_Object, [], 3, 3, 0, 0, 0,
Troop, "Troop", -1, g_Actor, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(Troop__init_), "$changeSprite", $rt_wrapFunction0(Troop_changeSprite), "$moveImages", $rt_wrapFunction0(Troop_moveImages), "$attackImages", $rt_wrapFunction0(Troop_attackImages), "$movement", $rt_wrapFunction0(Troop_movement), "$checkHealth", $rt_wrapFunction0(Troop_checkHealth)],
TroopEnemy, "TroopEnemy", -1, Troop, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemy__init_), "$act", $rt_wrapFunction0(TroopEnemy_act), "$findEnemy", $rt_wrapFunction0(TroopEnemy_findEnemy), "$attack", $rt_wrapFunction1(TroopEnemy_attack), "$attackTower", $rt_wrapFunction1(TroopEnemy_attackTower), "$createProjectile", $rt_wrapFunction1(TroopEnemy_createProjectile), "$createProjectile0", $rt_wrapFunction1(TroopEnemy_createProjectile0), "$checkHealth", $rt_wrapFunction0(TroopEnemy_checkHealth), "$movement",
$rt_wrapFunction0(TroopEnemy_movement), "$attackImages", $rt_wrapFunction0(TroopEnemy_attackImages), "$moveImages", $rt_wrapFunction0(TroopEnemy_moveImages), "$changeSprite", $rt_wrapFunction0(TroopEnemy_changeSprite)],
TroopEnemyGround, "TroopEnemyGround", -1, TroopEnemy, [], 0, 3, 0, 0, ["$_init_12", function(var_1, var_2, var_3, var_4, var_5, var_6) { TroopEnemyGround__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
TroopEnemyPekkaMini, "TroopEnemyPekkaMini", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyPekkaMini__init_), "$act", $rt_wrapFunction0(TroopEnemyPekkaMini_act)],
Spell, "Spell", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(Spell__init_)],
SpellAlly, "SpellAlly", -1, Spell, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(SpellAlly__init_), "$act", $rt_wrapFunction0(SpellAlly_act), "$findEnemy", $rt_wrapFunction0(SpellAlly_findEnemy), "$doZoneDamage", $rt_wrapFunction0(SpellAlly_doZoneDamage), "$changeSprite", $rt_wrapFunction0(SpellAlly_changeSprite), "$moveImages", $rt_wrapFunction0(SpellAlly_moveImages), "$attackImages", $rt_wrapFunction0(SpellAlly_attackImages)],
SpellAllyAir, "SpellAllyAir", -1, SpellAlly, [], 0, 3, 0, 0, ["$_init_13", function(var_1, var_2, var_3, var_4, var_5, var_6) { SpellAllyAir__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
SpellAllyFireball, "SpellAllyFireball", -1, SpellAllyAir, [], 0, 3, 0, 0, ["$_init_7", $rt_wrapFunction2(SpellAllyFireball__init_), "$act", $rt_wrapFunction0(SpellAllyFireball_act)],
jl_Runnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
gj_MouseManager$handleTouchEvent$lambda$_11_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_51", $rt_wrapFunction3(gj_MouseManager$handleTouchEvent$lambda$_11_0__init_), "$run", $rt_wrapFunction0(gj_MouseManager$handleTouchEvent$lambda$_11_0_run)],
ClashWorld, "ClashWorld", -1, g_World, [], 0, 3, 0, ClashWorld_$callClinit, ["$_init_0", $rt_wrapFunction0(ClashWorld__init_), "$act", $rt_wrapFunction0(ClashWorld_act), "$addElixir", $rt_wrapFunction0(ClashWorld_addElixir), "$addEnemies", $rt_wrapFunction0(ClashWorld_addEnemies), "$checkCrowns", $rt_wrapFunction0(ClashWorld_checkCrowns), "$prepareOverlay", $rt_wrapFunction0(ClashWorld_prepareOverlay), "$prepareOverlayCards", $rt_wrapFunction0(ClashWorld_prepareOverlayCards), "$prepareTowers", $rt_wrapFunction0(ClashWorld_prepareTowers),
"$changeCard", $rt_wrapFunction2(ClashWorld_changeCard)],
DifficultyMenuWorld, "DifficultyMenuWorld", -1, g_World, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(DifficultyMenuWorld__init_), "$act", $rt_wrapFunction0(DifficultyMenuWorld_act)],
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Number__init_)],
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, ["$_init_14", $rt_wrapFunction1(jl_Integer__init_), "$intValue", $rt_wrapFunction0(jl_Integer_intValue), "$hashCode1", $rt_wrapFunction0(jl_Integer_hashCode), "$equals", $rt_wrapFunction1(jl_Integer_equals)],
gs_SoundFactory$2$handleEvent$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(gs_SoundFactory$2$handleEvent$lambda$_1_0__init_), "$run", $rt_wrapFunction0(gs_SoundFactory$2$handleEvent$lambda$_1_0_run)],
jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, 0, jl_AbstractStringBuilder$Constants_$callClinit, ["$_init_0", $rt_wrapFunction0(jl_AbstractStringBuilder$Constants__init_)],
TroopEnemyArcher, "TroopEnemyArcher", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyArcher__init_), "$act", $rt_wrapFunction0(TroopEnemyArcher_act)],
otp_PlatformRunnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
otr_EventQueue$Event, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Object$NotifyListener, 0, jl_Object, [otp_PlatformRunnable, otr_EventQueue$Event], 3, 0, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjb_TimerHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
jl_ThreadInterruptHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Object$NotifyListenerImpl, 0, jl_Object, [jl_Object$NotifyListener, otjb_TimerHandler, otp_PlatformRunnable, jl_ThreadInterruptHandler], 0, 0, 0, 0, ["$_init_3", $rt_wrapFunction3(jl_Object$NotifyListenerImpl__init_), "$expired", $rt_wrapFunction0(jl_Object$NotifyListenerImpl_expired), "$onTimer", $rt_wrapFunction0(jl_Object$NotifyListenerImpl_onTimer), "$run", $rt_wrapFunction0(jl_Object$NotifyListenerImpl_run), "$interrupted", $rt_wrapFunction0(jl_Object$NotifyListenerImpl_interrupted)],
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 1, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Long_$callClinit, 0]);
$rt_metadata([TroopAllyGhost, "TroopAllyGhost", -1, Troop, [], 0, 3, 0, 0, ["$_init_17", $rt_wrapFunction3(TroopAllyGhost__init_)],
TroopAllyGhostDragonBaby, "TroopAllyGhostDragonBaby", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostDragonBaby__init_), "$act", $rt_wrapFunction0(TroopAllyGhostDragonBaby_act)],
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Thread, 0, jl_Object, [jl_Runnable], 0, 3, 0, jl_Thread_$callClinit, ["$_init_0", $rt_wrapFunction0(jl_Thread__init_1), "$_init_", $rt_wrapFunction1(jl_Thread__init_3), "$_init_36", $rt_wrapFunction1(jl_Thread__init_2), "$_init_18", $rt_wrapFunction2(jl_Thread__init_0), "$start", $rt_wrapFunction0(jl_Thread_start), "$run", $rt_wrapFunction0(jl_Thread_run), "$interrupt", $rt_wrapFunction0(jl_Thread_interrupt), "$setPriority", $rt_wrapFunction1(jl_Thread_setPriority), "$getUncaughtExceptionHandler", $rt_wrapFunction0(jl_Thread_getUncaughtExceptionHandler)],
gj_ContentReceiver, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gj_Client$getResourceBytes$lambda$_12_0, 0, jl_Object, [gj_ContentReceiver], 0, 3, 0, 0, ["$_init_67", $rt_wrapFunction2(gj_Client$getResourceBytes$lambda$_12_0__init_), "$gotContent", $rt_wrapFunction1(gj_Client$getResourceBytes$lambda$_12_0_gotContent)],
gj_ErrorCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gj_Client$getResourceBytes$lambda$_12_1, 0, jl_Object, [gj_ErrorCallback], 0, 3, 0, 0, ["$_init_68", $rt_wrapFunction2(gj_Client$getResourceBytes$lambda$_12_1__init_), "$gotError", $rt_wrapFunction0(gj_Client$getResourceBytes$lambda$_12_1_gotError)],
otp_PlatformQueue, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
TroopAlly, "TroopAlly", -1, Troop, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAlly__init_), "$act", $rt_wrapFunction0(TroopAlly_act), "$findEnemy", $rt_wrapFunction0(TroopAlly_findEnemy), "$attack0", $rt_wrapFunction1(TroopAlly_attack), "$attackTower0", $rt_wrapFunction1(TroopAlly_attackTower), "$createProjectile1", $rt_wrapFunction1(TroopAlly_createProjectile0), "$createProjectile2", $rt_wrapFunction1(TroopAlly_createProjectile), "$checkHealth", $rt_wrapFunction0(TroopAlly_checkHealth), "$movement",
$rt_wrapFunction0(TroopAlly_movement), "$attackImages", $rt_wrapFunction0(TroopAlly_attackImages), "$moveImages", $rt_wrapFunction0(TroopAlly_moveImages), "$changeSprite", $rt_wrapFunction0(TroopAlly_changeSprite)],
TroopAllyGround, "TroopAllyGround", -1, TroopAlly, [], 0, 3, 0, 0, ["$_init_12", function(var_1, var_2, var_3, var_4, var_5, var_6) { TroopAllyGround__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
TroopAllyGiant, "TroopAllyGiant", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGiant__init_), "$act", $rt_wrapFunction0(TroopAllyGiant_act)],
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjde_LoadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, "StringIndexOutOfBoundsException", 3, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_0)],
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gj_TouchManager, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_49", $rt_wrapFunction1(gj_TouchManager__init_), "$handleEvent", $rt_wrapFunction1(gj_TouchManager_handleEvent0), "$handleEvent0", $rt_wrapFunction1(gj_TouchManager_handleEvent)],
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
gs_Sound, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_27", $rt_wrapFunction1(gs_Sound__init_0), "$play", $rt_wrapFunction0(gs_Sound_play), "$stop", $rt_wrapFunction0(gs_Sound_stop), "$isPlaying", $rt_wrapFunction0(gs_Sound_isPlaying), "$setVolume", $rt_wrapFunction1(gs_Sound_setVolume)],
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
ZoneTroopsPlaceRight, "ZoneTroopsPlaceRight", -1, ZoneTroopsPlace, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ZoneTroopsPlaceRight__init_)],
Projectile, "Projectile", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(Projectile__init_)],
ProjectileAlly, "ProjectileAlly", -1, Projectile, [], 0, 3, 0, 0, ["$_init_21", $rt_wrapFunction3(ProjectileAlly__init_), "$act", $rt_wrapFunction0(ProjectileAlly_act), "$attackEnemy", $rt_wrapFunction0(ProjectileAlly_attackEnemy), "$attackZoneEnemy", $rt_wrapFunction0(ProjectileAlly_attackZoneEnemy), "$vanish", $rt_wrapFunction0(ProjectileAlly_vanish)],
ProjectileCannonAlly, "ProjectileCannonAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileCannonAlly__init_), "$act", $rt_wrapFunction0(ProjectileCannonAlly_act)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_118_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_String$_clinit_$lambda$_118_0__init_)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_AbstractStringBuilder__init_), "$_init_14", $rt_wrapFunction1(jl_AbstractStringBuilder__init_0), "$append3", $rt_wrapFunction1(jl_AbstractStringBuilder_append2), "$append4", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$append5", $rt_wrapFunction1(jl_AbstractStringBuilder_append0), "$append2", $rt_wrapFunction2(jl_AbstractStringBuilder_append4),
"$insert1", $rt_wrapFunction3(jl_AbstractStringBuilder_insert3), "$append6", $rt_wrapFunction1(jl_AbstractStringBuilder_append1), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert), "$append7", $rt_wrapFunction1(jl_AbstractStringBuilder_append3), "$insert3", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_StringBuilder__init_0), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append8", $rt_wrapFunction1(jl_StringBuilder_append2), "$append1", $rt_wrapFunction1(jl_StringBuilder_append0), "$append9", $rt_wrapFunction1(jl_StringBuilder_append3), "$append0", $rt_wrapFunction1(jl_StringBuilder_append1), "$insert6", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert4", $rt_wrapFunction2(jl_StringBuilder_insert4),
"$insert5", $rt_wrapFunction2(jl_StringBuilder_insert1), "$insert7", $rt_wrapFunction2(jl_StringBuilder_insert5), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert3", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert2), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert6)],
Tower, "Tower", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(Tower__init_), "$act", $rt_wrapFunction0(Tower_act)],
ju_ConcurrentModificationException, "ConcurrentModificationException", 1, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_ConcurrentModificationException__init_0)],
jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ProjectileEnemy, "ProjectileEnemy", -1, Projectile, [], 0, 3, 0, 0, ["$_init_21", $rt_wrapFunction3(ProjectileEnemy__init_), "$act", $rt_wrapFunction0(ProjectileEnemy_act), "$attackEnemy", $rt_wrapFunction0(ProjectileEnemy_attackEnemy), "$attackZoneEnemy", $rt_wrapFunction0(ProjectileEnemy_attackZoneEnemy), "$vanish", $rt_wrapFunction0(ProjectileEnemy_vanish)],
ProjectileTowerEnemy, "ProjectileTowerEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileTowerEnemy__init_), "$act", $rt_wrapFunction0(ProjectileTowerEnemy_act)],
ju_Hashtable$1, 0, jl_Object, [ju_Enumeration], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Hashtable$1__init_)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Hashtable$2, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Hashtable$2__init_)],
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, ["$_init_23", $rt_wrapFunction2(ju_MapEntry__init_), "$equals", $rt_wrapFunction1(ju_MapEntry_equals), "$getKey", $rt_wrapFunction0(ju_MapEntry_getKey), "$getValue", $rt_wrapFunction0(ju_MapEntry_getValue), "$hashCode1", $rt_wrapFunction0(ju_MapEntry_hashCode)],
ju_Hashtable$Entry, 0, ju_MapEntry, [], 0, 0, 0, 0, ["$_init_23", $rt_wrapFunction2(ju_Hashtable$Entry__init_), "$getKeyHash", $rt_wrapFunction0(ju_Hashtable$Entry_getKeyHash), "$equalsKey", $rt_wrapFunction2(ju_Hashtable$Entry_equalsKey)],
TroopAllySkeleton, "TroopAllySkeleton", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllySkeleton__init_), "$act", $rt_wrapFunction0(TroopAllySkeleton_act)],
g_MouseInfoVisitor, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_MouseInfoVisitor__init_)],
TroopAllyGhostArcher, "TroopAllyGhostArcher", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostArcher__init_), "$act", $rt_wrapFunction0(TroopAllyGhostArcher_act)],
jl_ReflectiveOperationException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_ReflectiveOperationException__init_)],
Card, "Card", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_24", $rt_wrapFunction1(Card__init_), "$act", $rt_wrapFunction0(Card_act), "$checkCard", $rt_wrapFunction1(Card_checkCard)],
CardKnight, "CardKnight", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardKnight__init_), "$act", $rt_wrapFunction0(CardKnight_act)],
jl_ClassCastException, "ClassCastException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_ClassCastException__init_)],
gc_CollisionQuery, 0, jl_Object, [], 3, 3, 0, 0, 0,
gc_GOCollisionQuery, 0, jl_Object, [gc_CollisionQuery], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_GOCollisionQuery__init_), "$init0", $rt_wrapFunction2(gc_GOCollisionQuery_init), "$checkCollision", $rt_wrapFunction1(gc_GOCollisionQuery_checkCollision)]]);
$rt_metadata([TowerBaseCannon, "TowerBaseCannon", -1, Tower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerBaseCannon__init_), "$act", $rt_wrapFunction0(TowerBaseCannon_act)],
gj_Client$_init_$lambda$_1_3, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_3__init_), "$handleEvent0", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_3_handleEvent0), "$handleEvent1", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_3_handleEvent)],
gj_Client$_init_$lambda$_1_2, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_63", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_2__init_), "$handleEvent0", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_2_handleEvent)],
gj_Client$_init_$lambda$_1_1, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_63", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_1__init_), "$handleEvent0", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_1_handleEvent)],
gci_ActorNode, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_69", $rt_wrapFunction2(gci_ActorNode__init_), "$clearMark", $rt_wrapFunction0(gci_ActorNode_clearMark), "$mark", $rt_wrapFunction0(gci_ActorNode_mark), "$checkMark", $rt_wrapFunction0(gci_ActorNode_checkMark), "$getBSPNode", $rt_wrapFunction0(gci_ActorNode_getBSPNode), "$getNext", $rt_wrapFunction0(gci_ActorNode_getNext), "$remove1", $rt_wrapFunction0(gci_ActorNode_remove), "$removed", $rt_wrapFunction0(gci_ActorNode_removed)],
g_Color, 0, jl_Object, [], 0, 3, 0, g_Color_$callClinit, ["$_init_9", $rt_wrapFunction3(g_Color__init_0), "$getRed", $rt_wrapFunction0(g_Color_getRed), "$getGreen", $rt_wrapFunction0(g_Color_getGreen), "$getAlpha", $rt_wrapFunction0(g_Color_getAlpha), "$getBlue", $rt_wrapFunction0(g_Color_getBlue)],
gj_Client$getResourceURL$lambda$_11_0, 0, jl_Object, [gj_ContentReceiver], 0, 3, 0, 0, ["$_init_67", $rt_wrapFunction2(gj_Client$getResourceURL$lambda$_11_0__init_), "$gotContent", $rt_wrapFunction1(gj_Client$getResourceURL$lambda$_11_0_gotContent)],
gj_Client$_init_$lambda$_1_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_0__init_), "$handleEvent0", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_0_handleEvent0), "$handleEvent1", $rt_wrapFunction1(gj_Client$_init_$lambda$_1_0_handleEvent)],
gj_Client$getResourceURL$lambda$_11_1, 0, jl_Object, [gj_ErrorCallback], 0, 3, 0, 0, ["$_init_68", $rt_wrapFunction2(gj_Client$getResourceURL$lambda$_11_1__init_), "$gotError", $rt_wrapFunction0(gj_Client$getResourceURL$lambda$_11_1_gotError)],
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
SpellEnemy, "SpellEnemy", -1, Spell, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(SpellEnemy__init_), "$act", $rt_wrapFunction0(SpellEnemy_act), "$findEnemy", $rt_wrapFunction0(SpellEnemy_findEnemy), "$doZoneDamage", $rt_wrapFunction0(SpellEnemy_doZoneDamage), "$changeSprite", $rt_wrapFunction0(SpellEnemy_changeSprite), "$moveImages", $rt_wrapFunction0(SpellEnemy_moveImages), "$attackImages", $rt_wrapFunction0(SpellEnemy_attackImages)],
gci_Rect, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_4", $rt_wrapFunction4(gci_Rect__init_0), "$copyFrom", $rt_wrapFunction1(gci_Rect_copyFrom), "$getX", $rt_wrapFunction0(gci_Rect_getX), "$getMiddleX", $rt_wrapFunction0(gci_Rect_getMiddleX), "$getRight", $rt_wrapFunction0(gci_Rect_getRight), "$getY", $rt_wrapFunction0(gci_Rect_getY), "$getMiddleY", $rt_wrapFunction0(gci_Rect_getMiddleY), "$getTop", $rt_wrapFunction0(gci_Rect_getTop), "$getWidth", $rt_wrapFunction0(gci_Rect_getWidth), "$getHeight", $rt_wrapFunction0(gci_Rect_getHeight),
"$contains", $rt_wrapFunction1(gci_Rect_contains), "$setX", $rt_wrapFunction1(gci_Rect_setX), "$setY", $rt_wrapFunction1(gci_Rect_setY), "$intersects", $rt_wrapFunction1(gci_Rect_intersects)],
gs_SoundFactory, 0, jl_Object, [], 0, 3, 0, gs_SoundFactory_$callClinit, ["$createSound", $rt_wrapFunction2(gs_SoundFactory_createSound)],
CardGoblinSpear, "CardGoblinSpear", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardGoblinSpear__init_), "$act", $rt_wrapFunction0(CardGoblinSpear_act)],
CardArcher, "CardArcher", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardArcher__init_), "$act", $rt_wrapFunction0(CardArcher_act)],
ji_IOException, "IOException", 2, jl_Exception, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ji_IOException__init_0), "$_init_", $rt_wrapFunction1(ji_IOException__init_1)],
ScoreOverlayUp, "ScoreOverlayUp", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ScoreOverlayUp__init_), "$act", $rt_wrapFunction0(ScoreOverlayUp_act)],
gc_PointCollisionQuery, 0, jl_Object, [gc_CollisionQuery], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_PointCollisionQuery__init_), "$init", $rt_wrapFunction3(gc_PointCollisionQuery_init), "$checkCollision", $rt_wrapFunction1(gc_PointCollisionQuery_checkCollision)],
gc_CollisionChecker, 0, jl_Object, [], 3, 3, 0, 0, 0,
gci_IBSPColChecker, 0, jl_Object, [gc_CollisionChecker], 0, 3, 0, gci_IBSPColChecker_$callClinit, ["$_init_0", $rt_wrapFunction0(gci_IBSPColChecker__init_), "$initialize0", $rt_wrapFunction4(gci_IBSPColChecker_initialize), "$addObject", $rt_wrapFunction1(gci_IBSPColChecker_addObject), "$getActorBounds", $rt_wrapFunction1(gci_IBSPColChecker_getActorBounds), "$removeObject", $rt_wrapFunction1(gci_IBSPColChecker_removeObject), "$updateObjectLocation", $rt_wrapFunction3(gci_IBSPColChecker_updateObjectLocation),
"$updateObjectSize", $rt_wrapFunction1(gci_IBSPColChecker_updateObjectSize), "$getOneIntersectingUp", $rt_wrapFunction4(gci_IBSPColChecker_getOneIntersectingUp), "$getObjectsAt", $rt_wrapFunction3(gci_IBSPColChecker_getObjectsAt), "$getObjectsInRange", $rt_wrapFunction4(gci_IBSPColChecker_getObjectsInRange), "$startSequence", $rt_wrapFunction0(gci_IBSPColChecker_startSequence), "$getOneIntersectingObject", $rt_wrapFunction2(gci_IBSPColChecker_getOneIntersectingObject)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next), "$remove1", $rt_wrapFunction0(ju_AbstractList$1_remove)],
CardPoison, "CardPoison", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardPoison__init_), "$act", $rt_wrapFunction0(CardPoison_act)],
Music, "Music", -1, g_Actor, [], 0, 3, 0, Music_$callClinit, ["$_init_0", $rt_wrapFunction0(Music__init_), "$act", $rt_wrapFunction0(Music_act)],
ZoneTroopsPlaceLeft, "ZoneTroopsPlaceLeft", -1, ZoneTroopsPlace, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ZoneTroopsPlaceLeft__init_)],
ProjectileCannonEnemy, "ProjectileCannonEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileCannonEnemy__init_), "$act", $rt_wrapFunction0(ProjectileCannonEnemy_act)],
gc_ActInterruptedException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_ActInterruptedException__init_)],
gc_ImageCache, 0, jl_Object, [], 0, 3, 0, gc_ImageCache_$callClinit, ["$_init_0", $rt_wrapFunction0(gc_ImageCache__init_), "$addCachedImage", $rt_wrapFunction2(gc_ImageCache_addCachedImage), "$getCachedImage", $rt_wrapFunction1(gc_ImageCache_getCachedImage)],
DoubleElixirText, "DoubleElixirText", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(DoubleElixirText__init_), "$act", $rt_wrapFunction0(DoubleElixirText_act)],
ge_WorldListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
gc_Simulation, 0, jl_Thread, [ge_WorldListener], 0, 3, 0, gc_Simulation_$callClinit, ["$attachWorldHandler", $rt_wrapFunction1(gc_Simulation_attachWorldHandler), "$run", $rt_wrapFunction0(gc_Simulation_run), "$setPaused", $rt_wrapFunction1(gc_Simulation_setPaused), "$setEnabled", $rt_wrapFunction1(gc_Simulation_setEnabled), "$addSimulationListener", $rt_wrapFunction1(gc_Simulation_addSimulationListener), "$setSpeed", $rt_wrapFunction1(gc_Simulation_setSpeed), "$getSpeed", $rt_wrapFunction0(gc_Simulation_getSpeed),
"$worldCreated", $rt_wrapFunction1(gc_Simulation_worldCreated), "$worldRemoved", $rt_wrapFunction1(gc_Simulation_worldRemoved)],
g_GreenfootSound, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(g_GreenfootSound__init_), "$play", $rt_wrapFunction0(g_GreenfootSound_play), "$stop", $rt_wrapFunction0(g_GreenfootSound_stop), "$isPlaying", $rt_wrapFunction0(g_GreenfootSound_isPlaying), "$setVolume", $rt_wrapFunction1(g_GreenfootSound_setVolume)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jlr_Array__init_)],
jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0__init_), "$run", $rt_wrapFunction0(jl_Object$NotifyListenerImpl$interrupted$lambda$_4_0_run)],
gu_GreenfootUtil, 0, jl_Object, [], 0, 3, 0, gu_GreenfootUtil_$callClinit, ["$_init_0", $rt_wrapFunction0(gu_GreenfootUtil__init_)],
ju_ListIterator, 0, jl_Object, [ju_Iterator], 3, 3, 0, 0, 0,
SpellAllyGround, "SpellAllyGround", -1, SpellAlly, [], 0, 3, 0, 0, ["$_init_13", function(var_1, var_2, var_3, var_4, var_5, var_6) { SpellAllyGround__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcit_DoubleAnalyzer$Result__init_)],
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Random__init_), "$nextInt", $rt_wrapFunction1(ju_Random_nextInt), "$nextDouble", $rt_wrapFunction0(ju_Random_nextDouble)],
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
MenuButtonStart, "MenuButtonStart", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(MenuButtonStart__init_), "$act", $rt_wrapFunction0(MenuButtonStart_act)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractCollection__init_), "$isEmpty", $rt_wrapFunction0(ju_AbstractCollection_isEmpty), "$toArray", $rt_wrapFunction1(ju_AbstractCollection_toArray), "$remove", $rt_wrapFunction1(ju_AbstractCollection_remove), "$addAll", $rt_wrapFunction1(ju_AbstractCollection_addAll)],
gu_GraphicsUtilities, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gu_GraphicsUtilities__init_)],
ji_ByteArrayInputStream, 0, ji_InputStream, [], 0, 3, 0, 0, ["$_init_32", $rt_wrapFunction3(ji_ByteArrayInputStream__init_), "$_init_64", $rt_wrapFunction1(ji_ByteArrayInputStream__init_0), "$read", $rt_wrapFunction3(ji_ByteArrayInputStream_read)],
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_InstantiationException, "InstantiationException", 3, jl_ReflectiveOperationException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_InstantiationException__init_)],
jl_Thread$UncaughtExceptionHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_DefaultUncaughtExceptionHandler, 0, jl_Object, [jl_Thread$UncaughtExceptionHandler], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_DefaultUncaughtExceptionHandler__init_), "$uncaughtException", $rt_wrapFunction2(jl_DefaultUncaughtExceptionHandler_uncaughtException)],
TroopAllyAir, "TroopAllyAir", -1, TroopAlly, [], 0, 3, 0, 0, ["$_init_12", function(var_1, var_2, var_3, var_4, var_5, var_6) { TroopAllyAir__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }]]);
$rt_metadata([TroopAllyDragonBaby, "TroopAllyDragonBaby", -1, TroopAllyAir, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyDragonBaby__init_), "$act", $rt_wrapFunction0(TroopAllyDragonBaby_act)],
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcir_FieldInfo__init_)],
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
EndState, "EndState", -1, Overlay, [], 0, 3, 0, 0, ["$_init_14", $rt_wrapFunction1(EndState__init_), "$act", $rt_wrapFunction0(EndState_act)],
g_ImageVisitor, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_ImageVisitor__init_)],
ScoreOverlayDown, "ScoreOverlayDown", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ScoreOverlayDown__init_), "$act", $rt_wrapFunction0(ScoreOverlayDown_act)],
TroopAllyGhostGoblinSpear, "TroopAllyGhostGoblinSpear", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostGoblinSpear__init_), "$act", $rt_wrapFunction0(TroopAllyGhostGoblinSpear_act)],
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
TroopEnemyGiant, "TroopEnemyGiant", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyGiant__init_), "$act", $rt_wrapFunction0(TroopEnemyGiant_act)],
TowerEnemy, "TowerEnemy", -1, Tower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerEnemy__init_), "$findEnemy", $rt_wrapFunction0(TowerEnemy_findEnemy), "$findEnemyGround", $rt_wrapFunction0(TowerEnemy_findEnemyGround), "$createProjectile3", $rt_wrapFunction2(TowerEnemy_createProjectile)],
TowerEnemyBuilding, "TowerEnemyBuilding", -1, TowerEnemy, [], 0, 3, 0, 0, ["$_init_4", $rt_wrapFunction4(TowerEnemyBuilding__init_), "$decay", $rt_wrapFunction0(TowerEnemyBuilding_decay)],
TowerUpCannon, "TowerUpCannon", -1, TowerEnemyBuilding, [], 0, 3, 0, 0, ["$_init_15", $rt_wrapFunction1(TowerUpCannon__init_), "$act", $rt_wrapFunction0(TowerUpCannon_act)],
SpellEnemyAir, "SpellEnemyAir", -1, SpellEnemy, [], 0, 3, 0, 0, ["$_init_13", function(var_1, var_2, var_3, var_4, var_5, var_6) { SpellEnemyAir__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
SpellEnemyFireball, "SpellEnemyFireball", -1, SpellEnemyAir, [], 0, 3, 0, 0, ["$_init_7", $rt_wrapFunction2(SpellEnemyFireball__init_), "$act", $rt_wrapFunction0(SpellEnemyFireball_act)],
CardNextOverlay, "CardNextOverlay", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardNextOverlay__init_)],
jn_URLStreamHandlerFactory, 0, jl_Object, [], 3, 3, 0, 0, 0,
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
CardDeck, "CardDeck", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_14", $rt_wrapFunction1(CardDeck__init_), "$act", $rt_wrapFunction0(CardDeck_act), "$checkTouching", $rt_wrapFunction0(CardDeck_checkTouching)],
jl_Object$monitorEnterWait$lambda$_6_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction4(jl_Object$monitorEnterWait$lambda$_6_0__init_), "$run", $rt_wrapFunction0(jl_Object$monitorEnterWait$lambda$_6_0_run)],
TowerAlly, "TowerAlly", -1, Tower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerAlly__init_), "$findEnemy", $rt_wrapFunction0(TowerAlly_findEnemy), "$findEnemyGround", $rt_wrapFunction0(TowerAlly_findEnemyGround), "$createProjectile4", $rt_wrapFunction2(TowerAlly_createProjectile)],
TowerAllyBuilding, "TowerAllyBuilding", -1, TowerAlly, [], 0, 3, 0, 0, ["$_init_4", $rt_wrapFunction4(TowerAllyBuilding__init_), "$decay", $rt_wrapFunction0(TowerAllyBuilding_decay)],
TowerDownCannon, "TowerDownCannon", -1, TowerAllyBuilding, [], 0, 3, 0, 0, ["$_init_15", $rt_wrapFunction1(TowerDownCannon__init_), "$act", $rt_wrapFunction0(TowerDownCannon_act)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Objects__init_)],
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
g_GreenfootImage$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_46", $rt_wrapFunction3(g_GreenfootImage$2__init_0), "$handleEvent0", $rt_wrapFunction1(g_GreenfootImage$2_handleEvent)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, ["$_init_30", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
ElixirBarOverlay, "ElixirBarOverlay", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ElixirBarOverlay__init_)],
g_GreenfootImage$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_46", $rt_wrapFunction3(g_GreenfootImage$1__init_0), "$handleEvent0", $rt_wrapFunction1(g_GreenfootImage$1_handleEvent)],
gj_Client$lambda$new$1$lambda$_22_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$lambda$new$1$lambda$_22_0__init_), "$run", $rt_wrapFunction0(gj_Client$lambda$new$1$lambda$_22_0_run)],
ju_Queue, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
CardPekkaMini, "CardPekkaMini", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardPekkaMini__init_), "$act", $rt_wrapFunction0(CardPekkaMini_act)],
jl_ArrayStoreException, "ArrayStoreException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_ArrayStoreException__init_0)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
gs_SoundFactory$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_26", $rt_wrapFunction3(gs_SoundFactory$2__init_), "$handleEvent0", $rt_wrapFunction1(gs_SoundFactory$2_handleEvent)],
TroopAllyGhostPoison, "TroopAllyGhostPoison", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostPoison__init_), "$act", $rt_wrapFunction0(TroopAllyGhostPoison_act)],
gs_SoundFactory$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_25", $rt_wrapFunction2(gs_SoundFactory$1__init_0), "$handleEvent0", $rt_wrapFunction1(gs_SoundFactory$1_handleEvent)],
TroopEnemySkeleton, "TroopEnemySkeleton", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemySkeleton__init_), "$act", $rt_wrapFunction0(TroopEnemySkeleton_act)],
ju_HashMap$AbstractMapIterator, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_38", $rt_wrapFunction1(ju_HashMap$AbstractMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_makeNext)],
ju_HashMap$KeyIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_38", $rt_wrapFunction1(ju_HashMap$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_HashMap$KeyIterator_next)],
jl_Thread$SleepHandler, 0, jl_Object, [otp_PlatformRunnable, otr_EventQueue$Event, jl_ThreadInterruptHandler], 0, 0, 0, 0, ["$_init_20", $rt_wrapFunction2(jl_Thread$SleepHandler__init_), "$interrupted", $rt_wrapFunction0(jl_Thread$SleepHandler_interrupted), "$run", $rt_wrapFunction0(jl_Thread$SleepHandler_run)],
TowerDestroyed, "TowerDestroyed", -1, Tower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerDestroyed__init_), "$act", $rt_wrapFunction0(TowerDestroyed_act)],
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ji_OutputStream__init_)],
ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, ["$_init_40", $rt_wrapFunction1(ji_FilterOutputStream__init_)],
ji_PrintStream, 0, ji_FilterOutputStream, [jl_Appendable], 0, 3, 0, 0, ["$_init_41", $rt_wrapFunction3(ji_PrintStream__init_)],
otcic_JsConsolePrintStream, 0, ji_PrintStream, [], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcic_JsConsolePrintStream__init_), "$println", $rt_wrapFunction1(otcic_JsConsolePrintStream_println1), "$println0", $rt_wrapFunction0(otcic_JsConsolePrintStream_println0), "$println1", $rt_wrapFunction1(otcic_JsConsolePrintStream_println)],
otcic_JSStdoutPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcic_JSStdoutPrintStream__init_), "$print", $rt_wrapFunction1(otcic_JSStdoutPrintStream_print)],
HealthBar, "HealthBar", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction2(HealthBar__init_), "$_init_34", $rt_wrapFunction2(HealthBar__init_0), "$act", $rt_wrapFunction0(HealthBar_act), "$checkHP", $rt_wrapFunction0(HealthBar_checkHP), "$checkBigHP", $rt_wrapFunction0(HealthBar_checkBigHP), "$checkTowerHP", $rt_wrapFunction0(HealthBar_checkTowerHP)],
TroopEnemyKnight, "TroopEnemyKnight", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyKnight__init_), "$act", $rt_wrapFunction0(TroopEnemyKnight_act)],
TroopAllyGolemite, "TroopAllyGolemite", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGolemite__init_), "$act", $rt_wrapFunction0(TroopAllyGolemite_act), "$checkHealth", $rt_wrapFunction0(TroopAllyGolemite_checkHealth)],
gc_ColManager, 0, jl_Object, [gc_CollisionChecker], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_ColManager__init_), "$addObject", $rt_wrapFunction1(gc_ColManager_addObject), "$getObjectsAt", $rt_wrapFunction3(gc_ColManager_getObjectsAt), "$getObjectsInRange", $rt_wrapFunction4(gc_ColManager_getObjectsInRange), "$getOneIntersectingObject", $rt_wrapFunction2(gc_ColManager_getOneIntersectingObject), "$initialize0", $rt_wrapFunction4(gc_ColManager_initialize), "$removeObject", $rt_wrapFunction1(gc_ColManager_removeObject),
"$startSequence", $rt_wrapFunction0(gc_ColManager_startSequence), "$updateObjectLocation", $rt_wrapFunction3(gc_ColManager_updateObjectLocation), "$updateObjectSize", $rt_wrapFunction1(gc_ColManager_updateObjectSize)]]);
$rt_metadata([otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
TowerAllyTower, "TowerAllyTower", -1, TowerAlly, [], 0, 3, 0, 0, ["$_init_9", $rt_wrapFunction3(TowerAllyTower__init_)],
TowerDownKing, "TowerDownKing", -1, TowerAllyTower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerDownKing__init_), "$act", $rt_wrapFunction0(TowerDownKing_act)],
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractSet__init_), "$equals", $rt_wrapFunction1(ju_AbstractSet_equals), "$hashCode1", $rt_wrapFunction0(ju_AbstractSet_hashCode)],
ju_HashSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_HashSet__init_0), "$_init_28", $rt_wrapFunction1(ju_HashSet__init_2), "$_init_38", $rt_wrapFunction1(ju_HashSet__init_), "$add0", $rt_wrapFunction1(ju_HashSet_add), "$contains0", $rt_wrapFunction1(ju_HashSet_contains), "$iterator", $rt_wrapFunction0(ju_HashSet_iterator), "$size", $rt_wrapFunction0(ju_HashSet_size)],
g_ActorSet$ActorSetIterator, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_57", $rt_wrapFunction1(g_ActorSet$ActorSetIterator__init_), "$hasNext", $rt_wrapFunction0(g_ActorSet$ActorSetIterator_hasNext), "$next0", $rt_wrapFunction0(g_ActorSet$ActorSetIterator_next), "$remove1", $rt_wrapFunction0(g_ActorSet$ActorSetIterator_remove), "$next", $rt_wrapFunction0(g_ActorSet$ActorSetIterator_next0)],
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
gp_ActorDelegate, 0, jl_Object, [], 3, 3, 0, 0, 0,
ProjectileSpearAlly, "ProjectileSpearAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileSpearAlly__init_), "$act", $rt_wrapFunction0(ProjectileSpearAlly_act)],
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractList__init_), "$add0", $rt_wrapFunction1(ju_AbstractList_add), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator), "$indexOf1", $rt_wrapFunction1(ju_AbstractList_indexOf), "$hashCode1", $rt_wrapFunction0(ju_AbstractList_hashCode), "$equals", $rt_wrapFunction1(ju_AbstractList_equals)],
ju_AbstractSequentialList, 0, ju_AbstractList, [], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractSequentialList__init_), "$get", $rt_wrapFunction1(ju_AbstractSequentialList_get), "$add1", $rt_wrapFunction2(ju_AbstractSequentialList_add), "$iterator", $rt_wrapFunction0(ju_AbstractSequentialList_iterator)],
ju_Deque, 0, jl_Object, [ju_Queue, ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_LinkedList, 0, ju_AbstractSequentialList, [ju_Deque], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_LinkedList__init_0), "$size", $rt_wrapFunction0(ju_LinkedList_size), "$clear", $rt_wrapFunction0(ju_LinkedList_clear), "$listIterator0", $rt_wrapFunction0(ju_LinkedList_listIterator), "$listIterator", $rt_wrapFunction1(ju_LinkedList_listIterator0), "$remove4", $rt_wrapFunction0(ju_LinkedList_remove), "$poll", $rt_wrapFunction0(ju_LinkedList_poll), "$removeFirst", $rt_wrapFunction0(ju_LinkedList_removeFirst),
"$removeLast", $rt_wrapFunction0(ju_LinkedList_removeLast), "$pollLast", $rt_wrapFunction0(ju_LinkedList_pollLast)],
gs_SoundFactory$1$handleEvent$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(gs_SoundFactory$1$handleEvent$lambda$_1_0__init_), "$run", $rt_wrapFunction0(gs_SoundFactory$1$handleEvent$lambda$_1_0_run)],
ju_NoSuchElementException, "NoSuchElementException", 1, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_NoSuchElementException__init_0)],
otcic_JSStderrPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcic_JSStderrPrintStream__init_), "$print", $rt_wrapFunction1(otcic_JSStderrPrintStream_print)],
TroopAllyPekkaMini, "TroopAllyPekkaMini", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyPekkaMini__init_), "$act", $rt_wrapFunction0(TroopAllyPekkaMini_act)],
oti_AsyncCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
g_GreenfootImage, 0, jl_Object, [], 0, 3, 0, g_GreenfootImage_$callClinit, ["$_init_", $rt_wrapFunction1(g_GreenfootImage__init_), "$_init_7", $rt_wrapFunction2(g_GreenfootImage__init_4), "$_init_45", $rt_wrapFunction1(g_GreenfootImage__init_3), "$getCopyOnWriteClone", $rt_wrapFunction0(g_GreenfootImage_getCopyOnWriteClone), "$createClone", $rt_wrapFunction1(g_GreenfootImage_createClone), "$drawToCanvas", $rt_wrapFunction3(g_GreenfootImage_drawToCanvas), "$getWidth", $rt_wrapFunction0(g_GreenfootImage_getWidth),
"$getHeight", $rt_wrapFunction0(g_GreenfootImage_getHeight), "$scale", $rt_wrapFunction2(g_GreenfootImage_scale), "$fill", $rt_wrapFunction0(g_GreenfootImage_fill), "$drawImage", $rt_wrapFunction3(g_GreenfootImage_drawImage), "$setColor", $rt_wrapFunction1(g_GreenfootImage_setColor), "$setTransparency", $rt_wrapFunction1(g_GreenfootImage_setTransparency), "$getTransparency", $rt_wrapFunction0(g_GreenfootImage_getTransparency), "$fillRect", $rt_wrapFunction4(g_GreenfootImage_fillRect)],
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractMap__init_)],
ProjectileKingAlly, "ProjectileKingAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileKingAlly__init_), "$act", $rt_wrapFunction0(ProjectileKingAlly_act)],
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcir_MethodInfo__init_)],
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$getPlatformClass", $rt_wrapFunction0(jl_Class_getPlatformClass), "$isInstance", $rt_wrapFunction1(jl_Class_isInstance), "$isAssignableFrom", $rt_wrapFunction1(jl_Class_isAssignableFrom), "$getName", $rt_wrapFunction0(jl_Class_getName), "$isPrimitive0", $rt_wrapFunction0(jl_Class_isPrimitive), "$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType), "$getSuperclass", $rt_wrapFunction0(jl_Class_getSuperclass), "$newInstance1", $rt_wrapFunction0(jl_Class_newInstance)],
gc_ImageCache$CachedImageRef, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_29", $rt_wrapFunction3(gc_ImageCache$CachedImageRef__init_), "$get1", $rt_wrapFunction0(gc_ImageCache$CachedImageRef_get)],
TroopAllyGoblinSpear, "TroopAllyGoblinSpear", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGoblinSpear__init_), "$act", $rt_wrapFunction0(TroopAllyGoblinSpear_act)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Arrays__init_)],
gci_BSPNodeCache, 0, jl_Object, [], 0, 3, 0, gci_BSPNodeCache_$callClinit, ["$_init_0", $rt_wrapFunction0(gci_BSPNodeCache__init_)],
gj_MouseManager, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_52", $rt_wrapFunction1(gj_MouseManager__init_), "$newActStarted", $rt_wrapFunction0(gj_MouseManager_newActStarted), "$isMouseClicked", $rt_wrapFunction1(gj_MouseManager_isMouseClicked), "$getMouseInfo", $rt_wrapFunction0(gj_MouseManager_getMouseInfo), "$handleEvent1", $rt_wrapFunction1(gj_MouseManager_handleEvent), "$handleTouchEvent", $rt_wrapFunction1(gj_MouseManager_handleTouchEvent), "$handleEvent0", $rt_wrapFunction1(gj_MouseManager_handleEvent0)],
TroopEnemyGoblinSpear, "TroopEnemyGoblinSpear", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyGoblinSpear__init_), "$act", $rt_wrapFunction0(TroopEnemyGoblinSpear_act)],
ggim_WorldLocator, 0, jl_Object, [], 3, 3, 0, 0, 0,
gc_WorldHandler$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_53", $rt_wrapFunction1(gc_WorldHandler$1__init_), "$handleEvent1", $rt_wrapFunction1(gc_WorldHandler$1_handleEvent0), "$handleEvent0", $rt_wrapFunction1(gc_WorldHandler$1_handleEvent)],
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
g_Greenfoot, 0, jl_Object, [], 0, 3, 0, g_Greenfoot_$callClinit, ["$_init_0", $rt_wrapFunction0(g_Greenfoot__init_)],
gc_InRangeQuery, 0, jl_Object, [gc_CollisionQuery], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_InRangeQuery__init_), "$init1", $rt_wrapFunction3(gc_InRangeQuery_init), "$checkCollision", $rt_wrapFunction1(gc_InRangeQuery_checkCollision)],
MenuDeckText, "MenuDeckText", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(MenuDeckText__init_), "$act", $rt_wrapFunction0(MenuDeckText_act)],
CardGiant, "CardGiant", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardGiant__init_), "$act", $rt_wrapFunction0(CardGiant_act)],
gc_RepaintHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gc_WorldHandler$2, 0, jl_Object, [gc_RepaintHandler], 0, 0, 0, 0, ["$_init_53", $rt_wrapFunction1(gc_WorldHandler$2__init_), "$doRepaint", $rt_wrapFunction0(gc_WorldHandler$2_doRepaint)],
MenuScreenMainText, "MenuScreenMainText", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(MenuScreenMainText__init_), "$act", $rt_wrapFunction0(MenuScreenMainText_act)],
MenuButtonDifficulty, "MenuButtonDifficulty", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(MenuButtonDifficulty__init_), "$act", $rt_wrapFunction0(MenuButtonDifficulty_act), "$arrival", $rt_wrapFunction0(MenuButtonDifficulty_arrival), "$checkClick", $rt_wrapFunction0(MenuButtonDifficulty_checkClick)],
ju_LinkedList$Entry, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_LinkedList$Entry__init_)],
ProjectileArrowAlly, "ProjectileArrowAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileArrowAlly__init_), "$act", $rt_wrapFunction0(ProjectileArrowAlly_act)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
ElixirBar, "ElixirBar", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ElixirBar__init_), "$act", $rt_wrapFunction0(ElixirBar_act), "$changeSize", $rt_wrapFunction0(ElixirBar_changeSize), "$useElixir", $rt_wrapFunction1(ElixirBar_useElixir)],
TroopEnemyGolem, "TroopEnemyGolem", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyGolem__init_), "$act", $rt_wrapFunction0(TroopEnemyGolem_act), "$checkHealth", $rt_wrapFunction0(TroopEnemyGolem_checkHealth)]]);
$rt_metadata([jl_Object$monitorExit$lambda$_8_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(jl_Object$monitorExit$lambda$_8_0__init_), "$run", $rt_wrapFunction0(jl_Object$monitorExit$lambda$_8_0_run)],
CardNext, "CardNext", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardNext__init_), "$act", $rt_wrapFunction0(CardNext_act), "$checkCard0", $rt_wrapFunction0(CardNext_checkCard)],
g_GreenfootImage$2$handleEvent$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(g_GreenfootImage$2$handleEvent$lambda$_1_0__init_), "$run", $rt_wrapFunction0(g_GreenfootImage$2$handleEvent$lambda$_1_0_run)],
ggim_PriorityManager, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ggim_PriorityManager__init_)],
jl_Thread$SleepHandler$interrupted$lambda$_1_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_39", $rt_wrapFunction1(jl_Thread$SleepHandler$interrupted$lambda$_1_0__init_), "$run", $rt_wrapFunction0(jl_Thread$SleepHandler$interrupted$lambda$_1_0_run)],
ProjectileSpearEnemy, "ProjectileSpearEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileSpearEnemy__init_), "$act", $rt_wrapFunction0(ProjectileSpearEnemy_act)],
g_ActorVisitor, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_ActorVisitor__init_)],
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcir_ClassList__init_)],
SpellEnemyGround, "SpellEnemyGround", -1, SpellEnemy, [], 0, 3, 0, 0, ["$_init_13", function(var_1, var_2, var_3, var_4, var_5, var_6) { SpellEnemyGround__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
SpellEnemyPoison, "SpellEnemyPoison", -1, SpellEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(SpellEnemyPoison__init_), "$act", $rt_wrapFunction0(SpellEnemyPoison_act)],
TroopAllyArcher, "TroopAllyArcher", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyArcher__init_), "$act", $rt_wrapFunction0(TroopAllyArcher_act)],
otc_ResourceSource, 0, jl_Object, [], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otc_ResourceSource__init_)],
SpellAllyPoison, "SpellAllyPoison", -1, SpellAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(SpellAllyPoison__init_), "$act", $rt_wrapFunction0(SpellAllyPoison_act)],
ju_Dictionary, 0, jl_Object, [], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Dictionary__init_)],
TroopAllyKnight, "TroopAllyKnight", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyKnight__init_), "$act", $rt_wrapFunction0(TroopAllyKnight_act)],
ggim_MouseEventData, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ggim_MouseEventData__init_0), "$init2", $rt_wrapFunction0(ggim_MouseEventData_init), "$getMouseInfo", $rt_wrapFunction0(ggim_MouseEventData_getMouseInfo), "$isMousePressed", $rt_wrapFunction1(ggim_MouseEventData_isMousePressed), "$mousePressed", $rt_wrapFunction4(ggim_MouseEventData_mousePressed), "$isMouseClicked", $rt_wrapFunction1(ggim_MouseEventData_isMouseClicked), "$mouseClicked0", function(var_1, var_2, var_3, var_4, var_5)
{ ggim_MouseEventData_mouseClicked(this, var_1, var_2, var_3, var_4, var_5); }, "$isMouseDragged", $rt_wrapFunction1(ggim_MouseEventData_isMouseDragged), "$mouseDragged", $rt_wrapFunction4(ggim_MouseEventData_mouseDragged), "$isMouseDragEnded", $rt_wrapFunction1(ggim_MouseEventData_isMouseDragEnded), "$mouseDragEnded", $rt_wrapFunction4(ggim_MouseEventData_mouseDragEnded), "$mouseExited", $rt_wrapFunction0(ggim_MouseEventData_mouseExited), "$isMouseMoved", $rt_wrapFunction1(ggim_MouseEventData_isMouseMoved),
"$mouseMoved", $rt_wrapFunction4(ggim_MouseEventData_mouseMoved), "$getActor", $rt_wrapFunction0(ggim_MouseEventData_getActor), "$getButton", $rt_wrapFunction0(ggim_MouseEventData_getButton)],
ju_HashMap$1, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$_init_38", $rt_wrapFunction1(ju_HashMap$1__init_), "$iterator", $rt_wrapFunction0(ju_HashMap$1_iterator)],
TroopAllyGhostCannon, "TroopAllyGhostCannon", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostCannon__init_), "$act", $rt_wrapFunction0(TroopAllyGhostCannon_act)],
TroopEnemyGolemite, "TroopEnemyGolemite", -1, TroopEnemyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyGolemite__init_), "$act", $rt_wrapFunction0(TroopEnemyGolemite_act), "$checkHealth", $rt_wrapFunction0(TroopEnemyGolemite_checkHealth)],
jl_Double, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Double_$callClinit, 0,
g_ActorSet$ListNode, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_57", $rt_wrapFunction1(g_ActorSet$ListNode__init_0), "$_init_58", $rt_wrapFunction3(g_ActorSet$ListNode__init_), "$setHashListHead", $rt_wrapFunction1(g_ActorSet$ListNode_setHashListHead), "$remove1", $rt_wrapFunction0(g_ActorSet$ListNode_remove)],
ProjectileKingEnemy, "ProjectileKingEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileKingEnemy__init_), "$act", $rt_wrapFunction0(ProjectileKingEnemy_act)],
TowerEnemyTower, "TowerEnemyTower", -1, TowerEnemy, [], 0, 3, 0, 0, ["$_init_9", $rt_wrapFunction3(TowerEnemyTower__init_)],
TowerUpPrincess, "TowerUpPrincess", -1, TowerEnemyTower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerUpPrincess__init_), "$act", $rt_wrapFunction0(TowerUpPrincess_act)],
ge_SimulationEvent, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction2(ge_SimulationEvent__init_0), "$getType0", $rt_wrapFunction0(ge_SimulationEvent_getType)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_ArrayList__init_1), "$_init_14", $rt_wrapFunction1(ju_ArrayList__init_), "$_init_28", $rt_wrapFunction1(ju_ArrayList__init_2), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$add0", $rt_wrapFunction1(ju_ArrayList_add), "$remove2", $rt_wrapFunction1(ju_ArrayList_remove),
"$remove", $rt_wrapFunction1(ju_ArrayList_remove0)],
jl_IllegalMonitorStateException, "IllegalMonitorStateException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IllegalMonitorStateException__init_0)],
ju_LinkedList$SequentialListIterator, 0, jl_Object, [ju_ListIterator], 0, 0, 0, 0, ["$_init_44", $rt_wrapFunction4(ju_LinkedList$SequentialListIterator__init_0), "$hasNext", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_hasNext), "$next", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_next), "$remove1", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_remove), "$hasPrevious", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_hasPrevious), "$add2", $rt_wrapFunction1(ju_LinkedList$SequentialListIterator_add)],
gj_KeyboardManager, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gj_KeyboardManager__init_), "$handleEvent2", $rt_wrapFunction1(gj_KeyboardManager_handleEvent), "$getKey0", $rt_wrapFunction0(gj_KeyboardManager_getKey), "$clearLatches", $rt_wrapFunction0(gj_KeyboardManager_clearLatches), "$handleEvent0", $rt_wrapFunction1(gj_KeyboardManager_handleEvent0)],
CardFireball, "CardFireball", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardFireball__init_), "$act", $rt_wrapFunction0(CardFireball_act)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, ["$_init_0", $rt_wrapFunction0(jl_String__init_), "$_init_33", $rt_wrapFunction1(jl_String__init_2), "$_init_2", $rt_wrapFunction1(jl_String__init_3), "$_init_22", $rt_wrapFunction3(jl_String__init_4), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$startsWith0", $rt_wrapFunction2(jl_String_startsWith),
"$startsWith", $rt_wrapFunction1(jl_String_startsWith0), "$endsWith", $rt_wrapFunction1(jl_String_endsWith), "$indexOf0", $rt_wrapFunction2(jl_String_indexOf), "$indexOf", $rt_wrapFunction1(jl_String_indexOf0), "$substring", $rt_wrapFunction2(jl_String_substring), "$substring0", $rt_wrapFunction1(jl_String_substring0), "$subSequence", $rt_wrapFunction2(jl_String_subSequence), "$toString", $rt_wrapFunction0(jl_String_toString), "$toCharArray", $rt_wrapFunction0(jl_String_toCharArray), "$equals", $rt_wrapFunction1(jl_String_equals),
"$hashCode1", $rt_wrapFunction0(jl_String_hashCode), "$toLowerCase", $rt_wrapFunction0(jl_String_toLowerCase)],
gp_SimulationDelegate, 0, jl_Object, [], 3, 3, 0, 0, 0,
gj_Client$2, 0, jl_Object, [gp_SimulationDelegate], 0, 0, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$2__init_), "$setSpeed", $rt_wrapFunction1(gj_Client$2_setSpeed)],
ZoneTroopsOverlay, "ZoneTroopsOverlay", -1, Overlay, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ZoneTroopsOverlay__init_), "$act", $rt_wrapFunction0(ZoneTroopsOverlay_act), "$checkTowers", $rt_wrapFunction0(ZoneTroopsOverlay_checkTowers)],
gj_Client$1, 0, otc_ResourceSource, [], 0, 0, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$1__init_)],
gj_Client$4, 0, jl_Object, [jn_URLStreamHandlerFactory], 0, 0, 0, 0, ["$_init_62", $rt_wrapFunction1(gj_Client$4__init_)],
CardGolem, "CardGolem", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardGolem__init_), "$act", $rt_wrapFunction0(CardGolem_act)],
ge_SimulationListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
gj_Client$3, 0, jl_Object, [ge_SimulationListener], 0, 0, 0, 0, ["$_init_66", function(var_1, var_2, var_3, var_4, var_5) { gj_Client$3__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$simulationChanged", $rt_wrapFunction1(gj_Client$3_simulationChanged)],
jl_NegativeArraySizeException, "NegativeArraySizeException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
g_TreeActorSet$TasIterator, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_60", $rt_wrapFunction1(g_TreeActorSet$TasIterator__init_), "$next0", $rt_wrapFunction0(g_TreeActorSet$TasIterator_next0), "$hasNext", $rt_wrapFunction0(g_TreeActorSet$TasIterator_hasNext), "$next", $rt_wrapFunction0(g_TreeActorSet$TasIterator_next)],
jl_UnsupportedOperationException, "UnsupportedOperationException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_UnsupportedOperationException__init_), "$_init_", $rt_wrapFunction1(jl_UnsupportedOperationException__init_0)],
otjde_MouseEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
ju_Hashtable, 0, ju_Dictionary, [ju_Map, jl_Cloneable, ji_Serializable], 0, 3, 0, ju_Hashtable_$callClinit, ["$_init_0", $rt_wrapFunction0(ju_Hashtable__init_), "$_init_14", $rt_wrapFunction1(ju_Hashtable__init_0), "$get0", $rt_wrapFunction1(ju_Hashtable_get), "$put", $rt_wrapFunction2(ju_Hashtable_put), "$rehash", $rt_wrapFunction0(ju_Hashtable_rehash)],
ju_Properties, 0, ju_Hashtable, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Properties__init_), "$getProperty", $rt_wrapFunction1(ju_Properties_getProperty), "$load", $rt_wrapFunction1(ju_Properties_load)],
TroopAllyGhostPekkaMini, "TroopAllyGhostPekkaMini", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostPekkaMini__init_), "$act", $rt_wrapFunction0(TroopAllyGhostPekkaMini_act)],
TroopAllyGhostFireball, "TroopAllyGhostFireball", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostFireball__init_), "$act", $rt_wrapFunction0(TroopAllyGhostFireball_act)],
TroopAllyGhostGolem, "TroopAllyGhostGolem", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostGolem__init_), "$act", $rt_wrapFunction0(TroopAllyGhostGolem_act)],
jl_IllegalArgumentException, "IllegalArgumentException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IllegalArgumentException__init_0), "$_init_", $rt_wrapFunction1(jl_IllegalArgumentException__init_2)]]);
$rt_metadata([jl_NumberFormatException, "NumberFormatException", 3, jl_IllegalArgumentException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_NumberFormatException__init_1), "$_init_", $rt_wrapFunction1(jl_NumberFormatException__init_)],
gc_NeighbourCollisionQuery, 0, jl_Object, [gc_CollisionQuery], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(gc_NeighbourCollisionQuery__init_)],
CardChoice, "CardChoice", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(CardChoice__init_), "$act", $rt_wrapFunction0(CardChoice_act)],
ProjectileFireballAlly, "ProjectileFireballAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileFireballAlly__init_), "$act", $rt_wrapFunction0(ProjectileFireballAlly_act)],
CardDragonBaby, "CardDragonBaby", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardDragonBaby__init_), "$act", $rt_wrapFunction0(CardDragonBaby_act)],
gc_WorldHandler, 0, jl_Object, [ge_SimulationListener, ggim_WorldLocator], 0, 3, 0, 0, ["$enableMouseListening", $rt_wrapFunction0(gc_WorldHandler_enableMouseListening), "$disableMouseListening", $rt_wrapFunction0(gc_WorldHandler_disableMouseListening), "$getKeyboardManager", $rt_wrapFunction0(gc_WorldHandler_getKeyboardManager), "$getMouseManager", $rt_wrapFunction0(gc_WorldHandler_getMouseManager), "$setInitialisingWorld", $rt_wrapFunction1(gc_WorldHandler_setInitialisingWorld), "$objectAddedToWorld", $rt_wrapFunction1(gc_WorldHandler_objectAddedToWorld),
"$getWorld", $rt_wrapFunction0(gc_WorldHandler_getWorld), "$setWorld", $rt_wrapFunction1(gc_WorldHandler_setWorld), "$repaint", $rt_wrapFunction0(gc_WorldHandler_repaint), "$addWorldListener", $rt_wrapFunction1(gc_WorldHandler_addWorldListener), "$simulationChanged", $rt_wrapFunction1(gc_WorldHandler_simulationChanged), "$hasWorld", $rt_wrapFunction0(gc_WorldHandler_hasWorld), "$discardWorld", $rt_wrapFunction0(gc_WorldHandler_discardWorld), "$getTopMostActorAt", $rt_wrapFunction2(gc_WorldHandler_getTopMostActorAt),
"$getTranslatedX", $rt_wrapFunction1(gc_WorldHandler_getTranslatedX), "$getTranslatedY", $rt_wrapFunction1(gc_WorldHandler_getTranslatedY)],
TowerUpKing, "TowerUpKing", -1, TowerEnemyTower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerUpKing__init_), "$act", $rt_wrapFunction0(TowerUpKing_act)],
otjde_KeyboardEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
CardCannon, "CardCannon", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardCannon__init_), "$act", $rt_wrapFunction0(CardCannon_act)],
jl_ClassNotFoundException, "ClassNotFoundException", 3, jl_ReflectiveOperationException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_ClassNotFoundException__init_)],
gj_MouseManager$1$handleEvent$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_59", $rt_wrapFunction3(gj_MouseManager$1$handleEvent$lambda$_1_0__init_), "$run", $rt_wrapFunction0(gj_MouseManager$1$handleEvent$lambda$_1_0_run)],
jl_IllegalStateException, "IllegalStateException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IllegalStateException__init_), "$_init_", $rt_wrapFunction1(jl_IllegalStateException__init_1)],
TroopAllyGhostSkeleton, "TroopAllyGhostSkeleton", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostSkeleton__init_), "$act", $rt_wrapFunction0(TroopAllyGhostSkeleton_act)],
ge_WorldEvent, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_55", $rt_wrapFunction1(ge_WorldEvent__init_0)],
TroopAllyGolem, "TroopAllyGolem", -1, TroopAllyGround, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGolem__init_), "$act", $rt_wrapFunction0(TroopAllyGolem_act), "$checkHealth", $rt_wrapFunction0(TroopAllyGolem_checkHealth)],
jn_URL, 0, jl_Object, [ji_Serializable], 4, 3, 0, jn_URL_$callClinit, 0,
TroopEnemyAir, "TroopEnemyAir", -1, TroopEnemy, [], 0, 3, 0, 0, ["$_init_12", function(var_1, var_2, var_3, var_4, var_5, var_6) { TroopEnemyAir__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }],
TroopEnemyDragonBaby, "TroopEnemyDragonBaby", -1, TroopEnemyAir, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopEnemyDragonBaby__init_), "$act", $rt_wrapFunction0(TroopEnemyDragonBaby_act), "$findEnemy", $rt_wrapFunction0(TroopEnemyDragonBaby_findEnemy), "$createArrow", $rt_wrapFunction1(TroopEnemyDragonBaby_createArrow), "$createArrow0", $rt_wrapFunction1(TroopEnemyDragonBaby_createArrow0)],
jl_NullPointerException, "NullPointerException", 3, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(jl_NullPointerException__init_2), "$_init_0", $rt_wrapFunction0(jl_NullPointerException__init_1)],
TroopAllyGhostKnight, "TroopAllyGhostKnight", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostKnight__init_), "$act", $rt_wrapFunction0(TroopAllyGhostKnight_act)],
otpp_AsyncCallbackWrapper, 0, jl_Object, [oti_AsyncCallback], 0, 0, 0, 0, ["$_init_56", $rt_wrapFunction1(otpp_AsyncCallbackWrapper__init_), "$complete", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_complete), "$error", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_error)],
MenuScreenMainLogo, "MenuScreenMainLogo", -1, g_Actor, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(MenuScreenMainLogo__init_), "$act", $rt_wrapFunction0(MenuScreenMainLogo_act)],
jl_Object$Monitor, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Object$Monitor__init_)],
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_HashMap$HashMapEntrySet, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$_init_38", $rt_wrapFunction1(ju_HashMap$HashMapEntrySet__init_), "$size", $rt_wrapFunction0(ju_HashMap$HashMapEntrySet_size), "$iterator", $rt_wrapFunction0(ju_HashMap$HashMapEntrySet_iterator)],
g_ActorSet, 0, ju_AbstractSet, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_ActorSet__init_), "$hashCode1", $rt_wrapFunction0(g_ActorSet_hashCode), "$add", $rt_wrapFunction1(g_ActorSet_add), "$contains1", $rt_wrapFunction1(g_ActorSet_contains0), "$contains0", $rt_wrapFunction1(g_ActorSet_contains), "$remove0", $rt_wrapFunction1(g_ActorSet_remove0), "$size", $rt_wrapFunction0(g_ActorSet_size), "$iterator", $rt_wrapFunction0(g_ActorSet_iterator), "$add0", $rt_wrapFunction1(g_ActorSet_add0)],
g_WorldVisitor, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_WorldVisitor__init_)],
gj_MouseManager$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_49", $rt_wrapFunction1(gj_MouseManager$1__init_), "$handleEvent1", $rt_wrapFunction1(gj_MouseManager$1_handleEvent), "$handleEvent0", $rt_wrapFunction1(gj_MouseManager$1_handleEvent0)],
otji_JSWrapper$Helper$FinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 0, 0, 0, 0,
ProjectileFireballEnemy, "ProjectileFireballEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileFireballEnemy__init_), "$act", $rt_wrapFunction0(ProjectileFireballEnemy_act)],
DeckMenuWorld, "DeckMenuWorld", -1, g_World, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(DeckMenuWorld__init_)],
TowerDownPrincess, "TowerDownPrincess", -1, TowerAllyTower, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TowerDownPrincess__init_), "$act", $rt_wrapFunction0(TowerDownPrincess_act)],
gj_JsActorDelegate, 0, jl_Object, [gp_ActorDelegate], 0, 3, 0, 0, ["$_init_65", $rt_wrapFunction1(gj_JsActorDelegate__init_), "$getImage0", $rt_wrapFunction1(gj_JsActorDelegate_getImage)],
jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0__init_), "$run", $rt_wrapFunction0(jl_Object$NotifyListenerImpl$onTimer$lambda$_2_0_run)],
g_TreeActorSet, 0, ju_AbstractSet, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_TreeActorSet__init_), "$setClassOrder", $rt_wrapFunction2(g_TreeActorSet_setClassOrder), "$iterator", $rt_wrapFunction0(g_TreeActorSet_iterator), "$size", $rt_wrapFunction0(g_TreeActorSet_size), "$add", $rt_wrapFunction1(g_TreeActorSet_add0), "$remove0", $rt_wrapFunction1(g_TreeActorSet_remove), "$add0", $rt_wrapFunction1(g_TreeActorSet_add)],
ProjectileTowerAlly, "ProjectileTowerAlly", -1, ProjectileAlly, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileTowerAlly__init_), "$act", $rt_wrapFunction0(ProjectileTowerAlly_act)],
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$newElementArray0", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_0", $rt_wrapFunction0(ju_HashMap__init_1), "$_init_14", $rt_wrapFunction1(ju_HashMap__init_0), "$_init_61", $rt_wrapFunction2(ju_HashMap__init_2), "$clear", $rt_wrapFunction0(ju_HashMap_clear), "$containsKey", $rt_wrapFunction1(ju_HashMap_containsKey), "$entrySet", $rt_wrapFunction0(ju_HashMap_entrySet), "$get0", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey",
$rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry", $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry), "$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry), "$isEmpty", $rt_wrapFunction0(ju_HashMap_isEmpty), "$keySet", $rt_wrapFunction0(ju_HashMap_keySet), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash0), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash), "$remove3", $rt_wrapFunction1(ju_HashMap_remove), "$removeByKey", $rt_wrapFunction1(ju_HashMap_removeByKey),
"$size", $rt_wrapFunction0(ju_HashMap_size)],
g_GreenfootImage$1$handleEvent$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(g_GreenfootImage$1$handleEvent$lambda$_1_0__init_), "$run", $rt_wrapFunction0(g_GreenfootImage$1$handleEvent$lambda$_1_0_run)],
ProjectileArrowEnemy, "ProjectileArrowEnemy", -1, ProjectileEnemy, [], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction1(ProjectileArrowEnemy__init_), "$act", $rt_wrapFunction0(ProjectileArrowEnemy_act)],
TroopAllyGhostGiant, "TroopAllyGhostGiant", -1, TroopAllyGhost, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(TroopAllyGhostGiant__init_), "$act", $rt_wrapFunction0(TroopAllyGhostGiant_act)],
jl_Thread$start$lambda$_4_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_19", $rt_wrapFunction1(jl_Thread$start$lambda$_4_0__init_), "$run", $rt_wrapFunction0(jl_Thread$start$lambda$_4_0_run)],
CardSkeleton, "CardSkeleton", -1, Card, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(CardSkeleton__init_), "$act", $rt_wrapFunction0(CardSkeleton_act)],
otciu_UnicodeHelper$Range, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_35", $rt_wrapFunction3(otciu_UnicodeHelper$Range__init_)],
g_MouseInfo, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(g_MouseInfo__init_), "$getX", $rt_wrapFunction0(g_MouseInfo_getX), "$getY", $rt_wrapFunction0(g_MouseInfo_getY), "$getActor", $rt_wrapFunction0(g_MouseInfo_getActor), "$getButton", $rt_wrapFunction0(g_MouseInfo_getButton), "$setButton", $rt_wrapFunction1(g_MouseInfo_setButton), "$setLoc", $rt_wrapFunction2(g_MouseInfo_setLoc), "$setActor", $rt_wrapFunction1(g_MouseInfo_setActor), "$setClickCount", $rt_wrapFunction1(g_MouseInfo_setClickCount)],
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, otcit_DoubleAnalyzer_$callClinit, 0,
gj_Client, 0, jl_Object, [], 0, 3, 0, gj_Client_$callClinit, ["$_init_0", $rt_wrapFunction0(gj_Client__init_)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction1(otci_CharFlow__init_)],
gc_TextLabel, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction3(gc_TextLabel__init_), "$draw", $rt_wrapFunction3(gc_TextLabel_draw), "$getX", $rt_wrapFunction0(gc_TextLabel_getX), "$getY", $rt_wrapFunction0(gc_TextLabel_getY), "$getText", $rt_wrapFunction0(gc_TextLabel_getText)],
gj_MouseManager$handleEvent$lambda$_10_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_50", $rt_wrapFunction3(gj_MouseManager$handleEvent$lambda$_10_0__init_), "$run", $rt_wrapFunction0(gj_MouseManager$handleEvent$lambda$_10_0_run)]]);
$rt_metadata([otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept)],
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcit_FloatAnalyzer$Result__init_)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept)],
jl_InterruptedException, "InterruptedException", 3, jl_Exception, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_InterruptedException__init_0)],
ju_HashMap$EntryIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_38", $rt_wrapFunction1(ju_HashMap$EntryIterator__init_), "$next1", $rt_wrapFunction0(ju_HashMap$EntryIterator_next), "$next", $rt_wrapFunction0(ju_HashMap$EntryIterator_next0)],
gci_BSPNode, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_48", $rt_wrapFunction3(gci_BSPNode__init_), "$setChild", $rt_wrapFunction2(gci_BSPNode_setChild), "$setArea", $rt_wrapFunction1(gci_BSPNode_setArea), "$setSplitAxis", $rt_wrapFunction1(gci_BSPNode_setSplitAxis), "$setSplitPos", $rt_wrapFunction1(gci_BSPNode_setSplitPos), "$getLeftArea", $rt_wrapFunction0(gci_BSPNode_getLeftArea), "$getRightArea", $rt_wrapFunction0(gci_BSPNode_getRightArea), "$getArea", $rt_wrapFunction0(gci_BSPNode_getArea), "$getLeft", $rt_wrapFunction0(gci_BSPNode_getLeft),
"$getRight0", $rt_wrapFunction0(gci_BSPNode_getRight), "$getParent", $rt_wrapFunction0(gci_BSPNode_getParent), "$setParent", $rt_wrapFunction1(gci_BSPNode_setParent), "$getChildSide", $rt_wrapFunction1(gci_BSPNode_getChildSide), "$addActor", $rt_wrapFunction1(gci_BSPNode_addActor), "$containsActor", $rt_wrapFunction1(gci_BSPNode_containsActor), "$actorRemoved", $rt_wrapFunction1(gci_BSPNode_actorRemoved), "$isEmpty", $rt_wrapFunction0(gci_BSPNode_isEmpty), "$getActorsIterator", $rt_wrapFunction0(gci_BSPNode_getActorsIterator),
"$blankNode", $rt_wrapFunction0(gci_BSPNode_blankNode), "$areaChanged", $rt_wrapFunction0(gci_BSPNode_areaChanged)]]);
let $rt_booleanArrayCls = $rt_arraycls($rt_booleancls),
$rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls);
$rt_stringPool(["Can\'t enter monitor from another thread synchronously", "Greenfoot installation is broken - reinstalling Greenfoot might help.", "An actor is trying to access the world, when no world has been instantiated.", "Actor not in world. An attempt was made to use the actor\'s location while it is not in the world. Either it has not yet been inserted, or it has been removed.", ": ", "\tat ", "Caused by: ", "http://www.greenfoot.org/images/greenfoot-logo.png", "Stream is closed", "Troop/", "Move", ".png",
"Attack", "all", "ground", "PekkaMini", "MoveToTarget", "ZoneDuration", "Spell/", "Fireball", "Easy", "Medium", "Hard", "String is null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", "The value is too big for int type: ", "The value is too big for integer type", "Illegal radix: ", "Archer", "troop", "DragonBaby", "main", "Giant", "tower", "single", "null", "Skeleton", "Knight", "Poison", "Golem", "GoblinSpear", "Cannon", "sounds/", "audio/x-wav", "Score1.png",
"Score2.png", "Score3.png", "Screen.mp3", "Battle.mp3", "TextDoubleElixir.png", "runQueuedTasks", "0", "EndVictory.png", "EndDefeat.png", "EndDraw.png", "", "spell", "Sound: error trying to load/play", "\n", "HealthBarAlly.png", "HealthBarEnemy.png", "Golemite", "object", "function", "string", "number", "undefined", "rgba(", ",", ")", "Filename must not be null.", "http://", "https://", "images/", "The transparency value has to be in the range 0 to 255. It was: ", "HHHHH!", "click", "mousedown", "mouseup", "mousedrag",
"mousemove", "touchstart", "touchend", "touchmove", "touchcancel", "dblclick", "mouseenter", "mouseleave", "Either src or dest is null", "The given world cannot be null.", "MenuText.png", "ScreenText.png", "Button", "CardKnight.png", "CardArcher.png", "CardGiant.png", "CardFireball.png", "CardGoblinSpear.png", "CardDragonBaby.png", "CardSkeleton.png", "CardCannon.png", "CardGolem.png", "CardPekkaMini.png", "CardPoison.png", "ArrowLeft", "left", "ArrowUp", "up", "ArrowRight", "right", "ArrowDown", "down", " ",
"space", "Enter", "enter", "Escape", "escape", "F1", "f1", "F2", "f2", "F3", "f3", "F4", "f4", "F5", "f5", "F6", "f6", "F7", "f7", "F8", "f8", "F9", "f9", "F10", "f10", "F11", "f11", "F12", "f12", "Backspace", "backspace", "Shift", "shift", "Control", "control", "\'", "Left", "Up", "Right", "Down", "Spacebar", "keydown", "keyup", "ZoneUnitsStart.png", "ZoneUnitsLeft.png", "ZoneUnitsRight.png", "ZoneUnitsFull.png", "Invalid Unicode sequence: expected format \\uxxxx", "Invalid Unicode sequence: illegal character",
"Card", "zone", "bold 25px sans-serif", "bold ", "px sans-serif", "ScreenLogo.png", "class.", ".image", "Cannot add null actor.", "Initialising...", "standalone.properties", "IOException during initialisation.", "Couldn\'t load standalone.properties", "main.class", "Main class is: ", "scenario.lock", "true", "project.greenfoot", "Couldn\'t load project.greenfoot", "simulation.speed", "Exception instantiating world class: ", " - ", "InstantiationException instantiating world class.", "ClassNotFound loading world class: ",
".", ".wav", ".mp3", "audio/mpeg", "Error getting content for zipfile file: "]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(gj_Client_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = jl_Object$NotifyListenerImpl.prototype;
    c.onTimer = $rt_callWithReceiver(jl_Object$NotifyListenerImpl_onTimer$exported$0);
    c = gj_Client$getResourceBytes$lambda$_12_0.prototype;
    c.gotContent = $rt_callWithReceiver(gj_Client$getResourceBytes$lambda$_12_0_gotContent$exported$0);
    c = gj_Client$getResourceBytes$lambda$_12_1.prototype;
    c.gotError = $rt_callWithReceiver(gj_Client$getResourceBytes$lambda$_12_1_gotError$exported$0);
    c = gj_TouchManager.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_TouchManager_handleEvent$exported$0);
    c = gj_Client$_init_$lambda$_1_3.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_Client$_init_$lambda$_1_3_handleEvent$exported$0);
    c = gj_Client$_init_$lambda$_1_2.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_Client$_init_$lambda$_1_2_handleEvent$exported$0);
    c = gj_Client$_init_$lambda$_1_1.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_Client$_init_$lambda$_1_1_handleEvent$exported$0);
    c = gj_Client$getResourceURL$lambda$_11_0.prototype;
    c.gotContent = $rt_callWithReceiver(gj_Client$getResourceURL$lambda$_11_0_gotContent$exported$0);
    c = gj_Client$_init_$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_Client$_init_$lambda$_1_0_handleEvent$exported$0);
    c = gj_Client$getResourceURL$lambda$_11_1.prototype;
    c.gotError = $rt_callWithReceiver(gj_Client$getResourceURL$lambda$_11_1_gotError$exported$0);
    c = g_GreenfootImage$2.prototype;
    c.handleEvent = $rt_callWithReceiver(g_GreenfootImage$2_handleEvent$exported$0);
    c = g_GreenfootImage$1.prototype;
    c.handleEvent = $rt_callWithReceiver(g_GreenfootImage$1_handleEvent$exported$0);
    c = gs_SoundFactory$2.prototype;
    c.handleEvent = $rt_callWithReceiver(gs_SoundFactory$2_handleEvent$exported$0);
    c = gs_SoundFactory$1.prototype;
    c.handleEvent = $rt_callWithReceiver(gs_SoundFactory$1_handleEvent$exported$0);
    c = gj_MouseManager.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_MouseManager_handleEvent$exported$0);
    c = gc_WorldHandler$1.prototype;
    c.handleEvent = $rt_callWithReceiver(gc_WorldHandler$1_handleEvent$exported$0);
    c = gc_WorldHandler$2.prototype;
    c.doRepaint = $rt_callWithReceiver(gc_WorldHandler$2_doRepaint$exported$0);
    c = gj_KeyboardManager.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_KeyboardManager_handleEvent$exported$0);
    c = gj_MouseManager$1.prototype;
    c.handleEvent = $rt_callWithReceiver(gj_MouseManager$1_handleEvent$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));
