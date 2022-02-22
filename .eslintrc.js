@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800&display=swap");
.accordion {
  position: relative;
  margin-bottom: 330px;
}
.accordion:hover {
  cursor: pointer;
}
.accordion__selected {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px var(--spacer-m);
  height: 50px;
  border: 2px solid var(--color-gray--blue);
  font-size: 13px;
  font-weight: 800;
}
.accordion__dropdown {
  display: block;
  position: absolute;
  height: 0px;
  overflow-y: auto;
  top: 74px;
  padding: var(--spacer-s);
  border: 2px solid var(--color-gray--blue);
  background-color: var(--color-white);
  width: 100%;
  z-index: 5;
  cursor: default;
  opacity: 0;
  transition: height 0.2s, opacity 0.3s;
}
.accordion__dropdown::-webkit-scrollbar {
  width: 11px;
}
.accordion__dropdown {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}
.accordion__dropdown::-webkit-scrollbar-track {
  background: #CFD8DC;
}
.accordion__dropdown::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}
.accordion__option {
  display: flex;
  align-items: center;
  padding: 0px var(--spacer-m);
  height: 50px;
  border: 2px solid var(--color-gray--blue);
  font-weight: 800;
  font-size: 13px;
}
.accordion__option:hover {
  cursor: pointer;
  border-color: var(--color-tertiary);
  color: var(--color-tertiary);
}
.accordion__option:not(:last-child) {
  margin-bottom: var(--spacer-s);
}
.accordion__add {
  border-style: dashed;
  justify-content: center;
  align-items: center;
}
.accordion__add i, .accordion__add p {
  display: inline-block;
  margin: 0 10px;
}
.accordion__add i, .accordion__add svg {
  font-size: 20px;
}
.accordion__option--current {
  border-color: var(--color-tertiary);
  color: var(--color-tertiary);
}
.accordion svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: var(--spacer-m);
}

#accordion {
  position: absolute;
  display: none;
}
#accordion:checked ~ .accordion__dropdown {
  display: block;
  height: 281px;
  opacity: 1;
}

.alert {
  position: relative;
  min-height: 0px;
  height: 0px;
  min-width: 300px;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: var(--spacer-m);
  padding-right: 50px;
  border-radius: var(--spacer-xs);
  border-top: 1px solid var(--color-success);
  background-color: white;
  color: var(--card-background);
  z-index: 9;
  box-shadow: 0px 0px 40px -20px rgba(var(--color-success), 1);
  transform: translateX(200%) scale(0);
  visibility: hidden;
  display: none;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.alert.alert--open {
  display: flex;
  transform: translateX(0%) scale(1);
  min-height: 64px;
  height: auto;
  visibility: visible;
}
.alert:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: 0px;
  top: 10px;
  width: 100px;
  height: 100px;
  z-index: 1;
  filter: blur(10px);
  background-color: rgba(var(--color-success), 0.04);
  box-shadow: 0px 0px 40px -20px rgba(var(--color-success), 0.7);
}
.alert .alert__close {
  position: absolute;
  right: var(--spacer-s);
  top: var(--spacer-s);
  background-color: transparent;
  font-size: 12px;
  line-height: 1;
  border: none;
  width: 18px;
  height: 18px;
  color: var(--color-secondary);
}
.alert .alert__close i, .alert .alert__close svg {
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
}
.alert .alert__icon {
  color: var(--color-success);
  margin-right: var(--spacer-m);
}
.alert .alert__text .alert__title {
  font-size: 18px;
  font-weight: 600;
}
.alert .alert__text .alert__description {
  font-size: 14px;
  font-weight: 200;
}
.alert.alert--warning {
  border-top: 1px solid var(--color-warning);
  box-shadow: 0px 0px 40px -20px rgba(var(--color-warning), 1);
}
.alert.alert--warning .alert__icon {
  color: var(--color-warning);
}
.alert.alert--warning:before {
  background-color: rgba(var(--color-warning), 0.04);
  box-shadow: 0px 0px 40px -20px rgba(var(--color-warning), 0.7);
}
.alert.alert--error {
  border-top: 1px solid var(--color-danger);
  box-shadow: 0px 0px 40px -20px rgba(var(--color-danger), 1);
}
.alert.alert--error .alert__icon {
  color: var(--color-danger);
}
.alert.alert--error:before {
  background-color: rgba(var(--color-danger), 0.04);
  box-shadow: 0px 0px 40px -20px rgba(var(--color-danger), 0.7);
}

.alert-container {
  position: fixed;
  bottom: var(--spacer-xl);
  right: var(--spacer-xl);
  display: flex;
  flex-direction: column;
  width: auto;
  z-index: 100;
}

.darkmode .alert {
  background-color: rgba(var(--color-gray), 1);
  color: var(--color-white);
}
.darkmode .alert .alert__close {
  color: var(--color-white);
}

