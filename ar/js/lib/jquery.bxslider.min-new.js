(function(t) {
    var e = {},
        n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            touchEnabled: !0,
            swipeThreshold: 30,
            oneToOneTouch: true,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            video: !1,
            useCSS: !0,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {}
        };
    t.fn.bxSlider = function(s) {
        if (this.length != 0) {
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(s)
            }), this;
            var o = {},
                r = this;
            e.el = this;
            var a = function() {
                    o.settings = t.extend({}, n, s), o.children = r.children(o.settings.slideSelector), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.animProp = o.settings.mode == "vertical" ? "top" : "left", o.usingCSS = o.settings.useCSS && o.settings.mode != "fade" && function() {
                        var t = document.createElement("div"),
                            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (t.style[e[i]] !== void 0) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), o.settings.mode == "vertical" && (o.settings.maxSlides = o.settings.minSlides), l()
                },
                l = function() {
                    if (r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                            width: o.settings.mode == "horizontal" ? o.children.length * 215 + "%" : "auto",
                            position: "relative"
                        }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), o.children.css({
                            "float": o.settings.mode == "horizontal" ? "left" : "none",
                            listStyle: "none"
                        }), o.children.width(c()), o.settings.mode == "horizontal" && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), o.settings.mode == "vertical" && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), o.settings.mode == "fade" && (o.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), o.children.eq(o.settings.startSlide).css({
                            zIndex: 50,
                            display: "block"
                        })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && b(), o.settings.infiniteLoop && o.settings.mode != "fade" && !o.settings.ticker) {
                        var e = o.settings.mode == "vertical" ? o.settings.minSlides : o.settings.maxSlides,
                            i = o.children.slice(0, e).clone().addClass("bx-clone"),
                            n = o.children.slice(-e).clone().addClass("bx-clone");
                        r.append(i).prepend(n)
                    }
                    o.active.last = o.settings.startSlide == h() - 1, o.settings.video && r.fitVids(), o.settings.ticker || (o.settings.pager && x(), o.settings.controls && m(), o.settings.auto && o.settings.autoControls && S(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), r.children().imagesLoaded(function() {
                        o.loader.remove(), p(), o.settings.mode == "vertical" && (o.settings.adaptiveHeight = !0), o.viewport.height(d()), o.settings.onSliderLoad(o, o.active.index), o.settings.auto && o.settings.autoStart && z(), o.settings.ticker && q(), o.settings.pager && A(o.settings.startSlide), o.settings.controls && M(), o.settings.touchEnabled && !o.settings.ticker && D()
                    })
                },
                d = function() {
                    var e = 0,
                        n = t();
                    if (o.settings.mode == "vertical" || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var s = o.settings.moveSlides == 1 ? o.active.index : o.active.index * u();
                            for (n = o.children.eq(s), i = 1; o.settings.maxSlides - 1 >= i; i++) n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i))
                        } else n = o.children.eq(o.active.index);
                    else n = o.children;
                    return o.settings.mode == "vertical" ? (n.each(function() {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), e
                },
                c = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    return o.settings.slideWidth == 0 ? t = e : e > o.maxThreshold ? t = (e - o.settings.slideMargin * (o.settings.maxSlides - 1)) / o.settings.maxSlides : o.minThreshold > e && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides), t
                },
                g = function() {
                    var t = 1;
                    if (o.settings.mode == "horizontal")
                        if (o.minThreshold > o.viewport.width()) t = o.settings.minSlides;
                        else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                    else {
                        var e = o.children.first().width();
                        t = Math.floor(o.viewport.width() / e)
                    } else o.settings.mode == "vertical" && (t = o.settings.minSlides);
                    return t
                },
                h = function() {
                    var t = 0;
                    if (o.settings.moveSlides > 0)
                        if (o.settings.infiniteLoop) t = o.children.length / u();
                        else {
                            var e = 0,
                                i = 0;
                            while (o.children.length > e) ++t, e = i + g(), i += g() >= o.settings.moveSlides ? o.settings.moveSlides : g()
                        }
                    else t = Math.ceil(o.children.length / g());
                    return t
                },
                u = function() {
                    return o.settings.moveSlides > 0 && g() >= o.settings.moveSlides ? o.settings.moveSlides : g()
                },
                p = function() {
                    if (o.active.last) {
                        if (o.settings.mode == "horizontal") {
                            var t = o.children.last(),
                                e = t.position();
                            v(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                        } else if (o.settings.mode == "vertical") {
                            var i = o.children.length - o.settings.minSlides,
                                e = o.children.eq(i).position();
                            v(-e.top, "reset", 0)
                        }
                    } else {
                        var e = o.children.eq(o.active.index * u()).position();
                        o.active.index == h() - 1 && (o.active.last = !0), e != void 0 && (o.settings.mode == "horizontal" ? v(-e.left, "reset", 0) : o.settings.mode == "vertical" && v(-e.top, "reset", 0))
                    }
                },
                v = function(t, e, i, n) {
                    if (o.usingCSS) {
                        var s = o.settings.mode == "vertical" ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), e == "slide" ? (r.css(o.animProp, s), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), k()
                        })) : e == "reset" ? r.css(o.animProp, s) : e == "ticker" && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, s), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), v(n.resetValue, "reset", 0), L()
                        }))
                    } else {
                        var a = {};
                        a[o.animProp] = t, e == "slide" ? r.animate(a, i, o.settings.easing, function() {
                            k()
                        }) : e == "reset" ? r.css(o.animProp, t) : e == "ticker" && r.animate(a, speed, "linear", function() {
                            v(n.resetValue, "reset", 0), L()
                        })
                    }
                },
                f = function() {
                    var e = "";
                    pagerQty = h();
                    for (var i = 0; pagerQty > i; i++) {
                        var n = "";
                        o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(i), o.pagerEl.addClass("bx-custom-pager")) : (n = i + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + n + "</a></div>"
                    }
                    o.pagerEl.html(e)
                },
                x = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), f()), o.pagerEl.delegate("a", "click", P)
                },
                m = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", w), o.controls.prev.bind("click", T), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                S = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", C), o.controls.autoEl.delegate(".bx-stop", "click", E), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), y(o.settings.autoStart ? "stop" : "start")
                },
                b = function() {
                    o.children.each(function() {
                        var e = t(this).find("img:first").attr("title");
                        e != void 0 && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                    })
                },
                w = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
                },
                T = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
                },
                C = function(t) {
                    r.startAuto(), t.preventDefault()
                },
                E = function(t) {
                    r.stopAuto(), t.preventDefault()
                },
                P = function(e) {
                    o.settings.auto && r.stopAuto();
                    var i = t(e.currentTarget),
                        n = parseInt(i.attr("data-slide-index"));
                    n != o.active.index && r.goToSlide(n), e.preventDefault()
                },
                A = function(t) {
                    return o.settings.pagerType == "short" ? (o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + o.children.length), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.find("a").eq(t).addClass("active"), void 0)
                },
                k = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        o.active.index == 0 ? t = o.children.eq(0).position() : o.active.index == h() - 1 && o.carousel ? t = o.children.eq((h() - 1) * u()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), o.settings.mode == "horizontal" ? v(-t.left, "reset", 0) : o.settings.mode == "vertical" && v(-t.top, "reset", 0)
                    }
                    o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                y = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                M = function() {
                    !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (o.active.index == 0 ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == h() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                z = function() {
                    o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                        o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                    })
                },
                q = function() {
                    var e = 0;
                    if (o.settings.autoDirection == "next") r.append(o.children.clone().addClass("bx-clone"));
                    else {
                        r.prepend(o.children.clone().addClass("bx-clone"));
                        var i = o.children.first().position();
                        e = o.settings.mode == "horizontal" ? -i.left : -i.top
                    }
                    v(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                        r.stop()
                    }, function() {
                        var e = 0;
                        o.children.each(function() {
                            e += o.settings.mode == "horizontal" ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var i = o.settings.speed / e,
                            n = o.settings.mode == "horizontal" ? "left" : "top",
                            s = i * (e - Math.abs(parseInt(r.css(n))));
                        L(s)
                    }), L()
                },
                L = function(t) {
                    speed = t ? t : o.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    o.settings.autoDirection == "next" ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                    var n = o.settings.mode == "horizontal" ? -e.left : -e.top,
                        s = o.settings.mode == "horizontal" ? -i.left : -i.top,
                        a = {
                            resetValue: s
                        };
                    v(n, "ticker", speed, a)
                },
                D = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart", H)
                },
                H = function(t) {
                    if (o.working) t.preventDefault();
                    else {
                        o.touch.originalPos = r.position();
                        var e = t.originalEvent;
                        o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", I), o.viewport.bind("touchend", W)
                    }
                },
                I = function(t) {
                    if (t.preventDefault(), o.settings.mode != "fade") {
                        var e = t.originalEvent,
                            i = 0;
                        if (o.settings.mode == "horizontal") {
                            var n = e.changedTouches[0].pageX - o.touch.start.x;
                            i = o.touch.originalPos.left + n
                        } else {
                            var n = e.changedTouches[0].pageY - o.touch.start.y;
                            i = o.touch.originalPos.top + n
                        }
                        v(i, "reset", 0)
                    }
                },
                W = function(t) {
                    o.viewport.unbind("touchmove", I);
                    var e = t.originalEvent,
                        i = 0;
                    if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, o.settings.mode == "fade") {
                        var n = Math.abs(o.touch.start.x - o.touch.end.x);
                        n >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                    } else {
                        var n = 0;
                        o.settings.mode == "horizontal" ? (n = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (n = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (o.active.index == 0 && n > 0 || o.active.last && 0 > n) ? v(i, "reset", 200) : Math.abs(n) >= o.settings.swipeThreshold ? (0 > n ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : v(i, "reset", 200)
                    }
                    o.viewport.unbind("touchend", W)
                };
            r.goToSlide = function(e, i) {
                if (!o.working && o.active.index != e)
                    if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? h() - 1 : e >= h() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), i == "next" ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : i == "prev" && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= h() - 1, o.settings.pager && A(o.active.index), o.settings.controls && M(), o.settings.mode == "fade") o.settings.adaptiveHeight && o.viewport.height() != d() && o.viewport.animate({
                        height: d()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", 50), k()
                    });
                    else {
                        o.settings.adaptiveHeight && o.viewport.height() != d() && o.viewport.animate({
                            height: d()
                        }, o.settings.adaptiveHeightSpeed);
                        var n = 0,
                            s = {
                                left: 0,
                                top: 0
                            };
                        if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                            if (o.settings.mode == "horizontal") {
                                var a = o.children.eq(o.children.length - 1);
                                s = a.position(), n = o.viewport.width() - a.width()
                            } else {
                                var l = o.children.length - o.settings.minSlides;
                                s = o.children.eq(l).position()
                            }
                        else if (o.carousel && o.active.last && i == "prev") {
                            var c = o.settings.moveSlides == 1 ? o.settings.maxSlides - u() : (h() - 1) * u() - (o.children.length - o.settings.maxSlides),
                                a = r.children(".bx-clone").eq(c);
                            s = a.position()
                        } else if (i == "next" && o.active.index == 0) s = r.find(".bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                        else if (e >= 0) {
                            var g = e * u();
                            s = o.children.eq(g).position()
                        }
                        var p = o.settings.mode == "horizontal" ? -(s.left - n) : -s.top;
                        v(p, "slide", o.settings.speed)
                    }
            }, r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = o.active.index + 1;
                    r.goToSlide(t, "next")
                }
            }, r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || o.active.index != 0) {
                    var t = o.active.index - 1;
                    r.goToSlide(t, "prev")
                }
            }, r.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    o.settings.autoDirection == "next" ? r.goToNextSlide() : r.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && t != 1 && y("stop"))
            }, r.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && t != 1 && y("start"))
            }, r.getCurrentSlide = function() {
                return o.active.index
            }, r.getSlideCount = function() {
                return o.children.length
            };
            var N = t(window).width(),
                B = t(window).height();
            return t(window).resize(function() {
                var e = t(window).width(),
                    i = t(window).height();
                (N != e || B != i) && (N = e, B = i, o.children.add(r.find(".bx-clone")).width(c()), o.viewport.css("height", d()), o.active.last && (o.active.index = h() - 1), o.active.index >= h() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (f(), A(o.active.index)), o.settings.ticker || p())
            }), a(), this
        }
    }
})(jQuery),
function(t, e) {
    var i = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    t.fn.imagesLoaded = function(n) {
        function s() {
            var e = t(g),
                i = t(h);
            a && (h.length ? a.reject(d, e, i) : a.resolve(d)), t.isFunction(n) && n.call(r, d, e, i)
        }

        function o(e, n) {
            e.src === i || -1 !== t.inArray(e, c) || (c.push(e), n ? h.push(e) : g.push(e), t.data(e, "imagesLoaded", {
                isBroken: n,
                src: e.src
            }), l && a.notifyWith(t(e), [n, d, t(g), t(h)]), d.length === c.length && (setTimeout(s), d.unbind(".imagesLoaded")))
        }
        var r = this,
            a = t.isFunction(t.Deferred) ? t.Deferred() : 0,
            l = t.isFunction(a.notify),
            d = r.find("img").add(r.filter("img")),
            c = [],
            g = [],
            h = [];
        return t.isPlainObject(n) && t.each(n, function(t, e) {
            "callback" === t ? n = e : a && a[t](e)
        }), d.length ? d.bind("load.imagesLoaded error.imagesLoaded", function(t) {
            o(t.target, "error" === t.type)
        }).each(function(n, s) {
            var r = s.src,
                a = t.data(s, "imagesLoaded");
            a && a.src === r ? o(s, a.isBroken) : s.complete && s.naturalWidth !== e ? o(s, 0 === s.naturalWidth || 0 === s.naturalHeight) : (s.readyState || s.complete) && (s.src = i, s.src = r)
        }) : s(), a ? a.promise(r) : r
    }
}(jQuery)