(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    !function(t, e, n, o) {
        "use strict";
        function i(t, e) {
            var o, i, a, s = [], r = 0;
            t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), 
            o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", 
            i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [ o ]), 
            r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
        }
        if (t.console = t.console || {
            info: function(t) {}
        }, n) {
            if (n.fn.fancybox) return void console.info("fancyBox already initialized");
            var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: [ "zoom", "slideShow", "thumbs", "close" ],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom";
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            }, s = n(t), r = n(e), c = 0, l = function(t) {
                return t && t.hasOwnProperty && t instanceof n;
            }, d = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60);
                };
            }(), u = function() {
                return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                    t.clearTimeout(e);
                };
            }(), f = function() {
                var t, n = e.createElement("fakeelement"), o = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (t in o) if (void 0 !== n.style[t]) return o[t];
                return "transitionend";
            }(), p = function(t) {
                return t && t.length && t[0].offsetHeight;
            }, h = function(t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, (function(t, e) {
                    n.isArray(e) && (o[t] = e);
                })), o;
            }, g = function(t) {
                var o, i;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), 
                o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), 
                i);
            }, b = function(t, e, o) {
                var i = this;
                i.opts = h({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), 
                i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, 
                i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), 
                i.group.length && i.init();
            };
            n.extend(b.prototype, {
                init: function() {
                    var o, i, a = this, s = a.group[a.currIndex], r = s.opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), 
                    !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), 
                    n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, (function(t, e) {
                        i += r.btnTpl[e] || "";
                    })), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), 
                    a.$refs = {
                        container: o
                    }, [ "bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation" ].forEach((function(t) {
                        a.$refs[t] = o.find(".fancybox-" + t);
                    })), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
                },
                translate: function(t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                        return void 0 === n[e] ? t : n[e];
                    }));
                },
                addContent: function(t) {
                    var e, o = this, i = n.makeArray(t);
                    n.each(i, (function(t, e) {
                        var i, a, s, r, c, l = {}, d = {};
                        n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), 
                        d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), 
                        l.type || l.src || (l.type = "inline", l.src = e)) : l = {
                            type: "html",
                            src: e + ""
                        }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), 
                        n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, 
                        r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", 
                        l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", 
                        l = n.extend(!0, l, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), 
                        l.contentType || (l.contentType = n.inArray(l.type, [ "html", "inline", "ajax" ]) > -1 ? "html" : l.type), 
                        l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, [ "html", "inline", "ajax" ]) > -1), 
                        "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, 
                        l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), 
                        l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), 
                        l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), 
                        "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [ o, l ])), 
                        "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [ o, l ])), 
                        l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), 
                        "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), 
                        l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(l);
                    })), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), 
                    e.focus()));
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t);
                    })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                        t.stopPropagation(), t.preventDefault(), e.previous();
                    })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                        t.stopPropagation(), t.preventDefault(), e.next();
                    })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                    })), s.on("orientationchange.fb resize.fb", (function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), 
                        e.requestId = d((function() {
                            e.update(t);
                        }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function() {
                            e.$refs.stage.show(), e.update(t);
                        }), n.fancybox.isMobile ? 600 : 250));
                    })), r.on("keydown.fb", (function(t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null, i = o.current, a = t.keyCode || t.which;
                        if (9 == a) return void (i.opts.trapFocus && e.focus(t));
                        if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), 
                        void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), 
                        void e.next()) : void e.trigger("afterKeydown", t, a);
                    })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
                    })), e.idleInterval = t.setInterval((function() {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, 
                        e.idleSecondsCounter = 0, e.hideControls());
                    }), 1e3));
                },
                removeEvents: function() {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), 
                    e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t);
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t);
                },
                jumpTo: function(t, e) {
                    var o, i, a, s, r, c, l, d, u, f = this, h = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
                        if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, 
                        f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), 
                        (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, 
                        f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, 
                        n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], 
                        e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), 
                        o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), 
                        f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), 
                        void f.preload("image");
                        c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), 
                        n.each(f.slides, (function(t, e) {
                            n.fancybox.stop(e.$slide, !0);
                        })), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), 
                        i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, (function(t, o) {
                            o.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                            }));
                            var i = o.pos * c.width + o.pos * o.opts.gutter;
                            n.fancybox.setTranslate(o.$slide, {
                                top: 0,
                                left: i - l.left + u
                            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), 
                            p(o.$slide), n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
                            }, e, (function() {
                                o.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
                            }));
                        }))) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, 
                        r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, (function() {
                            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
                        }), !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
                    }
                },
                createSlide: function(t) {
                    var e, o, i = this;
                    return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), 
                    i.slides[t] = n.extend(!0, {}, i.group[o], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), i.updateSlide(i.slides[t])), i.slides[t];
                },
                scaleToActual: function(t, e, o) {
                    var i, a, s, r, c, l = this, d = l.current, u = d.$content, f = n.fancybox.getTranslate(d.$slide).width, p = n.fancybox.getTranslate(d.$slide).height, h = d.width, g = d.height;
                    l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, 
                    n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, 
                    i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, 
                    i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, 
                    a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), 
                    a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), 
                    s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
                        top: s,
                        left: a,
                        scaleX: r,
                        scaleY: c
                    }, o || 366, (function() {
                        l.isAnimating = !1;
                    })), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
                },
                scaleToFit: function(t) {
                    var e, o = this, i = o.current, a = i.$content;
                    o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, 
                    n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / a.width(),
                        scaleY: e.height / a.height()
                    }, t || 366, (function() {
                        o.isAnimating = !1;
                    })));
                },
                getFitPos: function(t) {
                    var e, o, i, a, s = this, r = t.$content, c = t.$slide, l = t.width || t.opts.width, d = t.height || t.opts.height, u = {};
                    return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, 
                    o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), 
                    o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), 
                    l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), 
                    d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), 
                    u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, 
                    d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
                },
                update: function(t) {
                    var e = this;
                    n.each(e.slides, (function(n, o) {
                        e.updateSlide(o, t);
                    }));
                },
                updateSlide: function(t, e) {
                    var o = this, i = t && t.$content, a = t.width || t.opts.width, s = t.height || t.opts.height, r = t.$slide;
                    o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), 
                    n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, 
                    o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), 
                    o.trigger("onUpdate", t, e);
                },
                centerSlide: function(t) {
                    var e = this, o = e.current, i = o.$slide;
                    !e.isClosing && o && (i.siblings().css({
                        transform: "",
                        opacity: ""
                    }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), 
                    n.fancybox.animate(i, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, (function() {
                        i.css({
                            transform: "",
                            opacity: ""
                        }), o.isComplete || e.complete();
                    }), !1));
                },
                isMoved: function(t) {
                    var e, o, i = t || this.current;
                    return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), 
                    !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
                },
                updateCursor: function(t, e) {
                    var o, i, a = this, s = a.current, r = a.$refs.container;
                    s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), 
                    o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), 
                    n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
                },
                isZoomable: function() {
                    var t, e = this, n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
                    }
                    return !1;
                },
                isScaledDown: function(t, e) {
                    var o = this, i = !1, a = o.current, s = a.$content;
                    return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), 
                    i = i.width < a.width && i.height < a.height), i;
                },
                canPan: function(t, e) {
                    var o = this, i = o.current, a = null, s = !1;
                    return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), 
                    void 0 !== t && void 0 !== e ? a = {
                        width: t,
                        height: e
                    } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), 
                    s;
                },
                loadSlide: function(t) {
                    var e, o, i, a = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, 
                        !1;
                        switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), 
                        e) {
                          case "image":
                            a.setImage(t);
                            break;

                          case "iframe":
                            a.setIframe(t);
                            break;

                          case "html":
                            a.setContent(t, t.src || t.content);
                            break;

                          case "video":
                            a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                            break;

                          case "inline":
                            n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                            break;

                          case "ajax":
                            a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && a.setContent(t, e);
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && a.setError(t);
                                }
                            })), o.one("onReset", (function() {
                                i.abort();
                            }));
                            break;

                          default:
                            a.setError(t);
                        }
                        return !0;
                    }
                },
                setImage: function(t) {
                    var o, i = this;
                    setTimeout((function() {
                        var e = t.$image;
                        i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
                    }), 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), 
                    !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, 
                    t.height = t.opts.height, o = e.createElement("img"), o.onerror = function() {
                        n(this).remove(), t.$ghost = null;
                    }, o.onload = function() {
                        i.afterLoad(t);
                    }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), 
                    i.setBigImage(t);
                },
                checkSrcset: function(e) {
                    var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map((function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach((function(t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                o && (e.value = o, e.postfix = t[t.length - 1]);
                            })), e;
                        })), o.sort((function(t, e) {
                            return t.value - e.value;
                        }));
                        for (var r = 0; r < o.length; r++) {
                            var c = o[r];
                            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                                n = c;
                                break;
                            }
                        }
                        !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, 
                        e.width = n.value), e.opts.srcset = s);
                    }
                },
                setBigImage: function(t) {
                    var o = this, i = e.createElement("img"), a = n(i);
                    t.$image = a.one("error", (function() {
                        o.setError(t);
                    })).one("load", (function() {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), 
                        o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), 
                        a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function() {
                            t.$ghost && !o.isClosing && t.$ghost.hide();
                        }), Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
                    })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
                },
                resolveImageSlideSize: function(t, e, n) {
                    var o = parseInt(t.opts.width, 10), i = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), 
                    i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
                },
                setIframe: function(t) {
                    var e, o = this, i = t.opts.iframe, a = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), 
                    a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), 
                    i.preload ? (o.showLoading(t), e.on("load.fb error.fb", (function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
                    })), a.on("refresh.fb", (function() {
                        var n, o, s = t.$content, r = i.css.width, c = i.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents(), o = n.find("body");
                            } catch (t) {}
                            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), 
                            s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), 
                            s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
                        }
                    }))) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", (function() {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
                    }));
                },
                setContent: function(t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), 
                    l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), 
                    t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), 
                    t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), 
                        t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), 
                        t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
                    })), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), 
                    n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), 
                    t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), 
                    t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), 
                    t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), 
                    o.afterLoad(t));
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), 
                    t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), 
                    t.pos === this.currPos && (this.isAnimating = !1);
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
                },
                hideLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), 
                    !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), 
                    t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                        return 2 == t.button && t.preventDefault(), !0;
                    })), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), 
                    e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), 
                    e.revealContent(t));
                },
                adjustCaption: function(t) {
                    var e, n = this, o = t || n.current, i = o.opts.caption, a = o.opts.preventCaptionOverlap, s = n.$refs.caption, r = !1;
                    s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), 
                    e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), 
                    o.$slide.css("padding-bottom", r || ""));
                },
                adjustLayout: function(t) {
                    var e, n, o, i, a = this, s = t || a.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), 
                    s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], 
                    i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, 
                    s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), 
                    s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
                },
                revealContent: function(t) {
                    var e, o, i, a, s = this, r = t.$slide, c = !1, l = !1, d = s.isMoved(t), u = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], 
                    i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), 
                    !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), 
                    "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, 
                    a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), 
                    a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), 
                    p(t.$content), void n.fancybox.animate(t.$content, c, i, (function() {
                        s.isAnimating = !1, s.complete();
                    }))) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, 
                    r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), 
                    p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, (function() {
                        r.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete();
                    }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), 
                    void (t.pos === s.currPos && s.complete())));
                },
                getThumbPos: function(t) {
                    var e, o, i, a, s, r = !1, c = t.$thumb;
                    return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), 
                    i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), 
                    s = parseFloat(c.css("border-left-width") || 0), r = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - a,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && r);
                },
                complete: function() {
                    var t, e = this, o = e.current, i = {};
                    !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), 
                    e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), 
                    n.each(e.slides, (function(t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), 
                        o.$slide.off().remove());
                    })), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), 
                    o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), 
                        e.next();
                    })), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), 
                    t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
                },
                preload: function(t) {
                    var e, n, o = this;
                    o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], 
                    e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
                },
                focus: function(t, o) {
                    var i, a, s = this, r = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ].join(",");
                    s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), 
                    i = i.filter(r).filter((function() {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                    })), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), 
                    i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), 
                    i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
                },
                activate: function() {
                    var t = this;
                    n(".fancybox-container").each((function() {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), 
                        e.isVisible = !1);
                    })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), 
                    t.trigger("onActivate"), t.addEvents();
                },
                close: function(t, e) {
                    var o, i, a, s, r, c, l, u = this, f = u.current, h = function() {
                        u.cleanUp(t);
                    };
                    return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, 
                    d((function() {
                        u.update();
                    })), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, 
                    f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), 
                    !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), 
                    i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), 
                    u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), 
                    "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
                        top: s.top,
                        left: s.left,
                        scaleX: s.width / l.width,
                        scaleY: s.height / l.height,
                        width: l.width,
                        height: l.height
                    }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), 
                    r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), 
                    !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), 
                    !0)));
                },
                cleanUp: function(e) {
                    var o, i, a, s = this, r = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), 
                    s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), 
                    r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), 
                    s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), 
                    n("#fancybox-style-noscroll").remove());
                },
                trigger: function(t, e) {
                    var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
                    if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), 
                    !1 === o) return o;
                    "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
                },
                updateControls: function() {
                    var t = this, o = t.current, i = o.index, a = t.$refs.container, s = t.$refs.caption, r = o.opts.caption;
                    o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, 
                    t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), 
                    a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), 
                    a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), 
                    "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), 
                    n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
                },
                hideControls: function(t) {
                    var e = this, n = [ "infobar", "toolbar", "nav" ];
                    !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map((function(t) {
                        return "fancybox-show-" + t;
                    })).join(" ")), this.hasHiddenControls = !0;
                },
                showControls: function() {
                    var t = this, e = t.current ? t.current.opts : t.opts, n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls();
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: a,
                getInstance: function(t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"), o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), 
                    e);
                },
                open: function(t, e, n) {
                    return new b(t, e, n);
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t));
                },
                destroy: function() {
                    this.close(!0), r.add("body").off("click.fb-start", "**");
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
                }(),
                getTranslate: function(t) {
                    var e;
                    return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                        top: e.top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    });
                },
                setTranslate: function(t, e) {
                    var n = "", o = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", 
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), 
                    n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), 
                    void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), 
                    t.css(o);
                },
                animate: function(t, e, o, i, a) {
                    var s, r = this;
                    n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, (function(c) {
                        (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), 
                        n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
                    })), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, 
                    delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), 
                    n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function() {
                        t.trigger(f);
                    }), o + 33));
                },
                stop: function(t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), 
                    t.parent().removeClass("fancybox-is-scaling"));
                }
            }, n.fn.fancybox = function(t) {
                var e;
                return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this;
            }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                });
            })), function() {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", (function(e) {
                    switch (e.type) {
                      case "mousedown":
                        t = n(this);
                        break;

                      case "mouseup":
                        t = null;
                        break;

                      case "focusin":
                        n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                        break;

                      case "focusout":
                        n(".fancybox-button").removeClass("fancybox-focus");
                    }
                }));
            }();
        }
    }(window, document, jQuery), function(t) {
        "use strict";
        var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                }
            }
        }, n = function(e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, (function(t, n) {
                e = e.replace("$" + t, n || "");
            })), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
        };
        t(document).on("objectNeedsType.fb", (function(o, i, a) {
            var s, r, c, l, d, u, f, p = a.src || "", h = !1;
            s = t.extend(!0, {}, e, a.opts.media), t.each(s, (function(e, o) {
                if (c = p.match(o.matcher)) {
                    if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
                        d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
                        for (var i = 0; i < d.length; ++i) {
                            var s = d[i].split("=", 2);
                            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                        }
                    }
                    return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), 
                    r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), 
                    "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, n, o) {
                        return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                    })) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
                }
            })), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), 
            "iframe" === h && (a.opts = t.extend(!0, a.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })), t.extend(a, {
                type: h,
                src: p,
                origSrc: a.src,
                contentSource: f,
                contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
            })) : p && (a.type = a.opts.defaultType);
        }));
        var o = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function(t) {
                var e, n = this;
                if (this[t].loaded) return void setTimeout((function() {
                    n.done(t);
                }));
                this[t].loading || (this[t].loading = !0, e = document.createElement("script"), 
                e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                    n[t].loaded = !0, n.done(t);
                } : e.onload = function() {
                    n[t].loaded = !0, n.done(t);
                }, document.body.appendChild(e));
            },
            done: function(e) {
                var n, o, i;
                "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), 
                "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
                    events: {
                        onStateChange: function(t) {
                            0 == t.data && n.next();
                        }
                    }
                }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", (function() {
                    n.next();
                }))));
            }
        };
        t(document).on({
            "afterShow.fb": function(t, e, n) {
                e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
            }
        });
    }(jQuery), function(t, e, n) {
        "use strict";
        var o = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60);
            };
        }(), i = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e);
            };
        }(), a = function(e) {
            var n = [];
            e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ];
            for (var o in e) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n;
        }, s = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
        }, r = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1;
        }, c = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"], o = t.getComputedStyle(e)["overflow-x"], i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight, a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || a;
        }, l = function(t) {
            for (var e = !1; ;) {
                if (e = c(t.get(0))) break;
                if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
            }
            return e;
        }, d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, 
            e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
        };
        d.prototype.destroy = function() {
            var t = this;
            t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), 
            t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
        }, d.prototype.ontouchstart = function(o) {
            var i = this, c = n(o.target), d = i.instance, u = d.current, f = u.$slide, p = u.$content, h = "touchstart" == o.type;
            if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
                if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), 
                void o.preventDefault();
                i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), 
                i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, 
                i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), 
                i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, 
                i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), 
                i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                    top: 0,
                    left: 0
                }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), 
                i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, 
                i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, 
                n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), 
                n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), 
                n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), 
                n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), 
                i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 
                2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, 
                i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), 
                i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), 
                i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), 
                i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, 
                i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, 
                i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
            }
        }, d.prototype.onscroll = function(t) {
            var n = this;
            n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
        }, d.prototype.ontouchmove = function(t) {
            var e = this;
            return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), 
            void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), 
            e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), 
            e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
        }, d.prototype.onSwipe = function(e) {
            var a, s = this, r = s.instance, c = s.isSwiping, l = s.sliderStartPos.left || 0;
            if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), 
            s.sliderLastPos = {
                top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                left: l
            }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o((function() {
                s.sliderLastPos && (n.each(s.instance.slides, (function(t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                    });
                })), s.$container.addClass("fancybox-is-sliding"));
            })); else if (Math.abs(s.distance) > 10) {
                if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), 
                s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
                r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, (function(t, e) {
                    var o, i;
                    n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), 
                    e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass((function(t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    })), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), 
                    n.fancybox.setTranslate(e.$slide, {
                        top: o.top - i.top,
                        left: o.left - i.left
                    });
                })), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
            }
        }, d.prototype.onPan = function() {
            var t = this;
            if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
            t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), 
            t.requestId = o((function() {
                n.fancybox.setTranslate(t.$content, t.contentLastPos);
            }));
        }, d.prototype.limitMovement = function() {
            var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY, u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
            return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), 
            n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), 
            l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), 
            d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
                top: a,
                left: i
            };
        }, d.prototype.limitPosition = function(t, e, n, o) {
            var i = this, a = i.canvasWidth, s = i.canvasHeight;
            return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), 
            o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), 
            {
                top: e,
                left: t
            };
        }, d.prototype.onZoom = function() {
            var e = this, a = e.contentStartPos, r = a.width, c = a.height, l = a.left, d = a.top, u = s(e.newPoints[0], e.newPoints[1]), f = u / e.startDistanceBetweenFingers, p = Math.floor(r * f), h = Math.floor(c * f), g = (r - p) * e.percentageOfImageAtPinchPointX, b = (c - h) * e.percentageOfImageAtPinchPointY, m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(), v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(), y = m - e.centerPointStartX, x = v - e.centerPointStartY, w = l + (g + y), $ = d + (b + x), S = {
                top: $,
                left: w,
                scaleX: f,
                scaleY: f
            };
            e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), 
            e.requestId = o((function() {
                n.fancybox.setTranslate(e.$content, e.contentLastPos);
            }));
        }, d.prototype.ontouchend = function(t) {
            var o = this, s = o.isSwiping, r = o.isPanning, c = o.isZooming, l = o.isScrolling;
            if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), 
            o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), 
            o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, 
            o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
            o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, 
            r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
        }, d.prototype.endSwiping = function(t, e) {
            var o = this, i = !1, a = o.instance.group.length, s = Math.abs(o.distanceX), r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
            o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
                top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                opacity: 0
            }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), 
            !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
        }, d.prototype.endPanning = function() {
            var t, e, o, i = this;
            i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, 
            e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), 
            o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, 
            o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
        }, d.prototype.endZooming = function() {
            var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
            a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
                top: e,
                left: t,
                width: r,
                height: c,
                scaleX: 1,
                scaleY: 1
            }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), 
            n.fancybox.animate(a.$content, o, 150)));
        }, d.prototype.onTap = function(e) {
            var o, i = this, s = n(e.target), r = i.instance, c = r.current, l = e && a(e) || i.startPoints, d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0, u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0, f = function(t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [ c, e ])), o) switch (o) {
                  case "close":
                    r.close(i.startEvent);
                    break;

                  case "toggleControls":
                    r.toggleControls();
                    break;

                  case "next":
                    r.next();
                    break;

                  case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                    break;

                  case "zoom":
                    "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));
                }
            };
            if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside"; else if (s.is(".fancybox-slide")) o = "Slide"; else {
                    if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                    o = "Content";
                }
                if (i.tapped) {
                    if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                    f("dblclick" + o);
                } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout((function() {
                    i.tapped = null, r.isAnimating || f("click" + o);
                }), 500) : f("click" + o);
                return this;
            }
        }, n(e).on("onActivate.fb", (function(t, e) {
            e && !e.Guestures && (e.Guestures = new d(e));
        })).on("beforeClose.fb", (function(t, e) {
            e && e.Guestures && e.Guestures.destroy();
        }));
    }(window, document, jQuery), function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });
        var n = function(t) {
            this.instance = t, this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var t = this, n = t.instance, o = n.group[n.currIndex].opts.slideShow;
                t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                    t.toggle();
                })), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
            },
            set: function(t) {
                var n = this, o = n.instance, i = o.current;
                i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                    scaleX: 1
                }, i.opts.slideShow.speed), n.timer = setTimeout((function() {
                    o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
                }), i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
            },
            clear: function() {
                var t = this;
                clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
            },
            start: function() {
                var t = this, e = t.instance.current;
                e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), 
                t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function() {
                var t = this, e = t.instance.current;
                t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), 
                t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function() {
                var t = this;
                t.isActive ? t.stop() : t.start();
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.SlideShow && (e.SlideShow = new n(e));
            },
            "beforeShow.fb": function(t, e, n, o) {
                var i = e && e.SlideShow;
                o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
            },
            "afterShow.fb": function(t, e, n) {
                var o = e && e.SlideShow;
                o && o.isActive && o.set();
            },
            "afterKeydown.fb": function(n, o, i, a, s) {
                var r = o && o.SlideShow;
                !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), 
                r.toggle());
            },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var n = e && e.SlideShow;
                n && n.stop();
            }
        }), e(t).on("visibilitychange", (function() {
            var n = e.fancybox.getInstance(), o = n && n.SlideShow;
            o && o.isActive && (t.hidden ? o.clear() : o.set());
        }));
    }(document, jQuery), function(t, e) {
        "use strict";
        var n = function() {
            for (var e = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ], n = {}, o = 0; o < e.length; o++) {
                var i = e[o];
                if (i && i[1] in t) {
                    for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                    return n;
                }
            }
            return !1;
        }();
        if (n) {
            var o = {
                request: function(e) {
                    e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function() {
                    t[n.exitFullscreen]();
                },
                toggle: function(e) {
                    e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function() {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function() {
                    return Boolean(t[n.fullscreenEnabled]);
                }
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                },
                fullScreen: {
                    autoStart: !1
                }
            }), e(t).on(n.fullscreenchange, (function() {
                var t = o.isFullscreen(), n = e.fancybox.getInstance();
                n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, 
                n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), 
                n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
            }));
        }
        e(t).on({
            "onInit.fb": function(t, e) {
                var i;
                if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), o.toggle();
                })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            },
            "afterKeydown.fb": function(t, e, n, o, i) {
                e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function(t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
            }
        });
    }(document, jQuery), function(t, e) {
        "use strict";
        var n = "fancybox-thumbs";
        e.fancybox.defaults = e.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, e.fancybox.defaults);
        var o = function(t) {
            this.init(t);
        };
        e.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(t) {
                var e = this, n = t.group, o = 0;
                e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) ;
                o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                    e.toggle();
                })), e.isActive = !0) : e.$button.hide();
            },
            create: function() {
                var t, o = this, i = o.instance, a = o.opts.parentEl, s = [];
                o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), 
                o.$grid.on("click", "a", (function() {
                    i.jumpTo(e(this).attr("data-index"));
                }))), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), 
                e.each(i.group, (function(e, n) {
                    t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                })), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
            },
            focus: function(t) {
                var e, n, o = this, i = o.$list, a = o.$grid;
                o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), 
                n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                    scrollTop: i.scrollTop() + n.top
                }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
                    scrollLeft: n.left
                }, t));
            },
            update: function() {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), 
                t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), 
                t.instance.update();
            },
            hide: function() {
                this.isVisible = !1, this.update();
            },
            show: function() {
                this.isVisible = !0, this.update();
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update();
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var n;
                e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
            },
            "beforeShow.fb": function(t, e, n, o) {
                var i = e && e.Thumbs;
                i && i.isVisible && i.focus(o ? 0 : 250);
            },
            "afterKeydown.fb": function(t, e, n, o, i) {
                var a = e && e.Thumbs;
                a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
            },
            "beforeClose.fb": function(t, e) {
                var n = e && e.Thumbs;
                n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
            }
        });
    }(document, jQuery), function(t, e) {
        "use strict";
        function n(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, (function(t) {
                return e[t];
            }));
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
            },
            share: {
                url: function(t, e) {
                    return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
            }
        }), e(t).on("click", "[data-fancybox-share]", (function() {
            var t, o, i = e.fancybox.getInstance(), a = i.current || null;
            a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [ i, a ])), 
            o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), 
            e.fancybox.open({
                src: i.translate(i, o),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function(t, e) {
                        i.$refs.container.one("beforeClose.fb", (function() {
                            t.close(null, 0);
                        })), e.$content.find(".fancybox-share__button").click((function() {
                            return window.open(this.href, "Share", "width=550, height=450"), !1;
                        }));
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }));
        }));
    }(document, jQuery), function(t, e, n) {
        "use strict";
        function o() {
            var e = t.location.hash.substr(1), n = e.split("-"), o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, i = n.join("-");
            return {
                hash: e,
                index: o < 1 ? 1 : o,
                gallery: i
            };
        }
        function i(t) {
            "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
        }
        function a(t) {
            var e, n;
            return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
        }
        n.escapeSelector || (n.escapeSelector = function(t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
            }));
        }), n((function() {
            !1 !== n.fancybox.defaults.hash && (n(e).on({
                "onInit.fb": function(t, e) {
                    var n, i;
                    !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
                },
                "beforeShow.fb": function(n, o, i, s) {
                    var r;
                    i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), 
                    t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), 
                    o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout((function() {
                        "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), 
                        s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
                    }), 300)));
                },
                "beforeClose.fb": function(n, o, i) {
                    i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), 
                    o.currentHash = null);
                }
            }), n(t).on("hashchange.fb", (function() {
                var t = o(), e = null;
                n.each(n(".fancybox-container").get().reverse(), (function(t, o) {
                    var i = n(o).data("FancyBox");
                    if (i && i.currentHash) return e = i, !1;
                })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, 
                e.close()) : "" !== t.gallery && i(t);
            })), setTimeout((function() {
                n.fancybox.getInstance() || i(o());
            }), 50));
        }));
    }(window, document, jQuery), function(t, e) {
        "use strict";
        var n = (new Date).getTime();
        e(t).on({
            "onInit.fb": function(t, e, o) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                    var o = e.current, i = (new Date).getTime();
                    e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), 
                    t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, 
                    i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
                }));
            }
        });
    }(document, jQuery);
    /*! Selectric ϟ v1.11.1 (2017-01-11) - git.io/tjl9sQ - Copyright (c) 2017 Leonardo Santos - MIT License */
    !function(e) {
        "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof module && module.exports ? module.exports = function(t, s) {
            return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), 
            e(s), s;
        } : e(jQuery);
    }((function(e) {
        "use strict";
        var t = e(document), s = e(window), i = "selectric", l = "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Scroll Group GroupLabel", n = ".sl", a = [ "a", "e", "i", "o", "u", "n", "c", "y" ], o = [ /[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g ], r = function(t, s) {
            var i = this;
            i.element = t, i.$element = e(t), i.state = {
                multiple: !!i.$element.attr("multiple"),
                enabled: !1,
                opened: !1,
                currValue: -1,
                selectedIdx: -1,
                highlightedIdx: -1
            }, i.eventTriggers = {
                open: i.open,
                close: i.close,
                destroy: i.destroy,
                refresh: i.refresh,
                init: i.init
            }, i.init(s);
        };
        r.prototype = {
            utils: {
                isMobile: function() {
                    return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
                },
                escapeRegExp: function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                },
                replaceDiacritics: function(e) {
                    for (var t = o.length; t--; ) e = e.toLowerCase().replace(o[t], a[t]);
                    return e;
                },
                format: function(e) {
                    var t = arguments;
                    return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, (function(e, s, i) {
                        return i && t[1] ? t[1][i] : t[s];
                    }));
                },
                nextEnabledItem: function(e, t) {
                    for (;e[t = (t + 1) % e.length].disabled; ) ;
                    return t;
                },
                previousEnabledItem: function(e, t) {
                    for (;e[t = (t > 0 ? t : e.length) - 1].disabled; ) ;
                    return t;
                },
                toDash: function(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                },
                triggerCallback: function(t, s) {
                    var l = s.element, n = s.options["on" + t], a = [ l ].concat([].slice.call(arguments).slice(1));
                    e.isFunction(n) && n.apply(l, a), e(l).trigger(i + "-" + this.toDash(t), a);
                },
                arrayToClassname: function(t) {
                    var s = e.grep(t, (function(e) {
                        return !!e;
                    }));
                    return e.trim(s.join(" "));
                }
            },
            init: function(t) {
                var s = this;
                if (s.options = e.extend(!0, {}, e.fn[i].defaults, s.options, t), s.utils.triggerCallback("BeforeInit", s), 
                s.destroy(!0), s.options.disableOnMobile && s.utils.isMobile()) return void (s.disableOnMobile = !0);
                s.classes = s.getClassNames();
                var l = e("<input/>", {
                    class: s.classes.input,
                    readonly: s.utils.isMobile()
                }), n = e("<div/>", {
                    class: s.classes.items,
                    tabindex: -1
                }), a = e("<div/>", {
                    class: s.classes.scroll
                }), o = e("<div/>", {
                    class: s.classes.prefix,
                    html: s.options.arrowButtonMarkup
                }), r = e("<span/>", {
                    class: "label"
                }), u = s.$element.wrap("<div/>").parent().append(o.prepend(r), n, l), p = e("<div/>", {
                    class: s.classes.hideselect
                });
                s.elements = {
                    input: l,
                    items: n,
                    itemsScroll: a,
                    wrapper: o,
                    label: r,
                    outerWrapper: u
                }, s.options.nativeOnMobile && s.utils.isMobile() && (s.elements.input = void 0, 
                p.addClass(s.classes.prefix + "-is-native"), s.$element.on("change", (function() {
                    s.refresh();
                }))), s.$element.on(s.eventTriggers).wrap(p), s.originalTabindex = s.$element.prop("tabindex"), 
                s.$element.prop("tabindex", -1), s.populate(), s.activate(), s.utils.triggerCallback("Init", s);
            },
            activate: function() {
                var e = this, t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow), s = e.$element.width();
                t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), 
                e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([ e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : "" ])), 
                e.options.inheritOriginalWidth && s > 0 && e.elements.outerWrapper.width(s), e.unbindEvents(), 
                e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), 
                e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, 
                e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), 
                e.bindEvents()), e.utils.triggerCallback("Activate", e);
            },
            getClassNames: function() {
                var t = this, s = t.options.customClass, i = {};
                return e.each(l.split(" "), (function(e, l) {
                    var n = s.prefix + l;
                    i[l.toLowerCase()] = s.camelCase ? n : t.utils.toDash(n);
                })), i.prefix = s.prefix, i;
            },
            setLabel: function() {
                var t = this, s = t.options.labelBuilder;
                if (t.state.multiple) {
                    var i = e.isArray(t.state.currValue) ? t.state.currValue : [ t.state.currValue ];
                    i = 0 === i.length ? [ 0 ] : i;
                    var l = e.map(i, (function(s) {
                        return e.grep(t.lookupItems, (function(e) {
                            return e.index === s;
                        }))[0];
                    }));
                    l = e.grep(l, (function(t) {
                        return l.length > 1 || 0 === l.length ? "" !== e.trim(t.value) : t;
                    })), l = e.map(l, (function(i) {
                        return e.isFunction(s) ? s(i) : t.utils.format(s, i);
                    })), t.options.multiple.maxLabelEntries && (l.length >= t.options.multiple.maxLabelEntries + 1 ? (l = l.slice(0, t.options.multiple.maxLabelEntries), 
                    l.push(e.isFunction(s) ? s({
                        text: "..."
                    }) : t.utils.format(s, {
                        text: "..."
                    }))) : l.slice(l.length - 1)), t.elements.label.html(l.join(t.options.multiple.separator));
                } else {
                    var n = t.lookupItems[t.state.currValue];
                    t.elements.label.html(e.isFunction(s) ? s(n) : t.utils.format(s, n));
                }
            },
            populate: function() {
                var t = this, s = t.$element.children(), i = t.$element.find("option"), l = i.filter(":selected"), n = i.index(l), a = 0, o = t.state.multiple ? [] : 0;
                l.length > 1 && t.state.multiple && (n = [], l.each((function() {
                    n.push(e(this).index());
                }))), t.state.currValue = ~n ? n : o, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, 
                t.items = [], t.lookupItems = [], s.length && (s.each((function(s) {
                    var i = e(this);
                    if (i.is("optgroup")) {
                        var l = {
                            element: i,
                            label: i.prop("label"),
                            groupDisabled: i.prop("disabled"),
                            items: []
                        };
                        i.children().each((function(s) {
                            var i = e(this);
                            l.items[s] = t.getItemData(a, i, l.groupDisabled || i.prop("disabled")), t.lookupItems[a] = l.items[s], 
                            a++;
                        })), t.items[s] = l;
                    } else t.items[s] = t.getItemData(a, i, i.prop("disabled")), t.lookupItems[a] = t.items[s], 
                    a++;
                })), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))));
            },
            getItemData: function(t, s, i) {
                var l = this;
                return {
                    index: t,
                    element: s,
                    value: s.val(),
                    className: s.prop("class"),
                    text: s.html(),
                    slug: e.trim(l.utils.replaceDiacritics(s.html())),
                    selected: s.prop("selected"),
                    disabled: i
                };
            },
            getItemsMarkup: function(t) {
                var s = this, i = "<ul>";
                return e.isFunction(s.options.listBuilder) && s.options.listBuilder && (t = s.options.listBuilder(t)), 
                e.each(t, (function(t, l) {
                    void 0 !== l.label ? (i += s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', s.utils.arrayToClassname([ s.classes.group, l.groupDisabled ? "disabled" : "", l.element.prop("class") ]), s.classes.grouplabel, l.element.prop("label")), 
                    e.each(l.items, (function(e, t) {
                        i += s.getItemMarkup(t.index, t);
                    })), i += "</ul>") : i += s.getItemMarkup(l.index, l);
                })), i + "</ul>";
            },
            getItemMarkup: function(t, s) {
                var i = this, l = i.options.optionsItemBuilder, n = {
                    value: s.value,
                    text: s.text,
                    slug: s.slug,
                    index: s.index
                };
                return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, i.utils.arrayToClassname([ s.className, t === i.items.length - 1 ? "last" : "", s.disabled ? "disabled" : "", s.selected ? "selected" : "" ]), e.isFunction(l) ? i.utils.format(l(s), s) : i.utils.format(l, n));
            },
            unbindEvents: function() {
                var e = this;
                e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(n);
            },
            bindEvents: function() {
                var t = this;
                t.elements.outerWrapper.on("mouseenter" + n + " mouseleave" + n, (function(s) {
                    e(this).toggleClass(t.classes.hover, "mouseenter" === s.type), t.options.openOnHover && (clearTimeout(t.closeTimer), 
                    "mouseleave" === s.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open());
                })), t.elements.wrapper.on("click" + n, (function(e) {
                    t.state.opened ? t.close() : t.open(e);
                })), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + n, (function() {
                    t.elements.input.focus();
                })), t.elements.input.prop({
                    tabindex: t.originalTabindex,
                    disabled: !1
                }).on("keydown" + n, e.proxy(t.handleKeys, t)).on("focusin" + n, (function(e) {
                    t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", (function() {
                        t.elements.input.blur();
                    })), t.options.openOnFocus && !t.state.opened && t.open(e);
                })).on("focusout" + n, (function() {
                    t.elements.outerWrapper.removeClass(t.classes.focus);
                })).on("input propertychange", (function() {
                    var s = t.elements.input.val(), i = new RegExp("^" + t.utils.escapeRegExp(s), "i");
                    clearTimeout(t.resetStr), t.resetStr = setTimeout((function() {
                        t.elements.input.val("");
                    }), t.options.keySearchTimeout), s.length && e.each(t.items, (function(e, s) {
                        if (!s.disabled && i.test(s.text) || i.test(s.slug)) return void t.highlight(e);
                    }));
                }))), t.$li.on({
                    mousedown: function(e) {
                        e.preventDefault(), e.stopPropagation();
                    },
                    click: function() {
                        return t.select(e(this).data("index")), !1;
                    }
                });
            },
            handleKeys: function(t) {
                var s = this, i = t.which, l = s.options.keys, n = e.inArray(i, l.previous) > -1, a = e.inArray(i, l.next) > -1, o = e.inArray(i, l.select) > -1, r = e.inArray(i, l.open) > -1, u = s.state.highlightedIdx, p = n && 0 === u || a && u + 1 === s.items.length, c = 0;
                if (13 !== i && 32 !== i || t.preventDefault(), n || a) {
                    if (!s.options.allowWrap && p) return;
                    n && (c = s.utils.previousEnabledItem(s.lookupItems, u)), a && (c = s.utils.nextEnabledItem(s.lookupItems, u)), 
                    s.highlight(c);
                }
                return o && s.state.opened ? (s.select(u), void (s.state.multiple && s.options.multiple.keepMenuOpen || s.close())) : void (r && !s.state.opened && s.open());
            },
            refresh: function() {
                var e = this;
                e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e);
            },
            setOptionsDimensions: function() {
                var e = this, t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow), s = e.options.maxHeight, i = e.elements.items.outerWidth(), l = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
                !e.options.expandToItemText || l > i ? e.finalWidth = l : (e.elements.items.css("overflow", "scroll"), 
                e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), 
                e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > s && e.elements.items.height(s), 
                t.removeClass(e.classes.tempshow);
            },
            isInViewport: function() {
                var e = this, t = s.scrollTop(), i = s.height(), l = e.elements.outerWrapper.offset().top, n = e.elements.outerWrapper.outerHeight(), a = l + n + e.itemsHeight <= t + i, o = l - e.itemsHeight > t, r = !a && o;
                e.elements.outerWrapper.toggleClass(e.classes.above, r);
            },
            detectItemVisibility: function(t) {
                var s = this, i = s.$li.filter("[data-index]");
                s.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
                var l = i.eq(t).outerHeight(), n = i[t].offsetTop, a = s.elements.itemsScroll.scrollTop(), o = n + 2 * l;
                s.elements.itemsScroll.scrollTop(o > a + s.itemsHeight ? o - s.itemsHeight : n - l < a ? n - l : a);
            },
            open: function(s) {
                var l = this;
                return (!l.options.nativeOnMobile || !l.utils.isMobile()) && (l.utils.triggerCallback("BeforeOpen", l), 
                s && (s.preventDefault(), l.options.stopPropagation && s.stopPropagation()), void (l.state.enabled && (l.setOptionsDimensions(), 
                e("." + l.classes.hideselect, "." + l.classes.open).children()[i]("close"), l.state.opened = !0, 
                l.itemsHeight = l.elements.items.outerHeight(), l.itemsInnerHeight = l.elements.items.height(), 
                l.elements.outerWrapper.addClass(l.classes.open), l.elements.input.val(""), s && "focusin" !== s.type && l.elements.input.focus(), 
                setTimeout((function() {
                    t.on("click" + n, e.proxy(l.close, l)).on("scroll" + n, e.proxy(l.isInViewport, l));
                }), 1), l.isInViewport(), l.options.preventWindowScroll && t.on("mousewheel" + n + " DOMMouseScroll" + n, "." + l.classes.scroll, (function(t) {
                    var s = t.originalEvent, i = e(this).scrollTop(), n = 0;
                    "detail" in s && (n = -1 * s.detail), "wheelDelta" in s && (n = s.wheelDelta), "wheelDeltaY" in s && (n = s.wheelDeltaY), 
                    "deltaY" in s && (n = -1 * s.deltaY), (i === this.scrollHeight - l.itemsInnerHeight && n < 0 || 0 === i && n > 0) && t.preventDefault();
                })), l.detectItemVisibility(l.state.selectedIdx), l.highlight(l.state.multiple ? -1 : l.state.selectedIdx), 
                l.utils.triggerCallback("Open", l))));
            },
            close: function() {
                var e = this;
                e.utils.triggerCallback("BeforeClose", e), t.off(n), e.elements.outerWrapper.removeClass(e.classes.open), 
                e.state.opened = !1, e.utils.triggerCallback("Close", e);
            },
            change: function() {
                var t = this;
                t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, (function(e) {
                    t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1);
                })), e.each(t.state.selectedIdx, (function(e, s) {
                    t.lookupItems[s].selected = !0, t.$element.find("option").eq(s).prop("selected", !0);
                })), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), 
                t.setLabel(), t.utils.triggerCallback("Change", t));
            },
            highlight: function(e) {
                var t = this, s = t.$li.filter("[data-index]").removeClass("highlighted");
                t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (s.eq(t.state.highlightedIdx = e).addClass("highlighted"), 
                t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t));
            },
            select: function(t) {
                var s = this, i = s.$li.filter("[data-index]");
                if (s.utils.triggerCallback("BeforeSelect", s, t), void 0 !== t && -1 !== t && !s.lookupItems[t].disabled) {
                    if (s.state.multiple) {
                        s.state.selectedIdx = e.isArray(s.state.selectedIdx) ? s.state.selectedIdx : [ s.state.selectedIdx ];
                        var l = e.inArray(t, s.state.selectedIdx);
                        -1 !== l ? s.state.selectedIdx.splice(l, 1) : s.state.selectedIdx.push(t), i.removeClass("selected").filter((function(t) {
                            return -1 !== e.inArray(t, s.state.selectedIdx);
                        })).addClass("selected");
                    } else i.removeClass("selected").eq(s.state.selectedIdx = t).addClass("selected");
                    s.state.multiple && s.options.multiple.keepMenuOpen || s.close(), s.change(), s.utils.triggerCallback("Select", s, t);
                }
            },
            destroy: function(e) {
                var t = this;
                t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), 
                e || t.$element.removeData(i).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(n).off(t.eventTriggers).unwrap().unwrap(), 
                t.state.enabled = !1);
            }
        }, e.fn[i] = function(t) {
            return this.each((function() {
                var s = e.data(this, i);
                s && !s.disableOnMobile ? "string" == typeof t && s[t] ? s[t]() : s.init(t) : e.data(this, i, new r(this, t));
            }));
        }, e.fn[i].defaults = {
            onChange: function(t) {
                e(t).change();
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !1,
            nativeOnMobile: !0,
            openOnFocus: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            stopPropagation: !0,
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}",
            listBuilder: !1,
            keys: {
                previous: [ 37, 38 ],
                next: [ 39, 40 ],
                select: [ 9, 13, 27 ],
                open: [ 13, 32, 37, 38, 39, 40 ],
                close: [ 9, 27 ]
            },
            customClass: {
                prefix: i,
                camelCase: !1
            },
            multiple: {
                separator: ", ",
                keepMenuOpen: !0,
                maxLabelEntries: !1
            }
        };
    }));
    !function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define([ "jquery" ], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
    }((function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function c(c, d) {
                var f, e = this;
                e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, 
                e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, 
                e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, 
                e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, 
                e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, 
                e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), 
                e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", 
                e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", 
                e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), 
                e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), 
                e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), 
                e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), 
                e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), 
                e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
                e.registerBreakpoints(), e.init(!0);
            }
            var b = 0;
            return c;
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            });
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : !0 === d ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), 
            e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), 
            e.$slideTrack.append(e.$slides), e.$slides.each((function(b, c) {
                a(c).attr("data-slick-index", b);
            })), e.$slidesCache = e.$slides, e.reinit();
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed);
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {}, e = this;
            e.animateHeight(), !0 === e.options.rtl && !1 === e.options.vertical && (b = -b), 
            !1 === e.transformsEnabled ? !1 === e.options.vertical ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : !1 === e.cssTransitions ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft), 
            a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), !1 === e.options.vertical ? (d[e.animType] = "translate(" + a + "px, 0px)", 
                    e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
                },
                complete: function() {
                    c && c.call();
                }
            })) : (e.applyTransition(), b = Math.ceil(b), !1 === e.options.vertical ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", 
            e.$slideTrack.css(d), c && setTimeout((function() {
                e.disableTransition(), c.call();
            }), e.options.speed));
        }, b.prototype.getNavTarget = function() {
            var b = this, c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c;
        }, b.prototype.asNavFor = function(b) {
            var c = this, d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each((function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0);
            }));
        }, b.prototype.applyTransition = function(a) {
            var b = this, c = {};
            !1 === b.options.fade ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, 
            !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer);
        }, b.prototype.autoPlayIterator = function() {
            var a = this, b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (!1 === a.options.infinite && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, 
            a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
        }, b.prototype.buildArrows = function() {
            var b = this;
            !0 === b.options.arrows && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), 
            b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
            b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), 
            b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), 
            !0 !== b.options.infinite && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }));
        }, b.prototype.buildDots = function() {
            var c, d, b = this;
            if (!0 === b.options.dots && b.slideCount > b.options.slidesToShow) {
                for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), 
                c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
            b.slideCount = b.$slides.length, b.$slides.each((function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
            })), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), 
            b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
            b.$slideTrack.css("opacity", 0), (!0 === b.options.centerMode || !0 === b.options.swipeToSlide) && (b.options.slidesToScroll = 1), 
            a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), 
            b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), 
            !0 === b.options.draggable && b.$list.addClass("draggable");
        }, b.prototype.buildRows = function() {
            var b, c, d, e, f, g, h, a = this;
            if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
                for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k));
                        }
                        i.appendChild(j);
                    }
                    e.appendChild(i);
                }
                a.$slider.empty().append(e), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                });
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
            if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), 
            d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
                f = null;
                for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (!1 === d.originalSettings.mobileFirst ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, 
                "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), 
                !0 === b && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, 
                "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), 
                !0 === b && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, 
                d.options = d.originalSettings, !0 === b && (d.currentSlide = d.options.initialSlide), 
                d.refresh(b), h = f), b || !1 === h || d.$slider.trigger("breakpoint", [ d, h ]);
            }
        }, b.prototype.changeSlide = function(b, c) {
            var f, g, h, d = this, e = a(b.currentTarget);
            switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, 
            f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
              case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;

              case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;

              case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;

              default:
                return;
            }
        }, b.prototype.checkNavigable = function(a) {
            var c, d, b = this;
            if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break;
                }
                d = c[e];
            }
            return a;
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), 
            b.$slider.off("focus.slick blur.slick"), !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), 
            b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), 
            b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), 
            b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), 
            a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), !0 === b.options.accessibility && b.$list.off("keydown.slick", b.keyHandler), 
            !0 === b.options.focusOnSelect && a(b.$slideTrack).children().off("click.slick", b.selectHandler), 
            a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), 
            a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), 
            a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }, b.prototype.cleanUpRows = function() {
            var b, a = this;
            a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), 
            a.$slider.empty().append(b));
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            !1 === b.shouldClick && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), 
            c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
            c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
            c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                a(this).attr("style", a(this).data("originalStyling"));
            })), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), 
            c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), 
            c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), 
            c.unslicked = !0, b || c.$slider.trigger("destroy", [ c ]);
        }, b.prototype.disableTransition = function(a) {
            var b = this, c = {};
            c[b.transitionType] = "", !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            !1 === c.cssTransitions ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout((function() {
                c.disableTransition(a), b.call();
            }), c.options.speed));
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            !1 === b.cssTransitions ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }));
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), 
            b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", (function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout((function() {
                    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
                }), 0);
            }));
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide;
        }, b.prototype.getDotCount = function() {
            var a = this, b = 0, c = 0, d = 0;
            if (!0 === a.options.infinite) for (;b < a.slideCount; ) ++d, b = c + a.options.slidesToScroll, 
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (!0 === a.options.centerMode) d = a.slideCount; else if (a.options.asNavFor) for (;b < a.slideCount; ) ++d, 
            b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1;
        }, b.prototype.getLeft = function(a) {
            var c, d, f, b = this, e = 0;
            return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), !0 === b.options.infinite ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, 
            e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, 
            e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, 
            e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, 
            e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, 
            e = 0), !0 === b.options.centerMode && !0 === b.options.infinite ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : !0 === b.options.centerMode && (b.slideOffset = 0, 
            b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = !1 === b.options.vertical ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, 
            !0 === b.options.variableWidth && (f = b.slideCount <= b.options.slidesToShow || !1 === b.options.infinite ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), 
            c = !0 === b.options.rtl ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, 
            !0 === b.options.centerMode && (f = b.slideCount <= b.options.slidesToShow || !1 === b.options.infinite ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), 
            c = !0 === b.options.rtl ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, 
            c += (b.$list.width() - f.outerWidth()) / 2)), c;
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a];
        }, b.prototype.getNavigableIndexes = function() {
            var e, a = this, b = 0, c = 0, d = [];
            for (!1 === a.options.infinite ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, 
            c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b; ) d.push(b), b = c + a.options.slidesToScroll, 
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d;
        }, b.prototype.getSlick = function() {
            return this;
        }, b.prototype.getSlideCount = function() {
            var d, e, b = this;
            return e = !0 === b.options.centerMode ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, 
            !0 === b.options.swipeToSlide ? (b.$slideTrack.find(".slick-slide").each((function(c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
            })), Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b);
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), 
            c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), 
            c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [ c ]), 
            !0 === c.options.accessibility && c.initADA(), c.options.autoplay && (c.paused = !1, 
            c.autoPlay());
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each((function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                });
            })), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each((function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                });
            })).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
            b.activateADA();
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, a.changeSlide));
        }, b.prototype.initDotEvents = function() {
            var b = this;
            !0 === b.options.dots && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), !0 === b.options.dots && !0 === b.options.pauseOnDotsHover && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), 
            b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), 
            !0 === b.options.accessibility && b.$list.on("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
            a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), 
            a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), 
            a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }, b.prototype.initUI = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), 
            a.$nextArrow.show()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.show();
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === b.options.accessibility ? b.changeSlide({
                data: {
                    message: !0 === b.options.rtl ? "next" : "previous"
                }
            }) : 39 === a.keyCode && !0 === b.options.accessibility && b.changeSlide({
                data: {
                    message: !0 === b.options.rtl ? "previous" : "next"
                }
            }));
        }, b.prototype.lazyLoad = function() {
            function g(c) {
                a("img[data-lazy]", c).each((function() {
                    var c = a(this), d = a(this).attr("data-lazy"), e = document.createElement("img");
                    e.onload = function() {
                        c.animate({
                            opacity: 0
                        }, 100, (function() {
                            c.attr("src", d).animate({
                                opacity: 1
                            }, 200, (function() {
                                c.removeAttr("data-lazy").removeClass("slick-loading");
                            })), b.$slider.trigger("lazyLoaded", [ b, c, d ]);
                        }));
                    }, e.onerror = function() {
                        c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                        b.$slider.trigger("lazyLoadError", [ b, c, d ]);
                    }, e.src = d;
                }));
            }
            var c, d, e, f, b = this;
            !0 === b.options.centerMode ? !0 === b.options.infinite ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), 
            f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), 
            f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, 
            f = Math.ceil(e + b.options.slidesToShow), !0 === b.options.fade && (e > 0 && e--, 
            f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), 
            b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), 
            g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), 
            g(d));
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            });
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition();
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0;
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [ b, a ]), b.animating = !1, b.setPosition(), 
            b.swipeLeft = null, b.options.autoplay && b.autoPlay(), !0 === b.options.accessibility && b.initADA());
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            });
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault();
        }, b.prototype.progressiveLazyLoad = function(b) {
            b = b || 1;
            var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
            d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), 
            g.onload = function() {
                e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), !0 === c.options.adaptiveHeight && c.setPosition(), 
                c.$slider.trigger("lazyLoaded", [ c, e, f ]), c.progressiveLazyLoad();
            }, g.onerror = function() {
                3 > b ? setTimeout((function() {
                    c.progressiveLazyLoad(b + 1);
                }), 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                c.$slider.trigger("lazyLoadError", [ c, e, f ]), c.progressiveLazyLoad());
            }, g.src = f) : c.$slider.trigger("allImagesLoaded", [ c ]);
        }, b.prototype.refresh = function(b) {
            var d, e, c = this;
            e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), 
            c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, 
            c.destroy(!0), a.extend(c, c.initials, {
                currentSlide: d
            }), c.init(), b || c.changeSlide({
                data: {
                    message: "index",
                    index: d
                }
            }, !1);
        }, b.prototype.registerBreakpoints = function() {
            var c, d, e, b = this, f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f) if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (;e >= 0; ) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), 
                    e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
                }
                b.breakpoints.sort((function(a, c) {
                    return b.options.mobileFirst ? a - c : c - a;
                }));
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, 
            b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), 
            b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), 
            b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), 
            b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), 
            b.checkResponsive(!1, !0), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
            b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), 
            b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [ b ]);
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout((function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
            }), 50));
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = !0 === b ? 0 : d.slideCount - 1) : a = !0 === b ? --a : a, 
            d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), !0 === c ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), 
            d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), 
            d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
        }, b.prototype.setCSS = function(a) {
            var d, e, b = this, c = {};
            !0 === b.options.rtl && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", 
            e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, 
            !1 === b.transformsEnabled ? b.$slideTrack.css(c) : (c = {}, !1 === b.cssTransitions ? (c[b.animType] = "translate(" + d + ", " + e + ")", 
            b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", 
            b.$slideTrack.css(c)));
        }, b.prototype.setDimensions = function() {
            var a = this;
            !1 === a.options.vertical ? !0 === a.options.centerMode && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), 
            !0 === a.options.centerMode && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), !1 === a.options.vertical && !1 === a.options.variableWidth ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), 
            a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : !0 === a.options.variableWidth ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), 
            a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            !1 === a.options.variableWidth && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
        }, b.prototype.setFade = function() {
            var c, b = this;
            b.$slides.each((function(d, e) {
                c = b.slideWidth * d * -1, !0 === b.options.rtl ? a(e).css({
                    position: "relative",
                    right: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                });
            })), b.$slides.eq(b.currentSlide).css({
                zIndex: b.options.zIndex - 1,
                opacity: 1
            });
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b);
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
            var c, d, e, f, h, b = this, g = !1;
            if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], 
            f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), 
            "single" === h) b.options[e] = f; else if ("multiple" === h) a.each(e, (function(a, c) {
                b.options[a] = c;
            })); else if ("responsive" === h) for (d in f) if ("array" !== a.type(b.options.responsive)) b.options.responsive = [ f[d] ]; else {
                for (c = b.options.responsive.length - 1; c >= 0; ) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), 
                c--;
                b.options.responsive.push(f[d]);
            }
            g && (b.unload(), b.reinit());
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), !1 === a.options.fade ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), 
            a.$slider.trigger("setPosition", [ a ]);
        }, b.prototype.setProps = function() {
            var a = this, b = document.body.style;
            a.positionProp = !0 === a.options.vertical ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), 
            (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && !0 === a.options.useCSS && (a.cssTransitions = !0), 
            a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), 
            void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", 
            a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
            void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", 
            a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), 
            void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", 
            a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
            void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", 
            a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), 
            void 0 !== b.transform && !1 !== a.animType && (a.animType = "transform", a.transformType = "transform", 
            a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && !1 !== a.animType;
        }, b.prototype.setSlideClasses = function(a) {
            var c, d, e, f, b = this;
            d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
            b.$slides.eq(a).addClass("slick-current"), !0 === b.options.centerMode ? (c = Math.floor(b.options.slidesToShow / 2), 
            !0 === b.options.infinite && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, 
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 
            0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), 
            b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, 
            e = !0 === b.options.infinite ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
            "ondemand" === b.options.lazyLoad && b.lazyLoad();
        }, b.prototype.setupInfinite = function() {
            var c, d, e, b = this;
            if (!0 === b.options.fade && (b.options.centerMode = !1), !0 === b.options.infinite && !1 === b.options.fade && (d = null, 
            b.slideCount > b.options.slidesToShow)) {
                for (e = !0 === b.options.centerMode ? b.options.slidesToShow + 1 : b.options.slidesToShow, 
                c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
                for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
                b.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                    a(this).attr("id", "");
                }));
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a;
        }, b.prototype.selectHandler = function(b) {
            var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), 
            void c.asNavFor(e)) : void c.slideHandler(e);
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, j, h = null, i = this;
            return b = b || !1, !0 === i.animating && !0 === i.options.waitForAnimate || !0 === i.options.fade && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (!1 === b && i.asNavFor(a), 
            d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, 
            !1 === i.options.infinite && !1 === i.options.centerMode && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (!1 === i.options.fade && (d = i.currentSlide, 
            !0 !== c ? i.animateSlide(g, (function() {
                i.postSlide(d);
            })) : i.postSlide(d))) : !1 === i.options.infinite && !0 === i.options.centerMode && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (!1 === i.options.fade && (d = i.currentSlide, 
            !0 !== c ? i.animateSlide(g, (function() {
                i.postSlide(d);
            })) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), 
            e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, 
            i.animating = !0, i.$slider.trigger("beforeChange", [ i, i.currentSlide, e ]), f = i.currentSlide, 
            i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), 
            j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), 
            i.updateDots(), i.updateArrows(), !0 === i.options.fade ? (!0 !== c ? (i.fadeSlideOut(f), 
            i.fadeSlide(e, (function() {
                i.postSlide(e);
            }))) : i.postSlide(e), void i.animateHeight()) : void (!0 !== c ? i.animateSlide(h, (function() {
                i.postSlide(e);
            })) : i.postSlide(e))));
        }, b.prototype.startLoad = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), 
            a.$nextArrow.hide()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.hide(), 
            a.$slider.addClass("slick-loading");
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, 
            c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 
            45 >= d && d >= 0 ? !1 === e.options.rtl ? "left" : "right" : 360 >= d && d >= 315 ? !1 === e.options.rtl ? "left" : "right" : d >= 135 && 225 >= d ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
        }, b.prototype.swipeEnd = function(a) {
            var c, d, b = this;
            if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, 
            void 0 === b.touchObject.curX) return !1;
            if (!0 === b.touchObject.edgeHit && b.$slider.trigger("edge", [ b, b.swipeDirection() ]), 
            b.touchObject.swipeLength >= b.touchObject.minSwipe) {
                switch (d = b.swipeDirection()) {
                  case "left":
                  case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), 
                    b.currentDirection = 0;
                    break;

                  case "right":
                  case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), 
                    b.currentDirection = 1;
                }
                "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [ b, d ]));
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), 
            b.touchObject = {});
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(!1 === b.options.swipe || "ontouchend" in document && !1 === b.options.swipe || !1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, 
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, !0 === b.options.verticalSwiping && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), 
            a.data.action) {
              case "start":
                b.swipeStart(a);
                break;

              case "move":
                b.swipeMove(a);
                break;

              case "end":
                b.swipeEnd(a);
            }
        }, b.prototype.swipeMove = function(a) {
            var d, e, f, g, h, b = this;
            return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), 
            b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, 
            b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), 
            !0 === b.options.verticalSwiping && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), 
            e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), 
            g = (!1 === b.options.rtl ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), 
            !0 === b.options.verticalSwiping && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), 
            f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, !1 === b.options.infinite && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, 
            b.touchObject.edgeHit = !0), !1 === b.options.vertical ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, 
            !0 === b.options.verticalSwiping && (b.swipeLeft = d + f * g), !0 === b.options.fade || !1 === b.options.touchMove ? !1 : !0 === b.animating ? (b.swipeLeft = null, 
            !1) : void b.setCSS(b.swipeLeft)) : void 0);
        }, b.prototype.swipeStart = function(a) {
            var c, b = this;
            return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, 
            !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), 
            b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, 
            b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, 
            void (b.dragging = !0));
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), 
            a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), 
            b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [ b, a ]), b.destroy();
        }, b.prototype.updateArrows = function() {
            var a = this;
            Math.floor(a.options.slidesToShow / 2), !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
            a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && !1 === a.options.centerMode ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && !0 === a.options.centerMode && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
            a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
        }, a.fn.slick = function() {
            var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
            for (f = 0; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), 
            "undefined" != typeof g) return g;
            return a;
        };
    }));
    /*! jQuery UI - v1.13.2 - 2022-11-12
* http://jqueryui.com
* Includes: widget.js, jquery-patch.js, keycode.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
    !function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define([ "jquery" ], e) : e(jQuery);
    }((function(l) {
        "use strict";
        l.ui = l.ui || {};
        l.ui.version = "1.13.2";
        var n, i = 0, o = Array.prototype.hasOwnProperty, h = Array.prototype.slice;
        l.cleanData = (n = l.cleanData, function(e) {
            for (var t, i, s = 0; null != (i = e[s]); s++) (t = l._data(i, "events")) && t.remove && l(i).triggerHandler("remove");
            n(e);
        }), l.widget = function(e, i, t) {
            var s, n, a, o = {}, h = e.split(".")[0], r = h + "-" + (e = e.split(".")[1]);
            return t || (t = i, i = l.Widget), Array.isArray(t) && (t = l.extend.apply(null, [ {} ].concat(t))), 
            l.expr.pseudos[r.toLowerCase()] = function(e) {
                return !!l.data(e, r);
            }, l[h] = l[h] || {}, s = l[h][e], n = l[h][e] = function(e, t) {
                if (!this || !this._createWidget) return new n(e, t);
                arguments.length && this._createWidget(e, t);
            }, l.extend(n, s, {
                version: t.version,
                _proto: l.extend({}, t),
                _childConstructors: []
            }), (a = new i).options = l.widget.extend({}, a.options), l.each(t, (function(t, s) {
                function n() {
                    return i.prototype[t].apply(this, arguments);
                }
                function a(e) {
                    return i.prototype[t].apply(this, e);
                }
                o[t] = "function" == typeof s ? function() {
                    var e, t = this._super, i = this._superApply;
                    return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, 
                    this._superApply = i, e;
                } : s;
            })), n.prototype = l.widget.extend(a, {
                widgetEventPrefix: s && a.widgetEventPrefix || e
            }, o, {
                constructor: n,
                namespace: h,
                widgetName: e,
                widgetFullName: r
            }), s ? (l.each(s._childConstructors, (function(e, t) {
                var i = t.prototype;
                l.widget(i.namespace + "." + i.widgetName, n, t._proto);
            })), delete s._childConstructors) : i._childConstructors.push(n), l.widget.bridge(e, n), 
            n;
        }, l.widget.extend = function(e) {
            for (var t, i, s = h.call(arguments, 1), n = 0, a = s.length; n < a; n++) for (t in s[n]) i = s[n][t], 
            o.call(s[n], t) && void 0 !== i && (l.isPlainObject(i) ? e[t] = l.isPlainObject(e[t]) ? l.widget.extend({}, e[t], i) : l.widget.extend({}, i) : e[t] = i);
            return e;
        }, l.widget.bridge = function(a, t) {
            var o = t.prototype.widgetFullName || a;
            l.fn[a] = function(i) {
                var e = "string" == typeof i, s = h.call(arguments, 1), n = this;
                return e ? this.length || "instance" !== i ? this.each((function() {
                    var e, t = l.data(this, o);
                    return "instance" === i ? (n = t, !1) : t ? "function" != typeof t[i] || "_" === i.charAt(0) ? l.error("no such method '" + i + "' for " + a + " widget instance") : (e = t[i].apply(t, s)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, 
                    !1) : void 0 : l.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'");
                })) : n = void 0 : (s.length && (i = l.widget.extend.apply(null, [ i ].concat(s))), 
                this.each((function() {
                    var e = l.data(this, o);
                    e ? (e.option(i || {}), e._init && e._init()) : l.data(this, o, new t(i, this));
                }))), n;
            };
        }, l.Widget = function() {}, l.Widget._childConstructors = [], l.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, t) {
                t = l(t || this.defaultElement || this)[0], this.element = l(t), this.uuid = i++, 
                this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = l(), this.hoverable = l(), 
                this.focusable = l(), this.classesElementLookup = {}, t !== this && (l.data(t, this.widgetFullName, this), 
                this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === t && this.destroy();
                    }
                }), this.document = l(t.style ? t.ownerDocument : t.document || t), this.window = l(this.document[0].defaultView || this.document[0].parentWindow)), 
                this.options = l.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), 
                this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
                this._init();
            },
            _getCreateOptions: function() {
                return {};
            },
            _getCreateEventData: l.noop,
            _create: l.noop,
            _init: l.noop,
            destroy: function() {
                var i = this;
                this._destroy(), l.each(this.classesElementLookup, (function(e, t) {
                    i._removeClass(t, e);
                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
                this.bindings.off(this.eventNamespace);
            },
            _destroy: l.noop,
            widget: function() {
                return this.element;
            },
            option: function(e, t) {
                var i, s, n, a = e;
                if (0 === arguments.length) return l.widget.extend({}, this.options);
                if ("string" == typeof e) if (a = {}, e = (i = e.split(".")).shift(), i.length) {
                    for (s = a[e] = l.widget.extend({}, this.options[e]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, 
                    s = s[i[n]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                    s[e] = t;
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = t;
                }
                return this._setOptions(a), this;
            },
            _setOptions: function(e) {
                for (var t in e) this._setOption(t, e[t]);
                return this;
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), 
                this;
            },
            _setOptionClasses: function(e) {
                var t, i, s;
                for (t in e) s = this.classesElementLookup[t], e[t] !== this.options.classes[t] && s && s.length && (i = l(s.get()), 
                this._removeClass(s, t), i.addClass(this._classes({
                    element: i,
                    keys: t,
                    classes: e,
                    add: !0
                })));
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), 
                e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                });
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                });
            },
            _classes: function(n) {
                var a = [], o = this;
                function e(e, t) {
                    for (var i, s = 0; s < e.length; s++) i = o.classesElementLookup[e[s]] || l(), i = n.add ? (function() {
                        var i = [];
                        n.element.each((function(e, t) {
                            l.map(o.classesElementLookup, (function(e) {
                                return e;
                            })).some((function(e) {
                                return e.is(t);
                            })) || i.push(t);
                        })), o._on(l(i), {
                            remove: "_untrackClassesElement"
                        });
                    }(), l(l.uniqueSort(i.get().concat(n.element.get())))) : l(i.not(n.element).get()), 
                    o.classesElementLookup[e[s]] = i, a.push(e[s]), t && n.classes[e[s]] && a.push(n.classes[e[s]]);
                }
                return (n = l.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, n)).keys && e(n.keys.match(/\S+/g) || [], !0), n.extra && e(n.extra.match(/\S+/g) || []), 
                a.join(" ");
            },
            _untrackClassesElement: function(i) {
                var s = this;
                l.each(s.classesElementLookup, (function(e, t) {
                    -1 !== l.inArray(i.target, t) && (s.classesElementLookup[e] = l(t.not(i.target).get()));
                })), this._off(l(i.target));
            },
            _removeClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !1);
            },
            _addClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !0);
            },
            _toggleClass: function(e, t, i, s) {
                var n = "string" == typeof e || null === e;
                i = {
                    extra: n ? t : i,
                    keys: n ? e : t,
                    element: n ? this.element : e,
                    add: s = "boolean" == typeof s ? s : i
                };
                return i.element.toggleClass(this._classes(i), s), this;
            },
            _on: function(n, a, e) {
                var o, h = this;
                "boolean" != typeof n && (e = a, a = n, n = !1), e ? (a = o = l(a), this.bindings = this.bindings.add(a)) : (e = a, 
                a = this.element, o = this.widget()), l.each(e, (function(e, t) {
                    function i() {
                        if (n || !0 !== h.options.disabled && !l(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? h[t] : t).apply(h, arguments);
                    }
                    "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || l.guid++);
                    var s = e.match(/^([\w:-]*)\s*(.*)$/);
                    e = s[1] + h.eventNamespace, s = s[2];
                    s ? o.on(e, s, i) : a.on(e, i);
                }));
            },
            _off: function(e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
                e.off(t), this.bindings = l(this.bindings.not(e).get()), this.focusable = l(this.focusable.not(e).get()), 
                this.hoverable = l(this.hoverable.not(e).get());
            },
            _delay: function(e, t) {
                var i = this;
                return setTimeout((function() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments);
                }), t || 0);
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(l(e.currentTarget), null, "ui-state-hover");
                    },
                    mouseleave: function(e) {
                        this._removeClass(l(e.currentTarget), null, "ui-state-hover");
                    }
                });
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(l(e.currentTarget), null, "ui-state-focus");
                    },
                    focusout: function(e) {
                        this._removeClass(l(e.currentTarget), null, "ui-state-focus");
                    }
                });
            },
            _trigger: function(e, t, i) {
                var s, n, a = this.options[e];
                if (i = i || {}, (t = l.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
                t.target = this.element[0], n = t.originalEvent) for (s in n) s in t || (t[s] = n[s]);
                return this.element.trigger(t, i), !("function" == typeof a && !1 === a.apply(this.element[0], [ t ].concat(i)) || t.isDefaultPrevented());
            }
        }, l.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, (function(a, o) {
            l.Widget.prototype["_" + a] = function(t, e, i) {
                var s, n = (e = "string" == typeof e ? {
                    effect: e
                } : e) ? !0 !== e && "number" != typeof e && e.effect || o : a;
                "number" == typeof (e = e || {}) ? e = {
                    duration: e
                } : !0 === e && (e = {}), s = !l.isEmptyObject(e), e.complete = i, e.delay && t.delay(e.delay), 
                s && l.effects && l.effects.effect[n] ? t[a](e) : n !== a && t[n] ? t[n](e.duration, e.easing, i) : t.queue((function(e) {
                    l(this)[a](), i && i.call(t[0]), e();
                }));
            };
        }));
        var t, s;
        l.widget;
        l.expr.pseudos || (l.expr.pseudos = l.expr[":"]), l.uniqueSort || (l.uniqueSort = l.unique), 
        l.escapeSelector || (t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, s = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, l.escapeSelector = function(e) {
            return (e + "").replace(t, s);
        }), l.fn.even && l.fn.odd || l.fn.extend({
            even: function() {
                return this.filter((function(e) {
                    return e % 2 == 0;
                }));
            },
            odd: function() {
                return this.filter((function(e) {
                    return e % 2 == 1;
                }));
            }
        });
        l.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, l.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var a = !1;
        l(document).on("mouseup", (function() {
            a = !1;
        }));
        l.widget("ui.mouse", {
            version: "1.13.2",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.on("mousedown." + this.widgetName, (function(e) {
                    return t._mouseDown(e);
                })).on("click." + this.widgetName, (function(e) {
                    if (!0 === l.data(e.target, t.widgetName + ".preventClickEvent")) return l.removeData(e.target, t.widgetName + ".preventClickEvent"), 
                    e.stopImmediatePropagation(), !1;
                })), this.started = !1;
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function(e) {
                if (!a) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var t = this, i = 1 === e.which, s = !("string" != typeof this.options.cancel || !e.target.nodeName) && l(e.target).closest(this.options.cancel).length;
                    return i && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, 
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                        t.mouseDelayMet = !0;
                    }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                    !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === l.data(e.target, this.widgetName + ".preventClickEvent") && l.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                    this._mouseMoveDelegate = function(e) {
                        return t._mouseMove(e);
                    }, this._mouseUpDelegate = function(e) {
                        return t._mouseUp(e);
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                    e.preventDefault(), a = !0)) : !0;
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (l.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
                e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
                this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && l.data(e.target, this.widgetName + ".preventClickEvent", !0), 
                this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
                delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, a = !1, e.preventDefault();
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet;
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0;
            }
        }), l.widget("ui.slider", l.ui.mouse, {
            version: "1.13.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
                this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
                this._refresh(), this._animateOff = !1;
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
            },
            _createHandles: function() {
                var e, t = this.options, i = this.element.find(".ui-slider-handle"), s = [], n = t.values && t.values.length || 1;
                for (i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), e = i.length; e < n; e++) s.push("<span tabindex='0'></span>");
                this.handles = i.add(l(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
                this.handle = this.handles.eq(0), this.handles.each((function(e) {
                    l(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
                }));
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : Array.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
                this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
                this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = l("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
                "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), 
                this.range = null);
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
                this._focusable(this.handles);
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
            },
            _mouseCapture: function(e) {
                var i, s, n, a, t, o, h = this, r = this.options;
                return !r.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), o = {
                    x: e.pageX,
                    y: e.pageY
                }, i = this._normValueFromMouse(o), s = this._valueMax() - this._valueMin() + 1, 
                this.handles.each((function(e) {
                    var t = Math.abs(i - h.values(e));
                    (t < s || s === t && (e === h._lastChangedValue || h.values(e) === r.min)) && (s = t, 
                    n = l(this), a = e);
                })), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, 
                this._addClass(n, null, "ui-state-active"), n.trigger("focus"), t = n.offset(), 
                o = !l(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = o ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - t.left - n.width() / 2,
                    top: e.pageY - t.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, i), this._animateOff = !0));
            },
            _mouseStart: function() {
                return !0;
            },
            _mouseDrag: function(e) {
                var t = {
                    x: e.pageX,
                    y: e.pageY
                };
                t = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, t), !1;
            },
            _mouseStop: function(e) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
                this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, 
                this._clickOffset = null, this._animateOff = !1;
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function(e) {
                var t;
                e = "horizontal" === this.orientation ? (t = this.elementSize.width, e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, 
                e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
                e /= t;
                return (e = 1 < e ? 1 : e) < 0 && (e = 0), "vertical" === this.orientation && (e = 1 - e), 
                t = this._valueMax() - this._valueMin(), t = this._valueMin() + e * t, this._trimAlignValue(t);
            },
            _uiHash: function(e, t, i) {
                var s = {
                    handle: this.handles[e],
                    handleIndex: e,
                    value: void 0 !== t ? t : this.value()
                };
                return this._hasMultipleValues() && (s.value = void 0 !== t ? t : this.values(e), 
                s.values = i || this.values()), s;
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length;
            },
            _start: function(e, t) {
                return this._trigger("start", e, this._uiHash(t));
            },
            _slide: function(e, t, i) {
                var s, n = this.value(), a = this.values();
                this._hasMultipleValues() && (s = this.values(t ? 0 : 1), n = this.values(t), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === t ? Math.min(s, i) : Math.max(s, i)), 
                a[t] = i), i !== n && !1 !== this._trigger("slide", e, this._uiHash(t, i, a)) && (this._hasMultipleValues() ? this.values(t, i) : this.value(i));
            },
            _stop: function(e, t) {
                this._trigger("stop", e, this._uiHash(t));
            },
            _change: function(e, t) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)));
            },
            value: function(e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), 
                void this._change(null, 0)) : this._value();
            },
            values: function(e, t) {
                var i, s, n;
                if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(t), 
                this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!Array.isArray(e)) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (i = this.options.values, s = e, n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), 
                this._change(null, n);
                this._refreshValue();
            },
            _setOption: function(e, t) {
                var i, s = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === t ? (this.options.value = this._values(0), 
                this.options.values = null) : "max" === t && (this.options.value = this._values(this.options.values.length - 1), 
                this.options.values = null)), Array.isArray(this.options.values) && (s = this.options.values.length), 
                this._super(e, t), e) {
                  case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                    this._refreshValue(), this.options.range && this._refreshRange(t), this.handles.css("horizontal" === t ? "bottom" : "left", "");
                    break;

                  case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;

                  case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;

                  case "step":
                  case "min":
                  case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;

                  case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1;
                }
            },
            _setOptionDisabled: function(e) {
                this._super(e), this._toggleClass(null, "ui-state-disabled", !!e);
            },
            _value: function() {
                var e = this.options.value;
                return e = this._trimAlignValue(e);
            },
            _values: function(e) {
                var t, i;
                if (arguments.length) return e = this.options.values[e], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                    return t;
                }
                return [];
            },
            _trimAlignValue: function(e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = 0 < this.options.step ? this.options.step : 1, i = (e - this._valueMin()) % t;
                e -= i;
                return 2 * Math.abs(i) >= t && (e += 0 < i ? t : -t), parseFloat(e.toFixed(5));
            },
            _calculateNewMax: function() {
                var e = this.options.max, t = this._valueMin(), i = this.options.step;
                (e = Math.round((e - t) / i) * i + t) > this.options.max && (e -= i), this.max = parseFloat(e.toFixed(this._precision()));
            },
            _precision: function() {
                var e = this._precisionOf(this.options.step);
                return e = null !== this.options.min ? Math.max(e, this._precisionOf(this.options.min)) : e;
            },
            _precisionOf: function(e) {
                var t = e.toString();
                e = t.indexOf(".");
                return -1 === e ? 0 : t.length - e - 1;
            },
            _valueMin: function() {
                return this.options.min;
            },
            _valueMax: function() {
                return this.max;
            },
            _refreshRange: function(e) {
                "vertical" === e && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === e && this.range.css({
                    height: "",
                    bottom: ""
                });
            },
            _refreshValue: function() {
                var t, i, e, s, n, a = this.options.range, o = this.options, h = this, r = !this._animateOff && o.animate, u = {};
                this._hasMultipleValues() ? this.handles.each((function(e) {
                    i = (h.values(e) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", 
                    l(this).stop(1, 1)[r ? "animate" : "css"](u, o.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === e && h.range.stop(1, 1)[r ? "animate" : "css"]({
                        left: i + "%"
                    }, o.animate), 1 === e && h.range[r ? "animate" : "css"]({
                        width: i - t + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    })) : (0 === e && h.range.stop(1, 1)[r ? "animate" : "css"]({
                        bottom: i + "%"
                    }, o.animate), 1 === e && h.range[r ? "animate" : "css"]({
                        height: i - t + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }))), t = i;
                })) : (e = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (e - s) / (n - s) * 100 : 0, 
                u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[r ? "animate" : "css"](u, o.animate), 
                "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    width: i + "%"
                }, o.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, o.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    height: i + "%"
                }, o.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, o.animate));
            },
            _handleEvents: {
                keydown: function(e) {
                    var t, i, s, n = l(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                      case l.ui.keyCode.HOME:
                      case l.ui.keyCode.END:
                      case l.ui.keyCode.PAGE_UP:
                      case l.ui.keyCode.PAGE_DOWN:
                      case l.ui.keyCode.UP:
                      case l.ui.keyCode.RIGHT:
                      case l.ui.keyCode.DOWN:
                      case l.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(l(e.target), null, "ui-state-active"), 
                        !1 === this._start(e, n))) return;
                    }
                    switch (s = this.options.step, t = i = this._hasMultipleValues() ? this.values(n) : this.value(), 
                    e.keyCode) {
                      case l.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;

                      case l.ui.keyCode.END:
                        i = this._valueMax();
                        break;

                      case l.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(t + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;

                      case l.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(t - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;

                      case l.ui.keyCode.UP:
                      case l.ui.keyCode.RIGHT:
                        if (t === this._valueMax()) return;
                        i = this._trimAlignValue(t + s);
                        break;

                      case l.ui.keyCode.DOWN:
                      case l.ui.keyCode.LEFT:
                        if (t === this._valueMin()) return;
                        i = this._trimAlignValue(t - s);
                    }
                    this._slide(e, n, i);
                },
                keyup: function(e) {
                    var t = l(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, t), this._change(e, t), 
                    this._removeClass(l(e.target), null, "ui-state-active"));
                }
            }
        });
    }));
    function getScrollBarWidth() {
        var inner = document.createElement("p");
        inner.style.width = "100%";
        inner.style.height = "200px";
        var outer = document.createElement("div");
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = "scroll";
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;
        document.body.removeChild(outer);
        return w1 - w2;
    }
    $(document).ready((function() {
        const devices = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini", "i");
        if (devices.test(navigator.userAgent)) $("body").addClass("is-mobile"); else $("body").addClass("is-desktop");
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) $("body").addClass("safari");
        $("input").on("keyup", (function() {
            var $this = $(this), val = $this.val();
            if (val.length >= 1) $(this).addClass("not-empty"); else $(this).removeClass("not-empty");
        }));
        if ($("textarea").length) {
            var textarea = document.querySelector("textarea");
            textarea.addEventListener("keyup", (function() {
                var $this_2 = $(this), val_2 = $this_2.val();
                if (val_2.length >= 1) {
                    $(this).addClass("not-empty");
                    $(this).closest("label").addClass("not-empty-line");
                } else {
                    $(this).removeClass("label");
                    $(this).closest("label").removeClass("not-empty-line");
                }
                if (this.scrollTop > 0) this.style.height = this.scrollHeight + "px";
            }));
        }
        if ($(".section-for-social__b-text").length) $(".section-for-social__b-text").clone().appendTo(".section-for-social").addClass("mod-clone");
        if ($(".wow").length) (new WOW).init();
        if ($(".main-page-slider").length) $(".main-page-slider").not(".slick-initialized").slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: "linear",
            arrows: false
        });
        if ($(".b-all-width-img-carrousel").length) $(".b-all-width-img-carrousel").not(".slick-initialized").slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            cssEase: "linear",
            arrows: true
        });
        if ($(".categories").length) $(".categories").not(".slick-initialized").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            dots: false,
            infinite: true,
            cssEase: "linear",
            arrows: true,
            touchThreshold: 8,
            responsive: [ {
                breakpoint: 1271,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            } ]
        });
        if ($(".b-archive__slider").length) $(".b-archive__slider").not(".slick-initialized").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            cssEase: "linear",
            arrows: true,
            responsive: [ {
                breakpoint: 735,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
        });
        if ($(".img-columns-3.img-carrousel").length) $(".img-columns-3.img-carrousel").not(".slick-initialized").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            focusOnSelect: true,
            dots: false,
            infinite: true,
            cssEase: "linear",
            arrows: true,
            responsive: [ {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
        });
        if ($(".product-cart__main-slider").length) $(".product-cart__main-slider").not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            cssEase: "linear",
            arrows: true
        });
        $(".top-filter__unit select").on("selectric-change", (function(event, element, selectric) {
            $(".comparison").hide();
            $(".comparison#" + $(this).val()).show();
        }));
        $(".comparison").each((function() {
            const self = $(this);
            $(this).find(".comparison__btns .slider-button.mod-prev").on("click", (function(event) {
                var element_width = self.find(".compare_table th").eq(0).innerWidth();
                self.find(".table-wrap").animate({
                    scrollLeft: self.find(".table-wrap").scrollLeft() - element_width - 34
                }, 800);
                event.preventDefault();
            }));
            $(this).find(".comparison__btns .slider-button.mod-next").on("click", (function(event) {
                var element_width = self.find(".compare_table th").eq(0).innerWidth();
                self.find(".table-wrap").animate({
                    scrollLeft: self.find(".table-wrap").scrollLeft() + element_width + 34
                }, 800);
                event.preventDefault();
            }));
            var scr = self.find(".table-wrap");
            scr.mousedown((function(event0) {
                var startX = this.scrollLeft + event0.pageX;
                var startY = this.scrollTop + event0.pageY;
                scr.mousemove((function(event1) {
                    this.scrollLeft = startX - event1.pageX;
                    this.scrollTop = startY - event1.pageY;
                    return false;
                }));
            }));
            $(window).mouseup((function() {
                scr.off("mousemove");
            }));
        }));
        $.fn.togglepanels = function() {
            return this.each((function() {
                $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".accordion-name").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover((function() {
                    $(this).toggleClass("ui-state-hover");
                })).append('<span class="ui-icon ui-icon-triangle-1-e"></span>').click((function() {
                    $(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end().next().slideToggle();
                    $(this).closest(".line-accordion").toggleClass("accordion-active");
                    $(this).next().toggleClass("ui-state-active");
                    return false;
                })).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").not(".in").hide();
            }));
        };
        $(".filter__list-group, .form-with-accordion").togglepanels();
        $(".line-accordion.mod-price .accordion-name").click();
        if ($(".ui-slider").length) {
            $(".ui-slider").slider({
                range: "min",
                value: 168,
                min: 100,
                max: 250,
                slide: function(event, ui) {
                    $(".ui-slider-amount").val(ui.value);
                }
            });
            $(".ui-slider-amount").val($(".ui-slider").slider("value"));
        }
        if ($(".sliders").length) {
            $(".sliders").slider({
                range: true,
                min: 0,
                max: 9999,
                values: [ 0, 9999 ],
                slide: function(event, ui) {
                    $("#amount11").val(ui.values[0]);
                    $("#amount12").val(ui.values[1]);
                }
            });
            $("#amount11").val($(".sliders").slider("values", 0));
            $("#amount12").val($(".sliders").slider("values", 1));
        }
        if ($("select").length) {
            $((function() {
                $("select").selectric();
            }));
            $("select").on("eventname", (function(event, element, selectric) {}));
        }
        $(".link-to-window").on("click", (function(event) {
            event.preventDefault();
            $(".modal-window").removeClass("active");
            var id = $(this).attr("href");
            $(id).addClass("active");
            $("body").addClass("modal-window-open");
        }));
        $(document).on("click", ".modal-window-close", (function(event) {
            event.preventDefault();
            $(this).closest(".modal-window").removeClass("active");
            $("body").removeClass("modal-window-open");
            $(this).closest(".modal-window").removeClass("mod-vertical-align-top");
        }));
        $(document).mouseup((function(e) {
            var div = $(".modal-window .window__wrap");
            if (!div.is(e.target) && 0 === div.has(e.target).length) {
                $(".modal-window").removeClass("active");
                $("body").removeClass("modal-window-open");
                $(".modal-window").removeClass("mod-vertical-align-top");
            }
        }));
        $(".tab__title-item:first-child .tab__link").addClass("active");
        $(document).on("click", ".tab__link", (function(e) {
            e.preventDefault();
            if ($(this).hasClass("active")) ; else {
                if (void 0 !== $(this).attr("data-id")) var tabId = $(this).attr("data-id"); else tabId = $(this).attr("href");
                $(this).addClass("active");
                $(this).closest(".tab").find(".tab__link").not(this).removeClass("active");
                $(this).closest(".tab").find(".tab__info-unit").not(tabId).hide(0);
                $(tabId).show();
            }
            $(this).find("input").prop("checked", true);
        }));
        $(".nav-main__type-link").mouseenter((function() {
            var nav_tabId = $(this).attr("data-nav-type");
            var nav_img = $(this).attr("data-nav-img");
            $(".nav-main__type-link").not(this).removeClass("active-link");
            $(".nav-main__link").removeClass("active-link");
            $(".nav-main__link").removeClass("open");
            $(".nav-main__third-level-columns .nav-main__list").removeClass("visible");
            $(".nav-main__second-level-columns .nav-main__list").hide(0);
            $(this).addClass("active-link");
            $(".nav-main__info-unit").not(nav_tabId).hide(0);
            $(nav_tabId).show();
            $(".nav-main__img").css("backgroundImage", nav_img);
        }));
        $(".nav-main__link").mouseenter((function() {
            var nav_img = $(this).attr("data-nav-img");
            $(".nav-main__link").not(this).removeClass("active-link");
            $(this).addClass("active-link");
            $(".nav-main__img").css("backgroundImage", nav_img);
        }));
        $(".nav-main__list.first-level .nav-main__link").mouseenter((function() {
            var nav_tab_second = $(this).attr("data-nav-second");
            $(".nav-main__list.first-level .nav-main__link").removeClass("open");
            $(".nav-main__second-level-columns .nav-main__link").removeClass("open");
            $(this).addClass("open");
            $(".nav-main__second-level-columns .nav-main__list").not(nav_tab_second).hide(0);
            $(nav_tab_second).show();
            $(".nav-main__third-level-columns .nav-main__list").removeClass("visible");
        }));
        $(".nav-main__second-level-columns .nav-main__link").mouseenter((function() {
            var nav_tab_third = $(this).attr("data-nav-third");
            $(".nav-main__second-level-columns .nav-main__link").removeClass("open");
            $(this).addClass("open");
            $(".nav-main__third-level-columns .nav-main__list").not(nav_tab_third).removeClass("visible");
            $(nav_tab_third).addClass("visible");
        }));
        $(document).on("click", ".menu-btn", (function(event) {
            event.preventDefault();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".nav-main").slideUp(360);
                $(".mobile-category").removeClass("mod-open");
                $(".mobile-menu").removeClass("active");
                $("body").removeClass("menu-open");
            } else {
                $(".b-search").slideUp(350, (function() {
                    $("body").removeClass("mod-search-open");
                }));
                $(this).addClass("active");
                $(".mobile-menu").addClass("active");
                $("body").addClass("menu-open");
                $(".nav-main__type-item:first-child .nav-main__type-link").mouseenter();
                $(".nav-main").slideDown(360);
            }
        }));
        $(document).mouseup((function(e) {
            if ($("body.menu-open").length) if ($(window).width() + getScrollBarWidth() < 1271) {
                var mobile_menu = $(".mobile-menu, .mobile-category");
                if (!mobile_menu.is(e.target) && 0 === mobile_menu.has(e.target).length) {
                    $(".mobile-menu").removeClass("active");
                    $("body").removeClass("menu-open");
                    $(".mobile-category").removeClass("mod-open");
                    $(".nav-main").slideUp(360);
                    $(".menu-btn").removeClass("active");
                }
            }
        }));
        $(document).on("click", ".mobile-menu__category-link", (function(e) {
            e.preventDefault();
            $(".mobile-menu").removeClass("active");
            $(".mobile-category").addClass("mod-open");
            var type_category = $(this).attr("href");
            $(".mobile-category__menu").not(type_category).hide(0);
            $(type_category).show();
        }));
        $(".mobile-category__menu-item").each((function() {
            if ($(this).has(".second-level-menu").length) $(this).addClass("with-btn").append('<button class=\'mobile-menu__item-btn\'><svg width="5" height="9">\n' + '                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw"></use>\n' + "                </svg></button>");
        }));
        $(".second-level-menu__item").each((function() {
            if ($(this).has(".third-level-menu").length) $(this).addClass("with-btn").append('<button class=\'mobile-menu__item-btn\'><svg width="5" height="9">\n' + '                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw"></use>\n' + "                </svg></button>");
        }));
        $(document).on("click", ".mobile-category__menu-item > .mobile-menu__item-btn", (function(event) {
            event.preventDefault();
            if ($(this).hasClass("active")) {
                $(this).closest(".mobile-category__menu-item").find(".second-level-menu").slideUp(350);
                $(this).closest(".mobile-category__menu-item").removeClass("mod-open");
                $(this).removeClass("active");
            } else {
                $(".mobile-category .second-level-menu").slideUp(350);
                $(".mobile-category .mobile-category__menu-item").removeClass("mod-open");
                $(".mobile-category__menu-item > .mobile-menu__item-btn").removeClass("active");
                $(this).addClass("active");
                $(this).closest(".mobile-category__menu-item").addClass("mod-open");
                $(this).closest(".mobile-category__menu-item").find(".second-level-menu").slideDown(350);
            }
        }));
        $(document).on("click", ".second-level-menu__item > .mobile-menu__item-btn", (function(event) {
            event.preventDefault();
            if ($(this).hasClass("active")) {
                $(this).closest(".second-level-menu__item").find(".third-level-menu").slideUp(350);
                $(this).closest(".second-level-menu__item").removeClass("mod-open");
                $(this).removeClass("active");
            } else {
                $(".mobile-category .third-level-menu").slideUp(350);
                $(".mobile-category .second-level-menu__item").removeClass("mod-open");
                $(".second-level-menu__item > .mobile-menu__item-btn").removeClass("active");
                $(this).addClass("active");
                $(this).closest(".second-level-menu__item").addClass("mod-open");
                $(this).closest(".second-level-menu__item").find(".third-level-menu").slideDown(350);
            }
        }));
        $(document).on("click", ".mobile-menu__close", (function(e) {
            e.preventDefault();
            $(".mobile-menu").removeClass("active");
            $("body").removeClass("menu-open");
            $(".mobile-category").removeClass("mod-open");
            $(".nav-main").slideUp(360);
            $(".menu-btn").removeClass("active");
        }));
        $(document).on("click", ".mobile-category__top-title.mod-first-level", (function(e) {
            e.preventDefault();
            $(".mobile-menu").addClass("active");
            $(".mobile-category").removeClass("mod-open");
        }));
        if ($(".fancybox-zoom").length) {
            var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
                slideShow: true,
                fullScreen: false,
                buttons: [ "zoom" ],
                infobar: false,
                loop: true,
                thumbs: {
                    autoStart: true,
                    axis: "x"
                },
                afterLoad: function() {}
            });
            $(".fancybox-zoom").fancybox(imgOpts);
        }
        $(document).on("click", ".button_minus", (function() {
            var quantity_id = parseInt($(this).attr("data-quantity-id"));
            var value = parseInt($("#quantity-" + quantity_id).val()) - 1;
            if (0 == value) return false;
            $("#quantity-" + quantity_id).val(value);
            $(this).parent().find(".cart_update").trigger("click");
            return false;
        }));
        $(document).on("click", ".button_plus", (function() {
            var quantity_id = parseInt($(this).attr("data-quantity-id"));
            var value = parseInt($("#quantity-" + quantity_id).val()) + 1;
            $("#quantity-" + quantity_id).val(value);
            $(this).parent().find(".cart_update").trigger("click");
        }));
        $(window).resize((function() {
            if ($(".compare_table").length) ; else $(".text table").each((function() {
                if ($(this).width() > $(".wrap").width()) if ($(this).hasClass("mod-long")) ; else {
                    $(this).addClass("mod-long");
                    $(this).wrap("<div class='text-table-overflow'></div>");
                } else if ($(this).hasClass("mod-long")) {
                    $(this).removeClass("mod-long");
                    $(this).unwrap();
                }
            }));
        })).resize();
        $(document).on("click", ".filter-btn, .filter-close-btn", (function(event) {
            event.preventDefault();
            if ($(".filter-aside").hasClass("active")) {
                $(".filter-close-btn").removeClass("mod-fixed");
                $(".filter-form").animate({
                    left: "-480px"
                }, 700, (function() {
                    $(".filter-aside").removeClass("active");
                }));
                $("body").removeClass("filter-open");
            } else {
                $(".filter-aside").addClass("active");
                $(".filter-form").animate({
                    left: "0"
                }, 700, (function() {
                    $(".filter-close-btn").addClass("mod-fixed");
                }));
                $("body").addClass("filter-open");
            }
        }));
        $(document).mouseup((function(e) {
            if ($(".filter-aside").hasClass("active")) {
                var filter = $(".filter-form");
                if (!filter.is(e.target) && 0 === filter.has(e.target).length) {
                    $(".filter-close-btn").removeClass("mod-fixed");
                    $(".filter-form").animate({
                        left: "-480px"
                    }, 700, (function() {
                        $(".filter-aside").removeClass("active");
                    }));
                    $("body").removeClass("filter-open");
                }
            }
        }));
        $(document).on("click", ".b-search__close, .search-btn", (function(event) {
            event.preventDefault();
            if ($("body").hasClass("mod-search-open")) $(".b-search").slideUp(350, (function() {
                $("body").removeClass("mod-search-open");
            })); else {
                $(".menu-btn").removeClass("active");
                $(".nav-main").slideUp(360);
                $(".mobile-category").removeClass("mod-open");
                $(".mobile-menu").removeClass("active");
                $("body").removeClass("menu-open");
                $("body").addClass("mod-search-open");
                $(".b-search").slideDown(350);
            }
        }));
        if ($(".b-title__line").length) {
            function is_fully_shown(target) {
                var wt = $(window).scrollTop();
                var wh = $(window).height();
                var eh = $(target).height();
                var et = $(target).offset().top;
                var dh = $(document).height();
                if (wt + wh >= et || wh + wt == dh || eh + et < wh) return true; else return false;
            }
            $(window).scroll((function() {
                $(".b-title__line").each((function() {
                    if (is_fully_shown($(this))) {
                        var line = $(this);
                        setTimeout((function() {
                            line.addClass("animation-line");
                        }), 1200);
                    }
                }));
            }));
            $(document).ready((function() {
                $(".b-title__line").each((function() {
                    if (is_fully_shown($(this))) {
                        var line = $(this);
                        setTimeout((function() {
                            line.addClass("animation-line");
                        }), 0);
                    }
                }));
            }));
        }
        $(window).scroll((function() {
            if ($(window).scrollTop() > 1) $("body").addClass("header-fixed"); else $("body").removeClass("header-fixed");
        }));
        $(document).on("click", ".checkout__box__top-line", (function(event) {
            if ($(this).closest(".checkout__box").hasClass("active")) ; else {
                $(this).closest(".box-for-checkout__box").find(".checkout__box.active .checkout__box__box-content").slideUp(360);
                $(this).closest(".box-for-checkout__box").find(".checkout__box.active").removeClass("active");
                $(this).closest(".checkout__box").addClass("active");
                $(this).closest(".checkout__box").find(".checkout__box__box-content").slideDown(360);
                $(this).find(".checkout__box-radio input").prop("checked", true);
            }
        }));
        $(document).on("click", ".promo-code-btn", (function(event) {
            event.preventDefault();
            if ($(this).hasClass("active")) {
                $(".promo-code__form").slideUp(350);
                $(this).removeClass("active");
            } else {
                $(".promo-code__form").slideDown(350);
                $(this).addClass("active");
            }
        }));
        $(document).on("click", ".b-product__link-with-icon", (function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
        }));
        $(document).on("click", ".step__label", (function(e) {
            $(".step__line-for-btn .btn").addClass("active");
            $(".step__line-for-btn").addClass("mod-btn-active");
        }));
        $(document).on("click", ".product-cart__description-nav-link", (function(event) {
            var id = $(this).attr("href");
            if ($(window).width() + getScrollBarWidth() < 736) $("html,body").animate({
                scrollTop: $(id).offset().top - 80
            }, "slow"); else $("html,body").animate({
                scrollTop: $(id).offset().top - 110
            }, "slow");
            event.preventDefault();
        }));
        $(document).on("click", ".product-cart__comments-section-all, .rating-line__link.all-comments", (function(event) {
            event.preventDefault();
            if ($(".box-for-comments").hasClass("active")) {
                $(".comment_hidden").slideUp(350);
                $(".box-for-comments").removeClass("active");
            } else {
                $(".comment_hidden").slideDown(350);
                $(".box-for-comments").addClass("active");
            }
        }));
        function confirm_order() {
            $(".shop-order__confirm").addClass("active");
            $(".shop-order__line-for-btn").addClass("mod-btn-active");
            $(".mobile-confirm-btn").show();
            $('.mobile__btn:not(".mobile-confirm-btn")').hide();
        }
        function cancel_confirm_order() {
            $(".shop-order__confirm").removeClass("active");
            $(".shop-order__line-for-btn").removeClass("mod-btn-active");
            $(".mobile-confirm-btn").hide();
            $('.mobile__btn:not(".mobile-confirm-btn")').show();
        }
        if ($(".tab.checkout").length) if (document.location.hash) {
            var hash = document.location.hash;
            if ("#quick-order" == hash) {
                $(".quick-order__link").click();
                confirm_order();
            }
        }
        $(document).on("click", '.tab.checkout .tab__link:not(".order-step-3 .tab.checkout .tab__link")', (function(e) {
            if ($(this).hasClass("quick-order__link")) confirm_order(); else cancel_confirm_order();
        }));
        if ($(".order-step-3").length) confirm_order();
    }));
    window["FLS"] = false;
    isWebp();
    addLoadedClass();
})();