.sumadi-audio-player {
  width: 100%;
}
.sumadi-audio-player .rhap_container {
  width: 100%;
  background: transparent;
  border-radius: 8px;
  padding: 8px;
  border: none;
  box-shadow: 2px 2px 0px 1px var(--color-tertiary);
}
.sumadi-audio-player .rhap_container .rhap_main {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_time {
  width: auto;
  order: 2;
  margin: 0px 8px;
  font-size: 12px;
  color: var(--color-gray);
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_current-time {
  margin: 0px 8px;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container {
  order: 1;
  width: calc(100% - 16px);
  margin: 0px 8px;
  height: 8px;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container .rhap_progress-bar {
  height: 8px;
  border-radius: 4px;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container .rhap_progress-bar.rhap_progress-bar-show-download {
  background: var(--color-tertiary--dark);
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container .rhap_progress-bar .rhap_progress-indicator {
  margin: 0px;
  height: 16px;
  width: 0px;
  top: 0px;
  border-radius: 4px;
  background: var(--color-tertiary--dark);
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container .rhap_progress-bar .rhap_download-progress {
  background: var(--color-tertiary--dark);
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_progress-section .rhap_progress-container .rhap_progress-bar .rhap_progress-filled {
  background: var(--color-tertiary--dark);
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section {
  flex-grow: 0;
  margin: 0px;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_additional-controls, .sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_volume-controls {
  display: none;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_main-controls .rhap_rewind-button, .sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_main-controls .rhap_forward-button {
  display: none;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_main-controls .rhap_play-pause-button {
  color: var(--color-tertiary--dark);
  background: transparent;
  border: none;
  font-size: 32px;
  line-height: 1;
  width: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
}
.sumadi-audio-player .rhap_container .rhap_main .rhap_controls-section .rhap_main-controls .rhap_play-pause-button svg {
  vertical-align: top;
}

.avatar__initials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60px;
  height: 34.64px;
  color: var(--color-white);
  background-color: var(--color-secondary);
  margin: 0 auto var(--spacer-m) auto;
  border-left: solid 6px var(--color-white);
  border-right: solid 6px var(--color-white);
}
.avatar__initials:before, .avatar__initials:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 42.43px;
  height: 42.43px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 2.7868px;
}
.avatar__initials:before {
  top: -21.2132px;
  border-top: solid 8.4853px var(--color-white);
  border-right: solid 8.4853px var(--color-white);
}
.avatar__initials:after {
  bottom: -21.2132px;
  border-bottom: solid 8.4853px var(--color-white);
  border-left: solid 8.4853px var(--color-white);
}
.avatar__initials span {
  display: block;
  position: relative;
  z-index: 2;
  font-size: var(--text-l);
  font-weight: 700;
  text-transform: uppercase;
}

.avatar__name {
  font-weight: 700;
  display: block;
  font-size: var(--text-s);
  color: var(--color-white);
  margin-bottom: var(--spacer-s);
}

.bank__label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px var(--spacer-m);
  height: 50px;
  border: 2px solid var(--color-gray--light);
  font-size: 13px;
  font-weight: 800;
}
.bank .bank__icons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: var(--spacer-m);
  font-size: 20px;
  color: var(--color-gray);
}
.bank .bank__icons i:hover {
  cursor: pointer;
}
.bank .bank__icons i:not(:first-child) {
  margin-left: var(--spacer-m);
}
.bank__option--add .bank__label {
  border-style: dashed;
  justify-content: center;
  align-items: center;
}
.bank__option--add .bank__icons {
  display: inline-block;
  position: static;
}
.bank__option--add i, .bank__option--add svg {
  font-size: 20px;
  margin-right: var(--spacer-s);
}
.bank__option--add p {
  margin: 0px;
}
.bank .bank__editor {
  position: relative;
  background-color: var(--color-gray--light);
  border-radius: 5px;
  height: 0px;
  opacity: 0;
  padding: 0px;
  margin-bottom: 0px;
  transition: 0.2s height, 0.2s opacity, 0.2s padding;
}
.bank .bank__editor .editor__footer {
  margin-top: var(--spacer-m);
  display: flex;
  align-items: center;
}
.bank .bank__editor .editor__footer p {
  margin: 0px;
  margin-right: var(--spacer-m);
}
.bank .bank__editor .editor__footer p, .bank .bank__editor .editor__footer .ch-theme {
  display: block;
}
.bank__save {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.bank__save .button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
}
.bank__save .button:not(:first-child) {
  margin-left: var(--spacer-m);
}
.bank__save .button--primary {
  color: var(--color-white);
  border: none;
}
.bank__input {
  display: block;
  height: 50px;
  width: 100%;
  font-size: 13px;
  font-weight: 800;
}
.bank__toggle {
  display: inline-flex;
  align-items: center;
  width: 50%;
  height: 50px;
}

.modal-option {
  position: absolute;
  display: none;
}
.modal-option:checked ~ .bank__editor {
  display: block;
  min-height: 150px;
  height: auto;
  opacity: 1;
  padding: var(--spacer-m);
  margin-bottom: 0.5rem;
}

.form-option-list-body {
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;
}
.form-option-list-body::-webkit-scrollbar {
  width: 11px;
}
.form-option-list-body {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}
.form-option-list-body::-webkit-scrollbar-track {
  background: #CFD8DC;
}
.form-option-list-body::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}

.breadcrumbs {
  display: flex;
}
.breadcrumbs a {
  text-transform: uppercase;
  margin-bottom: var(--spacer-2xs);
  color: var(--color-gray--darker);
  font-size: var(--text-s);
  font-weight: 400;
}

.darkmode .breadcrumbs a {
  color: var(--color-white);
}

.block--data svg, .block--data i {
  margin-right: var(--spacer-xs);
  color: var(--color-gray);
}
.block--data h4 {
  margin-top: var(--spacer-2xs);
}

.block--data-icon i, .block--data-icon svg {
  margin-right: var(--spacer-xs);
  font-size: 24px;
  margin-left: var(--spacer-xs);
  color: var(--color-gray);
}
.block--data-icon .subtitle__icon {
  display: block;
}
.block--data-icon .subtitle__icon ~ h4 {
  display: inline-block;
}
.block--data-icon h4 {
  margin-top: var(--spacer-2xs);
}
.block--data-icon i, .block--data-icon svg {
  margin-left: var(--spacer-2xs);
}
.block--data-icon.block--success svg, .block--data-icon.block--success i {
  color: var(--color-success);
}
.block--data-icon.block--warning svg, .block--data-icon.block--warning i {
  color: var(--color-warning);
}
.block--data-icon.block--alert svg, .block--data-icon.block--alert i {
  color: var(--color-danger);
}

.block--data-icon-success i::before {
  color: var(--color-success);
}

.block--data-icon-fail i::before {
  color: var(--color-danger);
}

.panel--sidebar .block--data, .panel--sidebar .block--data-icon {
  margin-top: var(--spacer-m);
}

.block--error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.block--error .image--error {
  height: 200px;
  margin-bottom: 24px;
}
.block--error .error-code {
  font-size: 32px;
  font-weight: 700;
}
.block--error .error-content .error-description {
  font-size: 16px;
  font-weight: 400;
}

.block--loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.block--loader .image--loader {
  height: 200px;
  margin-bottom: 24px;
}
.block--loader .loader-code {
  font-size: 24px;
  font-weight: 700;
}
.block--loader .loader-content .loader-description {
  font-size: 16px;
  font-weight: 400;
}

.darkmode .block--loader {
  filter: brightness(10);
}
.darkmode .block--loader .loader-code {
  color: var(--color-gray--blue);
}

.block--featured {
  margin: 0px var(--spacer-s);
}
.block--featured .main-content {
  display: flex;
  flex-direction: row;
  color: var(--color-white);
  align-items: baseline;
}
.block--featured .main-content svg, .block--featured .main-content i {
  margin-right: var(--spacer-xs);
  color: var(--color-secondary);
}
.block--featured .main-content h4 {
  color: var(--color-secondary);
}

.darkmode .block--featured .main-content svg, .darkmode .block--featured .main-content i, .darkmode .block--featured .main-content h4 {
  color: var(--color-white);
}

.block-text {
  display: flex;
  flex-direction: column;
  color: var(--color-black);
  font-family: var(--font-primary);
}
.block-text .block-text__subtitle {
  text-transform: uppercase;
  font-size: var(--text-s);
  font-weight: 600;
}
.block-text .block-text__title {
  font-size: var(--text-xl);
  font-weight: 800;
  justify-content: flex-start;
  margin: 0px;
}
.block-text .block-text__title span {
  display: inline-block;
}
.block-text .block-text__description {
  font-size: var(--text-s);
  font-weight: 500;
}
.block-text.block-text--s .block-text__title {
  font-size: var(--text-l);
}
.block-text.block-text--s .block-text__subtitle,
.block-text.block-text--s .block-text__description {
  font-size: var(--text-xs);
}
.block-text.block-text--l .block-text__title {
  font-size: var(--title-h4);
}

.button {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  height: var(--spacer-2xl);
  font-family: var(--font-primary);
  font-size: var(--text-s);
  font-weight: 700;
  background: var(--btn-bg--primary);
  border-radius: var(--spacer-2xs);
  padding: var(--spacer-s) var(--spacer-m);
  text-align: center;
  color: var(--color-white);
  border: 1px solid var(--color-primary);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button:hover {
  background-position-y: 20%;
}
.button:focus {
  outline: auto;
}
.button:active {
  box-shadow: 2px 2px 4px var(--color-gray--dark) inset;
}
.button.button--primary {
  background-image: var(--gradient-background);
  border: 1px solid var(--color-primary--dark);
  color: var(--color-white);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button.button--primary:hover {
  text-decoration: none;
  box-shadow: none;
  background-color: var(--color-primary);
  box-shadow: inset 2px 2px 4px 0 var(--color-primary--dark);
  color: var(--color-white);
}
.button.button--primary:active {
  box-shadow: inset 1px 1px 2px 0 var(--color-primary--dark);
}
.button.button--outline {
  border: 1px solid var(--color-secondary);
  background: rgba(var(--color-white), 0.1);
  text-decoration: underline;
  color: var(--color-white);
}
.button.button--outline:hover {
  background: var(--color-white);
  color: var(--color-black);
}
.button.button--outline:focus {
  outline: auto;
}
.button.button--outline:active {
  box-shadow: 2px 2px 4px var(--color-gray--dark) inset;
}
.button.button--fullwidth {
  width: 100%;
}
.button.button--secondary {
  background: var(--color-secondary);
  color: var(--color-white);
  border: 1px solid var(--color-secondary);
}
.button.button--secondary:hover {
  background: var(--color-secondary--dark);
}
.button.button--secondary:focus {
  outline: auto;
}
.button.button--secondary:active {
  box-shadow: 2px 2px 4px var(--color-gray--dark) inset;
}
.button.button--secondary.button--outline {
  background: transparent;
  color: var(--color-secondary);
  text-transform: none;
  text-decoration: none;
}
.button.button--secondary.button--outline.button--with-icons .button__icon-container .loader--ring div {
  border-color: var(--color-secondary) transparent transparent transparent;
}
.button.button--secondary.button--outline:hover {
  background: var(--color-white);
}
.button.button--secondary.button--outline:focus {
  outline: auto;
}
.button.button--secondary.button--outline:active {
  box-shadow: 2px 2px 4px var(--color-gray--dark) inset;
}
.button.button--with-icons {
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button.button--with-icons .button__icon-container {
  order: 1;
}
.button.button--with-icons .button__icon-container .button__icon {
  padding: 0px;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
  transform: translateY(0%);
}
.button.button--with-icons .button__icon-container .loader--ring {
  top: 200%;
}
.button.button--with-icons .button__text {
  order: 2;
  padding: 0px;
}
.button.button--with-icons .button__icon-container + .button__text {
  margin-left: var(--spacer-xs);
}
.button.button--with-icons.button--loading .button__icon-container .button__icon {
  transform: translateY(-50px);
}
.button.button--with-icons.button--loading .button__icon-container .loader--ring {
  top: 50%;
}
.button.button--with-icons.button--small .button__icon-container .loader--ring {
  width: var(--spacer-s);
  height: var(--spacer-s);
}
.button.button--with-icons.button--small .button__icon-container .loader--ring div {
  width: var(--spacer-s);
  height: var(--spacer-s);
  border-width: 2px;
}
.button.button--icon-to-right .button__icon-container {
  order: 2;
}
.button.button--icon-to-right .button__text {
  order: 1;
}
.button.button--icon-to-right .button__icon-container + .button__text {
  margin-left: 0px;
  margin-right: var(--spacer-xs);
}
.button.button--disabled, .button[disabled] {
  background-color: var(--color-gray);
  color: var(--color-gray--light);
  border: none;
  cursor: not-allowed;
  box-shadow: none;
}
.button.button--disabled:hover, .button[disabled]:hover {
  background-image: none;
  background-color: transparent;
  color: var(--color-gray);
}
.button.button--cancel {
  background-color: var(--color-danger);
  color: var(--color-white);
}
.button.button--preview {
  flex-direction: column;
  text-decoration: none;
  min-width: 100px;
  margin-left: var(--spacer-s);
  padding: var(--spacer-l) var(--spacer-s);
  color: var(--color-secondary);
  font-size: var(--text-xs);
}
.button.button--preview i, .button.button--preview svg {
  font-size: var(--text-xl);
}
.button.button--dashed {
  border-style: dashed;
  font-size: var(--text-s);
}
.button.button--small {
  min-width: 40px;
  max-width: none;
  height: var(--spacer-l);
  font-size: var(--text-s);
  border-radius: var(--spacer-2xs);
}
.button.button--gray {
  background-color: var(--color-gray);
  color: var(--color-white);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button.button--gray svg {
  color: var(--color-white);
}
.button.button--gray:hover {
  text-decoration: none;
  background-color: var(--color-gray--blue);
  color: var(--color-white);
}

.hero .button {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

.button--rounded {
  align-items: center;
  justify-content: center;
  height: var(--spacer-xl);
  width: var(--spacer-xl);
  border-radius: 50em;
  background-color: var(--color-gray--blue);
  color: var(--color-gray--dark);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button--rounded:hover {
  text-decoration: none;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}

.button--small {
  min-width: 100px;
  max-width: 150px;
  height: var(--spacer-l);
}

.hero--student-report .button {
  background-color: var(--color-tertiary);
}

.button--flat {
  background-color: var(--color-white);
  border: none;
  min-height: 52px;
  height: 52px;
  min-width: 80px;
  border-radius: 8px;
  padding: 0px var(--spacer-m);
}
.button--flat .button__text {
  color: var(--color-gray--dark);
  font-size: 14px;
}
.button--flat .button__icon {
  color: var(--color-tertiary);
  font-size: var(--spacer-s);
  margin-right: var(--spacer-s);
}
.button--flat.button--outline {
  border: 1px solid var(--color-gray--tenue);
}

.darkmode .button--with-icons {
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.darkmode .button--with-icons svg {
  color: var(--color-gray);
}
.darkmode .button--flat {
  background-color: var(--color-gray--dark);
}
.darkmode .button--flat .button__text {
  color: var(--color-white);
}

.filter-dropdown-button {
  margin-right: 58px;
}

.hero__nav .button--with-icons {
  padding: 10px 20px 10px 20px;
}

.button--modal {
  display: inline-flex;
  border: 3px solid var(--color-gray--tenue);
  border-radius: 3px;
  color: var(--color-gray--dark);
}
.button--modal:not(:last-child) {
  margin-right: var(--spacer-m);
}
.button--modal:hover {
  color: var(--color-tertiary);
}

.button--modal-primary {
  background-image: var(--gradient-background);
  box-shadow: inset 2px 2px 4px 0 var(--color-primary--dark);
  border: 1px solid var(--color-primary--dark);
  color: var(--color-white);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.button--modal-primary:hover {
  text-decoration: none;
  box-shadow: none;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}
.button--modal-primary:active {
  box-shadow: inset 1px 1px 2px 0 var(--color-primary--dark);
}

.card--modal {
  background-color: #FFF;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-xl);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 6px 32px;
  margin-bottom: var(--spacer-m);
}
.card--modal__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacer-m);
}
.card--expandable .modal__row {
  height: 36px;
}
.card--expandable .app-list .modal__row h4 {
  font-size: 14px;
  font-weight: 600;
}
.card--expandable .app-list .button--toggle {
  height: 22px;
  width: 44px;
}
.card--expandable .app-list .button--toggle .toggle__handle {
  width: 14px;
  height: 14px;
}
.card--expandable .card__divider {
  height: 1px;
  background-color: var(--color-gray);
}
.card--expandable .app-list {
  padding-left: 30px;
}

.carousel {
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0px var(--spacer-s);
  z-index: 10;
  transform: translateY(-50%);
}
.carousel .carousel__arrows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.carousel .carousel__arrows .button--arrow {
  width: 32px;
  height: 80px;
  background-color: var(--color-gray--blue);
  color: var(--color-gray--blue);
  border-radius: 8px;
  border: none;
  opacity: 0.7;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.carousel .carousel__arrows .button--arrow:active, .carousel .carousel__arrows .button--arrow:hover, .carousel .carousel__arrows .button--arrow:focus {
  opacity: 1;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}

.container--main {
  margin-left: 260px;
  background: var(--gradient-background);
  background-size: 100% 400px;
  background-repeat: repeat-x;
  padding: var(--spacer-3xl) var(--spacer-xl) var(--spacer-xl);
}

.container--content {
  background-color: #FFF;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-xl);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 32px;
}
.container--content__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacer-m);
}

.container--exams {
  position: relative;
  display: flex;
  justify-content: flex-start;
}
.container--exams .button--rounded {
  min-width: 40px;
}
.container--exams__body {
  display: flex;
  justify-content: space-between;
}
.container--exams__header {
  max-width: 180px;
  margin-bottom: var(--spacer-s);
}
.container--exams__header {
  margin-bottom: var(--spacer-s);
}
.container--exams__menu {
  display: none;
}
.container--exams .button--rounded {
  background-color: var(--color-gray--blue);
}
.container--exams .button--rounded:hover {
  color: var(--color-secondary);
}
.container--exams .container--exams__header .subtitle {
  display: flex;
  align-items: center;
  border-radius: var(--spacer-xs);
  width: 150px;
  margin-bottom: var(--spacer-s);
  height: var(--spacer-l);
  font-size: var(--text-xs);
}
.container--exams h3 {
  font-weight: 800;
  font-size: var(--title-h6);
  justify-content: left;
}
.container--exams h4 {
  font-weight: 800;
  font-size: var(--title-h6);
}
.container--exams .subtitle {
  display: inline-block;
  text-transform: uppercase;
  color: var(--color-gray);
  font-size: var(--text-s);
  text-align: left;
  margin: 0;
}
.container--exams .subtitle.subtitle--featured {
  height: 24px;
  display: inline-flex;
  align-content: center;
  background: #00d8d7;
  border-radius: 16px;
  padding: 2px 16px;
}
.container--exams .subtitle.subtitle--featured span {
  margin-left: 4px;
  line-height: 24px;
  color: var(--color-gray);
}
.container--exams .subtitle img.subtitle_img {
  height: 18px;
}
.container--exams .subtitle--proctored {
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary--lighter);
  color: var(--color-primary);
}
.container--exams .subtitle--nonproctored {
  border: 1px solid var(--color-gray--light);
  background-color: var(--color-gray--blue);
  color: var(--color-gray);
}

@media screen and (min-width: 1330px) {
  .container--exams {
    justify-content: flex-start;
  }
  .container--exams .button--rounded {
    min-width: 40px;
  }
  .container--exams__header {
    min-width: 240px;
  }
}
.container--cards-view {
  margin-bottom: var(--spacer-xl);
}
.container--cards-view .container__row {
  padding-top: var(--spacer-xl);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.container--cards-view .container--exams {
  flex-direction: column;
  justify-content: center;
  width: calc(33.3333333333% - 24px);
  height: auto;
  margin: 0 var(--spacer-m) var(--spacer-m) 0;
  background-color: #FFF;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-xl);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
}
.container--cards-view .container--exams.container--exams--no-data {
  width: auto;
  height: auto;
  margin: 0px auto;
}
.container--cards-view .container--exams__body {
  margin-bottom: auto;
}
.container--cards-view .container--exams:last-child {
  margin-right: 0;
}
.container--cards-view .button--rounded {
  position: absolute;
  right: var(--spacer-m);
  top: var(--spacer-m);
}
.container--cards-view .container--exams__button {
  margin-top: var(--spacer-m);
}

@media only screen and (min-width: 1672px) {
  .container--cards-view .container--exams {
    width: calc(33.3333333333% - 48px);
  }
}
.container--list-view {
  margin-top: var(--spacer-3xl);
  margin-bottom: var(--spacer-xl);
  background-color: #FFF;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-xl);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: var(--spacer-s);
}
.container--list-view .container--exams {
  margin-bottom: var(--spacer-l);
  padding-bottom: var(--spacer-m);
  border-bottom: 1px solid var(--color-gray--light);
  align-items: center;
}
.container--list-view .container--exams__header {
  width: 40%;
  max-width: 40%;
  margin-right: 0;
}
.container--list-view .container--exams__body {
  margin-bottom: 0;
}
.container--list-view .container--exams__button:first-of-type {
  margin-left: auto;
  margin-right: var(--spacer-s);
}
.container--list-view .container--exams__button:last-of-type {
  margin-right: 0;
}
.container--list-view .block--data {
  margin-right: 0;
}

.container--modal {
  display: block;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  background-color: rgba(var(--color-black), 0.9);
}

.container--modal-datepicker {
  display: block;
  width: 75%;
  align-items: flex-start;
  margin: 0 auto;
}

.container--student-report {
  padding: var(--spacer-l);
}

.container--panels {
  display: flex;
  background-color: #FFF;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-xl);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
  padding: var(--spacer-l);
  flex-direction: row;
  justify-content: space-between;
}

.container--webcam-snapshot {
  justify-content: center;
}
.container--webcam-snapshot .panel--sidebar {
  margin-left: var(--spacer-m);
}

.darkmode .container--content {
  background-color: var(--color-gray--darker);
}
.darkmode .container--panels {
  background-color: var(--color-gray--darker);
}

.page-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 120px;
  background-color: var(--color-gray--light);
}
.page-error .image--error {
  height: 300px;
}
.page-error .error-code {
  font-size: 120px;
  font-weight: 900;
  color: var(--color-gray--blue);
  text-align: center;
  width: 100%;
}
.page-error .error-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-error .error-content .error-description {
  font-size: 20px;
  font-weight: 400;
  color: var(--color-gray--normal);
}
.page-error .error-content .button--error-page {
  max-width: 320px;
  margin: 0px;
  margin-top: 40px;
}

#dataTable_wrapper div:nth-child(2) {
  width: 100%;
  overflow-x: auto;
}

#dataTable_wrapper div:nth-child(2)::-webkit-scrollbar {
  width: 11px;
}

#dataTable_wrapper div:nth-child(2) {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-gray--light);
}

#dataTable_wrapper div:nth-child(2)::-webkit-scrollbar-track {
  background: var(--color-gray--light);
}

#dataTable_wrapper div:nth-child(2)::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border: 3px solid var(--color-gray--light);
}

div::-webkit-scrollbar {
  width: 11px;
}

div {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}

div::-webkit-scrollbar-track {
  background: #CFD8DC;
}

div::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}

.page--login {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: var(--spacer-2xl) 0px;
  background: var(--color-secondary--dark);
}

.login-container {
  background: var(--color-secondary--dark);
  justify-content: center;
  color: var(--color-white);
  box-shadow: 1px 1px 0px var(--color-secondary);
  min-height: 50vh;
  width: 100%;
  max-width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: var(--spacer-3xl);
}
.login-container:before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  background: var(--color-secondary);
  mix-blend-mode: multiply;
  opacity: 0.2;
  z-index: -1;
}
.login-container .login-logo-background {
  height: 60%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.05;
  z-index: -1;
}
.login-container .login-logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--spacer-l);
}
.login-container .login-logo-container .login-logo {
  height: 90px;
}
.login-container .login-title {
  width: 100%;
  margin-top: var(--spacer-m);
  margin-bottom: var(--spacer-xl);
}
.login-container .login-title h1, .login-container .login-title h2, .login-container .login-title h3, .login-container .login-title h4, .login-container .login-title h5 {
  width: 100%;
  text-align: center;
}
.login-container .login-form {
  width: 100%;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
}

.page--components-preview .single-row {
  margin: var(--spacer-2xl) 0px;
  width: 50%;
}

.container--top-wizard,
.container--main-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.container--top-wizard {
  flex-direction: row;
  justify-content: space-between;
  background: var(--color-white);
  min-height: 96px;
  box-shadow: 0px 2px 0px rgba(var(--color-black), 0.1);
  margin-bottom: var(--spacer-xl);
  padding: 0 var(--spacer-xl);
}

.container--main-content {
  justify-content: flex-start;
  flex: 1;
}

.single-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.single-row--left {
  justify-content: flex-start;
}
.single-row--right {
  justify-content: flex-end;
}
.single-row--center {
  justify-content: center;
}
.single-row--top {
  align-items: flex-start;
}
.single-row--bottom {
  align-items: flex-end;
}
.single-row .form-controls {
  margin-right: var(--spacer-l);
}
.single-row .form-controls:last-child {
  margin-right: 0px;
}

.text-align--left {
  text-align: left;
}

.container--date-range {
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid var(--color-gray--blue);
  margin-bottom: var(--spacer-m);
}
.container--date-range .single-row {
  flex: 1 1;
  padding: 0 0 0 var(--spacer-m);
}
.container--date-range .single-row:first-child {
  border-right: 1px solid var(--color-gray--blue);
}

.selection-subcontainer {
  background-color: var(--color-gray--blue);
  padding: var(--spacer-s);
  margin-bottom: var(--spacer-s);
  border-radius: 4px;
}

.actions-container.single-row .button {
  margin-right: var(--spacer-s);
}

.info-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-message__icon {
  font-size: var(--spacer-3xl);
  color: var(--color-gray--dark);
  margin-bottom: var(--spacer-m);
}
.info-message__title {
  color: var(--color-black);
}
.info-message__subtitle {
  color: var(--color-gray--dark);
  font-weight: 400;
}
.info-message--success .info-message__icon {
  color: var(--color-primary);
}
.info-message--error .info-message__icon {
  color: var(--color-danger--dark);
}

.form-controls.qr-code-image-container {
  width: 100%;
  align-items: center;
}
.form-controls.qr-code-image-container .qr-code-image {
  width: 280px;
  object-fit: contain;
  object-position: center;
}

.heading__matching {
  display: flex;
  margin-bottom: var(--spacer-s);
}
.heading__matching h7 {
  font-weight: 700;
  width: 50%;
}

.container--matching {
  display: flex;
  justify-content: space-around;
  margin-bottom: var(--spacer-s);
}
.container--matching .tile {
  width: 49%;
}

.dropdown {
  display: none;
  visibility: hidden;
  opacity: 0;
  min-height: 250px;
  position: absolute !important;
  z-index: 1;
  top: 56px;
  left: 0;
  background-color: var(--color-gray--blue);
  border-radius: var(--spacer-xs);
  padding: var(--spacer-m) var(--spacer-s);
}
.dropdown ul {
  display: flex;
}

.dropdown--is-open {
  display: block;
  visibility: visible;
  opacity: 1;
}

.dropdown__item {
  margin-top: var(--spacer-xs);
  margin-bottom: var(--spacer-l);
  color: var(--color-gray);
  border: 1px solid var(--color-gray);
  border-radius: var(--spacer-xs);
  padding: var(--spacer-s);
  margin-right: var(--spacer-s);
}

.dropdown__item--selected {
  border-color: transparent;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}
.dropdown__item--selected:hover {
  text-decoration: none;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}

.react-datepicker .react-datepicker_month-container .react-datepicker__header {
  background-color: var(--color-tertiary);
}
.react-datepicker .react-datepicker_month-container .react-datepicker__header .react-datepicker__current-month {
  color: white;
}
.react-datepicker .react-datepicker_month-container .react-datepicker__header .react-daypicker__day-names .react-datepicker__day-name {
  color: white;
}

.react-datepicker__day--in-range,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--selected,
.react-datepicker__month-text--in-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--selected,
.react-datepicker__quarter-text--in-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__year-text--in-range,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--selected {
  background-color: var(--color-gray--blue);
}

.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  background-color: var(--color-gray--blue);
}

.drag-n-drop {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--color-gray);
  width: auto;
  border-radius: var(--spacer-xs);
  padding: var(--spacer-l);
  font-size: var(--text-m);
  font-weight: 700;
  color: var(--color-gray);
  font-family: var(--font-primary);
}
.drag-n-drop__image {
  margin-bottom: var(--spacer-m);
}
.drag-n-drop__image img {
  height: 100%;
}
.drag-n-drop__text {
  font-family: var(--font-primary);
  font-size: var(--text-m);
  font-weight: 400;
  text-align: center;
  margin-bottom: var(--spacer-m);
  width: 80%;
  color: var(--color-gray--dark);
}
.drag-n-drop__input-upload {
  position: relative;
}
.drag-n-drop__input-upload input[type=file] {
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--color-warning);
  z-index: 1;
  opacity: 0;
  cursor: pointer;
}
.drag-n-drop__input-upload input[type=file].disabled, .drag-n-drop__input-upload input[type=file][disabled] {
  cursor: not-allowed;
}
.drag-n-drop + .progressbar-container {
  margin-top: var(--spacer-m);
}

