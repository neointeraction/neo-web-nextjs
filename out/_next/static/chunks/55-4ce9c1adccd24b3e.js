(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{56055:function(e,s,a){"use strict";a.d(s,{Z:function(){return I}});var t=a(85893),i=a(67294),c=a(83336),n=a(40782),l=(a(40993),a(44006)),r=a(81233),o=a.n(r),N=a(17603),u=a.n(N),d=a(41283),M=a.n(d),j=a(9669),h=a.n(j);function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,s){return!s||"object"!==y(s)&&"function"!==typeof s?D(e):s}function p(e,s){return(p=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function T(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=x(e);if(s){var i=x(this).constructor;a=Reflect.construct(t,arguments,i)}else a=t.apply(this,arguments);return z(this,a)}}function O(e){return(0,t.jsxs)("label",{className:"InputFile",onChange:e.onChange,children:[(0,t.jsxs)("span",{className:"upload-file-input",children:[(0,t.jsx)("span",{children:(0,t.jsx)("img",{src:u(),alt:"close-modal"})}),(0,t.jsxs)("span",{className:"upload-content",children:[(0,t.jsx)("p",{className:"upload-label",children:"Attach resume/portfolio (5Mb Max)"}),(0,t.jsx)("p",{className:"upload-filename",children:e.filename})]})]}),(0,t.jsx)("input",{type:"file",name:"image",accept:".docx,.pdf",onChange:e.onChange})]})}var I=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&p(e,s)}(N,e);var s,a,i,r=T(N);function N(){var e;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,N),m(D(e=r.call(this)),"handleInputChange",(function(s){if(s.target.files[0])if(s.target.files[0].size>5242880)alert("The uploaded file is exceeds Max Mb");else{e.setState({files:[]});var a=s.target.files,t=s.target.files[0].name,i=new FileReader,c=a[0];i.onloadend=function(){e.setState({files:i.result,message:t})},i.readAsDataURL(c)}})),m(D(e),"handleSendFiles",(function(){console.log(e.state.files[0])})),m(D(e),"SuccessToast",(function(){return(0,t.jsxs)("div",{className:"success-msg-download",children:[(0,t.jsx)("div",{class:"check-wrap"}),(0,t.jsx)("p",{children:"Mail Sent ! Your request has been successfully submitted!"})]})})),e.state={name:"",email:"",message:"No Attachment",files:[],description:"",service:"",currentSalary:"",expectedSalary:"",noticePeriod:"",reason:"",link:"",submitStatus:!1,jobType:"UX Designer",isCaptchaValid:!1},e.handleChange=e.handleChange.bind(D(e)),e.handleInputChange=e.handleInputChange.bind(D(e)),e.submitEmail=e.submitEmail.bind(D(e)),e.validator=new(M()),e.onLoadRecaptcha=e.onLoadRecaptcha.bind(D(e)),e.verifyCallback=e.verifyCallback.bind(D(e)),e}return s=N,(a=[{key:"submitEmail",value:function(e){if(e.preventDefault(),this.validator.allValid()&&this.state.isCaptchaValid){var s=this;this.setState({submitStatus:!0}),h().post("https://www.neointeraction.com/server/jobrequest",this.state).then((function(e){"success"===e.data.status?(s.setState({submitStatus:!1}),(0,n.Am)(s.SuccessToast,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),s.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}else this.validator.showMessages(),this.forceUpdate()}},{key:"componentDidMount",value:function(){(0,l.loadReCaptcha)(),this.captchaDemo&&(console.log("started, just a second..."),this.captchaDemo.reset())}},{key:"onLoadRecaptcha",value:function(){this.captchaDemo&&this.captchaDemo.reset()}},{key:"verifyCallback",value:function(e){this.setState({isCaptchaValid:!0}),console.log(e,"<= your recaptcha token")}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:"",files:[],description:"",service:"",currentSalary:"",expectedSalary:"",noticePeriod:"",reason:"",link:""})}},{key:"handleChange",value:function(e){var s=e.target,a=s.name,t=s.value,i=s.type,c=s.checked;"checkbox"===i?this.setState(m({},a,c)):this.setState(m({},a,t))}},{key:"render",value:function(){var e=this,s=this.props.togglePopover;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"modal-container animated fadeIn",children:[(0,t.jsx)("div",{className:"popover-relative",children:(0,t.jsx)("button",{onClick:s,className:"modal-close model-close-ux",children:(0,t.jsx)("img",{src:o(),alt:"close-modal"})})}),(0,t.jsx)(c.Z,{animation:"fadeIn",offset:-200,children:(0,t.jsx)("div",{className:"intern-section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("h1",{className:"main-title animated text-left fadeIn pop-title",children:"Applying for an UX Designer"}),(0,t.jsxs)("ul",{className:"apply-info",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:" Position"})," : UX Designer"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Experience"})," : 1+ year"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Location"})," : Bangalore, India"]})]}),(0,t.jsx)("p",{className:"ux-sub-text",children:"Role & Responsibilities"}),(0,t.jsxs)("ul",{className:"solution-list ux-pop-title mb-20p",children:[(0,t.jsx)("li",{children:"Gather information about users and step into their shoes by developing empathy and understanding."}),(0,t.jsx)("li",{children:"Understand the business requirements and overall goals of a project."}),(0,t.jsx)("li",{children:"Develop a flow, a plan, and break down the various user journeys that are required to achieve the best possible experience."}),(0,t.jsx)("li",{children:"Communicate and collaborate with stakeholders and internal teams to help them understand design concepts"}),(0,t.jsx)("li",{children:"Have a good eye for detail and always try to simplify a user\u2019s experience."})]}),(0,t.jsx)("p",{className:"ux-sub-text",children:"Skills"}),(0,t.jsxs)("ul",{className:"solution-list ux-pop-title",children:[(0,t.jsx)("li",{children:"Understanding of UX principles and methodologies."}),(0,t.jsx)("li",{children:"Ability to take feedback and design inputs."}),(0,t.jsx)("li",{children:"Skilled at rapid prototyping, UX research, developing wireframes, creating product mock-ups, analyzing business processes."}),(0,t.jsx)("li",{children:"Understanding of Web and mobile Ux best practices."}),(0,t.jsx)("li",{children:"Experience in prototyping - Axure, Sketch, Figma, Adobe XD, Marvel App."}),(0,t.jsx)("li",{children:"Degree in any Design discipline (Interaction Design preferred)"})]})]}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("form",{className:"form-section margin-add",children:[(0,t.jsxs)("div",{className:"side",children:[(0,t.jsx)("h1",{className:"form-title",children:"Tell us about yourself"}),(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Name",name:"name",onChange:this.handleChange,value:this.state.name}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("Name",this.state.name,"required|alpha"),(0,t.jsx)("div",{className:"row ",children:(0,t.jsxs)("div",{className:"col-md-12",children:[(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("email",this.state.email,"required|email")]})})]}),(0,t.jsxs)("div",{className:"side",children:[(0,t.jsx)("div",{className:"form-group input-custom-field",children:(0,t.jsx)("div",{className:"FileUploadForm",children:(0,t.jsx)(O,{onChange:this.handleInputChange,filename:this.state.message,name:"attachment"})})}),this.validator.message("attachment","No Attachment"!==this.state.message?this.state.message:null,"required"),(0,t.jsxs)("div",{className:"row ",children:[(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Current salary",name:"currentSalary",onChange:this.handleChange,value:this.state.currentSalary}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("current salary",this.state.currentSalary,"required|numeric|min:0,num")]}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Expected salary",name:"expectedSalary",onChange:this.handleChange,value:this.state.expectedSalary}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("expected salary",this.state.expectedSalary,"required|numeric|min:0,num")]}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Notice period",name:"noticePeriod",onChange:this.handleChange,value:this.state.noticePeriod}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("notice period",this.state.noticePeriod,"required")]})]}),(0,t.jsx)("div",{className:"row ",children:(0,t.jsxs)("div",{className:"col-md-12",children:[(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("input",{className:"input-custom",type:"text",placeholder:"Reason for job change",name:"reason",onChange:this.handleChange,value:this.state.reason}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("job change",this.state.reason,"required")]})}),(0,t.jsxs)("div",{className:"input-custom-field",children:[(0,t.jsx)("textarea",{className:"input-custom",rows:"4",placeholder:"Add your Behance/Dribble/Linkedin links here",name:"link",onChange:this.handleChange,value:this.state.link}),(0,t.jsx)("span",{className:"focus-border",children:(0,t.jsx)("i",{})})]}),this.validator.message("above",this.state.link,"required"),(0,t.jsx)("div",{className:"input-custom-field captcha-feild",children:(0,t.jsx)(l.ReCaptcha,{ref:function(s){e.captchaDemo=s},size:"normal",render:"explicit",sitekey:"6LefvnYcAAAAAOvQEHRZMlSVNv9WNqIm9OpQ3e8F",onloadCallback:this.onLoadRecaptcha,verifyCallback:this.verifyCallback})}),(0,t.jsx)("button",{className:"custom-btn form-submit loader-btns",onClick:this.submitEmail,children:this.state.submitStatus?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Submiting"}),(0,t.jsx)("div",{class:"progress-bar",children:(0,t.jsx)("div",{class:"circle border"})})]}):(0,t.jsx)("span",{children:"Submit"})})]})]})})})]})})})})]}),(0,t.jsx)(n.Ix,{})]})}}])&&g(s.prototype,a),i&&g(s,i),N}(i.Component)},17603:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSI0M3B4IiB2aWV3Qm94PSIwIDAgMjIgNDMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hdHRhY2hfZmlsZSAtIG1hdGVyaWFsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFwcGx5LUludGVybnNoaXAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NjcuMDAwMDAwLCAtNDg3LjAwMDAwMCkiIGZpbGwtb3BhY2l0eT0iMC41Ij4KICAgICAgICA8cGF0aCBkPSJNNzg2LjAyODMyMiw0OTYuNzg5NzYgTDc4OSw0OTYuNzg5NzYgTDc4OSw1MTkuMTc5NzM5IEM3ODksNTIxLjE0NzA2OSA3ODguNTEyNzE0LDUyMi45NTgyMzQgNzg3LjUzODEyNiw1MjQuNjEzMjkgQzc4Ni41NjM1MzksNTI2LjI2ODM0NSA3ODUuMjM3NDgxLDUyNy41Nzk4NzkgNzgzLjU1OTkxMyw1MjguNTQ3OTMgQzc4MS44ODIzNDUsNTI5LjUxNTk4MiA3ODAuMDUzMDI0LDUzMCA3NzguMDcxODk1LDUzMCBDNzc2LjA5MDc2Nyw1MzAgNzc0LjI1MzQ1OCw1MjkuNTE1OTgyIDc3Mi41NTk5MTMsNTI4LjU0NzkzIEM3NzAuODY2MzY4LDUyNy41Nzk4NzkgNzY5LjUxNjM0NSw1MjYuMjY4MzQ1IDc2OC41MDk4MDQsNTI0LjYxMzI5IEM3NjcuNTAzMjYzLDUyMi45NTgyMzQgNzY3LDUyMS4xNDcwNjkgNzY3LDUxOS4xNzk3MzkgTDc2Nyw0OTQuODY5MjgxIEM3NjcsNDkzLjQ2NDA0NSA3NjcuMzY3NDYyLDQ5Mi4xNjAzMTggNzY4LjEwMjM5Nyw0OTAuOTU4MDYxIEM3NjguODM3MzMxLDQ4OS43NTU4MDQgNzY5LjgxOTg5Miw0ODguNzk1NTc0IDc3MS4wNTAxMDksNDg4LjA3NzM0MiBDNzcyLjI4MDMyNiw0ODcuMzU5MTEgNzczLjYxNDM3Miw0ODcgNzc1LjA1MjI4OCw0ODcgQzc3Ni40OTAyMDMsNDg3IDc3Ny44MTYyNjEsNDg3LjM1MTMwNCA3NzkuMDMwNTAxLDQ4OC4wNTM5MjIgQzc4MC4yNDQ3NDEsNDg4Ljc1NjUzOSA3ODEuMjExMzI1LDQ4OS43MTY3NyA3ODEuOTMwMjgzLDQ5MC45MzQ2NDEgQzc4Mi42NDkyNDEsNDkyLjE1MjUxMiA3ODMuMDA4NzE1LDQ5My40NjQwNDUgNzgzLjAwODcxNSw0OTQuODY5MjgxIEw3ODMuMDA4NzE1LDUxNS4zMzg3OCBDNzgzLjAwODcxNSw1MTYuMjEzMTQ5IDc4Mi43ODUwNDIsNTE3LjAyNTA1MSA3ODIuMzM3NjkxLDUxNy43NzQ1MSBDNzgxLjg5MDMzOSw1MTguNTIzOTY5IDc4MS4yOTEyMTcsNTE5LjExNzI4MiA3ODAuNTQwMzA1LDUxOS41NTQ0NjYgQzc3OS43ODkzOTMsNTE5Ljk5MTY1MSA3NzguOTY2NTk5LDUyMC4yMTAyNCA3NzguMDcxODk1LDUyMC4yMTAyNCBDNzc3LjE3NzE5Miw1MjAuMjEwMjQgNzc2LjMzODQyMSw1MTkuOTkxNjUxIDc3NS41NTU1NTYsNTE5LjU1NDQ2NiBDNzc0Ljc3MjY5LDUxOS4xMTcyODIgNzc0LjE0OTYwMyw1MTguNTIzOTY5IDc3My42ODYyNzUsNTE3Ljc3NDUxIEM3NzMuMjIyOTQ2LDUxNy4wMjUwNTEgNzcyLjk5MTI4NSw1MTYuMjEzMTQ5IDc3Mi45OTEyODUsNTE1LjMzODc4IEw3NzIuOTkxMjg1LDQ5Ni43ODk3NiBMNzc2LjAxMDg5Myw0OTYuNzg5NzYgTDc3Ni4wMTA4OTMsNTE1LjMzODc4IEM3NzYuMDEwODkzLDUxNS45MDA4NzQgNzc2LjIxMDYwMSw1MTYuMzYxNDcyIDc3Ni42MTAwMjIsNTE2LjcyMDU4OCBDNzc3LjAwOTQ0Myw1MTcuMDc5NzA0IDc3Ny40OTY3MjksNTE3LjI1OTI1OSA3NzguMDcxODk1LDUxNy4yNTkyNTkgQzc3OC42NDcwNjIsNTE3LjI1OTI1OSA3NzkuMTE4MzcxLDUxNy4wNzk3MDQgNzc5LjQ4NTgzOSw1MTYuNzIwNTg4IEM3NzkuODUzMzA2LDUxNi4zNjE0NzIgNzgwLjAzNzAzNyw1MTUuOTAwODc0IDc4MC4wMzcwMzcsNTE1LjMzODc4IEw3ODAuMDM3MDM3LDQ5NC44NjkyODEgQzc4MC4wMzcwMzcsNDkzLjk5NDkxMiA3NzkuODEzMzY1LDQ5My4xNzUyMDQgNzc5LjM2NjAxMyw0OTIuNDEwMTMxIEM3NzguOTE4NjYyLDQ5MS42NDUwNTggNzc4LjMxMTU1MSw0OTEuMDM2MTMyIDc3Ny41NDQ2NjIsNDkwLjU4MzMzMyBDNzc2Ljc3Nzc3NCw0OTAuMTMwNTM1IDc3NS45NDY5OTEsNDg5LjkwNDEzOSA3NzUuMDUyMjg4LDQ4OS45MDQxMzkgQzc3NC4xNTc1ODQsNDg5LjkwNDEzOSA3NzMuMzI2ODAxLDQ5MC4xMzA1MzUgNzcyLjU1OTkxMyw0OTAuNTgzMzMzIEM3NzEuNzkzMDI0LDQ5MS4wMzYxMzIgNzcxLjE3NzkyNSw0OTEuNjQ1MDU4IDc3MC43MTQ1OTcsNDkyLjQxMDEzMSBDNzcwLjI1MTI2OSw0OTMuMTc1MjA0IDc3MC4wMTk2MDgsNDkzLjk5NDkxMiA3NzAuMDE5NjA4LDQ5NC44NjkyODEgTDc3MC4wMTk2MDgsNTE5LjE3OTczOSBDNzcwLjAxOTYwOCw1MjAuNTg0OTc0IDc3MC4zODcwNyw1MjEuODk2NTA4IDc3MS4xMjIwMDQsNTIzLjExNDM3OSBDNzcxLjg1NjkzOSw1MjQuMzMyMjUgNzcyLjgzOTUsNTI1LjMwMDI4NyA3NzQuMDY5NzE3LDUyNi4wMTg1MTkgQzc3NS4yOTk5MzQsNTI2LjczNjc1IDc3Ni42MzM5OCw1MjcuMDk1ODYxIDc3OC4wNzE4OTUsNTI3LjA5NTg2MSBDNzc5LjUwOTgxMSw1MjcuMDk1ODYxIDc4MC44MzU4NjksNTI2LjczNjc1IDc4Mi4wNTAxMDksNTI2LjAxODUxOSBDNzgzLjI2NDM0OSw1MjUuMzAwMjg3IDc4NC4yMzA5MzMsNTI0LjMzMjI1IDc4NC45NDk4OTEsNTIzLjExNDM3OSBDNzg1LjY2ODg0OSw1MjEuODk2NTA4IDc4Ni4wMjgzMjIsNTIwLjU4NDk3NCA3ODYuMDI4MzIyLDUxOS4xNzk3MzkgTDc4Ni4wMjgzMjIsNDk2Ljc4OTc2IFoiIGlkPSJhdHRhY2hfZmlsZS0tLW1hdGVyaWFsIiBmaWxsPSIjMjkyOTM0Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="}}]);