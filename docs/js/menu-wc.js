'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">chatSC documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddFriendPageModule.html" data-type="entity-link">AddFriendPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddFriendPageModule-60657904edc93dd9e49ceffae912b81b"' : 'data-target="#xs-components-links-module-AddFriendPageModule-60657904edc93dd9e49ceffae912b81b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddFriendPageModule-60657904edc93dd9e49ceffae912b81b"' :
                                            'id="xs-components-links-module-AddFriendPageModule-60657904edc93dd9e49ceffae912b81b"' }>
                                            <li class="link">
                                                <a href="components/AddFriendPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddFriendPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' : 'data-target="#xs-components-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' :
                                            'id="xs-components-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' }>
                                            <li class="link">
                                                <a href="components/AddFriendPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddFriendPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatMorsePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatMorsePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LostpasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LostpasswordPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyApp.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyApp</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' : 'data-target="#xs-injectables-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' :
                                        'id="xs-injectables-links-module-AppModule-7f9c147c2e09763605b33fe46b0dba10"' }>
                                        <li class="link">
                                            <a href="injectables/ChangePasswordProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChangePasswordProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MorseProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MorseProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegisterProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RegisterProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VibrationProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VibrationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatdbPageModule.html" data-type="entity-link">ChatdbPageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChatPageModule.html" data-type="entity-link">ChatPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatPageModule-800827037244a306754ea66f009f8598"' : 'data-target="#xs-components-links-module-ChatPageModule-800827037244a306754ea66f009f8598"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatPageModule-800827037244a306754ea66f009f8598"' :
                                            'id="xs-components-links-module-ChatPageModule-800827037244a306754ea66f009f8598"' }>
                                            <li class="link">
                                                <a href="components/ChatPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' : 'data-target="#xs-components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' :
                                            'id="xs-components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LostpasswordPageModule.html" data-type="entity-link">LostpasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LostpasswordPageModule-0669ab6cf95aa2d35bcf4b992f077642"' : 'data-target="#xs-components-links-module-LostpasswordPageModule-0669ab6cf95aa2d35bcf4b992f077642"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LostpasswordPageModule-0669ab6cf95aa2d35bcf4b992f077642"' :
                                            'id="xs-components-links-module-LostpasswordPageModule-0669ab6cf95aa2d35bcf4b992f077642"' }>
                                            <li class="link">
                                                <a href="components/LostpasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LostpasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-1f2dca54ff44598ed5b43ea3d45c9331"' : 'data-target="#xs-components-links-module-ProfilePageModule-1f2dca54ff44598ed5b43ea3d45c9331"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-1f2dca54ff44598ed5b43ea3d45c9331"' :
                                            'id="xs-components-links-module-ProfilePageModule-1f2dca54ff44598ed5b43ea3d45c9331"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link">RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-887e8368b1615913d0fe7ba97c8ea475"' : 'data-target="#xs-components-links-module-RegisterPageModule-887e8368b1615913d0fe7ba97c8ea475"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-887e8368b1615913d0fe7ba97c8ea475"' :
                                            'id="xs-components-links-module-RegisterPageModule-887e8368b1615913d0fe7ba97c8ea475"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});