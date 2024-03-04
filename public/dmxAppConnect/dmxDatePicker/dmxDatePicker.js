/*!
 Wappler Date Picker
 Version: 3.0.0-beta.10
 (c) 2024 Wappler.io
 @build 2024-02-29 16:19:47
 */
(()=>{const t=daterangepicker.prototype.clickDate;daterangepicker.prototype.clickDate=function(e){if(!this.container.find(".in-range:not(.available)").length)return t.call(this,e)}})(),dmx.Component("date-picker",{extends:"form-element",attributes:{name:{type:String,default:""},showdropdowns:{type:Boolean,default:!1},minyear:{type:Number,default:void 0},maxyear:{type:Number,default:void 0},autoapply:{type:Boolean,default:!0},opens:{type:String,default:"right",enum:["left","right","center"]},drops:{type:String,default:"down",enum:["down","up","auto"]},dropsup:{type:Boolean,default:!1},showweeknumbers:{type:Boolean,default:!1},mindate:{type:String,default:""},maxdate:{type:String,default:""},format:{type:String,default:null},invaliddates:{type:Array,default:[]},invaliddatesStart:{type:String,default:"start"},invaliddatesEnd:{type:String,default:"end"},customdates:{type:Array,default:[]},customdatesStart:{type:String,default:"start"},customdatesEnd:{type:String,default:"end"},customdatesClass:{type:String,default:"class"},disableweekends:{type:Boolean,default:!1},direction:{type:String,default:"ltr",enum:["ltr","rtl"]},weeklabel:{type:String,default:"W"},applylabel:{type:String,default:"Apply"},cancellabel:{type:String,default:"Cancel"},timepicker:{type:Boolean,default:!1},use24hours:{type:Boolean,default:!1},minutesIncrement:{type:Number,default:1},utc:{type:Boolean,default:!1}},events:{show:Event,hide:Event,apply:Event,cancel:Event},init(t){this._isCustomDate=this._isCustomDate.bind(this),this._isInvalidDate=this._isInvalidDate.bind(this),this._updateValue=this._updateValue.bind(this),this._applyHandler=this._applyHandler.bind(this),this._changeHandler=this._changeHandler.bind(this),dmx.Component("form-element").prototype.init.call(this,t),this.props.format||(this.props.format=this.props.timepicker?"L LT":"L"),this._createHiddenInput(),t.removeAttribute("name"),t.autocomplete="off",t.value=this._formatDate(this.props.value)||"",t.defaultValue=t.value,this._createDaterangePicker()},destroy(){this._daterangepicker&&this._daterangepicker.remove(),this._input&&this._input.remove()},performUpdate(t){t.has("name")&&(this._input.name=this.props.name,1===t.size)||t.has("disabled")&&(this.$node.disabled=this.props.disabled,this._input.disabled=this.props.disabled,1===t.size)||t.has("value")&&(this._setValue(this.props.value,!0),1===t.size)||(this.props.format||(this.props.format=this.props.timepicker?"L LT":"L"),this._createDaterangePicker())},_createHiddenInput(){this._input=document.createElement("input"),this._input.type="hidden",this._input.name=this.$node.name,this._input.value=this.props.value,this._input.defaultValue=this.props.value,this.$node.parentNode.insertBefore(this._input,this.$node)},_createDaterangePicker(){const t=$(this.$node);t.daterangepicker({parentEl:t.closest(".modal, .offcanvas, .offcanvas-sm, .offcanvas-md, .offcanvas-lg, .offcanvas-xl, .offcanvas-xxl")[0]||document.body,singleDatePicker:!0,autoUpdateInput:!1,autoApply:this.props.autoapply,showWeekNumbers:this.props.showweeknumbers,showDropdowns:this.props.showdropdowns,minYear:this.props.minyear,maxYear:this.props.maxyear,opens:this.props.opens,drops:this.props.dropsup?"up":this.props.drops,minDate:this._formatDate(this.props.mindate),maxDate:this._formatDate(this.props.maxdate),locale:{format:this.props.format,direction:this.props.direction,weekLabel:this.props.weeklabel,applyLabel:this.props.applylabel,cancelLabel:this.props.cancellabel},buttonClasses:"",applyButtonClasses:"",cancelButtonClasses:"",isCustomDate:this._isCustomDate,isInvalidDate:this._isInvalidDate,timePicker:this.props.timepicker,timePicker24Hour:this.props.use24hours,timePickerIncrement:this.props.minutesIncrement},this._updateValue),t.on("apply.daterangepicker",this._applyHandler),t.on("change.daterangepicker",this._changeHandler),t.on("show.daterangepicker",this.dispatchEvent.bind(this,"show")),t.on("hide.daterangepicker",this.dispatchEvent.bind(this,"hide")),t.on("apply.daterangepicker",this.dispatchEvent.bind(this,"apply")),t.on("cancel.daterangepicker",this.dispatchEvent.bind(this,"cancel")),this._daterangepicker=t.data("daterangepicker")},_formatDate(t){if(!t)return;if("now"==t||"today"==t)return moment().format(this.props.format);const e=moment(t);return e.isValid()?e.format(this.props.format):void 0},_isInvalidDate(t){return!(!this.props.disableweekends||0!==t.day()&&6!==t.day())||this.props.invaliddates.some((e=>this._isInRange(t,e,this.props.invaliddatesStart,this.props.invaliddatesEnd)))},_isCustomDate(t){return this.props.customdates.filter((e=>this._isInRange(t,e,this.props.customdatesStart,this.props.customdatesEnd))).map((t=>t[this.props.customdatesClass]))},_isInRange:(t,e,a,s)=>e[a]&&e[s]?t.isSameOrAfter(e[a])&&t.isSameOrBefore(e[s]):e[a]?t.isSameOrAfter(e[a]):!!e[s]&&t.isSameOrBefore(e[s]),_updateValue(t){let e=this.props.utc?t.toISOString():t.format("YYYY-MM-DD HH:mm:ss"),a=this.data.value;this._setValue(e),a!==this.data.value&&(this.dispatchEvent("change"),this.dispatchEvent("changed"))},_updateData(t){t&&this.$node.dirty&&dmx.validate(this.$node),this.set("disabled",this.$node.disabled),this._input.value!==this.data.value&&(this.set("value",this._input.value),dmx.nextTick((()=>this.dispatchEvent("updated")))),this.$node.dirty&&(this.set("invalid",!this.$node.validity.valid),this.set("validationMessage",this.$node.validationMessage))},_setValue(t,e){"string"!=typeof t&&(t=""),"now"!=t&&"today"!=t||(t=this.props.utc?moment().toISOString():moment().format("YYYY-MM-DD HH:mm:ss")),this.props.timepicker||(t=t.substring(0,10)),this._daterangepicker.setStartDate(this._formatDate(t)||new Date),this._daterangepicker.setEndDate(this._formatDate(t)||new Date),this.$node.value=this._formatDate(t)||"",this._input.value=t||"",e&&(this.$node.defaultValue=this.$node.value,this._input.defaultValue=this._input.value),this._updateData(!0)},_applyHandler(t){this._updateValue(this._daterangepicker.startDate)},_changeHandler(t){this.$node.value&&moment(this.$node.value,this.props.format).isValid()?this._setValue(moment(this.$node.value,this.props.format)):this._setValue("")}}),dmx.Component("date-range-picker",{extends:"date-picker",initialData:{start:"",end:""},attributes:{startdate:{type:String,default:""},enddate:{type:String,default:""},autoapply:{type:Boolean,default:!1},separator:{type:String,default:" - "},unlinked:{type:Boolean,default:!1},maxspanYears:{type:Number,default:null},maxspanMonths:{type:Number,default:null},maxspanWeeks:{type:Number,default:null},maxspanDays:{type:Number,default:null}},methods:{setValue(t,e){this._setValue(t,e)}},init(t){dmx.Component("date-picker").prototype.init.call(this,t),this._setValue({start:this.props.startdate,end:this.props.enddate},!0)},destroy(){this._daterangepicker&&this._daterangepicker.remove(),this._input&&this._input.remove(),this._input_start&&this._input_start.remove(),this._input_end&&this._input_end.remove()},performUpdate(t){if(!(t.has("name")&&(this._input.name=this.props.name,this._input_start.name=this.props.name+"_start",this._input_end.name=this.props.name+"_end",1===t.size)||t.has("disabled")&&(this.$node.disabled=this.props.disabled,this._input.disabled=this.props.disabled,this._input_start.disabled=this.props.disabled,this._input_end.disabled=this.props.disabled,1===t.size))){if(t.has("startdate")||t.has("enddate")){if(this._setValue({start:this.props.startdate,end:this.props.enddate},!0),t.has("startdate")&&t.has("enddate")&&2===t.size)return;if(1===t.size)return}this.props.format||(this.props.format=this.props.timepicker?"L LT":"L"),this._createDaterangePicker()}},_createHiddenInput(){dmx.Component("date-picker").prototype._createHiddenInput.call(this),this._input_start=document.createElement("input"),this._input_start.type="hidden",this._input_start.name=this.$node.name+"_start",this._input_start.value=this.$node.value,this.$node.parentNode.insertBefore(this._input_start,this.$node),this._input_end=document.createElement("input"),this._input_end.type="hidden",this._input_end.name=this.$node.name+"_end",this._input_end.value=this.$node.value,this.$node.parentNode.insertBefore(this._input_end,this.$node)},_createDaterangePicker(){const t=$(this.$node);t.daterangepicker({parentEl:t.closest(".modal, .offcanvas")[0]||document.body,autoUpdateInput:!1,autoApply:this.props.autoapply,linkedCalendars:!this.props.unlinked,showWeekNumbers:this.props.showweeknumbers,showDropdowns:this.props.showdropdowns,minYear:this.props.minyear,maxYear:this.props.maxyear,opens:this.props.opens,drops:this.props.dropsup?"up":this.props.drops,minDate:this._formatDate(this.props.mindate),maxDate:this._formatDate(this.props.maxdate),maxSpan:this._getMaxSpan(),locale:{format:this.props.format,separator:this.props.separator,direction:this.props.direction,weekLabel:this.props.weeklabel,applyLabel:this.props.applylabel,cancelLabel:this.props.cancellabel},buttonClasses:"",applyButtonClasses:"",cancelButtonClasses:"",isCustomDate:this._isCustomDate,isInvalidDate:this._isInvalidDate,timePicker:this.props.timepicker,timePicker24Hour:this.props.use24hours,timePickerIncrement:this.props.minutesIncrement},this._updateValue),t.on("apply.daterangepicker",this._applyHandler),t.on("change.daterangepicker",this._changeHandler),t.on("show.daterangepicker",this.dispatchEvent.bind(this,"show")),t.on("hide.daterangepicker",this.dispatchEvent.bind(this,"hide")),t.on("apply.daterangepicker",this.dispatchEvent.bind(this,"apply")),t.on("cancel.daterangepicker",this.dispatchEvent.bind(this,"cancel")),this._daterangepicker=t.data("daterangepicker")},_updateValue(t,e){let a=this.props.utc?t.toISOString():t.format("YYYY-MM-DD HH:mm:ss"),s=this.props.utc?e.toISOString():e.format("YYYY-MM-DD HH:mm:ss"),i=this.data.start,n=this.data.end;this._setValue({start:a,end:s}),this.data.value===i&&this.data.value===n||(this.dispatchEvent("change"),this.dispatchEvent("changed"))},_updateData(t){t&&this.$node.dirty&&dmx.validate(this.$node),this.set("disabled",this.$node.disabled),this._input.value===this.data.value&&this._input_start===this.data.start&&this._input_end===this.data.end||(this.set({value:this._input.value,start:this._input_start.value,end:this._input_end.value}),dmx.nextTick((()=>this.dispatchEvent("updated")))),this.$node.dirty&&(this.set("invalid",!this.$node.validity.valid),this.set("validationMessage",this.$node.validationMessage))},_setValue(t,e){let{start:a="",end:s=""}=t;"string"!=typeof a&&(a=""),"string"!=typeof s&&(s=""),"now"!=a&&"today"!=a||(a=this.props.utc?moment().toISOString():moment().format("YYYY-MM-DD HH:mm:ss")),"now"!=s&&"today"!=s||(s=this.props.utc?moment().toISOString():moment().format("YYYY-MM-DD HH:mm:ss")),this.props.timepicker||(a=a.substring(0,10),s=s.substring(0,10)),a&&this._daterangepicker.setStartDate(this._formatDate(a)),s&&this._daterangepicker.setEndDate(this._formatDate(s)),this.$node.value=a&&s?this._formatDate(a)+this.props.separator+this._formatDate(s):"",this._input.value=a&&s?a+"/"+s:"",this._input_start.value=a||"",this._input_end.value=s||"",e&&(this.$node.defaultValue=this.$node.value,this._input.defaultValue=this._input.value,this._input_start.defaultValue=this._input_start.value,this._input_end.defaultValue=this._input_end.value),this._updateData(!0)},_getMaxSpan(){const{maxspanYears:t,maxspanMonths:e,maxspanWeeks:a,maxspanDays:s}=this.props;if(t||e||a||s)return{years:t,months:e,weeks:a,days:s}},_applyHandler(t){const e=this.data.start,a=this.data.end;this._updateValue(this._daterangepicker.startDate,this._daterangepicker.endDate),this._input_start.value===e&&this._input_end.value===a||this.dispatchEvent("changed")}});
//# sourceMappingURL=dmxDatePicker.js.map
