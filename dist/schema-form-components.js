/**
 * angular-schema-form-nwp-components - Common web elements for Angular Schema Form
 * @version v0.1.0
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
               scope.heading = scope.form && (scope.form.heading || scope.form.schema && scope.form.schema.default);
               scope.closeOthers      = scope.form && scope.form.closeOthers || false;
               scope.showChapter      = scope.form && scope.form.showChapter || true;
            }
         };
      });
})(angular);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-accordion.html","<accordion nwp-accordion=\"form\" ng-model=\"$$value$$\" ng-init=\"selected = { acc: 0 }\" close-others=\"{{ form.closeOthers }}\" class=\"{{ form.fieldHtmlClass }}\">\r\n   <accordion-group is-open=\"true\" ng-repeat=\"accordionGroup in form.accordionGroups\">\r\n      <accordion-heading>\r\n         <div class=\"heading-content\">\r\n            <i class=\"fa fa-fw\" ng-class=\"{\'fa-caret-down\': showChapter, \'fa-caret-right\': !showChapter}\" fw=\"fw\"></i>\r\n            {{ heading || accordionGroup.title || \'Undefined title\' | translate }}</div>\r\n      </accordion-heading>\r\n      <bootstrap-decorator ng-repeat=\"item in accordionGroup.items\" form=\"item\"></bootstrap-decorator>\r\n   </accordion-group>\r\n</accordion>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-heading.html","<h3 nwp-heading=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ heading | translate }}\r\n</h3>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-paragraph.html","<p nwp-paragraph=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ text | translate }}\r\n</p>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-stripline.html","<hr class=\"nwp-stripline {{form.fieldHtmlClass}}\" ng-model=\"$$value$$\"/>\r\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJ0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBLDhFQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG5nKSB7XHJcbiAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgIG5nLm1vZHVsZSgnc2NoZW1hRm9ybScpLmNvbmZpZyhbJ3NjaGVtYUZvcm1Qcm92aWRlcicsICdzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyJywgJ3NmUGF0aFByb3ZpZGVyJyxcclxuICAgICAgZnVuY3Rpb24gKHNjaGVtYUZvcm1Qcm92aWRlciwgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgc2ZQYXRoUHJvdmlkZXIpIHtcclxuICAgICAgICAgLyogbndwIHBhcmFncmFwaCAqL1xyXG4gICAgICAgICB2YXIgbndwUGFyYWdyYXBoID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BQYXJhZ3JhcGgnKSB7XHJcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cFBhcmFncmFwaCc7XHJcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwUGFyYWdyYXBoKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcclxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXHJcbiAgICAgICAgICAgICdud3BQYXJhZ3JhcGgnLFxyXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtcGFyYWdyYXBoLmh0bWwnXHJcbiAgICAgICAgICk7XHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxyXG4gICAgICAgICAgICAnbndwUGFyYWdyYXBoJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXBhcmFncmFwaC5odG1sJ1xyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLyogbndwIGhlYWRpbmcgKi9cclxuICAgICAgICAgdmFyIG53cEhlYWRpbmcgPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cEhlYWRpbmcnKSB7XHJcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cEhlYWRpbmcnO1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cEhlYWRpbmcpO1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxyXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcclxuICAgICAgICAgICAgJ253cEhlYWRpbmcnLFxyXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtaGVhZGluZy5odG1sJ1xyXG4gICAgICAgICApO1xyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcclxuICAgICAgICAgICAgJ253cEhlYWRpbmcnLFxyXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtaGVhZGluZy5odG1sJ1xyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLyogbndwIHN0cmlwbGluZSAqL1xyXG4gICAgICAgICB2YXIgbndwU3RyaXBsaW5lID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BTdHJpcGxpbmUnKSB7XHJcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cFN0cmlwbGluZSc7XHJcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwU3RyaXBsaW5lKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcclxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXHJcbiAgICAgICAgICAgICdud3BTdHJpcGxpbmUnLFxyXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3Atc3RyaXBsaW5lLmh0bWwnXHJcbiAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAvKiBud3AgYWNjb3JkaW9uICovXHJcbiAgICAgICAgIHZhciBud3BBY2NvcmRpb24gPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FjY29yZGlvbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cEFjY29yZGlvbicpIHtcclxuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xyXG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwQWNjb3JkaW9uJztcclxuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcclxuICAgICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BBY2NvcmRpb24pO1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxyXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcclxuICAgICAgICAgICAgJ253cEFjY29yZGlvbicsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1hY2NvcmRpb24uaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxyXG4gICAgICAgICAgICAnbndwQWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWFjY29yZGlvbi5odG1sJ1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgIF0pO1xyXG5cclxuICAgbmcubW9kdWxlKCdud3BDb21wb25lbnRzJywgW10pXHJcbiAgICAgIC5kaXJlY3RpdmUoJ253cFBhcmFncmFwaCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnRleHQgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLnRleHQgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuICAgICAgfSkuZGlyZWN0aXZlKCdud3BIZWFkaW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICBzY29wZTogICAgdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWlyZTogICduZ01vZGVsJyxcclxuICAgICAgICAgICAgbGluazogICAgIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgc2NvcGUuaGVhZGluZyA9IHNjb3BlLmZvcm0gJiYgKHNjb3BlLmZvcm0uaGVhZGluZyB8fCBzY29wZS5mb3JtLnNjaGVtYSAmJiBzY29wZS5mb3JtLnNjaGVtYS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9KS5kaXJlY3RpdmUoJ253cEFjY29yZGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmhlYWRpbmcgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLmhlYWRpbmcgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmNsb3NlT3RoZXJzICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uY2xvc2VPdGhlcnMgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaGFwdGVyICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uc2hvd0NoYXB0ZXIgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9KTtcclxufSkoYW5ndWxhcik7XHJcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
