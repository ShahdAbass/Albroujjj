navigator.userAgent.match(/(iPhone|iPod|iPad)/i) && ! function(e) {
    function t(t, n, r) {
        function a() {
            u && (u.apply(e, arguments), c || (delete n[i], u = null))
        }
        var i, u = r[0],
            c = t === o;
        return r[0] = a, i = t.apply(e, r), n[i] = {
            args: r,
            created: Date.now(),
            cb: u,
            id: i
        }, i
    }

    function n(t, n, r, a) {
        function i() {
            u.cb && (u.cb.apply(e, arguments), c || (delete r[a], u.cb = null))
        }
        var u = r[a];
        if (u) {
            var c = t === o;
            if (n(u.id), !c) {
                var l = u.args[1],
                    d = Date.now() - u.created;
                0 > d && (d = 0), l -= d, 0 > l && (l = 0), u.args[1] = l
            }
            u.args[0] = i, u.created = Date.now(), u.id = t.apply(e, u.args)
        }
    }
    var r = {},
        a = {},
        i = e.setTimeout,
        o = e.setInterval,
        u = e.clearTimeout,
        c = e.clearInterval;
    if (!e.addEventListener) return !1;
    if (!navigator.userAgent.match(/OS\s6_0/)) return !1;
    e.setTimeout = function() {
        return t(i, r, arguments)
    }, e.setInterval = function() {
        return t(o, a, arguments)
    }, e.clearTimeout = function(e) {
        var t = r[e];
        t && (delete r[e], u(t.id))
    }, e.clearInterval = function(e) {
        var t = a[e];
        t && (delete a[e], c(t.id))
    };
    for (var l = e; l.location != l.parent.location;) l = l.parent;
    l.addEventListener("scroll", function() {
        var e;
        for (e in r) n(i, u, r, e);
        for (e in a) n(o, c, a, e)
    })
}(window);