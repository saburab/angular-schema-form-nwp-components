/**
 * angular-schema-form-nwp-components - Common web elements for Angular Schema Form
 * @version v1.0.1
 * @link https://github.com/saburab/angular-schema-form-nwp-components
 * @license MIT
 */
(function (ng) {
   'use strict';

   ng.module('schemaForm').config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
      function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
         /* nwp paragraph */
         var nwpParagraph = function (name, schema, options) {
            if (schema.type === 'string' && schema.format === 'nwpParagraph') {
               var f                                                  = schemaFormProvider.stdFormObj(name, schema, options);
               f.key                                                  = options.path;
               f.type                                                 = 'nwpParagraph';
               options.lookup[sfPathProvider.stringify(options.path)] = f;
               return f;
            }
         };

         schemaFormProvider.defaults.string.unshift(nwpParagraph);

         schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'nwpParagraph',
            'directives/decorators/bootstrap/nwp-components/nwp-paragraph.html'
         );
         schemaFormDecoratorsProvider.createDirective(
            'nwpParagraph',
            'directives/decorators/bootstrap/nwp-components/nwp-paragraph.html'
         );

         /* nwp heading */
         var nwpHeading = function (name, schema, options) {
            if (schema.type === 'string' && schema.format === 'nwpHeading') {
               var f                                                  = schemaFormProvider.stdFormObj(name, schema, options);
               f.key                                                  = options.path;
               f.type                                                 = 'nwpHeading';
               options.lookup[sfPathProvider.stringify(options.path)] = f;
               return f;
            }
         };

         schemaFormProvider.defaults.string.unshift(nwpHeading);

         schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'nwpHeading',
            'directives/decorators/bootstrap/nwp-components/nwp-heading.html'
         );
         schemaFormDecoratorsProvider.createDirective(
            'nwpHeading',
            'directives/decorators/bootstrap/nwp-components/nwp-heading.html'
         );

         /* nwp stripline */
         var nwpStripline = function (name, schema, options) {
            if (schema.type === 'string' && schema.format === 'nwpStripline') {
               var f                                                  = schemaFormProvider.stdFormObj(name, schema, options);
               f.key                                                  = options.path;
               f.type                                                 = 'nwpStripline';
               options.lookup[sfPathProvider.stringify(options.path)] = f;
               return f;
            }
         };

         schemaFormProvider.defaults.string.unshift(nwpStripline);

         schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'nwpStripline',
            'directives/decorators/bootstrap/nwp-components/nwp-stripline.html'
         );

         /* nwp accordion */
         var nwpAccordion = function (name, schema, options) {
            if (schema.type === 'accordion' && schema.format === 'nwpAccordion') {
               var f                                                  = schemaFormProvider.stdFormObj(name, schema, options);
               f.key                                                  = options.path;
               f.type                                                 = 'nwpAccordion';
               options.lookup[sfPathProvider.stringify(options.path)] = f;
               return f;
            }
         };

         schemaFormProvider.defaults.string.unshift(nwpAccordion);

         schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'nwpAccordion',
            'directives/decorators/bootstrap/nwp-components/nwp-accordion.html'
         );

         schemaFormDecoratorsProvider.createDirective(
            'nwpAccordion',
            'directives/decorators/bootstrap/nwp-components/nwp-accordion.html'
         );
      }
   ]);

   ng.module('nwpComponents', [])
      .directive('nwpParagraph', function () {
         return {
            restrict: 'A',
            scope:    true,
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.text = scope.form && (scope.form.text || scope.form.schema && scope.form.schema.default);
            }
         };
      }).directive('nwpHeading', function () {
         return {
            restrict: 'A',
            scope:    true,
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.heading = scope.form && (scope.form.heading || scope.form.schema && scope.form.schema.default);
            }
         };
      }).directive('nwpAccordion', function () {
         return {
            restrict: 'A',
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.text = scope.form && (scope.form['x-schema-form'] && scope.form['x-schema-form'].text || scope.form.schema && scope.form.schema.default);
               scope.closeOthers      = scope.form && scope.form.closeOthers || false;
               scope.showChapter      = scope.form && scope.form.showChapter || true;
            }
         };
      });
})(angular);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-accordion.html","<uib-accordion nwp-accordion=\"form\" ng-model=\"$$value$$\" ng-init=\"selected = { acc: 0 }\" close-others=\"{{ form.closeOthers }}\" class=\"{{ form.fieldHtmlClass }}\">\n   <uib-accordion-group is-open=\"true\" ng-repeat=\"accordionGroup in form.tabs\">\n      <uib-accordion-heading>\n         <div class=\"heading-content\" ng-click=\"showChapter=!showChapter\">\n            <i class=\"fa fa-fw\" ng-class=\"{\'fa-caret-down\': showChapter, \'fa-caret-right\': !showChapter}\" fw=\"fw\"></i>\n            {{ text || \'Undefined title\' | translate }}\n         </div>\n      </uib-accordion-heading>\n      <bootstrap-decorator ng-repeat=\"item in accordionGroup.items\" form=\"item\"></bootstrap-decorator>\n   </uib-accordion-group>\n</uib-accordion>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-heading.html","<h3 nwp-heading=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ heading | translate }}\r\n</h3>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-paragraph.html","<p nwp-paragraph=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ text | translate }}\r\n</p>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-stripline.html","<hr class=\"nwp-stripline {{form.fieldHtmlClass}}\" ng-model=\"$$value$$\"/>\r\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJ0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9IQSw4RUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2hlbWEtZm9ybS1jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChuZykge1xyXG4gICAndXNlIHN0cmljdCc7XHJcblxyXG4gICBuZy5tb2R1bGUoJ3NjaGVtYUZvcm0nKS5jb25maWcoWydzY2hlbWFGb3JtUHJvdmlkZXInLCAnc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlcicsICdzZlBhdGhQcm92aWRlcicsXHJcbiAgICAgIGZ1bmN0aW9uIChzY2hlbWFGb3JtUHJvdmlkZXIsIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIHNmUGF0aFByb3ZpZGVyKSB7XHJcbiAgICAgICAgIC8qIG53cCBwYXJhZ3JhcGggKi9cclxuICAgICAgICAgdmFyIG53cFBhcmFncmFwaCA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnbndwUGFyYWdyYXBoJykge1xyXG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BQYXJhZ3JhcGgnO1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cFBhcmFncmFwaCk7XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXHJcbiAgICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxyXG4gICAgICAgICAgICAnbndwUGFyYWdyYXBoJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXBhcmFncmFwaC5odG1sJ1xyXG4gICAgICAgICApO1xyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcclxuICAgICAgICAgICAgJ253cFBhcmFncmFwaCcsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1wYXJhZ3JhcGguaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8qIG53cCBoZWFkaW5nICovXHJcbiAgICAgICAgIHZhciBud3BIZWFkaW5nID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BIZWFkaW5nJykge1xyXG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BIZWFkaW5nJztcclxuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcclxuICAgICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BIZWFkaW5nKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcclxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXHJcbiAgICAgICAgICAgICdud3BIZWFkaW5nJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWhlYWRpbmcuaHRtbCdcclxuICAgICAgICAgKTtcclxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXHJcbiAgICAgICAgICAgICdud3BIZWFkaW5nJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWhlYWRpbmcuaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8qIG53cCBzdHJpcGxpbmUgKi9cclxuICAgICAgICAgdmFyIG53cFN0cmlwbGluZSA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnbndwU3RyaXBsaW5lJykge1xyXG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BTdHJpcGxpbmUnO1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cFN0cmlwbGluZSk7XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXHJcbiAgICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxyXG4gICAgICAgICAgICAnbndwU3RyaXBsaW5lJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXN0cmlwbGluZS5odG1sJ1xyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLyogbndwIGFjY29yZGlvbiAqL1xyXG4gICAgICAgICB2YXIgbndwQWNjb3JkaW9uID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhY2NvcmRpb24nICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BBY2NvcmRpb24nKSB7XHJcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cEFjY29yZGlvbic7XHJcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwQWNjb3JkaW9uKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcclxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXHJcbiAgICAgICAgICAgICdud3BBY2NvcmRpb24nLFxyXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtYWNjb3JkaW9uLmh0bWwnXHJcbiAgICAgICAgICk7XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcclxuICAgICAgICAgICAgJ253cEFjY29yZGlvbicsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1hY2NvcmRpb24uaHRtbCdcclxuICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICBdKTtcclxuXHJcbiAgIG5nLm1vZHVsZSgnbndwQ29tcG9uZW50cycsIFtdKVxyXG4gICAgICAuZGlyZWN0aXZlKCdud3BQYXJhZ3JhcGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgIHNjb3BlOiAgICB0cnVlLFxyXG4gICAgICAgICAgICByZXF1aXJlOiAgJ25nTW9kZWwnLFxyXG4gICAgICAgICAgICBsaW5rOiAgICAgZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xyXG4gICAgICAgICAgICAgICBzY29wZS50ZXh0ID0gc2NvcGUuZm9ybSAmJiAoc2NvcGUuZm9ybS50ZXh0IHx8IHNjb3BlLmZvcm0uc2NoZW1hICYmIHNjb3BlLmZvcm0uc2NoZW1hLmRlZmF1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcbiAgICAgIH0pLmRpcmVjdGl2ZSgnbndwSGVhZGluZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmhlYWRpbmcgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLmhlYWRpbmcgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuICAgICAgfSkuZGlyZWN0aXZlKCdud3BBY2NvcmRpb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnRleHQgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtWyd4LXNjaGVtYS1mb3JtJ10gJiYgc2NvcGUuZm9ybVsneC1zY2hlbWEtZm9ybSddLnRleHQgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmNsb3NlT3RoZXJzICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uY2xvc2VPdGhlcnMgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaGFwdGVyICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uc2hvd0NoYXB0ZXIgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9KTtcclxufSkoYW5ndWxhcik7XHJcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
