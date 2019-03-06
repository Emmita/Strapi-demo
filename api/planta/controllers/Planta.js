'use strict';

/**
 * Planta.js controller
 *
 * @description: A set of functions called "actions" for managing `Planta`.
 */

module.exports = {

  /**
   * Retrieve planta records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.planta.search(ctx.query);
    } else {
      return strapi.services.planta.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a planta record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.planta.fetch(ctx.params);
  },

  /**
   * Count planta records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.planta.count(ctx.query);
  },

  /**
   * Create a/an planta record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.planta.add(ctx.request.body);
  },

  /**
   * Update a/an planta record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.planta.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an planta record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.planta.remove(ctx.params);
  }
};
