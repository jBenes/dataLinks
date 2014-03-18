/*
 *  jQuery dataLinks - v0.0.1
 *  Plugin for filling inputs via http links.
 *  https://github.com/jBenes/dataLinks
 *
 *  Made by Jiri Benes
 *  Under MIT License
 */
(function() {
  (function($) {
    var Plugin, defaults, pluginName;
    pluginName = "dataLinks";
    defaults = {
      submit: true
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      Plugin.prototype.init = function() {
        return $(this.element).on("click", ".data_link", this.options.submit, function(e) {
          var link, target;
          e.preventDefault();
          link = $(this);
          target = $(link.data("target"));
          target.val(link.data("value"));
          if (e.data) {
            return target.parents("form").trigger("submit");
          }
        });
      };

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery);

}).call(this);
