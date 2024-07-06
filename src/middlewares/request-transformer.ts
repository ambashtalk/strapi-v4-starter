/**
 * `request-transformer` middleware
 */

import { Strapi } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In request-transformer middleware.');

    await next();

    if (ctx.response && ctx.response.body) {
      const { body } = ctx.response;
  
      // Apply your transformation logic using the transformer service
      const transformedBody = await strapi.plugin('transformer').service('transformer').transformResponse(ctx, body);
  
      ctx.response.body = transformedBody;
    }
  };
};
