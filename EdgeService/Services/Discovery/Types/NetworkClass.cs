﻿// ------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  Licensed under the MIT License (MIT). See License.txt in the repo root for license information.
// ------------------------------------------------------------

namespace Microsoft.Azure.IoTSolutions.OpcTwin.EdgeService.Discovery {
    using System;

    [Flags]
    public enum NetworkClass {

        None = 0x0,

        /// <summary>
        /// Ethernet
        /// </summary>
        Wired = 0x1,

        /// <summary>
        /// Modem like, e.g. dsl, ppp
        /// </summary>
        Modem = 0x2,

        /// <summary>
        /// Mobile or 802.11
        /// </summary>
        Wireless = 0x4,

        /// <summary>
        /// Tunnels
        /// </summary>
        Tunnel = 0x8,

        /// <summary>
        /// Any reasonable network
        /// </summary>
        All = Wired | Modem | Wireless | Tunnel
    }
}
