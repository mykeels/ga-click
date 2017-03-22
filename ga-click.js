(function () {
	function ga() { //this is a mock google analytic function
        console.log("%c google-analytics-event", "color: #ffaa00", arguments);
  }
  String.isNullOrEmpty = function (str) {
  	return str == null || str == '';
  }
	var EVENTS = {
        liked: {
            label: 'LIKED',
            action: function () {
                ga('send', 'event', 'interactionName', 'ButtonClick', this.label, { 'nonInteraction': 1 });;
            }
        },
        save: {
            label: 'SAVE',
            action: function () {
                ga('send', 'event', 'interactionName', 'IconClick', this.label, { 'nonInteraction': 1 });
            }
        },
        postReview /*always in camelCase*/: {
            label: 'PostReview',
            action: function () {
                ga('send', 'event', 'interactionName', 'ButtonClick', this.label, { 'nonInteraction': 0 });
            }
        } //feel free to add your own events
}

document.querySelectorAll("[ga-click]").forEach(function (elem) {
	var attr = elem.getAttribute('ga-click');
  elem.addEventListener('click', function () {
    if (!String.isNullOrEmpty(attr)) {
      var attrEvent = attr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
      if (EVENTS[attrEvent] && typeof (EVENTS[attrEvent].action) == "function") {
        var event = EVENTS[attrEvent];
        event.action();
        document.dispatchEvent(new CustomEvent("ga-click-event", { detail: EVENTS[attrEvent] }))
      }
      else console.error('Error: No registered event with trigger "' + attr + '"');
    }
  })
  console.log(attr);
})
})()