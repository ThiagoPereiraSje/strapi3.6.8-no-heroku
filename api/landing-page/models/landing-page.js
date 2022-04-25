'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook")

module.exports = {
  /**
   * Triggered after content create
   */
  lifecycles: {
    async afterCreate(result, data) {
      netlifyWebhook && axios.post(netlifyWebhook, {});
    },
    async afterUpdate(result, params, data) {
      netlifyWebhook && axios.post(netlifyWebhook, {});
    },
  },
};
