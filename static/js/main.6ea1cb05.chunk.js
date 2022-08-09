(this["webpackJsonpsample-pos-reactjs"]=this["webpackJsonpsample-pos-reactjs"]||[]).push([[0],{101:function(e,t,s){},103:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},139:function(e,t,s){},140:function(e,t,s){},200:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(2),i=s.n(c),n=s(19),r=s.n(n),o=(s(101),s(102),s(103),s(224)),l=s(219),d=s(215),m=s(225),j=s(226),u=s(227),h=s(17),b=s(18),O=s.p+"static/media/profile.22ce7054.png",x=(s(108),s(10)),p=s(30),f=s(31),_=s(33),v=s(32),g=s(207),C=s(220),y=s(221),k=s(95),S=s(222),N=s(223),w=s(216),I=s(209),D=s(208),E=s(15),T=(s(109),s(25)),A=s(92),F=s.n(A);s(110),s(111),s(112);function R(e){var t=e.title,s=e.children,i=Object(E.f)(),n=Object(c.useCallback)((function(e){27===e.keyCode&&i.goBack()}),[i]);return Object(c.useEffect)((function(){return document.addEventListener("keydown",n,!1),function(){document.removeEventListener("keydown",n,!1)}}),[n]),Object(a.jsx)("div",{className:"container-custom-modal",onClick:function(){return i.goBack()},children:Object(a.jsxs)("div",{className:"container-inner-modal",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsxs)("div",{className:"container-inner-modal-header",children:[Object(a.jsx)("h2",{className:"page-header",children:t}),Object(a.jsx)(g.a,{close:!0,onClick:function(){return i.goBack()},style:{color:"#000",fontSize:"29px",marginRight:"5px"}})]}),Object(a.jsx)("div",{className:"container-inner-modal-content",children:s})]})})}R.defaultProps={title:"Title"};var P=R,z=s(228),M=s(210),L=s(211),q=s(212),B=s(213),U=s(214),Q=s(217),G=s(218),H=s(66),V=s.n(H),J="https://62ed5acc818ab252b60f5157.mockapi.io",X=3e5,Y=localStorage.getItem("token")?localStorage.getItem("token"):"",W=(V.a.create({baseURL:J,timeout:X,headers:{token:Y}}),V.a.create({baseURL:J,timeout:X})),K={customerAdd:function(e){return console.log(e),W.post("/customer",e)},customerEdit:function(e){return W.post("/customer/edit",e)},customerDelete:function(e){return W.delete("/customer",e)},customerGet:function(e){return W.get("/customer/id",{params:e})},customerList:function(){return W.get("/customer")},customerSearch:function(e){return W.get("/customer/search",{params:e})}},Z=s(16),$=function(e){if("response"in e&&"Network Error"!==e.message&&e.message!=="timeout of "+X.toString()+"ms exceeded"){var t=e.response;if("401"===t.status||"400"===t.status||"500"===t.status||"498"===t.status){var s=t.data.message;Z.b.error("Error "+t.status+" - "+s)}"404"===t.status&&Z.b.error("Error "+t.status+" - API Not Found"),"405"===t.status&&Z.b.error("Error "+t.status+" - Method Not Allowed")}else Z.b.error(e.message)},ee={customer_name_invalid:!1},te={customer_id:0,customer_name:"",customer_address:"",customer_phone:""},se=function(e){Object(_.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).saveCustomer=function(){if(""===a.state.customer.customer_name)return a.setState({customer_validation:Object(x.a)(Object(x.a)({},a.state.customer_validation),{},{customer_name_invalid:!0})}),void a.customerRef.focus();a.state.is_new?a.saveNewcustomer():a.editcustomer()},a.setCustomerToCart=function(e){a.props.callbackRequest(a.state.list_customer[e].customer_id,a.state.list_customer[e].customer_name)},a.deleteCustomer=function(e){K.customerDelete({customer_id:e}).then((function(e){Z.b.success(e.data.message),a.refreshCustomer()})).catch((function(e){$(e)}))},a.getCustomer=function(e){a.setState({customer:a.state.list_customer[e],is_new:!1}),a.toggleModal()},a.toggleModal=function(){a.setState({modalDialog:!a.state.modalDialog})},a.state={modalDialog:!1,selected_customer:{},list_customer:[],customer:te,customer_validation:ee,is_new:!0,in_proses:!1},a}return Object(f.a)(s,[{key:"saveNewcustomer",value:function(){var e=this;K.customerAdd(this.state.customer).then((function(t){Z.b.success(t.data.message),e.setState({customer:te}),e.customerRef.focus(),e.refreshCustomer()})).catch((function(e){$(e)}))}},{key:"editcustomer",value:function(){var e=this;K.customerEdit(this.state.customer).then((function(t){Z.b.success(t.data.message),e.refreshCustomer()})).catch((function(e){$(e)}))}},{key:"componentDidMount",value:function(){this.refreshCustomer()}},{key:"refreshCustomer",value:function(){var e=this;K.customerList().then((function(t){e.setState({list_customer:t.data})})).catch((function(e){$(e)}))}},{key:"render",value:function(){var e=this,t=this.state.list_customer;return Object(a.jsxs)(P,{title:"Customer",children:[Object(a.jsx)(g.a,{color:"primary",onClick:this.toggleModal,className:"mb-2",children:"+ Add Customer"}),Object(a.jsxs)(D.a,{responsive:!0,hover:!0,borderless:!0,children:[Object(a.jsx)("thead",{className:"table-active",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Address"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.map((function(t,s){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s+1}),Object(a.jsx)("td",{children:t.customer_name}),Object(a.jsx)("td",{children:t.customer_address}),Object(a.jsx)("td",{children:t.customer_phone}),Object(a.jsx)("td",{className:"text-center",children:Object(a.jsxs)(I.a,{size:"sm",children:[Object(a.jsxs)(g.a,{title:"Add to cart",color:"success",onClick:function(){e.setCustomerToCart(s)},children:[Object(a.jsx)(h.a,{icon:b.d})," Add To Cart"]}),Object(a.jsxs)(g.a,{title:"Edit Customer",color:"warning",onClick:function(){e.getCustomer(s)},children:[Object(a.jsx)(h.a,{icon:b.c})," Edit"]}),Object(a.jsxs)(g.a,{title:"Delete Customer",onClick:function(){e.deleteCustomer(t.customer_id)},color:"danger",children:[Object(a.jsx)(h.a,{icon:b.h})," Delete"]})]})})]},s.toString())}))})]}),Object(a.jsxs)(z.a,{isOpen:this.state.modalDialog,size:"lg",toggle:this.toggleModal,children:[Object(a.jsx)(M.a,{toggle:this.toggleModal,children:this.state.is_new?"New Customer":"Edit Customer"}),Object(a.jsx)(L.a,{children:Object(a.jsxs)(q.a,{children:[Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:3,children:"Customer Name"}),Object(a.jsxs)(d.a,{sm:8,children:[Object(a.jsx)(w.a,{invalid:this.state.customer_validation.customer_name_invalid,autoFocus:!0,innerRef:function(t){e.customerRef=t},size:"sm",type:"text",name:"customer_name",value:this.state.customer.customer_name,placeholder:"customer name",onChange:function(t){var s=t.target;e.setState({customer:Object(x.a)(Object(x.a)({},e.state.customer),{},{customer_name:s.value})})}}),Object(a.jsx)(Q.a,{tooltip:!0,children:"customer name is required"})]})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:3,children:"Customer Address"}),Object(a.jsx)(d.a,{sm:9,children:Object(a.jsx)(w.a,{invalid:this.state.customer_validation.customer_address_invalid,size:"sm",type:"textarea",value:this.state.customer.customer_address,placeholder:"Customer address",onChange:function(t){var s=t.target;e.setState({customer:Object(x.a)(Object(x.a)({},e.state.customer),{},{customer_address:s.value})})}})})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:3,children:"Customer Phone"}),Object(a.jsx)(d.a,{sm:4,children:Object(a.jsx)(w.a,{invalid:this.state.customer_validation.customer_phone_invalid,size:"sm",type:"text",value:this.state.customer.customer_phone,placeholder:"Customer phone",onChange:function(t){var s=t.target;e.setState({customer:Object(x.a)(Object(x.a)({},e.state.customer),{},{customer_phone:s.value})})}})})]})]})}),Object(a.jsxs)(G.a,{children:[Object(a.jsx)(g.a,{color:"secondary",onClick:this.toggleModal,children:"Cancel"})," ",Object(a.jsx)(g.a,{color:"primary",onClick:this.saveCustomer,children:this.state.is_new?"Save New":"Edit Customer"})]})]})]})}}]),s}(i.a.Component),ae=(s(139),{itemAdd:function(e){return W.post("/item",e)},itemEdit:function(e){return W.post("/item/edit",e)},itemDelete:function(e){return W.delete("/item/delete",e)},itemGet:function(e){return W.get("/item",{params:e})},itemList:function(e){return W.get("/item",{params:e})},itemSearch:function(e){return W.get("/item/search",{params:e})}}),ce={item_name_invalid:!1,item_package_invalid:!1},ie={item_id:0,item_name:"",item_price:0,item_stock:0,item_package:""},ne=function(e){Object(_.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).saveItem=function(){var e=a.state.item;return""===e.item_name?(a.setState({item_validation:Object(x.a)(Object(x.a)({},a.state.item_validation),{},{item_name_invalid:!0})}),void a.itemRef.focus()):""===e.item_package?(a.setState({item_validation:Object(x.a)(Object(x.a)({},a.state.item_validation),{},{item_package_invalid:!0})}),void a.packageRef.focus()):void(a.state.is_new?a.saveNewItem():a.editItem())},a.state={item:e.new?ie:e.itemDetail,item_validation:ce,is_new:e.new,in_proses:!1},a}return Object(f.a)(s,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"saveNewItem",value:function(){var e=this;ae.itemAdd(this.state.item).then((function(t){Z.b.success(t.data.message),e.setState({item:ie}),e.itemRef.focus(),e.props.refreshItem()})).catch((function(e){$(e)}))}},{key:"editItem",value:function(){var e=this;ae.itemEdit(this.state.item).then((function(t){Z.b.success(t.data.message),e.itemRef.focus(),e.props.refreshItem()})).catch((function(e){$(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(P,{title:this.state.is_new?"New Item":"Edit Item",children:Object(a.jsxs)(q.a,{children:[Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:2,children:"Item Name"}),Object(a.jsxs)(d.a,{sm:6,children:[Object(a.jsx)(w.a,{invalid:this.state.item_validation.item_name_invalid,autoFocus:!0,innerRef:function(t){e.itemRef=t},size:"sm",type:"text",name:"item_name",value:this.state.item.item_name,placeholder:"Item name",onChange:function(t){var s=t.target;e.setState({item:Object(x.a)(Object(x.a)({},e.state.item),{},{item_name:s.value})})}}),Object(a.jsx)(Q.a,{tooltip:!0,children:"Item name is required"})]})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:2,children:"Price"}),Object(a.jsx)(d.a,{sm:6,children:Object(a.jsx)(T.a,{className:"form-control-sm form-control",placeholder:"0",type:"text",name:"item_price",value:this.state.item.item_price,thousandSeparator:!0,inputMode:"numeric",onValueChange:function(t){var s=t.value;e.setState({item:Object(x.a)(Object(x.a)({},e.state.item),{},{item_price:s})})}})})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:2,children:"Stock"}),Object(a.jsx)(d.a,{sm:6,children:Object(a.jsx)(T.a,{className:"form-control-sm form-control",placeholder:"0",type:"text",name:"item_stock",value:this.state.item.item_stock,thousandSeparator:!0,inputmode:"numeric",onValueChange:function(t){var s=t.value;e.setState({item:Object(x.a)(Object(x.a)({},e.state.item),{},{item_stock:s})})}})})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:2,children:"Package"}),Object(a.jsxs)(d.a,{sm:6,children:[Object(a.jsxs)(w.a,{invalid:this.state.item_validation.item_package_invalid,type:"select",innerRef:function(t){e.packageRef=t},defaultValue:this.state.item.item_package,onChange:function(t){var s=t.target;e.setState({item:Object(x.a)(Object(x.a)({},e.state.item),{},{item_package:s.value})})},name:"item_package",size:"sm",children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select package name"}),Object(a.jsx)("option",{value:"PCS",children:"PCS"}),Object(a.jsx)("option",{value:"BOX",children:"BOX"})]}),Object(a.jsx)(Q.a,{tooltip:!0,children:"Package name is required"})]})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(U.a,{sm:2}),Object(a.jsx)(d.a,{sm:6,children:Object(a.jsx)(g.a,{color:"primary",onClick:this.saveItem,title:"Save Item",children:this.props.new?"Save Item":"Edit Item"})})]})]})})}}]),s}(i.a.Component),re=(s(140),{salesAdd:function(e){return W.post("/sales",e)},salesDelete:function(e){return W.delete("/sales",e)},salesGet:function(e){return W.get("/sales/id",{params:e})},salesList:function(e){return W.get("/sales",{params:e})}}),oe=function(e){Object(_.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).deleteSales=function(e){re.salesDelete({sales_id:e}).then((function(e){Z.b.success(e.data.message),a.refreshSales()})).catch((function(e){$(e)}))},a.state={list:[]},a}return Object(f.a)(s,[{key:"componentDidMount",value:function(){this.refreshSales()}},{key:"refreshSales",value:function(){var e=this;re.salesList().then((function(t){console.log(t),e.setState({list:t.data})})).catch((function(e){$(e)}))}},{key:"render",value:function(){var e=this,t=this.state.list;return Object(a.jsx)(P,{title:"Sales",children:Object(a.jsxs)(D.a,{responsive:!0,hover:!0,borderless:!0,children:[Object(a.jsx)("thead",{className:"table-active",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Sales Date"}),Object(a.jsx)("th",{children:"Customer"}),Object(a.jsx)("th",{children:"Discount"}),Object(a.jsx)("th",{children:"Total"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.map((function(t,s){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s+1}),Object(a.jsx)("td",{children:t.sales_date}),Object(a.jsx)("td",{children:t.customer_name}),Object(a.jsx)("td",{children:Object(a.jsx)(T.a,{value:t.discount,displayType:"text",thousandSeparator:!0})}),Object(a.jsx)("td",{children:Object(a.jsx)(T.a,{value:parseFloat(t.total),displayType:"text",thousandSeparator:!0})}),Object(a.jsx)("td",{className:"text-center",children:Object(a.jsx)(I.a,{size:"sm",children:Object(a.jsxs)(g.a,{title:"Delete Sales",onClick:function(){e.deleteSales(t.sales_id)},color:"danger",children:[Object(a.jsx)(h.a,{icon:b.h})," Delete"]})})})]},s.toString())}))})]})})}}]),s}(i.a.Component),le=function(e){var t=e.value,s=e.onClick;return Object(a.jsx)(g.a,{color:"success",onClick:s,children:t})},de=function(e){var t=""+(e.getMonth()+1),s=""+e.getDate(),a=e.getFullYear();return t.length<2&&(t="0"+t),s.length<2&&(s="0"+s),[a,t,s].join("-")},me=function(e){Object(_.a)(s,e);var t=Object(v.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).cancelTransaction=function(){window.confirm("Cancel Transaction ?")&&a.resetObject()},a.newCustomer=function(){a.props.history.push("/customer")},a.listSales=function(){a.props.history.push("/list")},a.newItem=function(){a.setState({new_item:!0,editItem:{}}),a.props.history.push("/item")},a.editItem=function(e){a.setState({new_item:!1,editItem:a.state.list_item[e]}),a.props.history.push("/item")},a.deleteItem=function(e){var t=a.state.list_item[e];window.confirm("Delete item : "+t.item_name+" ?")&&ae.itemDelete({item_id:t.item_id}).then((function(e){Z.b.success(e.data.message),a.refreshItem()})).catch((function(e){$(e)}))},a.addCart=function(e){var t=a.state.sales.list_cart,s=a.state.list_item[e];(e=t.findIndex((function(e){return e.item_id===s.item_id})))<0?t.push({item_name:s.item_name,item_qty:1,item_price:parseFloat(s.item_price),item_id:s.item_id,item_subtotal:parseFloat(s.item_price)}):(t[e].item_qty+=1,t[e].item_subtotal=parseFloat(s.item_price)*parseFloat(t[e].item_qty)),a.setState({sales:Object(x.a)(Object(x.a)({},a.state.sales),{},{list_cart:t})})},a.handleDecQty=function(e){var t=a.state.sales.list_cart;1!==t[e].item_qty&&(t[e].item_qty-=1,t[e].item_subtotal=parseFloat(t[e].item_price)*parseFloat(t[e].item_qty),a.setState({sales:Object(x.a)(Object(x.a)({},a.state.sales),{},{list_cart:t})}))},a.handleIncQty=function(e){var t=a.state.sales.list_cart;t[e].item_qty+=1,t[e].item_subtotal=parseFloat(t[e].item_price)*parseFloat(t[e].item_qty),a.setState({sales:Object(x.a)(Object(x.a)({},a.state.sales),{},{list_cart:t})})},a.deleteCart=function(e){var t=a.state.sales.list_cart;t.splice(e,1),a.setState({sales:Object(x.a)(Object(x.a)({},a.state.sales),{},{list_cart:t})})},a.payTransaction=function(e){var t=a.state.sales;if(0===t.customer_id)return Z.b.error("Please choose customer before save"),void a.newCustomer();t.list_cart.length<=0?Z.b.error("Cart doesn't have any product"):window.confirm("Save payment transaction ?")&&re.salesAdd(a.state.sales).then((function(e){a.resetObject(),Z.b.success(e.data.message)})).catch((function(e){$(e)}))},a.setCustomer=function(e,t){a.setState({sales:Object(x.a)(Object(x.a)({},a.state.sales),{},{customer_id:e,customer_name:t})}),a.props.history.goBack()},a.state={new_item:!0,sales:{customer_id:0,customer_name:"",sales_date_display:new Date,sales_date:de(new Date),discount:0,list_cart:[],sub_total:0,grand_total:0},list_item:[],editItem:{},search_item_keyword:"",refresh_animation:!1},a}return Object(f.a)(s,[{key:"refreshItem",value:function(){var e=this;this.setState({refresh_animation:!0}),ae.itemList().then((function(t){e.setState({list_item:t.data,refresh_animation:!1})})).catch((function(t){$(t),e.setState({refresh_animation:!1})}))}},{key:"resetObject",value:function(){this.setState({sales:{customer_id:0,customer_name:"",sales_date_display:new Date,sales_date:de(new Date),discount:0,list_cart:[],sub_total:0,grand_total:0}})}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){this.refreshItem()}},{key:"render",value:function(){var e=this,t=this.state.list_item,s=this.state.search_item_keyword,c=this.state.sales.list_cart,i=parseFloat(this.state.sales.discount),n=0;this.state.sales.list_cart.forEach((function(e){n+=parseFloat(e.item_subtotal)}));var r=n-n*i/100,o=n;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(l.a,{className:"main-pos",children:[Object(a.jsx)(d.a,{sm:4,children:Object(a.jsxs)(d.a,{className:"main-pos-left",sm:12,children:[Object(a.jsxs)("div",{className:"container-header",children:[Object(a.jsx)("div",{className:"container-header-1",children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(F.a,{dateFormat:"dd/MM/yyyy",selected:this.state.sales.sales_date_display,onChange:function(t){return e.setState({sales:Object(x.a)(Object(x.a)({},e.state.sales),{},{sales_date_display:t,sales_date:de(t)})})},customInput:Object(a.jsx)(le,{})}),Object(a.jsx)(y.a,{addonType:"append",children:Object(a.jsx)(k.a,{children:Object(a.jsx)(h.a,{icon:b.i})})})]})}),Object(a.jsx)("div",{className:"container-header-2",children:Object(a.jsx)(g.a,{color:"info",onClick:this.newCustomer,block:!0,children:0===this.state.sales.customer_id?"+ Add Customer":this.state.sales.customer_name})})]}),Object(a.jsxs)("div",{className:"container-cart",children:[Object(a.jsx)("div",{className:"container-cart-list",children:Object(a.jsx)(S.a,{flush:!0,children:c.map((function(t,s){return Object(a.jsxs)(N.a,{children:[Object(a.jsx)("div",{className:"cart-name",children:Object(a.jsx)("div",{children:t.item_name})}),Object(a.jsxs)("div",{className:"cart-detail",children:[Object(a.jsxs)("div",{className:"cart-1",children:[Object(a.jsx)(g.a,{onClick:function(){e.handleDecQty(s)},size:"sm",children:"-"}),"  ",t.item_qty,"  ",Object(a.jsx)(g.a,{onClick:function(){e.handleIncQty(s)},size:"sm",children:"+"})," ","x"," ",Object(a.jsx)(T.a,{value:t.item_price,displayType:"text",thousandSeparator:!0})]}),Object(a.jsx)("div",{className:"cart-2",children:Object(a.jsx)(T.a,{value:t.item_subtotal,displayType:"text",thousandSeparator:!0})}),Object(a.jsx)("div",{className:"cart-3",children:Object(a.jsx)(h.a,{className:"text-danger pointer-hand",title:"Delete item from cart",icon:b.g,onClick:function(){e.deleteCart(s)}})})]})]},s.toString())}))})}),Object(a.jsxs)("div",{className:"container-cart-recap",children:[Object(a.jsxs)("div",{className:"recap",children:[Object(a.jsx)("div",{className:"title",children:"Total"}),Object(a.jsx)("div",{className:"result",children:Object(a.jsx)(T.a,{value:o,displayType:"text",thousandSeparator:!0})})]}),Object(a.jsxs)("div",{className:"recap",children:[Object(a.jsx)("div",{className:"title",children:"Discount"}),Object(a.jsx)("div",{className:"result",children:Object(a.jsxs)(C.a,{size:"sm",children:[Object(a.jsx)(w.a,{type:"number",min:"0",max:"100",size:"sm",onChange:function(t){var s=t.target;e.setState({sales:Object(x.a)(Object(x.a)({},e.state.sales),{},{discount:s.value})})},value:this.state.sales.discount,placeholder:"0"}),Object(a.jsx)(y.a,{addonType:"append",children:Object(a.jsx)(k.a,{children:"%"})})]})})]}),Object(a.jsxs)("div",{className:"recap",children:[Object(a.jsx)("div",{className:"title",children:"Net"}),Object(a.jsx)("div",{className:"result recap-net",children:Object(a.jsx)(T.a,{value:r,displayType:"text",thousandSeparator:!0})})]})]})]})]})}),Object(a.jsx)(d.a,{sm:8,children:Object(a.jsxs)(d.a,{className:"main-pos-right",sm:12,children:[Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsxs)(C.a,{size:"sm",children:[Object(a.jsx)(w.a,{onChange:function(t){var s=t.target;e.setState({search_item_keyword:s.value})},placeholder:"SEARCH PRODUCT HERE..."}),Object(a.jsx)(y.a,{addonType:"append",children:Object(a.jsxs)(I.a,{title:"Refresh item list",size:"sm",children:[Object(a.jsx)(g.a,{color:"warning",onClick:function(){e.refreshItem()},children:Object(a.jsx)(h.a,{spin:this.state.refresh_animation,icon:b.f})}),Object(a.jsxs)(g.a,{color:"primary",onClick:this.newItem,children:[" ","+ ADD NEW ITEM"]})]})})]})}),Object(a.jsx)("div",{children:Object(a.jsxs)(D.a,{responsive:!0,hover:!0,borderless:!0,children:[Object(a.jsx)("thead",{className:"table-active",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Item"}),Object(a.jsx)("th",{className:"text-right",children:"Stock"}),Object(a.jsx)("th",{className:"text-right",children:"Price"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.filter((function(e){return e.item_name.toUpperCase().includes(s.toUpperCase())})).map((function(t,s){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s+1}),Object(a.jsx)("td",{children:t.item_name}),Object(a.jsx)("td",{className:"text-right",children:t.item_stock}),Object(a.jsx)("td",{className:"text-right",children:t.item_price}),Object(a.jsx)("td",{className:"text-center",children:Object(a.jsxs)(I.a,{size:"sm",children:[Object(a.jsxs)(g.a,{onClick:function(){e.addCart(s)},title:"Add to cart",color:"success",children:[Object(a.jsx)(h.a,{icon:b.b})," Add"]}),Object(a.jsxs)(g.a,{title:"Edit master item",color:"warning",onClick:function(){e.editItem(s)},children:[Object(a.jsx)(h.a,{icon:b.c})," Edit"]}),Object(a.jsxs)(g.a,{title:"Delete item",onClick:function(){e.deleteItem(s)},color:"danger",children:[Object(a.jsx)(h.a,{icon:b.h})," Delete"]})]})})]},s.toString())}))})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(g.a,{onClick:this.payTransaction,color:"success",className:"mr-1",children:"PAYMENT"}),Object(a.jsx)(g.a,{onClick:this.cancelTransaction,color:"danger",className:"mr-1",children:"CANCEL"}),Object(a.jsx)(g.a,{onClick:this.listSales,color:"info",children:"SALES'S LIST"})]})]})})]}),Object(a.jsxs)(E.c,{children:[Object(a.jsx)(E.a,{exact:!0,path:"/"}),Object(a.jsx)(E.a,{path:"/customer",render:function(){return Object(a.jsx)(se,{new:e.state.new_customer,callbackRequest:function(t,s){e.setCustomer(t,s)},customerDetail:e.state.editCustomer})}}),Object(a.jsx)(E.a,{path:"/list",children:Object(a.jsx)(oe,{})}),Object(a.jsx)(E.a,{path:"/item",render:function(){return Object(a.jsx)(ne,{new:e.state.new_item,refreshItem:function(){e.refreshItem()},itemDetail:e.state.editItem})}})]})]})}}]),s}(i.a.Component),je=Object(E.g)(me),ue=s(42);s(199);var he=function(){return Object(a.jsxs)(ue.a,{children:[Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(o.a,{fluid:!0,children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(d.a,{sm:"2",className:"text-center header-col-brand",children:"POS REACT"}),Object(a.jsx)(d.a,{sm:"10",className:"header-col-nav",children:Object(a.jsxs)(m.a,{className:" ml-auto",children:[Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsx)("div",{className:"name",children:"Sigit Prasetya"}),Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{alt:"profile-photos",className:"rounded-circle",src:O,height:"40px"})})]})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(u.a,{className:"navlink-padding",href:"#",children:Object(a.jsx)(h.a,{icon:b.a,size:"lg"})})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(u.a,{className:"navlink-padding",href:"#",children:Object(a.jsx)(h.a,{icon:b.e,size:"lg"})})})]})})]})})}),Object(a.jsx)("main",{className:"main-app",children:Object(a.jsx)(o.a,{className:"container-main",fluid:!0,children:Object(a.jsx)(je,{})})})]}),Object(a.jsx)(Z.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,229)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(he,{})}),document.getElementById("root")),be()}},[[200,1,2]]]);
//# sourceMappingURL=main.6ea1cb05.chunk.js.map