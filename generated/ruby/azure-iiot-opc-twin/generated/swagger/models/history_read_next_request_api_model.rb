# encoding: utf-8
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module azure.iiot.opc.twin
  module Models
    #
    # Request node history read continuation
    #
    class HistoryReadNextRequestApiModel
      # @return [String] Continuation token to continue reading more
      # results.
      attr_accessor :continuation_token

      # @return [Boolean] Abort reading after this read. Default value: false .
      attr_accessor :abort

      # @return [RequestHeaderApiModel] Optional request header
      attr_accessor :header


      #
      # Mapper for HistoryReadNextRequestApiModel class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'HistoryReadNextRequestApiModel',
          type: {
            name: 'Composite',
            class_name: 'HistoryReadNextRequestApiModel',
            model_properties: {
              continuation_token: {
                client_side_validation: true,
                required: true,
                serialized_name: 'continuationToken',
                type: {
                  name: 'String'
                }
              },
              abort: {
                client_side_validation: true,
                required: false,
                serialized_name: 'abort',
                default_value: false,
                type: {
                  name: 'Boolean'
                }
              },
              header: {
                client_side_validation: true,
                required: false,
                serialized_name: 'header',
                type: {
                  name: 'Composite',
                  class_name: 'RequestHeaderApiModel'
                }
              }
            }
          }
        }
      end
    end
  end
end
