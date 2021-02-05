import {
  APIKeyCredentials,
  CardDetails,
  ParsedAuthorizationResponse,
  ParsedCancelResponse,
  ParsedCaptureResponse,
  ProcessorConnection,
  RawAuthorizationRequest,
  RawCancelRequest,
  RawCaptureRequest,
} from '@primer-io/app-framework';

import HttpClient from '../common/HTTPClient';

import curlrequest from '../node_modules/curlrequest';

const StripeConnection: ProcessorConnection<APIKeyCredentials, CardDetails> = {
  name: 'STRIPE',

  website: 'stripe.com',

  configuration: {
    accountId: 'acct_1IGi7ZFHttg1tWRe',
    apiKey: 'pk_test_51IGi7ZFHttg1tWRe6ymenOYpoeUm3GyI4gnEI4epktG8koOdYBqZPcgR3EWF60NM69ae3uEYhwoe2jGE3NcjhkIu00kx4LOsil',
  },

  /**
   *
   * You should authorize a transaction and return an appropriate response
   */
  authorize(
    request: RawAuthorizationRequest<APIKeyCredentials, CardDetails>,
  ): Promise<ParsedAuthorizationResponse> {

    var curl = require('curlrequest');

    curl.request(
      {
        method: 'POST',
        amount: 100,
        currencyCode: 'GBP',
      }, {url: 'https://api.stripe.com/v1/payment_intents/pi_1IGiE8FHttg1tWRexmtJGFT3/confirm'});

      return curl;

    //throw new Error('Method Not Implemented');
  },

  /**
   * Capture a payment intent
   * This method should capture the funds on an authorized transaction
   */
  capture(
    request: RawCaptureRequest<APIKeyCredentials>,
  ): Promise<ParsedCaptureResponse> {

    var curl = require('curlrequest');

    curl.request(
      {
        method: 'POST',
        amount_to_capture: 100,
      }, {url: 'https://api.stripe.com/v1/payment_intents/pi_1EUnIAAIPu2ggEaOKCCgOEQs/capture'});

      return curl;

    //throw new Error('Method Not Implemented');
  },

  /**
   * Cancel a payment intent
   * This one should cancel an authorized transaction
   */
  cancel(
    request: RawCancelRequest<APIKeyCredentials>,
  ): Promise<ParsedCancelResponse> {

    var curl = require('curlrequest');

    curl.request(
      {
        method: 'POST',
      }, {url: 'https://api.stripe.com/v1/payment_intents/pi_1IGiE8FHttg1tWRexmtJGFT3/cancel'});

      return curl;

    //throw new Error('Method Not Implemented');
  },
};

export default StripeConnection;