.panel--auxiliary-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--spacer-xl) var(--spacer-m);
  background: var(--color-gray--light);
  border-radius: var(--spacer-xs);
  color: var(--color-black);
  max-width: 320px;
}
.panel--auxiliary-content .normal-text {
  color: var(--color-gray-dark);
  font-size: var(--text-s);
  text-align: left;
  margin-bottom: var(--spacer-m);
}
.panel--auxiliary-content .labels-container {
  margin-bottom: var(--spacer-s);
}
.panel--auxiliary-content .button:last-of-type {
  margin-top: var(--spacer-s);
}

.drag-n-drop-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: var(--spacer-l);
}
.drag-n-drop-container .drag-n-drop {
  margin-right: var(--spacer-xl);
}

.datagrid {
  flex: 1 1 auto;
  background-color: var(--color-white);
}
.datagrid span {
  display: block;
}

.datagrid__row {
  display: flex;
  border-bottom: 1px solid var(--color-gray--blue);
}

.datagrid__column {
  flex: 1 1;
  padding: var(--spacer-m);
}
.datagrid__column:first-child {
  border-right: 1px solid var(--color-gray--blue);
}

.datagrid__label {
  text-transform: uppercase;
  font-size: var(--text-xs);
  font-weight: 600;
}

.datagrid__name {
  font-size: var(--text-m);
  font-weight: 700;
}

.datagrid__desc {
  font-size: var(--text-xs);
  font-weight: 500;
}

.datagrid__header {
  flex-direction: column;
  padding: var(--spacer-m);
}
.datagrid__header .datagrid__name {
  font-size: var(--text-2xl);
}

.form-controls {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacer-xl);
  align-items: stretch;
}
.form-controls.form-controls--center {
  align-items: center;
}
.form-controls.form-controls--row {
  flex-direction: row;
  justify-content: space-between;
}
.form-controls.form-controls--row .button {
  margin-right: var(--spacer-m);
}
.form-controls.form-controls--row .button:last-of-type {
  margin-right: 0px;
}
.form-controls label {
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: var(--text-s);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--spacer-xs);
}
.form-controls label a {
  color: var(--color-tertiary);
  font-weight: 400;
}
.form-controls .input {
  background: var(--color-white);
  border-radius: var(--spacer-2xs);
  padding: var(--spacer-s);
  border: 1px solid var(--color-gray);
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: var(--text-m);
  color: var(--color-black);
  height: var(--spacer-2xl);
}
.form-controls .input.input--transparent {
  background: transparent;
  color: var(--color-white);
}
.form-controls .input--score {
  width: 120px;
  font-size: var(--text-2xl);
  font-weight: 900;
  margin-right: var(--spacer-m);
}

[dir=rtl] .form-controls.form-controls--row .button {
  margin-right: 0px;
}
[dir=rtl] .form-controls.form-controls--row .button:last-of-type {
  margin-right: var(--spacer-m);
}

.helper-message {
  display: flex;
  margin-top: var(--spacer-xs);
  background: var(--color-white);
  color: var(--color-black);
  padding: var(--spacer-xs) var(--spacer-s);
  align-items: center;
}
.helper-message.helper-message--error {
  background: var(--color-danger--dark);
  color: var(--color-white);
}
.helper-message.helper-message--success {
  background: var(--color-success--dark);
  color: var(--color-white);
}
.helper-message .helper-icon {
  margin-right: var(--spacer-2xs);
}
.helper-message span.helper-text {
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: var(--text-s);
}

[dir=rtl] .helper-message .helper-icon {
  margin-right: 0px;
  margin-left: var(--spacer-2xs);
}

.gallery {
  margin-bottom: var(--spacer-l);
  display: flex;
  justify-content: center;
}

.gallery__row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-height: 550px;
  overflow-y: auto;
}

.picture {
  position: relative;
  width: 240px;
  margin: var(--spacer-m);
}
.picture img {
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: contain;
  width: 100%;
  height: auto;
  border-radius: var(--spacer-2xs);
}

.picture__header, .carousel {
  display: flex;
  position: absolute;
  top: 16px;
  z-index: 2;
  width: 100%;
  padding: 0 var(--spacer-s);
}
.picture__header span, .carousel span {
  display: block;
  width: 75px;
  text-align: center;
  padding: var(--spacer-xs);
  border-radius: var(--spacer-s);
  color: var(--color-white);
  font-size: var(--text-xs);
}
.picture__header span.bg--level-high, .carousel span.bg--level-high {
  background-image: url(../images/bg-level-high.png);
  background-size: cover;
}
.picture__header span.bg--level-medium, .carousel span.bg--level-medium {
  background-image: url(../images/bg-level-medium.png);
  background-size: cover;
}
.picture__header span.bg--level-low, .carousel span.bg--level-low {
  background-color: var(--color-success);
}
.picture__header .icon, .carousel .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 35px;
  height: 25px;
  border-radius: var(--spacer-s);
  color: var(--color-white);
  background-color: var(--color-gray--darker);
  font-size: var(--text-xs);
}

.picture__footer {
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: var(--spacer-s);
  padding: 0 var(--spacer-s) 0 var(--spacer-s);
}
.picture__footer span {
  display: block;
  padding: var(--spacer-xs);
  border-radius: var(--spacer-s);
  color: var(--color-white);
  background-color: var(--color-gray--darker);
  font-size: var(--text-xs);
}
.picture__footer span + span {
  margin-left: auto;
}

@media screen and (min-width: 1280px) {
  .picture {
    width: calc(25% - 48px);
  }
}
@media screen and (min-width: 1600px) {
  .picture {
    width: calc(20% - 48px);
  }
}
.heading--with-logo {
  display: flex;
  min-width: 250px;
}
.heading--with-logo a {
  align-items: center;
}
.heading--with-logo i, .heading--with-logo svg {
  font-size: var(--text-2xl);
  margin-right: var(--spacer-xs);
}
.heading--with-logo__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: var(--spacer-s);
}
.heading--with-logo h1 {
  color: var(--color-secondary);
  font-size: var(--text-s);
  margin-bottom: 0;
  justify-content: left;
}
.heading--with-logo span {
  font-size: var(--text-xs);
  color: var(--color-gray--dark);
  font-weight: 600;
}

.hero {
  flex-direction: column;
  margin-bottom: var(--spacer-m);
}
.hero h1 {
  justify-content: left;
  color: var(--color-white);
}

.hero__nav {
  display: flex;
  margin-left: 0;
  margin-top: var(--spacer-xs);
  justify-content: flex-start;
}
.hero__nav .button--with-icons {
  margin-left: var(--spacer-l);
  background: var(--color-secondary);
}
.hero__nav .button--with-icons i, .hero__nav .button--with-icons svg {
  margin-right: var(--spacer-xs);
  color: var(--color-tertiary);
}
.hero__nav .button--with-icons:hover {
  text-decoration: none;
}
.hero__nav .button--new-exam {
  margin-left: auto;
}
.hero__nav .tabs {
  margin-left: 0;
}
.hero__nav .tabs li a {
  padding: var(--spacer-s);
}
.hero__nav .tabs li a select {
  padding-right: var(--spacer-xl);
  padding-left: var(--spacer-xs);
}
.hero__nav .button--flat {
  margin-right: var(--spacer-m);
}
.hero__nav.hero__nav--mb {
  margin-bottom: var(--spacer-m);
}
.hero__nav.hero__nav--spaced {
  width: 100%;
  justify-content: space-between;
}
.hero__nav.hero__nav--spaced .tabs {
  flex: 1 0 auto;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
}
.hero__nav.hero__nav--spaced .tabs:first-of-type {
  margin-left: 0;
}
.hero__nav.hero__nav--spaced .tabs:last-of-type {
  margin-right: 0;
}

.hero .hero__nav .tabs--extended {
  background-color: transparent;
}

.chat__icon {
  color: var(--color-primary);
}

.chat__icon:hover {
  color: var(--color-tertiary);
}

.chat__icon--disabled {
  color: var(--color-gray--tenue);
}

.chat__icon--disabled:hover {
  cursor: default;
  color: var(--color-gray--tenue);
}

.icon__cell {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.icon__cell a {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
}

.img--webcam-snapshot {
  display: block;
  border-radius: var(--spacer-2xs);
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 100px;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5em) 50%;
  background-size: 12px;
  border-radius: var(--spacer-xs);
  border: none;
  color: var(--color-gray--blue);
  padding: var(--spacer-s);
  font-size: var(--text-xs);
}

select::-ms-expand {
  display: none;
}

input {
  border: none;
  min-width: 100px;
  height: var(--spacer-2xl);
  background-color: var(--color-white);
  padding: var(--spacer-s);
  border-radius: var(--spacer-xs);
  font-size: var(--text-xs);
  height: 50px;
}

.input--search-students-exams {
  width: 30%;
  margin-right: var(--spacer-s);
}

.hero--student-report .input--search {
  width: 90%;
  min-width: 620px;
  margin-right: var(--spacer-l);
}

.icon-input-container {
  border: none;
  background-color: var(--color-white);
  color: var(--color-gray--darker);
  padding-left: 20px;
  position: relative;
  height: 52px;
  min-width: 230px;
  border-radius: 8px;
  margin-right: 30px;
}
.icon-input-container--light {
  background-color: transparent;
}
.icon-input-container--table-filter {
  width: 300px;
  min-width: auto;
}
.icon-input-container--table-filter .input--search {
  width: 300px;
  min-width: 100px;
}
.icon-input-container--search {
  width: 500px;
}
.icon-input-container--search .icon-input {
  padding-right: 85px;
}
.icon-input-container--align-right {
  margin-left: auto;
}
.icon-input-container--modal {
  margin-right: 0px;
}
.icon-input-container .icon-input-container__button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  min-width: 62px;
  z-index: 15;
  display: block;
  border-radius: 8px;
  padding: 8px;
  background-color: var(--highlight);
  color: var(--color-white);
  font-size: 14px;
  box-shadow: none;
  border: none;
}
.icon-input-container .icon-input-container__button:hover {
  transform: translateY(-53%);
}
.icon-input-container .icon-input-container__button:active {
  transform: translateY(-50%);
}
.icon-input-container--light {
  background-color: var(--color-white);
  border: 1px solid rgba(var(--color-gray), 0.5);
}
.icon-input-container--table-filter {
  width: 300px;
  min-width: auto;
}
.icon-input-container--table-filter .input--search {
  width: 300px;
  min-width: 100px;
}
.icon-input-container--search {
  width: 500px;
}
.icon-input-container--search .icon-input {
  padding-right: 85px;
}
.icon-input-container--align-right {
  margin-left: auto;
}
.icon-input-container--center {
  margin: 0 auto;
  margin-bottom: 200px;
  width: 100%;
}
.icon-input-container .icon-input {
  width: 100%;
  padding-left: 54px;
  position: absolute;
  left: 0px;
  z-index: 10;
}
.icon-input-container .label-icon-input {
  position: absolute;
  left: 0px;
  height: 100%;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  z-index: 15;
  margin: 0px;
}
.icon-input-container .label-icon-input:hover {
  cursor: pointer;
}

.darkmode .hero--student-report .input--search {
  border: none;
  background-color: var(--color-gray--darker);
  color: var(--color-gray);
}
.darkmode .icon-input-container {
  background-color: var(--color-gray--darker);
  color: var(--color-gray);
}
.darkmode .icon-input-container input {
  background-color: var(--color-gray--darker);
  color: var(--color-white);
}

.react-datepicker-wrapper {
  width: 100%;
  position: absolute;
  left: 0px;
  height: 50px;
}
.react-datepicker-wrapper .react-datepicker__input-container {
  height: 50px;
}
.react-datepicker-wrapper input {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 54px;
}

label.bg {
  display: block;
  min-width: 120px;
  height: 32px;
  text-align: center;
  padding: var(--spacer-xs);
  border-radius: var(--spacer-s);
  background-color: var(--color-gray);
  color: var(--color-white);
  font-size: var(--text-xs);
  margin: 0px;
}
label.bg.bg--level-high {
  background-image: url(../images/bg-level-high.png);
  background-size: cover;
}
label.bg.bg--level-medium {
  background-image: url(../images/bg-level-medium.png);
  background-size: cover;
}
label.bg.bg--level-low {
  background-color: var(--color-success);
}

.form__label {
  font-size: var(--text-xs);
}

.label {
  position: relative;
  display: flex;
  padding: var(--spacer-2xs) var(--spacer-xs);
  font-size: var(--text-xs);
  font-weight: 400;
  color: var(--color-black);
  text-transform: none;
  background: var(--color-gray--tenue);
  border-radius: var(--spacer-2xs);
}

.labels-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.labels-container .label {
  margin-right: var(--spacer-xs);
}
.labels-container .label:last-child {
  margin-right: auto;
}

.loader--ring {
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-4px, -50%);
  width: var(--spacer-m);
  height: var(--spacer-m);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.loader--ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: var(--spacer-m);
  height: var(--spacer-m);
  border: 3px solid var(--color-white);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-white) transparent transparent transparent;
}
.loader--ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader--ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader--ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.modal {
  display: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 480px;
  min-height: 500px;
  height: auto;
  max-height: 90vh;
  overflow: hidden;
  overflow-y: auto;
  padding: var(--spacer-m);
  background-color: var(--color-gray--light);
  border-radius: var(--spacer-xs);
  flex-direction: column;
  justify-content: space-between;
}
.modal .container--content {
  margin-bottom: var(--spacer-m);
}

.modal--is-open {
  display: flex;
  visibility: visible;
  opacity: 1;
}

.modal__header {
  display: flex;
  margin-bottom: var(--spacer-m);
  justify-content: space-between;
}

.modal__body {
  margin-bottom: auto;
  padding-bottom: 40px;
  flex: 1;
}

.container--modal .modal__student-idscan {
  justify-content: flex-start;
}

.modal__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--spacer-xl);
}
.modal__row.modal__row--auto-height {
  height: auto;
  flex-direction: column;
}
.modal__row.modal__row--auto-height .image--error {
  width: 100%;
  margin-bottom: 16px;
}
.modal__row.modal__row--auto-height h4.title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-gray--blue);
  text-transform: uppercase;
}
.modal__row.modal__row--auto-height h6.subtitle {
  text-transform: none;
  text-align: center;
  font-size: 14px;
  font-weight: 100;
  color: var(--color-gray);
}

.modal__footnote {
  font-size: var(--text-s);
}

.modal--student-profile {
  width: 60%;
  height: 400px;
  background-color: var(--color-white);
}

.modal--gallery {
  height: 275px;
}
.modal--gallery img {
  width: 250px;
  height: 250px;
  border-radius: var(--spacer-m);
}

.modal--student-switch {
  min-width: 880px;
}
.modal--student-switch > .button {
  margin-top: var(--spacer-m);
}
.modal--student-switch .table {
  display: block;
}
.modal--student-switch .table thead {
  display: block;
  width: 100% !important;
}
.modal--student-switch .table thead tr {
  display: block;
  width: 100%;
}
.modal--student-switch .table th {
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid var(--color-gray--light);
  height: 50px;
}
.modal--student-switch .table th:nth-child(1) {
  width: 250px !important;
}
.modal--student-switch .table th:nth-child(2) {
  width: 250px !important;
}
.modal--student-switch .table th:nth-child(3) {
  width: 203px !important;
}
.modal--student-switch .table th:nth-child(4) {
  width: 110px !important;
  height: 50px;
}
.modal--student-switch .table tbody {
  width: 100%;
  display: block;
  overflow: auto;
  height: 350px;
  max-height: 350px;
}
.modal--student-switch .table tbody .table-scrollable {
  display: block;
  table-layout: fixed;
  border-collapse: collapse;
}
.modal--student-switch .table tbody tr {
  display: flex;
  width: 100%;
}
.modal--student-switch .table tbody tr td {
  display: inline-block;
  box-sizing: border-box !important;
  border: 1px solid var(--color-gray--light) !important;
  height: 57px !important;
  border-left: 0px;
}
.modal--student-switch .table tbody tr td:nth-child(1) {
  width: 250px !important;
}
.modal--student-switch .table tbody tr td:nth-child(2) {
  width: 250px !important;
}
.modal--student-switch .table tbody tr td:nth-child(3) {
  width: 203px !important;
}
.modal--student-switch .table tbody tr td:nth-child(4) {
  width: 110px !important;
}
.modal--student-switch .table tbody tr td:nth-child(4) a {
  min-width: auto;
  min-height: auto;
  width: 100%;
}

