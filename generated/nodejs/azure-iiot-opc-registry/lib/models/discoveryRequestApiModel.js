/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Discovery request
 *
 */
class DiscoveryRequestApiModel {
  /**
   * Create a DiscoveryRequestApiModel.
   * @property {string} [id] Id of discovery request
   * @property {string} [discovery] Discovery mode to use. Possible values
   * include: 'Off', 'Local', 'Network', 'Fast', 'Scan'
   * @property {object} [configuration] Scan configuration to use
   * @property {string} [configuration.addressRangesToScan] Address ranges to
   * scan (null == all wired nics)
   * @property {number} [configuration.networkProbeTimeoutMs] Network probe
   * timeout
   * @property {number} [configuration.maxNetworkProbes] Max network probes
   * that should ever run.
   * @property {string} [configuration.portRangesToScan] Port ranges to scan
   * (null == all unassigned)
   * @property {number} [configuration.portProbeTimeoutMs] Port probe timeout
   * @property {number} [configuration.maxPortProbes] Max port probes that
   * should ever run.
   * @property {number} [configuration.minPortProbesPercent] Probes that must
   * always be there as percent of max.
   * @property {number} [configuration.idleTimeBetweenScansSec] Delay time
   * between discovery sweeps in seconds
   * @property {array} [configuration.discoveryUrls] List of preset discovery
   * urls to use
   * @property {array} [configuration.locales] List of locales to filter with
   * during discovery
   * @property {array} [configuration.callbacks] Callbacks to invoke once
   * onboarding finishes
   * @property {object} [configuration.activationFilter] Activate all twins
   * with this filter during onboarding.
   * @property {array} [configuration.activationFilter.trustLists] Certificate
   * trust list identifiers to use for
   * activation, if null, all certificates are
   * trusted.  If empty list, no certificates are
   * trusted which is equal to no filter.
   * @property {array} [configuration.activationFilter.securityPolicies]
   * Endpoint security policies to filter against.
   * If set to null, all policies are in scope.
   * @property {string} [configuration.activationFilter.securityMode] Security
   * mode level to activate. If null,
   * then Microsoft.Azure.IIoT.OpcUa.Registry.Models.SecurityMode.Best is
   * assumed. Possible values include: 'Best', 'Sign', 'SignAndEncrypt', 'None'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiscoveryRequestApiModel
   *
   * @returns {object} metadata of DiscoveryRequestApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiscoveryRequestApiModel',
      type: {
        name: 'Composite',
        className: 'DiscoveryRequestApiModel',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          discovery: {
            required: false,
            serializedName: 'discovery',
            type: {
              name: 'Enum',
              allowedValues: [ 'Off', 'Local', 'Network', 'Fast', 'Scan' ]
            }
          },
          configuration: {
            required: false,
            serializedName: 'configuration',
            type: {
              name: 'Composite',
              className: 'DiscoveryConfigApiModel'
            }
          }
        }
      }
    };
  }
}

module.exports = DiscoveryRequestApiModel;
