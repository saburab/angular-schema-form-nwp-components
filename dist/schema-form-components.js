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
         var defaultText              = 'Accusata honestatis interesset ne eam, elitr semper dolores has et. Eam ea error invidunt, ne sea nostro commune omittantur. Vix ut electram hendrerit constituam, an sed illud utroque phaedrum, cum sumo vituperatoribus eu. Mel te facer meliore repudiare. Tractatos conclusionemque mei at, sed atqui iudico intellegam ut.',
             defaultHeading          = 'H3. Netzwerkplan heading',
             defaultAccordionHeading = 'Netzwerkplan accordion heading';

         /* nwp paragraph */
         var nwpParagraph = function (name, schema, options) {
            if (schema.type === 'string' && schema.format === 'nwpParagraph') {
               if (!schema.defaultText) {
                  schema.defaultText = defaultText;
               }

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
               if (!schema.defaultHeading) {
                  schema.defaultHeading = defaultHeading;
               }

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
               if (!schema.defaultHeading) {
                  schema.defaultHeading = defaultAccordionHeading;
               }

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
               scope.text = scope.form && (scope.form.text || scope.form.schema && scope.form.schema.defaultText);
            }
         };
      }).directive('nwpHeading', function () {
         return {
            restrict: 'A',
            scope:    true,
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.heading = scope.form && (scope.form.heading || scope.form.schema && scope.form.schema.defaultHeading);
            }
         };
      }).directive('nwpAccordion', function () {
         return {
            restrict: 'A',
            scope:    true,
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.heading = scope.form && (scope.form.heading || scope.form.schema && scope.form.schema.defaultHeading);
               scope.closeOthers      = scope.form && scope.form.closeOthers || false;
               scope.showChapter      = scope.form && scope.form.showChapter || true;
            }
         };
      });
})(angular);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-accordion.html","<accordion nwp-accordion=\"form\" ng-model=\"$$value$$\" ng-init=\"selected = { acc: 0 }\" close-others=\"{{ form.closeOthers }}\" class=\"{{ form.fieldHtmlClass }}\">\r\n   <accordion-group is-open=\"true\" ng-repeat=\"accordionGroup in form.accordionGroups\">\r\n      <accordion-heading>\r\n         <div class=\"heading-content\">\r\n            <i class=\"fa fa-fw\" ng-class=\"{\'fa-caret-down\': showChapter, \'fa-caret-right\': !showChapter}\" fw=\"fw\"></i>\r\n            {{ heading || accordionGroup.title || \'Undefined title\' | translate }}</div>\r\n      </accordion-heading>\r\n      <bootstrap-decorator ng-repeat=\"item in accordionGroup.items\" form=\"item\"></bootstrap-decorator>\r\n   </accordion-group>\r\n</accordion>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-heading.html","<h3 nwp-heading=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ heading }}\r\n</h3>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-paragraph.html","<p nwp-paragraph=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\r\n   {{ text }}\r\n</p>\r\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-stripline.html","<hr class=\"nwp-stripline {{form.fieldHtmlClass}}\" ng-model=\"$$value$$\"/>\r\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJ0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSkEsOEVBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NoZW1hLWZvcm0tY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAobmcpIHtcclxuICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgbmcubW9kdWxlKCdzY2hlbWFGb3JtJykuY29uZmlnKFsnc2NoZW1hRm9ybVByb3ZpZGVyJywgJ3NjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXInLCAnc2ZQYXRoUHJvdmlkZXInLFxyXG4gICAgICBmdW5jdGlvbiAoc2NoZW1hRm9ybVByb3ZpZGVyLCBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBzZlBhdGhQcm92aWRlcikge1xyXG4gICAgICAgICB2YXIgZGVmYXVsdFRleHQgICAgICAgICAgICAgID0gJ0FjY3VzYXRhIGhvbmVzdGF0aXMgaW50ZXJlc3NldCBuZSBlYW0sIGVsaXRyIHNlbXBlciBkb2xvcmVzIGhhcyBldC4gRWFtIGVhIGVycm9yIGludmlkdW50LCBuZSBzZWEgbm9zdHJvIGNvbW11bmUgb21pdHRhbnR1ci4gVml4IHV0IGVsZWN0cmFtIGhlbmRyZXJpdCBjb25zdGl0dWFtLCBhbiBzZWQgaWxsdWQgdXRyb3F1ZSBwaGFlZHJ1bSwgY3VtIHN1bW8gdml0dXBlcmF0b3JpYnVzIGV1LiBNZWwgdGUgZmFjZXIgbWVsaW9yZSByZXB1ZGlhcmUuIFRyYWN0YXRvcyBjb25jbHVzaW9uZW1xdWUgbWVpIGF0LCBzZWQgYXRxdWkgaXVkaWNvIGludGVsbGVnYW0gdXQuJyxcclxuICAgICAgICAgICAgIGRlZmF1bHRIZWFkaW5nICAgICAgICAgID0gJ0gzLiBOZXR6d2Vya3BsYW4gaGVhZGluZycsXHJcbiAgICAgICAgICAgICBkZWZhdWx0QWNjb3JkaW9uSGVhZGluZyA9ICdOZXR6d2Vya3BsYW4gYWNjb3JkaW9uIGhlYWRpbmcnO1xyXG5cclxuICAgICAgICAgLyogbndwIHBhcmFncmFwaCAqL1xyXG4gICAgICAgICB2YXIgbndwUGFyYWdyYXBoID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BQYXJhZ3JhcGgnKSB7XHJcbiAgICAgICAgICAgICAgIGlmICghc2NoZW1hLmRlZmF1bHRUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHNjaGVtYS5kZWZhdWx0VGV4dCA9IGRlZmF1bHRUZXh0O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BQYXJhZ3JhcGgnO1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLnN0cmluZy51bnNoaWZ0KG53cFBhcmFncmFwaCk7XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXHJcbiAgICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxyXG4gICAgICAgICAgICAnbndwUGFyYWdyYXBoJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXBhcmFncmFwaC5odG1sJ1xyXG4gICAgICAgICApO1xyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcclxuICAgICAgICAgICAgJ253cFBhcmFncmFwaCcsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1wYXJhZ3JhcGguaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8qIG53cCBoZWFkaW5nICovXHJcbiAgICAgICAgIHZhciBud3BIZWFkaW5nID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BIZWFkaW5nJykge1xyXG4gICAgICAgICAgICAgICBpZiAoIXNjaGVtYS5kZWZhdWx0SGVhZGluZykge1xyXG4gICAgICAgICAgICAgICAgICBzY2hlbWEuZGVmYXVsdEhlYWRpbmcgPSBkZWZhdWx0SGVhZGluZztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xyXG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwSGVhZGluZyc7XHJcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwSGVhZGluZyk7XHJcblxyXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXHJcbiAgICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxyXG4gICAgICAgICAgICAnbndwSGVhZGluZycsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1oZWFkaW5nLmh0bWwnXHJcbiAgICAgICAgICk7XHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxyXG4gICAgICAgICAgICAnbndwSGVhZGluZycsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1oZWFkaW5nLmh0bWwnXHJcbiAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAvKiBud3Agc3RyaXBsaW5lICovXHJcbiAgICAgICAgIHZhciBud3BTdHJpcGxpbmUgPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cFN0cmlwbGluZScpIHtcclxuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xyXG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwU3RyaXBsaW5lJztcclxuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcclxuICAgICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BTdHJpcGxpbmUpO1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxyXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcclxuICAgICAgICAgICAgJ253cFN0cmlwbGluZScsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1zdHJpcGxpbmUuaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8qIG53cCBhY2NvcmRpb24gKi9cclxuICAgICAgICAgdmFyIG53cEFjY29yZGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYWNjb3JkaW9uJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnbndwQWNjb3JkaW9uJykge1xyXG4gICAgICAgICAgICAgICBpZiAoIXNjaGVtYS5kZWZhdWx0SGVhZGluZykge1xyXG4gICAgICAgICAgICAgICAgICBzY2hlbWEuZGVmYXVsdEhlYWRpbmcgPSBkZWZhdWx0QWNjb3JkaW9uSGVhZGluZztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xyXG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwQWNjb3JkaW9uJztcclxuICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcclxuICAgICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BBY2NvcmRpb24pO1xyXG5cclxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxyXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcclxuICAgICAgICAgICAgJ253cEFjY29yZGlvbicsXHJcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1hY2NvcmRpb24uaHRtbCdcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxyXG4gICAgICAgICAgICAnbndwQWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWFjY29yZGlvbi5odG1sJ1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgIF0pO1xyXG5cclxuICAgbmcubW9kdWxlKCdud3BDb21wb25lbnRzJywgW10pXHJcbiAgICAgIC5kaXJlY3RpdmUoJ253cFBhcmFncmFwaCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnRleHQgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLnRleHQgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdFRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcbiAgICAgIH0pLmRpcmVjdGl2ZSgnbndwSGVhZGluZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgc2NvcGU6ICAgIHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmhlYWRpbmcgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtLmhlYWRpbmcgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdEhlYWRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcbiAgICAgIH0pLmRpcmVjdGl2ZSgnbndwQWNjb3JkaW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICBzY29wZTogICAgdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWlyZTogICduZ01vZGVsJyxcclxuICAgICAgICAgICAgbGluazogICAgIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgc2NvcGUuaGVhZGluZyA9IHNjb3BlLmZvcm0gJiYgKHNjb3BlLmZvcm0uaGVhZGluZyB8fCBzY29wZS5mb3JtLnNjaGVtYSAmJiBzY29wZS5mb3JtLnNjaGVtYS5kZWZhdWx0SGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLmNsb3NlT3RoZXJzICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uY2xvc2VPdGhlcnMgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaGFwdGVyICAgICAgPSBzY29wZS5mb3JtICYmIHNjb3BlLmZvcm0uc2hvd0NoYXB0ZXIgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9KTtcclxufSkoYW5ndWxhcik7XHJcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
