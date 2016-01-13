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
