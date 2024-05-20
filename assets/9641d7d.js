(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{751:function(t,e,n){var content=n(757);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("4406166a",content,!0,{sourceMap:!1})},753:function(t,e,n){"use strict";n.r(e);n(33);var o=n(2),l=(n(40),n(5),n(41),n(64),n(204)),r=n(83),c=n(205),d=n(79),v=n(62),m={name:"Modal",components:{ValidationObserver:r.a,ValidationProvider:r.b,TextField:c.default,Button:d.default},props:{type:String,hideModalBuy:Boolean,hideModalContinue:Boolean,quantityEdit:Number,costumeIdEdit:Number,sizeEdit:String,costumeId:Number,costumeIdDetail:String,quantityDetail:String,priceDetail:String,sizeDetail:String,nameDetail:String,phoneNumberDetail:String,addressDetail:String,priceCostume:Number,currencyCostume:String},mounted:function(){var t=this;this.bodyClickListenerSet||setTimeout((function(){document.body.addEventListener("click",t.handleBodyClick),t.bodyClickListenerSet=!0}),500)},destroyed:function(){document.body.removeEventListener("click",this.handleBodyClick)},computed:{isEnglish:function(){return this.$store.state.isEnglish},loginBtn:function(){return this.isEnglish?v.a.loginBtn.en:v.a.loginBtn.vi},registerBtn:function(){return this.isEnglish?v.a.registerBtn.en:v.a.registerBtn.vi}},data:function(){return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({sizes:["M","L","XL","XXL"],selectedSize:"M",amount:1,price:20,bodyClickListenerSet:!1,productId:"",phone:"",name:"",adress:""},"price",""),"hideModalDetail",!0),"toastSuccess","toastSuccess"),"toastFail","toastFail"),"message",""),"visibleToastSuccess",!0),"visibleToastFail",!1),"statusToast",!1)},methods:{selectSize:function(t){this.selectedSize=t},buyCostume:function(){var t=this;this.$refs.observer&&this.$refs.observer.validate().then((function(e){if(e){var data={costumeId:t.costumeId,size:t.selectedSize,quantity:t.amount,price:t.priceCostume,name:t.name,phoneNumber:t.phone.toString(),address:t.adress},n=localStorage.getItem("token");Object(l.b)(n),l.a.post("/api/create-order",data).then((function(e){t.visibleToastSuccess=!0,t.isEnglish?t.message="You have placed your order successfully":t.message="Bạn đã đặt hàng thành công",t.statusToast=!0,t.$emit("hide-modal__buy",!1,t.visibleToastSuccess,t.message,t.statusToast)})).catch((function(e){t.visibleToastFail=!0,t.statusToast=!1,500===e.response.status&&"Inventory costume not found."===e.response.data.message?(t.isEnglish?t.message="Order not successful: Warehouse is out of stock":t.message="Đặt hàng k thành công : Kho đã hết hàng",t.$emit("hide-modal__buy",!1,t.visibleToastFail,t.message,t.statusToast)):(t.isEnglish?t.message="Order not successful: Product not found":t.message="Đặt hàng k thành công : Không tìm thấy sản phẩm",t.$emit("hide-modal__buy",!1,t.visibleToastFail,t.message,t.statusToast))}))}}))},subtraction:function(){this.amount>1&&this.amount--},subtractionEdit:function(){this.quantityEdit>1&&this.quantityEdit--},addition:function(){this.amount++},additionEdit:function(){this.quantityEdit++},login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")},handleBodyClick:function(t){this.hideModalContinue&&(this.$refs.modalContinue.contains(t.target)||this.$emit("hide-modal__continue",!1));this.hideModalBuy&&(this.$refs.modalBuy.contains(t.target)||this.$emit("hide-modal__buy",!1))},addInvetery:function(){var t=this;this.$refs.observerAdd&&this.$refs.observerAdd.validate().then((function(e){if(e){var data={costumeId:t.productId,size:t.selectedSize,quantity:t.amount},n=localStorage.getItem("token");Object(l.b)(n),l.a.post("/api/add-inventory",data).then((function(t){window.location.reload()})).catch((function(e){t.visibleToastFail=!0,t.isEnglish?t.message="Failure":t.message="Thất bại",t.$emit("toastStatus",t.visibleToastFail,t.message)}))}}))},closeModalDetail:function(){window.location.reload()},editInvetery:function(){var t=this,data={costumeId:this.costumeIdEdit,size:this.sizeEdit,quantity:Number(this.quantityEdit)},e=localStorage.getItem("token");Object(l.b)(e),l.a.post("/api/remove-inventory",data).then((function(t){window.location.reload()})).catch((function(e){t.visibleToastFail=!0,t.isEnglish?t.message="Failure":t.message="Thất bại",t.$emit("toastStatus",t.visibleToastFail,t.message)}))}}},_=(n(756),n(47)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal"},["modal-buy"===t.type?e("div",{ref:"modalBuy",staticClass:"modal-content__buy"},[e("ValidationObserver",{ref:"observer"},[e("ValidationProvider",{attrs:{name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Recipient's name:")]):e("p",[t._v("Tên người nhận:")]),t._v(" "),e("TextField",{attrs:{type:"form-text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),o.length?e("span",{staticClass:"validateInput"},[t._v(t._s(o[0]))]):t._e()],1)]}}],null,!1,1613395978)}),t._v(" "),e("ValidationProvider",{attrs:{name:"Phone",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Phone:")]):e("p",[t._v("Số điện thoại:")]),t._v(" "),e("TextField",{attrs:{type:"form-text"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),o.length?e("span",{staticClass:"validateInput"},[t._v(t._s(o[0]))]):t._e()],1)]}}],null,!1,1079395829)}),t._v(" "),e("ValidationProvider",{attrs:{name:"Address",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Address:")]):e("p",[t._v("Địa chỉ:")]),t._v(" "),e("TextField",{attrs:{type:"form-text"},model:{value:t.adress,callback:function(e){t.adress=e},expression:"adress"}}),t._v(" "),o.length?e("span",{staticClass:"validateInput"},[t._v(t._s(o[0]))]):t._e()],1)]}}],null,!1,4011525889)})],1),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Price:")]):e("p",[t._v("Giá tiền:")]),t._v(" "),e("p",[t._v(t._s(t.priceCostume.toLocaleString("en-US"))+" "+t._s(t.currencyCostume))])]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Size:")]):e("p",[t._v("Kích cỡ:")]),t._v(" "),t._l(t.sizes,(function(n,o){return e("span",{key:o,staticStyle:{"margin-right":"20px"}},[e("Button",{class:{active:t.selectedSize===n},attrs:{type:"normal"},on:{click:function(e){return t.selectSize(n)}}},[t._v(t._s(n))])],1)}))],2),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Amount:")]):e("p",[t._v("Số lượng:")]),t._v(" "),e("div",{staticStyle:{margin:"24px 0"}},[e("Button",{staticStyle:{"margin-right":"-4.7px"},attrs:{type:"normal"},on:{click:t.subtraction}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"modal-input",attrs:{type:"text"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),e("Button",{staticStyle:{"margin-left":"-5px"},attrs:{type:"normal"},on:{click:t.addition}},[t._v("+")])],1)]),t._v(" "),e("Button",{attrs:{type:"nav"},on:{click:t.buyCostume}},[t.isEnglish?e("span",[t._v("Order")]):e("span",[t._v("Đặt mua")])])],1):t._e(),t._v(" "),"modal-detail"===t.type?e("div",{staticClass:"modal-content__buy"},[e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Product code:")]):e("p",[t._v("Mã sản phẩm:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.costumeIdDetail,expression:"costumeIdDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.costumeIdDetail},on:{input:function(e){e.target.composing||(t.costumeIdDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Amount:")]):e("p",[t._v("Số lượng:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantityDetail,expression:"quantityDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.quantityDetail},on:{input:function(e){e.target.composing||(t.quantityDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Price:")]):e("p",[t._v("Giá:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.priceDetail,expression:"priceDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.priceDetail},on:{input:function(e){e.target.composing||(t.priceDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Size:")]):e("p",[t._v("Kích thước:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.sizeDetail,expression:"sizeDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.sizeDetail},on:{input:function(e){e.target.composing||(t.sizeDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Recipient's name:")]):e("p",[t._v("Tên khách hàng:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nameDetail,expression:"nameDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.nameDetail},on:{input:function(e){e.target.composing||(t.nameDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Phone:")]):e("p",[t._v("Số điện thoại:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumberDetail,expression:"phoneNumberDetail"}],staticClass:"modal-input input-detail",attrs:{type:"text"},domProps:{value:t.phoneNumberDetail},on:{input:function(e){e.target.composing||(t.phoneNumberDetail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Address:")]):e("p",[t._v("Địa chỉ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressDetail,expression:"addressDetail"}],staticClass:"modal-input input-detail",staticStyle:{"margin-bottom":"10px"},attrs:{type:"text"},domProps:{value:t.addressDetail},on:{input:function(e){e.target.composing||(t.addressDetail=e.target.value)}}})]),t._v(" "),e("Button",{staticStyle:{margin:"20px 0"},attrs:{type:"nav"},on:{click:t.closeModalDetail}},[t.isEnglish?e("span",[t._v("Close")]):e("span",[t._v("Đóng")])])],1):t._e(),t._v(" "),"modal-add"===t.type?e("div",{staticClass:"modal-content__buy"},[e("ValidationObserver",{ref:"observerAdd"},[e("ValidationProvider",{attrs:{name:"Product's name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Product's name:")]):e("p",[t._v("Mã sản phẩm")]),t._v(" "),e("TextField",{attrs:{type:"form-text"},model:{value:t.productId,callback:function(e){t.productId=e},expression:"productId"}}),t._v(" "),o.length?e("span",{staticClass:"validateInput"},[t._v(t._s(o[0]))]):t._e()],1)]}}],null,!1,1970486517)})],1),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Size:")]):e("p",[t._v("Kích cỡ:")]),t._v(" "),t._l(t.sizes,(function(n,o){return e("span",{key:o,staticStyle:{"margin-right":"20px"}},[e("Button",{class:{active:t.selectedSize===n},attrs:{type:"normal"},on:{click:function(e){return t.selectSize(n)}}},[t._v(t._s(n))])],1)}))],2),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Amount:")]):e("p",[t._v("Số lượng:")]),t._v(" "),e("div",{staticStyle:{margin:"24px 0"}},[e("Button",{staticStyle:{"margin-right":"-4.7px"},attrs:{type:"normal"},on:{click:t.subtraction}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"modal-input",attrs:{type:"text"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),e("Button",{staticStyle:{"margin-left":"-5px"},attrs:{type:"normal"},on:{click:t.addition}},[t._v("+")])],1)]),t._v(" "),e("Button",{attrs:{type:"nav"},on:{click:t.addInvetery}},[t.isEnglish?e("span",[t._v("Ok")]):e("span",[t._v("Xác nhận")])])],1):t._e(),t._v(" "),"modal-edit"===t.type?e("div",{staticClass:"modal-content__buy"},[e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t.isEnglish?e("p",[t._v("Enter the amount you want to reduce")]):e("p",[t._v("Nhập số lượng bạn muốn bớt")])]),t._v(" "),e("div",{staticClass:"flex"},[t.isEnglish?e("p",[t._v("Amount:")]):e("p",[t._v("Số lượng:")]),t._v(" "),e("div",{staticStyle:{margin:"24px 0"}},[e("Button",{staticStyle:{"margin-right":"-4.7px"},attrs:{type:"normal"},on:{click:t.subtractionEdit}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantityEdit,expression:"quantityEdit"}],staticClass:"modal-input",attrs:{type:"text"},domProps:{value:t.quantityEdit},on:{input:function(e){e.target.composing||(t.quantityEdit=e.target.value)}}}),t._v(" "),e("Button",{staticStyle:{"margin-left":"-5px"},attrs:{type:"normal"},on:{click:t.additionEdit}},[t._v("+")])],1)]),t._v(" "),e("Button",{attrs:{type:"nav"},on:{click:t.editInvetery}},[t.isEnglish?e("span",[t._v("Ok")]):e("span",[t._v("Xác nhận")])])],1):"modal-continue"===t.type?e("div",{ref:"modalContinue",staticClass:"modal-content__continue"},[e("div",{staticClass:"flex",staticStyle:{"justify-content":"center"}},[t.isEnglish?t._e():e("p",[t._v("Bạn cần đăng nhập để tiếp tục!")]),t._v(" "),t.isEnglish?e("p",[t._v("You need to log in to continue!")]):t._e()]),t._v(" "),e("div",{staticClass:"flex",staticStyle:{"justify-content":"center"}},[e("Button",{attrs:{type:"register"},on:{click:t.register}},[t._v(t._s(t.registerBtn))]),t._v(" "),e("Button",{attrs:{type:"login"},on:{click:t.login}},[t._v(t._s(t.loginBtn))])],1)]):t._e()])])}),[],!1,null,"2cbbecfc",null);e.default=component.exports;installComponents(component,{TextField:n(205).default,Button:n(79).default})},756:function(t,e,n){"use strict";n(751)},757:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&display=swap);"]),o.push([t.i,".modal[data-v-2cbbecfc]{background-color:rgba(0,0,0,.5);height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:1}.modal-content__buy[data-v-2cbbecfc],.modal-content__continue[data-v-2cbbecfc]{background-color:#f9f2e0;border-radius:20px;box-shadow:9px 9px 16px rgba(0,0,0,.44);color:#000;margin:8% auto;padding:20px;position:relative;text-align:center;transform:scale(1);transform-origin:center center;transition:transform 1s;width:50%}.modal-content__continue[data-v-2cbbecfc]{margin:15% auto;width:25%}.modal-input[data-v-2cbbecfc]{border:1px solid rgba(0,0,0,.09);height:40px;text-align:center;width:55px}.flex[data-v-2cbbecfc]{align-items:center;display:flex;position:relative}.modal p[data-v-2cbbecfc]{margin-bottom:24px}.modal a[data-v-2cbbecfc],.modal p[data-v-2cbbecfc]{width:250px}.input-detail[data-v-2cbbecfc]{width:300px}.active[data-v-2cbbecfc]{border:1px solid red;color:red}.validateInput[data-v-2cbbecfc]{color:red;font-size:12px;left:250px;position:absolute;top:50px}",""]),o.locals={},t.exports=o}}]);