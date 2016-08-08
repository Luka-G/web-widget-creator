goog.provide("istsos.widget.Chart");

goog.require("istsos.widget.Widget");

/** istsos.widget.Map class */
/**
 * @constructor
 */
istsos.widget.Chart = function() {
    istsos.widget.Widget.call(this);
    this.chart = null;
    this.offering = null;
    this.procedures = [];
    this.observedProperties = [];
    this.interval = [];
    this.chartTypeConf = {};

    istsos.widget.Widget.prototype.setType.call(this, istsos.widget.TYPE_CHART);

};
goog.inherits(istsos.widget.Chart, istsos.widget.Widget);

istsos.widget.Chart.prototype = {
	/**
     * INHERITED
     */
    setService: function(serviceName) {
        istsos.widget.Widget.prototype.setService.call(this, serviceName);
    },
    getService: function() {
        return istsos.widget.Widget.prototype.getService.call(this);
    },
    setHeight: function(height) {
        istsos.widget.Widget.prototype.setHeight.call(this, height);
    },
    setWidth: function(width) {
        istsos.widget.Widget.prototype.setWidth.call(this, width);
    },
    setCssClass: function(cssClass) {
        istsos.widget.Widget.prototype.setCssClass.call(this, cssClass);
    },
    getCssClass: function() {
        return istsos.widget.Widget.prototype.getCssClass.call(this);
    },
    getCode: function (conf) {
    	var chartCode = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/webcomponents.min.js\"></script>\n" +
        " <link rel=\"import\" href=\"http://localhost/html/web-widget-creator/vistsos/src/default-widget.html\" async>\n";
        var code = istsos.widget.getCode(conf);
        return chartCode + code;
    },
    /** -------------------------------------------------------------- */
    setElementId: function(id) {
        this.elementId = id;
    },
    getElementId: function() {
        return this.elementId;
    },
    setOffering: function(offering) {
        this.offering = offering;
    },
    getOffering: function() {
        return this.offering;
    },
    setProcedures: function(proceduresList) {
        this.procedures = proceduresList;
    },
    getProcedures: function() {
        return this.procedures;
    },
    addObservedProperty: function(observedProperty) {
        this.observedProperties.push(observedProperty);
    },
    setObservedProperties: function(observedPropertiesArray) {
        this.observedProperties = observedPropertiesArray;
    },
    getObservedProperties: function() {
        return this.observedProperties;
    },
    setInterval: function(interval) {
        this.interval = interval;
    },
    getInterval: function() {
        return this.interval;
    },
    setChartTypeConf: function(chartTypeConf) {
        this.chartTypeConf = chartTypeConf;
    },
    getChartTypeConf: function() {
        return this.chartTypeConf;
    },
    build: function() {
    	var widget = this;
    	var preview = document.getElementById('preview');

    	istsos.widget.SERVER_PROMISE.then(function(data) {
    		var config = widget.getConfig();
    		var chart = document.createElement('istsos-chart');
    		chart.setAttribute("type", config["type"]);
    		chart.setAttribute("server", data["url"]);
    		chart.setAttribute("service", config["service"]);
    		chart.setAttribute("offering", config["offering"]);
    		chart.setAttribute("procedures", config["procedures"]);
    		chart.setAttribute("property", config["observedProperties"]);
    		chart.setAttribute("from", config["interval"][0]);
    		chart.setAttribute("until", config["interval"][1]);
    		for(var key in config["chartTypeConf"]) {
    			if(config["chartTypeConf"][key] !== null || config["chartTypeConf"][key] !== "") {
    				chart.setAttribute(key, config["chartTypeConf"][key]);
    			} else {
    				console.log("IMA NEKA TAJNA VEZA");
    			}
    		}
    		chart.setAttribute("divId", config["elementId"]);

    		console.log(chart);
    		var preview = document.getElementById('preview');
    		if(preview !== null) {
    			var link = document.createElement('link');
    			link.setAttribute("rel","import");
    			link.setAttribute("href", "vistsos/src/default-widget.html");
    			link.setAttribute("async",true);
    			document.getElementsByTagName("head")[0].appendChild(link)
    		}

    	});
    	

    },
    getConfig: function() {
    	return {
            "service": this.service,
            "elementId": this.elementId,
            "type": this.type,
            "offering": this.offering,
            "procedures": this.procedures,
            "observedProperties": this.observedProperties,
            "interval": this.interval,
            "width": this.width,
            "height": this.height,
            "cssClass": this.cssClass,
            "chartTypeConf": this.chartTypeConf
        };
    }
}