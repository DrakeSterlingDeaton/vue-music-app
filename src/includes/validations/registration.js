import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal,
  confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

function installRegistrationValidation(app) {
  // binding vee-validate components to the app
  app.component('VeeForm', VeeForm);
  app.component('VeeField', VeeField);
  app.component('ErrorMessage', ErrorMessage);

  // adding rules to the app
  defineRule('required', required);
  defineRule('tos_agree', required);
  defineRule('min', min);
  defineRule('max', max);
  defineRule('alpha_spaces', alphaSpaces);
  defineRule('email', email);
  defineRule('min_value', minVal);
  defineRule('max_value', maxVal);
  defineRule('passwords_mismatched', confirmed);
  defineRule('excluded', excluded);
  defineRule('country_excluded', excluded);

  // configuring the rules with error messages
  configure({
    generateMessage: (ctx) => {
      const messages = {
        required: `The field ${ctx.field} is required.`,
        min: `The field ${ctx.field} is too short.`,
        max: `The field ${ctx.field} is too long.`,
        alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
        email: `The field ${ctx.field} must be a valid email.`,
        min_value: `The field ${ctx.field} is too low.`,
        max_value: `The field ${ctx.field} is too high.`,
        excluded: `You aren't allowed to use this value for the field ${ctx.field}`,
        country_excluded: `We don't except users from ${ctx.field}.`,
        passwords_mismatched: 'The passwords don\'t match',
        tos_agree: 'You must agree.',
      };

      const message = messages[ctx.rule.name]
        ? messages[ctx.rule.name]
        : `The field ${ctx.field} is invalid.`;

      return message;
    },
  });
}

export default installRegistrationValidation;
