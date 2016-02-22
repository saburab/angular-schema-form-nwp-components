/**
 * angular-schema-form-nwp-components - Common web elements for Angular Schema Form
 * @version v0.1.1
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
            scope:    true,
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.text = scope.form && (scope.form['x-schema-form'] && scope.form['x-schema-form'].text || scope.form.schema && scope.form.schema.default);
               scope.closeOthers      = scope.form && scope.form.closeOthers || false;
               scope.showChapter      = scope.form && scope.form.showChapter || true;
            }
         };
      });
})(angular);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-accordion.html","<accordion nwp-accordion=\"form\" ng-model=\"$$value$$\" ng-init=\"selected = { acc: 0 }\" close-others=\"{{ form.closeOthers }}\" class=\"{{ form.fieldHtmlClass }}\">\n   <accordion-group is-open=\"true\" ng-repeat=\"accordionGroup in form.accordionGroups\">\n      <accordion-heading>\n         <div class=\"heading-content\">\n            <i class=\"fa fa-fw\" ng-class=\"{\'fa-caret-down\': showChapter, \'fa-caret-right\': !showChapter}\" fw=\"fw\"></i>\n            {{ text || \'Undefined title\' | translate }}</div>\n      </accordion-heading>\n      <bootstrap-decorator ng-repeat=\"item in accordionGroup.items\" form=\"item\"></bootstrap-decorator>\n   </accordion-group>\n</accordion>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-heading.html","<h3 nwp-heading=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\n   {{ heading | translate }}\n</h3>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-paragraph.html","<p nwp-paragraph=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\n   {{ text | translate }}\n</p>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-stripline.html","<hr class=\"nwp-stripline {{form.fieldHtmlClass}}\" ng-model=\"$$value$$\"/>\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJ0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBLDhFQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG5nKSB7XG4gICAndXNlIHN0cmljdCc7XG5cbiAgIG5nLm1vZHVsZSgnc2NoZW1hRm9ybScpLmNvbmZpZyhbJ3NjaGVtYUZvcm1Qcm92aWRlcicsICdzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyJywgJ3NmUGF0aFByb3ZpZGVyJyxcbiAgICAgIGZ1bmN0aW9uIChzY2hlbWFGb3JtUHJvdmlkZXIsIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIHNmUGF0aFByb3ZpZGVyKSB7XG4gICAgICAgICAvKiBud3AgcGFyYWdyYXBoICovXG4gICAgICAgICB2YXIgbndwUGFyYWdyYXBoID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnbndwUGFyYWdyYXBoJykge1xuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BQYXJhZ3JhcGgnO1xuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfTtcblxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cFBhcmFncmFwaCk7XG5cbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgICAgJ253cFBhcmFncmFwaCcsXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtcGFyYWdyYXBoLmh0bWwnXG4gICAgICAgICApO1xuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgICAnbndwUGFyYWdyYXBoJyxcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1wYXJhZ3JhcGguaHRtbCdcbiAgICAgICAgICk7XG5cbiAgICAgICAgIC8qIG53cCBoZWFkaW5nICovXG4gICAgICAgICB2YXIgbndwSGVhZGluZyA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cEhlYWRpbmcnKSB7XG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cEhlYWRpbmcnO1xuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfTtcblxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cEhlYWRpbmcpO1xuXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICAgICdud3BIZWFkaW5nJyxcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1oZWFkaW5nLmh0bWwnXG4gICAgICAgICApO1xuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgICAnbndwSGVhZGluZycsXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtaGVhZGluZy5odG1sJ1xuICAgICAgICAgKTtcblxuICAgICAgICAgLyogbndwIHN0cmlwbGluZSAqL1xuICAgICAgICAgdmFyIG53cFN0cmlwbGluZSA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cFN0cmlwbGluZScpIHtcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwU3RyaXBsaW5lJztcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XG4gICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG5cbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BTdHJpcGxpbmUpO1xuXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICAgICdud3BTdHJpcGxpbmUnLFxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXN0cmlwbGluZS5odG1sJ1xuICAgICAgICAgKTtcblxuICAgICAgICAgLyogbndwIGFjY29yZGlvbiAqL1xuICAgICAgICAgdmFyIG53cEFjY29yZGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FjY29yZGlvbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cEFjY29yZGlvbicpIHtcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwQWNjb3JkaW9uJztcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XG4gICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG5cbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BBY2NvcmRpb24pO1xuXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICAgICdud3BBY2NvcmRpb24nLFxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWFjY29yZGlvbi5odG1sJ1xuICAgICAgICAgKTtcblxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgICAnbndwQWNjb3JkaW9uJyxcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1hY2NvcmRpb24uaHRtbCdcbiAgICAgICAgICk7XG4gICAgICB9XG4gICBdKTtcblxuICAgbmcubW9kdWxlKCdud3BDb21wb25lbnRzJywgW10pXG4gICAgICAuZGlyZWN0aXZlKCdud3BQYXJhZ3JhcGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiAgICB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZTogICduZ01vZGVsJyxcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICAgICAgICAgICBzY29wZS50ZXh0ID0gc2NvcGUuZm9ybSAmJiAoc2NvcGUuZm9ybS50ZXh0IHx8IHNjb3BlLmZvcm0uc2NoZW1hICYmIHNjb3BlLmZvcm0uc2NoZW1hLmRlZmF1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgIH0pLmRpcmVjdGl2ZSgnbndwSGVhZGluZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXG4gICAgICAgICAgICByZXF1aXJlOiAgJ25nTW9kZWwnLFxuICAgICAgICAgICAgbGluazogICAgIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgICAgIHNjb3BlLmhlYWRpbmcgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLmhlYWRpbmcgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9O1xuICAgICAgfSkuZGlyZWN0aXZlKCdud3BBY2NvcmRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiAgICB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZTogICduZ01vZGVsJyxcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICAgICAgICAgICBzY29wZS50ZXh0ID0gc2NvcGUuZm9ybSAmJiAoc2NvcGUuZm9ybVsneC1zY2hlbWEtZm9ybSddICYmIHNjb3BlLmZvcm1bJ3gtc2NoZW1hLWZvcm0nXS50ZXh0IHx8IHNjb3BlLmZvcm0uc2NoZW1hICYmIHNjb3BlLmZvcm0uc2NoZW1hLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgc2NvcGUuY2xvc2VPdGhlcnMgICAgICA9IHNjb3BlLmZvcm0gJiYgc2NvcGUuZm9ybS5jbG9zZU90aGVycyB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaGFwdGVyICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uc2hvd0NoYXB0ZXIgfHwgdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG4gICAgICB9KTtcbn0pKGFuZ3VsYXIpO1xuIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