.modal--gallery-carousel {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: transparent;
  flex-direction: row;
  padding: 0px;
  z-index: 1000;
}
.modal--gallery-carousel .infobar {
  display: flex;
  flex-direction: column;
  padding: 30px 23px;
}
.modal--gallery-carousel .infobar__header {
  font-size: 16px;
  margin-bottom: 10px;
}
.modal--gallery-carousel .infobar__header:not(:first-child) {
  margin-top: 40px;
}
.modal--gallery-carousel .infobar__title {
  font-size: 12px;
  color: var(--color-gray);
}
.modal--gallery-carousel .infobar__description {
  font-size: 14px;
  margin-bottom: 5px;
}
.modal--gallery-carousel .modal__panel-r {
  display: inline-block;
  width: 234px;
  height: 100vh;
  background-color: var(--color-gray--darker);
}
.modal--gallery-carousel .modal__panel-l {
  display: inline-block;
  width: calc(100% - 234px);
  height: 100vh;
  position: relative;
}
.modal--gallery-carousel .modal__panel-l .modal__close {
  position: absolute;
  width: 42px;
  height: 42px;
  top: 28px;
  left: 28px;
  font-size: 42px;
  z-index: 1010;
}
.modal--gallery-carousel .modal__panel-l .modal__close:hover {
  cursor: pointer;
}
.modal--gallery-carousel .modal__panel-l .modal__previous {
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 1010;
  font-size: 24px;
  top: 50%;
  left: 28px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--color-white);
  color: var(--color-gray--darker);
}
.modal--gallery-carousel .modal__panel-l .modal__previous:hover {
  cursor: pointer;
}
.modal--gallery-carousel .modal__panel-l .modal__previous i, .modal--gallery-carousel .modal__panel-l .modal__previous svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.modal--gallery-carousel .modal__panel-l .modal__next {
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 1010;
  font-size: 24px;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--color-white);
  color: var(--color-gray--darker);
}
.modal--gallery-carousel .modal__panel-l .modal__next:hover {
  cursor: pointer;
}
.modal--gallery-carousel .modal__panel-l .modal__next i, .modal--gallery-carousel .modal__panel-l .modal__next svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.modal--gallery-carousel .modal__panel-l .carousel {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.modal--gallery-carousel .modal__panel-l .carousel__header {
  display: flex;
  height: 40px;
  width: 80%;
}
.modal--gallery-carousel .modal__panel-l .carousel__header .bg--level-low {
  border-radius: 33px;
  font-size: 1rem;
  padding: 0px;
  height: 35px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal--gallery-carousel .modal__panel-l .carousel__image {
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal--gallery-carousel .modal__panel-l .carousel__image img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.modal--gallery-carousel .modal__panel-l .carousel__controls {
  margin-left: auto;
  width: 80px;
}
.modal--gallery-carousel .modal__panel-l .carousel__zoom, .modal--gallery-carousel .modal__panel-l .carousel__zoom-out {
  display: inline-block;
  font-size: 26px;
}
.modal--gallery-carousel .modal__panel-l .carousel__zoom:hover, .modal--gallery-carousel .modal__panel-l .carousel__zoom-out:hover {
  cursor: pointer;
}
.modal--gallery-carousel .modal__header {
  display: none;
  padding: 0px;
  margin: -24px;
  margin-bottom: 24px;
  position: relative;
}
.modal--gallery-carousel .modal__header .picture--fullwidth {
  width: 100%;
  height: 40vh;
  max-height: 560px;
  margin: 0px;
  overflow: hidden;
  background: radial-gradient(var(--color-primary), var(--color-gray--blue));
}
.modal--gallery-carousel .modal__header .picture--fullwidth img {
  width: 100%;
  margin: 0px;
  height: 100%;
  max-height: 560px;
  object-fit: cover;
  object-position: center;
}
.modal--gallery-carousel .modal__header .picture--fullwidth img.blur {
  filter: blur(60px);
}
.modal--gallery-carousel .modal__header .picture--fullwidth img.contain {
  object-fit: contain;
}
.modal--gallery-carousel .modal__body {
  display: none;
}
.modal--gallery-carousel .modal__body .panel {
  margin-right: var(--spacer-m);
  min-width: 280px;
}
.modal--gallery-carousel .modal__body .panel:last-child {
  margin-right: 0px;
}
.modal--gallery-carousel .modal__body .panel h2 {
  font-size: 20px;
}
.modal--gallery-carousel .modal__body .panel .block--data,
.modal--gallery-carousel .modal__body .panel .block--data-icon {
  margin-bottom: var(--spacer-xs);
}
.modal--gallery-carousel .modal__body .panel .block--data .subtitle,
.modal--gallery-carousel .modal__body .panel .block--data-icon .subtitle {
  font-size: 12px;
}
.modal--gallery-carousel .modal__body .panel .block--data h4,
.modal--gallery-carousel .modal__body .panel .block--data-icon h4 {
  font-size: 14px;
}

.modal--add-question {
  border-radius: 3px;
  background-color: var(--color-white);
  width: 70%;
  min-height: 75vh;
}
.modal--add-question .modal__header {
  position: relative;
  border-radius: 3px 3px 0px 0px;
  width: calc(100% + 48px);
  margin-left: -24px;
  margin-top: -24px;
  margin-bottom: 24px;
  margin-right: 0px;
  height: 70px;
  background-color: var(--color-secondary);
  color: var(--color-white);
}
.modal--add-question .modal__header h4 {
  position: relative;
  left: var(--spacer-m);
  top: 50%;
  transform: translateY(-50%);
  margin: 0px;
  display: inline;
  height: fit-content;
  font-weight: 600;
}
.modal--add-question .modal__header .modal__close {
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: var(--spacer-m);
}
.modal--add-question .modal__header .modal__close:hover {
  cursor: pointer;
}
.modal--add-question .label--input-modal {
  font-size: 14px;
  font-weight: 800;
}
.modal--add-question .label--input-modal:not(:first-child) {
  margin-top: 24px;
}
.modal--add-question .select--modal {
  position: relative;
}
.modal--add-question .select--modal svg {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
.modal--add-question .select--modal select {
  background-color: transparent;
  position: relative;
  z-index: 3;
  font-size: 12px;
  width: 100%;
  border-radius: 3px;
  border: 2px solid var(--color-gray--light);
  color: var(--color-secondary);
}
.modal--add-question .container--tag {
  width: 100%;
  min-height: 52px;
  border-radius: 3px;
  border: 2px solid var(--color-gray--light);
  padding: 10px;
}
.modal--add-question .container--tag .tag {
  position: relative;
  background-color: var(--color-gray--light);
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 5px;
  border-radius: 3px;
}
.modal--add-question .container--tag .tag__text {
  display: inline-block;
  margin-right: 20px;
}
.modal--add-question .container--tag .tag i {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  display: inline-block;
  font-size: 14px;
}
.modal--add-question .container--tag .tag i:hover {
  cursor: pointer;
}
.modal--add-question .suggestion-links {
  margin-top: var(--spacer-m);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-secondary);
}
.modal--add-question .suggestion-links a {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
}
.modal--add-question .modal__footer {
  display: flex;
  justify-content: center;
}

.darkmode .modal {
  background-color: var(--color-gray--darker);
  color: var(--color-white);
}
.darkmode .modal--gallery-carousel {
  background-color: transparent;
}

.modal--inline {
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 1200px;
  min-height: 200px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  margin-bottom: var(--spacer-xl);
}
.modal--inline .modal-header {
  display: flex;
  flex-direction: row;
  background: var(--color-secondary);
  color: var(--color-white);
  padding: var(--spacer-m) var(--spacer-xl);
  border-radius: 0px;
  border-top-right-radius: var(--spacer-2xs);
  border-top-left-radius: var(--spacer-2xs);
  align-items: center;
}
.modal--inline .modal-header .modal-header__title {
  text-transform: uppercase;
  margin: 0;
}
.modal--inline .modal-header .modal-header__block {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal--inline .modal-header .modal-header__block h6 {
  font-size: var(--title-h4);
  margin-right: var(--spacer-xs);
}
.modal--inline .modal-header .modal-header__block span {
  text-transform: uppercase;
  font-size: var(--text-s);
}
.modal--inline .modal-body {
  background: var(--color-white);
  padding: var(--spacer-xl);
}
.modal--inline .modal-body h7 {
  font-weight: 700;
  font-size: var(--text-s);
}
.modal--inline .modal-body .datagrid {
  margin: calc(-1 * var(--spacer-xl));
}
.modal--inline .modal-footer {
  background: var(--color-white);
  padding: var(--spacer-xl);
  padding-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  border: none;
  border-radius: 0px;
  border-bottom-right-radius: var(--spacer-2xs);
  border-bottom-left-radius: var(--spacer-2xs);
}
.modal--inline .modal-footer .actions-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.modal--inline .modal-footer .actions-container button, .modal--inline .modal-footer .actions-container .button {
  margin-right: var(--spacer-m);
}
.modal--inline .modal-footer .actions-container button:last-child, .modal--inline .modal-footer .actions-container .button:last-child {
  margin-right: 0px;
}

.modal--success {
  margin-top: var(--spacer-2xl);
  text-align: center;
}
.modal--success .modal-body {
  padding: 0;
}
.modal--success header {
  height: 400px;
  background-image: url(../images/bg-exam-builder-success.png);
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  padding-top: 300px;
}
.modal--success header span {
  font-weight: 800;
}
.modal--success a {
  display: block;
  margin: var(--spacer-l) auto;
  text-decoration: underline;
  font-weight: 700;
  color: var(--color-primary);
}

.panel {
  padding: var(--spacer-m);
  border-radius: var(--spacer-xs);
  background-color: var(--color-gray--blue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.panel--content {
  width: 75%;
  margin-right: var(--spacer-l);
}

.panel--sidebar {
  margin-left: auto;
  width: 25%;
  justify-content: flex-start;
}

.panel--fullwidth {
  width: 100%;
}

.panel--sidebar + .panel--sidebar {
  margin-left: var(--spacer-l);
}

.panel--identityscan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(../images/bg-identityscan.jpg);
  background-size: cover;
}
.panel--identityscan p {
  text-align: center;
  color: var(--color-white);
  font-size: var(--text-s);
}
.panel--identityscan .button {
  width: 200px;
}

.panel--audio-player {
  background-color: transparent;
  padding: 0px;
  overflow: hidden;
  overflow-y: auto;
  max-height: 360px;
}
.panel--audio-player .audio-player-list-title {
  border-bottom: 1px solid var(--color-gray--blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--spacer-xs);
  margin-bottom: var(--spacer-s);
}
.panel--audio-player .audio-player-list-title h4.title {
  font-size: 16px;
  font-weight: 400;
}
.panel--audio-player .audio-player-list .audio-player-list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-gray--blue);
  margin-bottom: var(--spacer-m);
  border-radius: 8px;
  padding: var(--spacer-s);
}
.panel--audio-player .audio-player-list .audio-player-list-item .sumadi-audio-player {
  margin-right: 16px;
}

.darkmode .panel {
  background-color: var(--color-gray--darker);
  color: var(--color-white);
}
.darkmode .panel--audio-player {
  background-color: transparent;
}
.darkmode .panel--audio-player .audio-player-list-title {
  border-bottom: 1px solid var(--color-gray--tenue);
}
.darkmode .panel--audio-player .audio-player-list .audio-player-list-item {
  background-color: var(--color-gray--darker);
}
.darkmode .panel--audio-player .audio-player-list .audio-player-list-item .sumadi-audio-player {
  margin-right: 16px;
}

.pagination {
  display: flex;
  align-items: flex-end;
}

.pagination__details {
  opacity: 1;
  font-weight: 600;
  font-size: var(--text-s);
  color: var(--color-secondary);
}

.pagination__nav {
  display: flex;
  margin-left: auto;
  padding: 5px;
}

.pagination__item {
  display: block;
  background-color: transparent;
  font-weight: 700;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  width: var(--spacer-xl);
  height: var(--spacer-xl);
  border-radius: var(--spacer-xs);
  margin-left: var(--spacer-s);
}
.pagination__item-icon {
  font-size: 16px;
  border: none;
}
.pagination__item:hover {
  text-decoration: none;
  background-color: var(--color-secondary);
  color: var(--color-white);
}

.page-item {
  display: block;
  background-color: transparent;
  color: var(--color-secondary);
  width: var(--spacer-xl);
  height: var(--spacer-xl);
  border-radius: var(--spacer-xs);
  margin-left: var(--spacer-s);
}
.page-item:hover {
  text-decoration: none;
  background-color: var(--color-secondary);
  color: var(--color-white);
}
.page-item .page-link {
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  color: var(--color-secondary);
}
.page-item .page-link:hover {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

#dataTable_previous, #dataTable_next {
  position: relative;
  border: none;
}
#dataTable_previous:hover, #dataTable_next:hover {
  cursor: pointer;
}
#dataTable_previous a, #dataTable_next a {
  display: none;
}

#dataTable_previous:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f053";
}

#dataTable_next:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f054";
}

