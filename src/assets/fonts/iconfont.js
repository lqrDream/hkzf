!(function (c) {
  var t,
    e,
    n,
    o,
    i,
    l =
      '<svg><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M1007.072 542.48L512.016 79.152 16.96 541.12c-9.68 9.04-10.224 24.24-1.168 33.92 9.04 9.68 24.24 10.224 33.92 1.168l462.272-431.36L974.272 577.52a23.942 23.942 0 0 0 16.4 6.48c6.4 0 12.8-2.544 17.52-7.6 9.056-9.68 8.56-24.864-1.12-33.92zM856 552c-13.248 0-24 10.752-24 24v368H640V688H384v256H192V576c0-13.248-10.736-24-24-24s-24 10.752-24 24v416h288V736h160v256h288V576c0-13.248-10.752-24-24-24zM688 208h144v128c0 13.264 10.752 24 24 24s24-10.736 24-24V160H688c-13.248 0-24 10.736-24 24s10.752 24 24 24z" fill="" ></path></symbol><symbol id="icon-zixun" viewBox="0 0 1024 1024"><path d="M672.477612 978.149254h-496.716418c-63.044776 0-114.626866-51.58209-114.626866-114.626866v-687.761194c0-63.044776 51.58209-114.626866 114.626866-114.626866h496.716418c63.044776 0 114.626866 51.58209 114.626866 114.626866v687.761194c0 63.044776-51.58209 114.626866-114.626866 114.626866z m-496.716418-840.597015c-21.014925 0-38.208955 17.19403-38.208955 38.208955v687.761194c0 21.014925 17.19403 38.208955 38.208955 38.208955h496.716418c21.014925 0 38.208955-17.19403 38.208955-38.208955v-687.761194c0-21.014925-17.19403-38.208955-38.208955-38.208955h-496.716418z" fill="#040000" ></path><path d="M876.895522 974.328358h-210.149253c-15.283582 0-28.656716-13.373134-28.656717-28.656716s13.373134-28.656716 28.656717-28.656717h210.149253c15.283582 0 28.656716-13.373134 28.656717-28.656716v-687.761194c0-15.283582-3.820896-24.835821-5.731343-28.656716h-24.835821c-15.283582 0-28.656716-13.373134-28.656717-28.656717S859.701493 114.626866 874.985075 114.626866h30.567164c34.38806 0 59.223881 36.298507 59.22388 85.970149v687.761194c-1.910448 45.850746-40.119403 85.970149-87.880597 85.970149zM615.164179 296.119403h-382.089552c-11.462687 0-19.104478-7.641791-19.104478-19.104478s7.641791-19.104478 19.104478-19.104477h382.089552c11.462687 0 19.104478 7.641791 19.104478 19.104477s-9.552239 19.104478-19.104478 19.104478zM615.164179 435.58209h-382.089552c-11.462687 0-19.104478-7.641791-19.104478-19.104478s7.641791-19.104478 19.104478-19.104478h382.089552c11.462687 0 19.104478 7.641791 19.104478 19.104478s-9.552239 19.104478-19.104478 19.104478zM615.164179 573.134328h-382.089552c-11.462687 0-19.104478-7.641791-19.104478-19.104477s7.641791-19.104478 19.104478-19.104478h382.089552c11.462687 0 19.104478 7.641791 19.104478 19.104478s-9.552239 19.104478-19.104478 19.104477zM372.537313 712.597015h-139.462686c-11.462687 0-19.104478-7.641791-19.104478-19.104478s7.641791-19.104478 19.104478-19.104477h139.462686c11.462687 0 19.104478 7.641791 19.104478 19.104477s-9.552239 19.104478-19.104478 19.104478z" fill="#040000" ></path></symbol><symbol id="icon-icon_bangwozhaofang" viewBox="0 0 1024 1024"><path d="M528.256 755.968v76.416h-153.6v-128c0-42.24 34.56-76.8 76.8-76.8 11.392 0 22.272 2.56 32 7.04v-1.92c0-43.904 14.72-84.48 39.68-116.864 5.504-7.168 11.392-13.824 17.92-20.224 1.28-1.28 2.56-2.432 3.84-3.712l0.128-0.128c6.528-6.016 13.44-11.648 20.736-16.768 0.128-0.128 0.256-0.256 0.512-0.256 1.28-0.896 2.56-1.792 3.968-2.688 0.128-0.128 0.384-0.256 0.512-0.384 1.408-0.896 2.688-1.792 4.096-2.56 0.128-0.128 0.256-0.128 0.256-0.256 4.48-2.816 9.216-5.376 13.952-7.808l0.768-0.384c1.28-0.64 2.56-1.28 3.968-1.92 0.384-0.128 0.768-0.384 1.024-0.512 1.28-0.512 2.432-1.152 3.712-1.664 0.384-0.128 0.768-0.384 1.152-0.512 1.28-0.512 2.56-1.152 3.968-1.664 0.256-0.128 0.64-0.256 0.896-0.384 3.328-1.28 6.656-2.56 9.984-3.712 0.256-0.128 0.384-0.128 0.64-0.256 1.408-0.512 2.816-0.896 4.224-1.408 0.512-0.128 0.896-0.256 1.408-0.384 1.152-0.384 2.432-0.64 3.584-1.024 0.512-0.128 1.152-0.256 1.664-0.512 1.152-0.256 2.304-0.64 3.456-0.896 0.512-0.128 1.152-0.256 1.664-0.384 1.28-0.256 2.432-0.512 3.712-0.768l1.536-0.384c1.664-0.384 3.328-0.64 4.992-1.024h0.256c1.792-0.256 3.456-0.64 5.248-0.896 0.512-0.128 1.024-0.128 1.408-0.256 1.28-0.128 2.56-0.384 3.84-0.512 0.64-0.128 1.28-0.128 1.92-0.256l3.456-0.384c0.64 0 1.408-0.128 2.048-0.128 1.152-0.128 2.304-0.128 3.456-0.256 0.64 0 1.28-0.128 2.048-0.128 1.28-0.128 2.432-0.128 3.712-0.128 0.64 0 1.152 0 1.792-0.128 1.792 0 3.584-0.128 5.376-0.128 1.792 0 3.584 0 5.376 0.128 0.64 0 1.28 0 1.792 0.128 1.152 0 2.304 0.128 3.456 0.128 0.768 0 1.408 0.128 2.176 0.128 1.024 0.128 2.048 0.128 3.072 0.256 0.768 0.128 1.536 0.128 2.304 0.256 0.896 0.128 1.92 0.128 2.816 0.256 0.768 0.128 1.664 0.128 2.432 0.256l2.688 0.384c0.896 0.128 1.664 0.256 2.56 0.384 0.896 0.128 1.664 0.256 2.56 0.384 0.896 0.128 1.792 0.256 2.688 0.512l2.304 0.384c0.896 0.128 1.92 0.384 2.816 0.512 0.64 0.128 1.28 0.256 1.792 0.384 3.968 0.896 7.936 1.792 11.776 2.944 0.256 0.128 0.64 0.128 0.896 0.256 1.152 0.384 2.304 0.64 3.456 1.024 0.512 0.128 0.896 0.256 1.408 0.384 1.152 0.384 2.176 0.768 3.328 1.152 0.512 0.128 1.024 0.384 1.536 0.512 1.024 0.384 2.176 0.768 3.2 1.152 0.512 0.128 1.024 0.384 1.536 0.512 1.024 0.384 2.176 0.768 3.2 1.28 0.512 0.256 1.024 0.384 1.408 0.64 1.024 0.384 2.048 0.896 3.2 1.28 29.056 12.544 54.4 32 73.984 56.32 12.672-7.424 16.512-25.984 4.608-37.632L492.8 146.304c-22.912-22.4-59.52-22.4-82.56 0L258.56 294.272v-106.624c0-14.08-11.52-25.6-25.6-25.6h-46.336c-14.08 0-25.6 11.52-25.6 25.6v195.456c0 1.92 0.256 3.84 0.64 5.632l-88.448 86.272c-15.232 14.848-4.736 40.832 16.64 40.832h62.208v318.464c0 34.048 27.904 61.952 61.952 61.952H689.92c34.048 0 61.952-27.904 61.952-61.952v-25.472c-23.424 10.112-49.28 15.744-76.416 15.744-59.136 0.128-112-26.624-147.2-68.608z" fill="#535150" ></path><path d="M931.968 841.472L812.416 721.92c-0.896-0.896-1.664-1.664-2.56-2.304 16.256-24.96 25.6-54.784 25.6-86.912 0-88.32-71.68-160-160-160s-160 71.68-160 160 71.68 160 160 160c33.28 0 64.256-10.24 89.856-27.648 0.64 0.768 1.28 1.408 1.92 2.048l119.552 119.552c12.416 12.416 32.768 12.416 45.312 0 12.416-12.416 12.416-32.768-0.128-45.184zM547.456 632.704c0-70.656 57.344-128 128-128s128 57.344 128 128c0 34.432-13.568 65.664-35.712 88.704l-0.512 0.512c-0.384 0.384-0.768 0.896-1.152 1.28-23.168 23.168-55.168 37.504-90.496 37.504-70.784 0-128.128-57.344-128.128-128z" fill="#535150" ></path></symbol><symbol id="icon-wode-copy" viewBox="0 0 1024 1024"><path d="M799.544 608c-64.488 56.64-148.344 94.416-245.088 94.416S373.856 664.664 302.912 608C141.608 689.84 32 796.856 32 992h1032c0-195.144-109.656-295.872-264.456-384z" fill="#cccccc" ></path><path d="M536 632c160.008 0 288-136.968 288-300S696.008 32 536 32 248 168.968 248 332C248 501.56 382.4 632 536 632z" fill="#cccccc" ></path></symbol></svg>',
    s = (s = document.getElementsByTagName("script"))[
      s.length - 1
    ].getAttribute("data-injectcss"),
    h = function (c, t) {
      t.parentNode.insertBefore(c, t);
    };
  if (s && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (c) {
      console && console.log(c);
    }
  }
  function d() {
    i || ((i = !0), n());
  }
  function a() {
    try {
      o.documentElement.doScroll("left");
    } catch (c) {
      return void setTimeout(a, 50);
    }
    d();
  }
  (t = function () {
    var c, t;
    ((t = document.createElement("div")).innerHTML = l),
      (l = null),
      (c = t.getElementsByTagName("svg")[0]) &&
        (c.setAttribute("aria-hidden", "true"),
        (c.style.position = "absolute"),
        (c.style.width = 0),
        (c.style.height = 0),
        (c.style.overflow = "hidden"),
        (t = c),
        (c = document.body).firstChild ? h(t, c.firstChild) : c.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((e = function () {
            document.removeEventListener("DOMContentLoaded", e, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", e, !1))
      : document.attachEvent &&
        ((n = t),
        (o = c.document),
        (i = !1),
        a(),
        (o.onreadystatechange = function () {
          "complete" == o.readyState && ((o.onreadystatechange = null), d());
        }));
})(window);
