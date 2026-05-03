import {
  init_testing as init_testing2,
  provideFakePlatformNavigation
} from "./chunk-P7R2VAFB.js";
import {
  BrowserModule,
  init_browser_chunk,
  init_common,
  platformBrowser
} from "./chunk-QT67HBTK.js";
import {
  APP_ID,
  DOCUMENT,
  FactoryTarget,
  Inject,
  Injectable,
  NgModule,
  TestComponentRenderer,
  __decorateElement,
  __decoratorStart,
  __runInitializers,
  core_exports,
  createPlatformFactory,
  getDOM,
  getTestBed,
  init_core,
  init_testing,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-X225SWGN.js";

// angular:test-bed-init:angular:test-bed-init
init_core();
init_testing();

// node_modules/@angular/platform-browser/fesm2022/testing.mjs
init_testing2();
init_core();
init_core();
init_testing();
init_common();
init_browser_chunk();
/**
 * @license Angular v21.2.11
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var DOMTestComponentRenderer = class _DOMTestComponentRenderer extends TestComponentRenderer {
  _doc;
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  insertRootElement(rootElId, tagName = "div") {
    this.removeAllRootElementsImpl();
    const rootElement = getDOM().getDefaultDocument().createElement(tagName);
    rootElement.setAttribute("id", rootElId);
    this._doc.body.appendChild(rootElement);
  }
  removeAllRootElements() {
    if (typeof this._doc.querySelectorAll === "function") {
      this.removeAllRootElementsImpl();
    }
  }
  removeAllRootElementsImpl() {
    const oldRoots = this._doc.querySelectorAll("[id^=root]");
    for (let i = 0; i < oldRoots.length; i++) {
      getDOM().remove(oldRoots[i]);
    }
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.2.11",
    ngImport: core_exports,
    type: _DOMTestComponentRenderer,
    deps: [{
      token: DOCUMENT
    }],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "21.2.11",
    ngImport: core_exports,
    type: _DOMTestComponentRenderer
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.2.11",
  ngImport: core_exports,
  type: DOMTestComponentRenderer,
  decorators: [{
    type: Injectable
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var platformBrowserTesting = createPlatformFactory(platformBrowser, "browserTesting");
var BrowserTestingModule = class _BrowserTestingModule {
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.2.11",
    ngImport: core_exports,
    type: _BrowserTestingModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static \u0275mod = \u0275\u0275ngDeclareNgModule({
    minVersion: "14.0.0",
    version: "21.2.11",
    ngImport: core_exports,
    type: _BrowserTestingModule,
    exports: [BrowserModule]
  });
  static \u0275inj = \u0275\u0275ngDeclareInjector({
    minVersion: "12.0.0",
    version: "21.2.11",
    ngImport: core_exports,
    type: _BrowserTestingModule,
    providers: [{
      provide: APP_ID,
      useValue: "a"
    }, provideFakePlatformNavigation(), {
      provide: TestComponentRenderer,
      useClass: DOMTestComponentRenderer
    }],
    imports: [BrowserModule]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.2.11",
  ngImport: core_exports,
  type: BrowserTestingModule,
  decorators: [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: [{
        provide: APP_ID,
        useValue: "a"
      }, provideFakePlatformNavigation(), {
        provide: TestComponentRenderer,
        useClass: DOMTestComponentRenderer
      }]
    }]
  }]
});

// angular:test-bed-init:angular:test-bed-init
var _TestModule_decorators, _init;
_TestModule_decorators = [NgModule({ providers: [] })];
var TestModule = class {
};
_init = __decoratorStart(null);
TestModule = __decorateElement(_init, 0, "TestModule", _TestModule_decorators, TestModule);
__runInitializers(_init, 1, TestModule);
getTestBed().initTestEnvironment([BrowserTestingModule, TestModule], platformBrowserTesting(), {
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true
});
export {
  TestModule
};
//# sourceMappingURL=test_main.js.map