.pagination__item--selected {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

.dataTables_info {
  margin-top: var(--spacer-l);
  font-size: var(--text-m);
}

.dataTables_paginate {
  margin-top: var(--spacer-l) !important;
}

.page-link {
  border: 1px solid var(--color-primary) !important;
  font-size: var(--text-m);
}

.page-item.active .page-link {
  background-color: var(--color-primary) !important;
  color: var(--color-white) !important;
}

.darkmode .dataTables_info {
  color: var(--color-gray--light);
}
.darkmode .page-link {
  border-color: ar(--color-gray--blue) !important;
  background-color: var(--color-gray--darker) !important;
  color: var(--color-gray) !important;
}

progress[value] {
  appearance: none;
  height: 20px;
  width: 440px;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
progress[value]::-webkit-progress-bar {
  background-color: var(--color-white);
  border-radius: var(--spacer-3xl);
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
progress[value]::-webkit-progress-value {
  background: var(--color-primary);
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.progressbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--color-gray--light);
  padding: var(--spacer-xs) var(--spacer-xl);
  border-radius: var(--spacer-xs);
}
.progressbar-container .progressbar-label {
  margin: 0px;
  font-size: var(--text-s);
  font-weight: 600;
  font-family: var(--font-primary);
  color: var(--color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  padding-right: var(--spacer-s);
}

.progress-tracker--horizontal {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 0;
  padding: 0px;
  list-style: none;
}
.progress-tracker--horizontal .progress-tracker__step {
  flex-grow: 1;
  min-width: 110px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
}
.progress-tracker--horizontal .progress-tracker__step:after, .progress-tracker--horizontal .progress-tracker__step:before {
  content: "";
  background: var(--color-gray--tenue);
  height: 1px;
  border-radius: 2px;
  width: 50%;
  left: 50%;
  margin-top: -16px;
  position: absolute;
  right: 0;
  top: 50%;
  z-index: -1;
}
.progress-tracker--horizontal .progress-tracker__step::before {
  left: 0%;
}
.progress-tracker--horizontal .progress-tracker__step:first-child::before {
  display: none;
}
.progress-tracker--horizontal .progress-tracker__step:last-child::after {
  display: none;
}
.progress-tracker--horizontal .progress-tracker__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50em;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  box-shadow: 0px 0px 0px 4px var(--color-white);
  margin: 0 auto var(--spacer-xs) auto;
}
.progress-tracker--horizontal i, .progress-tracker--horizontal svg {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50em;
  width: 30px;
  height: 30px;
  background-color: var(--color-gray);
  color: var(--color-white);
}
.progress-tracker--horizontal .progress-tracker__label {
  font-weight: 600;
  font-size: var(--text-2xs);
  line-height: var(--text-2xs);
  display: none;
}
.progress-tracker--horizontal .progress-tracker__title {
  font-weight: 600;
  font-size: var(--text-xs);
  color: var(--color-gray);
}
.progress-tracker--horizontal .progress-tracker__divider {
  width: 100%;
  position: relative;
}
.progress-tracker--horizontal .progress-tracker__divider:after {
  background: var(--color-gray--light);
  content: "";
  height: 1px;
  left: 0;
  margin-top: -16px;
  position: absolute;
  right: 0;
  top: 50%;
}
.progress-tracker--horizontal .progress-tracker__step--active i,
.progress-tracker--horizontal .progress-tracker__step--active svg {
  background-color: var(--color-primary);
}
.progress-tracker--horizontal .progress-tracker__step--active .progress-tracker__icon {
  border-color: var(--color-primary);
}
.progress-tracker--horizontal .progress-tracker__step--active span {
  display: block;
  color: var(--color-primary);
}
.progress-tracker--horizontal .progress-tracker__step--complete i,
.progress-tracker--horizontal .progress-tracker__step--complete svg {
  background-color: var(--color-secondary);
}
.progress-tracker--horizontal .progress-tracker__step--complete .progress-tracker__icon {
  border-color: var(--color-secondary);
}
.progress-tracker--horizontal .progress-tracker__step--complete span {
  color: var(--color-secondary);
}

.picker {
  display: flex;
  margin: var(--spacer-s) 0;
  align-items: center;
}
.picker i, .picker svg {
  margin-right: var(--spacer-s);
  font-size: var(--text-2xl);
  color: var(--color-gray);
}

.picker__details span {
  text-transform: uppercase;
  font-weight: 600;
  display: block;
  font-size: var(--text-xs);
}
.picker__details input {
  max-width: 150px;
  height: 30px;
  padding: 0;
}

.container--date-range .picker {
  margin-right: var(--spacer-m);
}

.filter-select {
  position: relative;
  color: var(--color-gray);
  height: 52px;
  width: 161px;
}
.filter-select svg {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
.filter-select__title {
  position: absolute;
  top: -30px;
}
.filter-select select {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: var(--color-white);
  color: var(--color-gray--darker);
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  z-index: 1;
  text-align: center;
}
.filter-select select option {
  text-align: center;
  margin-left: -50px;
}
.filter-select select option:hover {
  background-color: red;
}
.filter-select .selected {
  background-color: var(--color-gray--darker);
}
.filter-select .selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: var(--color-white) transparent transparent transparent;
}
.filter-select .selected .select-arrow-active:after {
  border-color: transparent transparent var(--color-white) transparent;
  top: 7px;
}

.filter-select--light {
  color: var(--color-white);
}
.filter-select--light select {
  color: var(--color-gray--darker);
}

.filter-select--gray {
  background-color: var(--color-white);
  border-radius: 8px;
}
.filter-select--gray select {
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
}

@media screen and (min-width: 1500px) {
  .filter-select {
    width: 238px;
  }
}
.darkmode .filter-select select {
  background-color: var(--color-gray--darker);
  color: var(--color-white);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type=radio],
input[type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}

a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container,
.container-fluid,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col-xl,
.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,
.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,
.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,
.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,
.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
  position: relative;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.3333333333%;
}

.offset-2 {
  margin-left: 16.6666666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.3333333333%;
}

.offset-5 {
  margin-left: 41.6666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333333333%;
}

.offset-8 {
  margin-left: 66.6666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333333333%;
}

.offset-11 {
  margin-left: 91.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.3333333333%;
  }

  .offset-sm-2 {
    margin-left: 16.6666666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.3333333333%;
  }

  .offset-sm-5 {
    margin-left: 41.6666666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.3333333333%;
  }

  .offset-sm-8 {
    margin-left: 66.6666666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.3333333333%;
  }

  .offset-sm-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.3333333333%;
  }

  .offset-md-2 {
    margin-left: 16.6666666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.3333333333%;
  }

  .offset-md-5 {
    margin-left: 41.6666666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.3333333333%;
  }

  .offset-md-8 {
    margin-left: 66.6666666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.3333333333%;
  }

  .offset-md-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.3333333333%;
  }

  .offset-lg-2 {
    margin-left: 16.6666666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.3333333333%;
  }

  .offset-lg-5 {
    margin-left: 41.6666666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.3333333333%;
  }

  .offset-lg-8 {
    margin-left: 66.6666666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.3333333333%;
  }

  .offset-lg-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.3333333333%;
  }

  .offset-xl-2 {
    margin-left: 16.6666666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.3333333333%;
  }

  .offset-xl-5 {
    margin-left: 41.6666666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.3333333333%;
  }

  .offset-xl-8 {
    margin-left: 66.6666666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.3333333333%;
  }

  .offset-xl-11 {
    margin-left: 91.6666666667%;
  }
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #b8daff;
}

.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody + tbody {
  border-color: #7abaff;
}

.table-hover .table-primary:hover {
  background-color: #9fcdff;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #9fcdff;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db;
}

.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody + tbody {
  border-color: #b3b7bb;
}

.table-hover .table-secondary:hover {
  background-color: #c8cbcf;
}

.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c8cbcf;
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #c3e6cb;
}

.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody + tbody {
  border-color: #8fd19e;
}

.table-hover .table-success:hover {
  background-color: #b1dfbb;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #b1dfbb;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #bee5eb;
}

.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody + tbody {
  border-color: #86cfda;
}

.table-hover .table-info:hover {
  background-color: #abdde5;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #abdde5;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #ffeeba;
}

.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody + tbody {
  border-color: #ffdf7e;
}

.table-hover .table-warning:hover {
  background-color: #ffe8a1;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #ffe8a1;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f5c6cb;
}

.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody + tbody {
  border-color: #ed969e;
}

.table-hover .table-danger:hover {
  background-color: #f1b0b7;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f1b0b7;
}

.table-light,
.table-light > th,
.table-light > td {
  background-color: #fdfdfe;
}

.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody + tbody {
  border-color: #fbfcfc;
}

.table-hover .table-light:hover {
  background-color: #ececf6;
}

.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #ececf6;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca;
}

.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
  border-color: #95999c;
}

.table-hover .table-dark:hover {
  background-color: #b9bbbe;
}

.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #b9bbbe;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #454d55;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-sm > .table-bordered {
    border: 0;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-md > .table-bordered {
    border: 0;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-lg > .table-bordered {
    border: 0;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-xl > .table-bordered {
    border: 0;
  }
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive > .table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

input[type=date].form-control,
input[type=time].form-control,
input[type=datetime-local].form-control,
input[type=month].form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control[size], select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*=col-] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40, 167, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #28a745;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:valid, .custom-select.is-valid {
  border-color: #28a745;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #28a745;
}

.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
  color: #28a745;
}

.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
  border-color: #28a745;
}

.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
  border-color: #34ce57;
  background-color: #34ce57;
}

.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:invalid, .custom-select.is-invalid {
  border-color: #dc3545;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
  color: #dc3545;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
  border-color: #dc3545;
}

.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
  border-color: #e4606d;
  background-color: #e4606d;
}

.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-plaintext {
    display: inline-block;
  }

  .form-inline .input-group,
.form-inline .custom-select {
    width: auto;
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }

  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary:focus, .btn-secondary.focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-success:focus, .btn-success.focus {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info:focus, .btn-info.focus {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-warning:focus, .btn-warning.focus {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500;
}

.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger:focus, .btn-danger.focus {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-light:focus, .btn-light.focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.btn-light.disabled, .btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}

.btn-dark:focus, .btn-dark.focus {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.btn-dark.disabled, .btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}

.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:focus, .btn-outline-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:focus, .btn-outline-info.focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:focus, .btn-outline-light.focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-dark {
  color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:focus, .btn-outline-dark.focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-link:focus, .btn-link.focus {
  text-decoration: underline;
}

.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type=submit].btn-block,
input[type=reset].btn-block,
input[type=button].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover, .dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 1;
}

.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}

.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}

.btn-group-toggle > .btn input[type=radio],
.btn-group-toggle > .btn input[type=checkbox],
.btn-group-toggle > .btn-group > .btn input[type=radio],
.btn-group-toggle > .btn-group > .btn input[type=checkbox] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group > .form-control,
.input-group > .form-control-plaintext,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}

.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .form-control-plaintext + .form-control,
.input-group > .form-control-plaintext + .custom-select,
.input-group > .form-control-plaintext + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
  margin-left: -1px;
}

.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
  z-index: 3;
}

.input-group > .custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .custom-file {
  display: flex;
  align-items: center;
}

.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}

.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .input-group-text,
.input-group-append .input-group-text + .btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-text input[type=radio],
.input-group-text input[type=checkbox] {
  margin-top: 0;
}

.input-group-lg > .form-control:not(textarea),
.input-group-lg > .custom-select {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg > .form-control,
.input-group-lg > .custom-select,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control:not(textarea),
.input-group-sm > .custom-select {
  height: calc(1.5em + 0.5rem + 2px);
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.input-group-lg > .custom-select,
.input-group-sm > .custom-select {
  padding-right: 1.75rem;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #007bff;
  background-color: #007bff;
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #80bdff;
}

.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {
  color: #6c757d;
}

.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: #adb5bd solid 1px;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: no-repeat 50%/50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  border-color: #007bff;
  background-color: #007bff;
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(0.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: 0.5rem;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
    transition: none;
  }
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #fff;
  transform: translateX(0.75rem);
}

.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.custom-select-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}

.custom-file-input ~ .custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  height: 1.4rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    -ms-transition: none;
    transition: none;
  }
}
.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-control-label::before,
.custom-file-label,
.custom-select {
    transition: none;
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #007bff;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar .container,
.navbar .container-fluid,
.navbar .container-sm,
.navbar .container-md,
.navbar .container-lg,
.navbar .container-xl {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:hover, .navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {
  .navbar-expand-sm > .container,
.navbar-expand-sm > .container-fluid,
.navbar-expand-sm > .container-sm,
.navbar-expand-sm > .container-md,
.navbar-expand-sm > .container-lg,
.navbar-expand-sm > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand-sm > .container,
.navbar-expand-sm > .container-fluid,
.navbar-expand-sm > .container-sm,
.navbar-expand-sm > .container-md,
.navbar-expand-sm > .container-lg,
.navbar-expand-sm > .container-xl {
    flex-wrap: nowrap;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
.navbar-expand-md > .container-fluid,
.navbar-expand-md > .container-sm,
.navbar-expand-md > .container-md,
.navbar-expand-md > .container-lg,
.navbar-expand-md > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand-md > .container,
.navbar-expand-md > .container-fluid,
.navbar-expand-md > .container-sm,
.navbar-expand-md > .container-md,
.navbar-expand-md > .container-lg,
.navbar-expand-md > .container-xl {
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
.navbar-expand-lg > .container-fluid,
.navbar-expand-lg > .container-sm,
.navbar-expand-lg > .container-md,
.navbar-expand-lg > .container-lg,
.navbar-expand-lg > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand-lg > .container,
.navbar-expand-lg > .container-fluid,
.navbar-expand-lg > .container-sm,
.navbar-expand-lg > .container-md,
.navbar-expand-lg > .container-lg,
.navbar-expand-lg > .container-xl {
    flex-wrap: nowrap;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
.navbar-expand-xl > .container-fluid,
.navbar-expand-xl > .container-sm,
.navbar-expand-xl > .container-md,
.navbar-expand-xl > .container-lg,
.navbar-expand-xl > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand-xl > .container,
.navbar-expand-xl > .container-fluid,
.navbar-expand-xl > .container-sm,
.navbar-expand-xl > .container-md,
.navbar-expand-xl > .container-lg,
.navbar-expand-xl > .container-xl {
    flex-wrap: nowrap;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-sm,
.navbar-expand > .container-md,
.navbar-expand > .container-lg,
.navbar-expand > .container-xl {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-sm,
.navbar-expand > .container-md,
.navbar-expand > .container-lg,
.navbar-expand > .container-xl {
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}

.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-text a {
  color: #fff;
}

.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card > hr {
  margin-right: 0;
  margin-left: 0;
}

.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}

.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card-deck .card {
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}
.card-group > .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }

  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }

  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }

  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }

  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }

  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}
.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}
.accordion {
  overflow-anchor: none;
}

.accordion > .card {
  overflow: hidden;
}

.accordion > .card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion > .card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: -1px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.breadcrumb-item {
  display: flex;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}
a.badge:hover, a.badge:focus {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.badge-primary:hover, a.badge-primary:focus {
  color: #fff;
  background-color: #0062cc;
}

a.badge-primary:focus, a.badge-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.badge-secondary:hover, a.badge-secondary:focus {
  color: #fff;
  background-color: #545b62;
}

a.badge-secondary:focus, a.badge-secondary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

a.badge-success:hover, a.badge-success:focus {
  color: #fff;
  background-color: #1e7e34;
}

a.badge-success:focus, a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.badge-info:hover, a.badge-info:focus {
  color: #fff;
  background-color: #117a8b;
}

a.badge-info:focus, a.badge-info.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.badge-warning:hover, a.badge-warning:focus {
  color: #212529;
  background-color: #d39e00;
}

a.badge-warning:focus, a.badge-warning.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.badge-danger:hover, a.badge-danger:focus {
  color: #fff;
  background-color: #bd2130;
}

a.badge-danger:focus, a.badge-danger.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.badge-light:hover, a.badge-light:focus {
  color: #212529;
  background-color: #dae0e5;
}

a.badge-light:focus, a.badge-light.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.badge-dark:hover, a.badge-dark:focus {
  color: #fff;
  background-color: #1d2124;
}

a.badge-dark:focus, a.badge-dark.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-primary hr {
  border-top-color: #9fcdff;
}

.alert-primary .alert-link {
  color: #002752;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
  animation: progress-bar-stripes 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.list-group-item + .list-group-item {
  border-top-width: 0;
}

.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}

.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}

.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}

.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}

.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}

.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }

  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }

  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }

  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }

  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }

  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }

  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }

  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }

  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}

.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}

.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff;
}

.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #004085;
  background-color: #9fcdff;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #004085;
  border-color: #004085;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}

.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #383d41;
  background-color: #c8cbcf;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}

.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #155724;
  background-color: #b1dfbb;
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}

.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #0c5460;
  background-color: #abdde5;
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba;
}

.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #856404;
  background-color: #ffe8a1;
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #856404;
  border-color: #856404;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}

.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #721c24;
  background-color: #f1b0b7;
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}

.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #818182;
  background-color: #ececf6;
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}

.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #1b1e21;
  background-color: #b9bbbe;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}

.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
  opacity: 0.75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}

.toast {
  flex-basis: 350px;
  max-width: 350px;
  font-size: 0.875rem;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  opacity: 0;
  border-radius: 0.25rem;
}

.toast:not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast.showing {
  opacity: 1;
}

.toast.show {
  display: block;
  opacity: 1;
}

.toast.hide {
  display: none;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.toast-body {
  padding: 0.75rem;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}

.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}

.modal-footer > * {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {
  padding: 0.4rem 0;
}

.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {
  bottom: 0;
}

.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {
  padding: 0 0.4rem;
}

.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {
  padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {
  top: 0;
}

.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {
  padding: 0 0.4rem;
}

.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}

.popover .arrow::before, .popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top, .bs-popover-auto[x-placement^=top] {
  margin-bottom: 0.5rem;
}

.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {
  bottom: calc(-0.5rem - 1px);
}

.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-right, .bs-popover-auto[x-placement^=right] {
  margin-left: 0.5rem;
}

.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {
  margin-top: 0.5rem;
}

.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {
  top: calc(-0.5rem - 1px);
}

.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}

.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left, .bs-popover-auto[x-placement^=left] {
  margin-right: 0.5rem;
}

.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.5rem 0.75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}
.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    transition: none;
  }
}
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50%/100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner-grow 0.75s linear infinite;
  animation: spinner-grow 0.75s linear infinite;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-primary {
  background-color: #007bff !important;
}

a.bg-primary:hover, a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #0062cc !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #545b62 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

a.bg-success:hover, a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #1e7e34 !important;
}

.bg-info {
  background-color: #17a2b8 !important;
}

a.bg-info:hover, a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #117a8b !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

a.bg-warning:hover, a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #d39e00 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

a.bg-danger:hover, a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #bd2130 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #dae0e5 !important;
}

.bg-dark {
  background-color: #343a40 !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-right {
  border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
  border-left: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #007bff !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #28a745 !important;
}

.border-info {
  border-color: #17a2b8 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #343a40 !important;
}

.border-white {
  border-color: #fff !important;
}

.rounded-sm {
  border-radius: 0.2rem !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-lg {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.embed-responsive-21by9::before {
  padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}
.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }

  .float-sm-right {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }
}
@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }

  .float-md-right {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }
}
@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }

  .float-lg-right {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }

  .float-xl-right {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }
}
.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  -ms-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  -ms-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.fixed-top, .sb-nav-fixed #layoutSidenav #layoutSidenav_nav, .sb-nav-fixed .sb-topnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports (position: -webkit-sticky) or (position: sticky) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }

  .mt-sm-0,
.my-sm-0 {
    margin-top: 0 !important;
  }

  .mr-sm-0,
.mx-sm-0 {
    margin-right: 0 !important;
  }

  .mb-sm-0,
.my-sm-0 {
    margin-bottom: 0 !important;
  }

  .ml-sm-0,
