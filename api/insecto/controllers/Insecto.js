'use strict';

/**
 * Insecto.js controller
 *
 * @description: A set of functions called "actions" for managing `Insecto`.
 */

module.exports = {

  /**
   * Retrieve insecto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.insecto.search(ctx.query);
    } else {
      return strapi.services.insecto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a insecto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.insecto.fetch(ctx.params);
  },

  /**
   * Count insecto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.insecto.count(ctx.query);
  },

  /**
   * Create a/an insecto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.insecto.add(ctx.request.body);
  },

  /**
   * Update a/an insecto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.insecto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an insecto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.insecto.remove(ctx.params);
  }
};
