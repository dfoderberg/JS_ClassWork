var PromiseLike = function(fn) {
    var resolve, resolved, resolvedArgs, reject;
    var thenFns = [];
    resolve = function() {
        if (resolved) {
            return;
        }
        resolvedArgs = arguments;
        resolved = true;
        for (let thenFn of thenFns) {
            thenFn(...arguments);
        }
    }
    fn(resolve, reject);
    var self = this;
    this.returnObj = {
        then: function(thenFn) {
            if (resolved) {
                thenFn(...resolvedArgs)
            }
            thenFns.push(thenFn);
            return self.returnObj;
        },
        catch: function(catchFn) {
            return self.returnObj;
        }
    }
    return this.returnObj;
}
var err = false;
var promise = new PromiseLike(function(resolve, reject) {
    if (err) {
        reject();
    } else {
        resolve(1);
    }
}).then((data) => {
console.log(data);
}).catch((err) => {
});