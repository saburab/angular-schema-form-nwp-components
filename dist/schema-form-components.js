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
            require:  'ngModel',
            link:     function (scope, element, attrs, ngModel) {
               scope.text = scope.form && (scope.form['x-schema-form'] && scope.form['x-schema-form'].text || scope.form.schema && scope.form.schema.default);
               scope.closeOthers      = scope.form && scope.form.closeOthers || false;
               scope.showChapter      = scope.form && scope.form.showChapter || true;
            }
         };
      });
})(angular);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-accordion.html","<uib-accordion nwp-accordion=\"form\" ng-model=\"$$value$$\" ng-init=\"selected = { acc: 0 }\" close-others=\"{{ form.closeOthers }}\" class=\"{{ form.fieldHtmlClass }}\">\n   <uib-accordion-group is-open=\"true\" ng-repeat=\"accordionGroup in form.accordionGroups\">\n      <uib-accordion-heading>\n         <div class=\"heading-content\" ng-click=\"showChapter=!showChapter\">\n            <i class=\"fa fa-fw\" ng-class=\"{\'fa-caret-down\': showChapter, \'fa-caret-right\': !showChapter}\" fw=\"fw\"></i>\n            {{ text || \'Undefined title\' | translate }}\n         </div>\n      </uib-accordion-heading>\n      <bootstrap-decorator ng-repeat=\"item in accordionGroup.items\" form=\"item\"></bootstrap-decorator>\n   </uib-accordion-group>\n</uib-accordion>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-heading.html","<h3 nwp-heading=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\n   {{ heading | translate }}\n</h3>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-paragraph.html","<p nwp-paragraph=\"form\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\">\n   {{ text | translate }}\n</p>\n");
$templateCache.put("directives/decorators/bootstrap/nwp-components/nwp-stripline.html","<hr class=\"nwp-stripline {{form.fieldHtmlClass}}\" ng-model=\"$$value$$\"/>\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS1mb3JtLWNvbXBvbmVudHMuanMiLCJ0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9IQSw4RUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2hlbWEtZm9ybS1jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChuZykge1xuICAgJ3VzZSBzdHJpY3QnO1xuXG4gICBuZy5tb2R1bGUoJ3NjaGVtYUZvcm0nKS5jb25maWcoWydzY2hlbWFGb3JtUHJvdmlkZXInLCAnc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlcicsICdzZlBhdGhQcm92aWRlcicsXG4gICAgICBmdW5jdGlvbiAoc2NoZW1hRm9ybVByb3ZpZGVyLCBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBzZlBhdGhQcm92aWRlcikge1xuICAgICAgICAgLyogbndwIHBhcmFncmFwaCAqL1xuICAgICAgICAgdmFyIG53cFBhcmFncmFwaCA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ253cFBhcmFncmFwaCcpIHtcbiAgICAgICAgICAgICAgIHZhciBmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICBmLmtleSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XG4gICAgICAgICAgICAgICBmLnR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnbndwUGFyYWdyYXBoJztcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XG4gICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG5cbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BQYXJhZ3JhcGgpO1xuXG4gICAgICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICAgICdud3BQYXJhZ3JhcGgnLFxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLXBhcmFncmFwaC5odG1sJ1xuICAgICAgICAgKTtcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgICAgJ253cFBhcmFncmFwaCcsXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtcGFyYWdyYXBoLmh0bWwnXG4gICAgICAgICApO1xuXG4gICAgICAgICAvKiBud3AgaGVhZGluZyAqL1xuICAgICAgICAgdmFyIG53cEhlYWRpbmcgPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BIZWFkaW5nJykge1xuICAgICAgICAgICAgICAgdmFyIGYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gc2NoZW1hRm9ybVByb3ZpZGVyLnN0ZEZvcm1PYmoobmFtZSwgc2NoZW1hLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgIGYua2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG9wdGlvbnMucGF0aDtcbiAgICAgICAgICAgICAgIGYudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9ICdud3BIZWFkaW5nJztcbiAgICAgICAgICAgICAgIG9wdGlvbnMubG9va3VwW3NmUGF0aFByb3ZpZGVyLnN0cmluZ2lmeShvcHRpb25zLnBhdGgpXSA9IGY7XG4gICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG5cbiAgICAgICAgIHNjaGVtYUZvcm1Qcm92aWRlci5kZWZhdWx0cy5zdHJpbmcudW5zaGlmdChud3BIZWFkaW5nKTtcblxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgICAnbndwSGVhZGluZycsXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtaGVhZGluZy5odG1sJ1xuICAgICAgICAgKTtcbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgICAgJ253cEhlYWRpbmcnLFxuICAgICAgICAgICAgJ2RpcmVjdGl2ZXMvZGVjb3JhdG9ycy9ib290c3RyYXAvbndwLWNvbXBvbmVudHMvbndwLWhlYWRpbmcuaHRtbCdcbiAgICAgICAgICk7XG5cbiAgICAgICAgIC8qIG53cCBzdHJpcGxpbmUgKi9cbiAgICAgICAgIHZhciBud3BTdHJpcGxpbmUgPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BTdHJpcGxpbmUnKSB7XG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cFN0cmlwbGluZSc7XG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xuICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9O1xuXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwU3RyaXBsaW5lKTtcblxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgICAnbndwU3RyaXBsaW5lJyxcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1zdHJpcGxpbmUuaHRtbCdcbiAgICAgICAgICk7XG5cbiAgICAgICAgIC8qIG53cCBhY2NvcmRpb24gKi9cbiAgICAgICAgIHZhciBud3BBY2NvcmRpb24gPSBmdW5jdGlvbiAobmFtZSwgc2NoZW1hLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhY2NvcmRpb24nICYmIHNjaGVtYS5mb3JtYXQgPT09ICdud3BBY2NvcmRpb24nKSB7XG4gICAgICAgICAgICAgICB2YXIgZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgZi5rZXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gb3B0aW9ucy5wYXRoO1xuICAgICAgICAgICAgICAgZi50eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gJ253cEFjY29yZGlvbic7XG4gICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xuICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9O1xuXG4gICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuc3RyaW5nLnVuc2hpZnQobndwQWNjb3JkaW9uKTtcblxuICAgICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgICAnbndwQWNjb3JkaW9uJyxcbiAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL253cC1jb21wb25lbnRzL253cC1hY2NvcmRpb24uaHRtbCdcbiAgICAgICAgICk7XG5cbiAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgICAgJ253cEFjY29yZGlvbicsXG4gICAgICAgICAgICAnZGlyZWN0aXZlcy9kZWNvcmF0b3JzL2Jvb3RzdHJhcC9ud3AtY29tcG9uZW50cy9ud3AtYWNjb3JkaW9uLmh0bWwnXG4gICAgICAgICApO1xuICAgICAgfVxuICAgXSk7XG5cbiAgIG5nLm1vZHVsZSgnbndwQ29tcG9uZW50cycsIFtdKVxuICAgICAgLmRpcmVjdGl2ZSgnbndwUGFyYWdyYXBoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogICAgdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmU6ICAnbmdNb2RlbCcsXG4gICAgICAgICAgICBsaW5rOiAgICAgZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgICAgc2NvcGUudGV4dCA9IHNjb3BlLmZvcm0gJiYgKHNjb3BlLmZvcm0udGV4dCB8fCBzY29wZS5mb3JtLnNjaGVtYSAmJiBzY29wZS5mb3JtLnNjaGVtYS5kZWZhdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH07XG4gICAgICB9KS5kaXJlY3RpdmUoJ253cEhlYWRpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiAgICB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZTogICduZ01vZGVsJyxcbiAgICAgICAgICAgIGxpbms6ICAgICBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICAgICAgICAgICBzY29wZS5oZWFkaW5nID0gc2NvcGUuZm9ybSAmJiAoc2NvcGUuZm9ybS5oZWFkaW5nIHx8IHNjb3BlLmZvcm0uc2NoZW1hICYmIHNjb3BlLmZvcm0uc2NoZW1hLmRlZmF1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgIH0pLmRpcmVjdGl2ZSgnbndwQWNjb3JkaW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICByZXF1aXJlOiAgJ25nTW9kZWwnLFxuICAgICAgICAgICAgbGluazogICAgIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgICAgIHNjb3BlLnRleHQgPSBzY29wZS5mb3JtICYmIChzY29wZS5mb3JtWyd4LXNjaGVtYS1mb3JtJ10gJiYgc2NvcGUuZm9ybVsneC1zY2hlbWEtZm9ybSddLnRleHQgfHwgc2NvcGUuZm9ybS5zY2hlbWEgJiYgc2NvcGUuZm9ybS5zY2hlbWEuZGVmYXVsdCk7XG4gICAgICAgICAgICAgICBzY29wZS5jbG9zZU90aGVycyAgICAgID0gc2NvcGUuZm9ybSAmJiBzY29wZS5mb3JtLmNsb3NlT3RoZXJzIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgc2NvcGUuc2hvd0NoYXB0ZXIgICAgICA9IHNjb3BlLmZvcm0gJiYgc2NvcGUuZm9ybS5zaG93Q2hhcHRlciB8fCB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgIH0pO1xufSkoYW5ndWxhcik7XG4iLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
