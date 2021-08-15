(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),s=a(3),i=a(4),l=a(6),u=a(5),h=(a(15),a(0)),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.searchName),n.setState({searchName:""})},n.handleChange=function(e){n.setState({searchName:e.target.value.trim()})},n.state={searchName:""},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{className:"SearchForm-button",type:"submit",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.serachName,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}}]),a}(n.Component),j=a(9),m=function(e){var t=e.currentPage,a=e.query;return fetch("https://pixabay.com/api/?q=".concat(a,"&page=").concat(t,"&key=").concat("22163812-fdf68a623e9a64649f570bea3","&image_type=photo&orientation=horizontal&per_page=12\n  ")).then((function(e){return e.json()}))},b=(a(17),function(e){var t=e.smallImg,a=e.largeImg,n=e.tags;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{className:"ImageGalleryItem-image",src:t,"data-modal":a,alt:n})})}),f=(a(18),document.querySelector("#root-modal")),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).hadleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hadleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hadleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handOverlayClick,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t,alt:a})})}),f)}}]),a}(n.Component),O=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShowModal=function(e){if("IMG"===e.target.nodeName){var t=e.target.alt,a={src:e.target.dataset.modal,alt:t};n.sendDataModal(a)}},n.sendDataModal=function(e){n.setState({dataModal:e}),n.toggleModal()},n.toggleModal=function(){n.setState((function(e){return{showModal:!e.showModal}}))},n.state={showModal:!1,dataModal:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.listGallery,t=this.state,a=t.dataModal,n=a.src,r=a.alt,c=t.showModal;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",onClick:this.handleShowModal,children:e.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(h.jsx)(b,{smallImg:a,largeImg:n,tags:r},t)}))}),c&&Object(h.jsx)(g,{onClose:this.toggleModal,src:n,alt:r})]})}}]),a}(n.Component)),p=(a(20),function(e){var t=e.onClick;return Object(h.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}),v=a(10),y=a.n(v),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(y.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),S=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchImages=function(){n.setState({status:"padding"});var e=n.props.query,t=n.state.currentPage;m({currentPage:t,query:e}).then((function(e){return n.setState((function(t){var a=t.gallery,n=t.currentPage;return{gallery:[].concat(Object(j.a)(a),Object(j.a)(e.hits)),currentPage:n+1,status:"resolved"}}))})).catch((function(e){return n.setState({error:e,status:"rejected"})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},n.state={gallery:[],currentPage:1,error:null,status:"waiting"},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.query;this.props.query!==a&&this.fetchImages()}},{key:"render",value:function(){var e,t=this.state,a=t.gallery,n=t.status,r=t.error;return a.length>0&&"resolved"===n?e=Object(h.jsx)(p,{onClick:this.fetchImages}):"padding"===n&&(e=Object(h.jsx)(x,{})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{listGallery:a}),e,"rejected"===n&&Object(h.jsx)(S,{message:r.message})]})}}]),a}(n.Component),k=(a(41),function(e){var t=e.children;return Object(h.jsx)("header",{className:"Searchbar",children:t})}),C=(a(42),function(e){var t=e.children;return Object(h.jsx)("section",{className:"section-images",children:t})}),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).hadleFormSubmit=function(e){n.setState({query:e})},n.state={query:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{children:Object(h.jsx)(d,{onSubmit:this.hadleFormSubmit})}),Object(h.jsx)(C,{children:Object(h.jsx)(w,{query:e})})]})}}]),a}(n.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8d32c350.chunk.js.map