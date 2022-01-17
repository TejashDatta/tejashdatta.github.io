(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("c655702a",content,!0,{sourceMap:!1})},268:function(t,e,n){"use strict";n(260)},269:function(t,e,n){var o=n(16)(!1);o.push([t.i,".slide-enter-active[data-v-68bf7f93]{transition:.2s ease-in}.slide-enter[data-v-68bf7f93]{transform:translateX(-50%);opacity:0}",""]),t.exports=o},294:function(t,e,n){"use strict";n.r(e);n(33);var o={head:function(){return{title:"Projects"}},data:function(){return{index:0,projects:[{name:"This site",desc:"This personal website was designed using Vue with Vuetify UI framework and then generated into static webpages using Nuxt.",tech:["Vue.js","Vuetify","Nuxt"],site:null,github:"https://github.com/tejashdatta/tejashdatta.github.io"},{name:"Rental Easy",desc:"An e-commerce site where users in Kolkata can rent items such\n        as books, appliances, equipment, etc. and put up their own\n        unused items for rent. Users can also book experiences with other people such as cooking, gaming, dancing and more.",tech:["Vue.js","Vuetify","Firebase"],site:"https://rentaleasy.in",github:null},{name:"Banshee Vocab",desc:"A competitive online multiplayer quiz platform for language learners. \n        Uses firebase realtime database to implement multiplayer quiz functionality, including matchmaking.\n        Also uses firestore, firebase authentication, and cloud storage.",tech:["Vue.js","Vuetify","Firebase"],site:"https://bansheevocab.web.app/",github:null},{name:"Would You Rather",desc:"A fun web app where users can post would-you-rather polls and vote on polls anonymously. \n      Front end created with Vue and Vuetify. Data storage and user authentication implemented through Firebase. \n      Implemented automatic anonymous account login to save site activity of unregistered users.",tech:["Vue.js","Vuetify","Firebase"],site:"https://would-you-rather-69ad5.web.app/",github:"https://github.com/TejashDatta/would-you-rather"},{name:"Poll Opinion",desc:"A web app where citizens can anonymously post their opinions regarding the parties that stood for the 2019 Indian National Elections.\n      A full stack approach was followed where the back end runs on Node.js and stores data on a MongoDB database; \n      and the front end was made in React with Materialize CSS.",tech:["Node.js","MongoDB","ReactJS","Materialize CSS"],site:"http://pollopinion.herokuapp.com/",github:"https://github.com/TejashDatta/poll-opinion"},{name:"Graph Studio",desc:"A website where users can upload CSV files and create graphs based on the fields of data they choose. \n      Back end powered by Django and front end styled with Foundation6 CSS framework. Graph creation functionality\n      implemented through Plot.ly graphing library for Python.",tech:["Django","Foundation6 CSS","Plot.ly"],site:"http://graphstudio.herokuapp.com/",github:"https://github.com/TejashDatta/data_visualisation"},{name:"Carsnet",desc:"A static website that provides information about supercars and presents their HD pictures in galleries\n       and slideshows created with WOWSlider. It also showcases the supercars of Kolkata.",tech:["jQuery","CSS","WOWSlider"],site:"http://carsnet.github.io/",github:"https://github.com/TejashDatta/carsnet.github.io"}]}},computed:{projectsSlice:function(){return this.projects.slice(0,this.index)}},mounted:function(){var t=this;!function e(){t.index<t.projects.length&&(t.index++,setTimeout(e,200))}()}},r=(n(268),n(57)),c=n(75),l=n.n(c),d=n(250),h=n(262),v=n(255),m=n(258),f=n(288),_=n(242),y=n(276),w=n(291),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mb-5"},[t._v("Personal Projects")]),t._v(" "),n("strong",{staticClass:"mr-1"},[t._v("Note:")]),t._v(" Some sites may take a long time to\n  initially load due to being hosted on a free Heroku server.\n  "),n("br"),t._v(" "),n("br"),t._v(" "),n("transition-group",{staticClass:"row",attrs:{name:"slide",tag:"div"}},t._l(t.projectsSlice,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"6",lg:"4"}},[n("v-card",{staticClass:"d-flex flex-column",attrs:{height:"100%"}},[n("v-card-title",[n(e.site?"a":"span",{tag:"component",staticClass:"secondary--text",attrs:{href:e.site,target:"_blank"}},[t._v(t._s(e.name))])],1),t._v(" "),n("v-card-text",{staticClass:"pb-1 text-justify"},[t._v("\n          "+t._s(e.desc)+"\n          "),n("br"),t._v(" "),n("br"),t._v(" "),n("strong",{staticClass:"primary--text"},[t._v("Tech:")]),t._v("\n          "+t._s(e.tech.join(", "))+"\n        ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"py-1"},[n("v-spacer"),t._v(" "),n("div",{staticStyle:{position:"relative"}},[e.site?n("v-btn",{attrs:{"x-large":"",color:"secondary",icon:"",href:e.site,target:"_blank"}},[n("v-icon",[t._v("mdi-web")])],1):t._e(),t._v(" "),e.github?n("v-btn",{staticClass:"ml-0",attrs:{"x-large":"",color:"black",icon:"",href:e.github,target:"_blank"}},[n("v-icon",[t._v("mdi-github")])],1):t._e(),t._v(" "),n("div",{staticStyle:{position:"absolute",top:"0",right:"0",opacity:"0"}},[e.site?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on;return[n("v-btn",t._g({attrs:{"x-large":"",color:"secondary",icon:"",href:e.site,target:"_blank"}},r),[n("v-icon",[t._v("mdi-web")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("View site")])]):t._e(),t._v(" "),e.github?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on;return[n("v-btn",t._g({attrs:{"x-large":"",color:"black",icon:"",href:e.github,target:"_blank"}},r),[n("v-icon",[t._v("mdi-github-circle")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("View source code")])]):t._e()],1)],1)],1)],1)],1)})),1)],1)}),[],!1,null,"68bf7f93",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:m.a,VDivider:f.a,VIcon:_.a,VSpacer:y.a,VTooltip:w.a})}}]);