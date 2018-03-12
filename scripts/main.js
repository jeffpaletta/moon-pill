"use strict";

function TextureAnimator(e, t, n, o, r) {
  this.tilesHorizontal = t, this.tilesVertical = n, this.numberOfTiles = o, e.wrapS =
    e.wrapT = THREE.RepeatWrapping, e.repeat.set(1 / this.tilesHorizontal, 1 /
      this.tilesVertical), this.tileDisplayDuration = r, this.currentDisplayTime =
    0, this.currentTile = 0, this.update = function(t) {
      for (this.currentDisplayTime += t; this.currentDisplayTime > this.tileDisplayDuration;) {
        this.currentDisplayTime -= this.tileDisplayDuration, this.currentTile++,
          this.currentTile == this.numberOfTiles && (this.currentTile = 0);
        var n = this.currentTile % this.tilesHorizontal;
        e.offset.x = n / this.tilesHorizontal;
        var o = Math.floor(this.currentTile / this.tilesHorizontal);
        e.offset.y = o / this.tilesVertical
      }
    }
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
      Symbol.prototype ? "symbol" : typeof e
  };
! function(e, t, n) {
  function o(e, t) {
    return ("undefined" == typeof e ? "undefined" : _typeof(e)) === t
  }

  function r() {
    var e, t, n, r, i, a, s;
    for (var l in T)
      if (T.hasOwnProperty(l)) {
        if (e = [], t = T[l], t.name && (e.push(t.name.toLowerCase()), t.options &&
            t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[
            n].toLowerCase());
        for (r = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          a = e[i], s = a.split("."), 1 === s.length ? E[s[0]] = r : (!E[s[0]] ||
            E[s[0]] instanceof Boolean || (E[s[0]] = new Boolean(E[s[0]])), E[s[
              0]][s[1]] = r), g.push((r ? "" : "no-") + s.join("-"))
      }
  }

  function i(e) {
    var t = x.className,
      n = E._config.classPrefix || "";
    if (S && (t = t.baseVal), E._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(o, "$1" + n + "js$2")
    }
    E._config.enableClasses && (t += " " + n + e.join(" " + n), S ? x.className
      .baseVal = t : x.className = t)
  }

  function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) :
      S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) :
      t.createElement.apply(t, arguments)
  }

  function s() {
    var e = t.body;
    return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, n, o, r) {
    var i, l, d, u, p = "modernizr",
      c = a("div"),
      f = s();
    if (parseInt(o, 10))
      for (; o--;) d = a("div"), d.id = r ? r[o] : p + (o + 1), c.appendChild(d);
    return i = a("style"), i.type = "text/css", i.id = "s" + p, (f.fake ? f : c)
      .appendChild(i), f.appendChild(c), i.styleSheet ? i.styleSheet.cssText =
      e : i.appendChild(t.createTextNode(e)), c.id = p, f.fake && (f.style.background =
        "", f.style.overflow = "hidden", u = x.style.overflow, x.style.overflow =
        "hidden", x.appendChild(f)), l = n(c, e), f.fake ? (f.parentNode.removeChild(
        f), x.style.overflow = u, x.offsetHeight) : c.parentNode.removeChild(c), !
      !l
  }

  function d(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function p(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }

  function c(e, t, n) {
    var r;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (r = t[e[i]], o(r, "function") ?
        p(r, n || t) : r);
    return !1
  }

  function f(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function h(t, o) {
    var r = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; r--;)
        if (e.CSS.supports(f(t[r]), o)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; r--;) i.push("(" + f(t[r]) + ":" + o + ")");
      return i = i.join(" or "), l("@supports (" + i +
        ") { #modernizr { position: absolute; } }",
        function(e) {
          return "absolute" == getComputedStyle(e, null).position
        })
    }
    return n
  }

  function m(e, t, r, i) {
    function s() {
      p && (delete _.style, delete _.modElem)
    }
    if (i = !o(i, "undefined") && i, !o(r, "undefined")) {
      var l = h(e, r);
      if (!o(l, "undefined")) return l
    }
    for (var p, c, f, m, w, y = ["modernizr", "tspan", "samp"]; !_.style && y.length;)
      p = !0, _.modElem = a(y.shift()), _.style = _.modElem.style;
    for (f = e.length, c = 0; f > c; c++)
      if (m = e[c], w = _.style[m], d(m, "-") && (m = u(m)), _.style[m] !== n) {
        if (i || o(r, "undefined")) return s(), "pfx" != t || m;
        try {
          _.style[m] = r
        } catch (g) {}
        if (_.style[m] != w) return s(), "pfx" != t || m
      }
    return s(), !1
  }

  function w(e, t, n, r, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + P.join(a + " ") + a).split(" ");
    return o(t, "string") || o(t, "undefined") ? m(s, t, r, i) : (s = (e + " " +
      z.join(a + " ") + a).split(" "), c(s, t, n))
  }

  function y(e, t, o) {
    return w(e, n, n, t, o)
  }
  var g = [],
    T = [],
    v = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e])
        }, 0)
      },
      addTest: function(e, t, n) {
        T.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function(e) {
        T.push({
          name: null,
          fn: e
        })
      }
    },
    E = function() {};
  E.prototype = v, E = new E;
  var x = t.documentElement,
    S = "svg" === x.nodeName.toLowerCase();
  E.addTest("canvas", function() {
    var e = a("canvas");
    return !(!e.getContext || !e.getContext("2d"))
  }), E.addTest("webgl", function() {
    var t = a("canvas"),
      n = "probablySupportsContext" in t ? "probablySupportsContext" :
      "supportsContext";
    return n in t ? t[n]("webgl") || t[n]("experimental-webgl") :
      "WebGLRenderingContext" in e
  }), E.addTest("inlinesvg", function() {
    var e = a("div");
    return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (
      "undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI
    )
  }), E.addAsyncTest(function() {
    if (E.webglextensions = new Boolean((!1)), E.webgl) {
      var e, t, o;
      try {
        e = a("canvas"), t = e.getContext("webgl") || e.getContext(
          "experimental-webgl"), o = t.getSupportedExtensions()
      } catch (r) {
        return
      }
      t !== n && (E.webglextensions = new Boolean((!0)));
      for (var i = -1, s = o.length; ++i < s;) E.webglextensions[o[i]] = !0;
      e = n
    }
  });
  var b = v._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["",
    ""
  ];
  v._prefixes = b, E.addTest("csscalc", function() {
    var e = "width:",
      t = "calc(10px);",
      n = a("a");
    return n.style.cssText = e + b.join(t + e), !!n.style.length
  });
  var M = "CSS" in e && "supports" in e.CSS,
    C = "supportsCSS" in e;
  E.addTest("supports", M || C);
  var H = v.testStyles = l;
  H("#modernizr { width: 50vw; }", function(t) {
    var n = parseInt(e.innerWidth / 2, 10),
      o = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
        .width, 10);
    E.addTest("cssvwunit", o == n)
  });
  var R = "Moz O ms Webkit",
    P = v._config.usePrefixes ? R.split(" ") : [];
  v._cssomPrefixes = P;
  var z = v._config.usePrefixes ? R.toLowerCase().split(" ") : [];
  v._domPrefixes = z;
  var A = {
    elem: a("modernizr")
  };
  E._q.push(function() {
    delete A.elem
  });
  var _ = {
    style: A.elem.style
  };
  E._q.unshift(function() {
    delete _.style
  }), v.testAllProps = w, v.testAllProps = y, E.addTest("csstransforms3d",
    function() {
      var e = !!y("perspective", "1px", !0),
        t = E._config.usePrefixes;
      if (e && (!t || "webkitPerspective" in x.style)) {
        var n, o = "#modernizr{width:0;height:0}";
        E.supports ? n = "@supports (perspective: 1px)" : (n =
            "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")),
          n +=
          "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",
          H(o + n, function(t) {
            e = 7 === t.offsetWidth && 18 === t.offsetHeight
          })
      }
      return e
    }), E.addTest("webaudio", function() {
    var t = "webkitAudioContext" in e,
      n = "AudioContext" in e;
    return E._config.usePrefixes ? t || n : n
  }), r(), i(g), delete v.addTest, delete v.addAsyncTest;
  for (var L = 0; L < E._q.length; L++) E._q[L]();
  e.Modernizr = E
}(window, document),
function(e) {
  function t() {
    p = Draggable.create(".dragger", {
      type: "scrollLeft",
      edgeResistance: .1,
      throwProps: !0
    })[0], c = e(".dragger"), f = 0, h = e(".dragger__inner").width(), p.addEventListener(
      "dragstart",
      function() {
        S.renderToScreen = !0, x.renderToScreen = !1, k.opacity = 1, u.show(),
          e.each(U, function(e, t) {
            t > F[e].length - 1 && (U[e] = 0)
          }), l.position.x = F[0][U[0]].x, l.position.y = F[0][U[0]].y, d.position
          .x = F[1][U[1]].x, d.position.y = F[1][U[1]].y, TweenLite.set(u, {
            x: F[2][U[2]].x + "%",
            y: F[2][U[2]].y + "%"
          }), U[0]++, U[1]++, U[2]++, q()
      }), p.addEventListener("dragend", function() {
      Z || (S.renderToScreen = !1, x.renderToScreen = !0, k.opacity = 0, u.hide(),
        B())
    }), s = new TimelineMax({
      paused: !0
    }), s.fromTo(e(".author"), .001, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, 2).fromTo(e(".title"), .001, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, 4).to(e(".title"), 3, {
      scrambleText: {
        text: "The Church of Moonman",
        chars: "$!#@*&%",
        revealDelay: .5,
        speed: .3
      }
    }, 4.001).fromTo("#line", 1.5, {
      drawSVG: "0%"
    }, {
      drawSVG: "100%",
      ease: Power4.easeInOut
    }, 7).fromTo(e(".subtitle div"), .001, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, 10).fromTo(e(".button"), .001, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, 12).fromTo(e(".site-footer, .credits"), 1, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, 14), a = new TimelineMax({
      paused: !0,
      repeat: -1
    }), a.to(e("#instructions div"), .001, {
      transformOrigin: "right"
    }).fromTo(e("#instructions div"), .5, {
      scaleX: 0
    }, {
      scaleX: 1,
      ease: Power2.easeIn
    }, .5).to(e("#instructions div"), .001, {
      transformOrigin: "left"
    }, 1).to(e("#instructions div"), .5, {
      scaleX: 0,
      ease: Power2.easeOut
    }, 1.001)
  }

  function n() {
    w = e("#three-container")[0], g = new THREE.Scene, y = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight, 1, 1e4), y.position.z = 50,
      y.lookAt(g.position);
    var t = new THREE.SpotLight(15921906, 1, 1e3, 1, 1, 2);
    t.position.set(0, 75, 100), g.add(t);
    try {
      T = new THREE.WebGLRenderer({
        antialias: !1,
        alpha: !0,
        shadowMapEnabled: !1,
        gammaInput: !0,
        gammaOutput: !0,
        autoClear: !1
      })
    } catch (n) {
      T = new THREE.CanvasRenderer({
        antialias: !1,
        alpha: !0,
        shadowMapEnabled: !1,
        gammaInput: !0,
        gammaOutput: !0,
        autoClear: !1
      }), $ = !1
    }
    T.setPixelRatio(window.devicePixelRatio), T.setSize(window.innerWidth,
        window.innerHeight), w.appendChild(T.domElement), z = $ ? new THREE.MeshNormalMaterial({
        shading: THREE.SmoothShading,
        fog: !1,
        bumpMap: P,
        bumpScale: .3,
        normalScale: new THREE.Vector2(.25, .25)
      }) : new THREE.MeshNormalMaterial, H = new THREE.Mesh(R, z), H.geometry.computeVertexNormals(),
      g.add(H);
    var r = $ ? 7.3 : 7.5,
      i = new THREE.SphereBufferGeometry(r, 32, 32);
    C = new THREE.MeshPhongMaterial({
      transparent: !0,
      color: 16777215,
      specular: 16777215,
      opacity: 0,
      shininess: 0,
      fog: !1,
      shading: THREE.SmoothShading,
      map: M,
      bumpMap: M,
      bumpScale: .1,
      normalScale: new THREE.Vector2(.25, .25)
    }), b = new THREE.Mesh(i, C), g.add(b), A = new Noise, A.seed(Math.random());
    var a = 7037945;
    I = new THREE.MeshPhongMaterial({
        wireframe: !0,
        color: 7037945,
        emissive: a,
        transparent: !0,
        opacity: 0,
        shading: THREE.FlatShading
          // tweaked
          // }), L = new THREE.PlaneGeometry(40, 200, 40, 200), L.vertices.map(
      }), L = new THREE.PlaneGeometry(0, 0, 0, 0), L.vertices.map(
        function(e, t) {
          return e.x += -.1 + A.perlin2(e.x, e.y) / 2, e.y += A.perlin2(e.x, e.y) /
            2, e
        }), L.computeFaceNormals(), _ = new THREE.Mesh(L, I), _.rotation.x =
      Math.PI / 4, _.position.y = 10, g.add(_), N = new TextureAnimator(j, 4, 1,
        4, 80), k = new THREE.MeshLambertMaterial({
        map: j,
        fog: !1,
        transparent: !0,
        opacity: 0,
        side: THREE.DoubleSide
      });
    var s = new THREE.PlaneGeometry(10, 10, 2, 2);
    l = new THREE.Mesh(s, k), d = new THREE.Mesh(s, k), l.position.z = -10, d.position
      .z = -10, d.scale.x = 1.5, d.scale.y = 1.5, g.add(l), g.add(d), $ && (v =
        new THREE.RenderPass(g, y), S = new THREE.GlitchPass, S.renderToScreen = !
        1, S.goWild = !0, S.uniforms.distortion_x.value = 0, S.uniforms.distortion_y
        .value = 0, x = new THREE.ShaderPass(THREE.CopyShader), x.renderToScreen = !
        0, E = new THREE.EffectComposer(T), E.addPass(v), E.addPass(x), E.addPass(
          S)), e(window).on("resize", o)
  }

  function o() {
    X = window.innerWidth / 2, Q = window.innerHeight / 2, y.aspect = window.innerWidth /
      window.innerHeight, y.updateProjectionMatrix(), T.setSize(window.innerWidth,
        window.innerHeight)
  }

  function r() {
    "undefined" != typeof H && (f = c.scrollLeft(), Z || (f / h < .7 ? (H.rotation
        .y = Math.PI / 2 + Math.PI / 500 * f * -1, b.rotation.y = Math.PI /
        2 + Math.PI / 500 * f * -1, f / h > .025 && TweenLite.to(e(
          "#instructions"), .25, {
          autoAlpha: 0,
          ease: Power0.easeNone,
          onComplete: function() {
            a.stop()
          }
        })) : e("body").trigger("timeToTransform", [b.rotation.y]))), Z ? (Y +=
        .004, L.vertices.map(function(e, t) {
          return e.z = 2 * A.perlin3(e.x / 3, e.y / 3, Y), e
        }), L.computeFaceNormals(), L.verticesNeedUpdate = !0) : (m = J.getDelta(),
        N.update(1e3 * m)), K && ($ && (0 === S.uniforms.byp.value ? (C.opacity =
        Math.random(), ee || (_.position.z = 0, _.position.y = 10, ee = !0),
        te || (q(), te = !0)) : (ee = !1, C.opacity = 1, te && (B(), te = !
        1))), H.rotation.y -= Math.PI / 1e3, b.rotation.y -= Math.PI / 1e3), Z ?
      (_.position.y += .05, _.position.z += .05) : TweenLite.set("#frameInner", {
        // tweaked
        // drawSVG: f / h / .7 * 100 + "%"
        drawSVG: f / h / .7 * 0 + "%"
      }), requestAnimationFrame(r), i()
  }

  function i() {
    $ ? E.render(.1) : T.render(g, y)
  }
  var a, s, l, d, u, p, c, f, h, m, w, y, g, T, v, E, x, S, b, M, C, H, R, P, z,
    A, _, L, I, N, k, j, D, O, W, V, G, q, B, F = [
      [{
        x: 0,
        y: 15
      }, {
        x: -25,
        y: -10
      }],
      [{
        x: -15,
        y: -20
      }, {
        x: 20,
        y: -10
      }, {
        x: 30,
        y: 15
      }],
      [{
        x: 200,
        y: -100
      }, {
        x: -50,
        y: 150
      }, {
        x: 60,
        y: -30
      }, {
        x: -200,
        y: -50
      }]
    ],
    U = [0, 0, 0],
    $ = !0,
    J = new THREE.Clock,
    X = window.innerWidth / 2,
    Q = window.innerHeight / 2,
    Z = !1,
    K = !1,
    Y = 0,
    ee = !1,
    te = !1,
    ne = function() {
      function o(t) {
        var n = t.total;
        i.hasOwnProperty(n) || (i[n] = 0), i[n] = t.loaded / t.total, a = 0, e.each(
          i,
          function(e, t) {
            a += t / s
          });
        var o = Math.ceil(parseInt(100 * a));
        99 === o && (o = 100), t.lengthComputable && e("#cover .loaded").text(o)
      }
      THREE.Cache.enabled = !0;
      var i = {},
        a = 0,
        s = "undefined" != typeof Tone ? 7 : 6,
        l = new THREE.LoadingManager;
      l.onLoad = function() {
        t(), n(), oe(), r()
      }, l.onProgress = function(e, t, n) {}, l.onError = function(e) {
        console.log("There was an error loading " + e)
      };
      var d = new THREE.FileLoader;
      d.load("/packaged/TweenMax.pkg.min.js", function(t) {
        e("body").append('<script type="text/javascript">' + t +
          "</script>")
      }, o);
      var p = new THREE.TextureLoader(l);
      M = p.load("../images/moon_8k_color_brim16.jpg", h, o), P = p.load(
        "../images/pill_dsp.jpg", h, o), j = p.load("../images/art2.jpg", h,
        o);
      var c = new THREE.JSONLoader(l);
      c.load("../models/pill.js", function(e, t) {
        R = e
      }, o);
      var f = new THREE.ImageLoader(l),
        h = (f.load("../images/art2.gif", function() {
          e("body").append('<img id="artwork" src="images/art2.gif" />'), u =
            e("img#artwork")
        }, o), function() {});
      if ("undefined" != typeof Tone) {
        var m = new THREE.AudioLoader;
        m.load("../audio/space2.mp3", function(e) {
          D = new Tone.Player({
              url: "../audio/space2.mp3",
              loop: !0,
              autostart: !0
            }).toMaster(), O = new Tone.PitchShift((-5)).toMaster(), W =
            new Tone.BitCrusher(4).toMaster(), V = new Tone.Distortion(1).toMaster(),
            G = new Tone.Noise({
              volume: -5,
              type: "brown"
            }).toMaster(), q = function() {
              "undefined" != typeof Tone && (D.chain(W, O, Tone.Master), G.start())
            }, B = function() {
              "undefined" != typeof Tone && (D.disconnect(), G.stop(), D.chain(
                Tone.Master))
            }
        }, o)
      }
    },
    oe = function() {
      var t = new TimelineMax;
      t.to(e("#cover"), 1, {
        autoAlpha: 0,
        ease: Power0.easeNone
      }, 1).to(e("#cover .loaded"), 1.5, {
        rotation: "10deg",
        scale: 2,
        ease: Expo.easeIn
      }, .5).fromTo(e("canvas, #instructions"), 1, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Power0.easeNone,
        onComplete: function() {
          a.play()
        }
      }, 2.5)
    };
  Modernizr.canvas && Modernizr.webgl && Modernizr.csscalc && Modernizr.csstransforms3d &&
    Modernizr.cssvwunit && Modernizr.inlinesvg && Modernizr.webaudio ? ne() : (
      e("#unsupported").show(), e("#cover").hide()), e("body").one(
      "timeToTransform",
      function(t, n) {
        Z = !0, q(), g.remove(l), g.remove(d), u.remove(), S.renderToScreen = !
          0, x.renderToScreen = !1, TweenLite.set("#frameInner", {
            // tweaked
            // drawSVG: "100%"
            drawSVG: "0%"
          }), p.disable(), e(".dragger").remove();
        var o = new TimelineMax({
          onComplete: function() {
            K = !0, S.little = !1, e(".content").show(), s.play()
          }
        });
        o.fromTo(b.rotation, 5, {
          y: n
        }, {
          y: -200
        }, 0).fromTo(H.rotation, 5, {
          y: n
        }, {
          y: -200
        }, 0).call(function() {
          S.goWild = !1, B()
        }, null, null, 3.5).fromTo(C, 5, {
          opacity: 0
        }, {
          opacity: 1
        }, 0).fromTo(I, 5, {
          opacity: 0
        }, {
          opacity: 1,
          ease: Power4.easeIn
        }, 0)
      })
}(jQuery);
