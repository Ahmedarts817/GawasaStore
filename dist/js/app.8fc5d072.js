(function () {
  "use strict";
  var t = {
      1313: function (t, e, a) {
        var o = a(9242),
          r = a(3396);
        function s(t, e, a, o, s, n) {
          const i = (0, r.up)("NavBar"),
            l = (0, r.up)("router-view"),
            c = (0, r.up)("FooterView");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(
                  i,
                  { userName: s.userName, userRole: s.userRole },
                  null,
                  8,
                  ["userName", "userRole"]
                ),
                (0, r.Wm)(l, { onGetMyInfo: n.getMyinfo }, null, 8, [
                  "onGetMyInfo",
                ]),
                (0, r.Wm)(c),
              ],
              64
            )
          );
        }
        var n = a(7139),
          i = a.p + "img/logo5.47e01417.png",
          l =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABICAMAAACwatxBAAAAgVBMVEUAAAAl02Yk02Qgz2Ql02Uk0mYk0mUk02Yl0mUl1GQj0mUl02b///9A2Xlb3ozk+uzJ9Nky1nCu7sWS6bJ345/x/PWE5qit78VN24J35J+f7Lxp4ZbW9+N25J+R6bKf67y68c/y/fVO3IOg7Ly78c+F56lo4ZbV9+Og7L278s9o4Ja9Q7aVAAAAC3RSTlMA3yAQ76CQ0GAwYADNBKEAAAbiSURBVHja7ZzZetowEIVpCElbbZaMjRfMFqBp3/8Ba81IlrERASvtRT6di+B1JP+aGY1N8Mxp/n3x+kyiPtDz6+LnfDbW00uEd78WTwN88xcS9ZBeLt3vG4l6UN96Tvgj8ptC8Ef0v8/xwXnkN5UgzsZx/gibSZ5I1GTpIF6QqBAXnJOo6Xqez76TqAD9jBEcpsXslUQF6HUWHyEE6XlGooIUAf4ngLJoWp0LEjUBoNwk1CpZMhL1EECO9JxURPgAQFlZbkIIu7ghUXcCLADaPikZrpZHhBmd8D6Ay0zjSyVxYitNMIvTyT0AlzBtDL2NJZHgfQCZ9r+UjJVqgjGKPwLIdP5bkrGQoJAk6iZA5fE/LU1wS6JuAWQtoxUsbNWZDKXzYAzimwCVqVakoDQbhCvmR0W8Yk2a5tyuMPZ54S5bawOzTG+SkxqRoX3zA2QQwAhynAoxiH1N25sXgafB+T4BjweUW2uc2iEUlCZkpf/45MWkqPe0UIBvNkYzerUR2W7NvddotXUA/ePEiUe+EyrbitALBz3UtwEmvnAR1Nd+MMC1zYBIQo475ekxVo97dYTO5SEAfde8xvZbMdMenwawptQ/U4YARAerewDra36WXUUirI+cqM6enw3wzQwntalF6Y5MA6jASEY8CgHIcXhtCP++funM44CVy5NLBCjzXbI1pGSukkTlTM81GnLV9BHy7S5RCJw1TUPYpj2z11CJyDnVUhgrOwOQq2S3NI00rZ0dNFk363Zn00jT9BYPMYUGmoPDGiZ1Y7xrm2+TJGWTAJbdwLz5imbwy7HWDqxUStVwYCrcY5wNNcoNhb7vMDv/FGYU/2Sdq7nYqGBw2pYEUigRIFjGzhbCZWG7yLrsLFg31iyzzQvXTdM22svOUwDmunOgAgNxLHE1MuV4ytEG7DVgr5NqpbsqD0J/CLHr+OG6udnmeoUOw0y7E0RlqU1AHisAoFWKdvZVJWAt0R97IRjrmk6cpTe8PMN5bzM3R9KwWkwAqAeYoN71ON4N8EBH+cbk0BR6ZmcnrjeOcqDCVQbXiAA5kcf+RcAVg1HtrUu9KggCrCTUp2ucohnmH+VyYIoDwYy5A/gut+WEMOzXQJRrmpyQWntokAcSqS2f7wXIx9MaRWQyg9gry/Jger8cAcRD0AqHv6VZW160ULR/hGZXwYAgwMzh5WUJ6SUZAERWnHOpRwt9DwfLfR667FK6gndiDkRxjChQz9T1+ZONPdANsdkji2YrhgAdN3uOW3UAzUDkbxqbpojlAuZAe722kTyhfYAYllmS8s4DVuaMwuRAu13hMNkLqh8HeOjPsSdqGVRUsd4RxQc5UCmV4+U7gHKDac0HkHUZHVcHABHHTqdArLX0MUOA7mbIAYSdwt0iYTJWSukjUxdRaJ9wsGMbn14HunpEo9vAp5vCPDUXlb27hiHABDL5qbwNMPMCxFSm94AtyHkjgEuo5VPeD2EtWVdtyGObR+qUXQUokcQkgK5NR5D+MuNHtI6e5KoP3bkpoR4AtDmbjQG6cMEFH0De9eINlqoxwJbSbznKgSh2Ar9kFp4FKtASLrj0AQsTAKaYYS+i2FVttvwaC+ccqHw3cJkDgKWBwh3Aelii4KnMBxBr+12Hko8AurTrAKL11LSiwElrpsXRmsDH7LiD4EYz1QQ8jRlVuMjNPWwYiyPlXxkeO/RALFS5cADFNu/fZih+rsCvvACP1rKkWmQMULThwoisXA6kaiu1U/whZoIVrs5IwFkEJEe+yWAHp9gVpWuICQCt1Z74irqIYTfs1lmvph0ABAdF4VYBtPuOj1pLP8DcVreYUEcAnZk9bsVV5toWYHvVs5cDUYo6XBTxQk4CiBW+E6ZgVfHOCZjXew3qhJMRQMIE8OEm5RRrZGBVCmq+SvUDZIDAxkF+BSB5RyvmiYdcAUDbsf1KQn4u+pUDTPwp9s1WmyvzteQkgPxW7G/AE/2SupL1DVzBObvgzeRgd0GCJVsr8kojHLePBQDhtF5BwHTJ7fQQwLxl7+X3Fb+VA4DDiuq2/AAxSKsb/PZf7iulzwa49j2yx/m4Jl9Nnw0QCyx53l7+S6DcZPic4suphqccVrIsy4+TlB8gPpNQOJFn6owMWXOEEkUcSNQHAGt6qUwIYeu76qvNH/8AoCtFk+MAZfIFw/cfANTYhDrpooidEkcvjd53H8D3ql8IS16f0lNZRHoXir8TCVb8qVeYnuOPDcP0Gn/uGqZF/MF1mH7O5jEJhmge33oSpEV87UmYnuKLd4L0El/9FKRv8/jysSB+T/H1d0H8fsQXMIb5X3wFaIhe5sOX0MZ7uvv1/NK5X3wN8sPwXhffe973FxegBQgc7ie2AAAAAElFTkSuQmCC";
        const c = (t) => (
            (0, r.dD)("data-v-7dfe9bf5"), (t = t()), (0, r.Cn)(), t
          ),
          d = { class: "navbar navbar-expand-lg" },
          u = { class: "container" },
          m = c(() =>
            (0, r._)(
              "a",
              { class: "brand fw-bold position-relative" },
              [(0, r._)("img", { src: i, width: "100", alt: "" })],
              -1
            )
          ),
          p = c(() =>
            (0, r._)(
              "button",
              {
                class: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
              [(0, r._)("span", { class: "navbar-toggler-icon" })],
              -1
            )
          ),
          h = {
            class: "collapse navbar-collapse",
            id: "navbarSupportedContent",
          },
          g = { class: "navbar-nav me-auto mb-2 mb-lg-0 fw-bold" },
          f = ["hidden"],
          _ = { class: "nav-link login", href: "" },
          w = { class: "nav-item" },
          y = { class: "nav-item" },
          b = { class: "nav-link wishlist", href: "" },
          v = { class: "nav-item" },
          D = { class: "nav-link cart", href: "" },
          C = { class: "nav-item" },
          k = c(() =>
            (0, r._)("a", { class: "nav-link", href: "" }, "Admin", -1)
          ),
          U = { class: "nav-item" },
          A = { class: "nav-link", href: "" },
          $ = c(() =>
            (0, r._)(
              "a",
              {
                "aria-label": "Chat on WhatsApp",
                href: "https://wa.me/+201092615290",
              },
              [(0, r._)("img", { alt: "Chat on WhatsApp", src: l })],
              -1
            )
          );
        function x(t, e, a, s, i, l) {
          const c = (0, r.up)("router-link"),
            x = (0, r.up)("font-awesome-icon");
          return (
            (0, r.wg)(),
            (0, r.iD)("nav", d, [
              (0, r._)("div", u, [
                (0, r.Wm)(
                  c,
                  { to: "/" },
                  { default: (0, r.w5)(() => [m]), _: 1 }
                ),
                p,
                (0, r._)("div", h, [
                  (0, r._)("ul", g, [
                    (0, r._)(
                      "li",
                      { class: "nav-item", hidden: a.userName },
                      [
                        (0, r.Wm)(
                          c,
                          { to: "/signin" },
                          {
                            default: (0, r.w5)(() => [
                              (0, r._)("a", _, [
                                (0, r.Wm)(x, { icon: "fa-solid fa-user" }),
                                (0, r.Uk)(" تسجيل الدخول "),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ],
                      8,
                      f
                    ),
                    (0, r.wy)(
                      (0, r._)(
                        "li",
                        w,
                        [
                          (0, r._)(
                            "a",
                            {
                              onClick:
                                e[0] ||
                                (e[0] = (...t) => l.logOut && l.logOut(...t)),
                              class: "nav-link",
                              href: " ",
                            },
                            " تسجيل الخروج "
                          ),
                        ],
                        512
                      ),
                      [[o.F8, a.userName]]
                    ),
                    (0, r._)("li", y, [
                      (0, r._)("a", b, [
                        (0, r.Wm)(x, { icon: "fa-solid fa-heart" }),
                        (0, r.Uk)(" الرغبات "),
                      ]),
                    ]),
                    (0, r._)("li", v, [
                      (0, r._)("a", D, [
                        (0, r.Wm)(x, { icon: "fa-solid fa-cart-shopping" }),
                        (0, r.Uk)(" عربة التسوق"),
                      ]),
                    ]),
                    (0, r.wy)(
                      (0, r._)(
                        "li",
                        C,
                        [
                          (0, r.Wm)(
                            c,
                            { to: "/admin" },
                            { default: (0, r.w5)(() => [k]), _: 1 }
                          ),
                        ],
                        512
                      ),
                      [[o.F8, "admin" === a.userRole]]
                    ),
                    (0, r.wy)(
                      (0, r._)(
                        "li",
                        U,
                        [(0, r._)("p", A, "Hi " + (0, n.zw)(a.userName), 1)],
                        512
                      ),
                      [[o.F8, a.userName]]
                    ),
                  ]),
                  $,
                ]),
              ]),
            ])
          );
        }
        a(7658);
        var I = {
            name: "NavBar",
            props: ["userName", "userRole"],
            methods: {
              logOut() {
                localStorage.removeItem("token"), this.$router.push("/");
              },
            },
          },
          Z = a(89);
        const S = (0, Z.Z)(I, [
          ["render", x],
          ["__scopeId", "data-v-7dfe9bf5"],
        ]);
        var B = S,
          z = a.p + "img/Huawei-icon.50477407.png",
          V = a.p + "img/google-play.eb4be62b.svg",
          P = a.p + "img/app-store.9ffa8e51.svg";
        const W = (t) => (
            (0, r.dD)("data-v-abac282e"), (t = t()), (0, r.Cn)(), t
          ),
          E = { class: "footer py-5" },
          F = { class: "container" },
          N = { class: "row mb-4" },
          R = { class: "col-lg-6 col-xl-4" },
          O = { class: "brand text-center" },
          H = { class: "whatsapp" },
          M = W(() =>
            (0, r._)(
              "div",
              { class: "stores d-flex justify-content-center mt-3" },
              [
                (0, r._)("img", { src: z, alt: "" }),
                (0, r._)("img", { src: V, alt: "" }),
                (0, r._)("img", { src: P, alt: "" }),
              ],
              -1
            )
          ),
          Y = { class: "col-lg-6 col-xl-4" },
          q = W(() =>
            (0, r._)(
              "h3",
              { class: "brand text-center my-3" },
              "احمد عبدالمقصود لخدمات المحمول",
              -1
            )
          ),
          T = { class: "social d-flex justify-content-center gap-2 fs-3" },
          L = {
            href: "https://www.facebook.com/profile.php?id=61551772168568",
          },
          Q = { class: "text-primary" },
          j = { class: "text-danger" },
          K = { class: "text-info" };
        function X(t, e, a, o, s, n) {
          const i = (0, r.up)("font-awesome-icon");
          return (
            (0, r.wg)(),
            (0, r.iD)("nav", E, [
              (0, r._)("div", F, [
                (0, r._)("div", N, [
                  (0, r._)("div", R, [
                    (0, r._)("h3", O, [
                      (0, r._)("i", H, [
                        (0, r.Wm)(i, { icon: "fa-brands fa-whatsapp" }),
                      ]),
                      (0, r.Uk)(" 01092615290 "),
                    ]),
                    M,
                  ]),
                  (0, r._)("div", Y, [
                    q,
                    (0, r._)("ul", T, [
                      (0, r._)("a", L, [
                        (0, r._)("i", Q, [
                          (0, r.Wm)(i, { icon: "fa-brands fa-facebook " }),
                        ]),
                      ]),
                      (0, r._)("i", j, [
                        (0, r.Wm)(i, { icon: "fa-brands fa-youtube" }),
                      ]),
                      (0, r._)("i", K, [
                        (0, r.Wm)(i, { icon: "fa-brands fa-twitter" }),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var G = { name: "FooterView" };
        const J = (0, Z.Z)(G, [
          ["render", X],
          ["__scopeId", "data-v-abac282e"],
        ]);
        var tt = J,
          et = a(4161),
          at = {
            name: "App",
            components: { NavBar: B, FooterView: tt },
            data() {
              return {
                baseURL: "https://gawasastore.onrender.com/api/v1/",
                userName: null,
                userRole: null,
              };
            },
            methods: {
              async getMyinfo() {
                await (0, et.Z)({
                  method: "get",
                  url: `${this.baseURL}users/getMe`,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then((t) => {
                    (this.userName = t.data.data.name.toUpperCase()),
                      (this.userRole = t.data.data.role);
                  })
                  .catch((t) => console.log(t));
              },
            },
            mounted() {
              this.getMyinfo();
            },
          };
        const ot = (0, Z.Z)(at, [["render", s]]);
        var rt = ot,
          st = a(2483);
        const nt = (t) => (
            (0, r.dD)("data-v-3fa22753"), (t = t()), (0, r.Cn)(), t
          ),
          it = { class: "home" },
          lt = { class: "top-products py-5 container" },
          ct = nt(() =>
            (0, r._)("h2", { class: "text-center my-4" }, "أفضل المنتجات", -1)
          ),
          dt = { class: "row" };
        function ut(t, e, a, o, s, n) {
          const i = (0, r.up)("ProductBox");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", it, [
              (0, r._)("div", lt, [
                ct,
                (0, r._)("div", dt, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      t.products,
                      (t) => (
                        (0, r.wg)(),
                        (0, r.iD)(
                          "div",
                          {
                            key: t.id,
                            class: "col-md-6 col-lg-4 col-xl-3 p-2 mb-5",
                          },
                          [(0, r.Wm)(i, { product: t }, null, 8, ["product"])]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }
        const mt = { class: "text-center" },
          pt = ["src"],
          ht = { class: "card-body text-center mt-3 cursor-pointer" },
          gt = { class: "stars" },
          ft = { class: "text-dark" },
          _t = { class: "text-warning" },
          wt = { class: "text-warning" },
          yt = { class: "text-warning" },
          bt = { class: "text-warning" },
          vt = (0, r._)(
            "a",
            { class: "m-4 btn btn-primary", href: "" },
            "Edit",
            -1
          );
        function Dt(t, e, a, s, i, l) {
          const c = (0, r.up)("font-awesome-icon"),
            d = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              d,
              { to: { name: "productDetails", params: { id: a.product._id } } },
              {
                default: (0, r.w5)(() => [
                  (0, r._)("div", mt, [
                    (0, r._)(
                      "img",
                      {
                        src: a.product.imageCover,
                        alt: "",
                        class: "card-img-top",
                      },
                      null,
                      8,
                      pt
                    ),
                  ]),
                  (0, r._)("div", ht, [
                    (0, r._)("p", null, "ج.م " + (0, n.zw)(a.product.price), 1),
                    (0, r._)("h5", null, (0, n.zw)(a.product.title), 1),
                    (0, r._)("div", gt, [
                      (0, r._)("i", ft, [
                        (0, r.Wm)(c, { icon: "fa-solid fa-star" }),
                      ]),
                      (0, r._)("i", _t, [
                        (0, r.Wm)(c, { icon: "fa-solid fa-star" }),
                      ]),
                      (0, r._)("i", wt, [
                        (0, r.Wm)(c, { icon: "fa-solid fa-star" }),
                      ]),
                      (0, r._)("i", yt, [
                        (0, r.Wm)(c, { icon: "fa-solid fa-star" }),
                      ]),
                      (0, r._)("i", bt, [
                        (0, r.Wm)(c, { icon: "fa-solid fa-star" }),
                      ]),
                    ]),
                    (0, r.wy)(
                      (0, r.Wm)(
                        d,
                        {
                          to: {
                            name: "editProduct",
                            params: { id: this.product._id },
                          },
                        },
                        { default: (0, r.w5)(() => [vt]), _: 1 },
                        8,
                        ["to"]
                      ),
                      [[o.F8, "adminproducts" === t.$route.name]]
                    ),
                    (0, r.wy)(
                      (0, r._)(
                        "button",
                        {
                          onClick:
                            e[0] ||
                            (e[0] = (...t) =>
                              l.deleteProduct && l.deleteProduct(...t)),
                          class: "m-4 btn btn-primary",
                          href: "",
                        },
                        " Delete ",
                        512
                      ),
                      [[o.F8, "adminproducts" === t.$route.name]]
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["to"]
            )
          );
        }
        var Ct = {
          name: "ProductBox",
          props: ["product"],
          data() {
            return { baseUrl: "http://localhost:8000/api/v1/" };
          },
          methods: {
            async deleteProduct() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}products/${this.product._id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    window.location.reload(), console.log("done");
                  }, 1)
                )
                .catch((t) => console.log(t));
            },
          },
        };
        const kt = (0, Z.Z)(Ct, [["render", Dt]]);
        var Ut = kt,
          At = a(6615),
          $t = a(1577),
          xt = {
            name: "HomeView",
            components: { ProductBox: Ut },
            mixins: [At.Z, $t.Z],
          };
        const It = (0, Z.Z)(xt, [
          ["render", ut],
          ["__scopeId", "data-v-3fa22753"],
        ]);
        var Zt = It;
        const St = (t) => (
            (0, r.dD)("data-v-8a400136"), (t = t()), (0, r.Cn)(), t
          ),
          Bt = { class: "container py-5" },
          zt = St(() =>
            (0, r._)(
              "h2",
              { class: "mb-3 text-center fw-bold" },
              "Control Panel",
              -1
            )
          ),
          Vt = { class: "list-unstyled" };
        function Pt(t, e, a, s, n, i) {
          const l = (0, r.up)("router-link");
          return (0, r.wy)(
            ((0, r.wg)(),
            (0, r.iD)(
              "div",
              Bt,
              [
                zt,
                (0, r._)("ul", Vt, [
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/signin" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Signin ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/signup" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Signup ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/admin/categories" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Categories ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/subcategories" },
                      {
                        default: (0, r.w5)(() => [
                          (0, r.Uk)(" Subcategories "),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/brands" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Brands ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/admin/products" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Products ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/wishlist" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Wishlist ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/coupons" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Coupons ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/cart" },
                      { default: (0, r.w5)(() => [(0, r.Uk)(" Cart ")]), _: 1 }
                    ),
                  ]),
                  (0, r._)("li", null, [
                    (0, r.Wm)(
                      l,
                      { to: "/orders" },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" Orders ")]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ],
              512
            )),
            [[o.F8, "admin" === n.role]]
          );
        }
        var Wt = {
          name: "AdminView",
          components: {},
          data() {
            return {
              baseURL: "https://gawasastore.onrender.com/api/v1/",
              role: null,
            };
          },
          methods: {
            async getMyinfo() {
              await (0, et.Z)({
                method: "get",
                url: `${this.baseURL}users/getMe`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => {
                  (this.role = t.data.data.role), console.log(t.data.data.role);
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.getMyinfo();
          },
        };
        const Et = (0, Z.Z)(Wt, [
          ["render", Pt],
          ["__scopeId", "data-v-8a400136"],
        ]);
        var Ft = Et;
        const Nt = { class: "display-2 my-5 text-center" };
        function Rt(t, e, a, o, s, n) {
          return (0, r.wg)(), (0, r.iD)("h1", Nt, "Not Found");
        }
        var Ot = { name: "NotFound" };
        const Ht = (0, Z.Z)(Ot, [["render", Rt]]);
        var Mt = Ht,
          Yt = a(6737);
        const qt = { class: "container" },
          Tt = { class: "row" },
          Lt = (0, r._)(
            "div",
            { class: "text-center my-4" },
            [(0, r._)("h3", null, "Our Categories")],
            -1
          ),
          Qt = (0, r._)("a", { class: "btn btn-success" }, "Add Category", -1),
          jt = { class: "row" };
        function Kt(t, e, a, s, n, i) {
          const l = (0, r.up)("router-link"),
            c = (0, r.up)("CategoryBox");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", qt, [
              (0, r._)("div", Tt, [
                Lt,
                (0, r.wy)(
                  (0, r.Wm)(
                    l,
                    { to: { name: "addCategory" } },
                    { default: (0, r.w5)(() => [Qt]), _: 1 },
                    512
                  ),
                  [[o.F8, "admincategories" === t.$route.name]]
                ),
              ]),
              (0, r._)("div", jt, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    t.categories,
                    (t) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: t.id, class: "col-md-6 col-lg-4 p-2 mb-2" },
                        [(0, r.Wm)(c, { category: t }, null, 8, ["category"])]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        const Xt = { class: "card" },
          Gt = ["src"],
          Jt = { class: "card-body" },
          te = { class: "card-title" },
          ee = { class: "card-text" },
          ae = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "category Details",
            -1
          ),
          oe = (0, r._)(
            "a",
            { class: "m-4 btn btn-success", href: "" },
            "Edit",
            -1
          );
        function re(t, e, a, s, i, l) {
          const c = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Xt, [
              (0, r._)("div", null, [
                (0, r._)(
                  "img",
                  {
                    src: a.category.image,
                    class: "card-img-top",
                    alt: "this is a pic",
                  },
                  null,
                  8,
                  Gt
                ),
              ]),
              (0, r._)("div", Jt, [
                (0, r._)("h5", te, (0, n.zw)(a.category.name), 1),
                (0, r._)("p", ee, (0, n.zw)(a.category.slug), 1),
                (0, r.Wm)(
                  c,
                  {
                    to: {
                      name: "CategoryDetails",
                      params: { id: a.category._id },
                    },
                  },
                  { default: (0, r.w5)(() => [ae]), _: 1 },
                  8,
                  ["to"]
                ),
                (0, r.wy)(
                  (0, r.Wm)(
                    c,
                    {
                      to: {
                        name: "EditCategory",
                        params: { id: a.category._id },
                      },
                    },
                    { default: (0, r.w5)(() => [oe]), _: 1 },
                    8,
                    ["to"]
                  ),
                  [[o.F8, "admincategories" === t.$route.name]]
                ),
                (0, r.wy)(
                  (0, r._)(
                    "button",
                    {
                      onClick:
                        e[0] ||
                        (e[0] = (...t) =>
                          l.deleteCategory && l.deleteCategory(...t)),
                      class: "m-4 btn btn-success",
                      href: "",
                    },
                    " Delete ",
                    512
                  ),
                  [[o.F8, "admincategories" === t.$route.name]]
                ),
              ]),
            ])
          );
        }
        var se = {
          name: "CategortBox",
          props: ["category"],
          data() {
            return {};
          },
          methods: {
            async deleteCategory() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}categories/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    this.$router.push("/categories");
                  }, 1)
                )
                .catch((t) => {
                  console.log(t), window.alert("you are not authorized");
                });
            },
          },
        };
        const ne = (0, Z.Z)(se, [["render", re]]);
        var ie = ne,
          le = {
            name: "CategoriesView",
            components: { CategoryBox: ie },
            mixins: [At.Z],
          };
        const ce = (0, Z.Z)(le, [["render", Kt]]);
        var de = ce;
        const ue = { class: "container" },
          me = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Add Category"),
              ]),
            ],
            -1
          ),
          pe = { class: "row text-center" },
          he = (0, r._)("div", { class: "col-3" }, null, -1),
          ge = { class: "col-6" },
          fe = { action: "", enctype: "multipart/form-data" },
          _e = { class: "form-group" },
          we = (0, r._)("label", { for: "" }, "Category Name", -1),
          ye = { class: "form-group" },
          be = (0, r._)("label", { for: "" }, "Category Image", -1),
          ve = (0, r._)("div", { class: "col-3" }, null, -1);
        function De(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", ue, [
              me,
              (0, r._)("div", pe, [
                he,
                (0, r._)("div", ge, [
                  (0, r._)("form", fe, [
                    (0, r._)("div", _e, [
                      we,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", ye, [
                      be,
                      (0, r._)(
                        "input",
                        {
                          onChange:
                            e[1] ||
                            (e[1] = (...t) =>
                              i.selectFile && i.selectFile(...t)),
                          type: "file",
                          class: "form-control",
                          ref: "file",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => i.addCategory && i.addCategory(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                ve,
              ]),
            ])
          );
        }
        const Ce = a(7218);
        var ke = {
          name: "AddCategory",
          data() {
            return { name: "", image: "" };
          },
          methods: {
            selectFile() {
              this.image = this.$refs.file.files[0];
            },
            async addCategory() {
              const t = new FormData();
              t.append("name", this.name), t.append("image", this.image);
              const e = "http://localhost:8000/api/v1/";
              await Ce({
                method: "post",
                url: `${e}categories`,
                data: t,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.$router.push("/categories");
                })
                .catch((t) => {
                  console.log(t);
                });
            },
          },
        };
        const Ue = (0, Z.Z)(ke, [["render", De]]);
        var Ae = Ue;
        const $e = { class: "container" },
          xe = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Edit Category"),
              ]),
            ],
            -1
          ),
          Ie = { class: "row text-center" },
          Ze = (0, r._)("div", { class: "col-3" }, null, -1),
          Se = { class: "col-6" },
          Be = { action: "", enctype: "multipart/form-data" },
          ze = { class: "form-group" },
          Ve = (0, r._)("label", { for: "" }, "Category Name", -1),
          Pe = { class: "form-group" },
          We = (0, r._)("label", { for: "" }, "Category Image", -1),
          Ee = (0, r._)("div", { class: "col-3" }, null, -1);
        function Fe(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", $e, [
              xe,
              (0, r._)("div", Ie, [
                Ze,
                (0, r._)("div", Se, [
                  (0, r._)("form", Be, [
                    (0, r._)("div", ze, [
                      Ve,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", Pe, [
                      We,
                      (0, r._)(
                        "input",
                        {
                          onChange:
                            e[1] ||
                            (e[1] = (...t) =>
                              i.selectFile && i.selectFile(...t)),
                          type: "file",
                          class: "form-control",
                          ref: "file",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => i.addCategory && i.addCategory(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                Ee,
              ]),
            ])
          );
        }
        const Ne = a(7218);
        var Re = {
          name: "EditCategory",
          data() {
            return { name: "", image: "" };
          },
          methods: {
            selectFile() {
              (this.image = this.$refs.file.files[0]), console.log(this.image);
            },
            async addCategory() {
              const t = new FormData();
              t.append("name", this.name), t.append("image", this.image);
              const e = "http://localhost:8000/api/v1/";
              await Ne({
                method: "put",
                url: `${e}categories/${this.$route.params.id}`,
                data: t,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.$router.push("/categories");
                })
                .catch((t) => {
                  console.log(t);
                });
            },
          },
        };
        const Oe = (0, Z.Z)(Re, [["render", Fe]]);
        var He = Oe;
        const Me = { class: "container" },
          Ye = (0, r._)("h1", null, "category Details", -1),
          qe = ["src"],
          Te = { class: "top-products py-5 container" },
          Le = (0, r._)(
            "h2",
            { class: "text-center my-4" },
            "Category Products",
            -1
          ),
          Qe = { class: "row" };
        function je(t, e, a, o, s, i) {
          const l = (0, r.up)("ProductBox");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Me, [
              Ye,
              (0, r._)("div", null, [
                (0, r._)("h3", null, (0, n.zw)(s.category.name), 1),
                (0, r._)("div", null, [
                  (0, r._)(
                    "img",
                    { src: s.category.image, alt: "image", width: "400" },
                    null,
                    8,
                    qe
                  ),
                ]),
              ]),
              (0, r._)("div", Te, [
                Le,
                (0, r._)("div", Qe, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      s.products,
                      (t) => (
                        (0, r.wg)(),
                        (0, r.iD)(
                          "div",
                          {
                            key: t.id,
                            class: "col-md-6 col-lg-4 col-xl-3 p-2 mb-2",
                          },
                          [(0, r.Wm)(l, { product: t }, null, 8, ["product"])]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }
        var Ke = {
          name: "CategoryDetailsView",
          components: { ProductBox: Ut },
          data() {
            return {
              category: {},
              baseUrl: "http://localhost:8000/api/v1/",
              products: null,
            };
          },
          methods: {
            async fetchData() {
              await et.Z.get(
                `${this.baseUrl}categories/${this.$route.params.id}`
              )
                .then((t) => (this.category = t.data.data))
                .catch((t) => console.log(t)),
                await et.Z.get(
                  `${this.baseUrl}categories/${this.$route.params.id}/products`
                )
                  .then((t) => {
                    this.products = t.data.data;
                  })
                  .catch((t) => console.log(t));
            },
            async deleteCategory() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}categories/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    this.fetchData(), this.$router.push("/categories");
                  }, 1)
                )
                .catch((t) => {
                  console.log(t), window.alert("you are not authorized");
                });
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Xe = (0, Z.Z)(Ke, [["render", je]]);
        var Ge = Xe;
        const Je = { class: "container" },
          ta = { class: "row" },
          ea = (0, r._)(
            "div",
            { class: "text-center my-4" },
            [(0, r._)("h3", null, "Our Subcategories")],
            -1
          ),
          aa = (0, r._)(
            "a",
            { class: "btn btn-success" },
            "Add Subcategory",
            -1
          ),
          oa = { class: "row" },
          ra = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "subcategory Details",
            -1
          );
        function sa(t, e, a, s, i, l) {
          const c = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Je, [
              (0, r._)("div", ta, [
                ea,
                (0, r.Wm)(
                  c,
                  { to: { name: "addSubcategory" } },
                  { default: (0, r.w5)(() => [aa]), _: 1 }
                ),
              ]),
              (0, r._)("div", oa, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    i.subcategories,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: e.id, class: "col-md-6 col-lg-4 p-2 m-2 card" },
                        [
                          (0, r._)("h5", null, (0, n.zw)(e.name), 1),
                          (0, r._)("p", null, (0, n.zw)(e.category.name), 1),
                          (0, r.wy)(
                            (0, r.Wm)(
                              c,
                              {
                                to: {
                                  name: "subategoryDetails",
                                  params: { id: e._id },
                                },
                              },
                              { default: (0, r.w5)(() => [ra]), _: 2 },
                              1032,
                              ["to"]
                            ),
                            [[o.F8, "subcategories" === t.$route.name]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        const na = a(7218);
        var ia = {
          name: "SubcategoriesView",
          data() {
            return {
              baseUrl: "http://localhost:8000/api/v1/",
              subcategories: null,
            };
          },
          methods: {
            async fetchData() {
              await na
                .get(`${this.baseUrl}subcategories`)
                .then((t) => (this.subcategories = t.data.data))
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const la = (0, Z.Z)(ia, [["render", sa]]);
        var ca = la;
        const da = { class: "container" },
          ua = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Add Subategory"),
              ]),
            ],
            -1
          ),
          ma = { class: "row text-center" },
          pa = (0, r._)("div", { class: "col-3" }, null, -1),
          ha = { class: "col-6" },
          ga = { action: "" },
          fa = { class: "form-group" },
          _a = (0, r._)("label", { for: "" }, "Subategory Name", -1),
          wa = { class: "form-group" },
          ya = (0, r._)("label", { for: "" }, "category", -1),
          ba = ["value"],
          va = (0, r._)("div", { class: "col-3" }, null, -1);
        function Da(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", da, [
              ua,
              (0, r._)("div", ma, [
                pa,
                (0, r._)("div", ha, [
                  (0, r._)("form", ga, [
                    (0, r._)("div", fa, [
                      _a,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (i.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.name]]
                      ),
                    ]),
                    (0, r._)("div", wa, [
                      ya,
                      (0, r.wy)(
                        (0, r._)(
                          "select",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.category = t)),
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          [
                            ((0, r.wg)(!0),
                            (0, r.iD)(
                              r.HY,
                              null,
                              (0, r.Ko)(
                                i.categories,
                                (t) => (
                                  (0, r.wg)(),
                                  (0, r.iD)(
                                    "option",
                                    { key: t.id, value: t._id },
                                    (0, n.zw)(t.name),
                                    9,
                                    ba
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        [[o.bM, i.category]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => l.addCategory && l.addCategory(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                va,
              ]),
            ])
          );
        }
        const Ca = a(7218);
        var ka = {
          name: "AddCategory",
          data() {
            return {
              name: "",
              category: "",
              categories: null,
              baseURL: "http://localhost:8000/api/v1/",
            };
          },
          methods: {
            async fetchData() {
              await Ca.get(`${this.baseURL}categories`)
                .then((t) => (this.categories = t.data.data))
                .catch((t) => console.log(t));
            },
            async addCategory() {
              await Ca({
                method: "post",
                url: `${this.baseURL}subcategories`,
                data: { name: this.name, category: this.category },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.$router.push("/subcategories");
                })
                .catch((t) => {
                  console.log(t);
                });
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Ua = (0, Z.Z)(ka, [["render", Da]]);
        var Aa = Ua;
        const $a = { class: "container" },
          xa = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Edit Category"),
              ]),
            ],
            -1
          ),
          Ia = { class: "row text-center" },
          Za = (0, r._)("div", { class: "col-3" }, null, -1),
          Sa = { class: "col-6" },
          Ba = { action: "" },
          za = { class: "form-group" },
          Va = (0, r._)("label", { for: "" }, "Subategory Name", -1),
          Pa = { class: "form-group" },
          Wa = (0, r._)("label", { for: "" }, "category", -1),
          Ea = ["value"],
          Fa = (0, r._)("div", { class: "col-3" }, null, -1);
        function Na(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", $a, [
              xa,
              (0, r._)("div", Ia, [
                Za,
                (0, r._)("div", Sa, [
                  (0, r._)("form", Ba, [
                    (0, r._)("div", za, [
                      Va,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (i.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.name]]
                      ),
                    ]),
                    (0, r._)("div", Pa, [
                      Wa,
                      (0, r.wy)(
                        (0, r._)(
                          "select",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.category = t)),
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          [
                            ((0, r.wg)(!0),
                            (0, r.iD)(
                              r.HY,
                              null,
                              (0, r.Ko)(
                                i.categories,
                                (t) => (
                                  (0, r.wg)(),
                                  (0, r.iD)(
                                    "option",
                                    { key: t.id, value: t._id },
                                    (0, n.zw)(t.name),
                                    9,
                                    Ea
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        [[o.bM, i.category]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => l.addCategory && l.addCategory(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                Fa,
              ]),
            ])
          );
        }
        const Ra = a(7218);
        var Oa = {
          name: "editSubcategory",
          data() {
            return {
              baseURL: "http://localhost:8000/api/v1/",
              categories: null,
              name: "",
              category: "",
            };
          },
          methods: {
            async fetchData() {
              await Ra.get(`${this.baseURL}categories`)
                .then((t) => {
                  this.categories = t.data.data;
                })
                .catch((t) => {
                  console.log(t);
                });
            },
            async addCategory() {
              const t = new FormData();
              t.append("name", this.name),
                t.append("image", this.image),
                await Ra({
                  method: "put",
                  url: `${this.baseURL}subcategories/${this.$route.params.id}`,
                  data: { name: this.name, category: this.category },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/subcategories");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Ha = (0, Z.Z)(Oa, [["render", Na]]);
        var Ma = Ha;
        const Ya = (0, r._)("h1", { class: "mb-5" }, "Subcategory Details", -1),
          qa = (0, r._)(
            "a",
            { class: "m-4 btn btn-success", href: "" },
            "Edit",
            -1
          );
        function Ta(t, e, a, o, s, i) {
          const l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                Ya,
                (0, r._)("div", null, [
                  (0, r._)("h3", null, (0, n.zw)(s.subcategory.name), 1),
                  (0, r._)(
                    "h5",
                    null,
                    "category : " + (0, n.zw)(s.categoryName),
                    1
                  ),
                  (0, r.Wm)(
                    l,
                    {
                      to: {
                        name: "editSubcategory",
                        params: { id: this.$route.params.id },
                      },
                    },
                    { default: (0, r.w5)(() => [qa]), _: 1 },
                    8,
                    ["to"]
                  ),
                  (0, r._)(
                    "button",
                    {
                      onClick:
                        e[0] ||
                        (e[0] = (...t) =>
                          i.deleteSubategory && i.deleteSubategory(...t)),
                      class: "m-4 btn btn-success",
                      href: "",
                    },
                    " Delete "
                  ),
                ]),
              ],
              64
            )
          );
        }
        var La = {
          name: "CategoryDetailsView",
          data() {
            return {
              subcategory: {},
              baseUrl: "http://localhost:8000/api/v1/",
              categoryName: null,
            };
          },
          methods: {
            async fetchData() {
              await et.Z.get(
                `${this.baseUrl}subcategories/${this.$route.params.id}`
              )
                .then(
                  (t) => (
                    (this.subcategory = t.data.data),
                    (this.categoryName = t.data.data.category.name)
                  )
                )
                .catch((t) => console.log(t));
            },
            async deleteSubategory() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}subcategories/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    this.fetchData(), this.$router.push("/subcategories");
                  }, 1)
                )
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Qa = (0, Z.Z)(La, [["render", Ta]]);
        var ja = Qa;
        const Ka = { class: "container" },
          Xa = { class: "row" },
          Ga = (0, r._)(
            "div",
            { class: "text-center my-4" },
            [(0, r._)("h3", null, "Our Brands")],
            -1
          ),
          Ja = (0, r._)(
            "a",
            { class: "btn btn-success mb-3" },
            "Add Brand",
            -1
          ),
          to = { class: "row" },
          eo = { class: "p-3 bg-white" },
          ao = ["src"],
          oo = { class: "text-center mt-2" },
          ro = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "brand Details",
            -1
          );
        function so(t, e, a, s, n, i) {
          const l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Ka, [
              (0, r._)("div", Xa, [
                Ga,
                (0, r.Wm)(
                  l,
                  { to: { name: "addBrand" } },
                  { default: (0, r.w5)(() => [Ja]), _: 1 }
                ),
              ]),
              (0, r._)("div", to, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    n.brands,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: e.id, class: "col-md-4 col-lg-3" },
                        [
                          (0, r._)("div", eo, [
                            (0, r._)(
                              "img",
                              { src: e.image, alt: "", class: "img-fluid" },
                              null,
                              8,
                              ao
                            ),
                          ]),
                          (0, r._)("div", oo, [
                            (0, r.wy)(
                              (0, r.Wm)(
                                l,
                                {
                                  to: {
                                    name: "brandDetails",
                                    params: { id: e._id },
                                  },
                                },
                                { default: (0, r.w5)(() => [ro]), _: 2 },
                                1032,
                                ["to"]
                              ),
                              [[o.F8, "brands" === t.$route.name]]
                            ),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        const no = a(7218);
        var io = {
          name: "BrandsView",
          data() {
            return { baseUrl: "http://localhost:8000/api/v1/", brands: null };
          },
          methods: {
            async fetchData() {
              await no
                .get(`${this.baseUrl}brands`)
                .then((t) => (this.brands = t.data.data))
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const lo = (0, Z.Z)(io, [["render", so]]);
        var co = lo;
        const uo = (0, r._)("h1", { class: "mb-5" }, "Brand Details", -1),
          mo = ["src"],
          po = (0, r._)(
            "a",
            { class: "m-4 btn btn-success", href: "" },
            "Edit",
            -1
          );
        function ho(t, e, a, o, s, i) {
          const l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                uo,
                (0, r._)("div", null, [
                  (0, r._)("h3", null, (0, n.zw)(s.brand.name), 1),
                  (0, r._)("div", null, [
                    (0, r._)(
                      "img",
                      { src: s.brand.image, width: "400", alt: "" },
                      null,
                      8,
                      mo
                    ),
                  ]),
                  (0, r.Wm)(
                    l,
                    {
                      to: {
                        name: "editBrand",
                        params: { id: this.$route.params.id },
                      },
                    },
                    { default: (0, r.w5)(() => [po]), _: 1 },
                    8,
                    ["to"]
                  ),
                  (0, r._)(
                    "button",
                    {
                      onClick:
                        e[0] ||
                        (e[0] = (...t) => i.deleteBrand && i.deleteBrand(...t)),
                      class: "m-4 btn btn-success",
                      href: "",
                    },
                    " Delete "
                  ),
                ]),
              ],
              64
            )
          );
        }
        var go = {
          name: "BrandDetailsView",
          data() {
            return { brand: {}, baseUrl: "http://localhost:8000/api/v1/" };
          },
          methods: {
            async fetchData() {
              await et.Z.get(`${this.baseUrl}brands/${this.$route.params.id}`)
                .then((t) => (this.brand = t.data.data))
                .catch((t) => console.log(t));
            },
            async deleteBrand() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}brands/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    this.fetchData(), this.$router.push("/brands");
                  }, 1)
                )
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const fo = (0, Z.Z)(go, [["render", ho]]);
        var _o = fo;
        const wo = { class: "container" },
          yo = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Add Brand"),
              ]),
            ],
            -1
          ),
          bo = { class: "row text-center" },
          vo = (0, r._)("div", { class: "col-3" }, null, -1),
          Do = { class: "col-6" },
          Co = { action: "", enctype: "multipart/form-data" },
          ko = { class: "form-group" },
          Uo = (0, r._)("label", { for: "" }, "Brand Name", -1),
          Ao = { class: "form-group" },
          $o = (0, r._)("label", { for: "" }, "Brand Image", -1),
          xo = (0, r._)("div", { class: "col-3" }, null, -1);
        function Io(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", wo, [
              yo,
              (0, r._)("div", bo, [
                vo,
                (0, r._)("div", Do, [
                  (0, r._)("form", Co, [
                    (0, r._)("div", ko, [
                      Uo,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", Ao, [
                      $o,
                      (0, r._)(
                        "input",
                        {
                          type: "file",
                          ref: "file",
                          onChange:
                            e[1] ||
                            (e[1] = (...t) =>
                              i.selectFile && i.selectFile(...t)),
                          class: "form-control",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => i.addBrand && i.addBrand(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                xo,
              ]),
            ])
          );
        }
        const Zo = a(7218);
        var So = {
          name: "AddBrand",
          data() {
            return {
              name: "",
              image: "",
              baseURL: "http://localhost:8000/api/v1/",
            };
          },
          methods: {
            selectFile() {
              this.image = this.$refs.file.files[0];
            },
            async addBrand() {
              const t = new FormData();
              t.append("name", this.name),
                t.append("image", this.image),
                await Zo({
                  method: "post",
                  url: `${this.baseURL}brands`,
                  data: t,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/brands");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
            },
          },
        };
        const Bo = (0, Z.Z)(So, [["render", Io]]);
        var zo = Bo;
        const Vo = { class: "container" },
          Po = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Edit Brand"),
              ]),
            ],
            -1
          ),
          Wo = { class: "row text-center" },
          Eo = (0, r._)("div", { class: "col-3" }, null, -1),
          Fo = { class: "col-6" },
          No = { action: "" },
          Ro = { class: "form-group" },
          Oo = (0, r._)("label", { for: "" }, "Brand Name", -1),
          Ho = { class: "form-group" },
          Mo = (0, r._)("label", { for: "" }, "Brand image", -1),
          Yo = (0, r._)("div", { class: "col-3" }, null, -1);
        function qo(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Vo, [
              Po,
              (0, r._)("div", Wo, [
                Eo,
                (0, r._)("div", Fo, [
                  (0, r._)("form", No, [
                    (0, r._)("div", Ro, [
                      Oo,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", Ho, [
                      Mo,
                      (0, r._)(
                        "input",
                        {
                          type: "file",
                          ref: "file",
                          onChange:
                            e[1] ||
                            (e[1] = (...t) =>
                              i.selectFile && i.selectFile(...t)),
                          class: "form-control",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] ||
                        (e[2] = (...t) => i.EditBrand && i.EditBrand(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                Yo,
              ]),
            ])
          );
        }
        const To = a(7218);
        var Lo = {
          name: "editBrand",
          data() {
            return {
              baseURL: "http://localhost:8000/api/v1/",
              name: "",
              image: "",
            };
          },
          methods: {
            async selectFile() {
              this.image = this.$refs.file.files[0];
            },
            async EditBrand() {
              const t = new FormData();
              t.append("name", this.name),
                t.append("image", this.image),
                await To({
                  method: "put",
                  url: `${this.baseURL}brands/${this.$route.params.id}`,
                  data: t,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/brands");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
            },
          },
        };
        const Qo = (0, Z.Z)(Lo, [["render", qo]]);
        var jo = Qo;
        const Ko = { class: "container" },
          Xo = { class: "row" },
          Go = (0, r._)(
            "div",
            { class: "text-center my-4" },
            [(0, r._)("h3", null, "Our Products")],
            -1
          ),
          Jo = (0, r._)("a", { class: "btn btn-success" }, "Add Product", -1),
          tr = { class: "row" };
        function er(t, e, a, s, n, i) {
          const l = (0, r.up)("router-link"),
            c = (0, r.up)("ProductBox");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Ko, [
              (0, r._)("div", Xo, [
                Go,
                (0, r.wy)(
                  (0, r.Wm)(
                    l,
                    { to: { name: "addProduct" } },
                    { default: (0, r.w5)(() => [Jo]), _: 1 },
                    512
                  ),
                  [[o.F8, "adminproducts" === t.$route.name]]
                ),
              ]),
              (0, r._)("div", tr, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    t.products,
                    (t) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: t.id, class: "col-md-6 col-lg-4 col-xl-3 p-2" },
                        [(0, r.Wm)(c, { product: t }, null, 8, ["product"])]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var ar = {
          name: "ProductsView",
          components: { ProductBox: Ut },
          mixins: [$t.Z],
        };
        const or = (0, Z.Z)(ar, [["render", er]]);
        var rr = or;
        const sr = { class: "container" },
          nr = (0, r._)(
            "h1",
            { class: "p-3 mb-5 text-center" },
            "طلب المنتج",
            -1
          ),
          ir = { class: "row" },
          lr = { class: "col text-center" },
          cr = { class: "mb-3" },
          dr = { class: "text-center" },
          ur = ["src"],
          mr = { class: "mt-3" },
          pr = ["href"];
        function hr(t, e, a, o, s, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", sr, [
              nr,
              (0, r._)("div", ir, [
                (0, r._)("div", lr, [
                  (0, r._)("h3", cr, (0, n.zw)(s.product.title), 1),
                  (0, r._)("div", dr, [
                    (0, r._)(
                      "img",
                      { src: s.product.imageCover, width: "400", alt: "" },
                      null,
                      8,
                      ur
                    ),
                  ]),
                  (0, r._)(
                    "p",
                    mr,
                    "السعر " + (0, n.zw)(s.product.price) + " ج.م",
                    1
                  ),
                  (0, r._)(
                    "a",
                    {
                      class: "btn btn-success d-block mx-auto mt-3 fs-5 w-25",
                      href: `https://wa.me/+201092615290?text=انا مهتم بشراء منتج ${s.product.title} بسعر ${s.product.price}جنيه`,
                    },
                    " طلب الان",
                    8,
                    pr
                  ),
                ]),
              ]),
            ])
          );
        }
        var gr = {
          name: "ProductDetailsView",
          data() {
            return {
              product: "",
              baseUrl: "https://gawasastore.onrender.com/api/v1/",
              images: "",
              wishlistItems: [],
              cartItems: [],
              addedToWishlist: !1,
              addedToCart: !1,
            };
          },
          computed: {
            itemIsInWishlist() {
              return this.wishlistItems.some((t) => this.product._id == t._id);
            },
            itemIsInCart() {
              return this.cartItems.some(
                (t) => this.product._id == t.product.id
              );
            },
          },
          methods: {
            async fetchData() {
              await et.Z.get(`${this.baseUrl}products/${this.$route.params.id}`)
                .then((t) => {
                  this.product = t.data.data;
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const fr = (0, Z.Z)(gr, [["render", hr]]);
        var _r = fr;
        const wr = { class: "container" },
          yr = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Add Product"),
              ]),
            ],
            -1
          ),
          br = { class: "row text-center" },
          vr = (0, r._)("div", { class: "col-3" }, null, -1),
          Dr = { class: "col-6" },
          Cr = { action: "", enctype: "multipart/form-data" },
          kr = { class: "form-group" },
          Ur = (0, r._)("label", { for: "" }, "Product Name", -1),
          Ar = { class: "form-group" },
          $r = (0, r._)("label", { for: "" }, "Product Description", -1),
          xr = { class: "form-group" },
          Ir = (0, r._)("label", { for: "" }, "Product Quantity", -1),
          Zr = { class: "form-group" },
          Sr = (0, r._)("label", { for: "" }, "Product Price", -1),
          Br = { class: "form-group" },
          zr = (0, r._)("label", { for: "" }, "Product Image Cover", -1),
          Vr = { class: "form-group" },
          Pr = (0, r._)("label", { for: "" }, "Product Images", -1),
          Wr = { class: "form-group" },
          Er = (0, r._)("label", { for: "" }, "Category", -1),
          Fr = ["value"],
          Nr = (0, r._)("div", { class: "col-3" }, null, -1);
        function Rr(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", wr, [
              yr,
              (0, r._)("div", br, [
                vr,
                (0, r._)("div", Dr, [
                  (0, r._)("form", Cr, [
                    (0, r._)("div", kr, [
                      Ur,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (i.title = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.title]]
                      ),
                    ]),
                    (0, r._)("div", Ar, [
                      $r,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.description = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.description]]
                      ),
                    ]),
                    (0, r._)("div", xr, [
                      Ir,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (i.quantity = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.quantity]]
                      ),
                    ]),
                    (0, r._)("div", Zr, [
                      Sr,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[3] || (e[3] = (t) => (i.price = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.price]]
                      ),
                    ]),
                    (0, r._)("div", Br, [
                      zr,
                      (0, r._)(
                        "input",
                        {
                          type: "file",
                          ref: "file",
                          onChange:
                            e[4] ||
                            (e[4] = (...t) =>
                              l.selectFile && l.selectFile(...t)),
                          class: "form-control",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("div", Vr, [
                      Pr,
                      (0, r._)(
                        "input",
                        {
                          type: "file",
                          ref: "images",
                          onChange:
                            e[5] ||
                            (e[5] = (...t) =>
                              l.selectimages && l.selectimages(...t)),
                          class: "form-control",
                          multiple: "",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("div", Wr, [
                      Er,
                      (0, r.wy)(
                        (0, r._)(
                          "select",
                          {
                            name: "",
                            id: "",
                            class: "form-control",
                            "onUpdate:modelValue":
                              e[6] || (e[6] = (t) => (i.category = t)),
                          },
                          [
                            ((0, r.wg)(!0),
                            (0, r.iD)(
                              r.HY,
                              null,
                              (0, r.Ko)(
                                i.categories,
                                (t) => (
                                  (0, r.wg)(),
                                  (0, r.iD)(
                                    "option",
                                    { key: t.id, value: t._id },
                                    (0, n.zw)(t.name),
                                    9,
                                    Fr
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        [[o.bM, i.category]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[7] ||
                        (e[7] = (...t) => l.addProduct && l.addProduct(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                Nr,
              ]),
            ])
          );
        }
        const Or = a(7218);
        var Hr = {
          name: "AddProduct",
          data() {
            return {
              title: "",
              description: "",
              imageCover: "",
              images: [],
              quantity: null,
              price: null,
              categories: null,
              category: "",
              baseURL: "https://gawasastore.onrender.com/api/v1/",
            };
          },
          methods: {
            async fetchData() {
              Or.get(`${this.baseURL}categories`)
                .then((t) => (this.categories = t.data.data))
                .catch((t) => console.log(t));
            },
            selectFile() {
              this.imageCover = this.$refs.file.files[0];
            },
            selectimages() {
              (this.images = this.$refs.images.files),
                console.log(this.$refs.images.files);
            },
            async addProduct() {
              const t = new FormData();
              t.append("title", this.title),
                t.append("description", this.description),
                t.append("quantity", this.quantity),
                t.append("price", this.price),
                t.append("imageCover", this.imageCover);
              for (var e = 0; e < this.images.length; e++)
                t.append("images", this.images[e]);
              t.append("category", this.category),
                await Or({
                  method: "post",
                  url: `${this.baseURL}products`,
                  data: t,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/admin/products");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Mr = (0, Z.Z)(Hr, [["render", Rr]]);
        var Yr = Mr;
        const qr = { class: "container" },
          Tr = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Edit Product"),
              ]),
            ],
            -1
          ),
          Lr = { class: "row text-center" },
          Qr = (0, r._)("div", { class: "col-3" }, null, -1),
          jr = { class: "col-6" },
          Kr = { action: "", enctype: "multipart/form-data" },
          Xr = { class: "form-group" },
          Gr = (0, r._)("label", { for: "" }, "Product Name", -1),
          Jr = ["placeholder"],
          ts = { class: "form-group" },
          es = (0, r._)("label", { for: "" }, "Product Description", -1),
          as = ["placeholder"],
          os = { class: "form-group" },
          rs = (0, r._)("label", { for: "" }, "Product Quantity", -1),
          ss = ["placeholder"],
          ns = { class: "form-group" },
          is = (0, r._)("label", { for: "" }, "Product Price", -1),
          ls = ["placeholder"],
          cs = { class: "form-group" },
          ds = (0, r._)("label", { for: "" }, "Product Image Cover", -1),
          us = { class: "form-group" },
          ms = (0, r._)("label", { for: "" }, "Category", -1),
          ps = ["value"],
          hs = (0, r._)("div", { class: "col-3" }, null, -1);
        function gs(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", qr, [
              Tr,
              (0, r._)("div", Lr, [
                Qr,
                (0, r._)("div", jr, [
                  (0, r._)("form", Kr, [
                    (0, r._)("div", Xr, [
                      Gr,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (i.title = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                            placeholder: i.product.title,
                          },
                          null,
                          8,
                          Jr
                        ),
                        [[o.nr, i.title]]
                      ),
                    ]),
                    (0, r._)("div", ts, [
                      es,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.description = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                            placeholder: i.product.description,
                          },
                          null,
                          8,
                          as
                        ),
                        [[o.nr, i.description]]
                      ),
                    ]),
                    (0, r._)("div", os, [
                      rs,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (i.quantity = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                            placeholder: i.product.quantity,
                          },
                          null,
                          8,
                          ss
                        ),
                        [[o.nr, i.quantity]]
                      ),
                    ]),
                    (0, r._)("div", ns, [
                      is,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[3] || (e[3] = (t) => (i.price = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                            placeholder: i.product.price,
                          },
                          null,
                          8,
                          ls
                        ),
                        [[o.nr, i.price]]
                      ),
                    ]),
                    (0, r._)("div", cs, [
                      ds,
                      (0, r._)(
                        "input",
                        {
                          type: "file",
                          ref: "file",
                          onChange:
                            e[4] ||
                            (e[4] = (...t) =>
                              l.selectFile && l.selectFile(...t)),
                          class: "form-control",
                        },
                        null,
                        544
                      ),
                    ]),
                    (0, r._)("div", us, [
                      ms,
                      (0, r.wy)(
                        (0, r._)(
                          "select",
                          {
                            name: "",
                            id: "",
                            class: "form-control",
                            "onUpdate:modelValue":
                              e[5] || (e[5] = (t) => (i.category = t)),
                          },
                          [
                            ((0, r.wg)(!0),
                            (0, r.iD)(
                              r.HY,
                              null,
                              (0, r.Ko)(
                                i.categories,
                                (t) => (
                                  (0, r.wg)(),
                                  (0, r.iD)(
                                    "option",
                                    { key: t.id, value: t._id },
                                    (0, n.zw)(t.name),
                                    9,
                                    ps
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        [[o.bM, i.category]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[6] ||
                        (e[6] = (...t) => l.editProduct && l.editProduct(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                hs,
              ]),
            ])
          );
        }
        const fs = a(7218);
        var _s = {
          name: "EditProduct",
          data() {
            return {
              title: "",
              description: "",
              imageCover: "",
              quantity: null,
              price: null,
              categories: "",
              category: "",
              product: "",
              baseURL: "https://gawasastore.onrender.com/api/v1/",
            };
          },
          methods: {
            async fetchData() {
              fs.get(`${this.baseURL}categories`)
                .then((t) => (this.categories = t.data.data))
                .catch((t) => console.log(t));
            },
            async fetchProductData() {
              await fs
                .get(`${this.baseURL}products/${this.$route.params.id}`)
                .then((t) => (this.product = t.data.data))
                .catch((t) => console.log(t));
            },
            selectFile() {
              this.imageCover = this.$refs.file.files[0];
            },
            async editProduct() {
              const t = new FormData();
              t.append("title", this.title),
                t.append("description", this.description),
                t.append("quantity", this.quantity),
                t.append("price", this.price),
                t.append("imageCover", this.imageCover),
                t.append("category", this.category),
                await fs({
                  method: "put",
                  url: `${this.baseURL}products/${this.$route.params.id}`,
                  data: t,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/products");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
            },
          },
          mounted() {
            this.fetchData(), this.fetchProductData();
          },
        };
        const ws = (0, Z.Z)(_s, [["render", gs]]);
        var ys = ws;
        const bs = { class: "container" },
          vs = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "My Wishlist"),
              ]),
            ],
            -1
          ),
          Ds = { class: "row" },
          Cs = ["src"],
          ks = { class: "card-body" },
          Us = ["onClick"];
        function As(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", bs, [
              vs,
              (0, r._)("div", Ds, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    i.products,
                    (t) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: t.id, class: "col-md-6 col-lg-4 p-2 m-2 card" },
                        [
                          (0, r._)("div", null, [
                            (0, r._)(
                              "img",
                              {
                                src: t.imageCover,
                                alt: "",
                                class: "card-img-top",
                              },
                              null,
                              8,
                              Cs
                            ),
                          ]),
                          (0, r._)("div", ks, [
                            (0, r._)("h5", null, (0, n.zw)(t.title), 1),
                            (0, r._)("p", null, (0, n.zw)(t.description), 1),
                            (0, r._)("p", null, (0, n.zw)(t._id), 1),
                            (0, r.wy)(
                              (0, r._)(
                                "button",
                                {
                                  onClick: (e) => l.deleteFromWishlist(t._id),
                                  class: "m-4 btn btn-success",
                                  href: "",
                                },
                                " Delete from wishlist ",
                                8,
                                Us
                              ),
                              [[o.F8, i.addedToWishlist]]
                            ),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        const $s = a(7218);
        var xs = {
          name: "WishlistView",
          data() {
            return {
              baseUrl: "http://localhost:8000/api/v1/",
              products: null,
              addedToWishlist: !0,
            };
          },
          methods: {
            async fetchData() {
              await $s({
                method: "get",
                url: `${this.baseUrl}wishlist`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => (this.products = t.data.data))
                .catch((t) => console.log(t));
            },
            async deleteFromWishlist(t) {
              await $s({
                method: "delete",
                url: `${this.baseUrl}wishlist/${t}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => {
                  (this.products = t.data.data), this.fetchData();
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Is = (0, Z.Z)(xs, [["render", As]]);
        var Zs = Is;
        const Ss = { class: "container" },
          Bs = (0, r._)("h2", { class: "text-center my-4" }, "My Cart", -1),
          zs = (0, r._)("h2", null, "Cart Items", -1),
          Vs = { class: "my-4" },
          Ps = { key: 0 },
          Ws = { key: 1 },
          Es = { class: "form-group" },
          Fs = (0, r._)("label", { for: "" }, "Coupon name", -1),
          Ns = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "Create Order",
            -1
          );
        function Rs(t, e, a, s, i, l) {
          const c = (0, r.up)("CartItemComponent"),
            d = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Ss, [
              Bs,
              (0, r._)("div", null, [
                zs,
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    i.cartItems,
                    (t) => (
                      (0, r.wg)(),
                      (0, r.iD)("div", { key: t.id }, [
                        (0, r.Wm)(
                          c,
                          { cartItem: t, fetchData: l.fetchData },
                          null,
                          8,
                          ["cartItem", "fetchData"]
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
              (0, r._)(
                "h4",
                Vs,
                "Total Cart Price: " + (0, n.zw)(i.cart.totalCartPrice),
                1
              ),
              i.cart.totalPriceAfterDiscount
                ? ((0, r.wg)(),
                  (0, r.iD)(
                    "h4",
                    Ps,
                    " Total Cart Price After Discount : " +
                      (0, n.zw)(i.cart.totalPriceAfterDiscount),
                    1
                  ))
                : (0, r.kq)("", !0),
              (0, r._)(
                "button",
                {
                  onClick:
                    e[0] ||
                    (e[0] = (...t) => l.showCoupon && l.showCoupon(...t)),
                  class: "btn btn-primary m-3",
                },
                " Apply Coupon "
              ),
              i.showCouponCondition
                ? ((0, r.wg)(),
                  (0, r.iD)("div", Ws, [
                    (0, r._)("div", Es, [
                      Fs,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (i.coupon = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, i.coupon]]
                      ),
                    ]),
                    (0, r._)(
                      "button",
                      {
                        onClick:
                          e[2] ||
                          (e[2] = (...t) =>
                            l.applyCoupon && l.applyCoupon(...t)),
                        class: "btn btn-primary m-3",
                      },
                      "Apply"
                    ),
                  ]))
                : (0, r.kq)("", !0),
              (0, r.Wm)(
                d,
                { to: { name: "cashOrder", params: { id: i.cartId } } },
                { default: (0, r.w5)(() => [Ns]), _: 1 },
                8,
                ["to"]
              ),
              (0, r._)(
                "button",
                {
                  onClick:
                    e[3] || (e[3] = (...t) => l.clearCart && l.clearCart(...t)),
                  class: "btn btn-primary m-3",
                },
                "Clear Cart"
              ),
            ])
          );
        }
        const Os = { class: "row align-items-center" },
          Hs = { class: "col-lg-6 text-center" },
          Ms = { class: "image p-5" },
          Ys = ["src"],
          qs = { class: "col-lg-6" },
          Ts = ["placeholder"];
        function Ls(t, e, a, s, i, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Os, [
              (0, r._)("div", Hs, [
                (0, r._)("div", Ms, [
                  (0, r._)(
                    "img",
                    {
                      class: "w-50 d-block mx-auto",
                      src: i.product.imageCover,
                      alt: "",
                    },
                    null,
                    8,
                    Ys
                  ),
                  (0, r._)(
                    "button",
                    {
                      onClick:
                        e[0] ||
                        (e[0] = (t) => l.removeFromCart(a.cartItem._id)),
                      class: "btn btn-primary mt-3",
                    },
                    " Remove from cart "
                  ),
                ]),
              ]),
              (0, r._)("div", qs, [
                (0, r._)(
                  "p",
                  null,
                  "product title: " + (0, n.zw)(a.cartItem.product.title),
                  1
                ),
                (0, r._)(
                  "p",
                  null,
                  "product price: " + (0, n.zw)(a.cartItem.price),
                  1
                ),
                (0, r._)("p", null, [
                  (0, r.Uk)(" product quantity: "),
                  (0, r.wy)(
                    (0, r._)(
                      "input",
                      {
                        class: "number",
                        "onUpdate:modelValue":
                          e[1] || (e[1] = (t) => (i.quantity = t)),
                        type: "number",
                        placeholder: a.cartItem.quantity,
                      },
                      null,
                      8,
                      Ts
                    ),
                    [[o.nr, i.quantity]]
                  ),
                  (0, r._)(
                    "button",
                    {
                      onClick:
                        e[2] ||
                        (e[2] = (t) => l.updateItemQuantity(a.cartItem._id)),
                      class: "btn",
                    },
                    " update "
                  ),
                ]),
              ]),
            ])
          );
        }
        var Qs = {
          name: "CartItemComponent",
          props: ["cartItem", "fetchData"],
          data() {
            return {
              quantity: null,
              baseUrl: "http://localhost:8000/api/v1/",
              product: "",
            };
          },
          methods: {
            async removeFromCart(t) {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}cart/${t}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.fetchData();
                })
                .catch((t) => console.log(t));
            },
            async updateItemQuantity(t) {
              await (0, et.Z)({
                method: "put",
                url: `${this.baseUrl}cart/${t}`,
                data: { quantity: this.quantity },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.fetchData();
                })
                .catch((t) => console.log(t));
            },
            async fetchProductData() {
              await et.Z.get(
                `${this.baseUrl}products/${this.cartItem.product._id}`
              )
                .then((t) => {
                  console.log("hi"), (this.product = t.data.data);
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchProductData();
          },
        };
        const js = (0, Z.Z)(Qs, [
          ["render", Ls],
          ["__scopeId", "data-v-7efd9e97"],
        ]);
        var Ks = js,
          Xs = {
            name: "CartView",
            data() {
              return {
                baseUrl: "http://localhost:8000/api/v1/",
                cart: {},
                cartId: {},
                cartItems: [],
                coupon: "",
                totalPriceAfterDiscount: "",
                showCouponCondition: !1,
              };
            },
            methods: {
              async fetchData() {
                await (0, et.Z)({
                  method: "get",
                  url: `${this.baseUrl}cart`,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then((t) => {
                    (this.cart = t.data.data),
                      (this.cartId = t.data.data._id),
                      (this.cartItems = t.data.data.cartItems),
                      (this.totalPriceAfterDiscount =
                        t.data.data.totalPriceAfterDiscount);
                  })
                  .catch((t) => console.log(t));
              },
              async removeFromCart(t) {
                await (0, et.Z)({
                  method: "delete",
                  url: `${this.baseUrl}cart/${t}`,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.fetchData();
                  })
                  .catch((t) => console.log(t));
              },
              async updateItemQuantity(t) {
                await (0, et.Z)({
                  method: "put",
                  url: `${this.baseUrl}cart/${t}`,
                  data: { quantity: this.quantity },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.fetchData();
                  })
                  .catch((t) => console.log(t));
              },
              async applyCoupon() {
                await (0, et.Z)({
                  method: "put",
                  url: `${this.baseUrl}cart/applyCoupon`,
                  data: { coupon: this.coupon },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.fetchData(), (this.showCouponCondition = !1);
                  })
                  .catch((t) => console.log(t));
              },
              showCoupon() {
                this.showCouponCondition = !0;
              },
              async clearCart() {
                await (0, et.Z)({
                  method: "delete",
                  url: `${this.baseUrl}cart`,
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    this.$router.push("/products");
                  })
                  .catch((t) => console.log(t));
              },
            },
            mounted() {
              this.fetchData();
            },
            components: { CartItemComponent: Ks },
          };
        const Gs = (0, Z.Z)(Xs, [["render", Rs]]);
        var Js = Gs;
        const tn = { class: "container" },
          en = { class: "row" },
          an = (0, r._)(
            "div",
            { class: "text-center my-4" },
            [(0, r._)("h3", null, "Our Coupons")],
            -1
          ),
          on = (0, r._)("a", { class: "btn btn-success" }, "Add Coupon", -1),
          rn = { class: "row" },
          sn = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "Coupon Details",
            -1
          );
        function nn(t, e, a, s, i, l) {
          const c = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", tn, [
              (0, r._)("div", en, [
                an,
                (0, r.Wm)(
                  c,
                  { to: { name: "addCoupon" } },
                  { default: (0, r.w5)(() => [on]), _: 1 }
                ),
              ]),
              (0, r._)("div", rn, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    i.coupons,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        { key: e.id, class: "col-md-6 col-lg-4 p-2 m-2 card" },
                        [
                          (0, r._)("h5", null, (0, n.zw)(e.name), 1),
                          (0, r.wy)(
                            (0, r.Wm)(
                              c,
                              {
                                to: {
                                  name: "couponDetails",
                                  params: { id: e._id },
                                },
                              },
                              { default: (0, r.w5)(() => [sn]), _: 2 },
                              1032,
                              ["to"]
                            ),
                            [[o.F8, "coupons" === t.$route.name]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        const ln = a(7218);
        var cn = {
          name: "CouponsView",
          data() {
            return { baseUrl: "http://localhost:8000/api/v1/", coupons: null };
          },
          methods: {
            async fetchData() {
              await ln({
                method: "get",
                url: `${this.baseUrl}coupons`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => (this.coupons = t.data.data))
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const dn = (0, Z.Z)(cn, [["render", nn]]);
        var un = dn;
        const mn = { class: "container" },
          pn = (0, r._)("h1", { class: "mb-5" }, "Coupon Details", -1),
          hn = (0, r._)(
            "a",
            { class: "m-4 btn btn-success", href: "" },
            "Edit",
            -1
          );
        function gn(t, e, a, o, s, i) {
          const l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", mn, [
              pn,
              (0, r._)("div", null, [
                (0, r._)("h3", null, (0, n.zw)(s.coupon.name), 1),
                (0, r._)(
                  "h5",
                  null,
                  "coupon name : " + (0, n.zw)(s.coupon.name),
                  1
                ),
                (0, r._)(
                  "h5",
                  null,
                  "coupon expiry date : " + (0, n.zw)(s.coupon.expire),
                  1
                ),
                (0, r._)(
                  "h5",
                  null,
                  "coupon dicount amount : " + (0, n.zw)(s.coupon.discount),
                  1
                ),
                (0, r.Wm)(
                  l,
                  {
                    to: {
                      name: "editCoupon",
                      params: { id: this.$route.params.id },
                    },
                  },
                  { default: (0, r.w5)(() => [hn]), _: 1 },
                  8,
                  ["to"]
                ),
                (0, r._)(
                  "button",
                  {
                    onClick:
                      e[0] ||
                      (e[0] = (...t) => i.deleteCoupon && i.deleteCoupon(...t)),
                    class: "m-4 btn btn-success",
                    href: "",
                  },
                  " Delete "
                ),
              ]),
            ])
          );
        }
        var fn = {
          name: "CouponDetailsView",
          data() {
            return { coupon: "", baseUrl: "http://localhost:8000/api/v1/" };
          },
          methods: {
            async fetchData() {
              await (0, et.Z)({
                method: "get",
                url: `${this.baseUrl}coupons/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => (this.coupon = t.data.data))
                .catch((t) => console.log(t));
            },
            async deleteCoupon() {
              await (0, et.Z)({
                method: "delete",
                url: `${this.baseUrl}coupons/${this.$route.params.id}`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(
                  setTimeout(() => {
                    this.fetchData(), this.$router.push("/coupons");
                  }, 1)
                )
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const _n = (0, Z.Z)(fn, [["render", gn]]);
        var wn = _n;
        const yn = { class: "container" },
          bn = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Add Coupon"),
              ]),
            ],
            -1
          ),
          vn = { class: "row text-center" },
          Dn = (0, r._)("div", { class: "col-3" }, null, -1),
          Cn = { class: "col-6" },
          kn = { action: "" },
          Un = { class: "form-group" },
          An = (0, r._)("label", { for: "" }, "Coupon Name", -1),
          $n = { class: "form-group" },
          xn = (0, r._)("label", { for: "" }, "Expiry Date", -1),
          In = { class: "form-group" },
          Zn = (0, r._)("label", { for: "" }, "Discount Amount", -1),
          Sn = (0, r._)("div", { class: "col-3" }, null, -1);
        function Bn(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", yn, [
              bn,
              (0, r._)("div", vn, [
                Dn,
                (0, r._)("div", Cn, [
                  (0, r._)("form", kn, [
                    (0, r._)("div", Un, [
                      An,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", $n, [
                      xn,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (n.expire = t)),
                            type: "date",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.expire]]
                      ),
                    ]),
                    (0, r._)("div", In, [
                      Zn,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (n.discount = t)),
                            type: "number",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.discount]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[3] ||
                        (e[3] = (...t) => i.addCoupon && i.addCoupon(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                Sn,
              ]),
            ])
          );
        }
        const zn = a(7218);
        var Vn = {
          name: "AddCoupon",
          data() {
            return {
              name: "",
              expire: "",
              discount: "",
              baseURL: "http://localhost:8000/api/v1/",
            };
          },
          methods: {
            async addCoupon() {
              await zn({
                method: "post",
                url: `${this.baseURL}coupons`,
                data: {
                  name: this.name,
                  expire: this.expire,
                  discount: this.discount,
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.$router.push("/coupons");
                })
                .catch((t) => {
                  console.log(t);
                });
            },
          },
        };
        const Pn = (0, Z.Z)(Vn, [["render", Bn]]);
        var Wn = Pn;
        const En = { class: "container" },
          Fn = (0, r._)(
            "div",
            { class: "row" },
            [
              (0, r._)("div", { class: "text-center my-4" }, [
                (0, r._)("h3", null, "Edit Coupon"),
              ]),
            ],
            -1
          ),
          Nn = { class: "row text-center" },
          Rn = (0, r._)("div", { class: "col-3" }, null, -1),
          On = { class: "col-6" },
          Hn = { action: "" },
          Mn = { class: "form-group" },
          Yn = (0, r._)("label", { for: "" }, "Coupon Name", -1),
          qn = { class: "form-group" },
          Tn = (0, r._)("label", { for: "" }, "Expiry Date", -1),
          Ln = { class: "form-group" },
          Qn = (0, r._)("label", { for: "" }, "Discount Amount", -1),
          jn = (0, r._)("div", { class: "col-3" }, null, -1);
        function Kn(t, e, a, s, n, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", En, [
              Fn,
              (0, r._)("div", Nn, [
                Rn,
                (0, r._)("div", On, [
                  (0, r._)("form", Hn, [
                    (0, r._)("div", Mn, [
                      Yn,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", qn, [
                      Tn,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (n.expire = t)),
                            type: "date",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.expire]]
                      ),
                    ]),
                    (0, r._)("div", Ln, [
                      Qn,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (n.discount = t)),
                            type: "number",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.discount]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[3] ||
                        (e[3] = (...t) => i.editCoupon && i.editCoupon(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary my-3",
                    }),
                  ]),
                ]),
                jn,
              ]),
            ])
          );
        }
        const Xn = a(7218);
        var Gn = {
          name: "AddCoupon",
          data() {
            return {
              name: "",
              expire: "",
              discount: "",
              baseURL: "http://localhost:8000/api/v1/",
            };
          },
          methods: {
            async editCoupon() {
              await Xn({
                method: "put",
                url: `${this.baseURL}coupons/${this.$route.params.id}`,
                data: {
                  name: this.name,
                  expire: this.expire,
                  discount: this.discount,
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.$router.push("/coupons");
                })
                .catch((t) => {
                  console.log(t);
                });
            },
          },
        };
        const Jn = (0, Z.Z)(Gn, [["render", Kn]]);
        var ti = Jn;
        const ei = { class: "container" },
          ai = { class: "form w-50 mx-auto my-5" },
          oi = (0, r._)("h1", { class: "mb-5" }, "Cash Order", -1),
          ri = { class: "form-group" },
          si = (0, r._)("label", { for: "" }, "Shipping Address", -1),
          ni = { class: "buttons d-flex justify-content-center gap-3 mt-3" };
        function ii(t, e, a, s, n, i) {
          const l = (0, r.up)("ErrorView");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)("div", ei, [
                  (0, r._)("div", ai, [
                    oi,
                    (0, r._)("div", ri, [
                      si,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.shippingAddress = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.shippingAddress]]
                      ),
                      (0, r._)("div", ni, [
                        (0, r._)(
                          "button",
                          {
                            onClick:
                              e[1] ||
                              (e[1] = (...t) =>
                                i.cashOrder && i.cashOrder(...t)),
                            class: "btn btn-primary",
                          },
                          " Create Cash Order "
                        ),
                        (0, r._)(
                          "button",
                          {
                            onClick:
                              e[2] ||
                              (e[2] = (...t) =>
                                i.createCheckout && i.createCheckout(...t)),
                            class: "btn btn-primary",
                          },
                          " Create CheckOut Session "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                (0, r.wy)(
                  (0, r.Wm)(
                    l,
                    { error: n.error, closeError: i.closeError },
                    null,
                    8,
                    ["error", "closeError"]
                  ),
                  [[o.F8, n.error]]
                ),
              ],
              64
            )
          );
        }
        const li = { class: "error" },
          ci = ["onclick"];
        function di(t, e, a, s, i, l) {
          return (0, r.wy)(
            ((0, r.wg)(),
            (0, r.iD)(
              "div",
              li,
              [
                (0, r._)("h2", null, [
                  (0, r.Uk)("Error "),
                  (0, r._)(
                    "span",
                    { class: "close", onclick: a.closeError },
                    "X",
                    8,
                    ci
                  ),
                ]),
                (0, r._)("p", null, (0, n.zw)(a.error), 1),
              ],
              512
            )),
            [[o.F8, a.error]]
          );
        }
        var ui = { name: "ErrorView", props: ["error", "closeError"] };
        const mi = (0, Z.Z)(ui, [
          ["render", di],
          ["__scopeId", "data-v-48d50733"],
        ]);
        var pi = mi,
          hi = {
            name: "CashOrderView",
            components: { ErrorView: pi },
            data() {
              return {
                shippingAddress: "",
                baseUrl: "http://localhost:8000/api/v1/",
                session: {},
                error: null,
              };
            },
            methods: {
              async cashOrder() {
                await (0, et.Z)({
                  method: "post",
                  url: `${this.baseUrl}orders/${this.$route.params.id}`,
                  data: { shippingAddress: this.shippingAddress },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then(() => {
                    console.log(this.$route.params.cartId),
                      this.$router.push("/coupons"),
                      this.$router.push("/");
                  })
                  .catch((t) => {
                    console.log(t);
                  });
              },
              async createCheckout() {
                await (0, et.Z)({
                  method: "get",
                  url: `${this.baseUrl}orders/checkout-session/${this.$route.params.id}`,
                  data: { shippingAddress: this.shippingAddress },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                  .then((t) => {
                    (this.session = t.data.data.url),
                      window.open(t.data.data.url);
                  })
                  .catch((t) => {
                    console.log(t), (this.error = t.message);
                  });
              },
              closeError() {
                this.error = null;
              },
            },
          };
        const gi = (0, Z.Z)(hi, [["render", ii]]);
        var fi = gi;
        const _i = { class: "container" },
          wi = (0, r._)("h1", { class: "my-3 text-center" }, "All Orders", -1),
          yi = (0, r._)("h3", null, "Order", -1),
          bi = (0, r._)(
            "button",
            { class: "btn btn-primary" },
            "Order Details",
            -1
          );
        function vi(t, e, a, o, s, i) {
          const l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", _i, [
              wi,
              ((0, r.wg)(!0),
              (0, r.iD)(
                r.HY,
                null,
                (0, r.Ko)(
                  s.orders,
                  (t) => (
                    (0, r.wg)(),
                    (0, r.iD)(
                      "div",
                      { key: t._id, class: "bg-white rounded px-5 py-2 mb-3" },
                      [
                        yi,
                        (0, r._)(
                          "p",
                          null,
                          "user name : " + (0, n.zw)(t.user.name),
                          1
                        ),
                        (0, r._)(
                          "p",
                          null,
                          "user email : " + (0, n.zw)(t.user.email),
                          1
                        ),
                        (0, r._)(
                          "p",
                          null,
                          "total price : " + (0, n.zw)(t.totalOrderPrice),
                          1
                        ),
                        (0, r._)(
                          "p",
                          null,
                          "payment Method Type : " +
                            (0, n.zw)(t.paymentMethodType),
                          1
                        ),
                        (0, r.Wm)(
                          l,
                          {
                            to: { name: "orderDetails", params: { id: t._id } },
                          },
                          { default: (0, r.w5)(() => [bi]), _: 2 },
                          1032,
                          ["to"]
                        ),
                      ]
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var Di = {
          name: "OrdersView",
          data() {
            return { baseUrl: "http://localhost:8000/api/v1/", orders: [] };
          },
          methods: {
            async fetchData() {
              await (0, et.Z)({
                method: "get",
                url: `${this.baseUrl}orders`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => {
                  this.orders = t.data.data;
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Ci = (0, Z.Z)(Di, [["render", vi]]);
        var ki = Ci;
        const Ui = { class: "container" },
          Ai = (0, r._)(
            "h1",
            { class: "my-3 text-center" },
            "Order Details",
            -1
          ),
          $i = { class: "bg-light px-5 py-3" },
          xi = (0, r._)("h3", null, "Order", -1),
          Ii = {
            class: "item bg-white text-black d-flex align-items-center px-5",
          },
          Zi = { class: "w-25" },
          Si = ["src"],
          Bi = { key: 1, class: "btn btn-success mt-3 me-3" },
          zi = { key: 3, class: "btn btn-success mt-3" };
        function Vi(t, e, a, o, s, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Ui, [
              Ai,
              (0, r._)("div", $i, [
                xi,
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    s.order.cartItems,
                    (t) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        {
                          key: t._id,
                          class: "border-1 text-white p-2 bg-light",
                        },
                        [
                          (0, r._)("div", Ii, [
                            (0, r._)("p", Zi, (0, n.zw)(t.product.title), 1),
                            (0, r._)(
                              "img",
                              {
                                src: t.product.imageCover,
                                alt: "",
                                width: "150",
                              },
                              null,
                              8,
                              Si
                            ),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
                (0, r._)("p", null, "user name : " + (0, n.zw)(s.user.name), 1),
                (0, r._)(
                  "p",
                  null,
                  "user email : " + (0, n.zw)(s.user.email),
                  1
                ),
                (0, r._)(
                  "p",
                  null,
                  "total price : " + (0, n.zw)(s.order.totalOrderPrice),
                  1
                ),
                (0, r._)(
                  "p",
                  null,
                  "payment Method Type : " +
                    (0, n.zw)(s.order.paymentMethodType),
                  1
                ),
                s.delivered
                  ? (0, r.kq)("", !0)
                  : ((0, r.wg)(),
                    (0, r.iD)(
                      "button",
                      {
                        key: 0,
                        onClick:
                          e[0] ||
                          (e[0] = (...t) =>
                            i.updateToDelivered && i.updateToDelivered(...t)),
                        class: "btn btn-primary mt-3 me-3",
                      },
                      " Update to Delivered "
                    )),
                s.delivered
                  ? ((0, r.wg)(), (0, r.iD)("button", Bi, " Delivered "))
                  : (0, r.kq)("", !0),
                s.paid
                  ? (0, r.kq)("", !0)
                  : ((0, r.wg)(),
                    (0, r.iD)(
                      "button",
                      {
                        key: 2,
                        onClick:
                          e[1] ||
                          (e[1] = (...t) =>
                            i.updateToPaid && i.updateToPaid(...t)),
                        class: "btn btn-primary mt-3",
                      },
                      " Update to Paid "
                    )),
                s.paid
                  ? ((0, r.wg)(), (0, r.iD)("button", zi, "Paid"))
                  : (0, r.kq)("", !0),
              ]),
            ])
          );
        }
        var Pi = {
          name: "OrderDetailsView",
          data() {
            return {
              baseUrl: "http://localhost:8000/api/v1/",
              order: {},
              user: "",
              paid: !1,
              delivered: !1,
            };
          },
          methods: {
            async fetchData() {
              await (0, et.Z)({
                method: "get",
                url: `${this.baseUrl}orders/${this.$route.params.id}/pay`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then((t) => {
                  (this.order = t.data.data),
                    (this.user = t.data.data.user),
                    (this.delivered = t.data.data.isDelivered),
                    (this.paid = t.data.data.isPaid);
                })
                .catch((t) => console.log(t));
            },
            async updateToDelivered() {
              await (0, et.Z)({
                method: "put",
                url: `${this.baseUrl}orders/${this.$route.params.id}/deliver`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.fetchData();
                })
                .catch((t) => console.log(t));
            },
            async updateToPaid() {
              await (0, et.Z)({
                method: "put",
                url: `${this.baseUrl}orders/${this.$route.params.id}/pay`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
                .then(() => {
                  this.fetchData();
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchData();
          },
        };
        const Wi = (0, Z.Z)(Pi, [["render", Vi]]);
        var Ei = Wi;
        const Fi = (t) => (
            (0, r.dD)("data-v-889384d4"), (t = t()), (0, r.Cn)(), t
          ),
          Ni = {
            class:
              "container py-5 d-flex justify-content-center align-items-center",
          },
          Ri = {
            class: "mt-5 bg-main p-5 rounded shadowed",
            action: "",
            enctype: "multipart/form-data",
          },
          Oi = Fi(() =>
            (0, r._)("h1", { class: "text-center" }, "Sign up", -1)
          ),
          Hi = { class: "form-group" },
          Mi = Fi(() => (0, r._)("label", { for: "" }, "Name", -1)),
          Yi = { class: "form-group" },
          qi = Fi(() => (0, r._)("label", { for: "" }, "Email", -1)),
          Ti = { class: "form-group" },
          Li = Fi(() => (0, r._)("label", { for: "" }, "password", -1)),
          Qi = { class: "form-group" },
          ji = Fi(() => (0, r._)("label", { for: "" }, "password confirm", -1));
        function Ki(t, e, a, s, n, i) {
          const l = (0, r.up)("ErrorView");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)("div", Ni, [
                  (0, r._)("form", Ri, [
                    Oi,
                    (0, r._)("div", Hi, [
                      Mi,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.name = t)),
                            type: "text",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.name]]
                      ),
                    ]),
                    (0, r._)("div", Yi, [
                      qi,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (n.email = t)),
                            type: "email",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.email]]
                      ),
                    ]),
                    (0, r._)("div", Ti, [
                      Li,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[2] || (e[2] = (t) => (n.password = t)),
                            type: "password",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.password]]
                      ),
                    ]),
                    (0, r._)("div", Qi, [
                      ji,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[3] || (e[3] = (t) => (n.passwordConfirm = t)),
                            type: "password",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.passwordConfirm]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[4] || (e[4] = (...t) => i.signup && i.signup(...t)),
                      type: "button",
                      value: "Submit",
                      class: "btn btn-primary mt-3 d-block mx-auto",
                    }),
                  ]),
                ]),
                (0, r.wy)(
                  (0, r.Wm)(
                    l,
                    { error: n.error, closeError: i.closeError },
                    null,
                    8,
                    ["error", "closeError"]
                  ),
                  [[o.F8, n.error]]
                ),
              ],
              64
            )
          );
        }
        var Xi = {
          name: "SignUp",
          components: { ErrorView: pi },
          data() {
            return {
              name: "",
              email: "",
              password: "",
              passwordConfirm: "",
              url: "https://gawasastore.onrender.com/api/v1/",
              error: null,
            };
          },
          methods: {
            async signup() {
              await et.Z.post(`${this.url}auth/signup`, {
                name: this.name,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
              })
                .then((t) => {
                  this.$router.push("/");
                })
                .catch((t) => {
                  (this.error = t.message), console.log(t);
                });
            },
            closeError() {
              this.error = null;
            },
          },
        };
        const Gi = (0, Z.Z)(Xi, [
          ["render", Ki],
          ["__scopeId", "data-v-889384d4"],
        ]);
        var Ji = Gi;
        const tl = { class: "container py-5 d-flex justify-content-center" },
          el = {
            class: "mt-5 bg-main p-5 rounded shadowed",
            action: "",
            enctype: "multipart/form-data",
          },
          al = (0, r._)("h1", { class: "text-center" }, "Sign in", -1),
          ol = { class: "form-group mb-1" },
          rl = (0, r._)("label", { for: "" }, "Email", -1),
          sl = { class: "form-group" },
          nl = (0, r._)("label", { for: "" }, "password", -1),
          il = { class: "mt-4" };
        function ll(t, e, a, s, n, i) {
          const l = (0, r.up)("router-link"),
            c = (0, r.up)("ErrorView");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)("div", tl, [
                  (0, r._)("form", el, [
                    al,
                    (0, r._)("div", ol, [
                      rl,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (t) => (n.email = t)),
                            type: "email",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.email]]
                      ),
                    ]),
                    (0, r._)("div", sl, [
                      nl,
                      (0, r.wy)(
                        (0, r._)(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (t) => (n.password = t)),
                            type: "password",
                            name: "",
                            id: "",
                            class: "form-control",
                          },
                          null,
                          512
                        ),
                        [[o.nr, n.password]]
                      ),
                    ]),
                    (0, r._)("input", {
                      onClick:
                        e[2] || (e[2] = (...t) => i.signin && i.signin(...t)),
                      type: "button",
                      value: "Log in",
                      class: "btn btn-primary mt-3 d-block mx-auto",
                    }),
                    (0, r._)("p", il, [
                      (0, r.Uk)(" Have not you an account? "),
                      (0, r.Wm)(
                        l,
                        { to: "/signup" },
                        {
                          default: (0, r.w5)(() => [(0, r.Uk)("Sign up")]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                ]),
                (0, r.wy)(
                  (0, r.Wm)(
                    c,
                    { error: n.error, closeError: i.closeError },
                    null,
                    8,
                    ["error", "closeError"]
                  ),
                  [[o.F8, n.error]]
                ),
              ],
              64
            )
          );
        }
        var cl = {
          name: "SignIn",
          components: { ErrorView: pi },
          data() {
            return {
              email: "",
              password: "",
              url: "https://gawasastore.onrender.com/api/v1/",
              error: null,
            };
          },
          methods: {
            async signin() {
              await et.Z.post(`${this.url}auth/signin`, {
                email: this.email,
                password: this.password,
              })
                .then((t) => {
                  console.log(t.data.token),
                    localStorage.setItem("token", t.data.token),
                    this.$router.replace("/"),
                    this.$emit("getMyInfo");
                })
                .catch((t) => {
                  (this.error = t.message), console.log(t);
                });
            },
            closeError() {
              this.error = null;
            },
          },
          emits: ["getMyInfo"],
        };
        const dl = (0, Z.Z)(cl, [["render", ll]]);
        var ul = dl;
        function ml(t, e, a, o, s, n) {
          return (0, r.wg)(), (0, r.iD)("h1", null, "404: Not Found Page");
        }
        var pl = { name: "NotFoundPage" };
        const hl = (0, Z.Z)(pl, [["render", ml]]);
        var gl = hl;
        const fl = [
            {
              path: "/",
              name: "home",
              component: Zt,
              meta: { title: "Homepage", description: "this is homepage" },
            },
            { path: "/:pathMatch(.*)*", name: "notfound", component: Mt },
            { path: "/about", name: "about", component: Yt["default"] },
            { path: "/admin", name: "admin", component: Ft },
            { path: "/categories", name: "categories", component: de },
            {
              path: "/admin/categories",
              name: "admincategories",
              component: de,
            },
            { path: "/categories/add", name: "addCategory", component: Ae },
            {
              path: "/categories/Edit/:id",
              name: "EditCategory",
              component: He,
            },
            { path: "/categories/:id", name: "CategoryDetails", component: Ge },
            { path: "/subcategories", name: "subcategories", component: ca },
            {
              path: "/subcategories/add",
              name: "addSubcategory",
              component: Aa,
            },
            {
              path: "/subcategories/Edit/:id",
              name: "editSubcategory",
              component: Ma,
            },
            {
              path: "/subcategories/:id",
              name: "subategoryDetails",
              component: ja,
            },
            { path: "/brands", name: "brands", component: co },
            { path: "/brands/add", name: "addBrand", component: zo },
            { path: "/brands/:id", name: "brandDetails", component: _o },
            { path: "/brands/:id", name: "editBrand", component: jo },
            { path: "/products", name: "products", component: rr },
            { path: "/admin/products", name: "adminproducts", component: rr },
            { path: "/products/add", name: "addProduct", component: Yr },
            { path: "/products/:id", name: "productDetails", component: _r },
            { path: "/products/:id", name: "editProduct", component: ys },
            { path: "/wishlist", name: "wishlist", component: Zs },
            { path: "/coupons", name: "coupons", component: un },
            { path: "/coupons/:id", name: "couponDetails", component: wn },
            { path: "/coupons/add", name: "addCoupon", component: Wn },
            { path: "/coupons/:id/edit", name: "editCoupon", component: ti },
            { path: "/cart", name: "cart", component: Js },
            { path: "/orders/:id", name: "cashOrder", component: fi },
            { path: "/orders", name: "ordersView", component: ki },
            {
              path: "/orders/details/:id",
              name: "orderDetails",
              component: Ei,
            },
            { path: "/*", component: gl },
            { path: "/signup", name: "signUp", component: Ji },
            { path: "/signin", name: "signIn", component: ul },
            {
              path: "/about",
              name: "about",
              component: () => Promise.resolve().then(a.bind(a, 6737)),
            },
          ],
          _l = (0, st.p7)({ history: (0, st.PO)("/"), routes: fl });
        var wl = _l,
          yl = a(3494),
          bl = a(8539),
          vl = a(4551),
          Dl = a(7749);
        a(5654);
        yl.vI.add(
          bl.j1w,
          vl.neY,
          vl.opf,
          vl.mdU,
          bl.Tab,
          bl.ILF,
          bl.m6i,
          bl.sq$,
          vl.VHX
        ),
          (0, o.ri)(rt)
            .use(wl)
            .component("font-awesome-icon", Dl.GN)
            .mount("#app");
      },
      6615: function (t, e, a) {
        var o = a(4161);
        const r = {
          data() {
            return {
              categories: null,
              baseUrl: "https://gawasastore.onrender.com/api/v1/",
            };
          },
          methods: {
            async fetchCategories() {
              await o.Z.get(`${this.baseUrl}categories`)
                .then((t) => (this.categories = t.data.data))
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchCategories();
          },
        };
        e.Z = r;
      },
      1577: function (t, e, a) {
        var o = a(4161);
        const r = {
          data() {
            return {
              products: null,
              baseUrl: "https://gawasastore.onrender.com/api/v1/",
            };
          },
          methods: {
            async fetchProducts() {
              await o.Z.get(`${this.baseUrl}products`)
                .then((t) => {
                  this.products = t.data.data;
                })
                .catch((t) => console.log(t));
            },
          },
          mounted() {
            this.fetchProducts();
          },
        };
        e.Z = r;
      },
      6737: function (t, e, a) {
        a.r(e),
          a.d(e, {
            default: function () {
              return p;
            },
          });
        var o = a(3396),
          r = a(7139);
        const s = { class: "about" },
          n = (0, o._)("h1", null, "This is an about page", -1);
        function i(t, e, a, i, l, c) {
          return (
            (0, o.wg)(),
            (0, o.iD)("div", s, [
              n,
              (0, o.Uk)(
                " " + (0, r.zw)(t.categories) + " " + (0, r.zw)(t.products),
                1
              ),
            ])
          );
        }
        var l = a(6615),
          c = a(1577),
          d = { name: "AboutView", mixins: [l.Z, c.Z] },
          u = a(89);
        const m = (0, u.Z)(d, [["render", i]]);
        var p = m;
      },
    },
    e = {};
  function a(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var s = (e[o] = { exports: {} });
    return t[o].call(s.exports, s, s.exports, a), s.exports;
  }
  (a.m = t),
    (function () {
      var t = [];
      a.O = function (e, o, r, s) {
        if (!o) {
          var n = 1 / 0;
          for (d = 0; d < t.length; d++) {
            (o = t[d][0]), (r = t[d][1]), (s = t[d][2]);
            for (var i = !0, l = 0; l < o.length; l++)
              (!1 & s || n >= s) &&
              Object.keys(a.O).every(function (t) {
                return a.O[t](o[l]);
              })
                ? o.splice(l--, 1)
                : ((i = !1), s < n && (n = s));
            if (i) {
              t.splice(d--, 1);
              var c = r();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        s = s || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > s; d--) t[d] = t[d - 1];
        t[d] = [o, r, s];
      };
    })(),
    (function () {
      a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, { a: e }), e;
      };
    })(),
    (function () {
      a.d = function (t, e) {
        for (var o in e)
          a.o(e, o) &&
            !a.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      a.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      a.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, o) {
          var r,
            s,
            n = o[0],
            i = o[1],
            l = o[2],
            c = 0;
          if (
            n.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (r in i) a.o(i, r) && (a.m[r] = i[r]);
            if (l) var d = l(a);
          }
          for (e && e(o); c < n.length; c++)
            (s = n[c]), a.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          return a.O(d);
        },
        o = (self["webpackChunkvue_shop"] = self["webpackChunkvue_shop"] || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var o = a.O(void 0, [998], function () {
    return a(1313);
  });
  o = a.O(o);
})();
//# sourceMappingURL=app.8fc5d072.js.map