.mx-sm-0 {
    margin-left: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .mt-sm-1,
.my-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mr-sm-1,
.mx-sm-1 {
    margin-right: 0.25rem !important;
  }

  .mb-sm-1,
.my-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-sm-1,
.mx-sm-1 {
    margin-left: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .mt-sm-2,
.my-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mr-sm-2,
.mx-sm-2 {
    margin-right: 0.5rem !important;
  }

  .mb-sm-2,
.my-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-sm-2,
.mx-sm-2 {
    margin-left: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .mt-sm-3,
.my-sm-3 {
    margin-top: 1rem !important;
  }

  .mr-sm-3,
.mx-sm-3 {
    margin-right: 1rem !important;
  }

  .mb-sm-3,
.my-sm-3 {
    margin-bottom: 1rem !important;
  }

  .ml-sm-3,
.mx-sm-3 {
    margin-left: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .mt-sm-4,
.my-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mr-sm-4,
.mx-sm-4 {
    margin-right: 1.5rem !important;
  }

  .mb-sm-4,
.my-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-sm-4,
.mx-sm-4 {
    margin-left: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .mt-sm-5,
.my-sm-5 {
    margin-top: 3rem !important;
  }

  .mr-sm-5,
.mx-sm-5 {
    margin-right: 3rem !important;
  }

  .mb-sm-5,
.my-sm-5 {
    margin-bottom: 3rem !important;
  }

  .ml-sm-5,
.mx-sm-5 {
    margin-left: 3rem !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .pt-sm-0,
.py-sm-0 {
    padding-top: 0 !important;
  }

  .pr-sm-0,
.px-sm-0 {
    padding-right: 0 !important;
  }

  .pb-sm-0,
.py-sm-0 {
    padding-bottom: 0 !important;
  }

  .pl-sm-0,
.px-sm-0 {
    padding-left: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .pt-sm-1,
.py-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pr-sm-1,
.px-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pb-sm-1,
.py-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-sm-1,
.px-sm-1 {
    padding-left: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .pt-sm-2,
.py-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pr-sm-2,
.px-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pb-sm-2,
.py-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-sm-2,
.px-sm-2 {
    padding-left: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .pt-sm-3,
.py-sm-3 {
    padding-top: 1rem !important;
  }

  .pr-sm-3,
.px-sm-3 {
    padding-right: 1rem !important;
  }

  .pb-sm-3,
.py-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pl-sm-3,
.px-sm-3 {
    padding-left: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .pt-sm-4,
.py-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pr-sm-4,
.px-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pb-sm-4,
.py-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-sm-4,
.px-sm-4 {
    padding-left: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .pt-sm-5,
.py-sm-5 {
    padding-top: 3rem !important;
  }

  .pr-sm-5,
.px-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-5,
.py-sm-5 {
    padding-bottom: 3rem !important;
  }

  .pl-sm-5,
.px-sm-5 {
    padding-left: 3rem !important;
  }

  .m-sm-n1 {
    margin: -0.25rem !important;
  }

  .mt-sm-n1,
.my-sm-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-sm-n1,
.mx-sm-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-sm-n1,
.my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-sm-n1,
.mx-sm-n1 {
    margin-left: -0.25rem !important;
  }

  .m-sm-n2 {
    margin: -0.5rem !important;
  }

  .mt-sm-n2,
.my-sm-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-sm-n2,
.mx-sm-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-sm-n2,
.my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-sm-n2,
.mx-sm-n2 {
    margin-left: -0.5rem !important;
  }

  .m-sm-n3 {
    margin: -1rem !important;
  }

  .mt-sm-n3,
.my-sm-n3 {
    margin-top: -1rem !important;
  }

  .mr-sm-n3,
.mx-sm-n3 {
    margin-right: -1rem !important;
  }

  .mb-sm-n3,
.my-sm-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-sm-n3,
.mx-sm-n3 {
    margin-left: -1rem !important;
  }

  .m-sm-n4 {
    margin: -1.5rem !important;
  }

  .mt-sm-n4,
.my-sm-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-sm-n4,
.mx-sm-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-sm-n4,
.my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-sm-n4,
.mx-sm-n4 {
    margin-left: -1.5rem !important;
  }

  .m-sm-n5 {
    margin: -3rem !important;
  }

  .mt-sm-n5,
.my-sm-n5 {
    margin-top: -3rem !important;
  }

  .mr-sm-n5,
.mx-sm-n5 {
    margin-right: -3rem !important;
  }

  .mb-sm-n5,
.my-sm-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-sm-n5,
.mx-sm-n5 {
    margin-left: -3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mt-sm-auto,
.my-sm-auto {
    margin-top: auto !important;
  }

  .mr-sm-auto,
.mx-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-auto,
.my-sm-auto {
    margin-bottom: auto !important;
  }

  .ml-sm-auto,
.mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }

  .mt-md-0,
.my-md-0 {
    margin-top: 0 !important;
  }

  .mr-md-0,
.mx-md-0 {
    margin-right: 0 !important;
  }

  .mb-md-0,
.my-md-0 {
    margin-bottom: 0 !important;
  }

  .ml-md-0,
.mx-md-0 {
    margin-left: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .mt-md-1,
.my-md-1 {
    margin-top: 0.25rem !important;
  }

  .mr-md-1,
.mx-md-1 {
    margin-right: 0.25rem !important;
  }

  .mb-md-1,
.my-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-md-1,
.mx-md-1 {
    margin-left: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .mt-md-2,
.my-md-2 {
    margin-top: 0.5rem !important;
  }

  .mr-md-2,
.mx-md-2 {
    margin-right: 0.5rem !important;
  }

  .mb-md-2,
.my-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-md-2,
.mx-md-2 {
    margin-left: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .mt-md-3,
.my-md-3 {
    margin-top: 1rem !important;
  }

  .mr-md-3,
.mx-md-3 {
    margin-right: 1rem !important;
  }

  .mb-md-3,
.my-md-3 {
    margin-bottom: 1rem !important;
  }

  .ml-md-3,
.mx-md-3 {
    margin-left: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .mt-md-4,
.my-md-4 {
    margin-top: 1.5rem !important;
  }

  .mr-md-4,
.mx-md-4 {
    margin-right: 1.5rem !important;
  }

  .mb-md-4,
.my-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-md-4,
.mx-md-4 {
    margin-left: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .mt-md-5,
.my-md-5 {
    margin-top: 3rem !important;
  }

  .mr-md-5,
.mx-md-5 {
    margin-right: 3rem !important;
  }

  .mb-md-5,
.my-md-5 {
    margin-bottom: 3rem !important;
  }

  .ml-md-5,
.mx-md-5 {
    margin-left: 3rem !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .pt-md-0,
.py-md-0 {
    padding-top: 0 !important;
  }

  .pr-md-0,
.px-md-0 {
    padding-right: 0 !important;
  }

  .pb-md-0,
.py-md-0 {
    padding-bottom: 0 !important;
  }

  .pl-md-0,
.px-md-0 {
    padding-left: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .pt-md-1,
.py-md-1 {
    padding-top: 0.25rem !important;
  }

  .pr-md-1,
.px-md-1 {
    padding-right: 0.25rem !important;
  }

  .pb-md-1,
.py-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-md-1,
.px-md-1 {
    padding-left: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .pt-md-2,
.py-md-2 {
    padding-top: 0.5rem !important;
  }

  .pr-md-2,
.px-md-2 {
    padding-right: 0.5rem !important;
  }

  .pb-md-2,
.py-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-md-2,
.px-md-2 {
    padding-left: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .pt-md-3,
.py-md-3 {
    padding-top: 1rem !important;
  }

  .pr-md-3,
.px-md-3 {
    padding-right: 1rem !important;
  }

  .pb-md-3,
.py-md-3 {
    padding-bottom: 1rem !important;
  }

  .pl-md-3,
.px-md-3 {
    padding-left: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .pt-md-4,
.py-md-4 {
    padding-top: 1.5rem !important;
  }

  .pr-md-4,
.px-md-4 {
    padding-right: 1.5rem !important;
  }

  .pb-md-4,
.py-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-md-4,
.px-md-4 {
    padding-left: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .pt-md-5,
.py-md-5 {
    padding-top: 3rem !important;
  }

  .pr-md-5,
.px-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-5,
.py-md-5 {
    padding-bottom: 3rem !important;
  }

  .pl-md-5,
.px-md-5 {
    padding-left: 3rem !important;
  }

  .m-md-n1 {
    margin: -0.25rem !important;
  }

  .mt-md-n1,
.my-md-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-md-n1,
.mx-md-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-md-n1,
.my-md-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-md-n1,
.mx-md-n1 {
    margin-left: -0.25rem !important;
  }

  .m-md-n2 {
    margin: -0.5rem !important;
  }

  .mt-md-n2,
.my-md-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-md-n2,
.mx-md-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-md-n2,
.my-md-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-md-n2,
.mx-md-n2 {
    margin-left: -0.5rem !important;
  }

  .m-md-n3 {
    margin: -1rem !important;
  }

  .mt-md-n3,
.my-md-n3 {
    margin-top: -1rem !important;
  }

  .mr-md-n3,
.mx-md-n3 {
    margin-right: -1rem !important;
  }

  .mb-md-n3,
.my-md-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-md-n3,
.mx-md-n3 {
    margin-left: -1rem !important;
  }

  .m-md-n4 {
    margin: -1.5rem !important;
  }

  .mt-md-n4,
.my-md-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-md-n4,
.mx-md-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-md-n4,
.my-md-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-md-n4,
.mx-md-n4 {
    margin-left: -1.5rem !important;
  }

  .m-md-n5 {
    margin: -3rem !important;
  }

  .mt-md-n5,
.my-md-n5 {
    margin-top: -3rem !important;
  }

  .mr-md-n5,
.mx-md-n5 {
    margin-right: -3rem !important;
  }

  .mb-md-n5,
.my-md-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-md-n5,
.mx-md-n5 {
    margin-left: -3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mt-md-auto,
.my-md-auto {
    margin-top: auto !important;
  }

  .mr-md-auto,
.mx-md-auto {
    margin-right: auto !important;
  }

  .mb-md-auto,
.my-md-auto {
    margin-bottom: auto !important;
  }

  .ml-md-auto,
.mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }

  .mt-lg-0,
.my-lg-0 {
    margin-top: 0 !important;
  }

  .mr-lg-0,
.mx-lg-0 {
    margin-right: 0 !important;
  }

  .mb-lg-0,
.my-lg-0 {
    margin-bottom: 0 !important;
  }

  .ml-lg-0,
.mx-lg-0 {
    margin-left: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .mt-lg-1,
.my-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mr-lg-1,
.mx-lg-1 {
    margin-right: 0.25rem !important;
  }

  .mb-lg-1,
.my-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-lg-1,
.mx-lg-1 {
    margin-left: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .mt-lg-2,
.my-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mr-lg-2,
.mx-lg-2 {
    margin-right: 0.5rem !important;
  }

  .mb-lg-2,
.my-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-lg-2,
.mx-lg-2 {
    margin-left: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .mt-lg-3,
.my-lg-3 {
    margin-top: 1rem !important;
  }

  .mr-lg-3,
.mx-lg-3 {
    margin-right: 1rem !important;
  }

  .mb-lg-3,
.my-lg-3 {
    margin-bottom: 1rem !important;
  }

  .ml-lg-3,
.mx-lg-3 {
    margin-left: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .mt-lg-4,
.my-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mr-lg-4,
.mx-lg-4 {
    margin-right: 1.5rem !important;
  }

  .mb-lg-4,
.my-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-lg-4,
.mx-lg-4 {
    margin-left: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .mt-lg-5,
.my-lg-5 {
    margin-top: 3rem !important;
  }

  .mr-lg-5,
.mx-lg-5 {
    margin-right: 3rem !important;
  }

  .mb-lg-5,
.my-lg-5 {
    margin-bottom: 3rem !important;
  }

  .ml-lg-5,
.mx-lg-5 {
    margin-left: 3rem !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .pt-lg-0,
.py-lg-0 {
    padding-top: 0 !important;
  }

  .pr-lg-0,
.px-lg-0 {
    padding-right: 0 !important;
  }

  .pb-lg-0,
.py-lg-0 {
    padding-bottom: 0 !important;
  }

  .pl-lg-0,
.px-lg-0 {
    padding-left: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .pt-lg-1,
.py-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pr-lg-1,
.px-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pb-lg-1,
.py-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-lg-1,
.px-lg-1 {
    padding-left: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .pt-lg-2,
.py-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pr-lg-2,
.px-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pb-lg-2,
.py-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-lg-2,
.px-lg-2 {
    padding-left: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .pt-lg-3,
.py-lg-3 {
    padding-top: 1rem !important;
  }

  .pr-lg-3,
.px-lg-3 {
    padding-right: 1rem !important;
  }

  .pb-lg-3,
.py-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pl-lg-3,
.px-lg-3 {
    padding-left: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .pt-lg-4,
.py-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pr-lg-4,
.px-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pb-lg-4,
.py-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-lg-4,
.px-lg-4 {
    padding-left: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .pt-lg-5,
.py-lg-5 {
    padding-top: 3rem !important;
  }

  .pr-lg-5,
.px-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-5,
.py-lg-5 {
    padding-bottom: 3rem !important;
  }

  .pl-lg-5,
.px-lg-5 {
    padding-left: 3rem !important;
  }

  .m-lg-n1 {
    margin: -0.25rem !important;
  }

  .mt-lg-n1,
.my-lg-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-lg-n1,
.mx-lg-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-lg-n1,
.my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-lg-n1,
.mx-lg-n1 {
    margin-left: -0.25rem !important;
  }

  .m-lg-n2 {
    margin: -0.5rem !important;
  }

  .mt-lg-n2,
.my-lg-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-lg-n2,
.mx-lg-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-lg-n2,
.my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-lg-n2,
.mx-lg-n2 {
    margin-left: -0.5rem !important;
  }

  .m-lg-n3 {
    margin: -1rem !important;
  }

  .mt-lg-n3,
.my-lg-n3 {
    margin-top: -1rem !important;
  }

  .mr-lg-n3,
.mx-lg-n3 {
    margin-right: -1rem !important;
  }

  .mb-lg-n3,
.my-lg-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-lg-n3,
.mx-lg-n3 {
    margin-left: -1rem !important;
  }

  .m-lg-n4 {
    margin: -1.5rem !important;
  }

  .mt-lg-n4,
.my-lg-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-lg-n4,
.mx-lg-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-lg-n4,
.my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-lg-n4,
.mx-lg-n4 {
    margin-left: -1.5rem !important;
  }

  .m-lg-n5 {
    margin: -3rem !important;
  }

  .mt-lg-n5,
.my-lg-n5 {
    margin-top: -3rem !important;
  }

  .mr-lg-n5,
.mx-lg-n5 {
    margin-right: -3rem !important;
  }

  .mb-lg-n5,
.my-lg-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-lg-n5,
.mx-lg-n5 {
    margin-left: -3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mt-lg-auto,
.my-lg-auto {
    margin-top: auto !important;
  }

  .mr-lg-auto,
.mx-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-auto,
.my-lg-auto {
    margin-bottom: auto !important;
  }

  .ml-lg-auto,
.mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }

  .mt-xl-0,
.my-xl-0 {
    margin-top: 0 !important;
  }

  .mr-xl-0,
.mx-xl-0 {
    margin-right: 0 !important;
  }

  .mb-xl-0,
.my-xl-0 {
    margin-bottom: 0 !important;
  }

  .ml-xl-0,
.mx-xl-0 {
    margin-left: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .mt-xl-1,
.my-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mr-xl-1,
.mx-xl-1 {
    margin-right: 0.25rem !important;
  }

  .mb-xl-1,
.my-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-xl-1,
.mx-xl-1 {
    margin-left: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .mt-xl-2,
.my-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mr-xl-2,
.mx-xl-2 {
    margin-right: 0.5rem !important;
  }

  .mb-xl-2,
.my-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-xl-2,
.mx-xl-2 {
    margin-left: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .mt-xl-3,
.my-xl-3 {
    margin-top: 1rem !important;
  }

  .mr-xl-3,
.mx-xl-3 {
    margin-right: 1rem !important;
  }

  .mb-xl-3,
.my-xl-3 {
    margin-bottom: 1rem !important;
  }

  .ml-xl-3,
.mx-xl-3 {
    margin-left: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .mt-xl-4,
.my-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mr-xl-4,
.mx-xl-4 {
    margin-right: 1.5rem !important;
  }

  .mb-xl-4,
.my-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-xl-4,
.mx-xl-4 {
    margin-left: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .mt-xl-5,
.my-xl-5 {
    margin-top: 3rem !important;
  }

  .mr-xl-5,
.mx-xl-5 {
    margin-right: 3rem !important;
  }

  .mb-xl-5,
.my-xl-5 {
    margin-bottom: 3rem !important;
  }

  .ml-xl-5,
.mx-xl-5 {
    margin-left: 3rem !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .pt-xl-0,
.py-xl-0 {
    padding-top: 0 !important;
  }

  .pr-xl-0,
.px-xl-0 {
    padding-right: 0 !important;
  }

  .pb-xl-0,
.py-xl-0 {
    padding-bottom: 0 !important;
  }

  .pl-xl-0,
.px-xl-0 {
    padding-left: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .pt-xl-1,
.py-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pr-xl-1,
.px-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pb-xl-1,
.py-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-xl-1,
.px-xl-1 {
    padding-left: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .pt-xl-2,
.py-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pr-xl-2,
.px-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pb-xl-2,
.py-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-xl-2,
.px-xl-2 {
    padding-left: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .pt-xl-3,
.py-xl-3 {
    padding-top: 1rem !important;
  }

  .pr-xl-3,
.px-xl-3 {
    padding-right: 1rem !important;
  }

  .pb-xl-3,
.py-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pl-xl-3,
.px-xl-3 {
    padding-left: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .pt-xl-4,
.py-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pr-xl-4,
.px-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pb-xl-4,
.py-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-xl-4,
.px-xl-4 {
    padding-left: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .pt-xl-5,
.py-xl-5 {
    padding-top: 3rem !important;
  }

  .pr-xl-5,
.px-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-5,
.py-xl-5 {
    padding-bottom: 3rem !important;
  }

  .pl-xl-5,
.px-xl-5 {
    padding-left: 3rem !important;
  }

  .m-xl-n1 {
    margin: -0.25rem !important;
  }

  .mt-xl-n1,
.my-xl-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-xl-n1,
.mx-xl-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-xl-n1,
.my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-xl-n1,
.mx-xl-n1 {
    margin-left: -0.25rem !important;
  }

  .m-xl-n2 {
    margin: -0.5rem !important;
  }

  .mt-xl-n2,
.my-xl-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-xl-n2,
.mx-xl-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-xl-n2,
.my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-xl-n2,
.mx-xl-n2 {
    margin-left: -0.5rem !important;
  }

  .m-xl-n3 {
    margin: -1rem !important;
  }

  .mt-xl-n3,
.my-xl-n3 {
    margin-top: -1rem !important;
  }

  .mr-xl-n3,
.mx-xl-n3 {
    margin-right: -1rem !important;
  }

  .mb-xl-n3,
.my-xl-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-xl-n3,
.mx-xl-n3 {
    margin-left: -1rem !important;
  }

  .m-xl-n4 {
    margin: -1.5rem !important;
  }

  .mt-xl-n4,
.my-xl-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-xl-n4,
.mx-xl-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-xl-n4,
.my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-xl-n4,
.mx-xl-n4 {
    margin-left: -1.5rem !important;
  }

  .m-xl-n5 {
    margin: -3rem !important;
  }

  .mt-xl-n5,
.my-xl-n5 {
    margin-top: -3rem !important;
  }

  .mr-xl-n5,
.mx-xl-n5 {
    margin-right: -3rem !important;
  }

  .mb-xl-n5,
.my-xl-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-xl-n5,
.mx-xl-n5 {
    margin-left: -3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mt-xl-auto,
.my-xl-auto {
    margin-top: auto !important;
  }

  .mr-xl-auto,
.mx-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-auto,
.my-xl-auto {
    margin-bottom: auto !important;
  }

  .ml-xl-auto,
.mx-xl-auto {
    margin-left: auto !important;
  }
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}

.text-primary {
  color: #007bff !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #0056b3 !important;
}

.text-secondary {
  color: #6c757d !important;
}

a.text-secondary:hover, a.text-secondary:focus {
  color: #494f54 !important;
}

.text-success {
  color: #28a745 !important;
}

a.text-success:hover, a.text-success:focus {
  color: #19692c !important;
}

.text-info {
  color: #17a2b8 !important;
}

a.text-info:hover, a.text-info:focus {
  color: #0f6674 !important;
}

.text-warning {
  color: #ffc107 !important;
}

a.text-warning:hover, a.text-warning:focus {
  color: #ba8b00 !important;
}

.text-danger {
  color: #dc3545 !important;
}

a.text-danger:hover, a.text-danger:focus {
  color: #a71d2a !important;
}

.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover, a.text-light:focus {
  color: #cbd3da !important;
}

.text-dark {
  color: #343a40 !important;
}

a.text-dark:hover, a.text-dark:focus {
  color: #121416 !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {
  *,
*::before,
*::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " (" attr(title) ")";
  }

  pre {
    white-space: pre-wrap !important;
  }

  pre,
blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
img {
    page-break-inside: avoid;
  }

  p,
h2,
h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
h3 {
    page-break-after: avoid;
  }

  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .navbar {
    display: none;
  }

  .badge {
    border: 1px solid #000;
  }

  .table {
    border-collapse: collapse !important;
  }

  .table td,
.table th {
    background-color: #fff !important;
  }

  .table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6 !important;
  }

  .table-dark {
    color: inherit;
  }

  .table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
    border-color: #dee2e6;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6;
  }
}
html,
body {
  height: 100%;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

#layoutAuthentication {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#layoutAuthentication #layoutAuthentication_content {
  min-width: 0;
  flex-grow: 1;
}

#layoutAuthentication #layoutAuthentication_footer {
  min-width: 0;
}

#layoutSidenav {
  display: flex;
}

#layoutSidenav #layoutSidenav_nav {
  flex-basis: 225px;
  flex-shrink: 0;
  transition: transform 0.15s ease-in-out;
  z-index: 1038;
  transform: translateX(-225px);
}

#layoutSidenav #layoutSidenav_content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  flex-grow: 1;
  min-height: calc(100vh - 56px);
  margin-left: -225px;
}

.sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
  transform: translateX(0);
}

.sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1037;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

@media (min-width: 992px) {
  #layoutSidenav #layoutSidenav_nav {
    transform: translateX(0);
  }

  #layoutSidenav #layoutSidenav_content {
    margin-left: 0;
    transition: margin 0.15s ease-in-out;
  }

  .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
    transform: translateX(-225px);
  }

  .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content {
    margin-left: -225px;
  }

  .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
    display: none;
  }
}
.sb-nav-fixed .sb-topnav {
  z-index: 1039;
}

.sb-nav-fixed #layoutSidenav #layoutSidenav_nav {
  width: 225px;
  height: 100vh;
  z-index: 1038;
}

.sb-nav-fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav {
  padding-top: 56px;
}

.sb-nav-fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav .sb-sidenav-menu {
  overflow-y: auto;
}

.sb-nav-fixed #layoutSidenav #layoutSidenav_content {
  padding-left: 225px;
  top: 56px;
}

#layoutError {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#layoutError #layoutError_content {
  min-width: 0;
  flex-grow: 1;
}

#layoutError #layoutError_footer {
  min-width: 0;
}

.img-error {
  max-width: 20rem;
}

.nav .nav-link .sb-nav-link-icon,
.sb-sidenav-menu .nav-link .sb-nav-link-icon {
  margin-right: 0.5rem;
}

.sb-topnav {
  padding-left: 0;
  height: 56px;
  z-index: 1039;
}

.sb-topnav .navbar-brand {
  width: 225px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
}

.sb-topnav.navbar-dark #sidebarToggle {
  color: rgba(255, 255, 255, 0.5);
}

.sb-topnav.navbar-light #sidebarToggle {
  color: #212529;
}

.sb-sidenav {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-wrap: nowrap;
}

.sb-sidenav .sb-sidenav-menu {
  flex-grow: 1;
}

.sb-sidenav .sb-sidenav-menu .nav {
  flex-direction: column;
  flex-wrap: nowrap;
}

.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-heading {
  padding: 1.75rem 1rem 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link {
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  position: relative;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-nav-link-icon {
  font-size: 0.9rem;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-sidenav-collapse-arrow {
  display: inline-block;
  margin-left: auto;
  transition: transform 0.15s ease;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link.collapsed .sb-sidenav-collapse-arrow {
  transform: rotate(-90deg);
}

.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-nested {
  margin-left: 1.5rem;
  flex-direction: column;
}

.sb-sidenav .sb-sidenav-footer {
  padding: 0.75rem;
  flex-shrink: 0;
}

.sb-sidenav-dark {
  background-color: #212529;
  color: rgba(255, 255, 255, 0.5);
}

.sb-sidenav-dark .sb-sidenav-menu .sb-sidenav-menu-heading {
  color: rgba(255, 255, 255, 0.25);
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-nav-link-icon {
  color: rgba(255, 255, 255, 0.25);
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
  color: rgba(255, 255, 255, 0.25);
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link:hover {
  color: #fff;
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link.active {
  color: #fff;
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link.active .sb-nav-link-icon {
  color: #fff;
}

.sb-sidenav-dark .sb-sidenav-footer {
  background-color: #343a40;
}

.sb-sidenav-light {
  background-color: #f8f9fa;
  color: #212529;
}

.sb-sidenav-light .sb-sidenav-menu .sb-sidenav-menu-heading {
  color: #adb5bd;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link {
  color: #212529;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link .sb-nav-link-icon {
  color: #adb5bd;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
  color: #adb5bd;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link:hover {
  color: #007bff;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link.active {
  color: #007bff;
}

.sb-sidenav-light .sb-sidenav-menu .nav-link.active .sb-nav-link-icon {
  color: #007bff;
}

.sb-sidenav-light .sb-sidenav-footer {
  background-color: #e9ecef;
}

body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: var(--font-primary);
  position: relative;
}

main {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--color-gray--blue);
}

main::-webkit-scrollbar {
  width: 11px;
}

main {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}

main::-webkit-scrollbar-track {
  background: #CFD8DC;
}

main::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}

.darkmode main {
  background-color: var(--color-gray--dark);
  color: var(--color-white);
}
.darkmode main::-webkit-scrollbar {
  width: 11px;
}
.darkmode main {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}
.darkmode main::-webkit-scrollbar-track {
  background: #CFD8DC;
}
.darkmode main::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  display: flex;
  cursor: pointer;
  color: #90A4AE;
  font-size: var(--text-s);
}
a:hover {
  color: var(--secondary);
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 var(--spacer-m);
  background: var(--color-secondary);
  width: 260px;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
}

.sidebar::-webkit-scrollbar {
  width: 11px;
}

.sidebar {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}

.sidebar::-webkit-scrollbar-track {
  background: #CFD8DC;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #90A4AE;
  border-radius: 6px;
  border: 3px solid #CFD8DC;
}

.sidebar__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar__version {
  font-size: var(--text-xs);
  color: var(--color-gray);
  font-weight: 700;
}

.sidebar__logo {
  display: block;
  height: 85px;
  width: auto;
  margin: var(--text-xl) auto;
  filter: brightness(100);
}

.nav--sidebar {
  margin: var(--text-xl) 0 var(--text-2xl) 0;
}
.nav--sidebar .subtitle {
  display: inline-block;
  margin-bottom: var(--spacer-s);
}

.nav--sidebar__item {
  display: flex;
  align-items: center;
  color: var(--color-white);
  margin-bottom: var(--spacer-m);
}
.nav--sidebar__item i, .nav--sidebar__item svg {
  color: var(--color-gray);
  font-size: var(--text-l);
}
.nav--sidebar__item:hover {
  text-decoration: none;
  color: var(--color-white);
}

.nav--sidebar__item--selected {
  align-items: center;
  padding: var(--spacer-s);
  border-radius: var(--spacer-2xs);
  background-color: var(--color-white);
  color: var(--color-secondary);
}
.nav--sidebar__item--selected i, .nav--sidebar__item--selected svg {
  color: var(--color-secondary);
}
.nav--sidebar__item--selected:hover {
  text-decoration: none;
  color: var(--color-secondary);
}

.nav--sidebar__item span {
  font-weight: 600;
  margin-left: var(--spacer-s);
}

.sidebar__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: var(--spacer-s);
  color: var(--color-white);
  font-size: var(--text-xs);
}
.sidebar__footer .button {
  min-width: 90px;
  background: var(--color-white);
  color: var(--color-secondary);
  margin-bottom: var(--spacer-m);
}
.sidebar__footer a {
  font-size: var(--text-xs);
  color: var(--color-gray);
  font-weight: 700;
  text-decoration: underline;
}

.dataTables_length, .dataTables_filter {
  display: none;
}

.dataTable {
  border-radius: var(--spacer-xs);
  background-color: var(--color-white);
}

.dataTable th {
  text-align: center;
  border-bottom-width: 1px !important;
}

.dataTable td {
  vertical-align: middle;
  text-align: center;
  font-size: var(--spacer-s);
  font-weight: 700;
}

.cell--level {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.cell--level span {
  margin-left: var(--spacer-xs);
}
.cell--level .fa-exclamation-circle {
  color: var(--color-danger);
}

td .button {
  margin: 0 auto;
}

.darkmode .dataTable {
  background-color: var(--color-gray--darker);
  border-color: var(--color-gray--darker) !important;
}
.darkmode .dataTable th {
  border-color: var(--color-gray--darker) !important;
}
.darkmode .dataTable td {
  color: var(--color-gray);
  border-color: var(--color-gray--darker) !important;
}

.table-responsive .td__icon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.table-responsive .td__icon i, .table-responsive .td__icon svg {
  font-size: 20px;
  margin-right: var(--spacer-xs);
  color: var(--color-success);
}
.table-responsive .td__icon-success i, .table-responsive .td__icon-success svg {
  color: var(--color-success);
}
.table-responsive .td__icon-fail i, .table-responsive .td__icon-fail svg {
  color: var(--color-danger);
}

@media only screen and (min-width: 1400px) {
  .dataTable td {
    font-size: var(--text-s);
  }
}
.pagination {
  margin-top: var(--spacer-m);
}

.td-icon i, .td-icon svg {
  margin-right: 6px;
}
.td-icon__pending {
  color: var(--color-danger);
}
.td-icon__enabled {
  color: var(--color-success);
}

.tabs {
  display: flex;
  align-items: center;
  padding: var(--spacer-s);
  height: var(--spacer-2xl);
  border: none;
  background-color: var(--color-white);
  border-radius: var(--spacer-2xs);
}
.tabs .subtitle {
  margin-right: var(--spacer-s);
}

.tabs__item {
  min-width: 90px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px;
  color: var(--color-secondary);
}
.tabs__item span {
  font-weight: 600;
  padding-left: var(--spacer-xs);
}
.tabs__item i, .tabs__item svg {
  color: var(--color-secondary);
}

.tabs__item--selected {
  height: var(--spacer-l);
  background-color: var(--color-tertiary);
  color: var(--color-white);
  border-radius: var(--spacer-xs);
}
.tabs__item--selected svg, .tabs__item--selected i {
  color: var(--color-tertiary);
}
.tabs__item--selected:hover {
  text-decoration: none;
  color: var(--color-white);
}

.tabs--extended {
  border: 1px solid var(--color-gray--darker);
  padding: 0;
}

.tabs--extended .tabs__item {
  height: 52px;
  color: var(--color-gray--darker);
}

.tabs--extended .tabs__item--selected {
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-radius: 0;
}
.tabs--extended .tabs__item--selected:hover {
  text-decoration: none;
  color: var(--color-white);
}

i.bg--level-high {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(../images/bg-level-high.png);
  background-size: cover;
  border-radius: var(--spacer-2xs);
}

i.bg--level-medium {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(../images/bg-level-medium.png);
  background-size: cover;
  border-radius: var(--spacer-2xs);
}

i.bg--level-low {
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--color-success);
  border-radius: var(--spacer-2xs);
}

.hero--student-report {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hero--student-report .tabs {
  margin-right: var(--spacer-m);
}
.hero--student-report .tabs__item--selected {
  background-color: var(--color-gray--darker);
}
.hero--student-report .tabs__item--selected select {
  background: transparent;
  color: var(--color-white);
}

.darkmode .tabs {
  background-color: var(--color-gray--darker);
}
.darkmode .tabs .tabs__item {
  color: var(--color-gray--light);
}
.darkmode .tabs .tabs__item.tabs__item--selected select {
  background: transparent;
  color: var(--color-white);
}

.timeline {
  overflow-y: auto;
}
.timeline .button--timeline-load-more {
  height: 40px;
  min-width: 120px;
  margin-bottom: auto;
  border-radius: 0px;
  order: 2;
}

.timeline--webcam {
  display: flex;
  margin-top: var(--spacer-l);
  justify-content: center;
  align-items: center;
}

.timeline__snapshot {
  width: 60px;
  height: 40px;
}
.timeline__snapshot:hover {
  border: solid 2px var(--color-gray--blue);
}

.timeline__snapshot--low {
  background-color: var(--color-success);
  border-right: 1px solid rgba(var(--color-white), 0.3);
}

.timeline__snapshot--medium {
  background-image: url(../images/bg-level-medium.png);
  background-size: contain;
  border-right: 1px solid rgba(var(--color-white), 0.3);
}

.timeline__snapshot--high {
  background-image: url(../images/bg-level-high.png);
  background-size: contain;
  border-right: 1px solid rgba(var(--color-white), 0.3);
}

.timeline__snapshot img {
  width: 60px;
  height: 40px;
  border: solid var(--spacer-2xs) var(--color-gray--blue);
}

.timeline__frame {
  text-align: center;
}
.timeline__frame span {
  margin-top: var(--spacer-2xs);
  font-size: var(--text-xs);
}

.darkmode .timeline__snapshot img {
  border: solid var(--spacer-2xs) var(--color-gray--darker);
}

.tile {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacer-s);
  border: 1px solid var(--color-gray--light);
  background: var(--color-white);
  justify-content: flex-start;
  align-items: stretch;
  border-radius: var(--spacer-xs);
  font-size: var(--text-s);
  font-weight: 600;
  font-family: var(--font-primary);
}
.tile .tile__content {
  display: flex;
  flex-direction: row;
}
.tile .tile__content .tile__icon {
  margin-right: var(--spacer-xs);
  color: var(--color-gray);
}
.tile .tile__content .tile__title {
  padding-right: var(--spacer-s);
}
.tile .tile__content .tile__title .tile__subtitle {
  font-size: var(--text-s);
  font-weight: 400;
}
.tile .tile__content .tile__actions {
  display: flex;
  margin-left: auto;
}
.tile .tile__content .tile__actions .tile__action-icon {
  color: var(--color-gray);
  font-size: var(--text-l);
  margin-right: var(--spacer-s);
}
.tile .tile__content .tile__actions .correct-answer-icon {
  color: var(--color-success--dark);
  font-size: var(--text-l);
  margin-right: var(--spacer-s);
}
.tile span {
  display: block;
}

.container--tiles {
  margin-top: var(--spacer-s);
  width: 100%;
}
.container--tiles .tile {
  margin-bottom: var(--spacer-s);
}

.top--student-report {
  display: flex;
  align-items: center;
  height: 105px;
  background-color: var(--color-white);
}
.top--student-report__logo {
  height: 64px;
  margin: 0 var(--spacer-m);
}
.top--student-report__info {
  width: 26%;
  padding-right: var(--spacer-m);
}
.top--student-report .breadcrumbs a {
  color: var(--color-gray);
  margin-bottom: var(--spacer-xs);
}
.top--student-report__title {
  display: flex;
}
.top--student-report h3 {
  padding-top: var(--spacer-2xs);
}
.top--student-report .button {
  margin-left: var(--spacer-s);
}

.top--student__navigation {
  display: flex;
  border-right: 1px solid var(--color-gray--blue);
}
.top--student__navigation a {
  height: 105px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--color-gray--blue);
  color: var(--color-gray);
  padding: 0 var(--spacer-xs);
  color: var(--color-gray--darker);
}
.top--student__navigation a:hover {
  text-decoration: none;
  background-color: var(--color-tertiary);
  color: var(--color-white);
}
.top--student__navigation a.selected {
  background-color: var(--color-tertiary);
  color: var(--color-white);
  position: relative;
}
.top--student__navigation a.selected::after {
  content: " ";
  display: block;
  width: 0px;
  height: 0px;
  border-bottom: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid var(--color-tertiary);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.top--student__navigation span {
  margin-top: var(--spacer-xs);
  font-size: var(--text-xs);
}
.top--student__navigation svg {
  font-size: var(--text-xs);
}

.darkmode .top--student-report {
  background-color: var(--color-gray--darker);
  border-bottom: 1px solid var(--color-gray--tenue);
}
.darkmode .top--student-report__logo {
  filter: brightness(100);
}
.darkmode .top--student__navigation {
  border-right: 1px solid var(--color-gray--tenue);
}
.darkmode .top--student__navigation a {
  border-left: 1px solid var(--color-gray--tenue);
  color: var(--color-gray--blue);
}
.darkmode .top--student__navigation a.selected {
  color: var(--color-white);
}

@media only screen and (min-width: 1400px) {
  .top--student-report__logo {
    margin: 0 var(--spacer-l);
  }

  .top--student__navigation a {
    padding: 0 var(--spacer-s);
  }

  .top--student__navigation a span {
    font-size: var(--text-s);
  }
}
@media only screen and (min-width: 1680px) {
  .top--student-report__logo {
    margin: 0 var(--spacer-l);
  }

  .top--student__navigation a {
    padding: 0 var(--spacer-m);
  }

  .top--student__navigation a span {
    font-size: var(--text-s);
  }
}
.sumadi {
  --font-primary: "Montserrat", serif;
  --color-primary: #3347CC;
  --color-primary--dark: #2939A3;
  --color-primary--light: #5C6Cd6;
  --color-primary--lighter: #EBEEFF;
  --color-secondary: #202A46;
  --color-secondary--dark: #101523;
  --color-secondary--light: #303f69;
  --color-tertiary: #03D8D8;
  --color-tertiary--dark: #03A6A6;
  --color-tertiary--light: #13FBFB;
  --color-gray--darker: #1B1C23;
  --color-gray--dark: #454954;
  --color-gray: #818797;
  --color-gray--tenue: #ABAFBA;
  --color-gray--light: #E3E4E8;
  --color-gray--blue: #DFE6EE;
  --color-white: #FFFFFF;
  --color-black: var(--color-gray--darker);
  --color-danger: #E53170;
  --color-danger--dark: #9F1444;
  --color-success: #26A65B;
  --color-success--dark: #1C7D44;
  --color-warning: #F29A0D;
  --color-warning--dark: #C27B0A;
  --btn-bg--primary: linear-gradient( var(--color-primary), var(--color-primary--dark ));
  --gradient-background: linear-gradient(90deg, rgba(82,97,242,1) 0%, rgba(62,84,195,1) 35%, rgba(84,98,246,1) 100%);
  --text-2xs: 10px;
  --text-xs: 12px;
  --text-s: 14px;
  --text-m: 16px;
  --text-l: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --title-h1: 56px;
  --title-h2: 48px;
  --title-h3: 40px;
  --title-h4: 32px;
  --title-h5: 24px;
  --title-h6: 16px;
  --spacer-2xs: 4px;
  --spacer-xs: 8px;
  --spacer-s: 16px;
  --spacer-m: 24px;
  --spacer-l: 32px;
  --spacer-xl: 40px;
  --spacer-2xl: 52px;
  --spacer-3xl: 80px;
}

.darkmode {
  --card-background: #202A46;
  --background: #DFE6EE;
  --highlight: #3549CC;
  --button-shadow: #3f55c5;
  --secondary: #03D8D8;
  --tertiary: #e53170;
  --gradient-background: linear-gradient(90deg, rgba(82,97,242,1) 0%, rgba(62,84,195,1) 35%, rgba(84,98,246,1) 100%);
}

.button--toggle {
  display: block;
  position: relative;
  height: 30px;
  width: 60px;
  margin: 0;
  border-radius: 25px;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-gray);
  font-size: var(--text-m);
}
.button--toggle:hover {
  cursor: pointer;
}

.toggle__handle {
  background-color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 25px;
  transition: left 0.5s;
}

.nav--theme-selector {
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: var(--color-gray--light);
  padding: 0 var(--spacer-m);
}
.nav--theme-selector button {
  width: 60px;
  background-color: var(--color-gray--light);
  margin: 0 var(--spacer-s);
}
.nav--theme-selector button:before {
  content: "";
}
.nav--theme-selector button > .toggle__handle {
  background: var(--color-primary);
}
.nav--theme-selector button.active {
  background-color: var(--color-gray--darker);
}
.nav--theme-selector button.active:before {
  content: "";
  right: 0;
}
.nav--theme-selector button.active > .toggle__handle {
  left: var(--spacer-l);
}
.nav--theme-selector .fa-sun {
  color: var(--color-primary);
  transition: color 0.2s;
}
.nav--theme-selector .fa-moon {
  color: var(--color-gray);
  transition: color 0.2s;
}

.ch-theme, .ch-app {
  position: relative;
  margin: 0 var(--spacer-xs);
}

#theme-toggle {
  position: absolute;
  left: -10px;
  display: none;
}
#theme-toggle ~ .ch-theme .button--toggle .toggle__handle {
  background-color: var(--color-primary);
}
#theme-toggle:checked ~ .fa-sun {
  color: var(--color-gray);
}
#theme-toggle:checked ~ .fa-moon {
  color: var(--color-primary);
}
#theme-toggle:checked ~ .ch-theme .button--toggle {
  background-color: var(--color-gray--darker);
}

.card--modal [type^=checkbox], .modal__header [type^=checkbox] {
  position: absolute;
  left: -10px;
  display: none;
}
.card--modal [type^=checkbox]:checked ~ .ch-theme .button--toggle, .card--modal [type^=checkbox]:checked ~ .modal__row .ch-theme .button--toggle, .modal__header [type^=checkbox]:checked ~ .ch-theme .button--toggle, .modal__header [type^=checkbox]:checked ~ .modal__row .ch-theme .button--toggle {
  background-color: var(--color-primary);
}
.card--modal [type^=checkbox]:checked ~ .ch-theme .button--toggle .toggle__handle, .card--modal [type^=checkbox]:checked ~ .modal__row .ch-theme .button--toggle .toggle__handle, .modal__header [type^=checkbox]:checked ~ .ch-theme .button--toggle .toggle__handle, .modal__header [type^=checkbox]:checked ~ .modal__row .ch-theme .button--toggle .toggle__handle {
  position: absolute;
  background-color: var(--color-white);
  left: 34px;
}

.card--expandable [type^=checkbox] {
  position: absolute;
  left: -10px;
  display: none;
}
.card--expandable [type^=checkbox]:checked ~ .app-list {
  display: block;
  height: 180px;
  opacity: 1;
}

.app-list {
  overflow-y: auto;
  display: none;
  opacity: 0;
  height: 0px;
  max-height: 180px;
  transition: height 1s ease-out;
}
.app-list [type^=checkbox] {
  position: absolute;
  left: -10px;
  display: none;
}
.app-list [type^=checkbox]:checked ~ .ch-app .button--toggle .toggle__handle {
  left: 26px;
}
.app-list [type^=checkbox]:checked ~ .ch-app .button--toggle {
  background-color: var(--color-primary);
}

.checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.checkbox .checkbox__title {
  font-size: 14px;
}

.toggle {
  position: relative;
  display: flex;
}
.toggle input.toggle-input {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
}
.toggle .toggle-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--spacer-s);
  border: 1px solid var(--color-gray--tenue);
  justify-content: flex-start;
  align-items: center;
  min-width: 100px;
  border-radius: var(--spacer-xs);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
  background-color: var(--color-white);
}
.toggle .toggle-icon {
  margin-bottom: var(--spacer-s);
  font-size: var(--text-2xl);
  color: var(--color-gray);
}
.toggle span.toggle-text {
  font-family: var(--font-primary);
  font-size: var(--text-s);
  font-weight: 800;
  text-align: center;
  color: var(--color-secondary);
}
.toggle span.toggle-desc {
  font-size: var(--text-xs);
  font-weight: 500;
}
.toggle input.toggle-input:checked + .toggle-content {
  border: 1px solid var(--color-primary);
  box-shadow: 4px 4px 0px var(--color-gray--light);
}
.toggle input.toggle-input:checked + .toggle-content .toggle-icon {
  color: var(--color-primary);
}
.toggle input.toggle-input:checked + .toggle-content span {
  color: var(--color-primary);
}
.toggle--featured .toggle-content {
  min-width: 200px;
  min-height: 120px;
}
.toggle--extended {
  width: 100%;
}
.toggle--extended .toggle-content {
  width: 100%;
  align-items: flex-start;
}

.selection-container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.selection-container .toggle {
  margin-right: var(--spacer-s);
  margin-bottom: var(--spacer-s);
}
.selection-container .toggle:last-child {
  margin-right: auto;
}

.selection-container--twocolumns {
  display: flex;
  justify-content: space-evenly;
}
.selection-container--twocolumns .toggle-content {
  width: 250px;
  height: 180px;
  padding-top: var(--spacer-l);
}
.selection-container--twocolumns .toggle-icon {
  font-size: var(--title-h1);
}

.form-control--toggle {
  display: flex;
  align-items: center;
  height: 52px;
  flex-grow: 1;
}
.form-control--toggle [type^=checkbox] {
  position: absolute;
  left: -10px;
  display: none;
}
.form-control--toggle .toggle-content {
  position: relative;
  margin: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}
.form-control--toggle .toggle-content .button--toggle {
  display: block;
  position: relative;
  height: 30px;
  min-width: 60px;
  width: 60px;
  margin: 0;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.875rem;
  margin-left: var(--spacer-xs);
}
.form-control--toggle [type^=checkbox]:checked ~ .toggle-content .button--toggle {
  background-color: var(--color-primary);
}
.form-control--toggle [type^=checkbox]:checked ~ .toggle-content .toggle__handle {
  position: absolute;
  background-color: var(--color-white);
  left: 34px;
}
.form-control--toggle--right .toggle-content {
  justify-content: flex-end;
}
.form-control--toggle--left .toggle-content {
  justify-content: flex-start;
}
.form-control--toggle--switch-to-left .toggle-content {
  justify-content: flex-start;
}
.form-control--toggle--switch-to-left .toggle-content h7 {
  order: 3;
}
.form-control--toggle--switch-to-left .toggle-content .button--toggle {
  order: 1;
  margin-left: 0px;
  margin-right: var(--spacer-xs);
}

.toggle-editor {
  position: relative;
  background-color: var(--color-gray--blue);
  border-radius: 5px;
  min-height: 0px;
  height: 0px;
  opacity: 0;
  padding: 0px;
  margin-bottom: 0px;
  transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.toggle-editor--open {
  margin-top: var(--spacer-m);
  height: auto;
  min-height: 150px;
  padding: var(--spacer-l);
  opacity: 1;
}
.toggle-editor__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: var(--spacer-xs);
}
.toggle-editor__footer .actions-container {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
}
.toggle-editor__footer .actions-container .button {
  margin-right: var(--spacer-s);
}
.toggle-editor__footer .actions-container .button:last-child {
  margin-right: 0px;
}
.toggle-editor .form-controls {
  margin-bottom: var(--spacer-m);
}
.toggle-editor .form-controls .input {
  font-size: var(--text-s);
  height: var(--spacer-xl);
}

body {
  font-family: var(--font-primary);
}

h1,
h2,
h3,
h4,
h5,
h6,
.normal-text {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: var(--title-h1);
  display: flex;
  justify-content: center;
  margin: 0px;
  margin-bottom: var(--spacer-xs);
}
h1.heading--primary,
h2.heading--primary,
h3.heading--primary,
h4.heading--primary,
h5.heading--primary,
h6.heading--primary,
.normal-text.heading--primary {
  color: var(--color-primary);
}
h1.heading--secondary,
h2.heading--secondary,
h3.heading--secondary,
h4.heading--secondary,
h5.heading--secondary,
h6.heading--secondary,
.normal-text.heading--secondary {
  color: var(--color-secondary);
}
h1.heading--tertiary,
h2.heading--tertiary,
h3.heading--tertiary,
h4.heading--tertiary,
h5.heading--tertiary,
h6.heading--tertiary,
.normal-text.heading--tertiary {
  color: var(--color-tertiary);
}
h1.heading--black,
h2.heading--black,
h3.heading--black,
h4.heading--black,
h5.heading--black,
h6.heading--black,
.normal-text.heading--black {
  color: var(--color-black);
}

h2 {
  font-size: var(--title-h2);
}

h3 {
  font-size: var(--title-h3);
}

h4 {
  font-size: var(--title-h4);
}

h5 {
  font-size: var(--title-h5);
}

h6 {
  font-size: var(--title-h6);
}

.normal-text {
  font-size: var(--text-m);
  font-weight: 400;
  margin-bottom: var(--spacer-xl);
  line-height: 1.5;
}

.subtitle {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: var(--text-m);
  text-transform: none;
  color: var(--color-gray--tenue);
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0px;
  margin-bottom: var(--spacer-xs);
}
.subtitle.subtitle--block {
  font-weight: 400;
  display: block;
  line-height: 1.75;
  margin-bottom: var(--spacer-m);
}
.subtitle.subtitle--block span, .subtitle.subtitle--block a, .subtitle.subtitle--block .link, .subtitle.subtitle--block p {
  display: inline;
}

.link {
  font-family: var(--font-primary);
  font-size: var(--text-m);
  font-weight: 400;
  text-decoration: underline;
  text-transform: none;
  color: var(--color-tertiary);
}

.wizard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  color: var(--color-black);
  padding: var(--spacer-m) var(--spacer-xl);
  border-radius: 0px;
  width: 100%;
  min-height: 96px;
  box-shadow: 0px 2px 0px rgba(var(--color-black), 0.1);
  margin-bottom: var(--spacer-xl);
}
