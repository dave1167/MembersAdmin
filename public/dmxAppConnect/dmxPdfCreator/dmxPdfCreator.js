/*!
 App Connect PDF Creator
 Version: 1.0.0-beta.1
 (c) 2024 Wappler.io
 @build 2024-02-22 16:47:20
 */
dmx.Component("pdf-creator",{attributes:{content:{type:String,default:null,ui:{valuePrefix:"#",valuesSelector:'[is="dmx-pdf-content"]',valuesSelectorAttribute:"id",values:[{title:"None",value:""}]}},compress:{type:Boolean,default:!0},userPassword:{type:String,default:null},ownerPassword:{type:String,default:null},pageSize:{type:String,default:"A4",enum:["4A0","2A0","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","RA0","RA1","RA2","RA3","RA4","SRA0","SRA1","SRA2","SRA3","SRA4","LETTER","LEGAL","TABLOID","EXECUTIVE","FOLIO"]},pageOrientation:{type:String,default:"portrait",enum:["portrait","landscape"]},pageMargins:{type:[Number,Array],default:[40,40,40,40],ui:{groupTitle:"Page Margin",arrayVariables:!0,isDynamic:!0,variables:[{name:"marginLeft",type:"text",title:"Left",dataBindings:!0,arrayIndex:0,defaultValue:40},{name:"marginTop",type:"text",title:"Top",dataBindings:!0,arrayIndex:1,defaultValue:40},{name:"marginRight",type:"text",title:"Right",dataBindings:!0,arrayIndex:2,defaultValue:40},{name:"marginBottom",type:"text",title:"Bottom",dataBindings:!0,arrayIndex:3,defaultValue:40}]}}},ui:{tagName:"dmx-pdf-creator",children:["dmx-pdf-info","dmx-pdf-style","pdf-content","dmx-pdf-header","dmx-pdf-footer","dmx-pdf-watermark"],allowed_children:{"dmx-pdf-info":1,"dmx-pdf-style":-1,"pdf-content":1,"dmx-pdf-header":1,"dmx-pdf-footer":1,"dmx-pdf-watermark":1},allowedGlobalChildren:{},linkFiles:[{src:"https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/pdfmake.min.js",type:"js"},{src:"https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/vfs_fonts.min.js",type:"js"},{src:"https://cdn.jsdelivr.net/npm/html-to-pdfmake/browser.js",type:"js"}]},methods:{download(e){this._createPdf().download(e)},open(){this._createPdf().open()},print(){this._createPdf().print()},preview(e){const t=document.getElementById(e);t&&this._createPdf().getDataUrl((e=>{t.src=e}))}},init(){const e=getComputedStyle(document.body);e.getPropertyValue("--bs-primary")?(this._primary=e.getPropertyValue("--bs-primary"),this._secondary=e.getPropertyValue("--bs-secondary"),this._success=e.getPropertyValue("--bs-success"),this._danger=e.getPropertyValue("--bs-danger"),this._warning=e.getPropertyValue("--bs-warning"),this._info=e.getPropertyValue("--bs-info"),this._light=e.getPropertyValue("--bs-light"),this._dark=e.getPropertyValue("--bs-dark"),this._styles=this._bootstrapStyles()):this._styles={},this._pageSizes={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]}},_pageSize(){const e="landscape"==this.props.pageOrientation,t=this._pageSizes[this.props.pageSize];return{width:t[e?1:0],height:t[e?0:1],margin:this.props.pageMargins}},_createPdf(){const e={styles:this._styles,images:{},...this.props};for(const t of this.children)switch(t.data.$type){case"pdf-info":e.info=t.props;break;case"pdf-style":e.styles[t.props.name]=t.props;break;case"pdf-content":{const r=t._createContent(this._pageSize());e.content=r.content,Object.assign(e.images,r.images)}break;case"pdf-header":{const r=t._createHeader();e.header=r.header,Object.assign(e.images,r.images)}break;case"pdf-footer":{const r=t._createFooter();e.footer=r.footer,Object.assign(e.images,r.images)}break;case"pdf-watermark":e.watermark=t.props}if(this.props.content){const t=document.querySelector(this.props.content);if(t&&t.dmxComponent){const r=t.dmxComponent._createContent(this._pageSize());e.content=r.content,Object.assign(e.images,r.images)}}return e.pageBreakBefore=(e,t,r,a)=>Array.isArray(e.style)&&e.style.includes("pdf-pagebreak-before")&&a.length,dmx.debug&&console.debug("docDefinition",e),pdfMake.createPdf(e,{bootstrap:this._bootstrapLayout()})},_bootstrapLayout(){return this._primary?{hLineWidth:(e,t)=>{console.log(e,t);const r=Array.isArray(t.table.dividers)&&t.table.dividers.includes(e)?1:.5;return t.style.includes("table-borderless")?0:t.style.includes("table-bordered")?r:0==e?0:r},vLineWidth:(e,t)=>t.style.includes("table-bordered")?.5:0,hLineColor:(e,t)=>Array.isArray(t.table.dividers)&&t.table.dividers.includes(e)?"black":"#b6bfc8",vLineColor:(e,t)=>"#b6bfc8",paddingLeft:(e,t)=>t.style.includes("table-sm")?3:6,paddingRight:(e,t)=>t.style.includes("table-sm")?3:6,paddingTop:(e,t)=>t.style.includes("table-sm")?3:6,paddingBottom:(e,t)=>t.style.includes("table-sm")?3:6,fillColor:(e,t)=>t.style.includes("table-striped")&&e%2==1?"#f2f2f2":null}:{}},_bootstrapStyles(){return{"text-primary":{color:this._primary},"text-secondary":{color:this._secondary},"text-success":{color:this._success},"text-danger":{color:this._danger},"text-warning":{color:this._warning},"text-info":{color:this._info},"text-light":{color:this._light},"text-dark":{color:this._dark},"link-primary":{color:this._primary},"link-secondary":{color:this._secondary},"link-success":{color:this._success},"link-danger":{color:this._danger},"link-warning":{color:this._warning},"link-info":{color:this._info},"link-light":{color:this._light},"link-dark":{color:this._dark},"bg-primary":{background:this._primary},"bg-secondary":{background:this._secondary},"bg-success":{background:this._success},"bg-danger":{background:this._danger},"bg-warning":{background:this._warning},"bg-info":{background:this._info},"bg-light":{background:this._light},"bg-dark":{background:this._dark},"table-primary":{fillColor:this._primary,fillOpacity:.25},"table-secondary":{fillColor:this._secondary,fillOpacity:.25},"table-success":{fillColor:this._success,fillOpacity:.25},"table-danger":{fillColor:this._danger,fillOpacity:.25},"table-warning":{fillColor:this._warning,fillOpacity:.25},"table-info":{fillColor:this._info,fillOpacity:.25},"table-light":{fillColor:this._light,fillOpacity:.25},"table-dark":{fillColor:this._dark,fillOpacity:.25},"fs-1":{fontSize:24},"fs-2":{fontSize:22},"fs-3":{fontSize:20},"fs-4":{fontSize:18},"fs-5":{fontSize:16},"fs-6":{fontSize:14},h1:{fontSize:24},h2:{fontSize:22},h3:{fontSize:20},h4:{fontSize:18},h5:{fontSize:16},h6:{fontSize:14},"text-start":{alignment:"left"},"text-center":{alignment:"center"},"text-end":{alignment:"right"},"fw-bold":{bold:!0},"fw-bolder":{bold:!0},"fw-normal":{bold:!1},"fst-italic":{italics:!0},"fst-normal":{italics:!1},"text-decoration-underline":{decoration:"underline"},"text-decoration-line-through":{decoration:"lineThrough"}}}}),dmx.Component("pdf-info",{attributes:{title:{type:String,default:""},author:{type:String,default:""},subject:{type:String,default:""},keywords:{type:String,default:""},creator:{type:String,default:"Wappler PDF Creator"},producer:{type:String,default:"Wappler PDF Creator"}},ui:{tagName:"dmx-pdf-info",allowedGlobalChildren:{}}}),dmx.Component("pdf-style",{attributes:{name:{type:String,default:""},font:{type:String,default:null},fontSize:{type:Number,default:null},fontFeatures:{type:Array,default:null},lineHeight:{type:Number,default:1},bold:{type:Boolean,default:!1},italics:{type:Boolean,default:!1},alignment:{type:String,default:null,enum:["left","center","right","justify"]},color:{type:String,default:null},background:{type:String,default:null},markerColor:{type:String,default:null},decoration:{type:String,default:null,enum:["underline","lineThrough","overline"]},decorationStyle:{type:String,default:null,enum:["dotted","dashed","double","wavy"]},decorationColor:{type:String,default:null}},ui:{tagName:"dmx-pdf-style",allowedGlobalChildren:{}}}),dmx.Component("pdf-content",{attributes:{removeExtraBlanks:{type:Boolean,default:!1},showHidden:{type:Boolean,default:!1},removeTagClasses:{type:Boolean,default:!1},tableAutoSize:{type:Boolean,default:!1}},_getAbsoluteUrl(e){const t=document.createElement("a");return t.href=e,t.href},_prepareContent(e){const t=e.width-e.margin[0]-e.margin[2],r=document.createElement("template");return r.innerHTML=this.$node.innerHTML,r.content.querySelectorAll("[id]").forEach((e=>{e.removeAttribute("id")})),r.content.querySelectorAll("[src]").forEach((e=>{e.setAttribute("src",this._getAbsoluteUrl(e.src))})),r.content.querySelectorAll("[href]").forEach((e=>{e.setAttribute("href",this._getAbsoluteUrl(e.href))})),r.content.querySelectorAll(".d-print-none").forEach((e=>{e.remove()})),r.content.querySelectorAll(".table").forEach((e=>{const r=e.querySelectorAll("thead tr"),a=e.querySelector("tr").children,l=a.length,i=e.classList.contains("table-sm")?6:12,n=[];let o=Array.from({length:l});if(e.querySelectorAll("th.w-100, td.w-100").length)for(let e=0;e<l;e++)a[e].classList.contains("w-100")?o[e]="*":o[e]="auto";else o=Array.from({length:l}).map((()=>t/l-i));if(e.querySelector("tbody.table-group-divider")&&n.push(r.length),e.querySelector("tfoot.table-group-divider")){const t=e.querySelectorAll("tr").length,r=e.querySelectorAll("tfoot tr").length;n.push(t-r)}e.dataset.pdfmake=JSON.stringify({layout:"bootstrap",widths:o,dividers:n,headerRows:r.length})})),r.content.querySelectorAll("hr").forEach((e=>{e.dataset.pdfmake=JSON.stringify({width:t})})),r.innerHTML},_createContent(e){let t=this._prepareContent(e);return htmlToPdfmake(t,{...this.props,imagesByReference:!0,defaultStyles:{th:{bold:!0,fillColor:""}},customTag:e=>(e.element.classList.contains("row")&&(e.ret.columnGap=10,e.ret.columns=e.ret.stack||e.ret.text,delete e.ret.stack,delete e.ret.text),/^H\d$/.test(e.element.tagName)&&(e.ret.tocItem=!0),e.ret)})}}),dmx.Component("pdf-header",{attributes:{columnGap:{type:Number,default:10},margin:{type:[Number,Array],default:10,ui:{groupTitle:"Margin",arrayVariables:!0,isDynamic:!0,variables:[{name:"marginLeft",type:"text",title:"Left",dataBindings:!0,arrayIndex:0,defaultValue:10},{name:"marginTop",type:"text",title:"Top",dataBindings:!0,arrayIndex:1,defaultValue:10},{name:"marginRight",type:"text",title:"Right",dataBindings:!0,arrayIndex:2,defaultValue:10},{name:"marginBottom",type:"text",title:"Bottom",dataBindings:!0,arrayIndex:3,defaultValue:10}]}}},ui:{tagName:"dmx-pdf-header",children:["dmx-pdf-text","dmx-pdf-image"],allowed_children:{"dmx-pdf-text":-1,"dmx-pdf-image":-1},allowedGlobalChildren:{}},render(e){e.style.display="none",this.$parse()},_getAbsoluteUrl(e){const t=document.createElement("a");return t.href=e,t.href},_createHeader(){const e={header:{columns:[],...this.props},images:{}};for(const t of this.children)if("pdf-image"!==t.data.$type)e.header.columns.push({...t.props});else{const r="img_ref_"+Math.random().toString(36).slice(2,8),a=this._getAbsoluteUrl(t.props.src),l={};t.props.fit?(l.fit=[t.props.width||1e3,t.props.height||1e3],t.props.width&&(l.width=t.props.width)):(t.props.width&&(l.width=t.props.width),t.props.height&&(l.height=t.props.height)),e.images[r]=a,e.header.columns.push({image:r,...l})}return{header:(t,r)=>{const a=structuredClone(e.header);for(const e of a.columns)e.text&&(e.text=e.text.replace(/##page##/g,t).replace(/##total##/g,r));return a},images:e.images}}}),dmx.Component("pdf-footer",{attributes:{columnGap:{type:Number,default:10},margin:{type:[Number,Array],default:10,ui:{groupTitle:"Margin",arrayVariables:!0,isDynamic:!0,variables:[{name:"marginLeft",type:"text",title:"Left",dataBindings:!0,arrayIndex:0,defaultValue:10},{name:"marginTop",type:"text",title:"Top",dataBindings:!0,arrayIndex:1,defaultValue:10},{name:"marginRight",type:"text",title:"Right",dataBindings:!0,arrayIndex:2,defaultValue:10},{name:"marginBottom",type:"text",title:"Bottom",dataBindings:!0,arrayIndex:3,defaultValue:10}]}}},ui:{tagName:"dmx-pdf-footer",children:["dmx-pdf-text","dmx-pdf-image"],allowed_children:{"dmx-pdf-text":-1,"dmx-pdf-image":-1},allowedGlobalChildren:{}},render(e){e.style.display="none",this.$parse()},_getAbsoluteUrl(e){const t=document.createElement("a");return t.href=e,t.href},_createFooter(){const e={footer:{columns:[],...this.props},images:{}};for(const t of this.children)if("pdf-image"!==t.data.$type)e.footer.columns.push({...t.props});else{const r="img_ref_"+Math.random().toString(36).slice(2,8),a=this._getAbsoluteUrl(t.props.src),l={};t.props.fit?l.fit=[t.props.width||1e3,t.props.height||1e3]:(t.props.width&&(l.width=t.props.width),t.props.height&&(l.height=t.props.height)),e.images[r]=a,e.footer.columns.push({image:r,...l})}return{footer:(t,r)=>{const a=structuredClone(e.footer);for(const e of a.columns)e.text&&(e.text=e.text.replace(/##page##/g,t).replace(/##total##/g,r));return a},images:e.images}}}),dmx.Component("pdf-watermark",{attributes:{text:{type:String,default:null},color:{type:String,default:"black"},opacity:{type:Number,default:.25},bold:{type:Boolean,default:!1},italics:{type:Boolean,default:!1},fontSize:{type:Number,default:null},angle:{type:Number,default:-45}},ui:{tagName:"dmx-pdf-watermark",allowedGlobalChildren:{}}}),dmx.Component("pdf-text",{attributes:{width:{type:[String,Number],default:null},text:{type:String,default:""},fontSize:{type:Number,default:12},lineHeight:{type:Number,default:1},bold:{type:Boolean,default:!1},italics:{type:Boolean,default:!1},alignment:{type:String,default:null,enum:["left","center","right","justify"]},color:{type:String,default:null},background:{type:String,default:null}},ui:{tagName:"dmx-pdf-text",allowedGlobalChildren:{}}}),dmx.Component("pdf-image",{attributes:{width:{type:Number,default:null},height:{type:Number,default:null},fit:{type:Boolean,default:!1},src:{type:String,default:"",ui:{type:"image"}}},ui:{tagName:"dmx-pdf-image",allowedGlobalChildren:{}}});
//# sourceMappingURL=dmxPdfCreator.js.map
