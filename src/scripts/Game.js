__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(
  __webpack_exports__,
  "default",
  function () {
    return Game;
  }
);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__(
    /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"
  );
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default =
  /*#__PURE__*/ __webpack_require__.n(
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
  );
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ =
  __webpack_require__(
    /*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js"
  );
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default =
  /*#__PURE__*/ __webpack_require__.n(
    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__
  );
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ =
  __webpack_require__(
    /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"
  );
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default =
  /*#__PURE__*/ __webpack_require__.n(
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
  );
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ =
  __webpack_require__(
    /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"
  );
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default =
  /*#__PURE__*/ __webpack_require__.n(
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
  );
/* harmony import */ var _cards_arr__WEBPACK_IMPORTED_MODULE_4__ =
  __webpack_require__(/*! ./cards-arr */ "./js/cards-arr.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_5__ =
  __webpack_require__(/*! ./Cards */ "./js/Cards.js");
/* harmony import */ var _observers_switchObserver__WEBPACK_IMPORTED_MODULE_6__ =
  __webpack_require__(
    /*! ./observers/switchObserver */ "./js/observers/switchObserver.js"
  );
/* harmony import */ var _observers_menuObserver__WEBPACK_IMPORTED_MODULE_7__ =
  __webpack_require__(
    /*! ./observers/menuObserver */ "./js/observers/menuObserver.js"
  );

var create = function create() {
  var cards = document.querySelector(".cards");
  cards.innerHTML = "";
  var allCards = new _Cards__WEBPACK_IMPORTED_MODULE_5__["default"](
    _cards_arr__WEBPACK_IMPORTED_MODULE_4__["default"]
  );
  allCards.createCardCategory();
  allCards.createCards();
  var category = document.querySelectorAll(".condition");
  category.forEach(function (el) {
    el.classList.toggle("purple");
  });
};

var audioPlay = function audioPlay(link) {
  var audio = new Audio(link);
  audio.play();
};

var audioPlayNO = function audioPlayNO() {
  var audio = new Audio("assets/audio/no.mp3");
  audio.play();
};

var audioPlayYes = function audioPlayYes() {
  var audio = new Audio("assets/audio/yes.mp3");
  audio.play();
};

var audioPlayGood = function audioPlayGood() {
  var audio = new Audio("assets/audio/exellent.mp3");
  audio.play();
};

var audioPlayBad = function audioPlayBad() {
  var audio = new Audio("assets/audio/bad.mp3");
  audio.play();
};

var Game = /*#__PURE__*/ (function () {
  function Game() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
      this,
      Game
    );

    this.obj = _cards_arr__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.isTrain =
      _observers_switchObserver__WEBPACK_IMPORTED_MODULE_6__[
        "default"
      ].getStatus();
    this.addObserver();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
    Game,
    [
      {
        key: "pushButton",
        value: function pushButton() {
          this.button = document.querySelector(".button-start");

          if (this.button) {
            this.bindHandler = this.startHandler.bind(this);
            this.button.addEventListener("click", this.bindHandler);
          }
        },
      },
      {
        key: "repeatButton",
        value: function repeatButton() {
          this.button.classList.add("button-repeat");
          this.circle = document.querySelector(".circle");
          this.circle.classList.add("circle-repeat");
          this.circle.innerHTML = "";
          this.circle.innerHTML =
            '<img src="assets/img/arrow-repeat.svg" class="repeat-but">';
          this.text = document.querySelector(".button-text");
          this.text.innerText = "";
          this.circle.classList.add("circle-rep");
        },
      },
      {
        key: "startHandler",
        value: function startHandler() {
          this.startGame();
          this.repeatButton();
        },
      },
      {
        key: "repeatListener",
        value: function repeatListener() {
          var _this = this;

          this.button.addEventListener("click", function () {
            audioPlay(_this.card.value.audioSrc);
          });
        },
      },
      {
        key: "startGame",
        value: function startGame() {
          this.button.removeEventListener("click", this.bindHandler);
          this.repeatListener();
          this.menuLinks =
            _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(
              document.querySelectorAll(".menu-link")
            );
          this.number = this.menuLinks
            .find(function (item) {
              return item.classList.contains("active-link");
            })
            .getAttribute("number");
          this.arr =
            _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(
              this.obj[1][this.number]
            );
          this.arr.sort(function () {
            return Math.random() - 0.5;
          });
          this.pushCard();
        },
      },
      {
        key: "start",
        value:
          /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
            function start() {
              var i;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                function start$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        i = 0;

                      case 1:
                        if (!(i < this.arr.length)) {
                          _context.next = 7;
                          break;
                        }

                        _context.next = 4;
                        return this.arr[i];

                      case 4:
                        i += 1;
                        _context.next = 1;
                        break;

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                start,
                this
              );
            }
          ),
      },
      {
        key: "pushCard",
        value: function pushCard() {
          this.arrRes = [];
          this.gen = this.start();
          this.card = this.gen.next();
          audioPlay(this.card.value.audioSrc);
          this.cards = document.querySelector(".cards");
          this.addHearts();
          this.gameHandlerFn = this.gameHandler.bind(this);
          this.cards.addEventListener("click", this.gameHandlerFn);
        },
      },
      {
        key: "gameHandler",
        value: function gameHandler(e) {
          if (!this.card.done) {
            var cardTarget = e.target.closest(".card");
            if (cardTarget) this.img = cardTarget.querySelector(".img-card");

            if (cardTarget && !this.img.classList.contains("inactive")) {
              this.isTrain =
                _observers_switchObserver__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].getStatus();

              if (
                this.card.value.id === +cardTarget.getAttribute("id") &&
                this.isTrain === false
              ) {
                audioPlayYes();
                this.img.classList.add("inactive");
                this.card = this.gen.next();
                this.heartsContainer.insertAdjacentHTML(
                  "afterbegin",
                  '<img class="heart" src="assets/img/heart-red.svg"></img>'
                );
                if (!this.card.done) audioPlay(this.card.value.audioSrc);
                else {
                  this.cards.innerHTML = "";

                  if (this.cards.classList.contains("bad")) {
                    audioPlayBad();
                    this.cards.innerHTML =
                      '\n              <div class="exellent-container"><img src="assets/img/bad.svg" alt="" class="exellent"></div>';
                    this.addResult();
                    setTimeout(create, 4500);
                    this.modeHandler();
                  } else {
                    audioPlayGood();
                    this.cards.innerHTML =
                      '\n              <div class="exellent-container"><img src="assets/img/exellent.svg" alt="" class="exellent"></div>';
                    setTimeout(create, 4500);
                    this.modeHandler();
                  }
                }
              } else {
                this.arrRes.push("0");
                audioPlayNO();
                this.heartsContainer.insertAdjacentHTML(
                  "afterbegin",
                  '<img class="heart" src="assets/img/heart-grey.svg"></img>'
                );
                this.cards.classList.add("bad");
              }
            }
          }
        },
      },
      {
        key: "addHearts",
        value: function addHearts() {
          this.heartsContainer = document.createElement("div");
          this.heartsContainer.classList.add("heart-container");
          document.querySelector(".start").after(this.heartsContainer);
        },
      },
      {
        key: "addResult",
        value: function addResult() {
          this.result = document.createElement("div");
          this.result.classList.add("result");
          this.result.innerHTML = "".concat(this.arrRes.length, " mistakes");
          document.querySelector(".exellent-container").append(this.result);
        },
      },
      {
        key: "addObserver",
        value: function addObserver() {
          this.fnMenu = this.modeHandler.bind(this);
          _observers_menuObserver__WEBPACK_IMPORTED_MODULE_7__[
            "default"
          ].subscribe(this.fnMenu);
          this.fnSwitch = this.switchHandler.bind(this);
          _observers_switchObserver__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].subscribe(this.fnSwitch);
        },
      },
      {
        key: "modeHandler",
        value: function modeHandler() {
          if (this.cards)
            this.cards.removeEventListener("click", this.gameHandlerFn);
          if (this.heartsContainer) this.heartsContainer.innerHTML = "";
          _observers_menuObserver__WEBPACK_IMPORTED_MODULE_7__[
            "default"
          ].unsubscribe(this.fnMenu);
          _observers_switchObserver__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].unsubscribe(this.fnSwitch);
          delete this;
        },
      },
      {
        key: "switchHandler",
        value: function switchHandler(isTrain) {
          if (isTrain) {
            var imgCards = document.querySelectorAll(".img-card");
            imgCards.forEach(function (card) {
              card.classList.remove("inactive");
            });
            this.modeHandler();
          }
        },
      },
    ]
  );

  return Game;
})();
